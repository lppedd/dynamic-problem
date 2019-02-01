import {ChangeDetectionStrategy, Component} from '@angular/core'
import {FormBuilder} from 'ngx-strongly-typed-forms'

@Component({
  selector: 'app-simple',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {
  public actions = [{
    action: 'action-1',
    allowAdditionalFields: true,
    fields: [
      {
        type: 'input',
        name: 'name-1',
        label: 'label-1',
      },
      {
        type: 'input',
        name: 'name-2',
        label: 'label-2',
      },
      {
        type: 'select',
        name: 'name-3',
        label: 'label-3',
        options: ['one', 'two', 'three']
      }
    ]
  }]

  public formGroup = this.formBuilder.group<any>({
    name: 'action-1',
    configuredProperties: this.formBuilder.group({
      'name-1': 'input-one',
      'name-2': 'input-two',
      'name-3': 'select-three',
    }),
    additionalProperties: this.formBuilder.array<any>([{
      key: 'key-1',
      value: 'value-1'
    }])
  })

  constructor(private formBuilder: FormBuilder) {
  }

  public disableForm(): void {
    this.formGroup.disable({ emitEvent: false })
  }

  public enableForm(): void {
    this.formGroup.enable({ emitEvent: false })
  }
}
