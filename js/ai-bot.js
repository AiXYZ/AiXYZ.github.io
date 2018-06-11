/*!
 * Ai Bot
 * Chat with Ali
 * Licensed under the MIT license
 */

var clickNuber = 0;
$(document).click(function(e){
	clickNuber++;
	
	//top
	var top = e.pageY;
	var screenHeight = screen.height;
	screenHeight = screenHeight - 330;
	if(top < 180){
		top = 180;
	}else if(top > screenHeight){
		top = screenHeight;
	}
	
	//left
	var left = e.pageX;
	var screenWidth = screen.width;
	screenWidth = screenWidth - 330;
	if(left < 330){
		left = 330;
	}else if(left > screenWidth){
		left = screenWidth;
	}
	
	if(clickNuber > 1){
		$('.bot-wrapper').remove();		
	}	
	
	$('<div class="bot-wrapper">')
	.css({
		"top": top + 'px',
		"left": left + 'px'
	})
	.append($(
			'<div class="botChat lead">'+
				clickNuber+' ClickThe modal plugin toggles your hidden content'+ 
				'demand, via data attributes or JavaScript It also adds modal-open to the'+
				'to override default scrolling behavior and generates <br/>'+
				'<span class="bot"></span>'+
			'</div>'
	))
	.appendTo(document.body);
	
	var typed = new Typed('.bot', {
		strings: [
			"&gt; Hi, <br/>" +
			"&gt; My name is Ai. <br/>" +
			"&gt; I'm Ali's Bot. <br/>" +
			"&gt; How can i help you? <br/>" +
			"&gt;&nbsp;"
		],
		typeSpeed: 40
	});

});


