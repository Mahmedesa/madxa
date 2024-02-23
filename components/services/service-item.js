import Link from "next/link";
import classes from "./service-item.module.css"

export default function ServiceItem({ title, slug, summary }) {
    return (
        <article className={classes.service}>
            <header>
                <div className={classes.headerText}>
                    <h1>{title}</h1>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/services/${slug}`}>View Service</Link>
                </div>
            </div>
        </article>
    )
}