import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Week } from '../models/week.model';
import { WeekService } from '../models/week.service';
import { UserProfileService } from '../core/user-profile.service';

@Component({
  moduleId: module.id,
  selector: 'week-detail',
  templateUrl: 'week-detail.component.html',
  styleUrls: [ 'week-detail.component.css' ]
})
export class WeekDetailComponent implements OnInit {
  week: Week;

  constructor(
    private weekService: WeekService,
    private route: ActivatedRoute,
    private userProfileService: UserProfileService
  ) {}

   public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.weekService.getWeek(+params['id']))
      .subscribe(week => this.week = week);
  }
}
