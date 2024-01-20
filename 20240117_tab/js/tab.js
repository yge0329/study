const config = {
    class : "--active",
    // class1 : "--current", <- 클래스 추가해줄 때 이런식으로(문자열 자체를 객체로 만들어준 것)
};
// // jquery
// const tabButton = $(".tab-type1 li");
// const tabContent = $(".tab-content div");

// tabButton.on("click", function () {
//     let idx = $(this).index(); //클릭한게 몇번째인지
//     console.log(idx);

//     tabButton.removeClass(config.class); //모든 li의 클래스 제거 후 //config.class = "--active"와 동일, 여러 클래스로 제어할때 위 config에 추가해서 사용해도 됨
//     $(this).addClass(config.class); //this: 클릭한 이벤트 그 자신만 활성화

//     tabContent.removeClass(config.class);
//     tabContent.eq(idx).addClass(config.class);
//     //eq: nth를 잡는 제이쿼리 매서드 -몇번째인지 알려줌
// });


//javascript 
const tabButton = document.querySelectorAll(".tab-type1 li");
//li가 여러개이므로 querySelectorAll. 한개면 querySelector 
const tabContent = document.querySelectorAll(".tab-content div");

const removeClass = () => {
    tabButton.forEach((el)=>{
        el.classList.remove("--active"); //"--active"를 config.class로 바꿔줘도 똑같이 나옴
    });
    tabContent.forEach((el)=>{
        el.classList.remove("--active");
    });
};

tabButton.forEach((el, idx) => {
    el.addEventListener("click", () => {
        removeClass(); //위에 만들어준 removeClass 함수 
        el.classList.add("--active");
        tabContent[idx].classList.add("--active"); //몇번째인지 찾아가는 부분
    });
});