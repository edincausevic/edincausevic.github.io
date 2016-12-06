(function(){

app.controller('myController', function($scope, $http, $firebaseArray){

   
    // CONECT TO DATABASE AND SAVE IT TO $SCOPE.DATA
    var ref = firebase.database().ref();
    $scope.data = $firebaseArray(ref)

    // WHEN DATA IS LOADED SAVE IT IN $SCOPE.CATEGORIES
    $scope.data.$loaded().then(function(data){
        $scope.categories = filterCategories(data);
        document.getElementById('preloader').style.display = 'none';
    });
    

    
    // SAVE - CREATE NEW ITEM
    $scope.createItem = function(inputValues) {

        if ( $scope.formValdate() !=  false ) {
            $scope.data.$add(inputValues);
            $scope.mainMenu = false;
            $scope.transBack = false;
        }
    };
    
    
    // EDIT ITEM
    $scope.editItem = function(item) {
        // store id of this item
        $scope.thisItem =item.$id;

        $scope.inputsValues = item; 
        $scope.editing = true;
        $scope.saveBtn = true;
        $scope.mainMenu = true;
        $scope.transBack = true;
    }
    
 
    // SAVE EDIT 
    $scope.saveEditItem = function() {
        
        $scope.thisItem = $scope.inputsValues;
        $scope.data.$save($scope.thisItem);
        $scope.inputsValues = {};
        $scope.mainMenu = false;
        $scope.transBack = false;
    }
    
    // DELETE ITEM 
    $scope.deleteItem = function(item) {
        
        if ( confirm('Are you sure you want to delete this item?') ) {
            var index = $scope.data.indexOf(item);
            $scope.data.$remove(item);
        }
    }
    
    // FILTER CATEGORIES AND REMOVE REPEATS
    function filterCategories(jsn) {

        var allCat = [];

        angular.forEach(jsn, function(obj){
            angular.forEach(obj.categories,function(cat){
                allCat.push(cat);
            });
        });

        var filterdCats = allCat.filter(function(item, pos){
            return allCat.indexOf(item) == pos;
        });
        return filterdCats;
    }
    
    // FORM VALIDATION 
    $scope.formValdate = function() {

        var inputs = document.querySelectorAll('.main-menu-input');

        for ( var i = 0 ; i < inputs.length; i++ ) {
            if (inputs[i].value.length < 1 ) {
                if ( inputs[i].placeholder == 'Image Link' ) continue;
                var originalVal = inputs[i].placeholder;
                inputs[i].placeholder = 'Please enter something';
                setTimeout(function(){ inputs[i].placeholder = originalVal; }, 1000);
                return false;
            }
        }
    }

    // CREATE A DATY FOR TODAY
    var date = new Date();
    $scope.dateToday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    

    
    $scope.contact = {
        name:"John Doe",
        phone:"(555) 555-5555",
        email:"johndoe@gmail.com"
    }
    
    
    
    
});
    
}());