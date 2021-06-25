import { Component, OnInit, ContentChildren, QueryList, Input, EventEmitter, Output, OnChanges, Directive, AfterContentInit } from '@angular/core';
import { SwiperItemDirectiveDirective } from './swiper-item/swiper-item-directive.directive';
import { SwiperItemComponent } from './swiper-item/swiper-item.component';

@Component({
    selector: 'swiper-gallery',
    templateUrl: './swiper-gallery.component.html',
    styleUrls: ['./swiper-gallery.component.scss']
})


export class SwiperGalleryComponent implements OnInit, OnChanges, AfterContentInit {


    @ContentChildren(SwiperItemDirectiveDirective) items!: QueryList<SwiperItemDirectiveDirective>;



    @Input() activeItem: number = 0;
    @Input() pagination: boolean = true;
    @Output() outActiveItem: EventEmitter<number> = new EventEmitter()
    //ngAfterViewChecked()

    constructor() { }
    ngOnInit() {
        this.goTo(this.activeItem)
    }

    ngOnChanges() {
        this.goTo(this.activeItem)

    }

    ngAfterContentInit() {
        console.log("this.items",this.items,this.items.length)
        
    }


    //ngAfterViewChecked()

    //wrapperWidth: number = 0
    //itemWidth: number = 0
    //startX: number = 0
    //deltaX: number = 0
    //totalItems: number = 0
    position: number = 0
    //activeItem: number = 0

    goNext() {
        console.log(this.items.length)
        if (this.activeItem < this.items.length - 1) {
            this.activeItem++
            this.goTo(this.activeItem)
        }
    }
    goPrev() {
        if (this.position < 0) {
            this.activeItem--
            this.goTo(this.activeItem)
        }
    }
    goTo(index: number) {
        this.position = (index * 100 * -1)
        this.activeItem = index
        this.outActiveItem.emit(this.activeItem)
        // console.log("position: " + this.position);
    }

    get preDisabled(): string | void {

        if (this.position >= 0) {
            return "disabled"
        }

    }
    get nextDisabled(): string | void {
        if (this.activeItem >= this.items.length - 1) {
            return "disabled"
        }
    }





    /* 
        getWidth(className) {
            try {
                //console.log(document.getElementsByClassName(className));
                //console.log(document.getElementsByClassName(className)[0]);
                //console.log(className + ' clientWidth', document.getElementsByClassName(className)[0].clientWidth);
                //console.log(className + 'scrollWidth', document.getElementsByClassName(className)[0].scrollWidth);
                //console.log(className + ' clientHeight', document.getElementsByClassName(className)[0].clientHeight);
                //console.log(className + 'scrollHeight', document.getElementsByClassName(className)[0].scrollHeight);
                return document.getElementsByClassName(className)[0].clientWidth
            } catch (err) {
                console.error("getWidth error: ",err);
            }
        }
        ngAfterViewInit() {
            this.wrapperWidth = this.getWidth('wrapper')
        }
        getOnSwipePosition(deltaX){
            this.wrapperWidth = this.getWidth('wrapper')
            this.itemWidth = this.wrapperWidth / this.totalItems
            //let move = this.startX + deltaX 
	
	
            this.position = this.itemWidth / 100 * deltaX
        	
            if (this.position > 0) {
                this.position = 0
                console.log("inicio")
            } else if (this.position < (this.items.length - 1)*-100) {
                this.position = (this.items.length - 1)*-100
                console.log("fin")
            } else if (this.position < ((this.activeItem + 1)* -100)) {
                this.position = (this.activeItem + 1)* -100
                console.log("fin der")
            } else if (this.position < (this.activeItem -1)*100) {
                console.log("fin der")
            } else if (this.position < (this.items.length - 1)*100) {
                console.log("fin")
            } else {  
	
            } 
        	
	
        }
        onPanStart(event: any): void {
            event.preventDefault();
            //console.log("event: ", event)
            this.startX = this.position;
            this.wrapperWidth = this.getWidth('wrapper')
            this.totalItems = this.items.length
        }
        onPanEnd(event: any): void {
	
            console.log("pan end: ", event)
        }
        onPan(event: any): void {
            event.preventDefault();
            //this.position = this.startX + event.deltaX;
            this.getOnSwipePosition(event.deltaX)
            this.deltaX = event.deltaX
        } */

}
