$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	  direction: 'horizontal',
	  loop: true,
	  autoplay: 3000,
	  autoplayDisableOnInteraction : false,
	})

	$('.download').tap(function() {
		var ua = navigator.userAgent;
		if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1) {
			location.href = 'https://itunes.apple.com/us/app/id1159544940?ls=1&mt=8';
		} else if (ua.indexOf('Android') > -1) {
			location.href = 'http://sj.qq.com/myapp/detail.htm?apkName=com.officewellapp';
		} else {
			location.href = 'http://www.officewell.co/index_m.html';
		}
	})
})