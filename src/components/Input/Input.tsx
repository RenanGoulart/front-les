import {
  Controller,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import {
  Container,
  ErrorMessage,
  Label,
  MaskedTextInput,
  TextInput,
} from "./styles";

type Props<TFieldValues extends FieldValues> = {
  label: string;
  placeholder?: string;
  type?: string;
  mask?: string;
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
} & UseControllerProps<TFieldValues>;

const Input = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type,
  mask,
  containerStyle,
  style,
}: Props<TFieldValues>) => {
  const {
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Container style={containerStyle}>
      <Label>{label}</Label>
      {mask ? (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <MaskedTextInput
              type={type || "text"}
              placeholder={placeholder}
              mask={mask}
              style={style}
              {...field}
            />
          )}
        />
      ) : (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <TextInput
              type={type || "text"}
              placeholder={placeholder}
              style={style}
              {...field}
            />
          )}
        />
      )}
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Container>
  );
};

export default Input;
