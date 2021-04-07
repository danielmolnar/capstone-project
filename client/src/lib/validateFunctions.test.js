import {
  isValidName,
  isValidEmail,
  isValidAge,
} from '../lib/validateFunctions';

describe('Username is valid', () => {
  it('should invalidate the Username when it is less  than 2 characters', () => {
    const result = isValidName('A');
    expect(result).toBeFalsy();
  });
});

describe('Email function validation', () => {
  it('it should return false when no "@" symbol is present in the email address', () => {
    const result = isValidEmail('danieldaniel.de');
    expect(result).toBeFalsy();
  });
});

describe('Age Decimal Dot Rule Validation', () => {
  it('it should return false whenever a populated age includes a dot decimal', () => {
    const result = isValidAge('61.5');
    expect(result).toBeFalsy();
  });
});

describe('Age Decimal Comma Rule Validation', () => {
  it('it should return false whenever a populated age includes a comma decimal', () => {
    const result = isValidAge('61,5');
    expect(result).toBeFalsy();
  });
});
