/*global angular, console  */

(function (ng) {
    'use strict';
    var mdl = angular.module('adhalizator');

    mdl.controller('TranslatorCtrl', ['$scope', '$timeout', 'Mapper', function ($scope, $timeout, Mapper) {
        
        var test1 = "СЪЕШЬ ЕЩЁ ЭТИХ МЯГКИХ ФРАНЦУЗСКИХ БУЛОК ДА ВЫПЕЙ ЧАЮ",
            test2 = "съешь ещё этих мягких французских булок да выпей чаю";
        
        function replacer(str) {
            var result = str;
            ng.forEach(Mapper.map, function (pair) {
                result = result.replace(new RegExp(pair[0], 'g'), pair[1]);
            });
            return result;
        }
        
        $scope.translate = function () {
            $scope.output = replacer($scope.input);
        };
  
        $scope.test = function () {
            $scope.input = test1 + '\n\n\n' + test2;
        };
    }]);
    
    
    mdl.directive('onEnter', [function () {
        return {
            restrict: 'A',
            link: function ($scope, elt, attrs) {
                elt.on('keypress', function (e) {
                    if (e.keyCode === 13) {
                        $scope.$apply(function () {
                            $scope.$eval(attrs.onEnter);
                            elt.blur();
                        });
                    }
                });
            }
        };
    }]);
    
}(angular));

  
