/*  File:app-routing.module.ts
    Description: Contains router action for Web Page
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SepHomeComponent } from './body/sep-home/sep-home.component';
import { SepToolsComponent } from './body/sep-tools/sep-tools.Component';
import { SepBrushesComponent } from './body/sep-brushes/sep-brushes.component';
import { SepMakeupComponent } from './body/sep-makeup/sep-makeup.component';
import { SepSingleProductViewComponent } from './components/sep-single-product-view/sep-single-product-view.component';
import { ProductFilterComponent } from './components/filter/product-filter/product-filter.component';
import { SepFilterPanelComponent } from './components/filter/sep-filter-panel/sep-filter-panel.component';
import { SepDisplayPaletteComponent } from './components/displayPalette/sep-display-palette/sep-display-palette.component';
import { SepSortViewPagenavComponent } from './components/sep-sort-view-pagenav/sep-sort-view-pagenav.component';
import { ComponentsGeneratorComponent } from './components/components-generator/components-generator.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'Home', pathMatch: 'full'},
  { path: 'Home', component: SepHomeComponent},
  { path: 'Brushes', component: SepBrushesComponent },
  { path: 'Makeup', component: SepMakeupComponent },
  { path: 'Tools', component: SepToolsComponent },
  { path: 'SingleProductView/:id', component: SepSingleProductViewComponent },
  { path: '**', redirectTo:'Home' }];

@NgModule({
  imports: [
    BrowserModule,
  	RouterModule.forRoot(appRoutes),
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    SepHomeComponent,
    SepBrushesComponent,
    SepMakeupComponent,
    SepToolsComponent,
    SepSingleProductViewComponent,
    ProductFilterComponent,
    SepFilterPanelComponent,
    SepDisplayPaletteComponent,
    SepSortViewPagenavComponent,
    ComponentsGeneratorComponent
  ]
})
export class AppRoutingModule { }
