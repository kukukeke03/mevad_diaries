import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-expense-sheet',
  templateUrl: './expense-sheet.component.html',
  styleUrls: ['./expense-sheet.component.scss'],
})
export class ExpenseSheetComponent implements OnInit {

  constructor(private navCont:NavController) { }

  ngOnInit() {}
  go_to_url(url) {
    this.navCont.back()
  }

}
