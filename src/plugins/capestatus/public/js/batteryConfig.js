/*jshint -W117 */ // for $ of jQuery
(function () {
  'use strict';
  var capestatus = namespace('plugins.capestatus');
  capestatus.BatteryConfig = function BatteryConfig() {
    var self = this;
    self.getConfig = function (callback) {
<<<<<<< HEAD
      $.get('plugin/capestatus/', function (config) {
=======
      $.get('/plugin/capestatus/', function (config) {
>>>>>>> cwp-software/feature/262-aux-servos
        if (callback !== undefined)
          callback(config);
      });
    };


    // TODO Error handling

    self.addBattery = function(battery) {
<<<<<<< HEAD
      $.post('plugin/capestatus/batteries/', battery);
=======
      $.post('/plugin/capestatus/batteries/', battery);
>>>>>>> cwp-software/feature/262-aux-servos
    };

    self.deleteBattery = function(battery) {
      $.ajax({
<<<<<<< HEAD
        url: 'plugin/capestatus/batteries/',
=======
        url: '/plugin/capestatus/batteries/',
>>>>>>> cwp-software/feature/262-aux-servos
        type: 'DELETE',
        dataType: 'json',
        data: battery
      });
    };

    self.setSelected = function(name) {
<<<<<<< HEAD
      $.post('plugin/capestatus/selectedBattery', { name: name });
    };
  };
}());
=======
      $.post('/plugin/capestatus/selectedBattery', { name: name });
    };
  };
}());
>>>>>>> cwp-software/feature/262-aux-servos
