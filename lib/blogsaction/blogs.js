import fs from 'node:fs'
import sql from "better-sqlite3"
import slugify from 'slugify'
import xss from 'xss'
import { resolve } from 'styled-jsx/css' 

const db = sql('blogs.db')
export async function getBlogs(){
    await new Promise((resolve)=> setTimeout(resolve, 5000))
    return db.prepare('SELECT * FROM blogs').all()
}

export function getBlog(slug){
    return db.prepare('SELECT * FROM blogs WHERE slug =?').get(slug)
}

export async function saveBlog(blog){
    blog.slug = slugify(blog.title, {lower:true})
    blog.instructions =xss(blog.instructions)
    const extension = blog.image.name.split('.').pop()
    const fileName = `${blog.slug}.${extension}`
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferImage = await blog.image.arrayBuffer()
    stream.write(Buffer.from(bufferImage),(error)=>{
        if(error){
            throw new Error('Saving image failed')
        }
    })
    blog.image =`/images/${fileName}`
    db.prepare (
      `INSERT INTO blogs(
        title,
        summary, 
        instructions,
        image, 
        slug 
        )VALUES (
          @title,
          @summary,
          @instructions,
          @image,
          @slug   
         )` 
    ).run(blog)
}