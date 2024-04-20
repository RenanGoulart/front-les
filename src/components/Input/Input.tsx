import {
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
  label?: string;
  placeholder?: string;
  type?: string;
  mask?: string;
  containerStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
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
  labelStyle,
  style,
  ...props
}: Props<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Container style={containerStyle}>
      {label && <Label style={labelStyle}>{label}</Label>}
      {mask ? (
        <MaskedTextInput
          type={type || "text"}
          placeholder={placeholder}
          mask={mask}
          style={style}
          {...props}
          {...field}
        />
      ) : (
        <TextInput
          type={type || "text"}
          placeholder={placeholder}
          style={style}
          {...props}
          {...field}
        />
      )}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

export default Input;
