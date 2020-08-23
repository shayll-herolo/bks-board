import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonLoadingDirective } from './mat-button-loading.directive';
import {TextFieldModule} from '@angular/cdk/text-field';


const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  TextFieldModule
];

@NgModule({
  declarations: [MatButtonLoadingDirective],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules, MatButtonLoadingDirective]
})
export class MaterialModule {}
