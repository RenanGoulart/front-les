/* eslint-disable react/jsx-no-constructed-context-values */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Order from "../services/order/Order";
import { ICreateOrderDTO, OrderStatus } from "../services/order/dto/OrderDTO";
import { useCart } from "../contexts/useCart";
import useUser from "./useUser";

const useOrder = () => {
  const queryClient = useQueryClient();
  const { cart } = useCart();
  const { user } = useUser();

  const { data: allOrders } = useQuery({
    queryKey: ["allOrders"],
    queryFn: () => Order.list(),
  });

  const { data: userOrders } = useQuery({
    queryKey: ["userOrders", user?.id],
    queryFn: () => Order.findByUserId(user?.id as string),
    enabled: !!user?.id,
  });

  const { mutateAsync: finishOrder } = useMutation({
    mutationFn: Order.create,
    onSuccess: () => {
      queryClient.setQueryData(["cart", user?.id], () => {
        return null;
      });
    },
  });

  const { mutateAsync: updateOrder } = useMutation({
    mutationFn: Order.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allOrders"] });
      queryClient.invalidateQueries({ queryKey: ["userOrders", user?.id] });
    },
  });

  const { mutateAsync: updateExchange } = useMutation({
    mutationFn: Order.updateExchange,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allOrders"] });
      queryClient.invalidateQueries({ queryKey: ["userOrders", user?.id] });
    },
  });

  const { mutateAsync: requestOrderExchange } = useMutation({
    mutationFn: Order.requestOrderExchange,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allOrders"] });
      queryClient.invalidateQueries({ queryKey: ["userOrders", user?.id] });
    },
  });

  const handleFinishOrder = async (body: ICreateOrderDTO) => {
    if (cart) {
      const order = await finishOrder(body);
      return order;
    }
  };

  const handleUpdateOrder = async (id: string, status: string) => {
    await updateOrder({ id, status });
  };

  const handleUpdateExchange = async (id: string, status: string) => {
    await updateExchange({ id, status });
  };

  const handleRequestOrderExchange = async (id: string, status: string) => {
    await requestOrderExchange({ id, status });
  };

  const statusMap = {
    [OrderStatus.EM_PROCESSAMENTO]: "Em processamento",
    [OrderStatus.EM_TRANSITO]: "Em transporte",
    [OrderStatus.APROVADA]: "Aprovada",
    [OrderStatus.REPROVADA]: "Reprovada",
    [OrderStatus.ENTREGUE]: "Entregue",
    [OrderStatus.TROCA_SOLICITADA]: "Troca solicitada",
    [OrderStatus.TROCA_AUTORIZADA]: "Troca autorizada",
    [OrderStatus.TROCADO]: "Trocado",
  };

  const renderStatus = (status: OrderStatus) => {
    return statusMap[status];
  };

  return {
    allOrders,
    userOrders,
    handleFinishOrder,
    handleUpdateOrder,
    handleRequestOrderExchange,
    handleUpdateExchange,
    renderStatus,
  };
};

export default useOrder;
