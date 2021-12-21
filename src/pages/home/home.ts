import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    ) {

  }




  opne_inapp() {
    // this.alert.presentToast('msizantest in app button clicked','bottom');
    const browser = this.iab.create('https://app-api.influen.site/button.php', '_blank','location=no,clearsessioncache=yes');
    browser.show();
    // this.alert.presentToast('miszantest created -----','bottom');
    browser.insertCSS({code:"body{background-color:white;height:100vh;width:100%;}"});
    // browser.show();
    browser.on('loadstop').subscribe(event => {  
      console.log('load stop callled........................');
      // var interval = setInterval(() => {
        browser.executeScript({code: "JSON.parse(localStorage.getItem('paypalsession'))"})
        .then((session) => {      
          // JSON.parse(localStorage.getItem('paypalsession'));
          console.log('inapp =========',session);
          if(session&&session!=null){
              if(session[0].status==1){
                browser.close();
                browser.executeScript({code: "localStorage.removeItem('paypalsession')"}).then(() =>{});
                // clearInterval(interval);
                let Data = {
                  paypal_id:session[0].email,
         
                }
                alert(session[0].email);
              } else {
              }
            // },1000) 
          }         
        });
      // }, 1000);
   });
  }





  opne_inapp2() {
    // this.alert.presentToast('msizantest in app button clicked','bottom');
    const browser = this.iab.create('https://app-api.influen.site/button.php', '_system','location=no,clearsessioncache=yes');
    browser.show();
    // this.alert.presentToast('miszantest created -----','bottom');
    browser.insertCSS({code:"body{background-color:white;height:100vh;width:100%;}"});
    // browser.show();
    browser.on('loadstop').subscribe(event => {  
      console.log('load stop callled........................');
      // var interval = setInterval(() => {
        browser.executeScript({code: "JSON.parse(localStorage.getItem('paypalsession'))"})
        .then((session) => {      
          // JSON.parse(localStorage.getItem('paypalsession'));
          console.log('inapp =========',session);
          if(session&&session!=null){
              if(session[0].status==1){
                browser.close();
                browser.executeScript({code: "localStorage.removeItem('paypalsession')"}).then(() =>{});
                // clearInterval(interval);
                let Data = {
                  paypal_id:session[0].email,
         
                }
                alert(session[0].email);
              } else {
              }
            // },1000) 
          }         
        });
      // }, 1000);
   });
  }



  opne_inapp3() {
    // this.alert.presentToast('msizantest in app button clicked','bottom');
    const browser = this.iab.create('https://app-api.influen.site/button.php', '_self','location=no,clearsessioncache=yes');
    browser.show();
    // this.alert.presentToast('miszantest created -----','bottom');
    browser.insertCSS({code:"body{background-color:white;height:100vh;width:100%;}"});
    // browser.show();
    browser.on('loadstop').subscribe(event => {  
      console.log('load stop callled........................');
      // var interval = setInterval(() => {
        browser.executeScript({code: "JSON.parse(localStorage.getItem('paypalsession'))"})
        .then((session) => {      
          // JSON.parse(localStorage.getItem('paypalsession'));
          console.log('inapp =========',session);
          if(session&&session!=null){
              if(session[0].status==1){
                browser.close();
                browser.executeScript({code: "localStorage.removeItem('paypalsession')"}).then(() =>{});
                // clearInterval(interval);
                let Data = {
                  paypal_id:session[0].email,
         
                }
                alert(session[0].email);
              } else {
              }
            // },1000) 
          }         
        });
      // }, 1000);
   });
  }
}
