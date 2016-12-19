var app = angular.module("aktuelles", ["firebase"]);

app.controller('aktuellesController', ['$scope','$firebaseArray', function($scope, $firebaseArray){

    //CONECT TO DATABASE AND SAVE IT ON $SCOPT.DATA
    var ref = firebase.database().ref();
    $scope.data = $firebaseArray(ref);
    
    
    $scope.data.$loaded().then(function(){
        $scope.preload = true;
    });

    $scope.setupHoferAdmin = function() {
        if ( $scope.articlePass === 'a23b' ) {
            $scope.password = true;
        }
    }

    $scope.showMenu = function() {
        $scope.backTrans=true; 
        $scope.addMessage=true;
    }

    $scope.addArticle = function() {
        var date = new Date();
        $scope.article.date = (date.getMonth() + 1) + '/' + date.getDate()  + '/' + date.getFullYear() ;

        $scope.data.$add($scope.article);
        $scope.backTrans = false;
        $scope.addMessage = false;
        $scope.article = {}; 

    }

    $scope.removeArticle = function(item) {
        if (confirm('Are you sure you want to delte this article?')) {
            var index = $scope.data.indexOf(item);
            $scope.data.$remove(item);
        }
    }

    $scope.editArticle = function(item) {
        $scope.backTrans = true;
        $scope.addMessage = true;
        $scope.article = item;
        $scope.thisArticle = item;
        $scope.editing = true;
    }

    $scope.saveEdit = function() {
        $scope.article = $scope.thisArticle;
        $scope.data.$save($scope.article);
        $scope.backTrans = false;
        $scope.addMessage = false;
        $scope.article = {}; 
    }

}]);