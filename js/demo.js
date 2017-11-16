// JavaScript Document
$(function (){

	
	//官网4
	(function (){
		var oBtnPrev = document.getElementById("btn_prev");
		var oBtnNext = document.getElementById("btn_next");
		var oUl = document.getElementById("ul1");
		var aLi = oUl.children;
		var len = aLi.length;

		function rnd(n, m) {
		    return parseInt(n + Math.random() * (m - n));
		}

		function getStyle(obj, attr) {
		    if (obj.currentStyle) {
		        return obj.currentStyle[attr];
		    } else {
		        return getComputedStyle(obj, false)[attr];
		    }
		}		
	
		
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

	////
	$(function (){

		$("#close").click(function (){
			$("#dialog").hide(100);
		});
		

		$("#ul1 li div").click(function (){
			$("#dialog").show(100);
			switch (this.className){

				case 'zp1':
					$("#iframeResult").attr({
						src:"demo/demo1.html"
					});
					show1();
				
					break;
				case 'zp2':
					$("#iframeResult").attr({
						src:"demo/demo2.html"
					});
					break;
				case 'zp3':
					$("#iframeResult").attr({
						src:"demo/demo3.html"
					});
					break;	
				case 'zp4':
					$("#iframeResult").attr({
						src:"demo/demo4.html"
					});
					break;	
				case 'zp5':
					$("#iframeResult").attr({
						src:"demo/demo5.html"
					});
					break;
				case 'zp6':
					$("#iframeResult").attr({
						src:"demo/demo6.html"
					});
					break;
				case 'zp7':
					$("#iframeResult").attr({
						src:"demo/demo7.html"
					});
					break;
				case 'zp8':
					$("#iframeResult").attr({
						src:"demo/drag/index.html"
					});
					break;	
				case 'zp9':
					$("#iframeResult").attr({
						src:"demo/demo10.html"
					});
					break;	
				case 'zp10':
					$("#iframeResult").attr({
						src:"demo/demo9.html"
					});
					break;	
				case 'zp11':
					$("#iframeResult").attr({
						src:"demo/demo8.html"
					});
					break;																																									
			}
		

		
		})
		

	////


	});	
	//////////////////
});



	
