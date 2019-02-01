import {
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	Input,
	OnChanges,
	OnInit,
	Type,
	ViewContainerRef
} from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FormInputComponent } from '../components/form-input/form-input.component'
import { FormSelectComponent } from '../components/form-select/form-select.component'

import { FieldComponent } from '../models/field.interface'
import { FieldConfiguration } from '../models/field-config.interface'

@Directive({
	selector: '[dynamicField]'
})
export class DynamicFieldDirective implements FieldComponent, OnChanges, OnInit {
	@Input()
	public field: FieldConfiguration

	@Input()
	public formGroup: FormGroup

	public component: ComponentRef<FieldComponent>

	public constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {}

	public ngOnInit(): void {
		const component = components[this.field.type]

		if (!component) {
			const supportedTypes = Object.keys(components).join(', ')
			throw new Error(`\
				Trying to use an unsupported type (${this.field.type}).\
        		Supported types: ${supportedTypes}\
        `)
		}

		const componentFactory = this.resolver.resolveComponentFactory<FieldComponent>(component)
		this.component = this.container.createComponent(componentFactory)
		this.component.instance.field = this.field
		this.component.instance.formGroup = this.formGroup
	}

	public ngOnChanges(): void {
		if (this.component) {
			this.component.instance.field = this.field
			this.component.instance.formGroup = this.formGroup
			this.component.changeDetectorRef.detectChanges()
		}
	}
}

const components: { [type: string]: Type<FieldComponent> } = {
	input: FormInputComponent,
	select: FormSelectComponent
}
