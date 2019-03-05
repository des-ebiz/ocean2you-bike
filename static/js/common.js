$(function () {

	navTab();
	
	scrEvent();

});

// 모바일 네비게이션
function navTab() {
	var $navTabM = $("#navTab-m"),
		$gNavM = $("#gNav-m"),
		$dropDownBg = $("#dropDownBg");
	
	$navTabM.on("click", function() {
		$(this).toggleClass("active");
		$gNavM.toggleClass("active");
	});

	$gNavM.on("click", function() {
		$(this).toggleClass("active");
		$navTabM.toggleClass("active");
	});
}

function scrEvent() {
	// top, 실시간예약버튼
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop = $(".contactPhone.type-1").offset().top;
		
		if (scr < setTop) {
			$("#goTop").removeClass("on");
			// $("#goTop, #rtBookingBn").removeClass("on");
		}
		if (scr >= setTop) {
			$("#goTop").addClass("on");
			// $("#goTop, #rtBookingBn").addClass("on");
		}
	});

	$("#goTop").on("click", function() {
		$(window).scrollTop(0);
	});
}

var navi = {
	move: function (id) {
		var num = $(id).offset().top - $("#gnb-header").height();
		$("html, body").animate({
			scrollTop: num
		}, 900, 'easeInQuart');
	}
}