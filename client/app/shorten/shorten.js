angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.url = ''
  $scope.link = {'url' : null}
  $scope.addLink = function() {
    $scope.link['url'] = $scope.url;
    Links.addLink($scope.link)
  }
});
