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
		
    (function (){
		var oUl=document.getElementById('two_content_ul');
		var oLi1=oUl.children[0];
		var oLi2=oUl.children[1];
		var oLi3=oUl.children[2];
		var oLi4=oUl.children[3];
		
	
		oLi1.style.transform='rotateX(3600deg)';
		oLi1.style.left='20px';
		oLi1.style.top='20px';

		oLi2.style.transform='rotateY(3600deg)';
		oLi2.style.left='340px';
		oLi2.style.top='200px';

		oLi3.style.transform='rotateZ(3600deg)';
		oLi3.style.left='680px';
		oLi3.style.top='20px';

		oLi4.style.transform='rotateX(3600deg)';
		oLi4.style.left='1000px';
		oLi4.style.top='200px';
	})();
	
};