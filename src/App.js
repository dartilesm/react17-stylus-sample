import { CategoriesList } from './components/CategoriesList/Index';
import { Header } from './components/Header/Index';
import { StoreLocation } from './components/StoreLocation/Index';
import MarketImg from "./assets/categories/super.png"
import ButcherShopImg from "./assets/categories/carniceria.png"
import PharmaImg from "./assets/categories/pharma.png"
import './styles.css';
import { StoreList } from './components/StoreList/Index';
import { Footer } from './components/Footer/Index';

const ICON_LIST = [
  {
    icon: MarketImg,
    text: 'Supermercado',
    selected: true,
    padding: true
  },
  {
    icon: ButcherShopImg,
    text: 'Carnicería',
    selected: false,
    padding: true
  },
  {
    icon: PharmaImg,
    text: 'Farmacia',
    selected: false,
    padding: true
  }
]

const STORE_LIST = [
  {
    store: 'delicateck',
    discount: 20,
    title: 'Delicateck Caracas',
    category: 'Supermercado',
    stars: '4.5',
    deliveryTime: '3 días'
  },
  {
    store: 'lomas',
    discount: 20,
    title: 'Lomas Supermercado',
    category: 'Supermercado',
    stars: '4.5',
    deliveryTime: '3 días'
  }
]

export const App = () => <>
  <Header />
  <StoreLocation />
  <CategoriesList iconList={ICON_LIST} />
  <StoreList stores={STORE_LIST} />
  <Footer />
</>
