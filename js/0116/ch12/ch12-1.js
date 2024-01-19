const input = document.querySelector('.input');
let firstNum = '';
let secondNum = '';
let ops = '';
let result = 0;

function onClickNumber(event){
    const num = event.target.textContent;
    if(!ops){
        firstNum += num;
        input.value += num;
        return;
    }
    if(!secondNum){
        input.value = '';
    }
    secondNum += num;
    input.value += num;
}
function onClickOps(event){
    if(firstNum && secondNum){
        switch(ops){
            case '+':
                result = parseInt(firstNum) + parseInt(secondNum);
                input.value = result;
                break;
            case '-':
                result = parseInt(firstNum) - parseInt(secondNum);
                input.value = result; 
                break;
            case 'X':
                result = parseInt(firstNum) * parseInt(secondNum);
                input.value = result;
                break;
            case '/':
                result = parseInt(firstNum) / parseInt(secondNum);
                input.value = result;
                break;  
        }
        firstNum = result;
        secondNum = '';
    }
    ops = event.target.textContent;
}
document.querySelector('.one').addEventListener('click', onClickNumber);
document.querySelector('.two').addEventListener('click', onClickNumber);
document.querySelector('.three').addEventListener('click', onClickNumber);
document.querySelector('.four').addEventListener('click', onClickNumber);
document.querySelector('.five').addEventListener('click', onClickNumber);
document.querySelector('.six').addEventListener('click', onClickNumber);
document.querySelector('.seven').addEventListener('click', onClickNumber);
document.querySelector('.eight').addEventListener('click', onClickNumber);
document.querySelector('.nine').addEventListener('click', onClickNumber);
document.querySelector('.zero').addEventListener('click', onClickNumber);

document.querySelector('.plus').addEventListener('click', onClickOps);
document.querySelector('.minus').addEventListener('click', onClickOps);
document.querySelector('.multiple').addEventListener('click', onClickOps);
document.querySelector('.divide').addEventListener('click', onClickOps);

document.querySelector('.equal').addEventListener('click', () => {
    if(secondNum){
        switch(ops){
            case '+':
                result = parseInt(firstNum) + parseInt(secondNum);
                input.value = result;
                break;
            case '-':
                result = parseInt(firstNum) - parseInt(secondNum);
                input.value = result; 
                break;
            case 'X':
                result = parseInt(firstNum) * parseInt(secondNum);
                input.value = result;
                break;
            case '/':
                result = parseInt(firstNum) / parseInt(secondNum);
                input.value = result;
                break;  
        }
        firstNum = result;
        secondNum = '';
        ops = '';
    }
});
document.querySelector('.clear').addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    ops = '';
    input.value = '';
    result = 0;
});
