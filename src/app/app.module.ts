import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

import { SignupComponent } from './pages/signup/signup.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CreateComponent } from './admin/create/create.component';
import { FetchComponent } from './admin/fetch/fetch.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { CartComponent } from './pages/cart/cart.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { TableComponent } from './pages/table/table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
 
    SignupComponent,
    ResetpasswordComponent,
    PaymentComponent,
    CreateComponent,
    FetchComponent,
    UpdateComponent,
    DeleteComponent,
    CartComponent,
    AdminloginComponent,
    UserhomeComponent,
    TableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,CarouselModule.forRoot(),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
