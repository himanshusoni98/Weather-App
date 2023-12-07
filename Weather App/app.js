const  API_key = '9290490145bfe02d31e8bce85f49eef1';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

let searchText = document.querySelector(".search input");
let btn = document.querySelector("button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
	const response = await fetch(url +city+ `&appid=${API_key}` );
	var data = await response.json();

	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

	if(data.weather[0].main =="Clouds"){
		weatherIcon.src = "clouds.png";
	}
	else if(data.weather[0].main == "Clear"){
		weatherIcon.src = "Weather App/clear.png";
	}
	else if(data.weather[0].main == "Rain"){
		weatherIcon.src = "Weather App/rain.png";
	}
	else if(data.weather[0].main == "Drizzle"){
		weatherIcon.src = "Weather App/drizzle.png";
	}
	else if(data.weather[0].main == "Mist"){
		weatherIcon.src = "Weather App/mist.png";
	}
	else if(data.weather[0].main == "Snow"){
		searchIcon.src = "Weather App/snow.png";
	}
	
}
btn.addEventListener("click",()=>{
    checkWeather(searchText.value);
})
