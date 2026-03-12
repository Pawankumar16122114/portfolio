const roles=[
"Software Engineer",
"Android Developer",
"Web Developer"
]

let index=0
let charIndex=0
let deleting=false

function type(){

const el=document.getElementById("typing")
const text=roles[index]

if(!deleting){
el.textContent=text.substring(0,charIndex++)
}else{
el.textContent=text.substring(0,charIndex--)
}

if(!deleting && charIndex===text.length){
deleting=true
setTimeout(type,1000)
return
}

if(deleting && charIndex===0){
deleting=false
index++
if(index===roles.length) index=0
}

setTimeout(type,deleting?50:100)

}

type()



document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("light")
}



function filterProjects(category){

const projects=document.querySelectorAll(".project")

projects.forEach(project=>{

if(category==="all"){
project.style.display="block"
}
else if(project.classList.contains(category)){
project.style.display="block"
}
else{
project.style.display="none"
}

})

}



particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}



})