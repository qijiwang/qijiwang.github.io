////
$(function (){
	/////
	(function (){
		var aP = $('.me_btn');
		var aC = $('.me_btn_target');
		aP.click(function (){
			aC.slideUp();
			aC.eq($(this).index()).slideDown();
		})
	})();
});