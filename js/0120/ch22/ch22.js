const apiTheDogImgs = 'https://dog.ceo/api/breeds/image/random/48';
const apiAllOfTheDogBreeds = 'https://dog.ceo/api/breeds/list/all';

const header =document.getElementById('header');
const main = document.getElementById('main');
const input = document.getElementById('filter-text');
const button = document.getElementById('filter-button');
const select = document.getElementById('filter-select');
const more = document.getElementById('more');
const toTheTop = document.getElementById('tothetop');
const reset = document.getElementById('reset');
const req2 = new XMLHttpRequest();

let curDogs = [];
let isHaveToPush = true; 
//강아지 사진 뿌리기
const openApi = function(){
    const req1 = new XMLHttpRequest(); 
    // req1을 전역 변수로 만들면 객체에 대한 이전 요청을 참조하기 때문에   
    // 비동기적으로 여러개의 요청이 들어오면, 요청들이 서로의 값을 덮어쓰게 된다.
    // openApi 함수를 쓸 때마다 새로운 req1 요청 객체를 만드는 것으로 해결.
    req1.open('get', apiTheDogImgs);
    req1.addEventListener('load', function(){
        const res = JSON.parse(req1.response);
        const msg = res.message;
        console.log(msg);
        msg.forEach(function(item){
            if(isHaveToPush)curDogs.push(item);
            createDogImgs(item);
        });
        isHaveToPush = false;
    })
    req1.send(); //요청 보내기
}

const createDogImgs = function(item){
    const div = document.createElement('div');
    div.classList.add('flex-item');
    div.innerHTML = `
    <img src= ${item}>
    `
    main.append(div);
}

window.addEventListener('load', function(){
    openApi();
   
    // 셀렉트에 견종 뿌리기
    req2.open('get', apiAllOfTheDogBreeds);
    req2.addEventListener('load', function(){
        const res = JSON.parse(req2.response);
        const arr = Object.keys(res.message);
        arr.forEach(function(item){
            const option = document.createElement('option');
            option.innerText = item;
            option.value = item;
            select.append(option);
        })
    })
    req2.send();

})

button.addEventListener('click', function(){    
    main.innerHTML = '';
    const filteredDogs = curDogs.filter(function(item){
        console.log(item.indexOf(input.value))
        return item.indexOf(input.value) !== -1; 
        // 1로 하면 아무것도 안치면 아무것도 안나옴
    })
    input.value = '';
        filteredDogs.forEach(function(item){
            createDogImgs(item);
    })
})

select.addEventListener('change', function(){    
    main.innerHTML = '';
    const filteredDogs = curDogs.filter(function(item){
        return item.indexOf(select.value) !== -1; 
        // 1로 하면 아무것도 안치면 아무것도 안나옴
    })
    
        filteredDogs.forEach(function(item){
            createDogImgs(item);  
    })
})

more.addEventListener('click', function(){
    openApi();
})

toTheTop.addEventListener('click', function(){
    window.scrollTo({ top : 0});
})

reset.addEventListener('click', function(){
    curDogs = [];
    main.innerHTML = '';
    isHaveToPush = true;
    openApi();
})