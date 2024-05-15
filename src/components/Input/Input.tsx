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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
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
  onChange,
  value,
  ...props
}: Props<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Container style={containerStyle}>
      {label && <Label style={labelStyle}>{label}</Label>}
      {mask ? (
        <MaskedTextInput
          type={type || "text"}
          placeholder={placeholder}
          mask={mask}
          style={style}
          value={value !== undefined ? value : field.value}
          onChange={handleChange}
          {...props}
        />
      ) : (
        <TextInput
          type={type || "text"}
          placeholder={placeholder}
          style={style}
          value={value !== undefined ? value : field.value}
          onChange={handleChange}
          {...props}
        />
      )}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

export default Input;
