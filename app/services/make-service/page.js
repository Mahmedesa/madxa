'use client'
import {useFormState} from 'react-dom'
import { MakeService } from "@/lib/serviceaction/action"
import ServiceFormSubmitting from '@/components/services/services-form-submit'
import classes from "./page.module.css"

export default function MakeServicePage(){
    const [state, formAction]=useFormState(MakeService, {message:null})
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Make a <span className={classes.highlight} >New service</span>
                </h1>
                <p>New service for more help to our clients</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <p>
                        <label htmlFor="title">Title</label>
                         <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                         id="instructions"
                         name="instructions"
                         rows="10"
                         required
                        ></textarea>
                    </p>
                    <p className={classes.actions}>
                        <ServiceFormSubmitting />
                    </p>
                </form>
            </main>
        </>
    )
}