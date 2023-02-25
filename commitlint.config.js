module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['Add', 'Fix', 'Update', 'Refactor', 'Remove']],
    'type-case': [2, 'always', 'start-case'],
    'subject-case': [2, 'always', 'sentence-case']
  }
};
