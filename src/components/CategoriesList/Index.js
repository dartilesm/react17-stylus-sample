import { Icon } from "../Icon/Index";

export const CategoriesList = ({iconList = []}) => <section className="categories-list">
    { 
        iconList.map((icon) => <div className="categories-list__item">
                <Icon data={icon}/>
            </div>
        ) 
    }
</section>