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

        $scope.options = {
            loop: false,
            effect: 'fade',
            speed: 500,
        };
		
		$scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
		
        //This holds all the data for referrals the user has.
        $scope.referrals = [{
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

        }];
        //This holds the achievements the user currently has.
        $scope.medaldata = [{
            "title": "Attendance",
            "rank": "gold",
            "max": "50",
            "current": "40"
        }, {
            "title": "Referrals",
            "rank": "bronze",
            "max": "30",
            "current": "3"
        }, {
            "title": "Volunteering",
            "rank": "silver",
            "max": "20",
            "current": "8"
        }, {
            "title": "Attendance",
            "rank": "bronze",
            "max": "12",
            "current": "5"
        }, {
            "title": "Perfect Attendance Achievement",
            "rank": "gold",
            "max": "50",
            "current": "40"
        }, {
            "title": "Referrals",
            "rank": "bronze",
            "max": "30",
            "current": "3"
        }, {

            "title": "Volounteering",
            "rank": "silver",
            "max": "20",
            "current": "8"
        }, {
            "title": "Attendance Achievement",
            "rank": "bronze",
            "max": "12",
            "current": "5"
        }];


        $scope.employeenumber = "4253627";
        $scope.username = "Jon Snow";
        $scope.useremail = "jonsnow@cognizant.com";
        $scope.userimage = "img/leopic.jpg";
        $scope.tokens = 5;
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
	
	.controller('ProfileCtrl', function($scope, $stateParams, $state, $ionicSlideBoxDelegate) {
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
		
    })
	
    .controller('PlaylistCtrl', function($scope, $stateParams) {
    });
