import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { resolve } from 'styled-jsx/css'

const datab = sql('asks.db')
export async function getAsks(){
    await new Promise((resolve) => setTimeout(resolve,5000))
    return datab.prepare('SELECT * FROM asks').all()
}
export function getAsk(slug){
    return datab.prepare('SELECT * FROM asks WHERE slug =?').get(slug)
}
export async function saveAsk(ask){
    ask.slug = slugify(ask.title, {lower: true})
    ask.answer = xss(ask.answer)
    datab.prepare(`
        INSERT INTO asks
            (title,
            question, 
            answer, 
            creator, 
            creator_email, 
            slug)
        VALUES (
            @title,
            @question,
            @answer,
            @creator,
            @creator_email,
            @slug   
        )
    `).run(ask)
}