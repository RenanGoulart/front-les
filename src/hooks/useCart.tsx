/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IProduct } from "../mock/products";

export interface ICartItem {
  id: number;
  quantity: number;
  product: IProduct;
}

interface ICart {
  total: number;
  cartItems: ICartItem[];
}

interface IUser {
  name: string;
  credits: number;
  freight: number;
}

export interface ICoupon {
  id: number;
  code: string;
  discount: number;
}

interface ICartProvider {
  cart: ICart;
  quantityOfProducts: number;
  handleAddToCart: (product: IProduct) => void;
  handleSubFromCart: (product: IProduct) => void;
  handleRemoveFromCart: (product: IProduct) => void;

  user: IUser;
  setUser: (user: IUser) => void;

  coupons: ICoupon[];
  handleApplyCoupon: (code: string) => ICoupon | null;
}

const CartContext = createContext({} as ICartProvider);

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState({
    total: 0,
    cartItems: [] as ICartItem[],
  });

  const [user, setUser] = useState({
    name: "Rodrigo Gonçalves",
    credits: 24,
    freight: 10,
  } as IUser);

  const coupons = [
    {
      id: 1,
      code: "off10",
      discount: 10,
    },
    {
      id: 2,
      code: "off15",
      discount: 15,
    },
  ];

  useEffect(() => {
    const localCart = localStorage.getItem("@cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  const persistCart = (currentCart: ICart) => {
    localStorage.setItem("@cart", JSON.stringify(currentCart));
  };

  const quantityOfProducts = useMemo(
    () => cart.cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0,
    [cart.cartItems],
  );

  const handleAddToCart = (product: IProduct) => {
    const cartItem = cart?.cartItems?.find(
      (item) => item.product.id === product.id,
    );

    if (cartItem) {
      cartItem.quantity += 1;
      const newCart = {
        ...cart,
        total: cart.total + product.price,
        cartItems: [...cart.cartItems],
      };
      setCart(newCart);
      persistCart(newCart);
    } else {
      const newCart = {
        ...cart,
        total: cart.total + product.price,
        cartItems: [
          ...cart.cartItems,
          {
            id: cart.cartItems.length + 1,
            quantity: 1,
            product,
          },
        ],
      };
      setCart(newCart);
      persistCart(newCart);
    }
  };

  const handleSubFromCart = (product: IProduct) => {
    const cartItem = cart.cartItems.find(
      (item) => item.product.id === product.id,
    );

    if (cartItem) {
      if (cartItem.quantity === 1) {
        const newCartItems = cart.cartItems.filter(
          (item) => item.product.id !== product.id,
        );

        const newCart = {
          ...cart,
          total: cart.total - product.price,
          cartItems: newCartItems,
        };
        setCart(newCart);
        persistCart(newCart);
      } else {
        cartItem.quantity -= 1;
        const newCart = {
          ...cart,
          total: cart.total - product.price,
          cartItems: [...cart.cartItems],
        };
        setCart(newCart);
        persistCart(newCart);
      }
    }
  };

  const handleRemoveFromCart = (product: IProduct) => {
    const cartItem = cart.cartItems.find(
      (item) => item.product.id === product.id,
    );

    if (cartItem) {
      const newCartItems = cart.cartItems.filter(
        (item) => item.product.id !== product.id,
      );
      const newCart = {
        ...cart,
        total: cart.total - product.price * cartItem.quantity,
        cartItems: newCartItems,
      };
      setCart(newCart);
      persistCart(newCart);
    }
  };

  const handleApplyCoupon = (code: string) => {
    const coupon = coupons.find((item) => item.code === code);

    if (coupon) {
      return coupon;
    }
    window.alert("Cupom inválido");
    return null;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityOfProducts,
        handleAddToCart,
        handleSubFromCart,
        handleRemoveFromCart,

        user,
        setUser,

        coupons,
        handleApplyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
