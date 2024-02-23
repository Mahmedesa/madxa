import { notFound } from "next/navigation";
import { getService } from "@/lib/serviceaction/services";
import classes from "./page.module.css"

export async function generateMetadata({params}){
    const service = getService(params.serviceSlug)
    if(!service){
        notFound()
    }
    return {
        title: service.title,
        description : service.summary,
    }
}
export default function serviceDetailsPage({params}){
    const service = getService(params.serviceSlug)
    if(!service){
        notFound()
    }
    service.instructions = service.instructions.replace(/\n/g,"<br />")
    return(
        <>
            <header className={classes.header}>
                <div className={classes.headerText}>
                    <h1>{service.title}</h1>
                    <p>{service.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html:service.instructions
                    }}>
                </p>
            </main>
        </>
    )
}