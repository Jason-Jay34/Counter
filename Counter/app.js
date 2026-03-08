//set Innitial Count
let count = 0;
// Select value and btn
const value =document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn){
    btn.addEventListener("click", function (e){
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")){
        count --;
    }
    else if(styles.contains("increase")){
        count ++;
    }

    else if(styles.contains("reset")){
        count = 0;
    }

    //Update the value on Screen
    value.textContent = count;
    });
});