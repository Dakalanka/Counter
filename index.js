const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const value = document.getElementById("value");
let count = 0;


increase.addEventListener('click', function(){
  count++
  value.innerText = count;
  if(count > 0){
  value.style.color = "green";
  }if(count === 0){
    value.style.color = "#222";
}
});

decrease.addEventListener('click', function(){
    count--
    value.innerText = count;
    if(count < 0){
        value.style.color = "red"
    }if(count === 0){
        value.style.color = "#222";
    }
});

reset.addEventListener('click', function(){
    count = 0;
    value.innerText = count;
    if(count === 0){
        value.style.color = "#222";
    }
});

