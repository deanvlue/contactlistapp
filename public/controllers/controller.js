function AppCtrl($scope, $http) {
  console.log("Hello WOrld from controller");

  var refresh = function(){
    $http.get('/contactlist').success(function(response){
      console.log("i got the data requested");
      $scope.contactlist = response;
      $scope.contact="";
    });
  };

  refresh();

  $scope.addContact = function(){
    console.log($scope.contact);
    $http.post('/contactlist', $scope.contact).success(function(response){
      console.log(response);
      refresh();
    });
  };
}
