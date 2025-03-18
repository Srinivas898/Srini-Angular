import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { FlipcartComponent } from './flipcart/flipcart.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'Home',component:HomeComponent},
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
    {path:'Flipcart',component:FlipcartComponent},
  ]},
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
