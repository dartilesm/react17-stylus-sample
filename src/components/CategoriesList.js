import { Icon } from "./Icon";

export const CategoriesList = ({iconList = []}) => <section className="categories-list">
    { 
        iconList.map((icon, index) => <div className="categories-list__item">
                <Icon data={icon} index={index}/>
            </div>
        ) 
    }
</section>