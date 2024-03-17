import { SetStateAction } from 'react';
import {  
  Container,
  SearchDivider,
  SearchIcon,
  SearchInput,  
} from './styles';
import searchIcon from '../../assets/icons/search.svg';

interface HeaderProps { 
  isSearchable?: boolean;
  isNavigating?: boolean;
  setSearch?: React.Dispatch<SetStateAction<string>>;
  search?: string;
}

const Header = ({ 
  isSearchable,
  isNavigating,
  search,
  setSearch,
}: HeaderProps) => {
  
  return (
    <Container style={{ paddingLeft: isNavigating ? '5rem' : '' }}>    

      {isSearchable && (
        <SearchDivider>
          <SearchInput
            type="text"
            id="search"
            name="search"
            placeholder="Buscar"
            value={search}
            onChange={e => {
              if (setSearch) {
                setSearch(e.target.value);
              }
            }}
          />

          <SearchIcon src={searchIcon} alt="Ícone de pesquisa" />
        </SearchDivider>
      )}
    </Container>
  );
};

export default Header;
