(function() {
  function Laser(name, deps) {
    console.log('Lights plugin loaded');
    var lights = 0;
<<<<<<< HEAD
    var ArduinoHelper = require('../../lib/ArduinoHelper')();
=======
>>>>>>> cwp-software/feature/262-aux-servos

    // Cockpit
    deps.cockpit.on('plugin.lights.toggle', function () {
      toggleLights();
    });

    deps.cockpit.on('plugin.lights.adjust', function (value) {
      adjustLights(value);
    });

    // Arduino
    deps.rov.on('status', function (data) {
      if ('LIGP' in data) {
<<<<<<< HEAD
        deps.cockpit.emit('plugin.lights.level', data.LIGP);
=======
        var level = 'level' + Math.ceil(data.LIGP * 10);
        deps.cockpit.emit('plugin.lights.level', level);
>>>>>>> cwp-software/feature/262-aux-servos
      }
    });

    var adjustLights = function (value) {
      if (lights === 0 && value < 0) {
        //this code rounds the horn so to speak by jumping from zero to max and vise versa
        lights = 0;  //disabled the round the horn feature
      } else if (lights == 1 && value > 0) {
        lights = 1;  //disabled the round the horn feature
      } else {
        lights += value;
      }
      setLights(lights);
    };
    
    var toggleLights = function() {
      if (lights > 0) {
        setLights(0);
      } else {
        setLights(1);
      }
    };

    var setLights = function (value) {
      lights = value;
      if (lights > 1)
        lights = 1;
      if (lights < 0)
        lights = 0;

<<<<<<< HEAD
      var command = 'ligt(' + ArduinoHelper.serial.packPercent(value) + ')';
=======
      var command = 'ligt(' + deps.physics.mapLight(value) + ')';
>>>>>>> cwp-software/feature/262-aux-servos
      deps.rov.send(command);

    };

  }
  module.exports = Laser;
})();