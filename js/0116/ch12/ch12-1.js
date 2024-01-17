const input = document.querySelector('.input');
let firstNum = '';
let secondNum = '';
let ops = '';


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
                input.value = parseInt(firstNum) + parseInt(secondNum);
                break;
            case '-':
                input.value = parseInt(firstNum) - parseInt(secondNum);
                break;
            case 'X':
                input.value = parseInt(firstNum) * parseInt(secondNum);
                break;
            case '/':
                input.value = parseInt(firstNum) / parseInt(secondNum);
                break;
                        
        }
    }
});
document.querySelector('.clear').addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    ops = '';
    input.value = '';
});
