var app = angular.module('siteApp',[
    'ui.router'
]);
app.config(function($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise("/news");
    $stateProvider
        .state('news', {
            url: "/news",
            templateUrl: "tpl/news.html"
        })
        .state('deriction',{
            url:"/deriction",
            templateUrl:"tpl/deriction.html"
        })
        .state('team',{
            url:"/team",
            templateUrl:"tpl/team.html"
        })
        .state('works',{
            url:"/works",
            templateUrl:"tpl/works.html"
        })
        .state('about',{
            url:"/about",
            templateUrl:"tpl/about.html"
        })
        .state('news_info',{
        	url:"/news_info/:id",
        	templateUrl:"tpl/news_info.html"
        })
})
