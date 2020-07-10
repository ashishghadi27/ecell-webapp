import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CouncilComponent } from './council/council.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'council', component: CouncilComponent },
  { path: 'events', component: EventsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register/:id', component: RegistrationComponent },
]

@NgModule({
  declarations: [HomePageComponent, CouncilComponent, EventsComponent, BlogComponent, ContactComponent, RegistrationComponent],
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
