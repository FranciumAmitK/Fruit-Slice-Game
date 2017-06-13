$(document).ready(function(){
	var action;
	var span;
    var score;
	var counter = 5;
	var fruitsarray = ['apple', 'banana', 'cherries', 'grapes','mango', 'orange', 'watermelon'];

	 //timer function 
	function startTimer(){
    setInterval(function() {
    counter--;
    if (counter >= 0) {
     span=$("#count");               //	 span = document.getElementById("count");

	 span = document.getElementById("count");
     span.innerHTML = counter;
    }
    if (counter === 0) {
		$("#fruits").hide();
       $("#gameover").show();
	   $("#gameover").html('<p style="font-family: Snap ITC">Game Over!</p><p style="font-family: Snap ITC"><br>Your score is: '+ score +' <br><br>HIT RESTART TO PLAY AGAIN</p>');
       clearInterval(counter);
    }
  }, 1000);
}	
	
	$("#restart").click(function(){                     //when we click restart button
		 location.reload();	 	     
	});
	
	$("#head").click(function(){                     //when we click restart button
		 location.reload();	 	     
	});
	
	
	$("#start").click(function(){
	     $("#start").prop('disabled','disabled');    //this is to disble start button		
         startTimer();
		 score=0;
		 $("#gameover").hide();
		 $("#start").fadeOut();
			 		 
		 startAction();	 		
	});
	
	
	function startAction(){
	 	$("#fruits").show();
		getfruit();		
    setTimeout(startAction, 550);
	}
	
	
	$("#fruits").mouseover(function(){		
		score++;
 	    $("#scorevalue").html(score);
		$("#fruits").hide("explode");		
		});
	
    function generateRandom() {
    var num = Math.floor(Math.random() * 470);
    return num;
    }

    function getfruit() {
 	$("#fruits").attr('src' , 'imgs/' +	fruitsarray[Math.round(5*Math.random())] +'.png');
	var left = generateRandom();
    var top = generateRandom();		
    $(".fruit1").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
	//$("#fruits").slideDown(1000);
    }
	
});

 	