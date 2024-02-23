'use client'
import Link from "next/link";
import classes from "./ask-item.module.css"


export default function AskItem({ slug, question, creator, answer }){

    return(
        <article className={classes.ask}>
        <header>
            <div className={classes.headerText}>
                <h2>{question}</h2>
                <p>by {creator}</p>
            </div>
            <div className={classes.actions}>
                <button>show Answer</button>
            </div>
        </header>
        <div className={classes.content}>
            {answer}
        </div>
    </article>
    ) 
}