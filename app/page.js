import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";
import classes from "./page.module.css"
import NewslatterSignup, {action as subscribeAction} from "@/components/subscibe/subscribe";

export default function HomePage(){
  return(
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>        
          <div className={classes.hero}>
            <h1>Not just a care</h1>
            <p>Health By hand , Care with another</p>
          </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How Madxa works?</h2>
          <p>
          CAre about your health all the time CAre about your health all the time 
          CAre about your health all the time CAre about your health all the time
          CAre about your health all the time
          CAre about your health all the time CAre about your health all the time
          </p>
          <p>
            We can give you a spicial Medical services all the time at any place
            We can give you a spicial Medical services all the time at any place
            We can give you a spicial Medical services all the time at any place
            We can give you a spicial Medical services all the time at any place 
          </p>
        </section>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
          CAre about your health all the time CAre about your health all the time 
          CAre about your health all the time CAre about your health all the time
          CAre about your health all the time
          CAre about your health all the time CAre about your health all the time
          </p>
          <p>
            We can give you a spicial Medical services all the time at any place
            We can give you a spicial Medical services all the time at any place
            We can give you a spicial Medical services all the time at any place
            We can give you a spicial Medical services all the time at any place 
          </p>
        </section>
        <div className={classes.cta}>
            <Link href="">
              Conect Madxa
              <p>012235668</p>
            </Link>
            <Link href="">
              Connect Madxa
              <p>www.madxa.net</p>
            </Link>
            <Link href="">
              Connect Madxa
              <p>visit us on</p>
            </Link>
        </div>
        <div className={classes.domc}>
          <div className={classes.connect}>
            <h2>Subscribe our Email</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <NewslatterSignup />
          </div>
          <div className={classes.compatators}>
            <div className={classes.domcn}>
              <p>
                <img src="" alt="c1"/>
              </p>
              <p>
                <img src="" alt="c2"/>
              </p>
            </div>
            <div className={classes.domcn}>
              <p>
                <img src="" alt="c3"/>
              </p>
              <p>
                <img src="" alt="c4"/>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}