//JavaScript for Quote Calculator Project

//fade out/fade in next question div
$(document).ready(function(){
  $(".answer").click(function(){
	$("#Questions").find(":visible").fadeOut(1000).next().fadeIn(1000);
	
  });  
});

//previous question button (NOT COMPLETE)
$(document).ready(function(){
  $("#back").click(function(){
	$("#Questions").find(":visible").hide().prev().show();
	
  });  
});

//quote-container becomes invisable 
$(document).ready(function() {
	$("#option8").click(function(){
	$("#quote-container").hide()
	});
});

$(document).ready(function() {
	$("#option8").click(function(){
	$("#final-quote").fadeIn()
	
	});
});

$(document).ready(function() {
	$("#option9").click(function(){
	$("#quote-container").hide()
	});
});

$(document).ready(function() {
	$("#option9").click(function(){
	$("#final-quote").fadeIn()
	
	});
});

$(document).ready(function() {
	$("#option10").click(function(){
	$("#quote-container").hide()
	});
});

$(document).ready(function() {
	$("#option10").click(function(){
	$("#final-quote").fadeIn()
	
	});
});

//implements dropdown menu from bootstrap.js
$(document).ready(function(){
$('.dropdown-toggle').dropdown()
});

$('#runningTotal').text();

$(document).ready(function() {
	$("#final-button").click(function(){
	$("#final-quote").hide()
	});
});

$(document).ready(function() {
	$("#final-button").click(function(){
	$("#tellUsMore").fadeIn()
	});
});

//first question running total.
var total= 0;
jQuery(document).ready(function(){
    $("#yes").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q1").val(event.target.getAttribute("info"));
    });
    $("#no").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q1").val(event.target.getAttribute("info"));
    });
    $("#no2").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q1").val(event.target.getAttribute("info"));
    });
});

 //Question1 running total.
var total= 0;
jQuery(document).ready(function(){
    $("#option1").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q2").val(event.target.getAttribute("info"));
    });
    $("#option2").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q2").val(event.target.getAttribute("info"));
    });
    $("#option3").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q2").val(event.target.getAttribute("info"));
    });
	 $("#option4").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q2").val(event.target.getAttribute("info"));
    });
});


 //Question2 running total.
var total= 0;
jQuery(document).ready(function(){
    $("#option5").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q3").val(event.target.getAttribute("info"));
    });
    $("#option6").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q3").val(event.target.getAttribute("info"));
    });
    $("#option7").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q3").val(event.target.getAttribute("info"));
    });
	 $("#option8").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q3").val(event.target.getAttribute("info"));
    });
});


//Question3 running total.
var total= 0;
jQuery(document).ready(function(){
    $("#option8").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q4").val(event.target.getAttribute("info"));
		$("#finalTotal").text($("#runningTotal").text());
    });
    $("#option9").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q4").val(event.target.getAttribute("info"));
		$("#finalTotal").text($("#runningTotal").text());
    });
    $("#option10").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q4").val(event.target.getAttribute("info"));
		$("#finalTotal").text($("#runningTotal").text());
    });
	 $("#option11").click(function(event)
    {
        total += 1*(event.target.getAttribute("price"));
        $("#runningTotal").html(total);
		$("#input-q4").val(event.target.getAttribute("info"));
		$("#finalTotal").text($("#runningTotal").text());
    });
});


//back button
jQuery(document).ready(function() {
	$("#back-button").click(function(event)
	{
		total -= 1*(event.target.getAttribute("price"));
		$("#runningTotal").html(total);
	});
});	

// start-again button
jQuery(document).ready(function(){
	$("#start-again").click(function(event) {
	location.reload();
	});
	});
  
jQuery(document).ready(function(){
	$("#back-button1").click(function(event) {
	location.reload();
	});
jQuery(document).ready(function(){
	$("#back-button2").click(function(event) {
	location.reload();
	});
});	
	
//add answers to questions to email 
jQuery(document).ready(function() {
	$("#yes").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#no").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#no2").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option1").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option2").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option4").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option5").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option6").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option7").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option8").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option9").val(event.target.getAttribute("info"));
	});
	
jQuery(document).ready(function() {
	$("#option10").val(event.target.getAttribute("info"));
	});



});