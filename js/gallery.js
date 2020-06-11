//Load gallery after page has been loaded (background and profile image)
function pageLoaded() {

	var imageArray = ([
	    ["38_thumb.JPG", "38.JPG"],
	    ["37_thumb.JPG", "37.JPG"],
	    ["36_thumb.jpg", "36.jpg"],
	    ["35_thumb.JPG", "35.JPG"],
	    ["34_thumb.JPG", "34.JPG"],
	    ["33_thumb.JPG", "33.JPG"],
	    ["32_thumb.JPG", "32.JPG"],
	    ["31_thumb.JPG", "31.JPG"],
	    ["30_thumb.JPG", "30.JPG"],
	    ["29_thumb.JPG", "29.JPG"],
	    ["28_thumb.jpg", "28.JPG"],
	    ["27_thumb.jpg", "27.jpg"],
	    ["26_thumb.jpg", "26.jpg"],
	    ["25_thumb.jpg", "25.jpg"],
	    ["24_thumb.jpg", "24.jpg"],
	    ["23_thumb.jpg", "23.jpg"],
	    ["22_thumb.jpg", "22.jpg"],
	    ["21_thumb.JPG", "21.JPG"],
	    ["20_thumb.jpg", "20.jpg"],
	    ["19_thumb.jpg", "19.jpg"],
	    ["18_thumb.JPG", "18.JPG"],
	    ["17_thumb.JPG", "17.JPG"],
	    ["16_thumb.JPG", "16.JPG"],
	    ["15_thumb.JPG", "15.JPG"],
	    ["14_thumb.jpg", "14.jpg"],
	    ["13_thumb.jpg", "13.jpg"],
	    ["12_thumb.JPG", "12.JPG"],
	    ["11_thumb.JPG", "11.JPG"],
	    ["10_thumb.jpg", "10.JPG"],
	    ["9_thumb.jpg", "9.jpg"],
	    ["8_thumb.jpg", "8.jpg"],
	    ["7_thumb.jpg", "7.jpg"],
	    ["6_thumb.JPG", "6.JPG"],
	    ["5_thumb.jpg", "5.jpg"],
	    ["4_thumb.jpg", "4.jpg"],
	    ["3_thumb.jpg", "3.jpg"],
	    ["2_thumb.jpg", "2.jpg"],
	    ["1_thumb.jpg", "1.jpg"]
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