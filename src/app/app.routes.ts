import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

export const routes: Routes = [
    {
        path:"login",component:LoginPageComponent
    },
    {
        path:'reg',component:RegisterPageComponent
    },
    {
        path:'users',component:UsersPageComponent
    }
];
