angular.module('starter.services', [])

    .factory('Referrals', function ($http, $rootScope, $stateParams) {
        return {
            all: function () {
                return $http.get('data/referrals.json', { params: { user_id: $rootScope.session } })
            },
            get: function () {
                return $http.get('data/referrals.json', { params: { user_id: $rootScope.session, chat_id: $stateParams.idchat } })
            },
            add: function (id) {
                return $http.get('data/referrals.json', { params: { idfriends: id } })
            }
        };
    })

    .factory('Medals', function ($http, $rootScope, $stateParams) {
        return {
            all: function () {
                return $http.get('data/medals.json', { params: { user_id: $rootScope.session } })
            },
            get: function () {
                return $http.get('data/medals.json', { params: { user_id: $rootScope.session, chat_id: $stateParams.idchat } })
            },
            add: function (id) {
                return $http.get('data/medals.json', { params: { idfriends: id } })
            }
        };
    })
    
    .factory('FVols', function ($http, $rootScope, $stateParams) {
        return {
            all: function () {
                return $http.get('data/volunteerfuture.json', { params: { user_id: $rootScope.session } })
            },
            get: function () {
                return $http.get('data/volunteerfuture.json', { params: { user_id: $rootScope.session, chat_id: $stateParams.idchat } })
            },
            add: function (id) {
                return $http.get('data/volunteerfuture.json', { params: { idfriends: id } })
            }
        };
    })
    
    .factory('PVols', function ($http, $rootScope, $stateParams) {
        return {
            all: function () {
                return $http.get('data/volunteerpast.json', { params: { user_id: $rootScope.session } })
            },
            get: function () {
                return $http.get('data/volunteerpast.json', { params: { user_id: $rootScope.session, chat_id: $stateParams.idchat } })
            },
            add: function (id) {
                return $http.get('data/volunteerpast.json', { params: { idfriends: id } })
            }
        };
    });
