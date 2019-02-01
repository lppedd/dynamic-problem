import { FormGroup } from '@angular/forms'
import { FieldConfiguration } from './field-config.interface'

export interface FieldComponent {
	field: FieldConfiguration,
	formGroup: FormGroup
}
