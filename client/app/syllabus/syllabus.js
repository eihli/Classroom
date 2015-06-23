angular.module('classroom.syllabus', ['classroom.services'])

.controller('SyllabusController', function ($rootScope, $scope, GetSyllabus) {
  $scope.isCollapsed = false;
  GetSyllabus.lessons().then(function(data) {
    console.log(data);
    $scope.lessons = angular.fromJson(data.data);
  });

  $scope.logout = function () {
    delete $rootScope.currentUser;
  };
});

