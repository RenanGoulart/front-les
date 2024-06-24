import { useMutation } from "@tanstack/react-query";
import Product from "../services/product/Product";

const useChat = () => {
  const { mutateAsync, isPending: loadingChat } = useMutation({
    mutationKey: ["chat"],
    mutationFn: Product.chat,
  });

  const handleSendMessage = async (id: string, message: string) => {
    const data = await mutateAsync({ id, message });
    return data;
  };

  return {
    handleSendMessage,
    loadingChat,
  };
};

export default useChat;
