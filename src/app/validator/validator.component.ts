import { Component, OnInit, Input, ContentChild, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { NgModel, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit, AfterContentInit {

  @Input() input: any;
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;
  @Input() label: string;
  @Input() id: string;

  ngOnInit() { }

  ngAfterContentInit() {
    this.input = this.model || this.control;
  }
}