import ServiceItem from "./service-item";
import classes from "./services-grid.module.css"

export default function ServicesGrid({services}){
    return (
        <ul className={classes.services}>
            {services.map((service) => (
                <li key={service.id}>
                    <ServiceItem {...service}/>
                </li>
            ))} 
             {/*<li key={service.id}>
                    <ServicesItem {...service}/>
                </li>*/}
        </ul>
    )
}