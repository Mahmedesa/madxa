import Image from "next/image";
import madxaIcon from "@/assets/icons/madxa.png"
import doctorIcon from "@/assets/icons/madxaDoctor.png"
import nurseIcon from "@/assets/icons/madxaNersury.png"
import scanIcon from "@/assets/icons/madxaScan.png"
import classes from "./page.module.css"

export default function AboutPage(){
    return(
        <>
            <header className={classes.header}>
                <h1>
                    More About <span className={classes.highlight}>
                        Madxa
                    </span>
                </h1>
                <p>للتعرف علينا اكمل المقال</p>
            </header>
            <main className={classes.main}>
                <h2>معلومات عنا</h2>
                <ul className={classes.inform}>
                    <li>
                        <p>كيان رائد في مجال الرعاية الطبية المنزلية، شبكة رعاية طبية منزلية متكاملة تعمل على أعلى مستوى من حيث الخبرة والتعقيم، والاهتمام بكافة تفاصيل الرعاية المنزلية.</p>
                        <Image src={madxaIcon} alt="madxa help"/>
                    </li>
                    <li>
                        <p>تضم مادكسا أكبر وأفضل الأطباء الاستشاريين في جميع المجالات، وفريق تمريض على أعلى مستوى، ومؤهل للتعامل مع الحالات الحرجة وكبار السن، وذوي الاحتياجات الخاصة.</p>
                        <Image src={doctorIcon} alt="madxa doctor"/>
                        <Image src={nurseIcon} alt="madxa nursing" />
                    </li>
                    <li>
                        <p>كما يمكنك اجراء الاشعة الطبيعة معنا بدون الذهاب لمراكز الاشعة</p>
                        <Image src={scanIcon} alt="madxa scan"/>
                    </li>
                </ul>
            </main>
        </>
    )
}