import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account-balance-detail',
  templateUrl: './account-balance-detail.component.html',
  styleUrls: ['./account-balance-detail.component.scss'],
})
export class AccountBalanceDetailComponent implements OnInit {

  constructor(private navCont:NavController) { }

  ngOnInit() {}
  go_to_url(url) {
    this.navCont.back()
  }
}
