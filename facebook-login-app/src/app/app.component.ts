import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = HomePage;

 
 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private nativestorage: NativeStorage ) {

     firebase.initializeApp({
        apiKey: "AIzaSyDsp48h4P2krves88IZPnDHhloEKfhtmOY",
        authDomain: "fb-connect-2e50a.firebaseapp.com",
        databaseURL: "https://fb-connect-2e50a.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "173955695427"
    });


    

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        let env = this;
      this.nativestorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        //env.nav.push(HomePage);
        splashScreen.hide();
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        //env.nav.push(HomePage);
        splashScreen.hide();
      });

      statusBar.styleDefault();
      splashScreen.hide();

    });

    


  }
}

  