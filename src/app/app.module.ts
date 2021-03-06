import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PostcreateComponent } from './content/post/post-create/post-create.component';
import { BookComponent } from './content/book/book.component';
import { MenulistComponent } from './content/menu/menu-list/menu-list.component';
import { MenucreateComponent } from './content/menu/menu-create/menu-create.component';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from './error-intercep';
import { AuthInterceptor } from './auth/auth-interceptor';
import { PostlistComponent } from './content/post/post-list/post-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PostcreateComponent,
    BookComponent,
    MenulistComponent,
    PostlistComponent,
    LoginComponent,
    SignupComponent,
    MenucreateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})


export class AppModule {}
