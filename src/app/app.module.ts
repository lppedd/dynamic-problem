import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {MaterialModule} from './material.module'
import {FixToggleDisableFormControlDirective} from './directives/form-control-name.directive'
import {NgxStronglyTypedFormsModule} from 'ngx-strongly-typed-forms'
import {SimpleComponent} from './simple/simple.component'
import {DynamicFormModule} from './dynamic-form/dynamic-form.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FixToggleDisableFormControlDirective,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxStronglyTypedFormsModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
