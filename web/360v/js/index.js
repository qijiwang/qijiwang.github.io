
$(function (){
	//////banner
	(function (){

	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}

	function move(obj,json,opational){
		
		var opational = opational || {};
		opational.time = opational.time || 300;
		opational.fn = opational.fn || null;
		opational.type = opational.type || 'ease-out';
		
		var start={};
		var dis={};
		for(var key in json){
			start[key]=parseInt(getStyle(obj,key));
			dis[key]=json[key]-start[key];
		}
		
		var count=Math.round(opational.time/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			
			for(var key in json){
				//办事
				switch(opational.type){
					case 'linear':
						var a = n/count;
						var cur=start[key]+dis[key]*a;
						break;
					case 'ease-in':
						var a=n/count;
						var cur=start[key]+dis[key]*a*a*a
						break;
					case 'ease-out':
						var a=1-n/count;
						var cur=start[key]+dis[key]*(1-a*a*a)
						break;	
				}
				
				if(key=='opacity'){
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';
				}else{
					obj.style[key]=cur+'px';
					
				}	
			}
			
			if(n==count){
				clearInterval(obj.timer);
				opational.fn && opational.fn();
			
			}
		},30);
	}

   	var aBanner=$(".banner")[0];
   	var oUl=$(".banner>ul")[0];
   	var aLi=$(".banner>ul>li");
   	var aS1=$("#prev")[0];
   	var aS2=$("#next")[0];
   	var now=0;
	var ready=true;
	var timer=null;

	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=oUl.children.length*oUl.children[0].offsetWidth+'px';

	for(var i=0;i<aLi.length;i++){//添加点击
		(function(index){
			aLi[i].onclick=function(){
				now = index;
				tab();
			};	
		})(i);
	}		
	function tab(){//切换
		// for(var i=0;i<aLi.length;i++){
		// 	aLi[i].className='';	  
		// }
		
		// 	aLi[now%aLi.length].className='active';	
		
		//oUl.style.left=-now*oUl.children[0].offsetWidth+'px';
		move(oUl,{left:-now*oUl.children[0].offsetWidth},{time:700,fn:function(){
			ready=true;
			if(now==aLi.length){
				//归位
				oUl.style.left=0;
				now=0;	
			}
		}});	


	}

	aS2.onclick=function(){
		if(!ready) return;
		ready=false;
		now++;
		tab();
	};
	aS1.onclick=function(){
		if(!ready) return;
		ready=false;
		now--;
		if(now==-1){
			//alert('到极限了，要归位')
			oUl.style.left= -oUl.offsetWidth/2+'px';//先归位
			now=aLi.length-1;	
		}
		tab();//再动
	};
	timer=setInterval(function (){
		now++;
		tab();
	},3500);
	
	aBanner.onmouseover = function (){
		clearInterval(timer);
	}
	aBanner.onmouseout = function (){
		timer=setInterval(function (){
			now++;
			tab();
		},3500);
		
	}		


	})();
	///延迟加载
	(function (){
		window.onload=window.onscroll=window.onresize=function(){
			var aImg=document.getElementsByTagName('img');
			
			var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
			var cHeight=document.documentElement.clientHeight;
			//img.top<scrollTop+clientHeight	
			
			for(var i=0;i<aImg.length;i++){//遍历每张图
				var imgTop=getPos(aImg[i]).top;//取每张图的top
				if(imgTop<scrTop+cHeight){//判断每张图是否进入视窗范围
					aImg[i].src=aImg[i].getAttribute("_src");
				}
			}
		}

		function getPos(obj){
			var l=t=0;
			var i=0;
			while(obj){
				l+=obj.offsetLeft;
				t+=obj.offsetTop;
				obj=obj.offsetParent;	
				i++;
			}
			
			return {left:l, top:t};
		}	
	})();
});