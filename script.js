let lists =document.getElementsByClassName("list");
let successMessage =document.getElementById("success");
let resetButton = document.getElementById("reset");

let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

    for(list of lists){
        list.addEventListener("dragstart", function(e) { 
            let selected = e.target;
            rightBox.addEventListener("dragover", function(e) { e.preventDefault();});
            rightBox.addEventListener("drop", function(e) {

                displaySuccess();
                setTimeout(() => {
                    removeSuccess();
                }, 1000);
                rightBox.appendChild(selected); 
                rightBox.classList.add("active");
                selected=null; 
            });
            leftBox.addEventListener("dragover", function(e) { e.preventDefault();});
            leftBox.addEventListener("drop", function(e) { 
                displaySuccess();
                setTimeout(() => {
                    removeSuccess()
                }, 1000);
                leftBox.appendChild(selected); 
                selected=null; 
            });
    
        })
    }

function displaySuccess(){
    successMessage.classList.add("active");
}
function removeSuccess(){
    successMessage.classList.remove("active");
}

resetButton.addEventListener("click",()=>{
    rightBox.classList.remove("active");
    if(rightBox.hasChildNodes()){
        for(list of lists){
            leftBox.appendChild(list);
        }
    }
})