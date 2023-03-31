import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Calculator';

  public number1: number = 0;
  public number2: number = 0;
  public result?: number;
  public form?: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      numbera: new FormControl('', [Validators.required]),
      numberb: new FormControl('', [Validators.required])
    })
  }

 public plus() {
  this.number1 ++
 }

 public minus() {
  this.number1 --
 }

 public plus2() {
  this.number2 ++
 }

 public minus2() {
  this.number2 --
 }

  public add(): void {
    this.result = this.number1 + this.number2
  };

  public subs(): void {
    this.result = this.number1 - this.number2
  };

  public mult(): void {
    this.result = this.number1 * this.number2
  }

  public div(): void {
    this.result = this.number1 / this.number2
  
  }

  public clear(): void {
    if(!this.result) { 
          return; 
        } else {
          delete this.result && this.number1 === 0 && this.number2 === 0; 
        }
  }
  
}
