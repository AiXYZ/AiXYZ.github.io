(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

// Video slow
document.getElementById("videoBackground").playbackRate = .3;

var videoLoad = document.getElementById("videoBackground");
videoLoad.oncanplay = function() {
    $("#videoLoader").addClass("hideLoaderSpin");
};

// Facebook post
$.getJSON('https://graph.facebook.com/v3.1/me?fields=albums%7Bphotos.limit(9)%7Bimages%2Cname%7D%7D&access_token=EAAGu6eQI99ABAPHn3ZCqCiZAPu4GcZAq81ZCR9c8Aya0zSCI2KXxhkNYw0RVgpRbL8YdWE2D3QeTw8OCELuISQnDdEZBN1emfDJlECWpkIIICWOLtOXlzsHrf3QdEon4tcQG07Ht7kfs6YXXgFXZBxRIdVunCV9wRBAVzuksh6HQZDZD', function (dataResponse) {
	var fbPhoto = dataResponse['albums']['data'][0]['photos']['data'];
	var nextPhoto = '';
	$('#fbPhotos').empty();
	for(fbi=0;fbi<fbPhoto.length;fbi++){
		$('#fbPhotos').append(
          '<div class="card">'+
            '<a class="portfolio-item" href="#">'+
              '<span class="caption">'+
                '<span class="caption-content">'+
                  '<p class="mb-0">'+fbPhoto[fbi]['name']+'</p>'+
                '</span>'+
              '</span>'+
              '<img class="img-fluid" src="'+fbPhoto[fbi]['images'][0]['source']+'" alt="">'+
            '</a>'+
          '</div>'			
		);
	}
	
	nextPhoto = dataResponse['albums']['data'][0]['photos']['paging']['next'];
	$('#fbPhotosNext').click(function(){
		$.getJSON(nextPhoto, function (dataResponseNext) {
			var fbPhotoNext = dataResponseNext['data'];
			for(fbiNext=0;fbiNext<fbPhotoNext.length;fbiNext++){
				$('#fbPhotos').append(
		          '<div class="card">'+
		            '<a class="portfolio-item" href="#">'+
		              '<span class="caption">'+
		                '<span class="caption-content">'+
		                  '<p class="mb-0">'+fbPhotoNext[fbiNext]['name']+'</p>'+
		                '</span>'+
		              '</span>'+
		              '<img class="img-fluid" src="'+fbPhotoNext[fbiNext]['images'][0]['source']+'" alt="">'+
		            '</a>'+
		          '</div>'					
				);
			}		
			
			nextPhoto = dataResponseNext['paging']['next'];
		});	
	});
});
