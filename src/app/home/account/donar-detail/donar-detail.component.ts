import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donar-detail',
  templateUrl: './donar-detail.component.html',
  styleUrls: ['./donar-detail.component.scss'],
})
export class DonarDetailComponent implements OnInit {

  constructor(private navCont:NavController) { }

  ngOnInit() {}
  go_to_url(url) {
    this.navCont.back()
  }

}
