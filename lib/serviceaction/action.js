'use server'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { saveService } from "./services"
import { requestService } from "./requests"

function isInvalidText(text){
    return ! text || text.trim() === ''
}
export async function MakeService(prevState, formData){
    const service = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions')
    }
    if(
      isInvalidText(service.title) ||
      isInvalidText(service.summary) ||
      isInvalidText(service.instructions)
    ){
        return {
            message : "invaild input"
        }
    }
    await saveService(service)
    revalidatePath('/services')
    redirect('services')
}

export async function RequestServices(prevStaate, formData){
    const request = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        creator_number: formData.get('phone'),
        creator_address: formData.get('address'),
        medical_history: formData.get('medical_histroy'),
        problem: formData.get('problem'),
        title: formData.get('title')
    }
    if(
        isInvalidText(request.creator) ||
        isInvalidText(request.creator_email) ||
        !request.creator_email.includes('@') ||
        isInvalidText(request.creator_number) ||
        isInvalidText(request.creator_address) ||
        isInvalidText(request.medical_history)||
        isInvalidText(request.problem) ||
        isInvalidText(request.title)
    ){
        return{
            message: 'Invaild input'
        }
    }
    await requestService(request)
    revalidatePath('/requests')
    redirect('/requests')
}