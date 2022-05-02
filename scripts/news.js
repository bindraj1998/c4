// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
let a=document.getElementById("navbar")
a.innerHTML=navbar()


let searc=async(query)=>{
    try{
    
    let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    let data=await res.json()
    return data;
    
    }catch(err){
        console.log(err)
    }
    
    
    
    }
    
    let append=(data,container)=>{
     data.forEach(function(el){
    let div=document.createElement("div")
    // let p=document.createElement("p")
    
    let img=document.createElement("img")
    
    let p=document.createElement("p")
    img.src=el.url;
    p.innerText=el.content;
    div.append(img,p)
    container.append(div)
     })
    
    
    }
     let sear=async(country)=>{
        try{
        
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`)
        let data=await res.json()
        return data;
        
        }catch(err){
            console.log(err)
        }
        
        
        
        }
    
    
    
    export{searc, append,sear }
    
    