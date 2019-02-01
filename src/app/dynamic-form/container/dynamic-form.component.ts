import {Component, Input} from '@angular/core'

import {FieldConfiguration} from '../models/field-config.interface'
import {FormGroup} from 'ngx-strongly-typed-forms'

@Component({
  selector: 'dynamic-form',
  template: `
    <form [formGroup]="formGroup">
      <ng-container
        *ngFor="let field of fields;"
        dynamicField
        [field]="field"
        [formGroup]="formGroup">
      </ng-container>
    </form>
  `
})
export class DynamicFormComponent {
  /**
   * La lista dei campi da visualizzare. L'ordine all'interno dell'array
   * rappresenta l'ordine di visualizzazione in Form.
   */
  @Input()
  public fields: FieldConfiguration[] = []

  /** La FormGroup contenente i FormControl corrispondenti ai valori in {@link fields}. */
  @Input()
  public formGroup: FormGroup<any>
}
