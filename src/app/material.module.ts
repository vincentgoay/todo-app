import { NgModule } from '@angular/core'
import { MatToolbarModule, MatInputModule, MatButtonModule,
        MatListModule, MatDialogModule,
        MatIconModule } from '@angular/material'


const MODULE = [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatIconModule
]

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule { }