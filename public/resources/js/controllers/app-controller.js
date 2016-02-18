/*
 * Application Controller
 *
 */

BlankApp.controller('AppCtrl', ['$mdDialog', '$timeout', '$http', '$sce', function ($mdDialog, $timeout, $http, $sce) {
  var vm = this;

  vm.showDocsNav = false;
  vm.showMainNav = false;
  vm.showMenu    = false;

  // TOGGLE MAIN NAV (TOP) ON MOBILE
  vm.toggleDocsMenu = function () {
    vm.showDocsNav = !vm.showDocsNav;
  };

  // TOGGLE DOCS NAV
  vm.toggleMainMenu = function () {
    vm.showMainNav = !vm.showMainNav;
  };

} ]);
