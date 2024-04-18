/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cart from "../services/cart/Cart";
import { ICartResponse } from "../services/cart/dto/CartDTO";
import Coupon from "../services/coupon/Coupon";
import { handleError } from "../lib/toastify";
import { ICouponResponse } from "../services/coupon/dto/CouponDTO";

interface ICartProvider {
  cart?: ICartResponse;
  quantityOfProducts: number;
  handleAddToCart: (productId: string) => void;
  handleSubFromCart: (productId: string) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleApplyCoupon: (name: string) => Promise<ICouponResponse | undefined>;
}

const CartContext = createContext({} as ICartProvider);

const userId = "fc89dc15-0d0e-4173-860c-dedafd7eb4f7";

const CartProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();

  const { data: cart } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => Cart.findByUserId(userId),
  });

  const quantityOfProducts = useMemo(() => {
    if (cart) {
      return cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }
    return 0;
  }, [cart?.cartItems]);

  const { mutate: createCart } = useMutation({
    mutationFn: Cart.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
  });

  const { mutate: addItem } = useMutation({
    mutationFn: Cart.addItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
  });

  const handleAddToCart = (productId: string) => {
    if (cart) {
      addItem({ cartId: cart.id, productId });
    } else {
      createCart({ userId, productId });
    }
  };

  const { mutate: subtractItem } = useMutation({
    mutationFn: Cart.subtractItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
  });

  const handleSubFromCart = (productId: string) => {
    if (cart) {
      subtractItem({ cartId: cart.id, productId });
    }
  };

  const { mutate: removeItem } = useMutation({
    mutationFn: Cart.removeItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
  });

  const handleRemoveFromCart = (productId: string) => {
    if (cart) {
      removeItem({ cartId: cart.id, productId });
    }
  };

  const { mutateAsync: findCoupon } = useMutation({
    mutationFn: Coupon.findByName,
    onError: () => handleError("Cupom inválido"),
  });

  const handleApplyCoupon = async (name: string) => {
    const coupon = await findCoupon(name);
    return coupon;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityOfProducts,
        handleAddToCart,
        handleSubFromCart,
        handleRemoveFromCart,
        handleApplyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
