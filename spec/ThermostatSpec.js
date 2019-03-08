'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat()
  });


  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature", function() {
    thermostat.up(4);
    expect(thermostat.temperature).toEqual(24);
  });

  it("caps temperature at 25 degrees when power saving mode is on", function() {
    thermostat.powerSavingModeOn = true
    expect(thermostat.up(10)).toEqual("capped at 25 when power saving mode is on")
    expect(thermostat.temperature).toEqual(25)
  })

  it("caps temperature at 32 degrees when power saving mode is off", function() {
    thermostat.powerSavingModeOn = false
    expect(thermostat.up(15)).toEqual("capped at 32 when power saving mode is off")
    expect(thermostat.temperature).toEqual(32)
  })

  it("has power saving on by default", function() {
    expect(thermostat.powerSavingModeOn).toBe(true)
  })

  it("resets the temperature to 20 when requested", function() {
    thermostat.up(3)
    expect(thermostat.temperature).toEqual(23)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })

  it("returns low-usage when asked", function() {
    thermostat.temperature = 10
    expect(thermostat.currentUsage()).toEqual("low-usage")
  })

  it("returns medium-usage when asked", function() {
    thermostat.temperature = 24
    expect(thermostat.currentUsage()).toEqual("medium-usage")
  })

  it("returns high-usage when asked", function() {
    thermostat.temperature = 35
    expect(thermostat.currentUsage()).toEqual("high-usage")
  })

  it("decreases temperature when asked", function() {
    thermostat.down(5)
    expect(thermostat.temperature).toEqual(15)
  })

  it("caps minimum temperature at 10 degrees", function() {
    expect(thermostat.down(15)).toEqual("minimum temperature is 10")
    expect(thermostat.temperature).toEqual(10)
  })
})
