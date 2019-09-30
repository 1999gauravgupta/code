function api(){
    //  Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();
    var locs=text.value;
    if(locs==""){
        return 0;
    }
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.openweathermap.org/data/2.5/find?q='+locs+'&units=metric&appid=66835c9fccc5ec42a49a450d1d764dd8', true);

    request.onload = function() {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            var temp=data["list"][0];
            var location=temp["name"];
            var cloudss=temp["clouds"]["all"];
            var humiditys=temp["main"]["humidity"];
            var pressures=temp["main"]["pressure"]
            var temperature=temp["main"]["temp"];
            var winds=temp["wind"]["speed"];
            var weathers=temp["weather"][0]["main"];
            tempMain.innerHTML=Math.round(temperature)+"°";
            weather.innerHTML=" "+weathers;
            pressure.innerHTML=pressures+" Hg";
            clouds.innerHTML=cloudss+"%";
            wind.innerHTML=winds+" km/hr";
            humidity.innerHTML=humiditys+"%";
            loc.innerHTML=" "+location;
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            date.innerHTML=dd+"/"+mm;
            tempMain2.innerHTML=Math.round(temperature)+"°";

        } else {
        console.log('error');
        }
    }

    // Send request
    request.send();
}

button.addEventListener("click",api);
