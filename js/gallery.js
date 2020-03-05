//Load gallery after page has been loaded (background and profile image)
function pageLoaded() {
	for (var i = 1; i < 19; i++) {
		gallery = document.getElementById('galleryBelow');
		gallery.insertAdjacentHTML('afterend',
		    '<div class="gallery">'+
				'<a href="img/gallery/ref/'+i+'.jpg" target="_blank">'+
					'<img src="img/gallery/ref/'+i+'.jpg">'+
					'<div class="view">View</div>'+
				'</a>'+
			'</div>'
		);
	}
}