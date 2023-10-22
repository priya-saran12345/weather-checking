/*taking the value of the api key and the api url and other html tags we want*/


var apikey = "406af10116cc452438e7f6c01e84bc46";
var apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var city = document.querySelector(".search input");
var butoon = document.querySelector(".search button");
var weatherimg = document.querySelector(".rain");
var dlvalue ;
var Unit;
var result;
var response;


/*defining the method for the information showing to the user*/
async function weather(city) {
    var response = await fetch(apiurl + city + `&appid=${apikey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";

    }
    else {
        document.querySelector(".error").style.display = "none";

        var result = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°c";
        document.querySelector(".city").innerHTML = result.name;
        document.querySelector(".hum").innerHTML = result.main.humidity + "%";
        document.querySelector(".hum1").innerHTML = result.wind.speed + "km/h";
        Unit = Math.round(result.main.temp);
        if (result.weather[0].main == "Clouds") {
            weatherimg.src = "clouds.png";
            document.querySelector(".we").innerHTML ="cloudy";

        }
        else if (result.weather[0].main == "Clear") {
            weatherimg.src = "clear.png";
            document.querySelector(".we").innerHTML ="clear";
          

        }
        else if (result.weather[0].main == "Mist") {
            weatherimg.src = "mist.png";
            document.querySelector(".we").innerHTML ="mist";


        }
        else if (result.weather[0].main == "Snow") {
            weatherimg.src = "snow.png";
            document.querySelector(".we").innerHTML ="Snow";


        }
        else if (result.weather[0].main == "Drizzle") {
            weatherimg.src = "drizzle.png";
            document.querySelector(".we").innerHTML ="drizzling";


        }
        else if (result.weather[0].main == "Rain") {
            weatherimg.src = "rain.png";
            document.querySelector(".we").innerHTML ="rainy";


        }

    }
}

/* defining the unit change method*/
async function change( Unit) {
    var dlvalue =  await  document.querySelector(".ddl select");
   const value=dlvalue.value;

    
     if (value == "fahreneit") {
        document.querySelector(".temp").innerHTML = Math.round(((Unit*(9 / 5)) + 32) )+ "°F";
    }
    else if (value == "kelvin") {
        document.querySelector(".temp").innerHTML = Math.round((Unit+273.15))+"°K";
    }
    else{
        document.querySelector(".temp").innerHTML = Unit+"°C";
    }
}
butoon.addEventListener("click", () => {
    weather(city.value);

})

document.querySelector(".btn2").addEventListener("click", () => { change( Unit); });


