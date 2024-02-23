'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import heroImg from "@/assets/madxa.png"
import airImg from "@/assets/madxaDoctor.png"
import checkImg from "@/assets/madxaNersury.png"
import injecImg from "@/assets/madxaScan.png"
import classes from "./image-slideshow.module.css"


const images = [
    {image: heroImg, alt:'Hero Doctor'},
    {image: airImg, alt:'Air peice'},
    {image: checkImg, alt:'Check scan'},
    {image: injecImg, alt:'Inject'},
    
]

export default function ImageSlideshow(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    useEffect(()=>{
        const interval =setInterval(()=>{
            setCurrentImageIndex((prevIndex)=>
            prevIndex < images.length -1 ? prevIndex + 1 : 0
            )
        },5000)
        return () => clearInterval(interval)
    }, [])
    return(
        <div className={classes.slideshow}>
            {images.map((image, index)=>(
                <Image 
                  key={index}
                  src={image.image}
                  className={index===currentImageIndex ? classes.active : ''}
                  alt={image.alt}/>
            ))}
        </div>
    )
}