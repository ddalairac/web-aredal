import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    constructor() { }

    tramitesDetalles=false
    compraDetalles=false
    obraDetalles=false
    administracionDetalles=false

    ngOnInit(): void {
    }



}
