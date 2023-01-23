import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.page.html',
  styleUrls: ['./edititem.page.scss'],
})
export class EdititemPage implements OnInit {

  constructor(translate: TranslateService) { }

  ngOnInit() {
  }

}
