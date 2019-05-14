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
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { OnPushComponent } from './change-detection/on-push/on-push.component';
import { DefaultComponent } from './change-detection/default/default.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AuthformComponent,
    RememberComponent,
    AuthMessageComponent,
    DynamicComponentComponent,
    InputComponent,
    ViewencapsulationComponent,
    ChangeDetectionComponent,
    DefaultComponent,
    OnPushComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InputComponent]
})
export class AppModule {}
