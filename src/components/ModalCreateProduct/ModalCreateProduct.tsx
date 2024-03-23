import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import {
  Background,
  Container,
  ReturnIcon,
  Row,
} from "./styles";
import Button from "../Button/Button";
import { CreateProductForm, CreateProductSchema } from "../../validations/createProduct.validation";
import Select from "../Select/Select";
import { pricingGroupOptions } from "../../data/createProductOptions";
import { useState } from "react";

interface Props {
  closeModal: () => void;
}

const ModalCreateProduct = ({ closeModal }: Props) => {
  const [ step, setStep ] = useState(1);
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
                containerStyle={{ width: '100%' }}
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
                type='number'
                containerStyle={{ width: '30%' }}
              />
             <Input
                control={control}
                name="width"
                label="Largura (cm)"
                placeholder="Largura"
                type='number'
                containerStyle={{ width: '30%' }}
              />
              <Input
                control={control}
                name="weight"
                label="Peso (g)"
                placeholder="Peso"
                type='number'
                containerStyle={{ width: '30%' }}
              />
              </Row>
              <Row>
              <Input
                control={control}
                name="barCode"
                label="Código de Barras"
                placeholder="Ex: 9999999999999"
                type='number'
                mask="9999999999999"
                containerStyle={styles.elementStyle}
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
                name="pricingGroup"
                label="Grupo de precificação"
                options={pricingGroupOptions}
                containerStyle={{ width: '100%' }}
              />
            </Row>
            <Row>
              <Input
                control={control}
                name="price"
                label="Preço"
                placeholder="Ex: 200"
                type="number"
                containerStyle={{ width: '100%' }}
              />
            </Row>
            <Button onClick={() => setStep(3)}>Próximo</Button>
            <ReturnIcon onClick={() => setStep(1)}>Anterior</ReturnIcon>
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
                containerStyle={{ width: '100%' }}
              />
            </Row>
            <Button onClick={handleSubmit(onSubmit)}>Salvar</Button>
            <ReturnIcon onClick={() => setStep(2)}>Anterior</ReturnIcon>
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
