'use client'
import BlogFormSubmit from '@/components/blogs/blogs-form-submit'
import ImagePicker from '@/components/blogs/image-picker'
import { createBlog } from '@/lib/blogsaction/action'
import {useFormState} from 'react-dom'
import classes from "./page.module.css"

export default function CreateBlogsPage(){
    const [state, formAction] = useFormState(createBlog, {message:null})
    return(
        <>
            <header className={classes.header}> 
                <h1>
                    Create a <span className={classes.highlight}>Blog</span>
                </h1>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="title">Title</label>
                            <input
                             type="text" 
                             id="title" 
                             name="title" 
                             required />
                        </p>
                        <p>
                            <label htmlFor="summary">Summary</label>
                            <input
                             type="text" 
                             id="summary" 
                             name="summary" 
                             required />
                        </p>
                        <p>
                            <label htmlFor="instructions">Instructions</label>
                            <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                            ></textarea>
                        </p>
                        <ImagePicker label="Select Image" name="image" />
                        {state.message && <p>{state.message}</p>}
                        <p className={classes.actions}>
                            <BlogFormSubmit />
                        </p>
                    </div>
                </form>
            </main>
        </>
    )
}