import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { SimplecalculatorComponent } from './simplecalculator/simplecalculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipcartApiComponent } from './flipcart-api/flipcart-api.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
// import { StudentDetailsService } from './student-details.service';
import { StudentDetailsComponent } from 'src/app/student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:'Home',component:HomeComponent},
    {path:'Sibling1',component:Sibling1Component},
    {path:'Parent',component:ParentComponent},
    {path:'Sibling2',component:Sibling2Component},
    {path:'Welcome',component:WelcomeComponent},
    {path:'Data Binding',component:DatabindingComponent},
    {path:'Directives',component:DirectivesComponent},
    {path:'Calculator',component:CalculatorComponent},
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'Simple Interest',component:SimplecalculatorComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountsComponent},
    {path:'Flipcart-API',component:FlipcartApiComponent},
    {path:'Create-Vehicle',component:CreateVehicleComponent},
    {path:'Create-Account',component:CreateAccountComponent},
    {path:'Student Cards',component:StudentComponent},
    {path:'Create-User',component:CreateUserComponent},
    {path:'Pinterest',component:PinterestComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {
      path:'payments',
      loadChildren: ()=> import('./payments/payments.module').then(m=>m.PaymentsModule)
    }
    
  ]},
];






@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
