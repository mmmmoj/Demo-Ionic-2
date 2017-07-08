import { Directive, ElementRef, Renderer, Input } from '@angular/core';

/**
 * Generated class for the LoginInfo directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[login-info]' // Attribute selector
})
export class LoginInfo {
  @Input() myInput: string;

  constructor(public el: ElementRef, public renderer: Renderer) {
    console.log('inside directive');
  }

  ngOnInit() {
    this.notContainX(this.myInput);
  }

  notContainX(input: string) {
    if (input && input.toLowerCase().indexOf('x') != -1) {
      this.el.nativeElement.style.color = 'red';
      console.log('found');
    } else {
      console.log('not found');
    }
  }

}
