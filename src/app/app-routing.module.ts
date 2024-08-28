import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './componenets/parent/parent.component';
import { ProductComponent } from './Service/product/product.component';
import { ObservatrutComponent } from './componenets/observatrut/observatrut.component';
import { FormTestComponent } from './componenets/form-test/form-test.component';
import { CsvFileComponent } from './componenets/csv-file/csv-file.component';
import { SendComponent } from './bahavior/send/send.component';
import { RecieveComponent } from './bahavior/recieve/recieve.component';

const routes: Routes = [ 
  {path: 'user', component: UserComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'product', component: ProductComponent},
  { path: 'obervable', component: ObservatrutComponent},
  { path: 'formTest', component: FormTestComponent},
  { path: 'csv-file', component: CsvFileComponent},
  { path: 'send', component: SendComponent},
  { path: 'recieve', component: RecieveComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
