'use server'
import { revalidatePath } from "next/cache"
import { saveAsk } from "./asks"
import { redirect } from "next/navigation"

function isInvalidText(text){
    return ! text || text.trim() === ''
}
export async function postAsk(prevState, formData){
    const ask = {
        title: formData.get('title'),
        question: formData.get('question'),
        answer: formData.get('answer'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    if(
        isInvalidText(ask.title)||
        isInvalidText(ask.question)||
        isInvalidText(ask.answer)||
        isInvalidText(ask.creator)||
        isInvalidText(ask.creator_email)||
        !ask.creator_email.includes('@') ){
            return {
                message : 'Invalid input'
            }
        }  
    await saveAsk(ask)
    revalidatePath('/asks')
    redirect('/asks')
}