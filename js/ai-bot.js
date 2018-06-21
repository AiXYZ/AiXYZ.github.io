/*!
 * Ai Bot
 * Chat with Ali
 * Licensed under the MIT license
 */

var replies = [
    [
    	["--on click--"],
    	["Hi, Thank you for clicking me.", "What can I do for you?"],
    ],
    [
    	["(hi|hello|hey)(\\s|\\.|\\?|\\!|$)"],
    	["Hello"],
    ],
    [
    	["(who are you)(\\s|\\.|\\?|\\!|$)"],
    	["A Bot, My name is Laila. I am Ali's assistant.", "You can ask me about Ali."],
    ],
    [
    	["(tell me about ali)(\\s|\\.|\\?|\\!|$)"],
    	["His full name is Eng. Ali Akhtar Mohammed. I call him Ali.", "Here are some things you can ask:"],
    ],
    [
    	["(how old are you)(\\s|\\.|\\?|\\!|$)"],
    	["I was launched in 2013, so technically I am pretty young.", "But I love facts, so I will tell you the number.", "I am 5 years, 3 months, 20 days old."],
    ],
    [
    	["(what[^ ]* up)(\\s|\\.|\\?|\\!|$)"],
    	["Nothin much.", "What can i help you wiht?"],
    ],    
    [
    	["--none of these--"],
    	["Oops... Can you try again?"]
    ]
];

var replyNumber = 0;

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
	
	var isTerminalOpen = $('#botWrapper').length;
	if(isTerminalOpen == 1){
		$('#botWrapper')
		.css({
			"top": top + 'px',
			"left": left + 'px'
		});
		return false;
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
	
	typingTyped(replies[0][1]);
	
	$("#terminalClose").click(function(){
		$("#botWrapper").remove();
		replyNumber = 0;
	});
	
	$("#userTypeInput").keyup(function(key){
		if(key.keyCode == 13){
			var userQueryString = $(this).val();
			userQuery(userQueryString);
		}
	});
});

//typing
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
	
	for(i=0; i < replies.length; i++){
		var repliesQueryString = replies[i][0];
		if(userQueryStringLc.match(repliesQueryString)){
			var repliesToUser = replies[i][1];
			replyNumber = 0;
			typingTyped(repliesToUser);
			break;
		}else if("--none of these--" == repliesQueryString){
			var noMatchReplies = [
		    	["--none of these--"],
		    	[userQueryStringLc + " what?"]
		    ];	
			
			replyNumber = 0;
			typingTyped(noMatchReplies[1]);
			writeToQueryLog(userQueryString);
			break;
		}
	}
}

//query log
function writeToQueryLog(userQueryStringUnknown){
	//http://alsayeghco.com/email/log/queryApi.php?query=test2
	//http://alsayeghco.com/email/log/queryLog/queryLogFile.txt
	
	$.ajax({
		url: "http://alsayeghco.com/email/log/queryApi.php?query="+userQueryStringUnknown,
		dataType: "jsonp"
	});
}
