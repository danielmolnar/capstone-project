export const isValidName = (name) => name.length >= 2;

export const isValidEmail = (email) => email.includes('@');

export const isValidAge = (age) => {
  if (!age.includes(',') && !age.includes('.')) {
    return true;
  }
};

export const isValidForm = (profile) =>
  isValidName(profile.name) &&
  isValidEmail(profile.email) &&
  isValidAge(profile.age);

export default isValidForm;
