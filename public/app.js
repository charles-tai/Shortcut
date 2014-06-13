var app = angular.module('app',['ngRoute','ui.ace']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
   when('/level1', {
    templateUrl: 'level1.html',
    controller: 'linkController'
  })
}]);
// normally angular watches all its variables, but when working with non angular functions (jQuery, outside code)
  // $watch - used to watch variables that are not changed by angular (jQuery)
  // $scope.$apply - tells scope to reinspect all its variables

app.controller('statsController', ['$scope', '$window', function($scope, $window) {
  $scope.cursorCount = 63;
  $scope.changeCount = 0;
  $scope.targetChange = 62;
  $scope.shortcuts = $window.shortcuts;
  $scope.solution;
  $scope.checkValue = function(currentValue) {
    console.log('checking');
    console.log('currentVal', currentValue);
    console.log('solution', $scope.solution);
    if (currentValue === $scope.solution) {
      console.log('SUCCESS');
    }
  };
  $scope.dataCount = function(event,shortcut) {
    if (event === 'cursor') {
      --$scope.cursorCount;
    }
    if (event === 'change') {
      --$scope.changeCount;
    }
    $scope.$apply();
    $scope.totalChange = $scope.cursorCount + $scope.changeCount;
  }
  $scope.aceLoaded = function(_editor, _editor2){
    // Editor part
    var _session = _editor.getSession();
    var _renderer = _editor.renderer;

    _editor.setFontSize("20px");
    // Options
    _session.setUndoManager(new ace.UndoManager());
    _renderer.setShowGutter(true);
    console.log(_editor);
    // Events
    _editor.setReadOnly(true);
    _editor.on("change", function(e){
        $scope.dataCount('change');

      });

    _session.selection.on('changeCursor', function () {
        $scope.dataCount('cursor');
        $scope.checkValue(_session.getValue());
      });
  };
  $scope.aceLoaded2 = function(_editor){
    // Editor part
    var _session = _editor.getSession();
    var _renderer = _editor.renderer;

    _editor.setFontSize("20px");
    // Options
    _session.setUndoManager(new ace.UndoManager());
    _renderer.setShowGutter(true);
    // Events
    _editor.setReadOnly(true);
    _editor.on("change", function(e){
        $scope.dataCount('change');
        // $scope.checkValue(_session.getValue());

      });
    // Set value
    $scope.solution = _session.getValue();


  };
}]);
