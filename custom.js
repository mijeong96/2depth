var btnCall = document.querySelector(".btnCall"); 

var menuMo = document.querySelector(".menuMo"); 

btnCall.onclick = function(e){
    e.preventDefault(); 
    
    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
}

//마우스 호버시 2depth 활성화
$("#gnb>li").on("mouseenter", function(){
    $(this).find(".sub").show();
});

$("#gnb>li").on("mouseleave", function(){
    $(this).find(".sub").hide();
});

//포커스 이동시 2depth 활성화
//.each() - 배열반복문
$("#gnb>li").each(function(index){

    $("#gnb>li").eq(index).find("a").on("focusin",function(){
        $("#gnb>li").eq(index).find(".sub").show();
    });

    $("#gnb>li").eq(index).find("a").last().on("focusout",function(){
        $("#gnb>li").eq(index).find(".sub").hide();
    });
});