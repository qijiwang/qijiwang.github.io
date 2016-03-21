// JavaScript Document
window.onload=function (){
	//导航
	(function (){
		var oUl = document.getElementById("ul");
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
	//爆炸
    (function (){
		var oBao=document.getElementById('content_good_baozha');
		var oDiv=document.getElementById('content_good_div');
		var R = 7;
		var C = 10;
		var len = R*C;
		var iNow = 0;
		
		oBao.onclick = function(){
			oDiv.innerHTML="";
			oDiv.style.backgroundImage="none";
	
			
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
			
			var aSpan = oDiv.children;
			
				
				//换图片
				
				for(var i = 0; i < len; i++){
					aSpan[i].style.transition = "none";	
					aSpan[i].style.opacity = "1";
					aSpan[i].style.transform = "translate(0px,0px) rotateX(0deg) rotateY(0deg)";
					aSpan[i].style.backgroundImage = "url(images/indexbackground"+iNow%5+".jpg)";
				}
				
				//div换新图
				oDiv.style.backgroundImage = "url(images/indexbackground"+(iNow+1)%5+".jpg)";
				
				iNow++;
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
			};
		
		
		function rnd(n,m){
			return Math.floor(Math.random()*(m-n)+n);
		}
		
	})();
	///翻页
	(function (){
		var oFanye=document.getElementById('content_good_fanye');
		var oDiv=document.getElementById('content_good_div');
		var iNow=0;
		var bReady = true;
		oDiv.innerHTML=null;
		var oPage=document.createElement("div");
		var oPage2=document.createElement("div");
		var oFront=document.createElement("div");
		var oBack=document.createElement("div");
		
		oDiv.appendChild(oPage);
		oDiv.appendChild(oPage2);
		oPage.appendChild(oFront);
		oPage.appendChild(oBack);
		
		
		oPage.classList.add("page");
		oPage2.classList.add("page2");
		oFront.classList.add("front");
		oBack.classList.add("back");
		
		
		oFanye.onclick=function (){
//			oDiv.innerHTML=null;
			oDiv.style.backgroundImage=null;

			

			if(!bReady) return ;
			
			bReady = false;
			iNow++;
			
			
			//点击才有运动 transition:1s all ease;
			oPage.style.transition = "1s all ease";
			oPage.style.transform = "perspective(800px) rotateY(-180deg)";
		
			oPage.addEventListener("transitionend",function(){
				bReady = true;
				//运动完成不需要运动
				oPage.style.transition = "none";
				oPage.style.transform = "perspective(800px) rotateY(0deg)";
				
				
				oDiv.style.backgroundImage = "url(images/indexbackground"+iNow%5+".jpg)";
				oFront.style.backgroundImage = "url(images/indexbackground"+iNow%5+".jpg)";
				oBack.style.backgroundImage = "url(images/indexbackground"+(iNow+1)%5+".jpg)";
				oPage2.style.backgroundImage = "url(images/indexbackground"+(iNow+1)%5+".jpg)";	
			});
		}
	})();
	
	////穿墙
	
	(function (){
			var oDiv1=document.getElementById('content_skill_div1');
			var aDiv=oDiv1.getElementsByTagName('div');
			
			for(var i=0;i<aDiv.length;i++){
				addWall(aDiv[i]);
			}
				
				
			function d2a(n){
				return n*Math.PI/180;
			}
			function a2d(n){
				return n*180/Math.PI;
			}
			
			var lastX,lastY;	//前一次的鼠标坐标
			
			document.onmousemove=function (ev){
				var oEvent=ev||event;
				
				lastX=oEvent.clientX;
				lastY=oEvent.clientY;
			};
			
			function addWall(oDiv){
				var oS=oDiv.children[1];
				
				//移入之前的，最后一次的坐标
				oDiv.onmouseenter=function (){
					//找方向
					var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;	
					var cx=oDiv.offsetLeft+oDiv.offsetWidth/2;
					var cy=oDiv.offsetTop+oDiv.offsetHeight/2-scrollTop;
					
					var a=lastX-cx;
					var b=cy-lastY;	//y反着
					
					var ang=90-a2d(Math.atan2(b, a));
					
					if(ang>=-45 && ang<=45){
						//上
						
						oS.style.left=0;
						oS.style.top='-180px';
						
						move(oS, {left: 0, top: 0},{time:800});
					}else if(ang>=45 && ang<=135){
						//右
						
						oS.style.left='180px';
						oS.style.top=0;
						
						move(oS, {left: 0, top: 0},{time:800});
					}else if(ang>=135 && ang<=225){
						//下
						
						oS.style.left=0;
						oS.style.top='180px';
						
						move(oS, {left: 0, top: 0},{time:800});
					}else{
						//左
						
						oS.style.left='-180px';
						oS.style.top=0;
						
						move(oS, {left: 0, top: 0},{time:800});
					}
				};
				
				oDiv.onmouseleave=function (){
					//找方向
					var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;	
					var cx=oDiv.offsetLeft+oDiv.offsetWidth/2;
					var cy=oDiv.offsetTop+oDiv.offsetHeight/2-scrollTop;
					
					var a=lastX-cx;
					var b=cy-lastY;	//y反着
					
					var ang=90-a2d(Math.atan2(b, a));
					
					if(ang>=-45 && ang<=45){
						//上
						move(oS, {left: 0, top: -180},{time:800});
					}else if(ang>=45 && ang<=135){
						//右
						move(oS, {left: 180, top: 0},{time:800});
					}else if(ang>=135 && ang<=225){
						//下
						move(oS, {left: 0, top: 180},{time:800});
					}else{
						//左
						move(oS, {left: -180, top: 0},{time:800});
					}
				};
			}
	})();
	
	////3D环
	(function (){
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
		oUl.onmousedown = function(ev){
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
		var oDiv=document.getElementById('clock_div');
		var aImg=oDiv.getElementsByTagName('img');
		
		function fillZero(n){
			return n<10?'0'+n:''+n;	
		}
	
		
		
		tick();
		
		setInterval(tick,1000);
		function tick(){
		
			var d = new Date();
			var hours=d.getHours();
			hours=fillZero(hours)
			var seconds=d.getSeconds();
			seconds=fillZero(seconds);
			var minutes=d.getMinutes();
			minutes=fillZero(minutes);
			var s= hours+minutes+seconds;
			
			
			
			for(var i=0;i<aImg.length;i++){
			
				aImg[i].src='images/c'+s.charAt(i)+'.png';	
			}
		
		}
	})();
}

