import validateNumber from '..//validateNumber';

test('Правильный ввод', () => {
  const received = validateNumber('123');
  const expected = 123;

  expect(received).toEqual(expected);
});

test('Неправильный ввод', () => {
  const received = validateNumber('Пять');
  const expected = Error('Допускается ввод только чисел в десятичной системе счисления');

  expect(received).toEqual(expected);
});

test('Неправильный ввод число + текст', () => {
  const received = validateNumber('15 шт');
  const expected = Error('Допускается ввод только чисел в десятичной системе счисления, цифры от 0 до 9');

  expect(received).toEqual(expected);
});
