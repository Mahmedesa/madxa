'use client'
import {useFormStatus} from 'react-dom'

export default function NewslatterSignUp(){
    const {pending} = useFormStatus()
    return( 
        <div>
        <input 
         type="email"
         id="email"
         name="email"
         />
         <button disabled={pending}>
            {pending ? 'Waiting...' : 'Subscribe'}
         </button>
        </div>
    )
}