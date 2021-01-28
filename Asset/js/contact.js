$("#form").submit(function(event) {

var errorMessageb = "";

event.preventDefault();
var fname = $("#fname").val();
var lname = $("#lname").val();
var email = $("#email").val();

function isVaildEmail (email){

    var pattern = /^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i;

    return pattern.test(email);
}
if (fname == "" || lname == "" || email ==""){
    alert("Please enter your information. (i.e. Name, Email)");
} else if (!isVaildEmail(email)){
    alert("Please enter a vaild email")
} else { alert("Got your message!")}


});


// for Navber
$(document).ready(function(){
  
	var menu = $(".menu");
	var hamburger = $(".hamburger");
	var line = $(".line");
	var menuOpen;
	
	function openMenu(){
	  menu.css("left", "0px");
	  line.css("background", "#95A58B");
	  menuOpen = true;
	}
	
	function closeMenu(){
	  menu.css("left", "-120px");
	  line.css("background", "#95A58B");
	  menuOpen = false;
	}
	
	function toggleMenu(){
	  if (menuOpen) {
		closeMenu();
	  } else {
		openMenu();
	  }
	}
   
	hamburger.on({
	  mouseenter: function(){
		openMenu();
	  }
	});
	
	menu.on({
	  mouseleave: function(){
		closeMenu();
	  }
	  
	});
	
	hamburger.on({
	  click: function(){
		toggleMenu();
	  }
	})
	
});