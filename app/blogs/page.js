import Link from "next/link";
import { getBlogs } from "@/lib/blogsaction/blogs";
import { Suspense } from "react";
import BlogsGrid from "@/components/blogs/blogs-grid";
import classes from "./page.module.css"

async function Blogs(){
    const blogs = await getBlogs()
    return <BlogsGrid blogs={blogs} />
}

export default function BlogsPage(){
    return ( 
        <>
         <header className={classes.header}>
            <h1>
                We are Providing the Quality Care{' '}
                <span className={classes.highlight}>
                    for you 
                </span>
            </h1>
            <p>
                <Link href="/blogs/create-blog">
                    Create a new Blog
                </Link>
            </p>
         </header>
         <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>
                Fetching Blogs...
                </p>}>
                <Blogs />
            </Suspense>
         </main>
        </>
    )
}