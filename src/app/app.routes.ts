import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Galery } from './features/galery/galery';
import { Form } from './shared/form/form';


export const routes: Routes = [
    {path:"home", component:Home},
    {path:"galery", component:Galery},
    {path:"registro", component:Form},

    {path:"", redirectTo:"/home", pathMatch:"full"}
];
