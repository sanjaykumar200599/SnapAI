//This is the custom hook you can use it wherever you need
import { useEffect, useState } from "react"

export const useParallax=()=>{
    const [scrollY,setScrolly]=useState(0);

    useEffect(()=>{
        const handleScroll=()=>setScrolly(window.scrollY);
        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);
    },[]);
     
    return scrollY;
}