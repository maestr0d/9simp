//wait for the page to load
window.addEventListener('load', function() {
	//get all profile image containers
	var profileImages = document.getElementsByClassName("image-container");
	//run through every single container in the array
	for (var i = 0; i < profileImages.length; i++) {
		//get the a element inside the image container
		var c = profileImages[i].childNodes[0];
		//get image url from the img child
		var imageUrl = c.childNodes[0].src;
		//modify the url to point to a larger image
		var imageUrl = imageUrl.replace("_100_", "_800_");
		//set the profile image link to point to the new url
		c.href = imageUrl;
	}
});