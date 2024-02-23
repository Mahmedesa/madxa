'use client'
import {useFormStatus} from 'react-dom'

export default function AsksFormSubmit(){
    const {pending} = useFormStatus()
    return <button disable={pending}>
        {pending ? 'Submitting...' : 'Post Your Question'}
    </button>
}