import { NgModule } from '@angular/core'
import { MatToolbarModule, MatInputModule, MatButtonModule,
        MatListModule, MatDialogModule } from '@angular/material'


const MODULE = [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
]

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule { }