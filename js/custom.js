var Categories = ['learn', 'earn', 'connect', 'explore']
function showSubMenu(category, sm) {
  const subMenu = $("#sub_menu")
  subMenu.find('.sub-menu-container').css('display', 'none')
  subMenu.find('.sub-menu-container.sub-'+category).css('display', 'flex')
  if(subMenu.hasClass('active')) $("#sub_menu").removeClass('active')
  else $("#sub_menu").addClass('active')
}
function openSubMenu (category, subMenu) {
  // console.log(category)
  // console.log(subMenu)
  var pathname = window.location.pathname;
  if(pathname.includes('/' + category) || category === 'learn' || category === 'earn'){
    // console.log({pathname})
    showSubMenu(category, subMenu)
  }else{
    if(subMenu){
      location.href = '/' + category + '/' + subMenu
    }else{
      location.href = '/' + category
    }
  }
}
function revolution_show_video() {
  $('#my-video-display').prettyEmbed({
    videoID: 'zoxAW6R9NEM',
    previewSize: 'thumb-default',				// use either this option...
    customPreviewImage: 'https://img.youtube.com/vi/zoxAW6R9NEM/0.jpg',			// ...or this option

    // Embed controls
    showInfo: true,
    showControls: true,
    loop: false,

    colorScheme: 'dark',
    showRelated: false,

    // useFitVids: true
  });
}
function getRupeesFormat(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}
function num_animations() {
  $(".numerial-item").each(function(){
    console.log($(this))
    $(this).addClass('active')
  })
  $('.num').each(function () {
    console.log("$(this).text() ===", $(this).text())

    // $({ Counter: 0 }).animate({
    //   Counter: $(this).text()
    // }, {
    //   duration: 1000,
    //   easing: 'swing',
    //   step: function() {
    //     $(this).text(getRupeesFormat(Math.ceil(this.Counter)));
    //   }
    // });
        
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(getRupeesFormat(Math.ceil(now)));
        }
    })
  })
}
function httpGet(theUrl){
    jQuery.ajax({ 
      type: 'GET', 
      url: theUrl, 
      dataType: 'json',
      success: function (data) { 
        if(data) {
          console.log("success api call")
          $(".num_users").text(data.users)
          $(".num_koii_earned").text(data.koii_earned)
          $(".num_atomic_nfts").text(data.atomic_nfts)
          num_animations()
        }else{
          console.log("error api call")
          $(".num_users").text(2894)
          $(".num_koii_earned").text(88240)
          $(".num_atomic_nfts").text(3325)
          setTimeout(function(){
            num_animations()
          },100)
        }
      },
      error: function(err) { 
        console.log(err); 
        console.log('Failed!'); 
        $(".num_users").text(2894)
        $(".num_koii_earned").text(88240)
        $(".num_atomic_nfts").text(3325)
        setTimeout(function(){
          num_animations()
        },100)
      }
    });
    // $.ajax({
    //   url: theUrl,
    //   type: 'GET',
    //   crossDomain: true,
    //   dataType: 'jsonp',
    //   contentType: 'application/json',
    //   success: function(data) { 
    //     console.log( "Sample of data:", data );
    //     if(data) {
    //       $(".num_users").text(data.users)
    //       $(".num_koii_earned").text(data.koii_earned)
    //       $(".num_atomic_nfts").text(data.atomic_nfts)
    //     }
    //     num_animations()
    //     alert("Success"); },
    //   error: function(err) { 
    //     console.log(err); 
    //     console.log('Failed!'); 
    //     $(".num_users").text(2894)
    //     $(".num_koii_earned").text(88240)
    //     $(".num_atomic_nfts").text(3325)
    //     setTimeout(function(){
    //       num_animations()
    //     },100)
    //   }
    // });
}
function setActiveMenu(category, subCategory) {
  console.log("category :", category)
  console.log("sub :", subCategory)
  if(category === '') { 
    httpGet('https://koii.live/info.json')
    return 
  }
  $("#topbar .web-header .nav-item").each(function(index, value){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
  })
  $("#topbar .mobile-header .nav-item").each(function(index, value){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
  })
  $("#sub_menu .sub-menu-container.sub-"+category+" .sub-menu-item").each(function(index, value){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
  })
  $("#topbar .web-header .nav-item.nav-" + category).addClass('active')
  $("#topbar .mobile-header .nav-item.nav-" + category).addClass('active')
  switch(category) {
    case 'learn':
      $("#sub_menu .sub-menu-container.sub-"+category+" .sub-menu-item.sub-menu-"+subCategory).addClass('active')
      break;
    case 'earn':
      $("#sub_menu .sub-menu-container.sub-"+category+" .sub-menu-item.sub-menu-"+subCategory).addClass('active')
      break;
    case 'connect':
      
      break;
    case 'explore':
      
      break;
    default :
      break;
  }
}
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function goToMailchimp(email) {
  $('.input-subscription').val('')
  window.location.href = 'http://eepurl.com/hv7r5D'
}

var slideIndex = 1;
function show_slide() {
  showSlides(slideIndex);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*
  custom pure slider
*/
function Slider( element ) {
	this.el = document.querySelector( element );
	this.init();
}	

Slider.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( "#slider-nav a" );
		this.wrapper = this.el.querySelector( "#slider-wrapper" );
		this.navigate();
	},
	navigate: function() {
	
		for( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );	
		}
    // this.setCurrentLink(this.links[1])
	},
	
	animate: function( slide ) {
		var parent = slide.parentNode;
		var caption = slide.querySelector( ".caption" );
		var captions = parent.querySelectorAll( ".caption" );
		for( var k = 0; k < captions.length; ++k ) {
			var cap = captions[k];
			if( cap !== caption ) {
				cap.classList.remove( "visible" );
			}
		}
		caption.classList.add( "visible" );	
	},
	
	slide: function( element ) {
		var self = this;
		element.addEventListener( "click", function( e ) {
			e.preventDefault();
			var a = this;
			self.setCurrentLink( a );
      console.log( a )
			var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
			var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );
			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			self.animate( currentSlide );
		}, false);
	},
	setCurrentLink: function( link ) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "a" );
		
		link.className = "current";
		
		for( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if( cur !== link ) {
				cur.className = "";
			}
		}
	}	
};

document.addEventListener( "DOMContentLoaded", function() {
	var aSlider = new Slider( "#slider_custom" );
  $("#key2").trigger( "click");
});
/*
  end custom pure slider
*/

(jQuery)(function($) {
  var pathname = window.location.pathname;
  var paths = pathname.split('/')
  console.log({paths})
  // ["", "learn", "about"]
  var category = '', subCat = ''
  if(paths.length === 2) {
    category = paths[1]
  }else if(paths.length >= 3){
    category = paths[1]
    subCat = paths[2]
  }
  if(category === 'connect'){
    show_slide()
  }
  setActiveMenu(category, subCat)
  $("#tap1").on('click', function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
    $(".tap1-content").show()
  })
  $("#tap3").on('click', function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
    $(".tap3-content").show()
  })
  $("#tap2").on('click', function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
    $(".tap2-content").show()
  })
  $(".content-detail .icon-close").click(function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
  })

  $(".btn-subscription").on('click', function(){
    var email = $('.input-subscription').val()
    
    if(isEmail(email)){
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({'email': email });
      document.getElementById('showconfirm').style.display = "flex";
      document.getElementById('mc-embedded-subscribe-form').style.display = "none";
    }else{
      console.log('ran')
      alert('You should input an email');  
      return ;
    }
  })

  $(".btn-signup").on('click', function(){
    var email = $('.input-signup').val()
    if(isEmail(email)){
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({'email': email });
      document.getElementById('showconfirm1').style.display = "flex";
      document.getElementById('mc-embedded-signup-form').style.display = "none";
    }else{
      console.log('ran')
      alert('You should input an email');  
      return ;
    }
  })

  $(".btn-submit").on('click', function(){
    var email = $('.input-submit').val()
    if(isEmail(email)){
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({'email': email });
      document.getElementById('showconfirm2').style.display = "flex";
      document.getElementById('mc-embedded-submit-form').style.display = "none";
    }else{
      console.log('ran')
      alert('You should input an email');  
      return ;
    }
  })
  revolution_show_video()
  $(".lazy").lazyload(); // image and iframe lazy loading
})
