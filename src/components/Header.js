import LogoImg from '../assets/logo.png'
import { SearchField } from './SearchField'

export const Header = () => <header className="header">
    <div className="header__logo-container">
    <img src={LogoImg} alt="logo" className="header__logo" />
    </div>
    <div className="header__banner-text-container">
    <p className="header__banner-text">Envía bienestar a tu familia en <b className="header__banner-text-bold">Venezuela</b></p>
    </div>
    <div className="header__banner-image-container">
    </div>
    <div className="header__search-container">
        <SearchField />
    </div>
</header>
