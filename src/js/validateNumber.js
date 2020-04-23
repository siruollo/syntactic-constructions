function validateNumber(input) {
  try {
    const convertToNumb = parseInt(input, 10);
    if (Number.isNaN(convertToNumb)) {
      throw new Error('Допускается ввод только чисел в десятичной системе счисления');
    }
    if (convertToNumb != input) {
      throw new Error('Допускается ввод только чисел в десятичной системе счисления, цифры от 0 до 9');
    }
    return convertToNumb;
  } catch (e) {
    return e;
  }
}

export default validateNumber;
