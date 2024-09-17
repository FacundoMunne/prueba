import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { HomeComponent } from './home/home.component';
import { ViewPetComponent } from './view-pet/view-pet.component';
import { ViewClientPetComponent } from './view-client-pet/view-client-pet.component';
import {ViewAllPetComponent} from './view-all-pet/view-all-pet.component';
import {ViewAllClientComponent} from './view-all-client/view-all-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import { ViewClientComponent } from './view-client/view-client.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'ViewPet/:petId', component: ViewPetComponent},
    {path: 'AddPet', component: AddPetComponent},
    {path: 'EditPet/:petId', component: EditPetComponent},
    {path: 'ViewClientPet', component:ViewClientPetComponent},
    {path: 'ViewAllPet', component: ViewAllPetComponent},
    {path: 'ViewAllClients', component: ViewAllClientComponent},
    {path: 'AddClient', component: AddClientComponent },
    {path: 'EditClient', component : EditClientComponent},
    {path: 'ViewClient/ :clientId', component : ViewClientComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
