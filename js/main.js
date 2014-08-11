

$(document).ready();

$("#newCandidate").click(function(){
	$("#lightBox").lightbox_me({
		centered: true, 
		onLoad: function() { 
            $('#sign_up').find('input:first').focus()
      	}
	});
});

/*Delete Button*/
$(".delete").click(function(){
	if (confirm("Are you sure you want to delete this canidate?") == true) {
		console.log("Candidate Deleted");
	} else {

	}
});

/*Side Menu*/
$(".sidenavbg").hover(function(){
	$(this).addClass("active");
}, function(){
	$(this).removeClass("active");
});

