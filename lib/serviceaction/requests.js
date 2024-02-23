import slugify from "slugify"
import xss from "xss"

export async function  requestService(service){
    service.slug = slugify(service.title, {lower:true})
    service.instructions = xss(service.instructions)

    daba.prepare(`
        INSERT INTO requests (
            creator,
            creator_email,
            creator_number,
            creator_address,
            medical_histroy,
            problem,
            title,
            slug
        )VALUES (
            @creator,
            @creator_email,
            @creator_number,
            @creator_address,
            @medical_histroy,
            @problem,
            @title,
            @slug
        )
    `).run(service)
}