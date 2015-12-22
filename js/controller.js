/**
 * Created by jim on 2015/5/6.
 */
var time = new Date();
app.controller('webcon',function($scope,baseService,$stateParams)
{

    $scope.newsList = baseService.x_get_data('json/news.json');
	$scope.date = baseService.x_get_data('json/news.json').not_date;
	console.log($scope.newsList.not_date)
    if($stateParams.id)
    {
        $scope.i = $stateParams.id;
    }

})

app.controller('deriction',function($scope,baseService)
{

    $scope.dList = baseService.x_get_data('json/deriction.json?'+time);

    console.log($scope.dList);
})

app.controller('works',function($scope,baseService)
{

    $scope.workList = baseService.x_get_data('json/works.json?'+time);
    console.log($scope.workList);
})
app.controller('team',function($scope,baseService)
{
    $scope.teamList = baseService.x_get_data('json/team.json?'+time);
})