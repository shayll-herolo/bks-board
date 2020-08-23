import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DeletePostDialogComponent,
  EditPostDialogComponent,
  HeaderComponent
} from './components';
import { MaterialModule } from './material/material.module';
import { TruncatePipe } from './pipes';

const dialogs = [DeletePostDialogComponent, EditPostDialogComponent];

@NgModule({
  declarations: [HeaderComponent, TruncatePipe, ...dialogs],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HeaderComponent,
    TruncatePipe,
    ...dialogs,
  ],
  entryComponents: [...dialogs],
})
export class SharedModule {}
