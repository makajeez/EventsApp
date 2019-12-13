import { Component } from '@angular/core';
import { Router } from  '@angular/router';
import { EventService } from './shared/index';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
      em { float: right;
           color: #E05C65;
           padding-left:10px;
         }
      .error input { background-color:#E3C3C5;}
      .error :: webkit-input-placeholder { color:#999;}
      .error ::-moz-placeholder { color:#999;}
      .error :-moz-placeholder { color:#999;}
      .error :ms-input-placeholder { color:#999;}
    `]
})

export class CreateEventComponent {
    isDirty = true;

    constructor(private router: Router, private eventService: EventService ) {

    }
    // ngOnInit(){
    //     this.event = {
    //         name: "Angular Kano",
    //         date: '11/11/2019',
    //         time: '10am',
    //         price: 800,
    //         location: {
    //             address: 'No 4 sabo bakin zuwo',
    //             city: 'Kano',
    //             country: 'Nigeria'
    //         },
    //         onlineUrl: 'http://AngularKano.com',
    //         imageUrl: 'http://google/image/makajeez.jpg'
    //     }
    // } used ngOnInit to populate the form by default
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
