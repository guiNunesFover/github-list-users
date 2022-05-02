import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";
  
@Directive({
    selector: "[focus-first]"
})
export class FormFocusDirective implements AfterViewInit 
{
    public focusables = ["input", "select", "textarea"];
  
    constructor(private element: ElementRef) {}
  
    ngAfterViewInit() 
    {
        const input = this.element.nativeElement.querySelector(this.focusables.join(","));
        if (input) input.focus();
    }
  
    @HostListener("submit")
    public submit() 
    {
        const input = this.element.nativeElement.querySelector(this.focusables.map(x => `${x}.ng-invalid`).join(","));
        if (input) input.focus();
    }
}
  