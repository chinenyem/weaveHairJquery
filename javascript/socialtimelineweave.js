$(document).ready(function(){


			$('#socialTimeline').dpSocialTimeline({
							feeds: 
							{
								
								'facebook_page': {data: '139024556157390, 103009129782691, 679260672099991, 113762724726'},
								'youtube_search': {data: 'kurlyklips, naptural85, onyc'},
								'twitter_hash': {data: '@kurlyklips'},
								'pinterest': {data: 'kurlyKlips, indique, urbanbushbabes'},
								'tumblr': {data: 'urbanbushbabes, indiquehair, kurlyklips, naturalhair,  '}
								
							},
							layoutMode: 'columns',
							showLayout: true,
							itemWidth: 200,
							total: 50
						});


		$("#pressButton").click(function(){
				
				$("#socialTimeline").show();
		
	});

	$("#closeButton").click(function(){
		$("#socialTimeline").hide();
	});




});