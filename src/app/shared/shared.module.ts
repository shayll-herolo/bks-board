import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components';
import { TruncatePipe } from './pipes';

@NgModule({
  declarations: [HeaderComponent, TruncatePipe],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, HeaderComponent, TruncatePipe],
})
export class SharedModule {}
