
const draw = document.querySelector('#draw');
const reset = document.querySelector('#reset');
const numbers = document.querySelector('.numbers');
const today = document.querySelector('#today');
let nums = [];
let isRunning = false;
let inter = '';


const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
today.innerText = `${year}년 ${month}월 ${date}일 `

function interval(){

        inter = setInterval(drawNumber, 1000);
}

function appendNum(num){
    const p = document.createElement('p');
    p.innerText = num;
    p.classList.add('eachnum');
    numbers.append(p);
}

function drawNumber(){
    resetNumber();
    while(nums.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1;
        if(nums.indexOf(rn) === -1) {
            nums.push(rn);
            appendNum(rn);
        }
    }
    interval();
}

function resetNumber(){
    nums.splice(0, 6);
    numbers.innerHTML = '';
    clearInterval(inter);

}

draw.addEventListener('click', drawNumber);
reset.addEventListener('click', resetNumber);
