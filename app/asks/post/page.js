'use client'
import {useFormState} from 'react-dom'
import { postAsk } from "@/lib/asksaction/action"
import AsksFormSubmit from '@/components/asks/asks-form-submit'
import classes from "./page.module.css"

export default function PostAskPage(){
    const [state, formAction] = useFormState(postAsk, {message:null})
    return(
        <>
        <header className={classes.header}>
            <h1>
                Ask about your <span className={classes.highlight}>Health</span>
            </h1>
        </header>
        <main className={classes.main}>
            <form className={classes.form} action={formAction}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </p>
                <p>
                    <label htmlFor="question">Ask a Question</label>
                    <input type="text" id="question" name="question" required />
                </p>
                <p>
                    <label htmlFor="answer">answer</label>
                    <textarea
                    id="answer"
                    name="answer"
                    rows="10"
                    required
                    ></textarea>
                </p>
                <div className={classes.row}>
                    <p>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" required />
                    </p>
                    <p>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required />
                    </p>
                </div>
                {state.message && <p>{state.message}</p>}
                <p className={classes.actions}>
                    <AsksFormSubmit />
                </p>
            </form>
        </main>
        </>
    )
}