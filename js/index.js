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
		var aSon=document.getElementsByClassName("banner_son");
		var aBox=document.getElementsByClassName("banner_box");
		for(var i=0;i<aSon.length;i++){
			(function (index){
				aSon[i].onmouseover=function(){
					for(var i=0;i<aSon.length;i++){
						
						aBox[i].style.display="none";
					}
					aBox[index].style.display="block";
				}
				
			})(i);
			
		};
		
	})();
		
		
    //翻页
	(function (){
		var oDiv  = document.getElementById("banner_div1");
		var oFanye=document.getElementById("banner_fanye");
		
		
		var iNow = 0;
		var bReady = true;
		
			
			oPage=document.createElement("div");
			var oPage2=document.createElement("div");
			var oFront=document.createElement("div");
			var oBack=document.createElement("div");
			
			oPage.className="page";
			oPage2.className="page2";
			oFront.className="front";
			oBack.className="back";
	
			oDiv.appendChild(oPage);
			oDiv.appendChild(oPage2);
			oPage.appendChild(oFront);
			oPage.appendChild(oBack);
	
		
			oFanye.onclick = function(){
		
				if(!bReady) return ;
				 bReady = false;
				
				//点击才有运动 transition:1s all ease;
				oPage.style.transition = "1s all ease";
				oPage.style.transform = "perspective(800px) rotateY(-180deg)";

	       }
	  
	   oPage.addEventListener("transitionend",function(){
			bReady = true;
			iNow++;
			//运动完成不需要运动
			oPage.style.transition = "none";
			oPage.style.transform = "perspective(800px) rotateY(0deg)";
			
		
			oDiv.style.backgroundImage = "url(images/indexbackground"+iNow%3+".jpg)";
			oFront.style.backgroundImage = "url(images/indexbackground"+(iNow)%3+".jpg)";
			oBack.style.backgroundImage = "url(images/indexbackground"+(iNow+1)%3+".jpg)";
			oPage2.style.backgroundImage = "url(images/indexbackground"+(iNow+1)%3+".jpg)";	
	   });
	})();		
		
	//爆炸
    (function (){
		var oDiv=document.getElementById('banner_div2');
		var oBao=document.getElementById('banner_baozha');
		
		var R = 5;
		var C = 9;
		var len = R*C;
		var iNow = 0;
		
		oBao.onclick = function(){
			oDiv.innerHTML="";
			
			for(var r = 0; r < R; r++){
				for(var c = 0; c < C; c++){
					var oSpan = document.createElement("span");
					oDiv.appendChild(oSpan);
				setStyle(oSpan,{ position:"absolute",left:0,top:0,width:"90px", height:"70px", background:"url(images/indexbackground0.jpg) no-repeat"}
                );
					oSpan.style.width = oDiv.offsetWidth/C + "px";
					oSpan.style.height = oDiv.offsetHeight/R + "px";
					
					oSpan.style.left = oSpan.offsetWidth*c + "px";
					oSpan.style.top  = oSpan.offsetHeight*r + "px";
					
					oSpan.style.backgroundPosition = -oSpan.offsetLeft+"px -"+oSpan.offsetTop + "px";
				}
			}
			
			
//				oDiv  显示新图
//				oSpan 显示老图
			
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
	
	//翻转
	(function (){
		var oDiv = document.getElementById("banner_div3");
		var oFanzhuan=document.getElementById('banner_fanzhuan');
		
		var R = 5;
		var C = 9;
		var len = R*C;
		var iNow  =0;
		var bReady=true;
		
		for(var r = 0; r < R; r++){
			for(var c = 0; c < C; c++){
				var oPage = document.createElement("div");
				oDiv.appendChild(oPage);//?
				oPage.classList.add("page");
				oPage.innerHTML = '<div class="front"></div><div class="back"></div>';
				oPage.style.width = oDiv.offsetWidth/C + "px";
				oPage.style.height = oDiv.offsetHeight/R + "px";
				
				oPage.style.left = oPage.offsetWidth*c + "px";
				oPage.style.top  = oPage.offsetHeight*r + "px";
				
				oPage.children[0].style.backgroundPosition = -oPage.offsetLeft + "px -"+oPage.offsetTop+"px";
				oPage.children[1].style.backgroundPosition = -oPage.offsetLeft + "px -"+oPage.offsetTop+"px";
				
				oPage.r = r;
				oPage.c = c;
	//			oPage.innerHTML = r+"|"+c;
	
			}
		}
		
		
		//翻页
		
		var aPage = oDiv.children;
		
		oFanzhuan.onclick = function(){
			
			
			if(!bReady) return;
			
			bReady=false;
			
			for(var i = 0; i < len; i++){
				
				aPage[i].style.transition = "1s all ease " +(aPage[i].c + aPage[i].r)*200 + "ms";//添加运动
				
				aPage[i].style.transform =  "perspective(800px) rotateY(-180deg)";
				
	
			}
			
		}
		  oPage.addEventListener("transitionend",function(){
			 iNow++;
			bReady = true;
			//运动完成不需要运动
			oDiv.style.backgroundImage="url(images/indexbackground"+iNow%3+".jpg)"
			for(var i=0;i < len; i++){
				aPage[i].style.transition = "none";
				aPage[i].style.transform = "perspective(800px) rotateY(0deg)";
	
				aPage[i].children[0].style.backgroundImage="url(images/indexbackground"+iNow%3+".jpg)";
				aPage[i].children[1].style.backgroundImage="url(images/indexbackground"+(iNow+1)%3+".jpg)";
				
				aPage[i].children[0].style.backgroundPosition=-aPage[i].offsetLeft + "px -"+aPage[i].offsetTop+"px";
				aPage[i].children[1].style.backgroundPosition=-aPage[i].offsetLeft + "px -"+aPage[i].offsetTop+"px";
				
				
			}
				
		 });
		
	})();
	
	///扭曲
	(function (){
        var oDiv=document.getElementById('banner_div4');
		var oNiuqu=document.getElementById("banner_niuqu");
        var col=9;
        for(var i=0; i<col; i++){
            var newDiv=document.createElement("div");
            newDiv.className="box";
            newDiv.innerHTML='<div class="now"></div><div class="next"></div>';
            oDiv.appendChild(newDiv);
			
            newDiv.style.left=i*oDiv.offsetWidth/col +'px';
           
            newDiv.children[0].style.backgroundPosition=-i*oDiv.offsetWidth/col +'px center';
            newDiv.children[1].style.backgroundPosition=-i*oDiv.offsetWidth/col +'px center';
        }
        var iNow=0;
        var iReady=true;
        var aBox=oDiv.children;
        oNiuqu.onclick=function(){
            if(!iReady) return ;
            iReady=false;
            iNow++;
            for(var i=0; i<col;i++){
                (function(i){
                    setTimeout(function(){
                        aBox[i].classList.add('active');
                    },100*i)
                })(i);
            }
        };
        aBox[col-1].addEventListener("transitionend",function(){
            for(var i=0; i<col;i++){
                aBox[i].classList.remove('active');
//				oDiv.style.backgroundImage="url(images/indexbackground"+(iNow)%3+".jpg)";
                aBox[i].children[0].style.backgroundImage="url(images/indexbackground"+iNow%3+".jpg)";
                aBox[i].children[1].style.backgroundImage="url(images/indexbackground"+(iNow+1)%3+".jpg)";
                iReady=true;
            }                               
        },false)
		
		
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
		var oDiv=document.getElementById("end_div");
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
	////////////////////
	(function (){
		function getElementsByClassName(oParent, sClass)
		{
			var aTmp=oParent.getElementsByTagName('*');
			var aResult=[];
			var i=0;
			
			for(i=0;i<aTmp.length;i++)
			{
				if(aTmp[i].className==sClass)
				{
					aResult.push(aTmp[i]);
				}
			}
			
			return aResult;
		}
		
		(function (){
		{
			var oDiv=document.getElementById('automatic');
			
			var oPrevMask=getElementsByClassName(oDiv,'prev_div')[0];
			var oNextMask=getElementsByClassName(oDiv,'next_div')[0];
			
			var oPrevBtn=getElementsByClassName(oDiv,'prev')[0];
			var oNextBtn=getElementsByClassName(oDiv,'next')[0];
			
			var oPrevArrow=getElementsByClassName(oPrevBtn,'ico')[0];
			var oPrevArrowLight=getElementsByClassName(oPrevBtn,'ico1')[0];
			var oPrevTxt=getElementsByClassName(oPrevBtn,'txt')[0];
			
			var oNextArrow=getElementsByClassName(oNextBtn,'ico')[0];
			var oNextArrowLight=getElementsByClassName(oNextBtn,'ico1')[0];
			var oNextTxt=getElementsByClassName(oNextBtn,'txt')[0];
			
			oPrevArrow.alpha=100;
			var iInitPrevArrow=oPrevArrow.left=oPrevArrow.offsetLeft;
			oPrevArrowLight.alpha=0;
			var iInitPrevArrowLight=oPrevArrowLight.left=oPrevArrowLight.offsetLeft;
			oPrevTxt.alpha=0;
			var iInitPrevTxt=oPrevTxt.left=oPrevTxt.offsetLeft;
			
			oNextArrow.alpha=100;
			var iInitNextArrow=oNextArrow.left=oNextArrow.offsetLeft;
			oNextArrowLight.alpha=0;
			var iInitNextArrowLight=oNextArrowLight.left=oNextArrowLight.offsetLeft;
			oNextTxt.alpha=0;
			var iInitNextTxt=oNextTxt.left=oNextTxt.offsetLeft;
			
			var aLi=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
			
			var aLiInit=[];
			
			var oLine=getElementsByClassName(oDiv, 'line')[0];
			
			var iInterval=150;
			(function (){
				var oS=document.createElement('script');
					
				oS.type='text/javascript';
					
				document.body.appendChild(oS);
			})();
			
			var i=0;
			
			for(i=0;i<aLi.length;i++)
			{
				aLiInit[i]={};
				aLi[i].width=aLiInit[i].w=aLi[i].getElementsByTagName('img')[0].offsetWidth;
				aLi[i].height=aLiInit[i].h=aLi[i].getElementsByTagName('img')[0].offsetHeight;
				aLi[i].left=aLiInit[i].l=aLi[i].offsetLeft;
				aLi[i].top=aLiInit[i].t=aLi[i].offsetTop;
				aLi[i].alpha=aLiInit[i].alpha=0;
				aLi[i].z=aLiInit[i].z=1;
			}
			
			for(i=0;i<aLi.length;i++)
			{
				aLi[i].style.position='absolute';
				aLi[i].style.left=aLiInit[i].l+'px';
				aLi[i].style.top=aLiInit[i].t+'px';
			}
			
			aLi[1].alpha=aLiInit[1].alpha=60;
			aLi[2].alpha=aLiInit[2].alpha=80;
			aLi[3].alpha=aLiInit[3].alpha=100;
			aLi[4].alpha=aLiInit[4].alpha=80;
			aLi[5].alpha=aLiInit[5].alpha=60;
			
			aLi[1].z=aLiInit[1].z=2;
			aLi[2].z=aLiInit[2].z=3;
			aLi[3].z=aLiInit[3].z=4;
			aLi[4].z=aLiInit[4].z=3;
			aLi[5].z=aLiInit[5].z=2;
			
			oPrevMask.onmouseover=function ()
			{
				startMove(oPrevArrow, {left: iInitPrevArrow+10}, iInterval);
				startMove(oPrevArrowLight, {left: iInitPrevArrowLight+10, alpha:100}, iInterval);
				startMove(oPrevTxt, {left: iInitPrevTxt-10, alpha:100}, iInterval);
			};
			
			oPrevMask.onmouseout=function ()
			{
				startMove(oPrevArrow, {left: iInitPrevArrow}, iInterval);
				startMove(oPrevArrowLight, {left: iInitPrevArrowLight, alpha:0}, iInterval);
				startMove(oPrevTxt, {left: iInitPrevTxt, alpha:0}, iInterval);
			};
			
			oPrevMask.onmousedown=function ()
			{
				gotoImg(true);
			};
			
			oNextMask.onmouseover=function ()
			{
				startMove(oNextArrow, {left: iInitNextArrow-10}, iInterval);
				startMove(oNextArrowLight, {left: iInitNextArrowLight-10, alpha:100}, iInterval);
				startMove(oNextTxt, {left: iInitNextTxt+10, alpha:100}, iInterval);
			};
			
			oNextMask.onmouseout=function ()
			{
				startMove(oNextArrow, {left: iInitNextArrow}, iInterval);
				startMove(oNextArrowLight, {left: iInitNextArrowLight, alpha:0}, iInterval);
				startMove(oNextTxt, {left: iInitNextTxt, alpha:0}, iInterval);
			};
			
			oNextMask.onmousedown=function ()
			{
				gotoImg(false);
			};
			
			function gotoImg(bLeft)
			{
				if(bLeft)
				{
					aLiInit.push(aLiInit.shift());
				}
				else
				{
					aLiInit.unshift(aLiInit.pop());
				}
				
				for(i=0;i<aLi.length;i++)
				{
					startMove(aLi[i], {left: aLiInit[i].l, top: aLiInit[i].t, width: aLiInit[i].w, height:aLiInit[i].h, alpha:aLiInit[i].alpha, zIndex:aLiInit[i].z}, 300);
				}
			};
		};
		
		function startMove(obj, oParams, iTime, fnCallBackEnd)
		{
			var iInterval=45;
			var iEndTime=(new Date()).getTime()+iTime;
			var iTimes=Math.ceil(iTime/iInterval);
			var oSpeed={};
			
			if(typeof obj.timer=='undefined')
			{
				obj.timer=null;
			}
			
			for(key in oParams)
			{
				oSpeed[key]=(oParams[key]-obj[key])/iTimes;
			}
			
			if(obj.timer)
			{
				clearInterval(obj.timer);
			}
			obj.timer=setInterval
			(
				function ()
				{
					doMove(obj, oParams, oSpeed, iEndTime, fnCallBackEnd);
				}, iInterval
			);
		}
		
		function doMove(obj, oTarget, oSpeed, iEndTime, fnCallBackEnd)
		{
			var iNow=(new Date()).getTime();
			
			if(iNow>=iEndTime)
			{
				clearInterval(obj.timer);
				obj.timer=null;
				
				for(key in oTarget)
				{
					obj[key]=oTarget[key];
		//			alert('set '+key+'='+oTarget[key]);
					switch(key)
					{
						case 'alpha':
							obj.style.opacity=oTarget[key]/100;
							obj.style.filter="alpha(opacity:"+oTarget[key]+")";
							break;
						case 'zIndex':
							obj.style.zIndex=oTarget[key];
							break;
						case 'width':
						case 'height':
							obj.getElementsByTagName('img')[0].style[key]=oTarget[key]+'px';
							break;
						default:
							obj.style[key]=oTarget[key]+'px';
							break;
					}
				}
				
				if(fnCallBackEnd)
				{
					fnCallBackEnd();
				}
			}
			else
			{
				for(key in oTarget)
				{
					obj[key]+=oSpeed[key];
					
					switch(key)
					{
						case 'alpha':
							obj.style.opacity=obj[key]/100;
							obj.style.filter="alpha(opacity:"+obj[key]+")";
							break;
						case 'zIndex':
							//obj.style.zIndex=obj[key];
							obj.style.zIndex=oTarget[key];
							break;
						case 'width':
						case 'height':
							obj.getElementsByTagName('img')[0].style[key]=obj[key]+'px';
							break;
						default:
							obj.style[key]=obj[key]+'px';
							break;
					}
				}
			}
		}
		})();
				
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
	
	(function (){
		var oTop=document.getElementById("top");
		oTop.onmouseover=function (){
			this.style.bottom=40+"px";
		};
		oTop.onmouseout=function (){
			this.style.bottom=30+"px";
		};
		oTop.onclick=function (){
			var timer,n;
			clearInterval(timer);
			timer=setInterval(function(){toTop() },1);
				
			function toTop(){
				n=document.documentElement.scrollTop=document.body.scrollTop-=10;
				
				if(n<0){
					clearInterval(timer);
				};
			};	
					
			
		  };
		
	})();
}

