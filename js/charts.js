$(document).ready();

/* Pie Chart */
var pieData = [
				{
					value: 300,
					color:"#0084b4",
					highlight: "#66FFFF",
					label: "Sourced"
				},
				{
					value: 50,
					color: "#1dcaff",
					highlight: "#66FFFF",
					label: "Applied"
				},
				{
					value: 100,
					color: "#c0deed",
					highlight: "#66FFFF",
					label: "Employee Referral"
				}

			];

	/*		window.onload = function(){
				var myPieChart = new Chart(ctx[0]).Pie(data, {
					responsive: true;
				});
			console.log("this is working");
		} */
				var ctx = document.getElementById("pie").getContext("2d");
				window.myPie = new Chart(ctx).Pie(pieData);
				console.log("this is working");
			




/*Radar Chart*/
var radarChartData = {
		labels: ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
		datasets: [
			
			{
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "#4099FF",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28,48,40,19,96,27,100, 45, 12, 20, 0, 5]
			}
		]
	};

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
			responsive: false
		});
	}
