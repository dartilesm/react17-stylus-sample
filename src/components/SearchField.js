import { Icon } from "./Icon";
import LupaImg from '../assets/lupa.png'

export const SearchField = ({placeholder = '¿Qué estás buscando?'}) => <div className="search">
<input type="text" className="search__input" placeholder={placeholder} />
<div className="search__button">
  <Icon data={{icon: LupaImg}} />
</div>
</div>