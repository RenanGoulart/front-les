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

  const handleFinishOrder = async (body: ICreateOrderDTO) => {
    if (cart) {
      const order = await finishOrder(body);
      return order;
    }
  };

  const handleUpdateOrder = async (id: string, status: string) => {
    await updateOrder({ id, status });
  };

  const renderStatus = (status: OrderStatus) => {
    if (status === OrderStatus.EM_PROCESSAMENTO) {
      return "Em processamento";
    }
    if (status === OrderStatus.EM_TRANSITO) {
      return "Em transporte";
    }
    if (status === OrderStatus.APROVADA) {
      return "Pagamento Realizado";
    }
    if (status === OrderStatus.REPROVADA) {
      return "Pagamento Recusado / Cancelado";
    }
    if (status === OrderStatus.ENTREGUE) {
      return "Entregue";
    }
  };

  return {
    allOrders,
    userOrders,
    handleFinishOrder,
    handleUpdateOrder,
    renderStatus,
  };
};

export default useOrder;
