import Logo from '../components/Logo';
import Search from '../components/Search';
import ModalMenu from '../components/ModalMenu/ModalMenu';
import './header.scss'

const Header = () => {
    return ( <header class="header">
            <div class="header__content container">
                <div class="logo">
                    <Logo />
                    <Search />
        
                            
                </div>
                
                <div class="menu__nav">
                    <label for="burger"><img class="item" src={'./../../img/menu.svg'} alt="menu" /></label>
                    <input id="burger" type="checkbox" />
                    

                    <ModalMenu />


                    
                    <a class="menu__nav__link" href="/#"><img class="item" src={'./../../img/Forma.svg'} alt="forma" /></a>
                    <a class="menu__nav__link" href="/#"><img class="item" src={'./../../img/basket.svg'} alt="basket" /></a>

                    
                        
                

                </div>
            </div>
            
            
            
        </header> );
}
 
export default Header;