import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook,FacebookLoginResponse  } from '@ionic-native/facebook';
import firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userProfile: any = null;
 FB_APP_ID: number = 1094726680670680;
  constructor(public navCtrl: NavController,private facebook: Facebook,private nativestorage: NativeStorage) {
    
      this.facebook.browserInit(this.FB_APP_ID, "v2.8.1");

  }

  facebookLogin(){

  
/*
      let permissions = new Array<string>();
    let nav = this.navCtrl;
    //the permissions your facebook app needs from the user
    permissions = ['public_profile','email'];

   this.facebook.getLoginStatus().then((Response)=>
   {
    this.facebook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      console.log(userId);
      
      this.facebook.apk('/'+ response.authResponse.userID + '?fields=id,name,gender',[]).then(response)
      {
                
        console.log("Faceook detail is: " + JSON.stringify(response));
        console.log("AAAAA");
      }
    })})}}
      
      */
      
      
    
   
   
      
/*
      console.log("userid is " + userId);
      console.log("params is: "+params);
      console.log("email is: "+)
      */
/*
  this.facebook.api("/me?fields=name,gender", [])
     .then(function(profile) {
       console.log("Profile: " + profile);
       profile.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
       this.NativeStorage.setItem('profile',
       {
         name: profile.name,
         gender: profile.gender,
         picture: profile.picture
       })
       .then(function(){
       }, function (error) {
         console.log(error);
       })
     }) */
  /*   
     alert('Logged in Successfully!');
     alert(JSON.stringify(response.authResponse));
     this.authResponse = response.authResponse;
     this.isLogged = true;
   }, (error) => {
     alert(error);
     console.log(error);
   });
*/ 
    
    this.facebook.login(['email']).then( (response) => {
        console.log("loading testing....");
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log("Firebase success123456: " + JSON.stringify(success));
            this.userProfile = success;
        })
        .catch((error) => {
            console.log("Firebase testing 123 by ms: " + JSON.stringify(error));
        });

    }).catch((error) => { "Facebook error78910: " +console.log(error) });

    
  }
}

