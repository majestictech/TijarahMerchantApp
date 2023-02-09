import { Component } from '@angular/core';
import { EnvService } from '../services/env.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public env : EnvService,  public router: Router) {
    console.log(this.env.APP_USER_ID);
    if(sessionStorage.getItem == null){
      console.log('as');
      this.router.navigate(['/login']);
    }
  }
}
