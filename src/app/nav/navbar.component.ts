import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IEvent } from '../events';

@Component({
    selector: 'nav-bar',
    template: `
<div class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >EventsApp</a>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li>
          <a [routerLink]="['/events']"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}">All Events</a>
        </li>
        <li>
        <a [routerLink]="['/events/new']"
        routerLinkActive="active">Create Event</a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
            Events
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li >
              <a href="">Angular Connect</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="navbar-header navbar-right">
        <ul class="nav navbar-nav">
          <li><a *ngIf="!auth.isAuthenticated()" [routerLink]="['user/login']">Login</a>
            <a *ngIf="auth.isAuthenticated()" [routerLink]="['user/profile']">Welcome {{auth.currentUser.firstName}}</a>
          </li>
        </ul>
      </div>
      <form id="searchForm"  class="navbar-form navbar-right"  >
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search Sessions">
        </div>
        <button class="btn btn-default">
          Search
        </button>
      </form>
    </div>
</div>

 `
,
styles: [`
  .nav .navbar-nav {font-size: 15px;}
  #searchForm {margin-right: 10px;}
  @media (max-width:500px) {#searchForm {display:none;}}
  li > a.active { color: #f97924; }
`]
})
export class NavBarComponent {
  constructor(public auth: AuthService) {

  }
  
}
