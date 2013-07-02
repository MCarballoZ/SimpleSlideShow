/*var myVar=setInterval(function(){FlechaTrans(1)},5000);*/

/*var intervalID = setInterval(function(){alert("Interval reached");}, 5000);*/

$(document).ready(function(){
	$(".slideshow").click(function(){
  		/*alert("hola");*/
  		$('#img1').animate({
  			left: '+=100%',
  			},1000,function() {
  		}).hide(1000);
  		$('#img2').animate({
    		left: '+=0%',
  			},1000, function() {
  		});
  		$('#img3').animate({
    		left: '+=0%',
  			},1000, function() {
  		});
  		$('#img4').animate({
    		left: '+=0%',
  			},1000, function() {
  		});
  	});
});