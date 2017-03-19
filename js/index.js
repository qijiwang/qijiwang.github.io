// JavaScript Document

function setStyle(obj, json)
{
	if(obj.length)
	{
		for(var i=0;i<obj.length;i++)
		{
			setStyle(obj[i], json);
		}
	}
	else
	{
		for(var i in json)
		{
			obj.style[i]=json[i];
		}
	}
}

window.onload=function (){
	
	//导航
	(function (){
		var oUl = document.getElementById("daohangul");
		var aLi = oUl.children;
		var oBox = aLi[aLi.length - 1];
		
		
		for(var i = 0; i < aLi.length - 1; i++){
			aLi[i].onmouseover = function(){
				//oBox.style.left = this.offsetLeft +　"px";	
				move(oBox,this.offsetLeft);
			};
		}
		var speed = 0;
		var left=0;
		function move(obj,iTarget){
			
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				speed += (iTarget - left)/5;//加速度
				speed *= 0.7;  //摩擦
				
				left += speed;
				obj.style.left = Math.round(left) + "px";
				if(obj.offsetLeft == iTarget && Math.abs(speed) < 1){
					clearInterval(obj.timer);
				}
				
				
			},30);
		}
		
	})();
		
		
	//banner选项卡	
	(function (){
		var oDiv = document.getElementById("blast_box");
		var prev = $('#banner_prev');
		var next = $('#banner_next');
		var ull =$('.banner ul');
		var aLi =$('.banner ul li');
		var R = 4;
		var C = 5;
		var len = R*C;
		var iNow = 0;
		var aSpan = oDiv.children;		

		/////

		
		for(var r = 0; r < R; r++){
			for(var c = 0; c < C; c++){
				var oSpan = document.createElement("span");
				oDiv.appendChild(oSpan);
				oSpan.style.width = oDiv.offsetWidth/C + "px";
				oSpan.style.height = oDiv.offsetHeight/R + "px";
				
				oSpan.style.left = oSpan.offsetWidth*c + "px";
				oSpan.style.top  = oSpan.offsetHeight*r + "px";
				
				oSpan.style.backgroundPosition = -oSpan.offsetLeft+"px -"+oSpan.offsetTop + "px";
			}
		}
		
		/*
			oDiv  显示新图
			oSpan 显示老图
		
		*/
		for(var i=0;i<aLi.length;i++){//添加点击
			(function(index){
				aLi[i].onclick=function(){
					iNow = index;
					tab3();
					tab1();
				};	
			})(i);
		}		

		timer = setInterval(function (){
			tab1();	
			tab3();

		},3500);

		prev.click(function (){
			tab2();	
			tab3();
		});

		next.click(function (){
			tab1();	
			tab3();
		});
		oDiv.onmouseover=prev[0].onmouseover=next[0].onmouseover=ull[0].onmouseover=function (){
			clearInterval(timer);
		}
		oDiv.onmouseout=prev[0].onmouseout=next[0].onmouseout=ull[0].onmouseout=function (){
			timer = setInterval(function (){
				tab1();	
				tab3();
				
			},3500);
		}
		/////////
		function tab3(){//切换
			for(var i=0;i<aLi.length;i++){
				aLi[i].style.background ='#fff';	  
			}
			
			aLi[iNow%aLi.length].style.background ='red';	
			
		}

		function tab1(){
				
				//换图片
				
				for(var i = 0; i < len; i++){
					aSpan[i].style.transition = "";	
					aSpan[i].style.opacity = "1";
					aSpan[i].style.transform = "translate(0px,0px) rotateX(0deg) rotateY(0deg)";
					aSpan[i].style.backgroundImage = "images/"+iNow%3+".jpg)";
				}
				
				//div换新图
				oDiv.style.backgroundImage = "url(images/"+(iNow+1)%3+".jpg)";

				iNow++;
				if(iNow>=3)
				iNow=0;	
							
				setTimeout(function(){
					for(var i = 0; i < len; i++){
						//算位置：span中心-oDiv中心  
						aSpan[i].style.transition = "1s all ease";
						var x = aSpan[i].offsetLeft + aSpan[i].offsetWidth/2 - oDiv.offsetWidth/2;
						var y = aSpan[i].offsetTop + aSpan[i].offsetHeight/2 - oDiv.offsetHeight/2;
						
						aSpan[i].style.transform = "translate("+x+"px,"+y+"px) rotateX("+rnd(-180,180)+"deg) rotateY("+rnd(-180,180)+"deg)";
						
						aSpan[i].style.opacity = "0";
						
					}
				},0);
				
		}

		function tab2(){
				
				//换图片
				
				for(var i = 0; i < len; i++){
					aSpan[i].style.transition = "";	
					aSpan[i].style.opacity = "1";
					aSpan[i].style.transform = "translate(0px,0px) rotateX(0deg) rotateY(0deg)";
					aSpan[i].style.backgroundImage = "images/"+iNow%3+".jpg)";
				}
				//div换新图
				oDiv.style.backgroundImage = "url(images/"+(iNow+2)%3+".jpg)";	
				iNow--;
				if(iNow<0){
					iNow=2;	

				}
										
				setTimeout(function(){
					for(var i = 0; i < len; i++){
						//算位置：span中心-oDiv中心  
						aSpan[i].style.transition = "1s all ease";
						var x = aSpan[i].offsetLeft + aSpan[i].offsetWidth/2 - oDiv.offsetWidth/2;
						var y = aSpan[i].offsetTop + aSpan[i].offsetHeight/2 - oDiv.offsetHeight/2;
						
						aSpan[i].style.transform = "translate("+x+"px,"+y+"px) rotateX("+rnd(-180,180)+"deg) rotateY("+rnd(-180,180)+"deg)";
						
						aSpan[i].style.opacity = "0";
						
					}
				},0);
				
		}
		
		function rnd(n,m){
			return Math.floor(Math.random()*(m-n)+n);
		}	
		
	})();
	
	
	////穿墙
	(function (){
		var otem2 = $("#item2");
		var aLi = otem2.find("li");

		for(var i = 0; i < aLi.length; i++){
			lagou(aLi[i]);
		}
		
		
		function lagou(oDiv){
			oDiv.onmouseover = function(ev){
				
				var oFrom = ev.fromElement || ev.releatedTarget;
				
				if(oDiv.contains(oFrom)){
					return ;
				}
				
				var n = getDir(this,ev);
				console.log(n)
				var oSpan = this.children[1];
				switch(n){
					case 0:
						oSpan.style.left = "-331px";
						oSpan.style.top = "0";
						break;
					case 1:
						oSpan.style.left = "0";
						oSpan.style.top = "131px";
						break;
					case 2:
						oSpan.style.left = "331px";
						oSpan.style.top = "0";
						break;
					case 3:
						oSpan.style.left = "0";
						oSpan.style.top = "-131px";
						break;
				}	
				
				$(oSpan).stop().animate({left:0,top:0});
			};
		
			oDiv.onmouseout = function(ev){
				
				var oTo = ev.toElement || ev.releatedTarget;
				
				if(oDiv.contains(oTo)){
					return ;
				}
				
				var n = getDir(this,ev);
				var oSpan = this.children[1];
				switch(n){
					case 0:
						$(oSpan).stop().animate({left:"-311px",top:0});
						break;
					case 1:
						$(oSpan).stop().animate({left:0,top:"131px"});
						break;
					case 2:
						$(oSpan).stop().animate({left:"311px",top:0});
						break;
					case 3:
						$(oSpan).stop().animate({left:0,top:"-131px"});
						break;
				}	
				
				
			};	
		
		}	

		function a2d(n){
			return n*180/Math.PI	
		}

		function getDir(obj,ev){
			var x = ev.clientX - (obj.getBoundingClientRect().left + obj.offsetWidth/2)
			var y = obj.getBoundingClientRect().top + obj.offsetHeight/2 - ev.clientY;
		
			//0 左边  1 下边 2 右边 3上边
			return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
		}

		function getPos(obj){
			var l=t=0;
			while(obj){
				l+=obj.offsetLeft;
				t+=obj.offsetTop;
				obj=obj.offsetParent;
			};
			return {left:l,top:t};
		};		
	})();

	
	////3D环
	(function (){
		var oDiv=document.getElementById("item3");
		var oUl = document.getElementById("end_ul1");
		var aLi = oUl.children;
		var len = aLi.length;
		
		//角度：360/len*i
		for(var i = 0; i < len; i++){
			
			aLi[i].style.transition = "1s all ease " + (len - i)*200 +"ms"
			aLi[i].style.transform = "rotateY("+360/len*i+"deg) translateZ(340px)";
		}
		
		
		var y = 0;
		var x = 150;
		var speedX = 0;
		var speedY = 0;
		var lastX = 0;
		var lastY = 0;
		var timer = null;
		var count = 0;
		oDiv.onmousedown = function(ev){
			clearInterval(timer);
			var disX = ev.clientX - y;
			var disY = ev.clientY - x;
			
			document.onmousemove = function(ev){
				
				y = ev.clientX - disX;
				x = ev.clientY - disY;
				
				if(x > 600){
					x = 600;
				} else if(x < -600){
					x = -600;	
				}
				
				speedX = x - lastX;
				speedY = y - lastY;
				lastX = x;
				lastY = y;		
				
				
				oUl.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)";
			};
			
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				
				clearInterval(timer);
				timer = setInterval(function(){
					
					x += speedX;
					y += speedY;
					
					speedX *= 0.95;
					speedY *= 0.95;
					
					//关定时器 判断速度
					if(Math.abs(speedX) < 1){
						speedX = 0;
					}
					if(Math.abs(speedY) < 1){
						speedY = 0;
					}
					
					if(speedX == 0&& speedY == 0){
						clearInterval(timer);
					}
					document.title = count++;
					oUl.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)"
					
				},30);
				
				
			};
			
			return false;	
		};
		
		
	})();
	
	
	/////////////////////时钟
	
	(function (){

		
			var oDiv=$('#item4');
			var aB = oDiv.find('.clock_son');
			
			function fillZero(n){
				return n<10?'0'+n:''+n;	
			}
		
			
			
			tick();
			
			setInterval(tick,1000);
			function tick(){
				var d = new Date();
				var iY = d .getFullYear();
				var iMo = d .getMonth();
				var iD = d .getDate();
				
			
				
				var hours=d.getHours();
				hours=fillZero(hours)
				var seconds=d.getSeconds();
				seconds=fillZero(seconds);
				var minutes=d.getMinutes();
				minutes=fillZero(minutes);
				var s= hours+minutes+seconds;
				
				$(aB[0]).text(iY+"年");
				$(aB[1]).text(iMo+"月");
				$(aB[2]).text(iD+"日");
				$(aB[3]).text(hours+"时");
				$(aB[4]).text(minutes+"分");
				$(aB[5]).text(seconds+"秒");

			
			}

	

	})();
	
	(function (){
	   $(window).scroll(function(){

	        var top = $(document).scrollTop();          //定义变量，获取滚动条的高度
	        var menu = $("#menu");                      //定义变量，抓取#menu
	        var items = $(".item");   					 //定义变量，查找.item

	        var curId = "";                             //定义变量，当前所在的楼层item #id 

	        items.each(function(){
	            var m = $(this);                        //定义变量，获取当前类
	            var itemsTop = m.offset().top;        //定义变量，获取当前类的top偏移量
	            if(top > itemsTop-100){
	                curId = "#" + m.attr("id");
	            }else{
	                return false;
	            }
	        });

	        //给相应的楼层设置cur,取消其他楼层的cur
	        var curLink = menu.find(".cur");
	        if( curId && curLink.attr("href") != curId ){
	            curLink.removeClass("cur");
	            menu.find( "[href=" + curId + "]" ).addClass("cur");
	        }
	        // console.log(top);
	    });	

	})();
}

