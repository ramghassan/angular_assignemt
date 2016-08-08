var app = angular.module('proj', []);
app.controller('myCtrl', function($scope) {
    $scope.datas =[
       {"year":1985,"over":8967,"under":15043},
       { "year":1986,"over":3954,"under":13048},
       { "year":1987,"over":1002,"under":22043},
       { "year":1988,"over":2002,"under":25923},
       { "year":1989,"over":27032,"under":29023},
       { "year":1990,"over":90632,"under":21223},
       { "year":1991,"over":95432,"under":25934},

       {"year":1992,"over":8967,"under":15043},
       { "year":1993,"over":3954,"under":13048},
       { "year":1994,"over":1002,"under":22043},
       { "year":1995,"over":2002,"under":25923},
       { "year":1996,"over":27032,"under":29023},
       { "year":1997,"over":90632,"under":21223},
       { "year":1998,"over":95432,"under":25934}

    ];
    //$scope.year=Object.keys($scope.datas);
    $scope.theft="";
    $scope.pgSz=3;
    $scope.curPage=0;
    $scope.temp=[];
    $scope.temp=$scope.datas;
    $scope.ary=[];
    $scope.hide=false;


    $scope.nop = Math.ceil($scope.temp.length / 3);
    for(i=1;i<=$scope.nop;i++){
     $scope.ary[i-1]=i;
     }


    //console.log($scope.temp);

    $scope.validSearch=function(y)
    {
     $scope.temp=[];
          for(var z=0;z<$scope.datas.length;z++)
          {
            if(($scope.datas[z].year==y))
            {
              $scope.temp.push($scope.datas[z]);
              console.log($scope.temp);
            }
          }
    $scope.ary=[];
    $scope.nop = Math.ceil($scope.temp.length / 3);
    for(i=1;i<=$scope.nop;i++){
     $scope.ary[i-1]=i;
     }
   }

   $scope.validFinding=function(a,b)
   {
       $scope.temp=[];
         for(var z=0;z<$scope.datas.length;z++)
         {
           if(($scope.datas[z][a]>b))
           {
             $scope.temp.push($scope.datas[z]);
            console.log(z);
           }
     }
   $scope.ary=[];
   $scope.nop = Math.ceil($scope.temp.length / 3);
   for(i=1;i<=$scope.nop;i++){
    $scope.ary[i-1]=i;
    }
   }


$scope.validSorting=function(a,b)
{
if(b==="Descending")
{

   $scope.temp.sort(function(x,y) {
    return(parseFloat(y[a]) - parseFloat(x[a]));
});
}
else
{

 $scope.temp.sort(function(x,y) {
  return(parseFloat(x[a]) - parseFloat(y[a]));
});
}
$scope.ary=[];
$scope.nop = Math.ceil($scope.temp.length / 3);
for(i=1;i<=$scope.nop;i++){
 $scope.ary[i-1]=i;
 }
}
 $scope.Edit=function(a,b,c)
 {
 $scope.hide=true;
  $scope.$broadcast("modifi" , {year:a,under:b,over:c,
    y:$scope.datas
  });

 }

 $scope.$on("modi",function(event,args){
    $scope.temp=args.a;
    console.log(args.a);
    $scope.ary=[];
    $scope.nop = Math.ceil($scope.temp.length / 3);
    for(i=1;i<=$scope.nop;i++){
     $scope.ary[i-1]=i;
     }
$scope.hide=false;
    });

    //delet buttun
    $scope.Delete=function(yr)
    {
      $scope.temp3=$scope.temp;
      $scope.temp=[];
      for(var z=0;z<$scope.temp3.length;z++)
      {
        if(($scope.temp3[z].year!=yr))
        {
          $scope.temp.push($scope.temp3[z]);
        }
      }
      $scope.ary=[];
      $scope.nop = Math.ceil($scope.temp.length / 3);
      for(i=1;i<=$scope.nop;i++){
       $scope.ary[i-1]=i;
       }
    }

});
app.directive('tabl', function() {

    return {
              transclude: true,
              templateUrl: 'table.html',
            };
});

app.controller('myCtrl2', function($scope) {

   $scope.year1=[];
  $scope.$on("modifi",function(event,args){
      $scope.edit1=args.year;
      $scope.edit2=args.under;
      $scope.edit3=args.over;
      $scope.year1=args.y;
      console.log($scope.edit1);
  });


  $scope.modified=function(a,b)
  {
          for(var z=0;z<$scope.year1.length;z++)
      {
        if($scope.year1[z].year==$scope.edit1)
        {
          console.log($scope.edit1);
          console.log(a);
          console.log(b);
          $scope.year1[z].under=a;
          $scope.year1[z].over=b;
        }
  }
  $scope.yg="hai";
  $scope.$emit("modi" ,{a:$scope.year1});
}




});
