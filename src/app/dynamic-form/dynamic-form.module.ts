import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { DynamicFieldDirective } from './directives/dynamic-field.directive'
import { DynamicFormComponent } from './container/dynamic-form.component'
import { FormInputComponent } from './components/form-input/form-input.component'
import { FormSelectComponent } from './components/form-select/form-select.component'
import { MatInputModule, MatSelectModule } from '@angular/material'

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSelectModule
	],
	declarations: [
		DynamicFieldDirective,
		DynamicFormComponent,
		FormInputComponent,
		FormSelectComponent,
	],
	exports: [
		DynamicFormComponent
	],
	entryComponents: [
		FormInputComponent,
		FormSelectComponent
	]
})
export class DynamicFormModule {}
