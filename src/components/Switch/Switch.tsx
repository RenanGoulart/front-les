import { Container, Input, Slider } from "./styles";

interface Props {
  isChecked: boolean;
  onChange: () => void;
}

const Switch = ({ isChecked, onChange }: Props) => {
  return (
    <Container>
      <Input type="checkbox" checked={isChecked} onChange={onChange} />
      <Slider />
    </Container>
  );
};

export default Switch;
