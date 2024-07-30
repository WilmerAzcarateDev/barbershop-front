import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@domains/admin/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@domains/auth/auth-layout/auth-layout.component';
import { LoginComponent } from '@domains/auth/pages/login/login.component';
import { RegisterComponent } from '@domains/auth/pages/register/register.component';
import { HomeLayoutComponent } from '@domains/home/home-layout/home-layout.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'auth'
    },
    {
        path:'home',
        component:HomeLayoutComponent
    },
    {
        path:'admin',
        component:AdminLayoutComponent,
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
