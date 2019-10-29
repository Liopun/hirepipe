var myApp = angular.module('myApp.controllers', []);

myApp.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }
  
});

//opened in tab views

//each of these controller recieves $ionicSideMenuDelegate in order to get SideMenu working
//Profile
myApp.controller('ProfileCtrl', function($scope, $ionicSideMenuDelegate) {
    
});

//Notifications
myApp.controller('notsCtrl', function($scope, $ionicSideMenuDelegate) {

});

//Endorsements
myApp.controller('endorCtrl', function($scope, $ionicSideMenuDelegate) {

});



//opened in master detail
myApp.controller('CalendarCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }
});

myApp.controller('LogoutCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }
});

myApp.controller('SurveyCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }
});

//subTabs controllers
myApp.controller('LoginCtrl', function($scope ,$ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);
});
myApp.controller('DashCtrl', function($scope ,$ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);
});

myApp.controller('employeeCtrl', function($scope ,$ionicSideMenuDelegate, $http, Data) {
    $ionicSideMenuDelegate.canDragContent(false);

    Data.get('http://localhost/HirePipe/v1/testIt')
    .success(function(data) {
        $scope.name = data.firstname +" "+ data.secondname;
        
    })

});

myApp.controller('edusignCtrl', function($scope, $ionicSideMenuDelegate, $location, $rootScope, $cordovaToast) {
    $ionicSideMenuDelegate.canDragContent(false);
    // Form data for the modal
    $scope.eduData = {
        school: '',
        degree: '',
        from: '',
        to: ''
    };
    $rootScope.aboveEduData = [];
    
    $scope.doNew = function(eduData) {
      var j = "";
      angular.forEach(eduData, function(value, key) {
            if(value.length == 0) {
                j = j + key + " ";
            }
      });
        
      if(j.length == 0) {
          
        if($rootScope.aboveEduData.length < 3){
            $cordovaToast.show('You have Saved Your Education Info. You can save again if You attended more than one school or University!' + j, 'long', 'center');
            $rootScope.aboveEduData.push(angular.copy($scope.eduData));
            $scope.eduData = {};
        } else {
            $cordovaToast.show('You have reached the maximum number of schools allowed to be saved', 'long', 'center');
            
        }
        
        
      } else {
        $cordovaToast.show('Please Check ' + j, 'long', 'center');
      }
      
    }
    
    $scope.canIcontinue = function(aboveEduData) {
        if(aboveEduData.length == 0) {
            $cordovaToast.show('Please Complete this form atleast once and click add button to save before you continue! ', 'long', 'center');
        } else {
            $location.path('/experience');
        }
    }
});

myApp.controller('expsignCtrl', function($scope ,$rootScope ,$ionicSideMenuDelegate, $cordovaDialogs, $location, $cordovaToast) {
    $ionicSideMenuDelegate.canDragContent(false);
    // Form data for the modal
    $scope.expData = {
        company: '',
        jobTitle: '',
        from: '',
        to: '',
        describeMe:''
    };
    $rootScope.aboveExpData = [];
    
    $scope.doNew = function(expData) {
      var j = "";
      angular.forEach(expData, function(value, key) {
            if(value.length == 0) {
                j = j + key + " ";
            }
      });
        
      if(j.length == 0) {       
            $cordovaToast.show('You have Saved Your Experience Info. You can save again if You worked for more than one company!' + j, 'long', 'center');
            $rootScope.aboveExpData.push(angular.copy($scope.expData));
            $scope.expData = {};
      } else {
//        $cordovaToast.show('Please Check ' + j, 'long', 'center');
          console.log('Please Check ' +j);
      }
      
    }
    
    $scope.canIcontinue = function(aboveEduData) {
        if(aboveEduData.length == 0) {
            var msg = "You haven't saved any Work Experience Info, Are you sure you want to continue without saving? To Save use the Add button.";
            $cordovaDialogs.confirm(msg, 'Confirm', ['Yes','No'])
            .then(function(buttonIndex) {
              // no button = 0, 'OK' = 1, 'Cancel' = 2
              if(buttonIndex == 1) {
                $location.path('/qualification');
              }
            });
            $cordovaToast.show('Please Fill this form atleast once and click add button to save before you continue! ', 'long', 'center');
        } else {
            $location.path('/qualification');
        }
    }
});


myApp.controller('quasignCtrl', function($scope ,$rootScope ,$ionicSideMenuDelegate, $location, $http, $cordovaToast) {
    $ionicSideMenuDelegate.canDragContent(false);
    // Form data for the modal
    $scope.quaData = {
        industry: '',
        status: '',
        shortNote: ''
    };
    $rootScope.aboveQuaData = [];
    
    $scope.canIcontinue = function(quaData) {
      var j = "";
      angular.forEach(quaData, function(value, key) {
            if(value.length == 0) {
                j = j + key + " ";
            }
      });
        
      if(j.length == 0) {       
            $rootScope.aboveQuaData.push(angular.copy($scope.quaData));
            $scope.quaData = {};
            $location.path('/welcome');
      } else {
            $cordovaToast.show('Please Check ' + j, 'long', 'center');
      }
      
    }
    
});

myApp.controller('picbrowserCtrl', function($jrCrop, $ionicPlatform, $rootScope, $scope, $cordovaCamera, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false);
    $ionicPlatform.ready(function() {
      $scope.selectPicture = function () {
            var options = {
                quality: 75,
                // destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300
             };

            $cordovaCamera.getPicture(options).then(function (imageUri) {
                // Success! Image data is here
                $scope.crop = function(imageUri) {
                    $jrCrop.crop({
                      url: imageUri,
                      width: 200,
                      height: 200,
                      title: 'Move and Scale'
                    }).then(function(canvas) {
                      document.querySelector('.cropped-canvas').appendChild(canvas);
                    });
                };
                
                $scope.crop(imageUri);

            }, function (err) {
                alert("An error occured: " + err);
            });
        }
    });
});

myApp.controller('signperCtrl', function($scope ,$rootScope ,$ionicSideMenuDelegate, $ionicModal, $timeout, $location, $http, Data, $cordovaToast) {
    $ionicSideMenuDelegate.canDragContent(false); 
    
    $scope.personal = {
        firstname: '',
        lastname: '',
        dob:'',
        sex:'',
        email:'',
        tel:'',
        password:'',
        retype_password:''
    };
    $scope.perInfo = {};
    $scope.perContinue = function (personal) {
        
        //check if there is an empty element in the submitted form
        var j = "";
        angular.forEach(personal, function(value, key) {
            console.log(value);
            if(value.length == 0) {
                j = j + key + " ";
            }
        });

        if(j.length == 0){
            if($scope.personal.password === $scope.personal.retype_password){
                $scope.personal.dob = $scope.personal.dob.getFullYear()+'-'+($scope.personal.dob.getMonth()+1)+'-'+$scope.personal.dob.getDate(); 
                $rootScope.abovePersonal = angular.copy($scope.personal);
                $location.path('/education');
                
            } else {
                $cordovaToast.show('Please retype your password correctly! ', 'long', 'center');
            }
        } else {
            $cordovaToast.show('Please Check ' + j, 'long', 'center');
        }
            
    }

});

myApp.controller('seekerCtrl', function($scope ,$ionicSideMenuDelegate, $ionicModal, $timeout, $location, $http, Data) {
  $ionicSideMenuDelegate.canDragContent(false);
  // Form data for the modal
  $scope.recover = {};
    
  //hold login results
  $scope.loginResults = {};
    
  //check login function
  $scope.checkLogin = function (user) {
        Data.post('http://localhost/HirePipe/v1/check', {
            user: user
        }).success(function(data) {
            
                if (data.status === "success") {
                    console.log(data.msg);
                    $location.path('/tab/profile');
                } else {
                    console.log(data.msg);
                }
                
        }).error(function(err) {
                console.log(err);
                alert(err);
        });
  };

  // Create the invite modal that we will use later
  $ionicModal.fromTemplateUrl('templates/forgotPsw.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.showRecover = modal;
  });

  // Triggered in the Invite modal to close it
  $scope.closeRecover = function() {
    $scope.showRecover.hide();
  };

  // Open the Invite modal
  $scope.openRecover = function() {
    $scope.showRecover.show();
  };

  // Perform the login action when the user submits the Invite form
  $scope.doRecover = function() {
    
    console.log('Doing login', $scope.recover);
    $timeout(function() {
      $scope.closeRecover();
    }, 800);
  };

});

myApp.controller('inviteCtrl', function($ionicPlatform, $scope, $ionicSideMenuDelegate, $ionicModal, $timeout, $cordovaToast) {
  $ionicSideMenuDelegate.canDragContent(false);
  
  // Form data for the modals
  $scope.invite = {};
  $scope.docs = {};

  // Create the invite modal that we will use later
  $ionicModal.fromTemplateUrl('templates/hireInvite.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.showInvite = modal;
  });

  // Create the docs modal that we will use later
  $ionicModal.fromTemplateUrl('templates/hireDoc.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.showDoc = modal;
  });

  // Triggered in the Invite modal to close it
  $scope.closeInvite = function() {
    $scope.showInvite.hide();
    if ($scope.invite != "") {
      $cordovaToast.show('The invitation has been sent!', 'long', 'center');
    }
    
  };

  // Triggered in the docs modal to close it
  $scope.closeDoc = function() {
    $scope.showDoc.hide();
    if ($scope.docs != "") {
      $cordovaToast.show('The documents has been sent to your email!', 'long', 'center');
    }
  };

  // Open the Invite modal
  $scope.openInvite = function() {
    $scope.invite = {};
    $scope.showInvite.show();
  };

  // Open the Docs modal
  $scope.openDoc = function() {
    $scope.docs = {};
    $scope.showDoc.show();
  };

  // Perform the login action when the user submits the Invite form
  $scope.doInvite = function() {
    
    console.log('Doing login', $scope.invite);
    $timeout(function() {
      $scope.closeInvite();
    }, 800);
  };

  // Perform the login action when the user submits the Docs form
  $scope.doDoc = function() {
    
    console.log('Doing login', $scope.docs);
    $timeout(function() {
      $scope.closeDoc();
    }, 800);
  };



});


myApp.controller('tellCtrl', function($ionicPlatform, $scope, $ionicSideMenuDelegate, $cordovaSocialSharing) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }

  $scope.shareViaWhatsApp = function(message, image, link) {
     $cordovaSocialSharing
       .shareViaWhatsApp(message, image, link)
       .then(function(result) {
        alert(result);
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
          alert("Cannot share on WhatsApp");
       });
   }

    $scope.shareViaFacebook = function(message, image, link) {
     $cordovaSocialSharing
       .shareViaFacebook(message, image, link)
       .then(function(result) {
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
         alert("Cannot share on Facebook");
       });
   }

   $scope.shareViaSMS = function(message, number) {
     $cordovaSocialSharing
       .shareViaSMS(message, number)
       .then(function(result) {
        alert(result);
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
       });
   }

   $scope.shareViaEmail = function(message, subject, toArr, bccArr, file) {
     $cordovaSocialSharing
       .shareViaEmail(message, subject, toArr, bccArr, file)
       .then(function(result) {
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
       });
   }

});
myApp.controller('contactCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }
});
myApp.controller('aboutCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  }
});


//sub-layers
myApp.controller('updateCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('personalCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('experienceCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('educationCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('qualificationsCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('endoProfileCtrl', function($scope, $ionicSideMenuDelegate) {

});




myApp.controller('ProAgendaCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('ProContactCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('ProEmergencyCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('AcaDetailsCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('AcaSubDetailsCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('DisDetailsCtrl', function($scope, $ionicSideMenuDelegate) {

});
myApp.controller('DisListCtrl', function($scope, $ionicSideMenuDelegate, Discipline) {
  $scope.discipline = Discipline.allD();
});

myApp.controller('DisAddCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('MsgInboxCtrl', function($scope, $ionicSideMenuDelegate, Messages) {
  $scope.messages = Messages.allM();
});

myApp.controller('MsgInboxDetailsCtrl', function($scope, $ionicSideMenuDelegate, Messages, $stateParams) {
   $scope.inbx_detls = Messages.getM($stateParams.msgId);
});

myApp.controller('MsgSentCtrl', function($scope, $ionicSideMenuDelegate, sentMessages) {
  $scope.sentmessages = sentMessages.allSM();
});

myApp.controller('MsgSentDetailsCtrl', function($scope, $ionicSideMenuDelegate, sentMessages, $stateParams) {
  $scope.sent_detls = sentMessages.getSM($stateParams.sentmsgId);
});

myApp.controller('MsgComposeCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('NotsPostCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('NotsViewCtrl', function($scope, $ionicSideMenuDelegate, Notifications) {
	$scope.notifications = Notifications.allN();
	$scope.remove = function(info) {
    Notifications.removeN(info);
  }
});

myApp.controller('NotsViewDetailsCtrl', function($scope, $ionicSideMenuDelegate, Notifications, $stateParams) {
    $scope.infos = Notifications.getN($stateParams.notsId);
});

// myApp.controller('NotsViewDetailsCtrl', function($scope, $ionicSideMenuDelegate, Notifications) {
// 	//$scope.infos = Notifications.getN($stateParams.notsId);
//   }
// });

myApp.controller('CalEventCtrl', function($scope, $ionicSideMenuDelegate) {

});

myApp.controller('SvyStatCtrl', function($scope, $ionicSideMenuDelegate, Survey) {
  $scope.survey = Survey.allS();
});

myApp.controller('SvyRespondCtrl', function($scope, $ionicSideMenuDelegate, Survey) {
  $scope.survey = Survey.allS();
});


myApp.controller('SvyStatDetailsCtrl', function($scope, $ionicSideMenuDelegate) {

});