import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.page.html',
  styleUrls: ['./addvendor.page.scss'],
})
export class AddvendorPage implements OnInit {

  constructor(translate: TranslateService) { }

  ngOnInit() {
  }

}
