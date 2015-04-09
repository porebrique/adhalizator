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
                console.log(pair[0], ':', result);
                
            });
            
            return result;
            
        }
        
        $scope.translate = function () {
            console.log('translate pressed');
            var output = replacer($scope.input);
            
            
            
            $scope.output = output;
        };
  
        $scope.test = function () {
            $scope.input = test1 + '\n\n\n' + test2;
        };
    }]);
    
    
    
}(angular));

  
