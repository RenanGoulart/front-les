import { FieldValues, Path, PathValue, UseControllerProps, useController } from 'react-hook-form';
import { Container, RadioCheck, RadioCircle, RadioLabel, RadioRow } from './styles';

interface IOption {
  label: string;
  value: string;
}

type Props<TFieldValues extends FieldValues> = {
  options: IOption[];
} & UseControllerProps<TFieldValues>;

const RadioOptions = <TFieldValues extends FieldValues>({
  control,
  name,
  options,
}: Props<TFieldValues>) => {
  const { field } = useController({
    control,
    name,
    defaultValue: options[0].value as PathValue<TFieldValues, Path<TFieldValues>>,
  });

  const handleCheckOption = (item: IOption) => {
    field.onChange(item.value);
  };

  return (
    <Container>
      {options.map(item => (
        <RadioRow key={item.value} onClick={() => handleCheckOption(item)}>
          <RadioCircle>
            {item.value === field.value && <RadioCheck />}
          </RadioCircle>
          <RadioLabel>{item.label}</RadioLabel>
        </RadioRow>
      ))}
    </Container>
  );
};

export default RadioOptions;