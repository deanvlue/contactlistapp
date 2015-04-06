function AppCtrl($scope, $http) {
  console.log("Hello WOrld from controller");

  $http.get('/contactlist').success(function(response){
    console.log("i got the data requested");
    $scope.contactlist = response;
  });
}
