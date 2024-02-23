const sql = require('better-sqlite3')
const db = sql('blogs.db')
const dummyBlogs = [
    {
        title: 'Blog-1',
        slug: 'Blug-1',
        image: 'madxa.png',
        summary: 'في البداية، ينبغي إعطاء الأولوية لنفسك، ',
        instructions: 'في البداية، ينبغي إعطاء الأولوية لنفسك، إذ يجب على كل فرد منَا تخصيص الوقت لإتخاذ خطوة استباقية نحو مستقبل أكثر صحة، وجعل الأمر على رأس جدول أعمالك طبقاً للقول الشائع "الوقاية خير من العلاج". من خلال اتخاذ قرار الخضوع للفحص الدوري الشامل، فإنك تتخذ قراراً بالسيطرة على صحتك ومستقبلك.'
    },
    {
        title: 'Blog-2',
        slug: 'Blug-2',
        image: 'madxaNersury.png',
        summary: 'بالرغم من ذلك، لا يهتم الكثير من الناس بحجز الفحص الطبي السنوي. ...',
        instructions: 'بالرغم من ذلك، لا يهتم الكثير من الناس بحجز الفحص الطبي السنوي. مما لاشك فيه أننا نعيش حياة مزدحمة، ولدينا التزامات في العمل والمنزل. بُناءً على ذلك، في حال شعورنا بالصحة واللياقة، فإن زيارة الطبيب غالباً ما تكون آخر ما يدور في أذهاننا، لكن حتى لو لم تكن لديك أي أعراض مرضية أو شكاوى، فإن الفحص الدوري الشامل مهم للغاية.'
    },
    {
        title: 'Blog-3',
        slug: 'Blug-3',
        image: 'madxaDoctor.png',
        summary: 'الفحص الدوري الشامل هو فحص طبي لكامل الجسم....',
        instructions: 'الفحص الدوري الشامل هو فحص طبي لكامل الجسم. يتم مراعاة تصميم هذه الفحوصات الدورية لكل مرحلة من مراحل الحياة، وهي جزء أساسي من منظومة الرعاية الصحية المستمرة. من خلال الخضوع لمجموعة معينة من الفحوصات، يمكن للأطباء تحديد المخاطر المحتملة وعلاج المشكلات الصحية مبكراً، ووضع خطة لمستقبل صحي. إنها خطوة وقائية نحو غدٍ أفضل، ومن ضمن أفضل الخدمات التي تقدمها مادكسا.'
    },
    {
        title: 'Blog-4',
        slug: 'Blug-4',
        image: 'madxaScan.png',
        summary: 'بعد التقييم الشامل لصحتك، سيتمكن الفريق الطبي....',
        instructions:'بعد التقييم الشامل لصحتك، سيتمكن الفريق الطبي الخاص بك من تحديد أي مخاطر قد تؤدي إلى مشاكل صحية مستقبلاً، مع إمكانية تقديم المشورة بشأن أفضل الوسائل التي يمكن من خلالها التعامل مع هذه المخاطر والمشكلات. بعد هذا الفحص معظم المرضى يشعرون بالقدرة على التحكم في صحتهم. تحدث إلى مادكسا حول الفحص الشامل، فالاستثمار في صحتك اليوم، سيكون مفيداً جداً في المستقبل.'
    },
]
db.prepare(`
  CREATE TABLE IF NOT EXISTS blogs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL
  )
`).run()
async function initData() {
    const stmt = db.prepare(`
        INSERT INTO blogs VALUES (
           null,
           @slug,
           @title,
           @image,
           @summary,
           @instructions
        )
     `)
     for (const blog of dummyBlogs) {
        stmt.run(blog);
      }
    }
initData() 