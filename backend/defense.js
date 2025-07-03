const crypto = require('crypto');

function randomString(len = 8) {
  return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);
}

let defenseState = {
  usernameField: 'username',
  passwordField: 'password',
  csrfToken: randomString(12)
};

function randomizeDefense() {
  defenseState.usernameField = 'user_' + randomString(5);
  defenseState.passwordField = 'pass_' + randomString(5);
  defenseState.csrfToken = randomString(12);
}

function checkAttack(input) {
  if (!input) return false;
  const patterns = [
    /('|--|;|\bOR\b|\bAND\b)/i,      // SQLi
    /<script.*?>/i,                  // XSS
    /onerror\s*=/i                   // XSS
  ];
  return patterns.some((regex) => regex.test(input));
}

module.exports = {
  randomizeDefense,
  defenseState,
  checkAttack
};
