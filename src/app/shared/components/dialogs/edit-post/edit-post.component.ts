import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '@core/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BoardService } from '@core/services';
import { alphaValidator } from '@shared/validators/alpha.validator';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      author: [this.data?.author, {
        validators: [Validators.required, alphaValidator()]
      }],
      content: [this.data?.content, Validators.required]
    });
  }

  updateForm() {
    if (this.form.invalid) { return; }

    const id = this.data.id;
    const {author, content} = this.form.value;
    if (this.data.isEdit) {
      this.boardService.editPost(id, author, content);
    } else {
      this.boardService.addPost(author, content);
    }
    this.dialogRef.close();
  }
}
