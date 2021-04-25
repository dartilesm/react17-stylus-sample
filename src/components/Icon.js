export const Icon = ({data}) => <div className="icon">
    <img src={data.icon} alt="supermercado" className="icon__icon" />
    { data.text && <span className={`icon__name icon__name--${data.selected ? 'selected' : ''}`}>{data.text}</span> }
</div>