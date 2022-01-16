import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {

  tooltipText = 'Здесь могли быть ваши условия, но их нет!'
  checkFormGroupControl: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  // get bic() {
  //   return this.checkFormGroupControl.get('bic');
  // }
  //
  // get paymentAccount() {
  //   return this.checkFormGroupControl.get('paymentAccount');
  // }
  //
  // get accept() {
  //   return this.checkFormGroupControl.get('accept');
  // }

  ngOnInit() {
    this.checkFormGroupControl = this.fb.group({
      bic: [null, [Validators.required, Validators.minLength(9)]],
      paymentAccount: [null, [Validators.required, Validators.minLength(20)]],
      accept: [false, [Validators.required]]
    });
    this.checkFormGroupControl.valueChanges.subscribe(console.log)
  }

  // bicValidation(formControl: FormControl) {
  //   if (formControl.value.length < 9) {
  //     return {bicValidator: {message: 'Указан неверный номер счета!'}}
  //   }
  //   return null
  // }

  onSubmit() {
    console.log('submitted')
  }

}
