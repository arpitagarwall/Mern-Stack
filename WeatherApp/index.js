const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const weatherContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");

const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

const grantAccessButton = document.querySelector('.grantAccessButton');
const searchInput = document.querySelector("[data-searchInput]");

let oldTab = userTab;
const apiKey = '';
oldTab.classList.add("current-Tab");
getFromSessionStorage();


function switchTab(newTab){

    if(newTab != oldTab){
        oldTab.classList.remove("current-Tab");
        oldTab = newTab;
        oldTab.classList.add("current-Tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");

        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
            
        }

    }
};


userTab.addEventListener("click", ()=> {
    switchTab(userTab);
});

searchTab.addEventListener("click", ()=> {
    switchTab(searchTab);
});

function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else
    {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
};

async function fetchUserWeatherInfo(coordinates){

    const {lat,long} = coordinates;

    grantAccessContainer.classList.remove("active");

    loadingScreen.classList.add("active");

    try
    {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);

        const data = await response.json();

        loadingScreen.classList.remove("active");

        userInfoContainer.classList.add("active");

        renderWeatherInfo(data);


    }
    catch (error){

        loadingScreen.classList.remove("active");
    }

};

function renderWeatherInfo(weatherInfo){

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const description = document.querySelector("[data-weatherDescription]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temprature = document.querySelector("[data-temprature]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const clouds = document.querySelector("[data-clouds]");

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    description.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`; 
    temprature.innerText = `${weatherInfo?.main?.temp} °C`; 
    windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    clouds.innerText = `${weatherInfo?.clouds?.all} %`;
};

function getLocation(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert('');
    }

};

function showPosition(showPosition){

    const userCoordinates = {
        lat: showPosition.coords.latitude,
        long: showPosition.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);


};

grantAccessButton.addEventListener("click", getLocation);

searchForm.addEventListener("submit", (def) =>{

    def.preventDefault();

    let cityName = searchInput.value;

    if(cityName === "")
    {
        return;
    }
    else 
    {
        fetchSearchWeatherInfo(cityName);
    }

});


async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(error) {
        
    }
}
