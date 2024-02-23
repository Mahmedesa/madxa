import BlogItem from "./blog-item"
import classes from "./blogs-grid.module.css"

export default function BlogsGrid({blogs}){
    return(
        <ul className={classes.blogs}>
            {blogs.map((blog) => (
                <li key={blog.id}>
                    <BlogItem {...blog} />
                </li>
            ))}
        </ul>
    )
}