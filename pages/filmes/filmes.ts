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
    {
     nome:"Naruto Shippuden: O Filme",
     cartaz:"https://www.themoviedb.org/t/p/w220_and_h330_face/vaEX9f8ud7iF0G7EoyGxAyRNV1p.jpg",
     lancamento:"04 de ago de 2007 "
   },
   {
     nome:"A Voz do Silêncio",
     cartaz:"https://www.themoviedb.org/t/p/w220_and_h330_face/tML79svZV19q9z2CsvjyJr2Y9xZ.jpg",
     lancamento:"17 de set de 2016"
   },
   {
     nome:"O Hobbit: Uma Jornada Inesperada",
     cartaz:"https://www.themoviedb.org/t/p/w220_and_h330_face/asuSvb1MDN04HftUFxlp7i6ZHpV.jpg",
     lancamento:"26 de nov de 2012 "
   },
];
  constructor(public navCtrl: NavController) {

  }

}
