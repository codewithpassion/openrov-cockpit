/*
 *
 * Description:
 * Configuration file.  Manage frame rate, port, etc.
 *
 */
var nconf = require('nconf');

//Add your Mock objects here using this same naming convention of library-mock for the mock version.
//be sure to add it to the expoft at the bottom of this file as well.
var argv = require('optimist').argv;

nconf.argv().env('__'); //Also look for overrides in environment settings
// Will essentially rewrite the file when a change to the defaults are made if there is a parsing error.
try {
  nconf.use('file', { file: (nconf.get('configfile') ? nconf.get('configfile') : '/etc/rovconfig.json') });
} catch (err) {
  console.log('Unable to load the configuration file, resetting to defaults');
  console.log(err);
}
console.dir(nconf.get());
nconf.env(); //Also look for overrides in environment settings

// Do not change these values in this file for an individual ROV, use the ./etc/rovconfig.json instead

nconf.defaults({
  'deadzone_pos': 50,
  'deadzone_neg': 50,
  'smoothingIncriment': 40,
  'photoDirectory': '/var/www/openrov/photos',
  'pluginsDownloadDirectory': '/usr/share/cockpit/bower_components',
  'thrust_modifier_port': 1,
  'thrust_modifier_vertical': -1,
  'thrust_modifier_starbord': 1,
  'thrust_modifier_nport': 2,
  'thrust_modifier_nvertical': -2,
  'thrust_modifier_nstarbord': 2,
  'debug' : false,
  'debug_commands' : false,
  'production' : true,
  'sample_freq': 20,
  'dead_zone':  10,
  'video_frame_rate': 30,
  'video_resolution': 'SXGA',
  'video_device': '/dev/video0',
  'video_port': 8090,
  'port': 8080,
  'serial': '/dev/ttyO1',
  'serial_baud': 115200,
  'systemDirectory': '/opt/openrov/system',
  'dashboardURL': '',
  'USE_MOCK' : false,
  'video_url' : '/rov/forward-camera'
});

function savePreferences() {
  nconf.save(function (err) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Configuration saved successfully.');
  });
}

var getLibPath = function (lib) {
  var result = lib;
  if (nconf.get('USE_MOCK') === 'true') {
    result += '-mock';
  }
  return result;
};


module.exports = {
  debug: nconf.get('debug'),
  debug_commands: nconf.get('debug_commands'),
  production: nconf.get('production'),
  sample_freq: nconf.get('sample_freq'),
  dead_zone: nconf.get('dead_zone'),
  video_frame_rate: nconf.get('video_frame_rate'),
  video_resolution: nconf.get('video_resolution'),
  video_device: nconf.get('video_device'),
  video_port: nconf.get('video_port'),
  video_url: nconf.get('video_url'),
  port: nconf.get('port'),
  serial: nconf.get('serial'),
  serial_baud: nconf.get('serial_baud'),
  dashboardURL: nconf.get('dashboardURL'),
  preferences: nconf,
  savePreferences: savePreferences,
  systemDirectory: nconf.get( 'systemDirectory' )
};
console.log('config', module.exports);
