import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      { component: HeroProfileComponent, data: {name: 'Bombasto', bio: 'Brave as they come'}},

      { component: HeroProfileComponent, data: {name: 'Dr IQ', bio: 'Smart as they come'}},

      { component: HeroJobAdComponent, data:   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}},

      { component: HeroJobAdComponent, data:   {headline: 'Openings in all departments',
                                        body: 'Apply today'}},
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/