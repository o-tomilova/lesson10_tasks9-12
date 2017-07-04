window.onload = function(){


	$("#getHtml").click(function(){
		$.ajax({
			type: "GET",
			url: "new.html",
			dataType: "text",
			success: function(data){
				$("#getHtml").next().append(data);
			}
		});
	}); 

	$("#getJs").click(function(){
		$.ajax({
			type: "GET",
			url: "newscripts.js",
			dataType: "script",
			success: function(data){
				$("getJs").next().append(data);
			}
		});
	});
// ---------------------------------------------------

	$("#seePart").click(function(){
		$("#seePart").load("new.html #part");
	});

// ---------------------------------------------------

$("#btn1").click(function(){
	$.ajax({
		type: "GET",
		url: "add1.html",
		dataType: "text",
		success: function (data) {
			$("#container").empty()
							.append(data);
		}
	});
});

$("#btn2").click(function(){
	$.ajax({
		type: "GET",
		url: "add2.html",
		dataType: "text",
		success: function (data) {
			$("#container").empty()
							.append(data);
		}
	});
});
$("#btn3").click(function(){
	$.ajax({
		type: "GET",
		url: "add3.html",
		dataType: "text",
		success: function (data) {
			$("#container").empty()
							.append(data);
		}
	});
});

//--------------------------------------------------

	$("#alertBtn").click(function(){
		$("#alertBtn").css("border", "2px solid green");
		alert("Alert called");
	});

	$("#transClick1").click(function(){
		$("#alertBtn").click();
	});

	$("#transClick2").click(function(){
		$("#alertBtn").click();
	});
}
