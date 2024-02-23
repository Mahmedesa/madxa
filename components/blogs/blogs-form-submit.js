'use client'
import {useFormStatus} from 'react-dom'

export default function BlogFormSubmit(){
    const {panding} =useFormStatus()
    return <button disabled={panding}>
        {panding ? 'Submitting...' : 'create Blog'}
    </button>
}