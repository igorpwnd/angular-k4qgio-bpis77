import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy
} from "@angular/core";

import { AdDirective } from "./ad.directive";
import { AdItem } from "./ad-item";
import { AdComponent } from "./ad.component";

@Component({
  selector: "app-ad-banner",
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template #dynamic></ng-template>
      <button (click)="loadComponent(a)" *ngFor="let a of ads">
        {{ a.data.name || a.data.body }}
      </button>
    </div>
  `
})
export class AdBannerComponent {
  @Input() ads: AdItem[];
  @ViewChild("dynamic", { read: ViewContainerRef, static: true })
  viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}


  loadComponent(ad) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ad.component
    );
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent<any>(
      componentFactory
    );
    componentRef.instance.data = ad.data;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
