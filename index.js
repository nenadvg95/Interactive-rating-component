// const result = document.querySelector(".result");
// const questionary = document.querySelector(".questionary");
// const num = document.querySelector(".result").querySelector("span");
// const button = document.querySelector(".button");



// document.addEventListener("click",e=>{
//     const arr = document.querySelectorAll(".circle");
//     arr.forEach((element)=>
//     element.removeAttribute("id","clicked"));
//     if(e.target.matches(".circle")){
//        e.target.setAttribute("id","clicked");
//        const pickedNum = e.target.innerText;
//        num.innerText = pickedNum;
//     }else{
//         document.querySelector(".circle").removeAttribute("id","clicked")
//     }
//     document.addEventListener("click",e=>{
//         if(e.target.matches(".submit")&&num.innerText != ""){
//             questionary.style.display = "none";
//             result.style.display ="grid";
//         }
//     })
// })
const reviewPage = document.querySelector(".questionary");
const resultPage = document.querySelector(".result")
const submit = document.querySelector(".submit");
const ratingButtonsArray =  document.querySelectorAll(".circle");
const spanFill = document.querySelector(".selected span");

ratingButtonsArray.forEach((pick)=>{
    pick.addEventListener("click",e=>{
        spanFill.innerText = e.target.innerText;
        console.log(spanFill);
    })
})

submit.addEventListener("click",e=>{
    if(spanFill.innerText != ""){
        reviewPage.style.display = "none";
        resultPage.style.display = "grid";
    }else{
        alert("You must choose rate.")
    }
})

