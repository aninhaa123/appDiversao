import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MulherMaravilhaPage } from '../filmes/mulher-maravilha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

mulherMaravilha = MulherMaravilhaPage;
  constructor(public navCtrl: NavController) {

  }

}
