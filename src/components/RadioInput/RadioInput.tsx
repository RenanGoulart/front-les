import { FieldValues, UseControllerProps, useController } from "react-hook-form";
import { Container, ErrorMessage, Label } from "./styles";

type Props<TFieldValues extends FieldValues> = {
  label: string;
  value: string;
  checked?: boolean;
  placeholder?: string;
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
} & UseControllerProps<TFieldValues>;

const RadioInput = <TFieldValues extends FieldValues>({ 
  name,
  control,
  value,
  label,
  checked,
  containerStyle,
  style,
}: Props<TFieldValues>) => {
  
  const {
    field,
    fieldState: { error },
  } = useController({ 
    name, 
    control 
  });

  return (
    <Container style={containerStyle}>
      <input 
        type='radio' 
        onChange={field.onChange}  
        name={name}
        value={value}
        id={value}
        checked={checked}
        style={style}
      />
      <Label htmlFor={value}>{label}</Label>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Container>
  )
}

export default RadioInput;