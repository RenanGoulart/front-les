import { FieldValues, UseControllerProps, useController } from "react-hook-form";
import { Container, ErrorMessage, Label, SelectOption } from "./styles";

interface IOption {
  value: string;
  label: string;
}

type Props<TFieldValues extends FieldValues> = {
  label: string;
  options: IOption[];
  placeholder?: string;
  type?: string;
  mask?: string;
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
} & UseControllerProps<TFieldValues>;

const Select = <TFieldValues extends FieldValues>({ 
  name,
  control,
  label, 
  options,
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
      <Label>{label}</Label>
      <SelectOption style={style} onChange={field.onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </SelectOption>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Container>
  )
}

export default Select;