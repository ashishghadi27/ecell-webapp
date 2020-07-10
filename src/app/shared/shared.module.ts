import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { TruncateTextPipe } from '../truncate-text.pipe';
import { SafePipe } from '../safe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    MaterialModule,
    RouterModule,
    NavbarComponent,
    TruncateTextPipe,
    SafePipe,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent, TruncateTextPipe, SafePipe]
})
export class SharedModule { 
  
}
