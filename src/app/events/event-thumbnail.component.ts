import { Component, Input} from '@angular/core'; // Input was also imported to allow communication
import { IEvent } from './shared/event.model';
@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
        <div [routerLink] = "['/events',event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2> 
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch] = "event?.time">Time: {{event?.time}}
                <span *ngSwitchCase = "'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase = "'9:00 am'">(Normal Start)</span>
                <span *ngSwitchDefault>(Late Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div><!--we can use pipe to format the currency-->
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}},{{event.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl"> <!--you can use [hidden]="!event?.location" in the divs-->
                OnlineUrl: {{event?.onlineUrl}}
            </div>
        </div>
    </div>
`,
    styles: [`
    .bold { font-weight: bold;}
    .thumbnail {min-height:210px;}
    .pad-left {margin-left:10px;}
    .well div{color: #bbb;}
    `]
})
export class EventThumbnailComponent {
    @Input() event:any
    
}
