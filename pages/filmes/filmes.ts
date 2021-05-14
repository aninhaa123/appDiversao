import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html'
})
export class FilmesPage {
filmes = [
   {
     nome:"Eurotrip: Passaporte para a Confusão",
     cartaz:"https://www.themoviedb.org/t/p/w94_and_h141_bestv2/rnzfFPhJZLdJS40nzvhNyfZ0ahD.jpg",
     lancamento:"20 de fevereiro de 2004"
   },
   {
     nome:"Minha Mãe é Uma Peça: O Filme",
     cartaz:"https://www.themoviedb.org/t/p/w94_and_h141_bestv2/5cF5v8N0wMALMcgEHpBZHyYQZDl.jpg",
     lancamento:"21 de junho de 2013"
   },
   {
     nome:"Pets Monstruosos",
     cartaz:"https://www.themoviedb.org/t/p/w220_and_h330_face/dkokENeY5Ka30BFgWAqk14mbnGs.jpg",
     lancamento:" 02 de abr de 2021"
   },
   {
     nome:"Demon Slayer: O Trem Infinito",
     cartaz:"https://www.themoviedb.org/t/p/w220_and_h330_face/m2FNRngyJMyxLatBMJR8pbeG2v.jpg",
     lancamento:"16 de out de 2020 "
   },
   {
     nome:"Give The Movie",
     cartaz:"https://www.themoviedb.org/t/p/w220_and_h330_face/fsEq2LddodaHvhs4mTZAaqOV6sR.jpg",
     lancamento:"22 de agosto de 2020 "
   },
];
  constructor(public navCtrl: NavController) {

  }

}
