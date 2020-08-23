import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@core/models';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostDialogComponent, EditPostDialogComponent } from '@shared/components';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  deletePost(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeletePostDialogComponent, {
      data: { id: this.post.id },
    });
  }

  openPost(event: MouseEvent) {
    event?.preventDefault();
    event.stopPropagation();
    this.dialog.open(EditPostDialogComponent, {
      height: '400px',
      width: '600px',
      data: { ...this.post, isEdit: true },
    });
  }
}
