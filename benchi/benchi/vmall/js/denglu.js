var all = document.querySelector('.all');
var nav = document.querySelector('nav');
var chuangkou = nav.querySelector('.chuangkou');
var denglu = chuangkou.querySelector('.denglu')
var Mercedes = denglu.querySelector('.Mercedes')
var span = Mercedes.querySelector('span')
var wenhao =span.querySelector('.wenhao')
var tanchuang = span.querySelector('.tanchuang')
var zuo = denglu.querySelector('.zuo')
var you = denglu.querySelector('.you')
var zsanjiao = zuo.querySelector('.zsanjiao')
var ysanjiao = you.querySelector('.ysanjiao')
var up = denglu.querySelector('.up')
var down = denglu.querySelector('.down')
var lll = denglu.querySelector('.lll')
var rrr = denglu.querySelector('.rrr')
//console.log(wenhao);
//console.log(tanchuang);
//问号弹窗
wenhao.onmouseover = function(){
    //console.log(123);
    tanchuang.style.display = 'block'
}
wenhao.onmouseout = function(){
    //console.log(123);
    tanchuang.style.display = 'none'
}
//手机快捷登录和密码登录切换
//console.log(zuo);
//console.log(you);
you.onclick = function(){
    you.className = 'you r biankuang';
    zuo.className = 'zuo l';
    zsanjiao.style.display = 'none';
    ysanjiao.style.display = 'block';
    up.placeholder = '手机号码/邮箱地址/用户名';
    down.placeholder = '登陆密码';
    lll.style.display = 'none';
    rrr.style.display = 'block';
}
zuo.onclick = function(){
    zuo.className = 'zuo l biankuang';
    you.className = 'you r';
    zsanjiao.style.display = 'block';
    ysanjiao.style.display = 'none';
    up.placeholder = '手机号码';
    down.placeholder = '验证码';
    lll.style.display = 'block';
    rrr.style.display = 'none';
}

