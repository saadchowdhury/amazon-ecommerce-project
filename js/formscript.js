document.getElementById("formContact").onsubmit = function(){
		
		if(document.getElementById("email").value==""){
			document.getElementById("errormessage").innerHTML = "please enter your email address";
			
			return false;
		}
		else{
			document.getElementById("errormessage").innerHTML = "";
			alert("thank you!!");
			return true;
			
		}
		
	};

var myfirstname = document.getElementById("firstname");

var mylastname = document.getElementById("lastname");

var myemail = document.getElementById("email");

var mymessage = document.getElementById("message");

myfirstname.onfocus = function(){
	if(myfirstname.value == "your firstname"){
		myfirstname.value = "";
	}
};


myfirstname.onblur = function(){
	if(myfirstname.value == ""){
		myfirstname.value = "your firstname";
	}
};


mylastname.onfocus = function(){
	if(mylastname.value == "your lastname"){
		mylastname.value = "";
	}
};


mylastname.onblur = function(){
	if(mylastname.value == ""){
		mylastname.value = "your lastname";
	}
};

myemail.onfocus = function(){
	if(myemail.value == "your email"){
		myemail.value = "";
	}
};


myemail.onblur = function(){
	if(myemail.value == ""){
		myemail.value = "your email";
	}
};





