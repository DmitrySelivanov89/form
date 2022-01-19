import { AbstractControl, ValidatorFn } from '@angular/forms';

export const validateBic: ValidatorFn = (ctrl: AbstractControl) => {
  const bic: string = ctrl.value;

  if (!bic.length) {
    return {bic: {message: 'БИК пуст'}};
  }
  if (/[^0-9]/.test(bic)) {
    return {bic: {message: 'БИК может состоять только из цифр'}};
  }
  if (bic.length !== 9) {
    return {bic: {message: 'БИК может состоять только из 9 цифр'}};
  }
  return null;
};

export const validateRsFactory: (bicCtrlName: string) => ValidatorFn = (bicCtrlName) => (rsCtrl: AbstractControl) => {
  const {parent} = rsCtrl;

  if (!parent) {
    return {rs: {message: 'Форма не найдена!'}};
  }

  const bicCtrl = parent.get?.(bicCtrlName);

  if (!bicCtrl) {
    return {rs: {message: 'БИК не найден'}};
  }
  if (bicCtrl.invalid) {
    return {rs: {message: 'Некорректный БИК'}};
  }

  const bic = bicCtrl.value;
  const rs = rsCtrl.value;

  if (!rs.length) {
    return {rs: {message: 'Р/С пуст'}};
  }
  if (/[^0-9]/.test(rs)) {
    return {rs: {message: 'Р/С может состоять только из цифр'}};
  }
  if (rs.length !== 20) {
    return {rs: {message: 'Р/С может состоять только из 20 цифр'}};
  }

  const bicRs = bic.slice(-3) + rs;
  let checksum = 0;
  const coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];

  for (let i in coefficients) {
    checksum += coefficients[i] * (bicRs[i] % 10);
  }

  if (checksum % 10 !== 0) {
    return {rs: {message: 'Неправильное контрольное число'}};
  }

  return null;
};



