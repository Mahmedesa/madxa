import Image from "next/image";
import Link from "next/link";
import classes from "./blog-item.module.css"

export default function BlogItem({title,
     slug, 
     image, 
     summary}){
    return(
        <article className={classes.blog}>
            <header>
                <div className={classes.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                        <h2>{title}</h2>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/blogs/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    )
}