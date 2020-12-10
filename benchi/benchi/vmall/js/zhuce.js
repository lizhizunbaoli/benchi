var all = document.querySelector('.all');
var nav = document.querySelector('nav');
var chuangkou = nav.querySelector('.chuangkou');
var denglu = chuangkou.querySelector('.denglu')
var Mercedes = denglu.querySelector('.Mercedes')
var span = Mercedes.querySelector('span')
var wenhao =span.querySelector('.wenhao')
var tanchuang = span.querySelector('.tanchuang')

wenhao.onmouseover = function(){
    //console.log(123);
    tanchuang.style.display = 'block'
}
wenhao.onmouseout = function(){
    //console.log(123);
    tanchuang.style.display = 'none'
}