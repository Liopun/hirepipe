var app = angular.module('myApp', ['ionic', 'myApp.controllers', 'myApp.services', 'ngCordova', 'jrCrop']);

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
  $ionicConfigProvider.tabs.position('bottom'); //tabs position
  $stateProvider
    

    .state('login', {
      url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
    })
    .state('hiring', {
      url: '/hiring',
          templateUrl: 'templates/hiring.html',
          controller: ''
    })
    
    .state('tabsHiring', {
      url: '/tabHiring',
          templateUrl: 'templates/hiringTabs.html',
          controller: 'employeeCtrl'
    })
    
    .state('inviteOut1', {
      url: '/inviteOut1',
          templateUrl: 'templates/InviteOut1.html',
          controller: 'inviteCtrl'
          
    })

    .state('reco', {
      url: '/reco',
          templateUrl: 'templates/reco.html',
          controller: 'inviteCtrl'
          
    })
    .state('recoID', {
      url: '/reco/1',
          templateUrl: 'templates/recoID.html',
          controller: 'inviteCtrl'
          
    })
     .state('tell', {
      url: '/tell',
          templateUrl: 'templates/tell.html',
          controller: 'tellCtrl'
    })
     .state('about', {
      url: '/about',
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
    })
      .state('contact', {
      url: '/contact',
          templateUrl: 'templates/contact.html',
          controller: 'contactCtrl'
    })

    .state('inviteOut2', {
      url: '/inviteOut2',
          templateUrl: 'templates/InviteOut2.html',
          controller: ''
          
    })

    .state('inviteOut3', {
      url: '/inviteOut3',
          templateUrl: 'templates/InviteOut3.html',
          controller: ''
          
    })
    .state('jobseeker', {
      url: '/jobseeker',
          templateUrl: 'templates/jobseeker.html',
          controller: 'seekerCtrl'
    })
    .state('sign', {
      url: '/sign',
          templateUrl: 'templates/sign.html',
          controller: 'signperCtrl'
    })
    .state('education', {
      url: '/education',
          templateUrl: 'templates/signEducation.html',
          controller: 'edusignCtrl'
    })
    .state('experience', {
      url: '/experience',
          templateUrl: 'templates/signExperience.html',
          controller: 'expsignCtrl'
    })
    .state('qualification', {
      url: '/qualification',
          templateUrl: 'templates/signQualifications.html',
          controller: 'quasignCtrl'
    })
    .state('welcome', {
      url: '/welcome',
          templateUrl: 'templates/welcome.html',
          controller: 'picbrowserCtrl'
    })
    .state('welcomeDocs', {
      url: '/uploadDocs',
          templateUrl: 'templates/welcomeDocs.html',
          controller: ''
    })
    .state('tabs', {
      url: '/tab',
      controller: 'TabsCtrl',
      templateUrl: 'tabs.html'
    })
    .state('tabs.profile', {
      url: '/profile',
      views: {
        'profile-tab': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    }) 
    .state('tabs.update', {
      url: '/profile/update',
      views: {
        'profile-tab': {
          templateUrl: 'templates/update.html',
          controller: 'updateCtrl'
        }
      }
    })
    .state('tabs.personal', {
      url: '/profile/update/personal',
      views: {
        'profile-tab': {
          templateUrl: 'templates/proPersonal.html',
          controller: 'personalCtrl'
        }
      }
     })
    .state('tabs.experience', {
      url: '/profile/update/experience',
      views: {
        'profile-tab': {
          templateUrl: 'templates/proExperience.html',
          controller: 'experienceCtrl'
        }
      }
    })
    .state('tabs.education', {
      url: '/profile/update/education',
      views: {
        'profile-tab': {
          templateUrl: 'templates/proEducation.html',
          controller: 'educationCtrl'
        }
      }
    })
    .state('tabs.qualifications', {
      url: '/profile/update/qualifications',
      views: {
        'profile-tab': {
          templateUrl: 'templates/proQualifications.html',
          controller: 'qualificationsCtrl'
        }
      }
    })
    
    .state('tabs.notification', {
      url: '/notification',
      views: {
        'notification-tab': {
          templateUrl: 'templates/notifications.html',
          controller: 'notsCtrl'
        }
      }
    })
    .state('tabs.documents', {
      url: '/notification/documents',
      views: {
        'notification-tab': {
          templateUrl: 'templates/documents.html',
          controller: 'notsCtrl'
        }
      }
    })
    .state('tabs.invitation', {
      url: '/notification/invitation',
      views: {
        'notification-tab': {
          templateUrl: 'templates/invitation.html',
          controller: 'notsCtrl'
        }
      }
    })
    .state('tabs.enrequest', {
      url: '/notification/enrequest',
      views: {
        'notification-tab': {
          templateUrl: 'templates/enrequest.html',
          controller: 'notsCtrl'
        }
      }
    })
    
    .state('tabs.endorsement', {
      url: '/endorsement',
      views: {
        'endorsement-tab': {
          templateUrl: 'templates/endorsements.html',
          controller: 'endorCtrl'
        }
      }
    })
    .state('tabs.endoprofile', {
      url: '/endorsement/profile',
      views: {
        'endorsement-tab': {
          templateUrl: 'templates/endoProfile.html',
          controller: 'endoProfileCtrl'
        }
      }
    })
    .state('tabs.reco', {
      url: '/reco',
      views: {
        'reco-tab': {
          templateUrl: 'templates/recommendation.html',
          controller: 'endorCtrl'
        }
      }
    });


  $urlRouterProvider.otherwise('/welcome');
});

function a() {
    document.getElementById("t").value="Request sent";
    }
function tick() {
    document.getElementById("y").value="✔ Endorsed";
    document.getElementById("n").value="Deny";
    }
    function cross() {
    document.getElementById("n").value="✖ Denied";
    document.getElementById("y").value="Endorse";
    }
    function yes() {
    document.getElementById("Y").value="✔ Accepted";
    document.getElementById("N").value="Deny";
    }
    function no() {
    document.getElementById("N").value="✖ Denied";
    document.getElementById("Y").value="Accept";
    }
    