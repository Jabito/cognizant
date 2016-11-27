angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSlideBoxDelegate) {

        /*//SQL Initialization
        var db = $cordovaSQLite.openDB({ name: "my.db" });

        // for opening a background db:
        var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });

        $scope.execute = function() {
            var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
            $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
                console.log("insertId: " + res.insertId);
            }, function(err) {
                console.error(err);
            });
        };*/
        //Setting up some static data
        $scope.employeenumber = "4253627";
        $scope.username = "Paolo Javier";
        $scope.useremail = "jprjavier@mymail.mapua.edu.ph";
        $scope.userimage = "img/leopic.jpg";
        $scope.referred = 8;
        $scope.started = "February 26, 2010"
        $scope.tokens = 5;

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('ProfileCtrl', function($scope, $stateParams, $state, $ionicSlideBoxDelegate, Medals) {
        // Called to navigate to the main app
        $scope.startApp = function() {
            $state.go('main');
        };
        $scope.next = function() {
            $ionicSlideBoxDelegate.next();
        };
        $scope.previous = function() {
            $ionicSlideBoxDelegate.previous();
        };

        // Called each time the slide changes
        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
        };

        console.log("hit");
        //Medals data from JSON

        Medals.all().success(function(response) {
            $scope.medals = response;
        });

    })

    .controller('VolunteerCtrl', function($scope, $stateParams, FVols, PVols) {

        FVols.all().success(function(response) {
            $scope.fvols = response;
        });
        PVols.all().success(function(response) {
            $scope.pvols = response;
        });

    })

    .controller('AchievementCtrl', function($scope, $stateParams) {


    })

    .controller('RedeemCtrl', function($scope, $stateParams, $ionicPopup) {

        $scope.redeem = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Prize Claimed!',
                template: 'You redeemed this prize. Please go to the HR to claim it. Thank you. '
            });

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };

    })

    .controller('ReferTestCtrl', function($scope, $stateParams, Referrals) {

        //Referrals Data from JSON
        Referrals.all().success(function(response) {
            $scope.referrals = response;
        });
    })

    .controller('ReferralCtrl', function($scope, $stateParams, Referrals) {

        //Referrals Data from JSON
        Referrals.all().success(function(response) {
            $scope.referrals = response;
        });


        //This holds all the data for referrals the user has.
        /*$scope.referrals = [{
            "name": "Paolo Calaguian",
            "imageurl": "img/paopic.jpg",
            "StartDate": "November 21,2014",
            "TokensReceived": "1"
        }, {
            "name": "Francisco Aquino III",
            "imageurl": "img/aquinopic.jpg",
            "StartDate": "January 15,2010",
            "TokensReceived": "3"
        }, {
            "name": "Ace Ellasos",
            "imageurl": "img/acepic.jpg",
            "StartDate": "August 28, 2013",
            "TokensReceived": "1"
        }, {
            "name": "Bryan Dela Cruz",
            "imageurl": "img/brypic.jpg",
            "StartDate": "May 2, 2011",
            "TokensReceived": "3"
        }, {
            "name": "Joar Celis",
            "imageurl": "img/joarpic.jpg",
            "StartDate": "July 28, 2011",
            "TokensReceived": "2"

        }, {
            "name": "Timothy Aranzanso",
            "imageurl": "img/timpic.jpg",
            "StartDate": "November 20, 2009",
            "TokensReceived": "4"
        }, {
            "name": "Paolo Javier",
            "imageurl": "img/jabitopic.jpg",
            "StartDate": "Feb 10, 2008",
            "TokensReceived": "6"

        }, {
            "name": "Aresh Saharkhiz",
            "imageurl": "img/areshpic.jpg",
            "StartDate": "March 18, 2005",
            "TokensReceived": "20"

        }];*/
    });
