const API_KEY='5fb1f986630da0edd324c7eed040debc';


function geoOk(location){
    const lat=location.coords.latitude;
    const lon=location.coords.longitude;
    const URL=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(URL).then((response)=>response.json()).then((data) =>
        {
            console.log(data.name, data.weather[0].main);
            const weather=document.querySelector("#weather h4");
            const city=document.querySelector("#weather div");
            city.innerHTML=data.name;
            weather.innerHTML=`${data.weather[0].main} ${data.main.temp}`;
            }
        );


}

function geoError(){
    alert("Can't find you...");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
