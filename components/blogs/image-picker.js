'use client'
import { useRef, useState } from "react";
import Image from "next/image"
import classes from "./image-picker.module.css"

export default function ImagePicker({label, name}){
    const [pickImage,setPickImage] =useState()
    const imageInput = useRef()
    function handlePicker(){
        imageInput.current.click()
    }
    function handleImageChange(event){
        const file = event.target.files[0]
        if(!file){
            setPickImage(null)
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.control}>
                <div className={classes.preview}>
                    {!pickImage && <p>No image Picked yet</p>}
                    {pickImage && <Image 
                        src={pickImage}
                        alt ="image selected by admin"
                        fill />}
                </div>
                <input 
                 className={classes.input}
                 type="file"
                 id="image"
                 accept='image/png , image/jpeg'
                 name={name} 
                 ref={imageInput}
                 onChange={handleImageChange}
                required/> 
                <button
                  className={classes.button} 
                  type="button"
                  onClick={handlePicker}>
                    Select Image
                 </button>
            </div>
        </div>
    )
}