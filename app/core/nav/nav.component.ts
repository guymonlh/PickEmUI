import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { MessageService } from '../message.service';
import { ModalService } from '../modal/modal.service';

import { Week } from '../../models/week.model';
import { WeekService } from '../../shared/week.service';


@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
})
export class NavComponent implements OnInit {
  menuItems: Week[];
  selectedItem: Week;

  constructor(
    private weekService: WeekService,
    private router: Router,
    private messageService: MessageService,
    private modalService: ModalService
    ) {
  }

  ngOnInit() {
      this.getMenuItems();
   }

   getMenuItems() {
      this.weekService
        .getWeeks()
        .then(weeks => this.menuItems = weeks);
  }

  resetDb() {
    let msg = 'Are you sure you want to reset the database?';
    this.modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.messageService.resetDb();
      }
    });
  }

//  onSelect(menuItem: Week): void { 
//     this.selectedItem = menuItem;
//     console.log("selected Id:" + this.selectedItem.id)
//     this.router.navigate(['/detail', this.selectedItem.id]);
//   }


}
