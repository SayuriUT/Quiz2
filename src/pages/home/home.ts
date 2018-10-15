import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartPage } from '../smart/smart';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  bocina = BocinaPage;
  tv = TvPage;
  smart = SmartPage;
  lampara = LamparaPage;

  constructor(public navCtrl: NavController) {

  }

  clickBoc(){
    this.navCtrl.push(this.bocina)
  }
  clickTV(){
    this.navCtrl.push(this.tv)
  }
  clickSmart(){
    this.navCtrl.push(this.smart)
  }
  clickLam(){
    this.navCtrl.push(this.lampara)
  }

}
