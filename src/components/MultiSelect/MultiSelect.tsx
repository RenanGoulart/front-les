import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import React from "react";
import { theme } from "../../styles/theme";
import { Container, Label } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  name: string;
  control: Control;
  placeholder?: string;
  label?: string;
  classNamePrefix?: string;
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  noOptionsMessage?: () => string;
}

const MultiSelect = ({
  options,
  name,
  control,
  placeholder,
  label,
  classNamePrefix,
  containerStyle,
  style,
  noOptionsMessage,
  ...props
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Container>
          {label && <Label>{label}</Label>}
          <Select
            onChange={onChange}
            value={value}
            options={options}
            isMulti
            {...props}
            placeholder={placeholder}
            noOptionsMessage={noOptionsMessage}
            classNamePrefix={classNamePrefix}
            styles={{
              container(base) {
                return {
                  ...base,
                  ...containerStyle,
                };
              },
              control(base) {
                return {
                  ...base,
                  minHeight: 50,
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  fontSize: "1rem",
                  borderRadius: "0.5rem",
                  borderColor: theme.colors.purple_1f,
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: theme.colors.purple_1f,
                  },
                  ...style,
                };
              },
              option(base, state) {
                return {
                  ...base,
                  backgroundColor: state.isSelected
                    ? theme.colors.purple_1f
                    : "white",
                  color: state.isSelected ? "white" : "black",
                  "&:hover": {
                    backgroundColor: theme.colors.purple_48,
                    color: "white",
                  },
                };
              },
            }}
          />
        </Container>
      )}
    />
  );
};

export default MultiSelect;
