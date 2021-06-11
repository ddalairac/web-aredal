import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ui-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() title = ''
    @Input() display = false
    @Output() close: EventEmitter<boolean> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    onClose(){
        this.close.emit(false)
    }

}
