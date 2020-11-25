import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],        // toggled buttons  'strike'
        // ['code-block'],
        [{'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc',
        '#9933ff', '#ffffff',  '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66']}],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
				// ['link'],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        // [{ 'font': [] }],
        // [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        // ['link'],
        // ['link', 'image', 'video']
        // ['emoji'],
      ]
    },
  };

  @Input() content:  string;
  @Output() contentChange = new EventEmitter<string>();
  htmlContent: string;
  constructor() { }

  onSelectionChanged(event) {
    if (event.oldRange == null) {
      // onFocus event;
    }
    if (event.range == null) {
      // onBlur event;
    }
  }

  onHTMLContentChanged(event): void {
    if (this.content === this.htmlContent) {
      return;
    }
    this.contentChange.emit(this.htmlContent);
  }

  onBluer(event): void {
    if (this.content === this.htmlContent) {
      return;
    }
    this.contentChange.emit(this.htmlContent);
  }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }

  ngOnInit() {
    this.htmlContent = (this.content) ? `${this.content}` : undefined;
    // const control = this.controlDir.control;
    // const validators = control.validator ? [control.validator] : [];
    // control.setValidators(validators);
    // control.updateValueAndValidity();

  }

}
