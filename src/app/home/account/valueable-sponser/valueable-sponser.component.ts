import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-valueable-sponser',
  templateUrl: './valueable-sponser.component.html',
  styleUrls: ['./valueable-sponser.component.scss'],
})
export class ValueableSponserComponent implements OnInit {

  constructor(private navCont:NavController) { }

  ngOnInit() {}
  go_to_url(url) {
    this.navCont.back()
  }

}
