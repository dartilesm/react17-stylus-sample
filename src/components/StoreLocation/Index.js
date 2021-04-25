import LocationIcon from '../../assets/location/ubicacion.png'

export const StoreLocation = ({location = 'Caracas, Ajuro'}) => <section className="store-location store-location--margin-top-40">
<h2 className="store-location__text">
  <b className="store-location__text-bold">Seleciona tu tienda</b>
</h2>
<a href="#" className="store-location__link">
  <img src={LocationIcon} alt="location icon" className="store-location__icon-location" />
  <span className="store-location__address">{location}</span>
</a>
</section>
