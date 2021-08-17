/* eslint-disable max-len */
const QUESTION_MESSAGES = {
  GIT: {
    NEW_ORIGIN: 'Please type the new git origin\n(or leave empty string to skip this question)',
  },
  PROJECT: {
    INVALID_NAME: 'Please enter a valid name.',
    NEW_NAME: 'Please type the new project name, e.g. honey-project',
    PACKAGE_JSON_NAME:
      'Make sure that the name you enter matches the next pattern used in package.json\n"^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$"\nOtherwise the name will be transformed to match it',
  },
};

export default QUESTION_MESSAGES;
