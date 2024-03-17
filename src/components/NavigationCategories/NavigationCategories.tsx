import { useLocation, useNavigate } from 'react-router-dom';
import { Container, CategoriesWrapper, NavigationCategory} from './styles';


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>      
        <CategoriesWrapper>
            <NavigationCategory
                isActive={location.pathname.includes('/rock')}
                onClick={() => navigate('/rock')}
            >
              <span>Rock</span>      
            </NavigationCategory>
            <NavigationCategory
                isActive={location.pathname.includes('/pop')}
                onClick={() => navigate('/pop')}
            > 
              <span>Pop</span>  
            </NavigationCategory> 
            <NavigationCategory
                isActive={location.pathname.includes('/hiphop')}
                onClick={() => navigate('/hiphop')}
            > 
              <span>Hip-Hop</span>  
            </NavigationCategory> 
            <NavigationCategory
                isActive={location.pathname.includes('/mpb')}
                onClick={() => navigate('/mpb')}
            > 
              <span>MPB</span>  
            </NavigationCategory> 
            <NavigationCategory
                isActive={location.pathname.includes('/blues')}
                onClick={() => navigate('/blues')}
            > 
              <span>Blues</span>  
            </NavigationCategory> 
            <NavigationCategory
                isActive={location.pathname.includes('/soul')}
                onClick={() => navigate('/soul')}
            > 
              <span>Soul</span>  
            </NavigationCategory> 
            <NavigationCategory
                isActive={location.pathname.includes('/funk')}
                onClick={() => navigate('/funk')}
            > 
              <span>Funk</span>  
            </NavigationCategory> 
            <NavigationCategory
                isActive={location.pathname.includes('/reggae')}
                onClick={() => navigate('/reggae')}
            > 
              <span>Reggae</span>  
            </NavigationCategory> 
          </CategoriesWrapper>           
    </Container>
  );
};

export default Navbar;
