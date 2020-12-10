	var tus = document.querySelector('#tus');
	var tu1 = tus.querySelector('#tu1')
	var ul1 = tu1.querySelector('#ul1')
	var lis1 = ul1.querySelectorAll("li")

	for(var i=0;i<lis1.length;i++){
	    lis1[i].onmouseover = function(){
	        this.style.background = '#121218';
			this.style.opacity = ".5"
			this.childNodes[1].style.background = "white";
			this.childNodes[1].style.color="black"
	    };
		lis1[i].onmouseout = function(){
		    this.style.background = '';
			this.style.opacity = ""
			this.childNodes[1].style.background = "";
			this.childNodes[1].style.color="white"
		};
	};
	

	
	function Tab(id){
	    var parent = document.querySelector('#'+id);
	    var zhezao = parent.querySelector('.zhezao');
	    var jieshao = parent.querySelector('#jieshao');
	    var ps = parent.querySelectorAll('p');
		
		parent.onmouseover = function(){
		    zhezao.style.background = '#121218';
			ps[1].style.display='block';
			ps[2].style.display='block';
			jieshao.style.top = '30%'
		};
		parent.onmouseout = function(){
		    zhezao.style.background = '';
			ps[1].style.display='none';
			ps[2].style.display='none';
			jieshao.style.top = '50%'
		}; 
	}
	
	

	
	Tab('tu2');
	Tab('tu4');
	Tab('tu5');
	Tab('tu7');
	Tab('tu8');
	
	
	
	function Tab2(id){
	    var parent = document.querySelector('#'+id);
	    var zhezao1 = parent.querySelector('.zhezao1');
		var zhezao2 = parent.querySelector('.zhezao2');
	    var jieshao1 = parent.querySelector('#jieshao1');
		var jieshao2 = parent.querySelector('#jieshao2');
	    var ps1 = jieshao1.querySelectorAll('p');
		var ps2 = jieshao2.querySelectorAll('p');

		jieshao1.onmouseover = function(){
		    zhezao1.style.background = '#121218';
			ps1[1].style.display='block';
			ps1[2].style.display='block';
			jieshao1.style.top='30%'
		};
		jieshao1.onmouseout = function(){
		    zhezao1.style.background = '';
		    ps1[1].style.display='none';
		    ps1[2].style.display='none';
		    jieshao1.style.top='50%'
		};
		
		jieshao2.onmouseover = function(){
		    zhezao2.style.background = '#121218';
			ps2[1].style.display='block';
			ps2[2].style.display='block';
			jieshao2.style.top='30%'
		};
		jieshao2.onmouseout = function(){
		    zhezao2.style.background = '';
		    ps2[1].style.display='none';
		    ps2[2].style.display='none';
		    jieshao2.style.top='50%'
		};
	}
	
	Tab2('tu3');
	Tab2('tu6');
	
	
	
	var footer = document.querySelector("footer");
	function Footer(id){
		var dibu = document.querySelector('#'+id);
		var di3 = dibu.querySelector('#di3');
		var di31 = di3.querySelector("#di31");
		var button1 = di31.querySelector('div');
		var button2 = di31.querySelector("#xiexing")
		
		var now = 0;
		
		button1.onmousemove =function(){
			this.style.background='greenyellow'
		}
		button1.onmouseout =function(){
			this.style.background='#6C757D'
		}
		
		button1.onclick = function(){
			var weixin = footer.querySelector('#weixin');
			now++;
			if(now%2 == 1){
				weixin.style.display="block";
				button2.style.display="block";
				
				button2.onclick =function(){
					now++;
					weixin.style.display="none"
					button2.style.display="none";
				}
				
			}
			else{
				weixin.style.display="none"
				button2.style.display="none";
			}
		}
		
	}
	
	Footer("dibu")
	
	var header = document.querySelector('#header')
	window.onmousewheel = function(ev){   //鼠标滚轮事件 (连续触发的事件)
	    //console.log(123);
	    
	    //console.log( ev.wheelDelta );   //向下滚动 -120  向上滚动 120
	
	    if( ev.wheelDelta < 0 && pageYOffset > 108){
	        header.style.display='none'
	    }
	    else{
	        header.style.display='block'
	    }
	
	};
	
	
	function Shousuo(id){
		var shoubutton = document.querySelector('#'+id);
		var shou = document.querySelector('#shousuo');
		var demo = document.querySelector('#demo');
		var now = 0;
		
		shoubutton.onclick=function(){
			now++;
			if(now%2==1){
				shou.style.display='block';
				demo.style.marginTop=0;
				document.documentElement.scrollTop=0;
			}
			else{
				shou.style.display='none';
				demo.style.marginTop='108px';
			}
		}
	}
	Shousuo('shou')
	
	var fenxiang = document.querySelector('#fenxiang');
	var spans = fenxiang.querySelectorAll('span');
	
	
	
	function Fenxiang(){
		var now =0;
		spans[0].onclick=function(){
			now++;
			if(now%2==1){
				spans[1].style.display='block';
				spans[2].style.display='block';
			}
			else{
				spans[1].style.display='none';
				spans[2].style.display='none';
			}
		}
	}
	Fenxiang()
	for(var i=0;i<spans.length;i++){
		spans[i].onmouseover=function(){
			this.style.color='#007BFF'
		}
		spans[i].onmouseout=function(){
			this.style.color='black'
		}
	}
	
	
	
	var kefu = document.querySelector("#duihua1");
	var duihua = document.querySelector("#duihua");
	var guanbi = duihua.querySelector("p span");
	
	kefu.onclick=function(){
		this.style.display="none";
		duihua.style.display="block"
	}
	guanbi.onclick=function(){
		duihua.style.display="none";
		kefu.style.display="block"
	}