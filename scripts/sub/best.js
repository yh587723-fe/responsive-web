const tabBtnArea = document.querySelector(".tab-btn")
const tabBtnA = tabBtnArea.querySelector(".best-a")
const tabBtnB = tabBtnArea.querySelector(".best-b")
const mainContA = document.querySelector(".loan-best-area-a")
const mainContB = document.querySelector(".popular-books-area")
const formArea = document.querySelector(".form-area")
const ulTitLibary = formArea.querySelector(".libary")
const ulTitDate = formArea.querySelector(".date")
const listA = ulTitLibary.querySelectorAll("li")
const listB = ulTitDate.querySelectorAll("li")



tabBtnArea.addEventListener("click",function(e){

    const li = e.target.closest("li")
    if(!li) return
    console.log(e.target)
    if(li == tabBtnA){
        mainContA.classList.add("show")
        tabBtnA.classList.add("active")
        mainContB.classList.remove("show")
        tabBtnB.classList.remove("active")

    }
    
    if(li == tabBtnB){
        mainContB.classList.add("show")
        tabBtnB.classList.add("active")
        mainContA.classList.remove("show")
        tabBtnA.classList.remove("active")
    } 


});

formArea.addEventListener("click",function(e){
    const ul = e.target.closest("ul")
    if(!ul) return
    console.log(ul)
    if(ul == ulTitLibary){
        listA.classList.add("active")
    }

})