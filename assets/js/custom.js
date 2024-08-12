$(function(){  //1번만

    $('.btn-go').click(function(){
        url=$('.select-lang').val();
        window.open(url);
    })





    $('.sc-visual .title').click(function(e){
        e.preventDefault();

        $('.sc-visual .content').removeClass('active');
        $(this).parent().addClass('active');

    })

    slide1 = new Swiper('.visual-slide1',{
        autoplay : { 
            delay : 5000,   
            disableOnInteraction : false, //사용자가 컨트롤하고 나서 진행유무
        },
        loop:true,
        navigation:{
            prevEl: ".prev",
            nextEl: ".next"
        },
        pagination:{
            el:".visual-slide1 .fraction",
            type:"fraction",
        }
    })

    $('.visual-slide1 .auto').click(function(){

        if ($(this).hasClass('on')) {
            slide1.autoplay.start();
            $(this).removeClass('on')
        }else{
            slide1.autoplay.stop();
            $(this).addClass('on')
        }
    })    


    slide2 = new Swiper('.visual-slide2',{
        autoplay : { 
            delay : 5000,   
            disableOnInteraction : false, //사용자가 컨트롤하고 나서 진행유무
        },
        loop:true,
        navigation:{
            prevEl: ".prev",
            nextEl: ".next"
        },
        pagination:{
            el:".visual-slide2 .fraction",
            type:"fraction",
        }
    });

    $('.visual-slide2 .auto').click(function(){

        if ($(this).hasClass('on')) {
            slide2.autoplay.start();
            $(this).removeClass('on')
        }else{
            slide2.autoplay.stop();
            $(this).addClass('on')
        }
    })    


    $('.sc-visual .btn.all').click(function(){
        $('body').addClass('hidden');
        $('.pop-layer').addClass('show')
    })
    $('.pop-layer .close').click(function(){
        $('body').removeClass('hidden');
        $('.pop-layer').removeClass('show')
    })



    // --------------------------------------------슬라이드 배너
    slideBanner = new Swiper('.sc-slideBanner .banner-slide',{
            autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 1000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
            },
            loop:true,
            spaceBetween:43,
            slidesPerView:'3',
            navigation:{
                prevEl: ".prev",
                stopEl: ".stop",
                nextEl: ".next"
            },
            pagination:{
                el:".sc-slideBanner .fraction",
                type:"fraction",
    }
    })
    


 

// ------------------------------------------------------------------스크롤 탑

    $(window).scroll(function(){
        curr = $(this).scrollTop(); 
        searchBar = $('.group-search').offset().top;

        if (curr >= searchBar) {
            $('.btn-top').addClass('on');
        } else {
            $('.btn-top').removeClass('on');
        }
    })

    // btn-top 버튼을 클릭하는 이벤트
    $('.btn-top').click(function(e){
        e.preventDefault();
        // $('.btn-top').click().scrollTop();  처음에 이렇게 하려고함
        window.scrollTo({top:0,behavior:"smooth"})
        // $("html, body").animate({ scrollTop: 0 }, 300);
    });

// ---------------------------------------------------------------------관련메뉴
    $('.sc-related .btn-related').click(function(e){

        if(!$(this).attr('href')){
            e.preventDefault();
            if($(this).hasClass('on')){
                $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').stop().slideUp()
            }else{
                $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').stop().slideUp()
                $(this).addClass('on').siblings('.sub-area').stop().slideDown()
            }
        }

        
    })

})  //1번만 

          