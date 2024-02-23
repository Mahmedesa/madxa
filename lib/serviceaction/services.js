import sql from 'better-sqlite3'
import slugify from 'slugify'
import { resolve } from 'styled-jsx/css'
import xss from 'xss'

const dbase = sql('services.db')
export async function getServices(){
    await new Promise((resolve)=> setTimeout(resolve,5000))
    return dbase.prepare('SELECT * FROM services').all()
}
export function getService(slug){
    return dbase.prepare('SELECT * FROM services WHERE slug =?').get(slug)
}
export async function saveService(service){
    service.slug = slugify(service.title, {lower:true})
    service.instructions = xss(service.instructions)

    dbase.prepare(`
        INSERT INTO services
            (title,
            summary, 
            instructions,
            slug)  
        VALUES (
            @title,
            @summary,
            @instructions,
            @slug   
        )
    `).run(service)
}
