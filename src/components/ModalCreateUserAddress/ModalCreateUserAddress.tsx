import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import { Background, Container, Row } from "./styles";
import Select from "../Select/Select";
import Button from "../Button/Button";
import {
  CreateAddressSchema,
  CreateAddressForm,
} from "../../validations/createClient.validation";
import {
  addressTypesOptions,
  residenceTypeOptions,
  streetTypeOptions,
} from "../../data/createClientOptions";
import {
  listCitiesByStateId,
  listCountries,
  listStatesByCountryId,
} from "../../services/address";
import useUser from "../../hooks/useUser";

interface DropdownOption {
  value: string;
  label: string;
}

interface Props {
  closeModal: () => void;
}

const ModalCreateUserAddress = ({ closeModal }: Props) => {
  const { user, handleCreateAddress } = useUser();

  const [countries, setCountries] = useState<DropdownOption[]>([]);
  const [states, setStates] = useState<DropdownOption[]>([]);
  const [cities, setCities] = useState<DropdownOption[]>([]);

  const { control, handleSubmit, watch } = useForm<CreateAddressForm>({
    resolver: yupResolver(CreateAddressSchema),
  });

  const country = watch("country");
  const state = watch("state");

  const onSubmit = (data: CreateAddressForm) => {
    const formattedAddress = {
      zipCode: data.zipCode,
      street: data.street,
      number: data.number,
      district: data.district,
      cityId: data.city,
      observation: data.observation || "",
      addressType: data.addressType,
      streetType: data.streetType,
      residenceType: data.residenceType,
      userId: user?.id as string,
      isMain: true,
    };
    handleCreateAddress(formattedAddress);
    closeModal();
  };

  const getCountries = async () => {
    const allCountries = await listCountries();
    if (allCountries) {
      const formattedCountries = allCountries.map((countryItem) => ({
        value: countryItem.id,
        label: countryItem.name,
      }));
      setCountries(formattedCountries);
    }
  };

  const getStates = async (countryId: string) => {
    const allStates = await listStatesByCountryId(countryId);
    if (allStates) {
      const formattedStates = allStates.map((stateItem) => ({
        value: stateItem.id,
        label: stateItem.name,
      }));
      setStates(formattedStates);
    }
  };

  const getCities = async (stateId: string) => {
    const allCities = await listCitiesByStateId(stateId);
    if (allCities) {
      const formattedCities = allCities.map((city) => ({
        value: city.id,
        label: city.name,
      }));
      setCities(formattedCities);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (country) {
      getStates(country);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      getCities(state);
    }
  }, [state]);

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Informações de Endereço</h1>
        <Row>
          <Input
            control={control}
            name="zipCode"
            label="CEP"
            placeholder="99999-999"
            mask="99999-999"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Select
            control={control}
            name="country"
            label="País"
            options={countries || []}
            containerStyle={styles.elementStyle}
          />
          <Select
            control={control}
            name="state"
            label="Estado"
            options={states || []}
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Select
            control={control}
            name="city"
            label="Cidade"
            options={cities || []}
            containerStyle={styles.elementStyle}
          />
          <Input
            control={control}
            name="street"
            label="Rua"
            placeholder="Rua Joaquim Afonso"
            containerStyle={{ width: "30%" }}
          />
          <Input
            control={control}
            name="number"
            label="Número"
            placeholder="100"
            containerStyle={{ width: "14%" }}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="district"
            label="Bairro"
            placeholder="Bairro Bom Sucesso"
            containerStyle={styles.elementStyle}
          />
          <Input
            control={control}
            name="observation"
            label="Observação"
            placeholder="Observações"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Select
            control={control}
            name="addressType"
            label="Tipo de Endereço"
            options={addressTypesOptions}
            containerStyle={styles.elementStyle}
          />
          <Select
            control={control}
            name="streetType"
            label="Tipo de Logradouro"
            options={streetTypeOptions}
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Select
            control={control}
            name="residenceType"
            label="Tipo de Residência"
            options={residenceTypeOptions}
            containerStyle={styles.elementStyle}
          />
          <Button onClick={handleSubmit(onSubmit)} data-cy="btn-submit">
            Cadastrar
          </Button>
        </Row>
      </Container>
    </Background>
  );
};

const styles = {
  elementStyle: {
    width: "48%",
  },
};

export default ModalCreateUserAddress;
