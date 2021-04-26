import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GodzillaKongPage } from '../filmes/godzilla-kong/godzilla-kong';
import { MulherMaravilhaPage } from '../filmes/mulher-maravilha/mulher-maravilha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

mulherMaravilha = MulherMaravilhaPage;
godzillaKong = GodzillaKongPage;
  constructor(public navCtrl: NavController) {

  }

}
