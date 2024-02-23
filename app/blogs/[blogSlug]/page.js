import { getBlog } from "@/lib/blogsaction/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css"

export async function generateMetadata({params}){
    const blog = getBlog(params.blogSlug)
    if(!blog){
        notFound
    }
    return{
        title: blog.title,
        description: blog.summary,
    }
}

export default function BlogDatailsPage({params}){
    const blog = getBlog(params.blogSlug)
    if(!blog){
        notFound()
    }
    blog.instructions = blog.instructions.replace(/\n/g, '<br />')
    return(
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image 
                     src={blog.image}
                     alt={blog.title}
                     fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{blog.title}</h1>
                    <p className={classes.summary}>{blog.summary}</p>
                </div>
            </header>
            <main>
                <p
                 className={classes.instructions}
                 dangerouslySetInnerHTML={{
                    __html:blog.instructions
                 }}
                >
                </p>
            </main>
        </>
    )
}