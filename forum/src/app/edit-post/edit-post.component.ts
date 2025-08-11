import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  @Input() title: string = '';
  @Input() content: string = '';

  @Output() save = new EventEmitter<{ title: string, content: string }>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    this.save.emit({ title: this.title, content: this.content });
  }

  onCancel() {
    this.cancel.emit();
  }
}
