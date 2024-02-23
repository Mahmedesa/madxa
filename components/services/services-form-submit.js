"use client"
import {useFormStatus} from "react-dom"

export default function ServiceFormSubmitting(){
    const {pending} = useFormStatus()
    return <button disabled={pending}>
        {pending ? 'Submitting' : 'Make Services'}
    </button>
}