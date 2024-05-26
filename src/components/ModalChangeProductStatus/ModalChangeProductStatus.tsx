import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import { Background, Container } from "./styles";
import Button from "../Button/Button";
import {
  ChangeProductStatusForm,
  ChangeProductStatusSchema,
} from "../../validations/createProduct.validation";
import {
  IProductResponse,
  ProductStatus,
} from "../../services/product/dto/ProductDTO";
import useProduct from "../../hooks/useProduct";

interface Props {
  product: IProductResponse;
  closeModal: () => void;
}

const ModalChangeProductStatus = ({ product, closeModal }: Props) => {
  const { handleUpdateStatus } = useProduct();

  const { control, handleSubmit } = useForm<ChangeProductStatusForm>({
    resolver: yupResolver(ChangeProductStatusSchema),
  });

  const renderTitle = () => {
    if (product.status === "ACTIVE") {
      return `Inativar produto: ${product.album} - ${product.artist}`;
    }
    return `Ativar produto: ${product.album} - ${product.artist}`;
  };

  const renderPlaceholder = () => {
    if (product.status === "ACTIVE") {
      return "Ex: Produto com defeito";
    }
    return "Ex: Produto com estoque";
  };

  const onSubmit = async (data: ChangeProductStatusForm) => {
    const status =
      product.status === ProductStatus.ACTIVE
        ? ProductStatus.INACTIVE
        : ProductStatus.ACTIVE;

    await handleUpdateStatus(product.id, status, data.statusReason);
    closeModal();
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>{renderTitle()}</h1>
        <Input
          control={control}
          name="statusReason"
          label="Motivo"
          placeholder={renderPlaceholder()}
        />
        <Button onClick={handleSubmit(onSubmit)}>Salvar</Button>
      </Container>
    </Background>
  );
};

export default ModalChangeProductStatus;
