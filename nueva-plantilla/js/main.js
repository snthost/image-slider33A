!function(o){"use strict";o(".animsition").animsition({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"html",loadingClass:"animsition-loading-1",loadingInner:'<div data-loader="ball-scale"></div>',timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"html",transition:function(o){window.location.href=o}});var e=o(window).height()/2;o(window).on("scroll",function(){o(this).scrollTop()>e?o("#myBtn").css("display","flex"):o("#myBtn").css("display","none")}),o("#myBtn").on("click",function(){o("html, body").animate({scrollTop:0},300)}),o(".js-show-header-dropdown").on("click",function(){o(this).parent().find(".header-dropdown")});for(var n=o(".js-show-header-dropdown"),i=-1,t=0;t<n.length;t++)o(n[t]).on("click",function(){if(jQuery.inArray(this,n)==i)o(this).parent().find(".header-dropdown").toggleClass("show-header-dropdown"),i=-1;else{for(var e=0;e<n.length;e++)o(n[e]).parent().find(".header-dropdown").removeClass("show-header-dropdown");o(this).parent().find(".header-dropdown").toggleClass("show-header-dropdown"),i=jQuery.inArray(this,n)}});o(".js-show-header-dropdown, .header-dropdown").click(function(o){o.stopPropagation()}),o(window).on("click",function(){for(var e=0;e<n.length;e++)o(n[e]).parent().find(".header-dropdown").removeClass("show-header-dropdown");i=-1});var s=o(".topbar").height(),d=o(".container-menu-header");o(window).on("scroll",function(){if(o(this).scrollTop()>=s)o(".header1").addClass("fixed-header"),o(d).css("top",-s);else{var e=-o(this).scrollTop();o(d).css("top",e),o(".header1").removeClass("fixed-header")}o(this).scrollTop()>=200&&o(window).width()>992?(o(".fixed-header2").addClass("show-fixed-header2"),o(".header2").css("visibility","hidden"),o(".header2").find(".header-dropdown").removeClass("show-header-dropdown")):(o(".fixed-header2").removeClass("show-fixed-header2"),o(".header2").css("visibility","visible"),o(".fixed-header2").find(".header-dropdown").removeClass("show-header-dropdown"))}),o(".btn-show-menu-mobile").on("click",function(){o(this).toggleClass("is-active"),o(".wrap-side-menu").slideToggle()});for(var a=o(".arrow-main-menu"),t=0;t<a.length;t++)o(a[t]).on("click",function(){o(this).parent().find(".sub-menu").slideToggle(),o(this).toggleClass("turn-arrow")});o(window).resize(function(){o(window).width()>=992&&("block"==o(".wrap-side-menu").css("display")&&(o(".wrap-side-menu").css("display","none"),o(".btn-show-menu-mobile").toggleClass("is-active")),"block"==o(".sub-menu").css("display")&&(o(".sub-menu").css("display","none"),o(".arrow-main-menu").removeClass("turn-arrow")))}),o(".btn-romove-top-noti").on("click",function(){o(this).parent().remove()}),o(".block2-btn-addwishlist").on("click",function(e){e.preventDefault(),o(this).addClass("block2-btn-towishlist"),o(this).removeClass("block2-btn-addwishlist"),o(this).off("click")}),o(".btn-num-product-down").on("click",function(e){e.preventDefault();var n=Number(o(this).next().val());n>1&&o(this).next().val(n-1)}),o(".btn-num-product-up").on("click",function(e){e.preventDefault();var n=Number(o(this).prev().val());o(this).prev().val(n+1)}),o(".active-dropdown-content .js-toggle-dropdown-content").toggleClass("show-dropdown-content"),o(".active-dropdown-content .dropdown-content").slideToggle("fast"),o(".js-toggle-dropdown-content").on("click",function(){o(this).toggleClass("show-dropdown-content"),o(this).parent().find(".dropdown-content").slideToggle("fast")});var r=o(".video-mo-01").children("iframe").attr("src");o('[data-target="#modal-video-01"]').on("click",function(){o(".video-mo-01").children("iframe")[0].src+="&autoplay=1",setTimeout(function(){o(".video-mo-01").css("opacity","1")},300)}),o('[data-dismiss="modal"]').on("click",function(){o(".video-mo-01").children("iframe")[0].src=r,o(".video-mo-01").css("opacity","0")})}(jQuery);
/*/////////////////////////////////*/
!function(s){"use strict";for(var a=s(".slick1").find(".item-slick1"),e=[],i=[],t=[],l=[],o=[],r=[],n=0;n<a.length;n++)l[n]=s(a[n]).find(".caption1-slide1"),o[n]=s(a[n]).find(".caption2-slide1"),r[n]=s(a[n]).find(".wrap-btn-slide1");s(".slick1").on("init",function(){e[0]=setTimeout(function(){s(l[0]).addClass(s(l[0]).data("appear")+" visible-true")},200),i[0]=setTimeout(function(){s(o[0]).addClass(s(o[0]).data("appear")+" visible-true")},1e3),t[0]=setTimeout(function(){s(r[0]).addClass(s(r)[0].data("appear")+" visible-true")},1800)}),s(".slick1").slick({slidesToShow:1,slidesToScroll:1,fade:!0,dots:!1,appendDots:s(".wrap-slick1-dots"),dotsClass:"slick1-dots",infinite:!0,autoplay:!0,autoplaySpeed:6e3,arrows:!0,appendArrows:s(".wrap-slick1"),prevArrow:'<button class="arrow-slick1 prev-slick1"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',nextArrow:'<button class="arrow-slick1 next-slick1"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'}),s(".slick1").on("afterChange",function(n,d,c){for(var p=0;p<a.length;p++)clearTimeout(e[p]),clearTimeout(i[p]),clearTimeout(t[p]),s(l[p]).removeClass(s(l[p]).data("appear")+" visible-true"),s(o[p]).removeClass(s(o[p]).data("appear")+" visible-true"),s(r[p]).removeClass(s(r[p]).data("appear")+" visible-true");e[c]=setTimeout(function(){s(l[c]).addClass(s(l[c]).data("appear")+" visible-true")},200),i[c]=setTimeout(function(){s(o[c]).addClass(s(o[c]).data("appear")+" visible-true")},1e3),t[c]=setTimeout(function(){s(r[c]).addClass(s(r)[c].data("appear")+" visible-true")},1800)}),s(".slick2").slick({slidesToShow:4,slidesToScroll:4,infinite:!0,autoplay:!1,autoplaySpeed:6e3,arrows:!0,appendArrows:s(".wrap-slick2"),prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),s(".slick3").slick({slidesToShow:1,slidesToScroll:1,fade:!0,dots:!0,appendDots:s(".wrap-slick3-dots"),dotsClass:"slick3-dots",infinite:!0,autoplay:!1,autoplaySpeed:6e3,arrows:!1,customPaging:function(a,e){var i=s(a.$slides[e]).data("thumb");return'<img src=" '+i+' "/><div class="slick3-dot-overlay"></div>'}})}(jQuery);
