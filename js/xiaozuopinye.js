// JavaScript Document
window.onload=function (){
	
	//官网4
	(function (){
		var oBtnPrev = document.getElementById("btn_prev");
		var oBtnNext = document.getElementById("btn_next");
		var oUl = document.getElementById("ul1");
		var aLi = oUl.children;
		var len = aLi.length;
		
		//存class
		var aClass = [];
		for(var i = 0; i < len; i++){
			aClass.push(aLi[i].className);
		}
		
		
		var bReady = true;//准备好了 
		oBtnNext.onclick = function(){
			if(!bReady) return ;
			bReady = false;
			aClass.unshift(aClass.pop());
			aClass.unshift(aClass.pop());
			tab();
		};
		
		oBtnPrev.onclick = function(){
			if(!bReady) return ;
			bReady = false;
			aClass.push(aClass.shift());
			aClass.push(aClass.shift());
			tab();	
		};
		
		function tab(){
			for(var i = 0; i < len; i++){
				aLi[i].className = aClass[i];
			}
			
			var oCur = oUl.querySelector(".cur");
			oCur.addEventListener("transitionend",function(){
				bReady = true;
			},false);	
		}
		
		
	})();
	
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha1");
		var oWang=document.getElementById("wang1");
		var oZp=document.getElementById("zp1");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		};
		
	    //css3钟表
		(function (){
			var oDiv = document.getElementById("wang1_clock");
			var oH   = oDiv.querySelector(".hour");
			var oM   = oDiv.querySelector(".min");
			var oS   = oDiv.querySelector(".sec"); 
			
			function clock(){
				var oDate = new Date();
				var iH = oDate.getHours();
				var iM = oDate.getMinutes();
				var iS = oDate.getSeconds();
				var iMs = oDate.getMilliseconds();
				
				oH.style.transform = "rotate("+(iH*30 + iM/60*30) +"deg)";
				oM.style.transform = "rotate("+(iM*6+ iS/60*6) +"deg)";
				oS.style.transform = "rotate("+(iS*6+ iMs/1000*6 )+"deg)";
			}
			clock();
			setInterval(clock,30);
			
			//创建刻度
			for(var i = 0; i < 60; i++){
				var oSpan = document.createElement("span");
				oDiv.appendChild(oSpan);
				oSpan.style.transform = "rotate("+i*6+"deg)";
				
				if(i%5 == 0){
					oSpan.classList.add("on");
					if(i == 0){
						oSpan.innerHTML = "<strong>12<\/strong>";
					} else {
						oSpan.innerHTML = "<strong>"+i/5+"<\/strong>";
					}
					oSpan.children[0].style.transform = "rotate(-"+i*6+"deg)";
					
				}
					
			}
			
			oDiv.onmousedown = function(ev){
				var oEvent = ev || event;
				var disX = oEvent.clientX - oDiv.offsetLeft;
				var disY = oEvent.clientY - oDiv.offsetTop;
				document.onmousemove = function(ev){
					var oEvent = ev || event;
					oDiv.style.left = oEvent.clientX - disX + "px";
					oDiv.style.top  = oEvent.clientY - disY + "px";
				};
				document.onmouseup = function(){
					document.onmousemove = null;
					document.onmouseup = null;
					oDiv.releaseCapture && oDiv.releaseCapture();
				};	
				oDiv.setCapture && oDiv.setCapture();
				return false;
			};
		})();
	})();
	//3D图片展示
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha2");
		var oWang=document.getElementById("wang2");
		var oZp=document.getElementById("zp2");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		};
		
		(function (){
			var oBtnNext=document.getElementById("wang2_btn");
			var oUl=document.getElementById("wang2_ull");
			var aLi=oUl.children;
			var len=aLi.length;
			
			var iNow=2;
			var bReady=true;
			
			oBtnNext.onclick=function (){
				iNow++;
				for(var i=0;i<len;i++){
					aLi.className="";
				}
				
				aLi[(iNow-2)%len].className="l2";
				aLi[(iNow-1)%len].className="l1";
				aLi[(iNow)%len].className="cur";
				aLi[(iNow+1)%len].className="r1";
				aLi[(iNow+2)%len].className="r2";
			}  
		})();
	})();
		//运动选项卡
		(function (){
			var oFudongbd=document.getElementById("fudongbd");
			var oCha=document.getElementById("cha3");
			var oWang=document.getElementById("wang3");
			var oZp=document.getElementById("zp3");
			
			oZp.onclick=function (){
				oWang.style.display="block";
				oFudongbd.style.display="block";
				
			};
			oCha.onclick=function (){
				oWang.style.display="none";
				oFudongbd.style.display="none";
			};
			
			(function (){
				var oDiv=document.getElementById("wang3_box");
				var aUl=oDiv.getElementsByTagName('ul');
				var aOl=oDiv.getElementsByTagName('ol');
				var oBar=document.getElementById("wang3_bar");
				var aLi1=aUl[0].getElementsByTagName('li');
				var aLi2=aOl[0].getElementsByTagName('li');
				for(var i=0;i<aLi2.length;i++){
					aLi2[i].now=i;
					aLi2[i].onmouseover=function(){
						aUl[0].style.top=-this.now*220+'px';
						var zym={top:this.offsetTop+10};
						move(oBar,zym,{type:'linear'});
						
						
					};
				};
				
			})();
		})();
	//随机彩票
		
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha4");
		var oWang=document.getElementById("wang4");
		var oZp=document.getElementById("zp4");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		};
		
		(function (){
			function rnd(n,m){                                      
				
				return  parseInt(n+Math.random()*(m-n));
				
			};
			
			function fillZero(n){
				if(n<10){
					return '0'+n;
				}else{
					return ''+n;
					}
			};
			
			function findInArr(arr,n){
				for(var i=0;i<arr.length;i++){
					if(arr[i]==n){
						return true;
					};
				};
				return false;
				
			};
			(function (){
				var oDiv=document.getElementById("wang4_box");
				var aSpan=oDiv.getElementsByTagName('span');
				var oBtn=document.getElementById('btn');
				oBtn.onclick=function(){
					var arr=[];
					var i=0;
					while(arr.length<6){
						var redBall=rnd(1,34);
						redBall=fillZero(redBall);
						var bl=findInArr(arr,redBall);
						if(!bl){
							arr.push(redBall);
						}
						i++;
					}
					arr=arr.sort(function (a,b){return a-b});
					
					for(var j=0;j<aSpan.length;j++){
					   aSpan[j].innerHTML=arr[j];
					}
				
				
					 var blueBall=rnd(1,17);
					 blueBall=fillZero(blueBall);
					 aSpan[6].innerHTML=blueBall;
				}
			})();
		})();
	})();
	//圆形运动
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha5");
		var oWang=document.getElementById("wang5");
		var oZp=document.getElementById("zp5");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			aaa();
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		};
		function aaa(){
			var oDiv=document.getElementById('wang5_div1');
			var oBtn=document.getElementById('wang5_div2');
			var count=9;
			var bl=true;
			
			for(var i=0;i<count;i++){
				var oBox=document.createElement('div');
				oBox.className='sBox';
				oBox.innerHTML='<img width="100" height="100" src="images/qc'+(i+1)+'.jpg" alt="" />';
				oDiv.appendChild(oBox);
				setPos(oBox,0);	//定位小圆到弧线上
				oBox.rotate=0;
			}
			
			function move(obj,iTarget){
				var start=obj.rotate;//getStyle(obj,'width')
				
				var dis=iTarget-start;
				var count=Math.round(700/30);
				var n=0;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					n++;
					
					var a=1-n/count;
					var cur=start+dis*(1-a*a*a);
					
					setPos(obj,cur);
					obj.rotate=cur;
					
					
					if(n==count){
						clearInterval(obj.timer);	
					}
				},30);
			}	
			
			oBtn.onclick=function(){
				var aBox=document.getElementsByClassName('sBox');
				if(bl){
					for(var i=0;i<aBox.length;i++){
						//setPos(aBox[i],i*(90/(count-1)));
						
						move(aBox[i],i*(320/(count-1)));
					}
					bl=false;
					this.value='-';	
				}else{
					for(var i=0;i<aBox.length;i++){
						//setPos(aBox[i],0);
						
						move(aBox[i],0);
					}
					bl=true;
					this.value='+';
				}
				
			};
			
			function setPos(obj,ang){
				var a=Math.sin(a2r(ang))*oDiv.offsetWidth/2;
				var b=Math.cos(a2r(ang))*oDiv.offsetHeight/2;
				obj.style.left=oDiv.offsetWidth/2+a+'px';
				obj.style.top=oDiv.offsetHeight/2-b+'px';	
			}
			
			function a2r(n){
				return 	n*Math.PI/180;
			}
			
			
		};
	})();
		
		
		//照片墙
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha6");
		var oWang=document.getElementById("wang6");
		var oZp=document.getElementById("zp6");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			xxx();
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		
		
		};
		function xxx(){
			var aLi=document.getElementById("wang6_ull").children;
			var zIndex=4;
			//运动布局	
			var aPos=[];
			for(var i=0;i<aLi.length;i++){
				aPos.push({left: aLi[i].offsetLeft,top: aLi[i].offsetTop});
				
				aLi[i].style.left=aPos[i].left+'px';
				aLi[i].style.top=aPos[i].top+'px';
			};
			
			for(var i=0;i<aLi.length;i++){
				
				aLi[i].style.position="absolute";
				aLi[i].style.margin=0;
			};
			
			
			//拖动
			for(var i=0;i<aLi.length;i++){
				
				drag(aLi[i]);
				aLi[i].index=i;
			};
			
			
			function drag(obj){
				obj.onmousedown=function (ev){
					obj.style.zIndex=zIndex++;
					clearInterval(obj.timer);
					
					var oEvt=ev||event;
					var disX=oEvt.clientX-obj.offsetLeft;
					var disY=oEvt.clientY-obj.offsetTop;
					
					document.onmousemove=function (ev){
						var oEvt=ev||event;
						obj.style.left=oEvt.clientX-disX+'px';
						obj.style.top=oEvt.clientY-disY+'px';
					
		
						//交换位置
						var nearObj=findNearest(obj);//碰撞检测+找最近
						if(nearObj && nearObj!=obj){
							
							var n=obj.index;//拿着的obj索引
							var m=nearObj.index;//被撞的索引
							
							for(var i=0;i<aLi.length;i++){
								//←	li.index>n && li.index<=m	n到m不含n
								if(aLi[i].index>n && aLi[i].index<=m){
									aLi[i].index--;
									move(aLi[i],aPos[aLi[i].index]);	
								}else if(aLi[i].index<n && aLi[i].index>=m){
									//→ li.index<n && li.index>=m n到m不含n
									aLi[i].index++;
									move(aLi[i],aPos[aLi[i].index]);
								}
								
							}
							obj.index=m;//obj的索引等于被撞到的 near(m)
						}
							
					}
					
					document.onmouseup=function (){
						document.onmousemove=document.onmouseup=null;
						
						
						move(obj,aPos[obj.index]);//回自个位置
						
						obj.releaseCapture && obj.releaseCapture();
					};
					obj.setCapture && obj.setCapture();
					return false;
				};
			};
			
			
			function findNearest(obj){
				var minDis=9999999999;
				var minDisIndex=-1;
				for(var i=0;i<aLi.length;i++){
		
					if(collTest(obj,aLi[i])){
						var dis=getDis(obj,aLi[i]);
						if(dis<minDis){
							minDis=dis;
							minDisIndex=i;
						}
					}
					
				}
				if(minDisIndex==-1){
					return null;
				}else{
					return aLi[minDisIndex];
				}
			}
			
			function getDis(obj1,obj2){
				var a=aPos[obj2.index].top-obj1.offsetTop;
				var b=aPos[obj2.index].left-obj1.offsetLeft;
		
				return Math.sqrt(a*a+b*b);;	
			}
			
			function collTest(obj1,obj2){
				var l1=obj1.offsetLeft;
				var t1=obj1.offsetTop;
				var r1=obj1.offsetLeft+obj1.offsetWidth;
				var b1=obj1.offsetTop+obj1.offsetHeight;
				
		
				var l2=aPos[obj2.index].left//obj2的房子位置
				var t2=aPos[obj2.index].top;
				var r2=aPos[obj2.index].left+obj2.offsetWidth;
				var b2=aPos[obj2.index].top+obj2.offsetHeight;
				if(l1>r2||r1<l2||t1>b2||b1<t2){
					return false;
				}else{
					return true;
				}
			}
		};	
	})();
	//放大镜
	(function (){
		
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha7");
		var oWang=document.getElementById("wang7");
		var oZp=document.getElementById("zp7");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		}
		
		
			function getPos(obj){
				var l=t=0;
				
				//var i=0//初始值
				//while(obj){
				for(;obj;){
					l+=obj.offsetLeft;
					t+=obj.offsetTop;
					obj=obj.offsetParent;
					
					//自增
				}
				
				return {left:l, top:t}
			}
			
			var oDiv1=document.getElementById('wang7-div1');
			var oDiv2=document.getElementById('wang7-div2');
			var oMark=document.getElementById('mark');
			var oBigImg=document.getElementById('bigImg');
			
			oDiv1.onmouseover=function(){
				oMark.style.display='block';
				oDiv2.style.display='block';
			}
			oDiv1.onmouseout=function(){
				oMark.style.display='none';
				oDiv2.style.display='none';
			}
			oDiv1.onmousemove=function(ev){
				var oEvt=ev||event;
				
				
				var l=oEvt.clientX-getPos(oDiv1).left-oMark.offsetWidth/2;
				var t=oEvt.clientY-getPos(oDiv1).top-oMark.offsetHeight/2;
				
				if(l<0) l=0;
				if(l>oDiv1.offsetWidth-oMark.offsetWidth)                                                               
				l=oDiv1.offsetWidth-oMark.offsetWidth;
				
				if(t<0) t=0;
				if(t>oDiv1.offsetHeight-oMark.offsetHeight)
				t=oDiv1.offsetHeight-oMark.offsetHeight;
				
				oMark.style.left=l+'px';
				oMark.style.top=t+'px';
				
		
				oBigImg.style.left=-oMark.offsetLeft/(oDiv1.offsetWidth-oMark.offsetWidth)*(oBigImg.offsetWidth-oDiv2.offsetWidth)+'px';
				oBigImg.style.top=-oMark.offsetTop/(oDiv1.offsetHeight-oMark.offsetHeight)*(oBigImg.offsetHeight-oDiv2.offsetHeight)+'px';
			}
		})();
		
		
		//跳跳球
		(function (){
			var oFudongbd=document.getElementById("fudongbd");
			var oCha=document.getElementById("cha8");
			var oWang=document.getElementById("wang8");
			var oZp=document.getElementById("zp8");
			
			oZp.onclick=function (){
				oWang.style.display="block";
				oFudongbd.style.display="block";
					drag('cha8_div1');
					drag('cha8_div2');
					drag('cha8_div3');
					drag('cha8_div4');
					drag('cha8_div5');
					drag('cha8_div6');
					drag('cha8_div7');
					
			};
			oCha.onclick=function (){
				oWang.style.display="none";
				oFudongbd.style.display="none";
			}
			
				function drag(id){
					var oDiv = document.getElementById(id);
					var aDiv=document.getElementsByTagName('div');
					
					var speedX = 0;
					var speedY = 0;
					var lastX = 0;
					var lastY = 0;
					
					var timer = null;
					oDiv.onmousedown = function(ev){
						clearInterval(timer);
						var oEvent = ev || event;
						var disX = oEvent.clientX - oDiv.offsetLeft;
						var disY = oEvent.clientY - oDiv.offsetTop;
						document.onmousemove = function(ev){
							var oEvent = ev || event;
							oDiv.style.left = oEvent.clientX - disX + "px";
							oDiv.style.top  = oEvent.clientY - disY + "px";
							
							speedX = oDiv.offsetLeft - lastX;
							speedY = oDiv.offsetTop - lastY;
							
							lastX = oDiv.offsetLeft;
							lastY = oDiv.offsetTop;
							
							
							
							
						};
						
						document.onmouseup = function(){
							document.onmousemove = null;
							document.onmouseup = null;
							oDiv.releaseCapture && oDiv.releaseCapture();
							
							move();
						 
						};	
						oDiv.setCapture && oDiv.setCapture();
						return false;
					};
					
					for(var i=0;i<aDiv.length;i++){
						if(oDiv==aDiv[i]) continue;//放过自己
							
					}
					
					
				   function rnd(n,m){
						return parseInt(n+Math.random()*(m-n));
					}
				   oDiv.onclick=function (){
					   var x=rnd(0,1000);
					   var y=rnd(-800,0); 
					   speedX=x;
					   speedY=y;
					   
					   move();
				   };
					
					function move(){
						clearInterval(timer);
						timer = setInterval(function(){
							speedY += 3;
							
							var t = oDiv.offsetTop + speedY;
							var l = oDiv.offsetLeft + speedX;
							if(t >oWang.offsetHeight  - oDiv.offsetHeight){
								t = oWang.offsetHeight - oDiv.offsetHeight;
								speedY *= -0.8;
								speedX *= 0.8;
								
							} else if(t < 0){
								t = 0;
								speedY *= -0.8;
								speedX *= 0.8;
							}
							
							if(l > oWang.offsetWidth - oDiv.offsetWidth){
								l = oWang.offsetWidth - oDiv.offsetWidth;
								speedX *= -0.8;
								speedY *= 0.8;
								
							} else if(l < 0){
								l = 0;
								speedX *= -0.8;
								speedY *= 0.8;
							}
							oDiv.style.left = l + "px";
							oDiv.style.top  = t + "px";
							
							if(Math.abs(speedX) < 1){
								speedX = 0;
							}
							if(Math.abs(speedY) < 1){
								speedY = 0;
							}
							
							if(speedX == 0 && speedY == 0 && t == document.documentElement.clientHeight - oDiv.offsetHeight){
								clearInterval(timer);
							}
							
							
							
						},30);
					
					}
				}
		
	})();
	/////弧版时钟
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha9");
		var oWang=document.getElementById("wang9");
		var oZp=document.getElementById("zp9");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		}
		function d2a(n){
			return n*Math.PI/180;
		}
		(function (){
			var oC = document.getElementById("c1"); 
			var gd = oC.getContext("2d");
			
			var cx = 400;
			var cy = 250;
			var r  = 150;
		
		
			setInterval(function(){
				gd.clearRect(0,0,oC.width,oC.height);
				
				var oDate = new Date();
				var iH = oDate.getHours();//30
				var iM = oDate.getMinutes();//6
				var iS = oDate.getSeconds();//6
				var iMs = oDate.getMilliseconds();		
				
				
				drawArc(gd,cx,cy,r,0,(iH%12)*30 + iM/60*30,"#f40");
				drawArc(gd,cx,cy,r+20,0,iM*6 + iS/60*6,"#4f0");
				drawArc(gd,cx,cy,r+40,0,iS*6 + iMs/1000*6,"#f04");
				
				
				var str = [iH,iM,iS].join(":");
				var h = 40;
				gd.font = "bold " + h+"px kaiti";
				var w = gd.measureText(str).width;
				gd.fillText(str,cx-w/2,cy+h/2);
				
			},16);
			
			
			function drawArc(gd,cx,cy,r,s,e,color){
				s -= 90;
				e -= 90;
				
				gd.lineWidth = 20;
				gd.strokeStyle = color; 
				gd.beginPath();
				gd.arc(cx,cy,r,d2a(s),d2a(e),false);
				gd.stroke();
		
			}
			
		})();
	})();
	///////json
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha10");
		var oWang=document.getElementById("wang10");
		var oZp=document.getElementById("zp10");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		}
	
		var oTxt=document.getElementById("wang10_txt1");
		var oBtn=document.getElementById("wang10_btn1");
		var oUl=document.getElementById("wang10_ul1");
		
		
		oBtn.onclick=function (){
			oUl.innerHTML="";
			try{
				var arr=eval(oTxt.value);
			}
			catch(e){
				alert('数据有错');
			}
			
			var arr2=[];
			for(var i=0;i<arr.length;i++){
			
				var oLi=document.createElement('li');
				
				var arr3=arr[i].pin.split(' ');
				var jp='';
				
				for(var j=0;j<arr3.length;j++){
				
					jp+=arr3[j].charAt(0);
				}
				
				arr2[i]={name: arr[i].name, pin: arr3.join(''), jp: jp};
				
				oLi.innerHTML='姓名：<span>'+arr2[i].name+'</span>全拼：<span>'+arr2[i].pin+'</span>简拼：<span>'+arr2[i].jp+'</span>';
				
				oUl.appendChild(oLi);
			}
			
		};
	})();
	/////11
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha11");
		var oWang=document.getElementById("wang11");
		var oZp=document.getElementById("zp11");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			aaa();
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		}
		
		function aaa(){
			var oDiv=document.getElementById('wang11_div1');
			var oUl=oDiv.children[0];
			var	aSpan=oDiv.children[1].getElementsByTagName('span');
			var now=0;
			var ready=true;
			
			//指定ul宽
			oUl.style.width=oUl.children.length*oUl.children[0].offsetWidth+'px';
			
			//无限
			next();
			function next(){
				move(aSpan[now],{width:80},{type:'linear',time:2000,fn:function(){
					for(var i=0;i<aSpan.length;i++){
						aSpan[i].style.width=0;	
					}
					now++;
					now%=aSpan.length;
					move(oUl,{left:-now*oUl.children[0].offsetWidth},{fn:function(){
						if(ready) next();	
					},time:1000});
				}});	
			}
			
			oDiv.onmouseover=function(){
				ready=false;
				clearInterval(aSpan[now].timer);
				aSpan[now].style.width=0;	
			};
			oDiv.onmouseout=function(){
				ready=true;
				next();	
			};
		}
	})();
	/////12
	(function (){
		var oFudongbd=document.getElementById("fudongbd");
		var oCha=document.getElementById("cha12");
		var oWang=document.getElementById("wang12");
		var oZp=document.getElementById("zp12");
		
		oZp.onclick=function (){
			oWang.style.display="block";
			oFudongbd.style.display="block";
			
		};
		oCha.onclick=function (){
			oWang.style.display="none";
			oFudongbd.style.display="none";
		}
		
		var oMail=document.getElementById('mailbox');
		var oWebSite=document.getElementById('website');
		var oName=document.getElementById('name');
		var oAge=document.getElementById('age');
		var oPhoneNumber=document.getElementById('phonenumber');
		var oQQ=document.getElementById('qq');
		var oId=document.getElementById('id');
		var oBorthPlace=document.getElementById('borthplace');
		
		oMail.onfocus=oWebSite.onfocus=oName.onfocus=oAge.onfocus=oPhoneNumber.onfocus=oQQ.onfocus=oId.onfocus=oBorthPlace.onfocus=function(){
			if(this.value==''){
				this.style.borderColor='blue';
				var oMess=this.parentNode.nextElementSibling||this.parentNode.nextSibling;
				var oName=this.parentNode.previousElementSibling||this.parentNode.previousSibling;
				oMess.innerHTML='请输入'+oName.innerHTML;			
			}
		};
		oMail.onblur=function(){
			check(this,/^\w+@[a-z0-9\-]{1,63}(\.[a-z]{2,6}){1,2}$/)
		};
		
	/*	http://www.baidu.com/	
		www.baidu.com/		
		www.baidu.com		
		baidu.com			
		http://baidu.com		
		http://baidu.com/		
		baidu.com/			
		top.baidu.com			
		http://music.baidu.com/	
		baidu.com.cn*/			
			//(http:\/\/)?(www.)?([a-z]+.)?[a-z]+.([a-z]{2-6}){1-2}/
			//www.[a-z]+.com\/?/
			//[a-z]+.com/
			//(http:\/\/www.[a-z]+.\w+.com\/?|www.[a-z]+.com\/?|[a-z]+.com)
		oWebSite.onblur=function(){
			check(this,/^(http:\/\/)?(www.)?([a-z]+.){1,}$/i)
		};
		oName.onblur=function(){
			check(this,/^[\u4e00-\u9fa5]{2,15}$/)
		};
			//18-100
		oAge.onblur=function(){
			check(this,/^(1[89]|[2-9]\d|100)$/)
		};
			  /*13/d
				147
				15\d
				18\d*/	
		oPhoneNumber.onblur=function(){	
			check(this,/^(13\d|147|15\d|18\d)\d{8}$/)
		};
		//qq5-12位第一位不为0
		//[1-9]\d{4-11}
		oQQ.onblur=function(){	
			check(this,/^[1-9]\d{4,11}$/)
		};
	
	/*北京市|110000，天津市|120000，河北省|130000，山西省|140000，内蒙古自治区|150000，辽宁省|210000，吉林省|220000，黑龙江省|230000，上海市|310000，江苏省|320000，浙江省|330000，安徽省|340000，福建省|350000，江西省|360000，山东省|370000，河南省|410000，湖北省|420000，湖南省|430000，广东省|440000，广西壮族自治区|450000，海南省|460000，重庆市|500000，四川省|510000，贵州省|520000，云南省|530000，西藏自治区|540000，陕西省|610000，甘肃省|620000，青海省|630000，宁夏回族自治区|640000，新疆维吾尔自治区|650000，台湾省（886)|710000,香港特别行政区（852)|810000，澳门特别行政区（853)|820000
	
	第一、二位表示省（自治区、直辖市、特别行政区）。
	第三、四位表示市（地级市、自治州、盟及国家直辖市所属市辖区和县的汇总码）。其中，01-20，51-70表示省直辖市；21-50表示地区（自治州、盟）。
	第五、六位表示县（市辖区、县级市、旗）。01-18表示市辖区或地区（自治州、盟）辖县级市；21-80表示县（旗）；81-99表示省直辖县级市。
	
	（身份证号码第七位到第十四位）表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。例如：1981年05月11日就用19810511表示。		
	(1[1-5][0-6]\d{3}|1[1-5]70\d{2}|2[1-3][0-6]\d{3}|2[1-3]70\d{2}|3[1-7][0-6]\d{3}|3[1-7]70\d{2}|4[1-6][0-6]\d{3}|4[1-6]70\d{2}|5[1-4][0-6]\d{3}|5[1-4]70\d{2}|6[1-5][0-6]\d{3}|6[1-5]70\d{2}|71[0-6]\d{3}|7170\d{2}|8[1-2][0-6]\d{3}|8[1-2]70\d{2})(19\d{2}|2[01][01]\d)\d{3}(\d|x)
	
	*/
		oId.onblur=function(){	
			check(this,/^[^0]\d{16}[\dx]$/i)
		};
		
		oBorthPlace.onblur=function(){	
			check(this,/^(北京|天津|重庆|上海|河北|山西|辽宁|吉林|黑龙江|江苏|浙江|安徽|福建|江西|山东|河南|湖北|湖南|广东|海南|四川|贵州|云南|陕西|甘肃|青海|台湾|内蒙古|广西|西藏|宁夏|疆|香港|澳门)$/)
		};
		
		
		
		
	/*	var province=['北京','天津','重庆','上海','河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','台湾','内蒙古','广西','西藏','宁夏','新疆','香港','澳门'];
		oBorthPlace.onblur=function(){
			var oMess=this.parentNode.nextElementSibling||this.parentNode.nextSibling;
			var oName=this.parentNode.previousElementSibling||this.parentNode.previousSibling;	
			this.style.borderColor='';	
			var bl=false;
			for(var i=0;i<province.length;i++){
				if(this.value==province[i]){
					bl=true;
					break;
				}
			}
			if(bl){
				oMess.innerHTML='';
				oMess.className='fl on';		
			}else{			
				this.style.borderColor='red';
				oMess.className='fl';
				oMess.innerHTML='输入的'+oName.innerHTML+'不正确';			
			}
		};
	*/	
		function check(_this,regExp){
			var oMess=_this.parentNode.nextElementSibling||_this.parentNode.nextSibling;
			var oName=_this.parentNode.previousElementSibling||_this.parentNode.previousSibling;
			_this.style.borderColor='';
			var re=regExp;
			if(re.test(_this.value)){
				oMess.innerHTML='';
				oMess.className='fl on';
			}else{
				_this.style.borderColor='red';
				oMess.className='fl';
				oMess.innerHTML='输入的'+oName.innerHTML+'不正确';
			}	
		}	
			
		
	})();
	
};