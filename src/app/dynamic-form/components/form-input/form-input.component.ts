import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldComponent } from '../../models/field.interface'
import { FieldConfiguration } from '../../models/field-config.interface'

@Component({
	selector: 'form-input',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-container [formGroup]="formGroup">
			<mat-form-field>
				<mat-label>{{ field.label }}</mat-label>
				<input
					matInput
					formControlFix
					type="text"
					[formControlName]="field.name"
				/>
			</mat-form-field>
		</ng-container>
	`
})
export class FormInputComponent implements FieldComponent {
	@Input()
	public field: FieldConfiguration

	@Input()
	public formGroup: FormGroup
}
