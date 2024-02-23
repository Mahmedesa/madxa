import { getAsk } from "@/lib/asksaction/asks";
import { notFound } from "next/navigation";
import classes from "./page.module.css"

export async function generateMetadata({params}){
    const ask = getAsk(params.askSlug)
    if(!ask){
        notFound()
    }
    return{
        title: ask.title,
        description: ask.question,
    }
}

export default function AskDetailsPage({params}){
    const ask = getAsk(params.askSlug)
    if(!ask){
        notFound()
    }
    ask.answer = ask.answer.replace(/\n/g, "<br />")
    
    return(
        <>
            <header className={classes.header}>
                <div className={classes.headerText}>
                    <h1>{ask.title}</h1>
                    <p className={classes.creator}>
                        by<a href={`mailto:${ask.creator_email}`}>
                            {ask.creator}
                        </a>
                    </p>
                    <p className={classes.summary}>{ask.question}</p>
                </div>
            </header>
            <main>
                <p 
                 className={classes.instructions}
                 dangerouslySetInnerHTML={{
                    __html:ask.answer,
                }}>
                </p>
            </main>
        </>
    )
}