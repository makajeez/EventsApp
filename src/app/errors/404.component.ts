import { Component } from '@angular/core';

@Component({
  template: `
    <div style="text-align:center;">
      <img src="../assets/images/404.png">
    </div>
    <h1 class="errorMessage">404 NOT FOUND BUT,</h1>
    <div style="text-align:center;">
      <img src="../assets/images/404-1.png" width='150px' height="100px">
    </div>
  `,
  styles: [`
    .errorMessage {
      margin-top:10px;
      font-size: 100px;
      text-align: center;
    }
  
    `]
})
export class Error404Component {
  constructor() {

  }

}
