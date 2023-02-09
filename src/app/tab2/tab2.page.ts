import { Component } from '@angular/core';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public env: EnvService) {
    console.log(this.env.APP_USER_ID);
  }

}
