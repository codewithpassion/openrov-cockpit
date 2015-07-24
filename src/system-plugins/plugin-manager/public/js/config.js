(function() {
  'use strict';

  window.Plugins = window.Plugins || { PluginManager: {} };
  window.Plugins.PluginManager = window.Plugins.PluginManager || { };
  window.Plugins.PluginManager.Config = function () {
    var self = this;
    self.get = function (pluginName, callback) {
<<<<<<< HEAD
      $.get('system-plugin/plugin-manager/config/' + pluginName, function (config) {
=======
      $.get('/system-plugin/plugin-manager/config/' + pluginName, function (config) {
>>>>>>> cwp-software/feature/262-aux-servos
        if (callback !== undefined)
          callback(config);
      });
    };
    self.set = function (pluginName, config) {
<<<<<<< HEAD
      $.post('system-plugin/plugin-manager/config/' + pluginName, config);
    };
  };
})();
=======
      $.post('/system-plugin/plugin-manager/config/' + pluginName, config);
    };
  };
})();
>>>>>>> cwp-software/feature/262-aux-servos
