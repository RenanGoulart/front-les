/* eslint-disable react/jsx-no-constructed-context-values */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Coupon from "../services/coupon/Coupon";
import { ICreateCouponDTO } from "../services/coupon/dto/CouponDTO";
import { handleSuccess } from "../lib/toastify";

const useCoupon = () => {
  const queryClient = useQueryClient();

  const { data: coupons } = useQuery({
    queryKey: ["coupons"],
    queryFn: () => Coupon.list(),
  });

  const { mutateAsync: createCoupon } = useMutation({
    mutationFn: Coupon.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coupons"] });
      handleSuccess("Cupom criado com sucesso!");
    },
  });

  const { mutateAsync: deleteCoupon } = useMutation({
    mutationFn: Coupon.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coupons"] });
      handleSuccess("Cupom excluído com sucesso!");
    },
  });

  const handleCreateCoupon = async (body: ICreateCouponDTO) => {
    await createCoupon(body);
  };

  const handleDeleteCoupon = async (id: string) => {
    await deleteCoupon(id);
  };
  return {
    coupons,
    handleCreateCoupon,
    handleDeleteCoupon,
  };
};

export default useCoupon;
