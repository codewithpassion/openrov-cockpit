var Settings = require('./settings');

function auxServo(name, deps) {
  console.log('Auxiliary servo plugin.');
  var settings = new Settings(deps);
  settings.register();

  var configureServo = function(servo){
<<<<<<< HEAD
    deps.rov.send('xsrv.cfg(' + servo.pin + ',' + servo.min + ',' + servo.max + ')');
=======
    deps.rov.send('xsrv.cfg(' + servo.name + ', ' + servo.pin + ',' + servo.min + ',' + servo.max + ')');
>>>>>>> cwp-software/feature/262-aux-servos
    settings.saveServoConfig(servo);
  };

  var execute = function(command){
    deps.rov.send('xsrv.exe(' + command.pin + ',' + command.value + ')');
  };

  deps.rov.on('status', function(status){
    if ('xsrv.ext' in status) {
<<<<<<< HEAD
      deps.io.sockets.emit('auxservo-executed', status['xsrv.ext']);
      delete status['xsrv.ext'];
    }
  });

  deps.io.sockets.on('connection', function (socket) {

    socket.on('auxservo-config', function (config) {
      console.log('auxservo-config');
      configureServo(config);
    });

    socket.on('auxservo-execute', function (command) {
      console.log('auxservo-execute');
      execute(command);
    });

  });
=======
      deps.cockpit.emit('plugin.aux-servo.executed', status['xsrv.ext']);
      setTimeout(function() {delete status['xsrv.ext'];}, 1000);
    }
  });

  deps.cockpit.on('plugin.aux-servo.config', function (config) {
    console.log('plugin.aux-servo.config ' + config);
    configureServo(config);
  });

  deps.cockpit.on('plugin.aux-servo.execute', function (command) {
    console.log('plugin.aux-servo.execute ' + command);
    execute(command);
  });

>>>>>>> cwp-software/feature/262-aux-servos
}
module.exports = auxServo;