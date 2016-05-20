angular.module("myApp",[]).

    service("myService",function($http){

            this.getMedian=function(medData){
                  console.log(medData);
                  return $http({
                       method:"post",
                       url:"/median",
                       data:medData
                  })
            }
    }).
    controller("appCtrl",function($scope,myService){
       $scope.list=[];
      $scope.addItems=function(){
          $scope.list.push($scope.item);
           $scope.item="";
      }

      $scope.getMedian=function(){
             myService.getMedian($scope.list).then(function(response){
                   $scope.results=response.data;
             });

      }

    })
