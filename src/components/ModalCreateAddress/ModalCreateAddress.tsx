import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import {
  Background,
  Container,
  Row,
  IsMainWrapper,
  Label,
} from "./styles";
import Select from "../Select/Select";
import Button from "../Button/Button";
import {
  CreateAddressSchema,
  CreateAddressForm,
} from "../../validations/createClient.validation";
import {
  addressTypesOptions,
  isMainOptions,
  residenceTypeOptions,
  streetTypeOptions,
} from "../../data/createClientOptions";
import { FormType } from "../../pages/Client/Client";
import { IFormAddress, useClient } from "../../contexts/useClient";
import {
  IAddressResponse,
  findAddressById,
  listCitiesByStateId,
  listCountries,
  listStatesByCountryId,
  updateAddress,
} from "../../services/address";
import RadioOptions from "../RadioOptions/RadioOptions";

interface DropdownOption {
  value: string;
  label: string;
}

interface Props {
  formName?: FormType;
  changeForm?: (form: FormType) => void;
  closeModal: () => void;
}

const ModalCreateAddress = ({ formName, changeForm, closeModal }: Props) => {
  const { currentAddressId, currentUserId, createUserAddress } = useClient();

  const { createFormData, setCreateFormData } = useClient();
  const [countries, setCountries] = useState<DropdownOption[]>([]);
  const [states, setStates] = useState<DropdownOption[]>([]);
  const [cities, setCities] = useState<DropdownOption[]>([]);

  const { control, handleSubmit, watch, setValue } = useForm<CreateAddressForm>(
    {
      resolver: yupResolver(CreateAddressSchema),
    },
  );

  const country = watch("country");
  const state = watch("state");
  const addressType = watch('addressType');

  const onSubmit = (data: CreateAddressForm) => {
    if (currentAddressId) {
      const formattedUpdateAddress = {
        ...data,
        id: currentAddressId,
      };
      updateAddress(formattedUpdateAddress);
      return closeModal();
    }

    if (currentUserId) {
      createUserAddress({
        ...data,
        cityId: data.city,
        userId: currentUserId,
        isMain: data.isMain,
      });
      return closeModal();
    }

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
      isMain: data.isMain,
    };

    if (formName === "address") {
      setCreateFormData({
        ...createFormData,
        addresses: [formattedAddress],
      });
    } else {
      setCreateFormData({
        ...createFormData,
        addresses: [
          createFormData?.addresses?.[0] as IFormAddress,
          formattedAddress,
        ],
      });
    }

    if (formName === "address") {
      return changeForm?.("address2");
    }
    changeForm?.("creditCard");
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

  const setAddressFields = async (cardInfoData: IAddressResponse) => {
    setValue("zipCode", cardInfoData.zipCode);
    setValue("country", cardInfoData.country.id);
    setValue("state", cardInfoData.state.id);
    setValue("city", cardInfoData.cityId);
    setValue("street", cardInfoData.street);
    setValue("number", cardInfoData.number);
    setValue("district", cardInfoData.district);
    setValue("observation", cardInfoData.observation);
    setValue("addressType", cardInfoData.addressType);
    setValue("streetType", cardInfoData.streetType);
    setValue("residenceType", cardInfoData.residenceType);
    setValue("isMain", cardInfoData.isMain);
  };

  const getAddressInfo = async (addressId: string) => {
    const addressInfo = await findAddressById(addressId);
    if (addressInfo) {
      return setAddressFields(addressInfo);
    }
  };

  useEffect(() => {
    if (currentAddressId) {
      getAddressInfo(currentAddressId);
    }
  }, []);

  useEffect(() => {
    if (!currentAddressId) {
      setValue("addressType", formName === "address" ? "COBRANCA" : "ENTREGA");
      setValue('isMain', false);
    }
  }, []);

  const renderTitle = () => {
    if (currentAddressId) {
      return "Atualizar Endereço";
    }
    if (!formName) {
      return "Informações de Endereço";
    }
    return formName === "address"
      ? "Informações de Endereço de Cobrança"
      : "Informações de Endereço de Entrega";
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>{renderTitle()}</h1>
        <Row>
          <Input
            control={control}
            name="zipCode"
            label="CEP"
            placeholder="99999-999"
            mask="99999-999"
            containerStyle={styles.elementStyle}
            data-cy="input-zipCode"
          />
          {formName !== 'address' && addressType!== 'COBRANCA' && (
          <IsMainWrapper>
            <Label>Endereço preferencial?</Label>
            <RadioOptions
              control={control}
              name="isMain"
              options={isMainOptions}
              defaultValue={false}
            />
          </IsMainWrapper>
          )}
        </Row>
        <Row>
          <Select
            control={control}
            name="country"
            label="País"
            options={countries || []}
            containerStyle={styles.elementStyle}
            data-cy="select-country"
          />
          <Select
            control={control}
            name="state"
            label="Estado"
            options={states || []}
            containerStyle={styles.elementStyle}
            data-cy="select-state"
          />
        </Row>
        <Row>
          <Select
            control={control}
            name="city"
            label="Cidade"
            options={cities || []}
            containerStyle={styles.elementStyle}
            data-cy="select-city"
          />
          <Input
            control={control}
            name="street"
            label="Rua"
            placeholder="Rua Joaquim Afonso"
            containerStyle={{ width: "30%" }}
            data-cy="input-street"
          />
          <Input
            control={control}
            name="number"
            label="Número"
            placeholder="100"
            containerStyle={{ width: "14%" }}
            data-cy="input-number"
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="district"
            label="Bairro"
            placeholder="Bairro Bom Sucesso"
            containerStyle={styles.elementStyle}
            data-cy="input-district"
          />
          <Input
            control={control}
            name="observation"
            label="Observação"
            placeholder="Observações"
            containerStyle={styles.elementStyle}
            data-cy="input-observation"
          />
        </Row>
        <Row>
          <Select
            control={control}
            name="addressType"
            label="Tipo de Endereço"
            options={addressTypesOptions}
            containerStyle={styles.elementStyle}
            data-cy="select-addressType"
          />
          <Select
            control={control}
            name="streetType"
            label="Tipo de Logradouro"
            options={streetTypeOptions}
            containerStyle={styles.elementStyle}
            data-cy="select-streetType"
          />
        </Row>
        <Row>
          <Select
            control={control}
            name="residenceType"
            label="Tipo de Residência"
            options={residenceTypeOptions}
            containerStyle={styles.elementStyle}
            data-cy="select-residenceType"
          />
          <Button onClick={handleSubmit(onSubmit)} data-cy="btn-submit">
            {currentAddressId ? "Atualizar" : "Cadastrar"}
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

export default ModalCreateAddress;
