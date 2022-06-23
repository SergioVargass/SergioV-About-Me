let sectionOne = document.getElementById("section") 
let sectionTwo = document.getElementById("sectionTwo") 
let sectionThree = document.getElementById("sectionThree") 


let clickBtn = document.getElementById("click")
let clickTwoBtn = document.getElementById("clickMe")
let clickThreeBtn = document.getElementById("clicks")


clickBtn.addEventListener("click", () => { 
	changePage(1)
})
clickTwoBtn.addEventListener("click", () => { 
	changePage(2)
})
clickThreeBtn.addEventListener("click", () => { 
	changePage(3)
})
function changePage(pageNumber) {
    if (pageNumber == 1) {
    	sectionOne.style.display = "block";
      	sectionTwo.style.display = "none";
          sectionThree.style.display = "none";
         
    } else if (pageNumber == 2) {
        sectionOne.style.display = "none";
       sectionTwo.style.display = "block";
       sectionThree.style.display = "none";

    } else if (pageNumber == 3) {
        sectionOne.style.display = "none";
       sectionTwo.style.display = "none";
       sectionThree.style.display = "block";
    }
}