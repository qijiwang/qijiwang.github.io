// JavaScript Document
$(function (){

	
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

	////
	$(function (){
		$("#ul1 li div").click(function (){
			
			switch (this.className){

				case 'zp1':
					$("#iframeResult").attr({
						src:"demo/cssClock.html"
					});
					break;
				case 'zp2':
					$("#iframeResult").attr({
						src:"demo/offcial5.html"
					});
					break;
				case 'zp3':
					$("#iframeResult").attr({
						src:"demo/photo.html"
					});
					break;	
				case 'zp4':
					$("#iframeResult").attr({
						src:"demo/round.html"
					});
					break;	
				case 'zp5':
					$("#iframeResult").attr({
						src:"demo/pingbao.html"
					});
					break;
				case 'zp6':
					$("#iframeResult").attr({
						src:"demo/pingbao.html"
					});
					break;
				case 'zp7':
					$("#iframeResult").attr({
						src:"demo/magnifier.html"
					});
					break;
				case 'zp8':
					$("#iframeResult").attr({
						src:"demo/round.html"
					});
					break;																									
			}
		

			$('#fudongbd').show();
			$( "#dialog" ).dialog("open");
			$( "#dialog" ).dialog({
				
			    close:function (){
			    	$('#fudongbd').hide();

			    }			   				
			});
		})
		

	////


	});	
	//////////////////
});



	
