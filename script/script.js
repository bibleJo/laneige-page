$(document).ready(function(){
    $('#slide_btbox>ul>li').click(function(){
        $(this).css({'background-color':'transparent','border':'2px solid #000'}).siblings().css({'background-color':'rgba(0,0,0,0.4)','border':'none'})
        $('#slide_imgbox').animate({'left':$(this).index()*-100+'%'})
    })
})