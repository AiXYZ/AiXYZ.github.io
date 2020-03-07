//Load gallery after page has been loaded (background and profile image)
function pageLoaded() {
	for (var i = 1; i < 19; i++) {
		var galleryContainer = document.getElementById("galleryContainer");

		// <a> Tag
		var imageLink = document.createElement("a");
		imageLink.className = "image-link";
		imageLink.href = "img/gallery/ref/"+i+".jpg";
		imageLink.target = "_blank";

		// <img> Tag
		var imageSrc = document.createElement("img");
		imageSrc.className = "image-src";
		imageSrc.src = "img/gallery/ref/"+i+".jpg";

		// <p> Tag
		var imageView = document.createElement("p");
		imageView.className = "image-view";
		imageView.innerHTML  = "View / Download";

		imageLink.appendChild(imageSrc);
		imageLink.appendChild(imageView);

		galleryContainer.appendChild(imageLink);
	}
}