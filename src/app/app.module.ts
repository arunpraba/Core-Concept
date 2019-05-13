import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ContentComponent } from './content/content.component';
import { AuthformComponent } from './content/authform/authform.component';
import { RememberComponent } from './content/remember/remember.component';
<<<<<<< HEAD
import { AuthMessageComponent } from './content/auth-message/auth-message.component';
=======
>>>>>>> 87cec6498cb06f44f196dd41cb073f01037a87ca
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AuthformComponent,
<<<<<<< HEAD
    RememberComponent,
    AuthMessageComponent
=======
    RememberComponent
>>>>>>> 87cec6498cb06f44f196dd41cb073f01037a87ca
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
