import { FieldValues, UseControllerProps, useController } from "react-hook-form";
import { Container, ErrorMessage, Label, MaskedTextInput, TextInput  } from "./styles";

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
    field,
    fieldState: { error },
  } = useController({ 
    name, 
    control 
  });

  return (
    <Container style={containerStyle}>
      <Label>{label}</Label>
      {mask ? (
        <MaskedTextInput
          onChange={field.onChange}  
          type={type || 'text'} 
          placeholder={placeholder} 
          mask={mask} 
          style={style}
        />
      ) : (
        <TextInput 
          onChange={field.onChange}  
          type={type || 'text'} 
          placeholder={placeholder}  
          style={style}
        />
      )}
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Container>
  )
}

export default Input;