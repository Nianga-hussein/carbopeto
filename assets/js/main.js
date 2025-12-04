document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          // document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  // DOMContentLoaded  end

  $(document).ready(function(){
    $('.center-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      // variableWidth: true,
      arrows: true,
      dots: false,
      speed: 300,
      centerPadding: '50px',
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});


$(document).ready(function() {
    $( '.carosel.testimonial' ).each( function() {
        $( this ).slick( {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // this value should < total # of slides, otherwise the carousel won't slide at all
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 2000,
        dots: false,
        arrows: true,
        prevArrow: $(".carosel-nav-left-testi"),
        nextArrow: $(".carosel-nav-right-testi"),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    } );
  } );
} );


$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');   
      }

      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");

  });
  

});

// back to top
//Get the button
var mybutton = document.getElementById("backTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// onload 

$( window ).on( "load", function() {
  $(".loader").delay(2000).slideUp("slow");
  $("#overlayer").delay(2000).slideUp("slow");
});


function loading() {
  document.querySelectorAll(".bar").forEach(function (current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;

    /* 
    setInterval() time sholud be set as trasition time / 100. 
    In our case, 2 seconds / 100 = 20 milliseconds. 
    */
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
        startWidth++;
        current.style.width = `${endWidth}%`;
        // current.firstElementChild.innerText = `${startWidth}%`;
      }
    }
  });
}

setTimeout(loading, 1000);

//subscribe validator
	function ValidateEmail(email) {
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(email);
	};
	// $("#demo").live("click", function () {
	$("#demo").click(function() {
		if(!ValidateEmail($("#txtEmail").val())) {
			$("#error").addClass("error-msg-display");
		} else {
			$("#error").removeClass("error-msg-display");
			// $( "#success" ).addClass("success-msg-display");
			$("#success").addClass("success-msg-display").delay(3000).queue(function() {
				$(this).removeClass("success-msg-display").dequeue();
			});
		}
	});

// contact form
  function ValidateEmail(email) {
    // alert(1);
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(email);
	};
	// $("#demo").live("click", function () {
	$("#demoContact").click(function() {
		if(!ValidateEmail($("#txtcontact").val())) {
			$("#error").addClass("error-msg-contact-display");
		} else {
			$("#error").removeClass("error-msg-contact-display");
			// $( "#success" ).addClass("success-msg-contact-display");
			$("#success").addClass("success-msg-contact-display").delay(3000).queue(function() {
				$(this).removeClass("success-msg-contact-display").dequeue();
			});
		}

	});
  
// page loader
$(window).on('load', function () {
  $('#loading').hide();
}) 