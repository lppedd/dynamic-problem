import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldComponent } from '../../models/field.interface'
import { FieldConfiguration } from '../../models/field-config.interface'

@Component({
	selector: 'form-select',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-container [formGroup]="formGroup">
			<mat-form-field>
				<mat-select
					formControlFix
					[formControlName]="field.name"
					[multiple]="false"
					[placeholder]="field.label"
				>
					<mat-option *ngFor="let option of field.options" [value]="option">
						{{ option }}
					</mat-option>
				</mat-select>
			</mat-form-field>
		</ng-container>
	`
})
export class FormSelectComponent implements FieldComponent {
	@Input()
	public field: FieldConfiguration

	@Input()
	public formGroup: FormGroup
}
