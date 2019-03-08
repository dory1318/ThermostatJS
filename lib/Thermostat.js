function Thermostat() {
  this.temperature = 20;
  this.powerSavingModeOn = true;
}

Thermostat.prototype.up = function(number) {
  if (this.powerSavingModeOn == true && (this.temperature + number) > 25) {
    this.temperature = 25
    return "capped at 25 when power saving mode is on"
  }
  if (this.powerSavingModeOn == false && (this.temperature + number) > 32) {
    this.temperature = 32
    return "capped at 32 when power saving mode is off"
  }

  this.temperature += number
}

Thermostat.prototype.down = function(number) {
  if ((this.temperature - number) < 10) {
    this.temperature = 10
    return "minimum temperature is 10"
  }
  this.temperature -= number
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.currentUsage = function() {
  if (this.temperature < 18) { return 'low-usage' }
  else if (this.temperature >= 18 && this.temperature <= 24 ) { return 'medium-usage' }
  else if (this.temperature > 24) { return 'high-usage' }
}

Thermostat.prototype.turnPowerSavingModeOn = function() {
  this.powerSavingModeOn = true
  if (this.temperature > 25) {
    this.temperature = 25
  }
}

Thermostat.prototype.turnPowerSavingModeOff = function() {
  this.powerSavingModeOn = false
}
