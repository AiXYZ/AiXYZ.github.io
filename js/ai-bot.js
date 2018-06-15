/*!
 * Ai Bot
 * Chat with Ali
 * Licensed under the MIT license
 */

var clickNuber = 0;
$(document).click(function(e){
	//prevent opening of terminal if user click inside it
	if($(event.target).closest('.botTerminal').length) {
		return false;
	}
	
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
			'<div class="botTerminal">'+
				'<div class="terminalTitleBar">~ bot</div>'+			
				'<div class="terminalBody">'+
					'<span class="promptAt">bot@chat</span>'+
					'<span class="promptColon">:</span>'+
					'<span class="promptNegation">~</span>'+
					'<span class="promptDollor">$</span>'+
					'<span class="botType">bot typing</span>'+
					'<div class="botReply">bot reply</div>'+
					
					'<span class="promptAt">bot@chat</span>'+
					'<span class="promptColon">:</span>'+
					'<span class="promptNegation">~</span>'+
					'<span class="promptDollor">$</span>'+
					'<span class="userType"><input type="text" placeholder="user typing Asking these questions Asking these questions"></span>'+
					'<div class="userReply">user reply</div>'+
					
					'<div class="userSuggestions">'+
						'<span class="suggestion1st">Asking these questions</span>'+
						'<span class="suggestion2nd">will take the conversation</span>'+
						'<span class="suggestion3rd">with another individual</span>'+					
					'</div>'+
				'</div>'+
			'</div>'
	))
	.appendTo(document.body);
	/*
	var typed = new Typed('.bot', {
		strings: [
			"&gt; Hi, <br/>" +
			"&gt; My name is Ai. <br/>" +
			"&gt; I'm Ali's Bot. <br/>" +
			"&gt; How can i help you? <br/>" +
			"&gt;&nbsp;"
		],
		typeSpeed: 40,
		contentType: 'html',
	});
	*/
});


