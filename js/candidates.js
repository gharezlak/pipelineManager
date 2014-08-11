$(document).ready();

/*Delete Button*/
$(".delete").click(function(){
	if (confirm("Are you sure you want to delete this canidate?") == true) {
		console.log("Candidate Deleted");
	} else {
		console.log("Candidate Was Not Deleted");
	}
});