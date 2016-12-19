<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="Edin Causevic">

<title>Zahnarzt Hofer Christoph</title>

<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">


<link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon-180x180.png">
<link rel="icon" type="image/png" href="img/favicon/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="img/favicon/android-chrome-192x192.png" sizes="192x192">
<link rel="icon" type="image/png" href="img/favicon/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="img/favicon/manifest.json">
<link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">
<meta name="theme-color" content="#ffffff">
<style>
    [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
        display: none !important;
    }    
</style>
</head>
<body id="aktuelles" ng-app="aktuelles"  ng-controller="aktuellesController" class="actuellesBack">
<header>
<nav>
<div class="row">
<img src="img/logo.png" class="logo" alt="Logo"/><span>Dr. Cristoph Hofer</span>
<i class="fa fa-bars" aria-hidden="true" id="btn-mobile-menu"></i>
<ul class="main-nav">
<li><a href="index.php#sroll-home" id="active">Home</a></li>
<li><a href="index.php#scoll-info">Über uns</a></li>
<li><a href="index.php#scoll-team">Team</a></li>
<li><a href="index.php#scoll-offer">Leistungen</a></li>
<li><a href="index.php#scoll-gallery">Ordination</a></li>
<li><a href="index.php#scoll-call">Termin</a></li>
<li><a href="index.php#scoll-contct">Kontakt</a></li>
<li><a href="aktuelles.php">Aktuelles</a></li>
</ul>
</div>
</nav>
</header>
<!-- Aktuelles -->
    <div class="back-trans" ng-show="backTrans" ng-click="backTrans=false; addMessage=false; article={}; editing=false;" ng-cloak></div>
<div class="addMsg" ng-show="addMessage" ng-cloak>
    <h2>Add Article</h2>
    <label for="title">Title</label>
    <input type="text" name="title" class="field" id="input-title" ng-model="article.title" id="input1">
    <label for="message">Message</label>
    <textarea name="message" id="" class="field" cols="30" rows="10" ng-model="article.message" id="input1"></textarea>
    <div>
        <input type="button" value="Save" ng-click="addArticle()" ng-hide="editing">
       <input type="button" value="Save Edit" ng-click="saveEdit();" ng-show="editing">
        <input type="button" value="Cancle" ng-click="backTrans=false; addMessage=false; article={}; editing=false;">
    </div>
</div>

<div class="aktuelles-back">
    
    <div class="row">
        <div class="aktuelles">
            <div class="row">
                <div class="add-message">
                    <input type="text" placeholder="pass" class="pass" ng-model="articlePass" ng-change="setupHoferAdmin()">
                    <input type="button" value="Add Article" ng-click="showMenu()" ng-if="password" ng-cloak>
                    <input type="button" value="Add Article" class="fakeButton" ng-hide="password==true" >
                </div>
            </div>
            <ul>    
               <div class="preloader" ng-hide="preload" >
                   <img src="img/preloader.gif" alt="Preloader Image">
               </div>            
                <li ng-repeat="item in data | orderBy:'-' | limitTo: 100" ng-cloak>
                    <div class="note-left">
                        <img src="img/prifile-photo.png" alt="Hofer Image"/>
                        <span class="akt-profile-name">Dr Critoph Hofer</span>
                        <span class="akt-date">{{item.date}}</span>
                    </div>
                    <div class="note-right">
                        <h2>{{item.title}}</h2>
                        <p>{{item.message}}</p>
                        <input type="button" value="Edit" ng-click="editArticle(item)" ng-if="password" ng-cloak>
                        <input type="button" value="Remove" ng-click="removeArticle(item)" ng-if="password" ng-cloak>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</div>
<!-- JS jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>  
<script src="http://maps.google.com/maps/api/js?key=AIzaSyA_IuXVFNRop1aZ9A1KoP94NoTAtqKv8Fs"></script>
<!-- Angular -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/3.6.0/firebase.js"></script>
<!-- AngularFire -->
<script src="https://cdn.firebase.com/libs/angularfire/2.0.1/angularfire.min.js"></script>
<script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAyDaBzERoLf66maF4MXfSRLm3A-RpBOuA",
        authDomain: "ng-cl-c78de.firebaseapp.com",
        databaseURL: "https://ng-cl-c78de.firebaseio.com",
        storageBucket: "ng-cl-c78de.appspot.com",
        messagingSenderId: "312936215983"
    };
    firebase.initializeApp(config);
</script>
<script src="js/app.min.js"></script>   
 


</body>
</html>
