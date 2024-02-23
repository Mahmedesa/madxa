import AskItem from "./ask-item";
import classes from "./asks-grid.module.css"

export default function AsksGrid({asks}){
    return(
        <ul className={classes.asks}>
            {asks.map((ask) => (
                <li key={ask.id}>
                    <AskItem {...ask} />
                </li>
            ))}
        </ul>
    )
}