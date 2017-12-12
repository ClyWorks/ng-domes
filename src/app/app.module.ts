import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftmeunComponent } from './leftmeun/leftmeun.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockComponent } from './stock/stock.component';
import { StartsComponent } from './starts/starts.component';

const routeConfig: Routes=[
  {path:'stock',component:StockComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftmeunComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    StockComponent,
    StartsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
