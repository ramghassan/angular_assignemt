var ap1=angular.module('ap1',[]);

ap1.controller('ctr',function ($scope) {
   $scope.one=1;
   $scope.two=2;
   $scope.updateValue = function(){
     $scope.calc=$scope.one + ' + ' + $scope.two + " = " + (+$scope.one + +$scope.two);
   };

});
      ap1.controller('ctr1',function ($scope) {

    $scope.randomNumber1=Math.floor((Math.random()*10)+1);
      $scope.randomNumber2= Math.floor((Math.random()*10)+1);
    });

      ap1.controller('gudfel',function ($scope) {

      var bA=['Kamal','sivaji','vikaram','sivaKarthikeyan'];
      $scope.actor=bA[Math.floor((Math.random()*4))];

    });
      ap1.controller('badfel',function ($scope) {
      var  pA=['Dhoni','sachin','kohli','yuvi','ramesh power'];
        $scope.player=pA[Math.floor((Math.random()*5))];

      });
