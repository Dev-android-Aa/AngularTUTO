import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './componenets/parent/parent.component';
import { ChildComponent } from './componenets/child/child.component';
import { ProductComponent } from './Service/product/product.component';
import { ObservatrutComponent } from './componenets/observatrut/observatrut.component';
import { FormTestComponent } from './componenets/form-test/form-test.component';
import { CsvFileComponent } from './componenets/csv-file/csv-file.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    ObservatrutComponent,
    FormTestComponent,
    CsvFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
