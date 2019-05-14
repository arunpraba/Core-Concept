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
import { AuthMessageComponent } from './content/auth-message/auth-message.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { InputComponent } from './dynamic-component/input/input.component';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AuthformComponent,
    RememberComponent,
    AuthMessageComponent,
    DynamicComponentComponent,
    InputComponent
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
  bootstrap: [AppComponent],
  entryComponents: [InputComponent]
})
export class AppModule {}
