import { useMutation } from "@tanstack/react-query";
import Product from "../services/product/Product";

const useChat = () => {
  const { mutateAsync } = useMutation({
    mutationKey: ["chat"],
    mutationFn: Product.chat,
  });

  const handleSendMessage = async (id: string, message: string) => {
    const data = await mutateAsync({ id, message });
    return data;
  };

  return {
    handleSendMessage,
  };
};

export default useChat;
