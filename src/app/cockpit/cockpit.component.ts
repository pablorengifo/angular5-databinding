import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputName: HTMLInputElement) {
    console.log(inputName.value);
    this.serverCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
