var PREFERENCES = 'plugins:aux-servo';
function settings(deps) {
  var self = this;
  self.preferences = {};

  function getPreferences(config) {
    var preferences = config.preferences.get(PREFERENCES);
    if (preferences == undefined) {
<<<<<<< HEAD
      preferences = { '1': { name: '1', enabled: false, pin: 13 }, '2': { name: '2', enabled: false, pin: 14} };
=======
      preferences = { '1': { name: '1', enabled: false, pin: 9 }, '2': { name: '2', enabled: false, pin: 10} };
>>>>>>> cwp-software/feature/262-aux-servos
      config.preferences.set(PREFERENCES, preferences);
    }
    console.log('Aux Servo settings loaded preferences: ' + JSON.stringify(preferences));
    return preferences;
  }

  self.saveServoConfig = function(config) {
    self.preferences[config.name] = config;
    deps.config.preferences.set(PREFERENCES, self.preferences);
    deps.config.savePreferences();
  };

  self.register = function() {
    self.preferences = getPreferences(deps.config);

    deps.app.get('/plugin/aux-servo/config', function (req, res) {
      res.send(self.preferences);
    });
    deps.app.get('/plugin/aux-servo/config/:servo', function (req, res) {
      res.send(self.preferences[req.params.servo]);
    });
    deps.app.post('/plugin/aux-servo/config/:servo', function (req, res) {
      self.saveServoConfig(req.body);
      res.status(200);
      res.send(self.preferences[req.params.servo]);
    });
  };
}
<<<<<<< HEAD
module.exports = settings;
=======
module.exports = settings;
>>>>>>> cwp-software/feature/262-aux-servos
