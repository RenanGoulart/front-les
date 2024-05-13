import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Input from "../Input/Input";
import { Background, Container, ReturnIcon, Row } from "./styles";
import Button from "../Button/Button";
import {
  CreateProductForm,
  CreateProductSchema,
} from "../../validations/createProduct.validation";
import Select from "../Select/Select";
import { categoriesOptions, pricingGroupOptions } from "../../data/createProductOptions";
interface Props {
  closeModal: () => void;
}

const ModalCreateProduct = ({ closeModal }: Props) => {
  const [step, setStep] = useState(1);
  const { control, handleSubmit } = useForm<CreateProductForm>({
    resolver: yupResolver(CreateProductSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    closeModal();
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Adicionar Produto</h1>
        {step === 1 && (
          <>
            <Row>
              <Input
                control={control}
                name="album"
                label="Álbum"
                placeholder="Nome do álbum"
                containerStyle={{ width: "68%" }}
              />
              <Input
                control={control}
                name="year"
                label="Ano"
                placeholder="Ano do álbum"
                containerStyle={{ width: "28%" }}
              />
            </Row>
            <Row>
              <Input
                control={control}
                name="artist"
                label="Artista"
                placeholder="Nome do artista"
                containerStyle={styles.elementStyle}
              />
              <Input
                control={control}
                name="producer"
                label="Produtor"
                placeholder="Nome do produtor"
                containerStyle={styles.elementStyle}
              />
            </Row>
            <Row>
              <Input
                control={control}
                name="height"
                label="Altura (cm)"
                placeholder="Altura"
                type="number"
                containerStyle={{ width: "30%" }}
              />
              <Input
                control={control}
                name="width"
                label="Largura (cm)"
                placeholder="Largura"
                type="number"
                containerStyle={{ width: "30%" }}
              />
              <Input
                control={control}
                name="weight"
                label="Peso (g)"
                placeholder="Peso"
                type="number"
                containerStyle={{ width: "30%" }}
              />
            </Row>
            <Row>
              <Input
                control={control}
                name="photo"
                label="Foto"
                type="file"
                containerStyle={{ width: "100%" }}
              />
            </Row>
            <Row>
              <Input
                control={control}
                name="quantityInStock"
                label="Quantidade em Estoque"
                type="number"
                containerStyle={{ width: "50%" }}
              />
              <Button onClick={() => setStep(2)}>Próximo</Button>
            </Row>
          </>
        )}
        {step === 2 && (
          <>
            <Row>
              <Select
                control={control}
                name="categories"
                label="Categorias"
                options={categoriesOptions}
                containerStyle={{ width: "100%" }}
              />
            </Row>
            <Row>
              <Select
                control={control}
                name="pricingGroup"
                label="Grupo de precificação"
                options={pricingGroupOptions}
                containerStyle={{ width: "100%" }}
              />
            </Row>
            <Row>
              <Input
                control={control}
                name="price"
                label="Preço"
                placeholder="Ex: 200"
                type="number"
                containerStyle={{ width: "100%" }}
              />
            </Row>
            <Row>
              <ReturnIcon onClick={() => setStep(1)}>Anterior</ReturnIcon>
              <Button onClick={() => setStep(3)}>Próximo</Button>
            </Row>
          </>
        )}
        {step === 3 && (
          <>
            <Row>
              <Input
                control={control}
                name="numberOfTracks"
                label="Quantidade de Faixas"
                placeholder="Ex: 20"
                type="number"
                containerStyle={{ width: "100%" }}
              />
            </Row>
            <Row>
              <ReturnIcon onClick={() => setStep(2)}>Anterior</ReturnIcon>
              <Button onClick={handleSubmit(onSubmit)}>Salvar</Button>
            </Row>
          </>
        )}
      </Container>
    </Background>
  );
};

const styles = {
  elementStyle: {
    width: "48%",
  },
};

export default ModalCreateProduct;
