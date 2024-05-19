import { Control, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Input from "../Input/Input";
import {
  AddButton,
  Background,
  Container,
  RemoveButton,
  ReturnIcon,
  Row,
  StyledDeleteIcon,
  TrackNumber,
  TrackRow,
  TracksWrapper,
  CalculateButton,
} from "./styles";
import Button from "../Button/Button";
import {
  CreateProductForm,
  CreateProductSchema,
} from "../../validations/createProduct.validation";
import {
  categoriesOptions,
  pricingGroupOptions,
} from "../../data/createProductOptions";
import Select from "../Select/Select";
import MultiSelect from "../MultiSelect/MultiSelect";
import { theme } from "../../styles/theme";
import useProduct from "../../hooks/useProduct";
import FileInput from "../FileInput/FileInput";

interface Props {
  closeModal: () => void;
}

const priceGroup: { [key: string]: number } = {
  EDICAO_ESPECIAL: 1.2,
  EDICAO_LIMITADA: 1.3,
  EDICAO_NORMAL: 1.1,
};

const ModalCreateProduct = ({ closeModal }: Props) => {
  const { handleCreateProduct } = useProduct();
  const [salePrice, setSalePrice] = useState<number | null>(null);
  const [priceCalculated, setPriceCalculated] = useState(false);

  const [step, setStep] = useState(1);
  const { control, handleSubmit, getValues } = useForm<CreateProductForm>({
    resolver: yupResolver(CreateProductSchema),
    defaultValues: {
      tracks: [{ name: "", duration: "" }],
    },
  });

  const calculatePrice = () => {
    const price = Number(getValues("costPrice"));
    const pricingGroup = getValues("pricingGroup");
    const percentual = priceGroup[pricingGroup];

    if (!isNaN(price) && percentual) {
      const calculatedSalePrice = price * percentual;
      setSalePrice(calculatedSalePrice);
      setPriceCalculated(true);
    } else {
      setSalePrice(null);
      setPriceCalculated(false);
    }
  };

  const {
    append: appendTrack,
    fields: tracks,
    remove: removeTrack,
  } = useFieldArray({
    control,
    name: "tracks",
    rules: { minLength: 1 },
  });

  const onSubmit = (data: CreateProductForm) => {
    handleCreateProduct(data);
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
              <FileInput
                control={control}
                name="photo"
                label="Foto"
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
              <MultiSelect
                name="categories"
                control={control as unknown as Control}
                options={categoriesOptions}
                label="Categorias"
                placeholder="Selecione uma ou mais categorias"
                containerStyle={{
                  width: "100%",
                }}
                style={{ borderColor: theme.colors.purple_80 }}
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
                name="costPrice"
                label="Preço de custo"
                placeholder="Ex: 200"
                type="number"
                containerStyle={{ width: "65%" }}
              />
              <CalculateButton onClick={calculatePrice}>
                Calcular Preço de Venda
              </CalculateButton>
            </Row>
            {priceCalculated && salePrice !== null && (
              <Row>
                <p>O valor de venda é: {salePrice.toFixed(2)}</p>
              </Row>
            )}
            <Row>
              <ReturnIcon onClick={() => setStep(1)}>Anterior</ReturnIcon>
              <Button onClick={() => setStep(3)}>Próximo</Button>
            </Row>
          </>
        )}
        {step === 3 && (
          <>
            <TracksWrapper>
              {tracks.map((track, index) => (
                <TrackRow key={track.id}>
                  <TrackNumber>{index + 1}.</TrackNumber>
                  <Input
                    control={control}
                    name={`tracks.${index}.name`}
                    label="Nome da faixa"
                    placeholder="Ex: Black"
                    containerStyle={{ width: "65%" }}
                  />
                  <Input
                    control={control}
                    name={`tracks.${index}.duration`}
                    label="Duração"
                    placeholder="Ex: 03:14"
                    mask="99:99"
                    containerStyle={{ width: "20%" }}
                  />
                  <RemoveButton onClick={() => removeTrack(index)}>
                    <StyledDeleteIcon />
                  </RemoveButton>
                </TrackRow>
              ))}
              <AddButton
                onClick={() => appendTrack({ name: "", duration: "" })}
              >
                Adicionar faixa
              </AddButton>
            </TracksWrapper>
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
