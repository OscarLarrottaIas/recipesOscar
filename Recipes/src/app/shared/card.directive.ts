import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]',
  standalone: true
})
export class CardDirective {

  constructor(private component:ElementRef) { }

  @HostListener('mouseenter') addClase(){
    this.component.nativeElement.classList.add('border')
  }

  @HostListener('mouseleave') removeClase(){
    this.component.nativeElement.classList.remove('border')
  }
}
