var myModule = angular.module('myModule', []);

myModule.factory('UserApi', function($http, $q, ApiEndpoint){
  var loginPost = function(useremail, password) {
    return $http({
      method: 'post',
      url: ApiEndpoint.url + '/api-x/users/login', 
      data: {
        useremail: useremail,
        password: password
      }
    });
  }

  var registerPost = function(/* TODO Missing parameters */) {
    var q = $q.defer();

    $http.post(ApiEndpoint.url + '/api-x/users/register', {
      /* TODO Missing data */
    })
    .success(function (data) { q.resolve(data); })
    .error(function (error) { q.reject(error); });

    return q.promise;
  }

  var uidGet = function(email){
    return $http({
      method: 'get',
      url: ApiEndpoint.url + '/api-x/users/getuid',
      data: {
        email: email
      }
    });
  }

  return {
    loginPost: loginPost,
    registerPost: registerPost
  }
});

myModule.factory('Session', function($resource){
  return $resource('http://localhost:5000/sessions/:sessionId');
});

myModule.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

myModule.factory('JSONData', function ($http, $rootScope, $stateParams) {

  return {
    all: function () {
      return $http.get('lib/somedata.json', { params: { user_id: $rootScope.session } })
    },
    get: function () {
      return $http.get('lib/somedata.json', { params: { user_id: $rootScope.session, chat_id: $stateParams.idchat } })
    },
    add: function (id) {
      return $http.get('lib/somedata.json', { params: {idfriends:id}})
    }
  };
});

myModule.factory('EVENTS', function ($http, $rootScope, $stateParams) {

  return {
    all: function () {
      return $http.get('lib/events.json', { params: { user_id: $rootScope.session } })
    },
    get: function () {
      return $http.get('lib/events.json', { params: { user_id: $rootScope.session, chat_id: $stateParams.idchat } })
    },
    add: function (id) {
      return $http.get('lib/events.json', { params: {idfriends:id}})
    }
  };
});