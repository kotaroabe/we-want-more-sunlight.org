/* for fading effect */

window.onload = function() {
	var fadeStart=50 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=150 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('#fading')
	;

	$(window).bind('scroll', function(){
    	var offset = $(document).scrollTop()
        	,opacity=0
    	;
    	if( offset<=fadeStart ){
        	opacity=1;
    	}else if( offset<=fadeUntil ){
        	opacity=1-offset/fadeUntil;
    	}
    	// fading.css('opacity',opacity).html(opacity);
    	fading.css('opacity',opacity);
	});
}


/* for sticky header */

$(window).scroll(function() {
    if ($(this).scrollTop() > 500){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});




/* for text replacement */
$('#headerR').hover(function(){
    $(this).text("I'm replaced!");
}, function() {
    $(this).text("Replace me please");
});