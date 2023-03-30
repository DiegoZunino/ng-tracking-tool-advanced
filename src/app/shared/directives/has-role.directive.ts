import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthService} from "../../core/auth/services/auth.service";
import {Subject, takeUntil} from "rxjs";

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy{
  @Input('hasRole') role!: string;
  private isVisible: boolean = false;
  private stop$ =  new Subject<boolean>();

  constructor(private authService: AuthService, private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  ngOnInit(): void {
    this.authService.user$.pipe(takeUntil(this.stop$)).subscribe(
      (user) => {
        const role = user?.user.role;
        if(!role || role !== this.role) {
          this.viewContainerRef.clear();
          this.isVisible = false;
        } else {
          if(!this.isVisible) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.isVisible = true;
          }
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.stop$.next(true);
  }
}
