import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Input from "../Input/Input";
import { Background, Container, Row } from "./styles";
import Button from "../Button/Button";
import {
  IncreaseStockForm,
  IncreaseStockSchema,
} from "../../validations/stock.validation";
import useProduct from "../../hooks/useProduct";
import { IProductResponse } from "../../services/product/dto/ProductDTO";
import { findById } from "../../services/product";
import Product from "../../services/product/Product";

interface Props {
  id: string;
  closeModal: () => void;
}

const ModalIncreaseStock = ({ id, closeModal }: Props) => {
  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => Product.findById(id),
  });

  const { handleUpdateStock } = useProduct();
  const { control, handleSubmit, setValue } = useForm<IncreaseStockForm>({
    resolver: yupResolver(IncreaseStockSchema),
  });

  const onSubmit = (data: IncreaseStockForm) => {
    if (product) {
      handleUpdateStock(
        id,
        Number(data.quantityInStock),
        Number(data.costPrice),
      );
      closeModal();
    }
  };

  const setProductFields = async (productData: IProductResponse) => {
    setValue("quantityInStock", productData.quantityInStock);
    setValue("costPrice", productData.costPrice);
  };

  useEffect(() => {
    if (product) {
      getProductInfo(product.id);
    }
  }, [product]);

  const getProductInfo = async (productId: string) => {
    const productInfo = await findById(productId);
    if (productInfo) {
      setProductFields(productInfo);
    }
  };

  return (
    <Background onClick={closeModal}>
      <Container
        onClick={(e) => e.stopPropagation()}
        data-cy="modal-update-stock"
      >
        <h1>Atualizar estoque</h1>
        <Row>
          <Input
            control={control}
            name="quantityInStock"
            label="Quantidade disponível"
            placeholder="Ex: 20"
            data-cy="input-quantityInStock"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="costPrice"
            label="Preço de custo"
            placeholder="Ex: 200"
            data-cy="input-costPrice"
            containerStyle={{ width: "48%" }}
          />
          <Button onClick={handleSubmit(onSubmit)} data-cy="btn-update-stock">
            Salvar
          </Button>
        </Row>
      </Container>
    </Background>
  );
};

const styles = {
  elementStyle: {
    width: "100%",
  },
};

export default ModalIncreaseStock;
