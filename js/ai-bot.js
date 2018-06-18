/*!
 * Ai Bot
 * Chat with Ali
 * Licensed under the MIT license
 */

var replies = [
    ["Hi, Thank you for clicking me.", "What can I do for you?"],
    ["Hello"],
    ["A Bot, My name is Laila. I am Ali's assistant.", "You can ask me about Ali."],
    ["His full name is Eng. Ali Akhtar Mohammed. I call him Ali.", "Here are some things you can ask:"],
    ["I was launched in 2013, so technically I am pretty young.", "But I love facts, so I will tell you the number.", "I am 5 years, 3 months, 20 days old."],
    ["Oops... Can you try again?"]
];
//console.log(replies[0].length);

var clickNuber = 0;
$(document).click(function(e){
	//prevent opening of terminal if user click inside terminal
	if($(event.target).closest('#botTerminal').length){
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
		$('#botWrapper').remove();		
	}	
	
	$('<div id="botWrapper">')
	.css({
		"top": top + 'px',
		"left": left + 'px'
	})
	.append($(
			'<div id="botTerminal">'+
				'<div class="terminalTitleBar">~ bot <span id="terminalClose"><i class="fa fa-times-circle"></i></span></div>'+			
				'<div class="terminalBody">'+
					'<div id="scrollableContent">'+
						'<span id="chatHisory"></span>'+
						'<span class="promptAt">bot@chat</span>'+
						'<span class="promptColon">:</span>'+
						'<span class="promptNegation">~</span>'+
						'<span class="promptDollor">$</span>'+
						'<span id="botType"></span>'+
						'<span id="userType" class="hideContent"><input id="userTypeInput" type="text"></span>'+					
					'</div>'+
					
					'<div class="userSuggestions">'+
						'<span class="suggestion1st">Asking these questions</span>'+
						'<span class="suggestion2nd">will take the conversation</span>'+
						'<span class="suggestion3rd">with another individual</span>'+					
					'</div>'+
				'</div>'+
			'</div>'
	))
	.appendTo(document.body);
	
	typingTyped(replies[0]);
	
	$("#terminalClose").click(function(){
		$("#botWrapper").remove();
	});
	
	$("#userTypeInput").keyup(function(key){
		if(key.keyCode == 13){
			var userQueryString = $(this).val();
			userQuery(userQueryString);
		}
	});	
});

//typing
var replyNumber = 0;
function typingTyped(textStrings){
	var typed = new Typed('#botType', {
		strings: [textStrings[replyNumber]],
		typeSpeed: 40,
		contentType: 'html',
		loop: false,
		onComplete: function(){
        	$(".terminalBody > #scrollableContent > .typed-cursor").remove();
        	$("#botType").empty();
        	$("#chatHisory").append(
				'<span class="promptAt">bot@chat</span>'+
				'<span class="promptColon">:</span>'+
				'<span class="promptNegation">~</span>'+
				'<span class="promptDollor">$</span>'+
				'<span class="botTyped">'+textStrings[replyNumber]+'</span></br>'+
				'<div class="botReply">'+textStrings[replyNumber]+'</div>'      	
        	);
        	
        	var scrollableContentHeight = $("#scrollableContent")[0].scrollHeight;
        	scrollableContentHeight = scrollableContentHeight + 10;
        	$("#scrollableContent").scrollTop(scrollableContentHeight);
        	
        	replyNumber++
        	if(textStrings.length > replyNumber){
        		typingTyped(textStrings);
        	}
        	
    		if(textStrings.length == replyNumber){
    			$("#userType").removeClass("hideContent");
    			$("#userTypeInput").focus();
    		}
		}
	});		
}

//user query
function userQuery(userQueryString){
	$("#chatHisory").append(
		'<span class="promptAt">bot@chat</span>'+
		'<span class="promptColon">:</span>'+
		'<span class="promptNegation">~</span>'+
		'<span class="promptDollor">$</span>'+
		'<span class="userTyped">'+userQueryString+'</span></br>'+
		'<div class="userReply">'+userQueryString+'</div>'      	
	);

	var scrollableContentHeight = $("#scrollableContent")[0].scrollHeight;
	scrollableContentHeight = scrollableContentHeight + 10;
	$("#scrollableContent").scrollTop(scrollableContentHeight);
	
	$("#userType").addClass("hideContent");
	$("#userTypeInput").val('');
	
	var userQueryStringLc = userQueryString.toLowerCase();
	switch(userQueryStringLc){
		case "hi":
			var repliesToUser = replies[1];
			break;
		case "hello":
			var repliesToUser = replies[1];
			break;
		case "who are you?":
			var repliesToUser = replies[2];
			break;
		case "tell me about ali.":
			var repliesToUser = replies[3];
			break;
		case "how old are you?":
			var repliesToUser = replies[4];
			break;			
		default:
			var repliesToUser = replies[5];
	}
	
	replyNumber = 0;
	typingTyped(repliesToUser);
}
