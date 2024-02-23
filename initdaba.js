const sql = require('better-sqlite3')
const daba = sql('requests.db')

const dummyRequests = [
    {
        title:'serv 1',
        slug: 'serv_1',
        creator:'jggf',
        creator_email:'hhdhh@ndgf.com',
        creator_number:'0938327',
        creator_address:'8jdjs-jjdb  iwe0jre',
        medical_histroy:'adbait sdfwe fd',
        problem: 'ay 7aga'
    },
    {
        title:'serv 2',
        slug: 'serv-2',
        creator:'jggf',
        creator_email:'hhdhh@ndgf.com',
        creator_number:'0938327',
        creator_address:'8jdjs-jjdb  iwe0jre',
        medical_histroy:'adbait sdfwe fd',
        problem: 'ay 7aga'
    },
    {
        title:'serv 3',
        slug: 'serv-3',
        creator:'jggf',
        creator_email:'hhdhh@ndgf.com',
        creator_number:'0938327',
        creator_address:'8jdjs-jjdb  iwe0jre',
        medical_histroy:'adbait sdfwe fd',
        problem: 'ay 7aga'
    },
]
daba.prepare(`
    CREATE TABLE IF NOT EXISTS requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,        
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL,
        creator_number TEXT NOT NULL,
        creator_address TEXT NOT NULL,
        medical_histroy TEXT NOT NULL,
        problem TEXT NOT NULL
    )
`).run()

async function initDaba(){
    const stmt = daba.prepare(`
        INSERT INTO requests VALUES (
            null,
            @slug,
            @title,
            @creator,
            @creator_email,
            @creator_number,
            @creator_address,
            @medical_histroy,
            @problem
        )
    `)
    for (const request of dummyRequests){
        stmt.run(request)
    }
}
initDaba()