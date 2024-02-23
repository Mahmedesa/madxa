'use client'
import RequestFormSubmit from "@/components/requests/requests-form"
import ServicesGrid from "@/components/services/services-grid"
import { RequestServices } from "@/lib/serviceaction/action"
import {useFormState} from "react-dom"
import classes from"./page.module.css"
import Link from "next/link"

export default function RequestPage(){
    const [state, formAction] = useFormState(RequestServices, {message:null})
    return(
        <>
        <header className={classes.header}>
         <h1>Order Some <span className={classes.highlight}>Services</span></h1>
        </header>
        <main>
            <form className={classes.form} action={formAction}>
                <div className={classes.content}>
                    <h2>General Information</h2>
                    <p>
                        <label htmlFor="name"> name</label>
                        <input type="text" id="name" name="name" required />
                    </p>
                    <p>
                    <label htmlFor="email"> Email </label>
                        <input type="text" id="email" name="email" required />
                    </p>
                    <p>
                        <label htmlFor="age"> Age </label>
                        <input type="text" id="age" name="age" require />
                    </p>
                    <p>
                        <label htmlFor="number"> Phone.Num </label>
                        <input type="text" id="number" name="number" require />
                    </p>
                    <p>
                        <label htmlFor="address"> Address </label>
                        <input type="text" id="address" name="address" require />
                    </p>
                </div>
                <section className={classes.content}>
                    <h2>
                        Medical info
                    </h2>
                    <div>
                        <h4>Current Medical Conditions:</h4>
                        <p>Please list any existing diagnosed conditions you have, including both chronic and acute illnesses.</p>
                        <input type="text" id="cur-condition" name="cur-condition" />
                    </div>
                    <div>
                        <h4>Past Medical Conditions:</h4>
                        <p>Please list any past illnesses or surgeries you have had, including dates and relevant details.</p>
                        <input type="text" id="past-condition" name="past-condition" />
                    </div>
                    <div>
                        <h4>Allergies:</h4>
                        <p>Please list any allergies you have, including medications, food, and environmental triggers.</p>
                        <input type="text" id="allergies" name="allergies" />
                    </div>
                    <div>
                        <h4>Medications:</h4>
                        <p>Please list all medications you are currently taking, including prescription, over-the-counter, and supplements.</p>
                        <input type="text" id="medications" name="medication" />
                    </div>
                    <div>
                        <h4> Family Medical History:</h4>
                        <p>Please list any significant medical conditions present in your immediate family (parents, siblings, children).</p>
                        <input type="text" id="family-med-history" name="family-med-history" />
                    </div>
                    <div>
                        <h4> Social History :</h4>
                        <div className={classes.actions}>
                        <p>Please answer the following questions honestly to help us understand your lifestyle and potential health risks.</p>
                        <input type="text"/>
                        <button>smoke tubaco</button>
                        <button>alcohol</button>
                        <button>illegal drugs</button>
                        <button>do exercise</button>
                        </div>
                    </div>
                </section> 
                <div className={classes.content}>
                    <h2>Request a service</h2>

                    <input />
                    <div className={classes.services}>
                        <ul>
                            <li><Link href="">Examintion</Link></li>
                            <li><Link href="">Docorts</Link></li>
                            <li><Link href="">NUrsery</Link></li>
                            <li><Link href="">any thing</Link></li>
                            <li><Link href="">Also any thing</Link></li>
                        </ul>
                        <ul>
                            <li><Link href="">Examintion</Link></li>
                            <li><Link href="">Docorts</Link></li>
                            <li><Link href="">NUrsery</Link></li>
                            <li><Link href="">any thing</Link></li>
                            <li><Link href="">Also any thing</Link></li>
                        </ul>
                        <ul>
                            <li><Link href="">Examintion</Link></li>
                            <li><Link href="">Docorts</Link></li>
                            <li><Link href="">NUrsery</Link></li>
                            <li><Link href="">any thing</Link></li>
                            <li><Link href="">Also any thing</Link></li>
                        </ul>
                    </div>
                </div>  
            </form>
        </main>
        </>
    )
}