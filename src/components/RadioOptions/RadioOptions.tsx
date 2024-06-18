import {
  FieldValues,
  Path,
  PathValue,
  UseControllerProps,
  useController,
} from "react-hook-form";
import {
  Container,
  RadioCheck,
  RadioCircle,
  RadioLabel,
  RadioRow,
} from "./styles";

interface IOption {
  label: string;
  value: string | boolean;
}

type Props<TFieldValues extends FieldValues> = {
  options: IOption[];
  containerStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
} & UseControllerProps<TFieldValues>;

const RadioOptions = <TFieldValues extends FieldValues>({
  control,
  name,
  options,
  containerStyle,
  labelStyle,
}: Props<TFieldValues>) => {
  const { field } = useController({
    control,
    name,
    defaultValue: options[0].value as PathValue<
      TFieldValues,
      Path<TFieldValues>
    >,
  });

  const handleCheckOption = (item: IOption) => {
    field.onChange(item.value);
  };

  return (
    <Container style={containerStyle}>
      {options.map((item) => (
        <RadioRow key={item.value.toString()} onClick={() => handleCheckOption(item)}>
          <RadioCircle data-cy="radio-option">
            {item.value === field.value && <RadioCheck />}
          </RadioCircle>
          <RadioLabel style={labelStyle}>{item.label}</RadioLabel>
        </RadioRow>
      ))}
    </Container>
  );
};

export default RadioOptions;
