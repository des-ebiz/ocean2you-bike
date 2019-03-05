$(function () {
    
	setObjHeight();
	tabDisplay('#courseListArea .courseList');
    
});

// 오브젝트 높이 설정
function setObjHeight() {
    
	// about섹션 bike박스 높이 설정
	setSm3Height();
	$(window).on("resize", function() {
		setSm3Height();
	});

	function setSm3Height() {
		var sm4 = $("#about-sec .smallBox .small-4"),
		sm3 = $("#about-sec .smallBox .small-3"),
        sm3Bd = $("#about-sec .smallBox .small-3").css('border-width') // PC랑 모바일 보더값이 달라 변수 추가
		smHeight = sm4.height() - (sm3Bd*2);
		sm3.height(smHeight);
		sm3.css({
			lineHeight: smHeight + "px"
		});
        
        //console.log(sm3Bd)
	}
    
    
}

function tabDisplay(itm) {
	//	클릭이벤트
	$(itm).children('li').on('click', function () {
		var $itmLi = $(itm).children('li')
		var idx = $(this).index();
		//	console.log(idx);
		$itmLi.eq(idx).addClass('on').siblings().removeClass('on');

		$(itm).next().children('li').eq(idx).addClass('on').siblings().removeClass('on');
	});

}
