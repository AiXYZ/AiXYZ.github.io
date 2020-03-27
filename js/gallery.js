//Load gallery after page has been loaded (background and profile image)
function pageLoaded() {

	var imageArray = ([
		["1_thumbnail.jpg", "1.jpg"],
		["2_thumbnail.jpg", "2.jpg"],
		["3_thumbnail.jpg", "3.jpg"],
		["4_thumbnail.jpg", "4.jpg"],
		["5_thumbnail.jpg", "5.jpg"],
		["6_thumbnail.jpg", "6.jpg"],
		["7_thumbnail.jpg", "7.jpg"],
		["8_thumbnail.jpg", "8.jpg"],
		["9_thumbnail.jpg", "9.jpg"],
		["10_thumbnail.jpg", "10.jpg"]
	]);

    for (var i = 0; i < imageArray.length; i++) {
        var thumbnail = imageArray[i][0];
        var image = imageArray[i][1];

		var galleryContainer = document.getElementById("galleryContainer");

		// <a> Tag
		var imageLink = document.createElement("a");
		imageLink.className = "image-link";
		imageLink.href = "img/gallery/"+image;
		imageLink.target = "_blank";

		// <img> Tag
		var imageSrc = document.createElement("img");
		imageSrc.className = "image-src";
		imageSrc.src = "img/gallery/thumbnail/"+thumbnail;

		// <p> Tag
		var imageView = document.createElement("p");
		imageView.className = "image-view";
		imageView.innerHTML  = "View / Download";

		imageLink.appendChild(imageSrc);
		imageLink.appendChild(imageView);

		galleryContainer.appendChild(imageLink);
    }

}