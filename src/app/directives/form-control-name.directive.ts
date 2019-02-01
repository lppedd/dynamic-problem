import { Directive, DoCheck } from '@angular/core'
import { NgControl } from '@angular/forms'

/**
 * See {@link https://github.com/angular/angular/issues/22556}
 */
@Directive({
	selector: '[formControlFix]'
})
export class FixToggleDisableFormControlDirective implements DoCheck {
	public constructor(private readonly ngControl: NgControl) {}

	public ngDoCheck(): void {
		const control = this.ngControl.control!
		control.enabled
			? control.enable({ emitEvent: false })
			: control.disable({ emitEvent: false })
	}
}
