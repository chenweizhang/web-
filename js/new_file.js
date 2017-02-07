//var getIp = returnCitySN["cip"];

function GetDateStr(AddDayCount){
	var dd = new Date();
	dd.setDate(dd.getDate()+AddDayCount);
	var y = dd.getFullYear().toString();
	var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMoth()+1);
	m.toString();
	var d = (dd.getDate())<10?"0"+(dd.getDate()).toString():(dd.getDate()).toString();
	return "day_"+y+m+d;
}
function weather(){
	
	
	$.ajax({
		type:'GET',
		url:"http://v.juhe.cn/weather/ip?",
		dataType: "jsonp",
		data:{
		"key":"9be391794b6ccb6296ddb36c154332f7",
		"ip":returnCitySN["cip"],
		"dtype":"json"
		},
		
		error:function(){
			alert("超时请重试");
			
		},
		success:function(json){ 
			var html = "";
			var city = "<p>" + json.result.today.city + "</p>"; //城市
			var week1 = "<p>" + json.result.today.week + "</p>"; //星期
			var date_y = "<p>" + json.result.today.date_y + "</p>";//日期
			
			var weather = "<p>" + json.result.today.weather + "</p>";//天气
			var temperature = "<p>" + json.result.today.temperature + "</p>";//温度
			var humidity = "<span>" + json.result.sk.humidity + "</span>"; //湿度
			var dressing_index = "<span>" + json.result.today.dressing_index + "</span>"; //穿衣指数
			var wash_index = "<span>" + json.result.today.wash_index + "</span>"; //洗衣指数
			var travel_index = "<span>" + json.result.today.travel_index + "</span>"; //旅游指数
			var exercise_index = "<span>" + json.result.today.exercise_index + "</span>";//锻炼指数
			var uv_index = "<span>" + json.result.today.uv_index + "</span>"; //紫外线强度
			//var future_week = json.result.future[GetDateStr(1)].week;
			
			
			//var future_weather = "<p>"+json.result.future.weather + "</p>";
			//var future_wind = "<p>"+json.result.future.wind + "</p";
			
			$("h1").after(city);
			$("h1").after(week1);
			$("h1").after(date_y);
			$("#weatherToday").after(weather);
			$("#weatherToday").after(temperature);
			$("#w1").append(humidity);
			$("#w2").append(dressing_index);
			$("#w3").append(wash_index);
			$("#w4").append(travel_index);
			$("#w5").append(exercise_index);
			$("#w6").append(uv_index);
		
			/*$("#w7").html(json.result.future[GetDateStr(1)].week);
			$("#w8").html(json.result.future[GetDateStr(1)].wind);
			$("#w9").html(json.result.future[GetDateStr(1)].weather);*/
			for(var i = 1;i<=6;i++)
			{
				html += "<div class = 'col-xs-4 col-md-2 text-center'>"+
				"<h5>" +  json.result.future[GetDateStr(i)].week + "</h5>"+
				"<p>" + json.result.future[GetDateStr(i)].wind + "</p>" +
				"<p>" + json.result.future[GetDateStr(i)].weather + "</p>"+"</div>";
				
			}
			//$("").append(future_weather);
			//$("#").append(future_wind);
			$("#w7").html(html);
		}
	
	});
}


$(document).ready(function(){
	weather();
	
	//GetDateStr(2);
});
