import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'home' , component:HomeComponent},
    {path:'products' , component:ProductsComponent},
    {path:'blog' , component:BlogComponent},
    {path:'contact' , component:ContactComponent}
];
