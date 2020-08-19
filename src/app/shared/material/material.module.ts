import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonLoadingDirective } from './mat-button-loading.directive';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [MatButtonLoadingDirective],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules, MatButtonLoadingDirective],
})
export class MaterialModule {}
