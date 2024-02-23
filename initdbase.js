const sql = require('better-sqlite3')
const dbase = sql('services.db')
const dummyServices = [
    {
        title: 'service1',
        slug: 'service1',
        summary: 'first service',
        instructions: 'this is our first service from our services',
    },
    {
        title: 'service2',
        slug: 'service2',
        summary: 'second service',
        instructions: 'this is our second service from our services',
    },
    {
        title: 'service3',
        slug: 'service3',
        summary: 'third service',
        instructions: 'this is our third service from our services',
    },
    {
        title: 'service4',
        slug: 'service4',
        summary: 'fourth service',
        instructions: 'fourth is our first service from our services',
    },
]

dbase.prepare(`
    CREATE TABLE IF NOT EXISTS services(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        summary TEXT NOT NULL,
        instructions TEXT NOT NULL
    )
`).run()
async function initbData(){
    const stmt = dbase.prepare(`
    INSERT INTO services VALUES (
        null,
        @slug,
        @title,
        @summary,
        @instructions
     )
    `)
    for (const service of dummyServices) {
        stmt.run(service);
      }
}
initbData()
