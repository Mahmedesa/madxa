'use server'
import { revalidatePath } from "next/cache"
import { saveBlog } from "./blogs"
import { redirect } from "next/navigation"

function isInvalidText(text){
    return ! text || text.trim() === ''
}
export async function createBlog(prevState, formData){
    const blog ={
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image')
    }
    if(
        isInvalidText(blog.title) ||
        isInvalidText(blog.summary)||
        isInvalidText(blog.instructions)||
        !blog.image||
        blog.image.size === 0){
            return {
                message: 'Invalid input'
            }
    }
    await saveBlog(blog)
    revalidatePath('/blogs')
    redirect('/blogs')
}