(function() {
'use strict';
  window.Plugins = window.Plugins || { SoftwareUpdater: {} };
  window.Plugins.SoftwareUpdater = window.Plugins.SoftwareUpdater|| { };
  window.Plugins.SoftwareUpdater.Config = function () {
  var self = this;

  self.dashboardUrl = ko.observable(undefined);
  getDashboardUrl();

  self.getShowAlerts = function (callback) {
<<<<<<< HEAD
    $.get('system-plugin/software-update/config/showAlerts', function (settings) {
=======
    $.get('/system-plugin/software-update/config/showAlerts', function (settings) {
>>>>>>> cwp-software/feature/262-aux-servos
      if (callback !== undefined)
        callback(settings.showAlerts === 'true' || settings.showAlerts === true);
    });
  };
  self.setShowAlerts = function (value) {
<<<<<<< HEAD
    $.post('system-plugin/software-update/config/showAlerts', { showAlerts: value });
=======
    $.post('/system-plugin/software-update/config/showAlerts', { showAlerts: value });
>>>>>>> cwp-software/feature/262-aux-servos
  };

  function getDashboardUrl() {
    $.ajax({
<<<<<<< HEAD
      url: 'system-plugin/software-update/config/dashboardUrl',
=======
      url: '/system-plugin/software-update/config/dashboardUrl',
>>>>>>> cwp-software/feature/262-aux-servos
      success: function(result) {
        var url = result.url;
        if (url.trim().length === 0 || url.trim().indexOf('http') === -1)
        {
          url = 'http://' + window.location.hostname;
        }
        self.dashboardUrl(url);
      },
      async: false
    });
  }
};
<<<<<<< HEAD
})();
=======
})();
>>>>>>> cwp-software/feature/262-aux-servos
