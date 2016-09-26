$(document).ready(function()
{
	//alert("Ready");
	
	
	var firstImage = $("#gallery img:first-child");
	var lastImage = $("#gallery img:last-child");
	
	$("#gallery img").css("opacity",0);
	
	//No. of max pictures
	$("#all_image_num").text($("#gallery img").length);
	
	
	//Show first pic
	firstImage.addClass("current").css("opacity",1);
	//Set first pic's text
	$("#current_image_title").text(firstImage.attr("alt"));
	//Set current text to 1
	$("#current_image_num").text(1);
	
	/*$("#prev_image").click(function()
	{
		
	});
	*/
	
	
	$("#next_image").click(function()
	{
		
		var currentImage=$("#gallery img.current");
		currentImage.removeClass("current").animate({opacity: 0}, 1000);
		if (!currentImage.is("#gallery img:last-child"))
		{
			currentImage=currentImage.next().addClass("current").animate({opacity:1}, 1000);
		}
		
		else
		{
			currentImage=firstImage.addClass("current").animate({opacity: 1}, 1000);
		}
		
		$("#current_image_title").text(currentImage.attr("alt"));
		$("#current_image_num").text($("#gallery img").index(currentImage)+1);
		
	});
	
	
	
});