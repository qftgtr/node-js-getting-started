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
        url: "/subscribe",
        data: {email:$('.email').val()},
        dataType : "jsonp",
        jsonp: "callback"
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
    picnum.onmouseover = function() {
      $('#app .flex-control-nav li a').eq(this.index).click();
    }
  }

  $('.closeQR').click(function(){
    $('.qrcode').css('display','none');
  })

  $('.wechat').click(function(){
    $('.qrcode').css('display','block');
  })

})

function goto(event, height) {
  $(document).scrollTop(height);
  let indexNode = event.parentNode.getAttribute("data-index");
  $('#navConn a').css('color', '#858585');
  $('#navConn a').eq(indexNode).css('color', '#fec006');
}