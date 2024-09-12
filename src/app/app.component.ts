import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule, Component, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {
  DxAccordionModule,
  DxSortableModule,
  DxCheckBoxModule,
  DxSliderModule,
  DxTagBoxModule,
  DxTemplateModule,
} from "devextreme-angular";
import { DxSortableTypes } from "devextreme-angular/ui/sortable";

import { Company, Service } from "./app.service";

@Component({
  selector: "demo-app",
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`],
  providers: [Service],
  preserveWhitespaces: true,
})
export class AppComponent {
  companies: Company[];

  constructor(service: Service) {
    this.companies = service.getCompanies();
  }

  onReorder(e: DxSortableTypes.ReorderEvent) {
    const company = this.companies.splice(e.fromIndex, 1)[0];
    this.companies.splice(e.toIndex, 0, company);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxAccordionModule,
    DxSortableModule,
    DxCheckBoxModule,
    DxSliderModule,
    DxTagBoxModule,
    DxTemplateModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
