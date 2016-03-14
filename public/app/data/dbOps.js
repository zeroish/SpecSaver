
angular.module('app').factory('dbOps', function($http, $q, mvQuote, mvVote, mvProject, mvRelease, mvFeature) {
  return {
    createQuote: function(newQuoteData) {
      var newQuote = new mvQuote(newQuoteData);
      var dfd = $q.defer();

      newQuote.$save().then(function() {
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    createFeature: function(newFeatureData) {
      var newFeature = new mvFeature(newFeatureData);
      var dfd = $q.defer();

      newFeature.$save().then(function() {
          dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },

    createRelease: function(newReleaseData) {
      var newRelease = new mvRelease(newReleaseData);
      var dfd = $q.defer();

      newRelease.$save().then(function() {

        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },
    viewReleases: function() {
      var releases = mvRelease.query();

      return releases;
    },
    createVote: function(newVoteData) {
      var newVote = new mvVote(newVoteData);
      var dfd = $q.defer();

      newVote.$save().then(function() {
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },
    
    createProject: function(newProjectData) {
      var newProject = new mvProject(newProjectData);
      var dfd = $q.defer();

      newProject.$save().then(function() {
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    }
  }
});