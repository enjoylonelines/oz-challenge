const form = document.getElementById('form');

form.addEventListener("submit", function(e){
    e.preventDefault();

    let userId = e.target.userId.value;
    let userPw1 = e.target.userPw1.value;
    let userPw2 = e.target.userPw2.value;
    let userName = e.target.userName.value;
    let userPhoneNumber = e.target.userPhoneNumber.value;
    let userGender = e.target.userGender.value;
    let userPosition = e.target.userPosition.value;
    let userEmail = e.target.userEmail.value;
    let userIntro = e.target.userIntro.value;

    if(userId.length < 6){
         alert('아이디를 6글자 이상 입력하세요');
    }
    else if(userPw1 != userPw2){
        alert('비밀번호가 일치하지 않습니다');
    }
    else{
        const data = `${userName}님 안녕하세요
        입력하신 내역은 다음과 같습니다 <br>
        아이디: ${userId} <br>
        이름: ${userName} <br>
        전화번호: ${userPhoneNumber} <br>
        성별: ${userGender} <br>
        원하는 직무: ${userPosition} <br>
        이메일: ${userEmail} <br>
        자기소개: ${userIntro} <br>
        `;
        document.body.innerHTML = "";
        document.body.innerHTML = data;
           
    }

})
