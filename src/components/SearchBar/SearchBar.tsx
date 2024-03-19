import { SetStateAction } from "react";
import { Container, SearchContainer, SearchIcon, SearchInput } from "./styles";
import searchIcon from "../../assets/icons/search.svg";

interface SearchBarProps {
  isSearchable?: boolean;
  search?: string;
  setSearch?: React.Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ isSearchable, search, setSearch }: SearchBarProps) => {
  return (
    <Container>
      {isSearchable && (
        <SearchContainer>
          <SearchInput
            placeholder="Buscar"
            value={search}
            onChange={(e) => {
              if (setSearch) {
                setSearch(e.target.value);
              }
            }}
          />
          <SearchIcon src={searchIcon} alt="Ícone de pesquisa" />
        </SearchContainer>
      )}
    </Container>
  );
};

export default SearchBar;
