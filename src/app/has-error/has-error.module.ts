
import { CommonModule } from "@angular/common";
import { ErrorHandler, NgModule } from "@angular/core";
import { HasErrorComponent } from "./has-error.component";
import { RouterModule } from "@angular/router";
import { MyCustomErrorHandler } from "../my-custom-error-handler";

@NgModule({
    declarations: [HasErrorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: HasErrorComponent
        }])
    ],
    exports: [HasErrorComponent],
    providers: [{
        provide: ErrorHandler,
        useFactory: () => new MyCustomErrorHandler('has-error-module')
    }],
})
export class HasErrorModule { }
