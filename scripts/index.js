// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
  import { navbar } from "../components/navbar.js";

let p=document.getElementById("navbar")
p.innerHTML=navbar()





// import {searc, append,sear} from "./fetch.js";

 import{searc,append,sear} from "./news.js"

 
let search=(e)=>{

    let quer=document.getElementById("search_input").value
    searc(quer).then((data)=>{
   console.log(data)
   let container=document.getElementById("resultes")
   container.innerHTML=null
 append(data.articles,container)

})
    
}



    
    
    
      




document.getElementById("search_input").addEventListener("keydown",search)

let categories=document.getElementById("side show").children
function csearch(){

  sear(this.id).then((data)=>{

    console.log(data.articles)
let  container=document.getElementById("resultes")
container.innerHTML=null
append(data.articles,container)

  })

}

for(let el of categories){
el.addEventListener("click",csearch)

}

// let cs= async ()=>{

//         try{
        
//         let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=India`)
//         let data=await res.json()
//         let  container=document.getElementById("resultes")
// console.log(data)
//          appen(data.articles)
        
//         }catch(err){
//             console.log(err)
//         }
//     } 
    
//     function appen(data){
//     data.forEach(function(el){
//         let div=document.createElement("div")
//         // let p=document.createElement("p")
        
//         let img=document.createElement("img")
        
//         let p=document.createElement("p")
//         img.src=el.url;
//         p.innerText=el.content;
//         div.append(img,p)
//         container.append(div)
//          })
        
//     }


//     cs()
   
    
        
        
        
        
  
    
  
  
