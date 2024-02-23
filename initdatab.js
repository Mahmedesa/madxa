const sql = require('better-sqlite3')
const datab = sql('asks.db')

const dummyAsks = [
    {
        title: 'About Health-1',
        slug: 'About-Health-1',
        question: 'I feel like lazy and need your advice about How to being more Healthful ?',
        answer : `there is more way to being healthful but in general we could help you
        1- sleep well from 6h - 8h 
        2- eat healty food and avoid junck food and fast food
        3- train every week from 3d - 5d its will keep you up and fit and make you fell better about your health
        4- if you are somker you have to stop smoking
        5- make Cheackup test or call Madxa to help you`
        ,
        creator: 'Laura Smith',
        creator_email: 'laurasmith@example.com',
    },
    {
        title: 'About Health2',
        slug: 'About-Health-2',
        question: 'I feel like lazy and need your advice about How to being more Healthful ?',
        answer : `there is more way to being healthful but in general we could help you
        1- sleep well from 6h - 8h 
        2- eat healty food and avoid junck food and fast food
        3- train every week from 3d - 5d its will keep you up and fit and make you fell better about your health
        4- if you are somker you have to stop smoking
        5- make Cheackup test or call Madxa to help you`
        ,
        creator: 'Mario Rossi',
        creator_email: 'mariorossi@example.com',
    },
    {
        title: 'About Health3',
        slug: 'About-Health-3',
        question: 'I feel like lazy and need your advice about How to being more Healthful ?',
        answer : `there is more way to being healthful but in general we could help you
        1- sleep well from 6h - 8h 
        2- eat healty food and avoid junck food and fast food
        3- train every week from 3d - 5d its will keep you up and fit and make you fell better about your health
        4- if you are somker you have to stop smoking
        5- make Cheackup test or call Madxa to help you`
        ,
        creator: 'Mario Rossi',
        creator_email: 'mariorossi@example.com',
    },
    {
        title: 'About Health4',
        slug: 'About-Health-4',
        question: 'I feel like lazy and need your advice about How to being more Healthful ?',
        answer : `there is more way to being healthful but in general we could help you
        1- sleep well from 6h - 8h 
        2- eat healty food and avoid junck food and fast food
        3- train every week from 3d - 5d its will keep you up and fit and make you fell better about your health
        4- if you are somker you have to stop smoking
        5- make Cheackup test or call Madxa to help you`
        ,
        creator: 'Franz Huber',
        creator_email: 'franzhuber@example.com',
    },
    {
        title: 'About Health5',
        slug: 'About-Health-5',
        question: 'I feel like lazy and need your advice about How to being more Healthful ?',
        answer : `there is more way to being healthful but in general we could help you
        1- sleep well from 6h - 8h 
        2- eat healty food and avoid junck food and fast food
        3- train every week from 3d - 5d its will keep you up and fit and make you fell better about your health
        4- if you are somker you have to stop smoking
        5- make Cheackup test or call Madxa to help you`
        ,
        creator: 'Sophia Green',
        creator_email: 'sophiagreen@example.com',
    },
]

datab.prepare(`
    CREATE TABLE IF NOT EXISTS asks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL
    )
`).run()

async function initdBase(){
    const stmt =datab.prepare(`
        INSERT INTO asks VALUES (
            null,
            @slug,
            @title,
            @question,
            @answer,
            @creator,
            @creator_email
        )
    `)
    for (const ask of dummyAsks){
        stmt.run(ask)
    }
}
initdBase()