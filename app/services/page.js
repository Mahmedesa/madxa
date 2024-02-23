import ServicesGrid from "@/components/services/services-grid";
import { getServices } from "@/lib/serviceaction/services";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css"

async function Services(){
    const services = await getServices()
    return <ServicesGrid services={services} />
}
export default function ServicesPage(){
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Wounderful services we supported {' '}
                    <span className={classes.highlight}>fro you </span>
                </h1>
                <p>Choose your need service</p>
                <p className={classes.cta}>
                    <Link href="/services/make-service">
                        Make new Service
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense   fallback= {<p className={classes.loading}>Loading Services...</p>}> 
                    <Services />
                </Suspense>
            </main>
        </>
    )
}