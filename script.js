let liArr=document.querySelectorAll("li");
let selected=document.querySelector(".selectedRating")
let ratingNum;
liArr.forEach((li)=>{
    li.addEventListener("click",function(){
        liArr.forEach((list)=>{
            list.classList.remove("selected");
        })
        this.classList.add("selected")
        ratingNum=this.innerHTML;
        
    })
})

function gooo() {
    if (ratingNum) {
        localStorage.setItem("selecteditem", ratingNum);
        window.location.replace("popup.html");
    } else {
        alert("Please select a rating first.");
    }
}

document.addEventListener("DOMContentLoaded",function(){
    let selecteditem=localStorage.getItem("selecteditem");

    if(selecteditem){
        selected.textContent=`${selecteditem}`;
    }
})
