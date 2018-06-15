/*!
 * Ai Bot
 * Chat with Ali
 * Licensed under the MIT license
 */

var replies = [
    ["Hi, Thank you for clicking me.", "What can I do for you?"],
    ["second"],
    ["third"],
    ["forth"]
];
var reply = replies[0];

var clickNuber = 0;
$(document).click(function(e){
	//prevent opening of terminal if user click inside terminal
	if($(event.target).closest('.botTerminal').length){
		return false;
	}
	
	//prevent opening of terminal if user click on facebook icon
	if($(event.target).closest('.facebook').length){
		window.open("https://www.facebook.com/EngAliAkhtar","_self")
		return false;
	}
	
	//prevent opening of terminal if user click on twitter icon
	if($(event.target).closest('.twitter').length){
		window.open("https://twitter.com/EngAliAkhtar","_self")
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
				'<div class="terminalTitleBar">~ bot <span class="terminalClose"><i class="fa fa-times-circle"></i></span></div>'+			
				'<div class="terminalBody">'+
					'<span class="promptAt">bot@chat</span>'+
					'<span class="promptColon">:</span>'+
					'<span class="promptNegation">~</span>'+
					'<span class="promptDollor">$</span>'+
					'<span class="botType"></span></br>'+
					'<div class="botReply hideContent">'+replies[0][0]+'</div>'+
					
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
	
	var typed = new Typed('.botType', {
		strings: [replies[0][0]],
		typeSpeed: 40,
		contentType: 'html',
		loop: false,
		onComplete: function(){
        	$(".terminalBody > .typed-cursor").hide();
        	$(".botReply").removeClass('hideContent');
		}		
	});
	
	$('.terminalClose').click(function(){
		$('.bot-wrapper').remove();
	});
});


