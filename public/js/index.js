$(function() {

  $('.sm').addClass('animated rotateIn');
  
  $("#navConn").lavaLamp({
    fx: "backout", 
    speed: 700,
    click: function(event, menuItem) {
        // var arr = [0, 800, 2350, 4650, 5300, 5650];
        // var index = menuItem.getAttribute('data-index');
        // $(document).scrollTop(arr[index]);
        // $('#navConn a').css('color', '#858585');
        // $('#navConn a').eq(index).css('color', '#fec006');
    }
  });

  $('.read').click(function(){
    var regEmail=/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    var inputEmail = $('.email').val();
    if(inputEmail == ''){
        alert('输入不能为空！');
        return false;
    }
    if (regEmail.test(inputEmail)) {
      $.ajax({
        type: "get",
        url: "http://www.9-a-m.com/subscribe",
        data: {email:$('.email').val()},        
        dataType : "jsonp",
        jsonp: "callback",
        success: function (data) {
          alert('订阅成功!');
        }
      });
      alert('订阅成功!');
    } else {
      alert('请输入正确邮箱！')
    }
  })

  $(".flexsliderCon").flexslider({
    animation: "slide",
    slideshowSpeed: 3000,
    pauseOnHover: true
  });

  $(".flexslider").flexslider({
    animation: "slide",
    slideshowSpeed: 2000,
    pauseOnHover: true,
    directionNav: false
  });

  var picNum = $('.stepText h4');
  $('#app .flex-control-nav li').css('display', 'none');
  for (var i = 0; i < picNum.length; i++) {
    var picnum = picNum[i];
    picnum.index = i;
    picnum.onclick = function() {
      $('#app .flex-control-nav li a').eq(this.index).click();
    }
  }

  $(window).scroll(function() {
    var dTop = $(document).scrollTop();
    if (dTop > 0) {
        $('#nav').addClass('fixedNav');
    } else {
        $('#nav').removeClass('fixedNav');
    } 

    var arr = [];
    for (var i = 0; i < 6; i++) {
      var left = $('#navConn a').eq(i).offset().left;
      arr.push(left);
    }

    if(dTop < 800) {
      $('.back').css({'left': arr[0], 'width': '66px'});
      $('#navConn a').css('color', '#858585');
      $('#navConn a').eq(0).css('color', '#fec006');
    }

    if(dTop > 800) {
      $('.back').css({'left': arr[1], 'width': '139px'});
      $('#navConn a').css('color', '#858585');
      $('#navConn a').eq(1).css('color', '#fec006');      
    }

    if(dTop > 900) {
      $('.thisApp').addClass('animated zoomIn');
    }

    if(dTop > 1700) {
      $('.floorimg').addClass('animated bounceInUp');
    }

    if(dTop > 2350) {
      $('.back').css({'left': arr[2], 'width': '98px'});
      $('#navConn a').css('color', '#858585');
      $('#navConn a').eq(2).css('color', '#fec006');
    }

    if(dTop > 3900) {
      $('.computer').addClass('animated fadeInLeft');
    }

    if(dTop > 4650) {
      $('.back').css({'left': arr[3], 'width': '66px'});
      $('#navConn a').css('color', '#858585');
      $('#navConn a').eq(3).css('color', '#fec006');
    }

    if(dTop > 5300) {
      $('.back').css({'left': arr[4], 'width': '66px'});
      $('#navConn a').css('color', '#858585');
      $('#navConn a').eq(4).css('color', '#fec006');
    }

    if(dTop > 5650) {
      $('.back').css({'left': arr[5], 'width': '66px'});
      $('#navConn a').css('color', '#858585');
      $('#navConn a').eq(5).css('color', '#fec006');
    }
  })

  $('.closeQR').click(function(){
    $('.qrcode').css('display','none');
  })

  $('.wechat').click(function(){
    $('.qrcode').css('display','block');
  })

})