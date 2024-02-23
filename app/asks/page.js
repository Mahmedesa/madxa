import AsksGrid from "@/components/asks/asks-grid"
import {getAsks} from "@/lib/asksaction/asks"
import Link from "next/link"
import { Suspense } from "react"
import classes from "./page.module.css"
import PostAskPage from "./post/page"

async function Asks(){
    const asks = await getAsks()
    return <AsksGrid asks={asks} />
}
export default function AsksContent(){
    return(
        <>
        <div className={classes.fulweb}>
            <div className={classes.hmweb}>
                <header className={classes.header}>
                    <h1>Ask 
                        <span className={classes.highlight}> Madxa</span>
                        {' '} about your Health 
                    </h1>
                    <p>
                        We try to answer all your questions, thank you!!
                    </p>
                </header>
                <main className={classes.main}>
                    <Suspense fallback={<p className={classes.loading}>...Loading Previous Questions ....</p>}>
                        <Asks />
                    </Suspense> 
                </main>
            </div>
        
            <aside className={classes.sidebar}>
                <PostAskPage />
            </aside>
        </div>
        </>
    )
}