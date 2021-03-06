$(document).ready(function() {

  function callingApi(city) {
    $.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=" +key+ "&units=metric", function(cities) {
      document.getElementById("current_city").innerText = cities.name
      document.getElementById("city_temp").innerText = Math.round(cities.main.temp);
      });
    }

    callingApi("Tokyo");
    
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#current_usage').text(thermostat.currentUsage());

    if (thermostat.currentUsage() == 'high-usage') {
      $('#current_usage').css("color", "red");
    }
    else if (thermostat.currentUsage() == 'medium-usage') {
      $('#current_usage').css("color", "black");
    }
    else if (thermostat.currentUsage() == 'low-usage') {
      $('#current_usage').css("color", "green");
    }

  }
//   function updateUsage () {
//   usage = document.getElementById("current_usage")
//   usage.innerText = thermostat.currentUsage()
//   $('#current_usage').attr('class', thermostat.currentUsage());
// }
  var thermostat = new Thermostat();
  updateTemperature();
  // updateUsage();
  $( "#show_weather" ).click(function( event ) {
  city = document.getElementById("city")
  callingApi(city.value)
  });

  $('#temp-up').on('click', function() {
    thermostat.up(1);
    updateTemperature()
  })

  $('#temp-down').on('click', function() {
    thermostat.down(1);
    updateTemperature()
  })

  $('#reset-temp').on('click', function() {
    thermostat.reset();
    updateTemperature()
  })

  $('#power-saving').click(function() {
    if (thermostat.powerSavingModeOn == true) {
      console.log('turn it off');
      thermostat.turnPowerSavingModeOff();
      $('#power-saving-label').text("OFF");
      $('#power-saving').css("background-color", "red");
      updateTemperature()
    }

    else if (thermostat.powerSavingModeOn == false) {
      console.log('turn it on');
      thermostat.turnPowerSavingModeOn();
      $('#power-saving-label').text("ON");
      $('#power-saving-label').text("ON");
      $('#power-saving').css("background-color", "green");
      updateTemperature()
    }
  })
})
