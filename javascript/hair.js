$(document).ready(function(){

	// $(".hairone").change(function(){

	// 		console.log((kurlyKlips.kurlyFro.bobCatFro).length) 

	// 		console.log((kurlyKlips.kurlyFro.shoulderFro).length) 

	// 		var a = $(."hairone selected[name=haironePic, value=bobcatfroVal]") ;
	// 		var b = $(."hairone selected[name=haironePic value=shoulderchicfroVal]") ;

	// 	if (a == 5 ){

		
	// 			var weaveoneStr = " " + "<div>" + "<ul>" 
	// 		+ "<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[0]  + "' " + " >" + "</li>"
	// 		+ "<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[1]  + "' " + " >" + "</li>" +
	// 		"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[2]  + "' " + " >" + "</li>" +
	// 		"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[3]  + "' " + " >" + "</li>" +
	// 		"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[4]  + "' " + " >" + "</li>" +
	// 		"</ul>" +"</div>";
	// 		var bobcatfroValweave = (".hairone select[value=bobcatfroVal]").val;
	// 		$(bobcatfroValweave).each(function (){
				
	// 			bobcatfroValweave += $(this).html() + " ";
	// 		});
	// 		$("#haironePic").html(weaveoneStr);
	// 		console.log(weaveoneStr);
	// 	}

	// 	else (b == 7) {
	

		

	// 	var weavetwoStr = " " + "<div>" + "<ul>" 
	// 	+ "<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[0]  + "' " + " >" + "</li>"
	// 	+ "<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[1]  + "' " + " >" + "</li>" +
	// 	"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[2]  + "' " + " >" + "</li>" +
	// 	"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[3]  + "' " + " >" + "</li>" +
	// 	"<li>" + "<img src=" + " '"  +  kurlyKlips.kurlyFro.bobCatFro[4]  + "' " + " >" + "</li>" +
	// 	"</ul>" +"</div>";
	// 	var shoulderchifroValweave = (".hairone select[value=shoulderchispiVal").val;
	// 	$(shoulderchifroValweave).each(function (){
			
	// 		shoulderchifroValweave += $(this).html() + " ";
	// 	});
	// 	$("#hairtwoPic").html(weavetwoStr);
	// 	console.log(weavetwoStr);
		
	// })

	// }


				 $("select.hairone").change(function(){
				 	event.preventDefault();
				            $( "select option:selected").each(function(){
				                if($(this).attr("value")=="bobcatfroVal"){
				                    $("#hairweavetwoid").hide();
				                    $("#hairweavethreeid").hide();
				                    $("#hairweaveoneid").show();
				                }
				                if($(this).attr("value")=="shoulderchicfroVal"){
				                    $("#hairweaveoneid").hide();
				                    $("#hairweavethreeid").hide();
				                    $("#hairweavetwoid").show();
				                }
				                if($(this).attr("value")=="mermaidfroVal"){
				                    $("#hairweaveoneid").hide();
				                    $("#hairweavetwoid").hide();
				                    $("#hairweavethreeid").show();
				                }
				                if($(this).attr("value")=="empty"){
				                    $("#hairweaveoneid").hide();
				                    $("#hairweavetwoid").hide();
				                    $("#hairweavethreeid").hide();
				                }
				            });
				        });

				


				 $("select.hairtwo").change(function(){
				 	event.preventDefault();
								    $( "select option:selected").each(function(){
								        if($(this).attr("value")=="bobcatspiVal"){
								            $("#hairweavefourid").show();
								            $("#hairweavefiveid").hide();
								            $("#hairweavesixid").hide();
								      }
								     	if($(this).attr("value")=="shoulderchispiVal"){
								            $("#hairweavefourid").hide();
								            $("#hairweavefiveid").show();
								            $("#hairweavesixid").hide();
								        }
								     	if($(this).attr("value")=="mermaidspriVal"){
								            $("#hairweavefourid").hide();
								            $("#hairweavefiveid").hide();
								            $("#hairweavesixid").show();
								        }
								       if($(this).attr("value")=="empty"){
						                    $("#hairweavefourid").hide();
								            $("#hairweavefiveid").hide();
								            $("#hairweavesixid").hide();
				                }
								     	
								    });
						});

			

				$("select.hairthree").change(function(){
					event.preventDefault();
								    $( "select option:selected").each(function(){
								        if($(this).attr("value")=="bouncecurl"){
								            $("#hairweavesevenid").show();
								         
								      }
								       if($(this).attr("value")=="empty"){
						                    $("#hairweavesevenid").hide();
								            
				                }
								     	
								    });
						});

				

				$("select.hairfour").change(function(){
					event.preventDefault();
								    $( "select option:selected").each(function(){
								        if($(this).attr("value")=="luxiouscurl"){
								            $("#hairweaveeightid").show();
								            $("#hairweavenineid").hide();
								      }
								     	if($(this).attr("value")=="afrocurl"){
								            $("#hairweaveeightid").hide();
								            $("#hairweavenineid").show();
								        }
								     	
								       if($(this).attr("value")=="empty"){
						                    $("#hairweaveeightid").hide();
								            $("#hairweavenineid").hide();;
				                }
								     	
								    });
						});

				

});





