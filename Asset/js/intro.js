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
  

//for video

function toggle(){
	let trailer = document.querySelector(".trailer")
	let video= document.querySelector(".video")
	trailer.classList.toggle("active");
	video.pause();
	video.currentTime = 0;
  }


//for slider

var counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
}, 3000);

