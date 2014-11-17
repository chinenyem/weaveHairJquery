$(document).ready(function(){

	$(".hairone").change(function(){

	

		var weaveoneStr = " " + "<div>" + "<ul>" 
		+ "<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[0]  + "' " + " >" + "</li>"
		+ "<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[1]  + "' " + " >" + "</li>" +
		"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[2]  + "' " + " >" + "</li>" +
		"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[3]  + "' " + " >" + "</li>" +
		"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[4]  + "' " + " >" + "</li>" +
		"</ul>" +"</div>";
		var bobcatfroValweave = ".hairone option:select.weaveoneStr".val;
		$(bobcatfroValweave).each(function (){
			
			bobcatfroValweave += $(this).html() + " ";
		});
		$("#haironePic").html(weaveoneStr);
		console.log(weaveoneStr);

	

	

			
	})
		


});





