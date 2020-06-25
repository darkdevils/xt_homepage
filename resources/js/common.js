$(function () {

  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('#mask').css({'width':maskWidth,'height':maskHeight});

  function sideMenuOpen() {
    $(".nav, .hamburger a").addClass("on");
    $('#mask').fadeIn(1000);
    $('#mask').fadeTo("slow",0.8);
  }
  function sideMenuClose() {
    $(".nav, .hamburger a").removeClass("on");
    $('#mask').fadeOut();
    $('#mask').fadeTo("fast",1);
  }
  $('#mask').click(function () {
    sideMenuClose();
    $(".hamburger a").removeClass("on");
    $("#gnb, .pop-contact").animate({"opacity": 0},100, function() {
      $(this).css("display","none");
    });
  });

  /* 햄버거 사이드 메뉴 */
  $(".hamburger a").on("click", function () {
    $(this).toggleClass("on");
    if($(this).hasClass("on")) {
      sideMenuOpen();
      $("#gnb").animate({"opacity": 1},100, function() {
        $(this).css("display","block");
      });
    } else {
      sideMenuClose();
      $("#gnb, .pop-contact").animate({"opacity": 0},100, function() {
        $(this).css("display","none");
      });
    }
  });
  $("#gnb li a").hover(function () {
    $("#gnb li a").css("color","#d4d4d4");
    $(this).css("color","#000");
  }, function (){
    $("#gnb li a").css("color","#000");
  });

  // request, apply
  $(".btn-request").on("click", function () {
    sideMenuOpen();
    $(".request").animate({"opacity": 1},100, function() {
      $(this).css("display","block");
    });
  });
  $(".btn-apply").on("click", function () {
    sideMenuOpen();
    $(".apply").animate({"opacity": 1},100, function() {
      $(this).css("display","block");
    });
  });


  // black Type
  $('.topBlack').closest('body').addClass('blackType');

  // header pdf download
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerDown = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;
/*        if(st > 10 ) {
            $('.pdf-down').fadeOut();
        } else {
            $('.pdf-down').fadeIn();
        }*/
        if (st > lastScrollTop && st > headerDown){
            // Scroll Down
            $('header').removeClass('down').addClass('up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('up').addClass('down');
            }
        }
        lastScrollTop = st;
    }

    // scroll Top Button
    $('.btnTop').on('click',function(){
        $('html, body').animate({scrollTop: '0'}, 600);
    });

});
