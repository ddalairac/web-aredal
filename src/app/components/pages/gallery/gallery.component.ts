import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemsArray = [
    { alt: "centro_historico 1", img: "centro_historico1.jpg" },
    { alt: "centro_historico 2", img: "centro_historico2.jpg" },
    { alt: "centro_historico 3", img: "centro_historico3.jpg" },
    { alt: "centro_historico 4", img: "centro_historico4.jpg" },
    { alt: "centro_historico 5", img: "centro_historico5.jpg" },
    // { alt: "centro_historico 6", img: "centro_historico6.heic" },
    { alt: "moderna 1", img: "moderna1.jpg" },
    { alt: "moderna 2", img: "moderna2.jpg" },
    { alt: "moderna 3", img: "moderna3.jpg" },
    // { alt: "moderna 4", img: "moderna4.heic" },
    // { alt: "moderna 5", img: "moderna5.heic" },
    // { alt: "playas 1", img: "playas1.jpg" },
    { alt: "playas 2", img: "playas2.jpg" },
    { alt: "playas 3", img: "playas3.jpg" },
    // { alt: "playas 4", img: "playas4.jpg" },
    // { alt: "playas 5", img: "playas5.jpg" },
    // { alt: "playas 6", img: "playas6.jpg" },
    // { alt: "playas 7", img: "playas7.heic" },
    // { alt: "playas 8", img: "playas8.heic" },
    { alt: "playas 9", img: "playas9.jpg" },
    // { alt: "playas 10", img: "playas10.jpg" },
    // { alt: "playas 11", img: "playas11.jpg" },
    // { alt: "playas 12", img: "playas12.jpg" },
    // { alt: "playas 13", img: "playas13.jpg" },
    { alt: "varias 1", img: "varias1.jpg" },
    // { alt: "varias 2", img: "varias2.jpg" },
    // { alt: "varias 3", img: "varias3.jpg" },
    { alt: "varias 4", img: "varias4.jpg" },
    { alt: "varias 5", img: "varias5.jpg" },
    // { alt: "varias 6", img: "varias6.jpg" },
    { alt: "varias 7", img: "varias7.jpg" },
    // { alt: "varias 8", img: "varias8.jpg" },
    // { alt: "varias 9", img: "varias9.jpeg" },
  ];
}
