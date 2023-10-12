(function(e){e.easing["jswing"]=e.easing["swing"];e.extend(e.easing,{def:"easeOutQuad",swing:function(t,n,r,i,s){return e.easing[e.easing.def](t,n,r,i,s)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(t,n,r,i,s){return i-e.easing.easeOutBounce(t,s-n,0,i,s)+r},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(t,n,r,i,s){if(n<s/2)return e.easing.easeInBounce(t,n*2,0,i,s)*.5+r;return e.easing.easeOutBounce(t,n*2-s,0,i,s)*.5+i*.5+r}});e.fn.animatescroll=function(t){var n=e.extend({},e.fn.animatescroll.defaults,t);if(typeof n.onScrollStart=="function"){n.onScrollStart.call(this)}if(n.element=="html,body"){var r=this.offset().top;e(n.element).stop().animate({scrollTop:r-n.padding},n.scrollSpeed,n.easing)}else{e(n.element).stop().animate({scrollTop:this.offset().top-this.parent().offset().top+this.parent().scrollTop()-n.padding},n.scrollSpeed,n.easing)}setTimeout(function(){if(typeof n.onScrollEnd=="function"){n.onScrollEnd.call(this)}},n.scrollSpeed)};e.fn.animatescroll.defaults={easing:"swing",scrollSpeed:800,padding:0,element:"html,body"}})(jQuery)
$(document).ready(() => {
  'use strict'
  /**
   * Menu Bahasa
   */
  const clickable = document.querySelectorAll('.drop-lang')

  const showMenu = (e) => {
    Array.from(clickable).forEach(drop => {
      drop.addEventListener('click',(e) => {
        drop.classList.toggle('active');
        e.stopPropagation();
      })
    })
  }
  const hideMenu = (e) => {
    Array.from(clickable).forEach(drop => {
      if(drop.classList.contains('active')) {
        drop.classList.remove('active')
      }
    })
    e.stopPropagation();
  }
  window.addEventListener('load', showMenu, false)
  window.addEventListener('click', hideMenu, false)
  /**
   * Open Menu In Mobile or Tablet
   */
  const menuWrapper = document.querySelector('.menu-primary')
  const btnMenu = document.querySelector('.btn-menu')

  const openMenu = (e) => {
    menuWrapper.classList.add('menu-primary--open')
    btnMenu.closest('.btn-menu-holder').style.zIndex = "-1"
    e.stopPropagation()
  }
  const closeMenu = (e) => {
    menuWrapper.classList.remove('menu-primary--open')
    btnMenu.closest('.btn-menu-holder').style.zIndex = "1"
    e.stopPropagation()
  }
  btnMenu.addEventListener('click', openMenu, false)
  window.addEventListener('click', closeMenu, false)
  /**
   * Sticky Header
   */
   const header = document.querySelector('.top-header');
   const logoDefault = document.getElementById('img--default')
   const logoDark = document.getElementById('img--dark')
   window.addEventListener('scroll', () => {
    let wh = this.scrollY
    if(wh > 0) {
      header.classList.add('top-header--sticky')
      logoDefault.classList.add('d-none')
      logoDark.classList.remove('d-none')
    } else {
      header.classList.remove('top-header--sticky')
      logoDefault.classList.remove('d-none')
      logoDark.classList.add('d-none')
    }
   }, false)
   /**
    * Counter
    */
  const section = document.querySelector('.statistic');
  let hasEntered = false;
  window.addEventListener('scroll', (e) => {
    let shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;
    if (shouldAnimate && !hasEntered) {
      hasEntered = true;
      $('.number').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });
  /**
   * Modal Video
   */
  $(() => {
    const modalVideo = $('#modal-video')
    const companyModal = $('#company-modal')
    let url = companyModal.attr('src')
    modalVideo.on('show.bs.modal', () => {
      companyModal.attr('src', url+'?autoplay=1')
    })
    modalVideo.on('hide.bs.modal', () => {
      companyModal.attr('src', '')
    })
  })
  /**
   * Carousel Modul
   */
  $(() => {
    const sliderProduct = $('.carousel__product');
    sliderProduct.owlCarousel({
      items: 4,
      loop: false,
      margin: 30,
      nav: false,
      dots: false,
      responsive: {
        0:{
          items: 1,
          margin: 50
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
          margin: 40
        },
        1200: {
          items: 4,
          margin: 30
        }
      }
    })

    $('.product-next').click(function() {
      sliderProduct.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.product-prev').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      sliderProduct.trigger('prev.owl.carousel', [300]);
    })
    //service carousel
    const sliderService = $('.carousel__service');
    sliderService.owlCarousel({
      items: 4,
      loop: false,
      margin: 30,
      nav: false,
      dots: false,
      responsive: {
        0:{
          items: 1,
          margin: 50
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
          margin: 40
        },
        1200: {
          items: 4,
          margin: 30
        }
      }
    })

    $('.service-next').click(function() {
      sliderService.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.service-prev').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      sliderService.trigger('prev.owl.carousel', [300]);
    })
  })

  /**
   * Carousel Stories
   */
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 70,
    mousewheel: true,
    navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
    },
    breakpoints: {
      0: {
        spaceBetween: 20
      },
      768: {
        spaceBetween: 30
      },
      1080: {
        spaceBetween: 50
      },
      1200: {
        spaceBetween: 70
      }
    },
    centeredSlides: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true
  });
  /**
   * Parallax Scroll
   */
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGVzY3JvbGwubWluLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihlKXtlLmVhc2luZ1tcImpzd2luZ1wiXT1lLmVhc2luZ1tcInN3aW5nXCJdO2UuZXh0ZW5kKGUuZWFzaW5nLHtkZWY6XCJlYXNlT3V0UXVhZFwiLHN3aW5nOmZ1bmN0aW9uKHQsbixyLGkscyl7cmV0dXJuIGUuZWFzaW5nW2UuZWFzaW5nLmRlZl0odCxuLHIsaSxzKX0sZWFzZUluUXVhZDpmdW5jdGlvbihlLHQsbixyLGkpe3JldHVybiByKih0Lz1pKSp0K259LGVhc2VPdXRRdWFkOmZ1bmN0aW9uKGUsdCxuLHIsaSl7cmV0dXJuLXIqKHQvPWkpKih0LTIpK259LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24oZSx0LG4scixpKXtpZigodC89aS8yKTwxKXJldHVybiByLzIqdCp0K247cmV0dXJuLXIvMiooLS10Kih0LTIpLTEpK259LGVhc2VJbkN1YmljOmZ1bmN0aW9uKGUsdCxuLHIsaSl7cmV0dXJuIHIqKHQvPWkpKnQqdCtufSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24oZSx0LG4scixpKXtyZXR1cm4gciooKHQ9dC9pLTEpKnQqdCsxKStufSxlYXNlSW5PdXRDdWJpYzpmdW5jdGlvbihlLHQsbixyLGkpe2lmKCh0Lz1pLzIpPDEpcmV0dXJuIHIvMip0KnQqdCtuO3JldHVybiByLzIqKCh0LT0yKSp0KnQrMikrbn0sZWFzZUluUXVhcnQ6ZnVuY3Rpb24oZSx0LG4scixpKXtyZXR1cm4gcioodC89aSkqdCp0KnQrbn0sZWFzZU91dFF1YXJ0OmZ1bmN0aW9uKGUsdCxuLHIsaSl7cmV0dXJuLXIqKCh0PXQvaS0xKSp0KnQqdC0xKStufSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbihlLHQsbixyLGkpe2lmKCh0Lz1pLzIpPDEpcmV0dXJuIHIvMip0KnQqdCp0K247cmV0dXJuLXIvMiooKHQtPTIpKnQqdCp0LTIpK259LGVhc2VJblF1aW50OmZ1bmN0aW9uKGUsdCxuLHIsaSl7cmV0dXJuIHIqKHQvPWkpKnQqdCp0KnQrbn0sZWFzZU91dFF1aW50OmZ1bmN0aW9uKGUsdCxuLHIsaSl7cmV0dXJuIHIqKCh0PXQvaS0xKSp0KnQqdCp0KzEpK259LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKGUsdCxuLHIsaSl7aWYoKHQvPWkvMik8MSlyZXR1cm4gci8yKnQqdCp0KnQqdCtuO3JldHVybiByLzIqKCh0LT0yKSp0KnQqdCp0KzIpK259LGVhc2VJblNpbmU6ZnVuY3Rpb24oZSx0LG4scixpKXtyZXR1cm4tcipNYXRoLmNvcyh0L2kqKE1hdGguUEkvMikpK3Irbn0sZWFzZU91dFNpbmU6ZnVuY3Rpb24oZSx0LG4scixpKXtyZXR1cm4gcipNYXRoLnNpbih0L2kqKE1hdGguUEkvMikpK259LGVhc2VJbk91dFNpbmU6ZnVuY3Rpb24oZSx0LG4scixpKXtyZXR1cm4tci8yKihNYXRoLmNvcyhNYXRoLlBJKnQvaSktMSkrbn0sZWFzZUluRXhwbzpmdW5jdGlvbihlLHQsbixyLGkpe3JldHVybiB0PT0wP246cipNYXRoLnBvdygyLDEwKih0L2ktMSkpK259LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKGUsdCxuLHIsaSl7cmV0dXJuIHQ9PWk/bityOnIqKC1NYXRoLnBvdygyLC0xMCp0L2kpKzEpK259LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24oZSx0LG4scixpKXtpZih0PT0wKXJldHVybiBuO2lmKHQ9PWkpcmV0dXJuIG4rcjtpZigodC89aS8yKTwxKXJldHVybiByLzIqTWF0aC5wb3coMiwxMCoodC0xKSkrbjtyZXR1cm4gci8yKigtTWF0aC5wb3coMiwtMTAqLS10KSsyKStufSxlYXNlSW5DaXJjOmZ1bmN0aW9uKGUsdCxuLHIsaSl7cmV0dXJuLXIqKE1hdGguc3FydCgxLSh0Lz1pKSp0KS0xKStufSxlYXNlT3V0Q2lyYzpmdW5jdGlvbihlLHQsbixyLGkpe3JldHVybiByKk1hdGguc3FydCgxLSh0PXQvaS0xKSp0KStufSxlYXNlSW5PdXRDaXJjOmZ1bmN0aW9uKGUsdCxuLHIsaSl7aWYoKHQvPWkvMik8MSlyZXR1cm4tci8yKihNYXRoLnNxcnQoMS10KnQpLTEpK247cmV0dXJuIHIvMiooTWF0aC5zcXJ0KDEtKHQtPTIpKnQpKzEpK259LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgcz0xLjcwMTU4O3ZhciBvPTA7dmFyIHU9cjtpZih0PT0wKXJldHVybiBuO2lmKCh0Lz1pKT09MSlyZXR1cm4gbityO2lmKCFvKW89aSouMztpZih1PE1hdGguYWJzKHIpKXt1PXI7dmFyIHM9by80fWVsc2UgdmFyIHM9by8oMipNYXRoLlBJKSpNYXRoLmFzaW4oci91KTtyZXR1cm4tKHUqTWF0aC5wb3coMiwxMCoodC09MSkpKk1hdGguc2luKCh0KmktcykqMipNYXRoLlBJL28pKStufSxlYXNlT3V0RWxhc3RpYzpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBzPTEuNzAxNTg7dmFyIG89MDt2YXIgdT1yO2lmKHQ9PTApcmV0dXJuIG47aWYoKHQvPWkpPT0xKXJldHVybiBuK3I7aWYoIW8pbz1pKi4zO2lmKHU8TWF0aC5hYnMocikpe3U9cjt2YXIgcz1vLzR9ZWxzZSB2YXIgcz1vLygyKk1hdGguUEkpKk1hdGguYXNpbihyL3UpO3JldHVybiB1Kk1hdGgucG93KDIsLTEwKnQpKk1hdGguc2luKCh0KmktcykqMipNYXRoLlBJL28pK3Irbn0sZWFzZUluT3V0RWxhc3RpYzpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBzPTEuNzAxNTg7dmFyIG89MDt2YXIgdT1yO2lmKHQ9PTApcmV0dXJuIG47aWYoKHQvPWkvMik9PTIpcmV0dXJuIG4rcjtpZighbylvPWkqLjMqMS41O2lmKHU8TWF0aC5hYnMocikpe3U9cjt2YXIgcz1vLzR9ZWxzZSB2YXIgcz1vLygyKk1hdGguUEkpKk1hdGguYXNpbihyL3UpO2lmKHQ8MSlyZXR1cm4tLjUqdSpNYXRoLnBvdygyLDEwKih0LT0xKSkqTWF0aC5zaW4oKHQqaS1zKSoyKk1hdGguUEkvbykrbjtyZXR1cm4gdSpNYXRoLnBvdygyLC0xMCoodC09MSkpKk1hdGguc2luKCh0KmktcykqMipNYXRoLlBJL28pKi41K3Irbn0sZWFzZUluQmFjazpmdW5jdGlvbihlLHQsbixyLGkscyl7aWYocz09dW5kZWZpbmVkKXM9MS43MDE1ODtyZXR1cm4gcioodC89aSkqdCooKHMrMSkqdC1zKStufSxlYXNlT3V0QmFjazpmdW5jdGlvbihlLHQsbixyLGkscyl7aWYocz09dW5kZWZpbmVkKXM9MS43MDE1ODtyZXR1cm4gciooKHQ9dC9pLTEpKnQqKChzKzEpKnQrcykrMSkrbn0sZWFzZUluT3V0QmFjazpmdW5jdGlvbihlLHQsbixyLGkscyl7aWYocz09dW5kZWZpbmVkKXM9MS43MDE1ODtpZigodC89aS8yKTwxKXJldHVybiByLzIqdCp0KigoKHMqPTEuNTI1KSsxKSp0LXMpK247cmV0dXJuIHIvMiooKHQtPTIpKnQqKCgocyo9MS41MjUpKzEpKnQrcykrMikrbn0sZWFzZUluQm91bmNlOmZ1bmN0aW9uKHQsbixyLGkscyl7cmV0dXJuIGktZS5lYXNpbmcuZWFzZU91dEJvdW5jZSh0LHMtbiwwLGkscykrcn0sZWFzZU91dEJvdW5jZTpmdW5jdGlvbihlLHQsbixyLGkpe2lmKCh0Lz1pKTwxLzIuNzUpe3JldHVybiByKjcuNTYyNSp0KnQrbn1lbHNlIGlmKHQ8Mi8yLjc1KXtyZXR1cm4gciooNy41NjI1Kih0LT0xLjUvMi43NSkqdCsuNzUpK259ZWxzZSBpZih0PDIuNS8yLjc1KXtyZXR1cm4gciooNy41NjI1Kih0LT0yLjI1LzIuNzUpKnQrLjkzNzUpK259ZWxzZXtyZXR1cm4gciooNy41NjI1Kih0LT0yLjYyNS8yLjc1KSp0Ky45ODQzNzUpK259fSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24odCxuLHIsaSxzKXtpZihuPHMvMilyZXR1cm4gZS5lYXNpbmcuZWFzZUluQm91bmNlKHQsbioyLDAsaSxzKSouNStyO3JldHVybiBlLmVhc2luZy5lYXNlT3V0Qm91bmNlKHQsbioyLXMsMCxpLHMpKi41K2kqLjUrcn19KTtlLmZuLmFuaW1hdGVzY3JvbGw9ZnVuY3Rpb24odCl7dmFyIG49ZS5leHRlbmQoe30sZS5mbi5hbmltYXRlc2Nyb2xsLmRlZmF1bHRzLHQpO2lmKHR5cGVvZiBuLm9uU2Nyb2xsU3RhcnQ9PVwiZnVuY3Rpb25cIil7bi5vblNjcm9sbFN0YXJ0LmNhbGwodGhpcyl9aWYobi5lbGVtZW50PT1cImh0bWwsYm9keVwiKXt2YXIgcj10aGlzLm9mZnNldCgpLnRvcDtlKG4uZWxlbWVudCkuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDpyLW4ucGFkZGluZ30sbi5zY3JvbGxTcGVlZCxuLmVhc2luZyl9ZWxzZXtlKG4uZWxlbWVudCkuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDp0aGlzLm9mZnNldCgpLnRvcC10aGlzLnBhcmVudCgpLm9mZnNldCgpLnRvcCt0aGlzLnBhcmVudCgpLnNjcm9sbFRvcCgpLW4ucGFkZGluZ30sbi5zY3JvbGxTcGVlZCxuLmVhc2luZyl9c2V0VGltZW91dChmdW5jdGlvbigpe2lmKHR5cGVvZiBuLm9uU2Nyb2xsRW5kPT1cImZ1bmN0aW9uXCIpe24ub25TY3JvbGxFbmQuY2FsbCh0aGlzKX19LG4uc2Nyb2xsU3BlZWQpfTtlLmZuLmFuaW1hdGVzY3JvbGwuZGVmYXVsdHM9e2Vhc2luZzpcInN3aW5nXCIsc2Nyb2xsU3BlZWQ6ODAwLHBhZGRpbmc6MCxlbGVtZW50OlwiaHRtbCxib2R5XCJ9fSkoalF1ZXJ5KSIsIiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAndXNlIHN0cmljdCdcclxuICAvKipcclxuICAgKiBNZW51IEJhaGFzYVxyXG4gICAqL1xyXG4gIGNvbnN0IGNsaWNrYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLWxhbmcnKVxyXG5cclxuICBjb25zdCBzaG93TWVudSA9IChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKGNsaWNrYWJsZSkuZm9yRWFjaChkcm9wID0+IHtcclxuICAgICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcclxuICAgICAgICBkcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBoaWRlTWVudSA9IChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKGNsaWNrYWJsZSkuZm9yRWFjaChkcm9wID0+IHtcclxuICAgICAgaWYoZHJvcC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzaG93TWVudSwgZmFsc2UpXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1lbnUsIGZhbHNlKVxyXG4gIC8qKlxyXG4gICAqIE9wZW4gTWVudSBJbiBNb2JpbGUgb3IgVGFibGV0XHJcbiAgICovXHJcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wcmltYXJ5JylcclxuICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1tZW51JylcclxuXHJcbiAgY29uc3Qgb3Blbk1lbnUgPSAoZSkgPT4ge1xyXG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1wcmltYXJ5LS1vcGVuJylcclxuICAgIGJ0bk1lbnUuY2xvc2VzdCgnLmJ0bi1tZW51LWhvbGRlcicpLnN0eWxlLnpJbmRleCA9IFwiLTFcIlxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIH1cclxuICBjb25zdCBjbG9zZU1lbnUgPSAoZSkgPT4ge1xyXG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wcmltYXJ5LS1vcGVuJylcclxuICAgIGJ0bk1lbnUuY2xvc2VzdCgnLmJ0bi1tZW51LWhvbGRlcicpLnN0eWxlLnpJbmRleCA9IFwiMVwiXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgfVxyXG4gIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSwgZmFsc2UpXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51LCBmYWxzZSlcclxuICAvKipcclxuICAgKiBTdGlja3kgSGVhZGVyXHJcbiAgICovXHJcbiAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtaGVhZGVyJyk7XHJcbiAgIGNvbnN0IGxvZ29EZWZhdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy0tZGVmYXVsdCcpXHJcbiAgIGNvbnN0IGxvZ29EYXJrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy0tZGFyaycpXHJcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBsZXQgd2ggPSB0aGlzLnNjcm9sbFlcclxuICAgIGlmKHdoID4gMCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9wLWhlYWRlci0tc3RpY2t5JylcclxuICAgICAgbG9nb0RlZmF1bHQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcclxuICAgICAgbG9nb0RhcmsuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCd0b3AtaGVhZGVyLS1zdGlja3knKVxyXG4gICAgICBsb2dvRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKVxyXG4gICAgICBsb2dvRGFyay5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxyXG4gICAgfVxyXG4gICB9LCBmYWxzZSlcclxuICAgLyoqXHJcbiAgICAqIENvdW50ZXJcclxuICAgICovXHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWMnKTtcclxuICBsZXQgaGFzRW50ZXJlZCA9IGZhbHNlO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xyXG4gICAgbGV0IHNob3VsZEFuaW1hdGUgPSAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQpID49IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgaWYgKHNob3VsZEFuaW1hdGUgJiYgIWhhc0VudGVyZWQpIHtcclxuICAgICAgaGFzRW50ZXJlZCA9IHRydWU7XHJcbiAgICAgICQoJy5udW1iZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnByb3AoJ0NvdW50ZXInLDApLmFuaW1hdGUoe1xyXG4gICAgICAgICAgQ291bnRlcjogJCh0aGlzKS50ZXh0KClcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uIChub3cpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguY2VpbChub3cpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLyoqXHJcbiAgICogTW9kYWwgVmlkZW9cclxuICAgKi9cclxuICAkKCgpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsVmlkZW8gPSAkKCcjbW9kYWwtdmlkZW8nKVxyXG4gICAgY29uc3QgY29tcGFueU1vZGFsID0gJCgnI2NvbXBhbnktbW9kYWwnKVxyXG4gICAgbGV0IHVybCA9IGNvbXBhbnlNb2RhbC5hdHRyKCdzcmMnKVxyXG4gICAgbW9kYWxWaWRlby5vbignc2hvdy5icy5tb2RhbCcsICgpID0+IHtcclxuICAgICAgY29tcGFueU1vZGFsLmF0dHIoJ3NyYycsIHVybCsnP2F1dG9wbGF5PTEnKVxyXG4gICAgfSlcclxuICAgIG1vZGFsVmlkZW8ub24oJ2hpZGUuYnMubW9kYWwnLCAoKSA9PiB7XHJcbiAgICAgIGNvbXBhbnlNb2RhbC5hdHRyKCdzcmMnLCAnJylcclxuICAgIH0pXHJcbiAgfSlcclxuICAvKipcclxuICAgKiBDYXJvdXNlbCBNb2R1bFxyXG4gICAqL1xyXG4gICQoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVyUHJvZHVjdCA9ICQoJy5jYXJvdXNlbF9fcHJvZHVjdCcpO1xyXG4gICAgc2xpZGVyUHJvZHVjdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgbWFyZ2luOiAzMCxcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOntcclxuICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgbWFyZ2luOiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzAwOiB7XHJcbiAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMDA6IHtcclxuICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgbWFyZ2luOiA0MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICBtYXJnaW46IDMwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5wcm9kdWN0LW5leHQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgc2xpZGVyUHJvZHVjdC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgfSlcclxuICAgIC8vIEdvIHRvIHRoZSBwcmV2aW91cyBpdGVtXHJcbiAgICAkKCcucHJvZHVjdC1wcmV2JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIFdpdGggb3B0aW9uYWwgc3BlZWQgcGFyYW1ldGVyXHJcbiAgICAgIC8vIFBhcmFtZXRlcnMgaGFzIHRvIGJlIGluIHNxdWFyZSBicmFja2V0ICdbXSdcclxuICAgICAgc2xpZGVyUHJvZHVjdC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcsIFszMDBdKTtcclxuICAgIH0pXHJcbiAgICAvL3NlcnZpY2UgY2Fyb3VzZWxcclxuICAgIGNvbnN0IHNsaWRlclNlcnZpY2UgPSAkKCcuY2Fyb3VzZWxfX3NlcnZpY2UnKTtcclxuICAgIHNsaWRlclNlcnZpY2Uub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBpdGVtczogNCxcclxuICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgIG1hcmdpbjogMzAsXHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDp7XHJcbiAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgIG1hcmdpbjogNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIDcwMDoge1xyXG4gICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDAwOiB7XHJcbiAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgIG1hcmdpbjogNDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgbWFyZ2luOiAzMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCcuc2VydmljZS1uZXh0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNsaWRlclNlcnZpY2UudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcclxuICAgIH0pXHJcbiAgICAvLyBHbyB0byB0aGUgcHJldmlvdXMgaXRlbVxyXG4gICAgJCgnLnNlcnZpY2UtcHJldicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBXaXRoIG9wdGlvbmFsIHNwZWVkIHBhcmFtZXRlclxyXG4gICAgICAvLyBQYXJhbWV0ZXJzIGhhcyB0byBiZSBpbiBzcXVhcmUgYnJhY2tldCAnW10nXHJcbiAgICAgIHNsaWRlclNlcnZpY2UudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnLCBbMzAwXSk7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIC8qKlxyXG4gICAqIENhcm91c2VsIFN0b3JpZXNcclxuICAgKi9cclxuICB2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICBzcGFjZUJldHdlZW46IDcwLFxyXG4gICAgbW91c2V3aGVlbDogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLmN1c3RvbS1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5jdXN0b20tYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDA6IHtcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIwXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzBcclxuICAgICAgfSxcclxuICAgICAgMTA4MDoge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNTBcclxuICAgICAgfSxcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNzBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlXHJcbiAgfSk7XHJcbiAgLyoqXHJcbiAgICogUGFyYWxsYXggU2Nyb2xsXHJcbiAgICovXHJcbn0pIl19