import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Container, ErrorMessage, Input, Label } from "./styles";

type Props<TFieldValues extends FieldValues> = {
  label?: string;
  placeholder?: string;
  containerStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  style?: React.CSSProperties;
} & UseControllerProps<TFieldValues>;

const FileInput = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  containerStyle,
  labelStyle,
  style,
  ...props
}: Props<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, ...field },
        fieldState: { error },
      }) => (
        <Container style={containerStyle}>
          {label && <Label style={labelStyle}>{label}</Label>}
          <Input
            {...field}
            value={value?.fileName}
            onChange={(event) => {
              onChange(event?.target?.files?.[0]);
            }}
            type="file"
            placeholder={placeholder}
            style={style}
            {...props}
          />
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </Container>
      )}
    />
  );
};

export default FileInput;
