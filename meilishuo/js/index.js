
$(function () {
	// body...
	//倒计时
	(function (){
		var target=new Date();
		
		target.setFullYear(2018,0,1);
		target.setHours(0,0,0,0);

		var targetTime=parseInt(target.getTime()/1000);	   
		setInterval(start,1000);

		function start(){
          	var aSpan = $('#iTimer span');
          	
          	aSpan[0].innerHTML= tick().iD;
          	aSpan[1].innerHTML= tick().iH;
          	aSpan[2].innerHTML= tick().iM;
          	aSpan[3].innerHTML= tick().iS;
		}
		
		function tick(){
			
			var now=new Date();
			
			var nowTime=parseInt(now.getTime()/1000);
			
			var s = targetTime-nowTime;
			
			var date = parseInt(s/86400);	
			
			s=s%86400	
			
			var hours = parseInt(s/3600);	
			
			s=s%3600	
			
			var minutes = parseInt(s/60)	
			
			s=s%60	

			return {
				iD: date,
				iH: hours,
				iM: minutes,
				iS: s
			};
		};	
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


