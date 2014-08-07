angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translateCloak
 * @requires $rootScope
 * @requires $translate
 * @restrict A
 *
 * $description
 * Adds a `translate-cloak` class name to the given element where this directive
 * is applied initially and removes it, once a loader has finished loading.
 * If a loader has already finished loading, the `translate-cloak` class is not
 * added.
 *
 * This directive can be used to prevent initial flickering when loading translation
 * data asynchronously.
 *
 * @param {string=} translate-cloak No string required
 */
.directive('translateCloak', ['$rootScope', '$translate', function ($rootScope, $translate) {

  return {
    compile: function (tElement) {
      if ($translate.hasLoadedTranslations() == false){
        var removeListener = $rootScope.$on('$translateChangeEnd', function () {
          tElement.removeClass($translate.cloakClassName());
          removeListener();
          removeListener = null;
        });
      } 
    }
  };
}]);
