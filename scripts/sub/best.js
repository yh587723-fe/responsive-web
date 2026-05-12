const tabBtnArea = document.querySelector(".tab-btn")
const tabBtnA = tabBtnArea.querySelector(".best-a")
const tabBtnB = tabBtnArea.querySelector(".best-b")
const mainContA = document.querySelector(".loan-best-area-a")
const mainContB = document.querySelector(".popular-books-area")

const ulA = document.querySelector(".libary")
const liA = ulA.querySelectorAll(".libary li")
const ulB = document.querySelector(".date")
const liB = ulB.querySelectorAll(".date li")



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

ulA.addEventListener("click",function(e){

    this.classList.toggle("open");

    liA.forEach(function(item){

        if(!item.classList.contains("show")){

            if(ulA.classList.contains("open")){

                item.style.display = "block"

            }else{

                item.style.display = "none"
            }
        }

    })

})
ulB.addEventListener("click",function(e){

    this.classList.toggle("open");

    liB.forEach(function(item){

        if(!item.classList.contains("show")){

            if(ulB.classList.contains("open")){

                item.style.display = "block"

            }else{

                item.style.display = "none"
            }
        }

    })

})