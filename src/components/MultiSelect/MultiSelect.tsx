import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import { theme } from "../../styles/theme";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  name: string;
  control: Control;
  placeholder: string;
  classNamePrefix?: string;
  noOptionsMessage?: () => string;
}

const MultiSelect = ({
  options,
  name,
  control,
  placeholder,
  classNamePrefix,
  noOptionsMessage,
  ...props
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
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
      )}
    />
  );
};

export default MultiSelect;
