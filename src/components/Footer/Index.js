import CartIcon from '../../assets/footer/cart.svg'
import StoreIcon from '../../assets/footer/store.png'
import LocationIcon from '../../assets/footer/location.svg'
import MoneyIcon from '../../assets/footer/money.svg'
import UserIcon from '../../assets/footer/user.svg'
import { Icon } from '../Icon/Index'


const LEFT_ICON_LIST = [
    {
        icon: StoreIcon,
        padding: true,
        text: 'Tiendas',
        selected: true
    },
    {
        icon: LocationIcon,
        padding: true,
        text: 'Caracas'
    }
]

const CENTERED_ICON = {
    icon: CartIcon,
    roundedShadow: true
}

const RIGHT_ICON_LIST = [
    {
        icon: MoneyIcon,
        padding: true,
        text: 'Gana $5.00'
    },
    {
        icon: UserIcon,
        padding: true,
        text: 'Iniciar Sesión'
    }
]


export const Footer = () => <footer className="footer">
<div className="footer__icon-center">
    <div className="footer__icon-center-container">
        <Icon data={CENTERED_ICON} />
    </div>
</div>
<div className="footer__container">
  <div className="footer__icon-left">
    {
        LEFT_ICON_LIST.map(data => <Icon data={data} />)
    }
  </div>
  <div className="footer__icon-right">
    {
        RIGHT_ICON_LIST.map(data => <Icon data={data} />)
    }
  </div>
</div>
</footer>
