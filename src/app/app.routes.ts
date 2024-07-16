import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '@domains/auth/auth-layout/auth-layout.component';
import { LoginComponent } from '@domains/auth/pages/login/login.component';
import { RegisterComponent } from '@domains/auth/pages/register/register.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'auth'
    },
    {
        path:'auth',
        component:AuthLayoutComponent,
        children:[
            {
                path:'',
                pathMatch:'full',
                redirectTo:'login'
            },
            {
                path:'login',
                component:LoginComponent,
            },
            {
                path:'register',
                component:RegisterComponent
            }
        ]
    }
];
