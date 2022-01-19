import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateBic, validateRsFactory } from '../../shared/validators';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {
  tooltipText = 'Здесь могли быть ваши условия, но их нет!';
  checkForm: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder) {
  }

  get bic() {
    return this.checkForm.get('bic');
  }

  get paymentAccount() {
    return this.checkForm.get('paymentAccount');
  }

  get accept() {
    return this.checkForm.get('accept');
  }

  ngOnInit() {
    this.checkForm = this.fb.group({
      bic: ['', [Validators.required, validateBic]],
      paymentAccount: ['', [Validators.required, validateRsFactory('bic')]],
      accept: [false, [Validators.required]]
    });
  }

  onSubmit() {
    this.loading = true;
    console.log(this.checkForm.value);
    this.checkForm.reset();
  }
}
