/* eslint-disable react/jsx-no-constructed-context-values */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Coupon from "../services/coupon/Coupon";
import { ICreateCouponDTO } from "../services/coupon/dto/CouponDTO";

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
    },
  });

  const handleCreateCoupon = async (body: ICreateCouponDTO) => {
    await createCoupon(body);
  };

  return {
    coupons,
    handleCreateCoupon,
  };
};

export default useCoupon;
