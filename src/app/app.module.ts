import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { AboutModule } from '@app/about/about.module';
import { AuthModule } from '@app/auth/auth.module';
import { ContactModule } from '@app/contact/contact.module';
import { InstallersModule } from '@app/installers/installers.module';
import { ManufacturersModule } from '@app/manufacturers/manufacturers.module';
import { SupportModule } from '@app/support/support.module';

import { AppComponent } from '@app/app.component';
import { NavComponent } from '@app/core/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AboutModule,
    AuthModule,
    ContactModule,
    InstallersModule,
    ManufacturersModule,
    SupportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
