import StarIcon from '../../assets/star.png'
import DeliveryIcon from '../../assets/delivery.svg'

export const StoreCard = ({ store, title, discount, category, stars, deliveryTime }) => <div className="store-card store-card--margin-15">
    <div className="store-card__container">
    <div className={`store-card__header store-card__header--${store}`}>
    {discount && <span className="store-card__discount">
        Hasta {discount}% dto.
    </span>}
    </div>
    <div className="store-card__body">
    <h4 className="store-card__title">
        {title}
    </h4>
    <p className="store-card__category">
        {category}
        <span className="store-card__stars-container">
        <img className="store-card__start-icon" src={StarIcon} alt="star" />
        {stars}
        </span>
    </p>
    <p className="store-card__delivery-info">
        <img className="store-card__delivery-icon" src={DeliveryIcon} alt="truck delivery" />
        {deliveryTime} • Gasta $ 80.0000 para envio GRATIS
    </p>
    </div>
</div>
<div className="store-card__badge">
  <span className="store-card__badge-text">
    Delivery
  </span>
</div>
</div>

