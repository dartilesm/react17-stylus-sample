import { StoreCard } from "../StoreCard";

export const StoreList = ({stores = []}) => <section className="stores-list">
    { stores.map(store => <StoreCard {...store}/>)}
</section>