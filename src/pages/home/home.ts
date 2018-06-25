import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { PlayasPage} from '../playas/playas';
import { AreasPage} from '../areas/areas';
import { SitiosPage} from '../sitios/sitios';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irPlayas(){
    this.navCtrl.push(PlayasPage)
  }

  irAreas(){
    this.navCtrl.push(AreasPage)
  }

  irSitios(){
    this.navCtrl.push(SitiosPage)
  }

}
