$(function () {

	//	브라우저 풀너비 배경
	var winWd = $(window).width();
	var winHt = $(window).height();
	$("#mainBg").css({
		width: winWd,
		height: winHt
	});
	//	반응형 브라우저 풀너비 배경
	$(window).resize(function () {
		var winWd = $(window).width();
		var winHt = $(window).height();
		$("#mainBg").css({
			width: winWd,
			height: winHt
		});
	});
	
	// 2초 간격으로 함수 호출(실행)
	setInterval(function() {
		bgAnimation("#bgList")
	}, 3000);
	
	setInterval(function() {
		titleAnimation("#titleList")
	}, 3000);
	

	
});

//현재 이미지에서 다음 이미지로 상태를 변경하는 함수 정의
function bgAnimation(itm) {
	//변수 선언
	var showImg, nextImg;
	showImg = $(itm).children('li:eq(0)');
	nextImg = $(itm).children('li:eq(1)');
	nextImg.addClass('active');

	nextImg.css('opacity', '0');
	showImg.addClass('scale');
	nextImg.animate({
		opacity: 1
	}, 1500, function() {
		showImg.removeClass('scale');
		$(itm).append(showImg);
		showImg.removeClass('active');
	});
}

function titleAnimation(itm) {
	//변수 선언
	var showImg, nextImg;
	showImg = $(itm).children('li:eq(0)');
	nextImg = $(itm).children('li:eq(1)');
	nextImg.addClass('active');

	nextImg.css('opacity', '0');
	nextImg.animate({
		opacity: 1
	}, 800, function() {
		showImg.animate({
			opacity: 0
		}, 800);
		$(itm).append(showImg);
		showImg.removeClass('active');
	});
}