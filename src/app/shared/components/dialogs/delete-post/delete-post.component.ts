import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '@core/services';

@Component({
    selector: 'app-delete-post',
    templateUrl: './delete-post.component.html'
})

export class DeletePostDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<DeletePostDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private boardService: BoardService
    ) { }

    deletePost() {
        this.boardService.deletePost(this.data.id);
        this.dialogRef.close();
    }
}
