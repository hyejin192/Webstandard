$('.title .Btn').click(function () {
    // $('.nav').css({display:"block"})
    //$('.nav').show();
    //$('.nav').slideDown();
    // $('.nav').toggle(); : on,off 다 가지고 있는 기능
    // $('.nav').fadeToggle(); : 조금의 시간을 가짐(자연스럽진 않음)
    $('.nav').slideToggle(); // 부드럽게 올라가고 내려감
    $(this).toggleClass('on') // 눌렸을 때 .Btn 뒤에 클래스명 'on'이 붙는다("Btn on")
})

// banner
$('.banner').slick({
    dots: true, // dot = pasination = slidebar
    slidesToShow: 3, // 3개씩 눈에 보이게 함
    slidesToScroll: 1, // 넘길 때 3칸씩 넘겨짐
    autoplay: true, // 자동재생
    autoplaySpeed: 2000, // 자동재생 시간 (1000 = 1s)
});

// gallery
$('.gallery_img').slick({
    arrows: false,
});

$('.gallery_btn .play').click(function () {
    $('.gallery_img').slick('slickPlay');
    // slickPlay :  자동 재생 시작 (옵션도 true) 
})
$('.gallery_btn .pause').click(function () {
    $('.gallery_img').slick('slickPause');
    // slickPause :  자동재생 일시중지
})
$('.gallery_btn .prev').click(function () {
    $('.gallery_img').slick('slickPrev');
    // slickPrev : 이전 슬라이드 보이게 함
})
$('.gallery_btn .next').click(function () {
    $('.gallery_img').slick('slickNext');
    // slickNext : 다음 슬라이드 보이게 함
})

/* ------------------------- tab_menu */
var Tab_List = $('.tab_menu');
console.log(Tab_List)

// .find() : 하위요소 (내 밑에 있는 요소 모두)
// .parent() : 부모요소
// .s
Tab_List.find('ul>li>ul').hide(); // 마지막 ul의 하위요소들을 모두 다 숨겨라
Tab_List.find('ul>li.active>ul').show(); // class명이 .active인 li의 자식인 ul의 자식을 보여라
$('.tab_menu>ul>li>a').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    // .next() : 바로 밑 요소 (클릭한 요소의 바로 아래 동생)
    $this.next().show();
    // 나(li)를 제외한 형제들은 removeClass('active')클래스명이 active을 지워라 그리고 자식인 ul을 숨겨라
    $this.parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();

    // 연결연산자 이용
    // $this.next().show().parent('li').addClass('active').siblings('li'),remaoveClass('active').find('ul').hide();
})

/* ------------------------- layer 팝업 */
$('.layer').click(function (event) {
    event.preventDefault();
    $('#layer').fadeIn();
})
$('#layer .close').click(function (event) {
    event.preventDefault();
    $('#layer').fadeOut();
});

/* ----------------------------- 윈도우 팝업 */
$('.window').click(function (e) {
    e.preventDefault();
    window.open("popup.html", "layer", "left=20,top=100,width=900,height=500");
})

/* ------------------------------- lightgallery */

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
    speed: 500,
    // ... other settings
});