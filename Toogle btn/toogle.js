// let modeBtn=document.querySelector("#mode");
// let currMode="light";
// modeBtn.addEventListener("click",()=>{
//    if (currMode ==="light"){
//     currMode="dark";
//     // document.querySelector("body").style.backgroundColor="black";
//    }
//    else{
//     currMode="light";
//     // document.querySelector("body").style.backgroundColor="white";
//    }
//    console.log(currMode);
// });
//===========another way===========
let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";
modeBtn.addEventListener("click",()=>{
   if (currMode ==="light"){
    currMode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }
   else{
    currMode="light";
    body.classList.add("light");
    body.classList.remove("dark")
   }
   console.log(currMode);
});
