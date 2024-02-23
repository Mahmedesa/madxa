'use client'
import {useFormStatus} from 'react-dom'

export default function RequestFormSubmit(){
    const {panding} =useFormStatus()
    return <button disabled={panding}>
        {panding ? 'Submitting...' : 'create Blog'}
    </button>
}