import {ChangeDetectionStrategy, Component, EventEmitter, Input, model, OnInit, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  imports: [NgIf],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {

  isOpen = model(false);

  @Input()
  title = "Title";

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  closePopup(): void {
    this.isOpen.set(false);
  }
}
