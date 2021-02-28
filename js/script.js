var logo = document.getElementById("logo-side");

logo.onclick = function(){
	
	alert("logo clicked!!");
	
};

var mySlide = document.getElementById("slide");

var imageArray = ["images/slide1.jpg","images/slide2.jpg","images/slide3.jpg"];
var imageIndex = 0;

function slider(){
	myslide.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.length){
		imageIndex = 0;
	}
	
	
};

setInterval(slider,3000);

