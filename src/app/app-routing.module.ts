import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeDashboardComponent } from "./shared/component/home-dashboard/home-dashboard.component";
import { UserDashboardComponent } from "./shared/component/user-dashboard/user-dashboard.component";
import { ProductsDashboardComponent } from "./shared/component/products-dashboard/products-dashboard.component";
import { FairsDashboardComponent } from "./shared/component/fairs-dashboard/fairs-dashboard.component";
import { ProductComponent } from "./shared/component/products-dashboard/product/product.component";
import { ProductFormComponent } from "./shared/component/products-dashboard/product-form/product-form.component";
import { UserFormComponent } from "./shared/component/user-dashboard/user-form/user-form.component";
import { UserDetailsComponent } from "./shared/component/user-dashboard/user-details/user-details.component";



//http://localhost:4200 //baseurl
const routes: Routes= [
    {
        path:'home',//http://localhost:4200
        component:HomeDashboardComponent
    },
    {
        path:'',
       redirectTo:'home',
       pathMatch:'full'
    },
   
     {
        path:'users',
        component:UserDashboardComponent
    },
     {
        path:'users/addUser',
        component:UserFormComponent
    },
     {
        path:'users/:UserId',
        component:UserDetailsComponent
    },
     {
        path:'users/:UserId/edit',    ///edit mode mai hoga
        component:UserFormComponent
    },
    {
        path:'products',
        component:ProductsDashboardComponent
    },
    {
        path:'products/addProduct',
        component:ProductFormComponent
    },
     {
        path:'products/:productId',
        component:ProductComponent
    },

     {
        path:'products/:productId/edit',
        component:ProductFormComponent
    },
     
    {
        path:'fairs',
        component:FairsDashboardComponent
    }


    
]
@NgModule({ 
    imports:[RouterModule.forRoot(routes)] ,
    exports:[RouterModule] 

})


export class AppRoutingModule{

}

