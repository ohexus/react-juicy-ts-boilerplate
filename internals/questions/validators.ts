const GIT_URL_REGEX = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|#[-\d\w._]+?)$/;

export function gitUrlValidator(str: string, err?: string): boolean | string {
  if (GIT_URL_REGEX.test(str.trim())) {
    return true;
  }
  return err ?? false;
}

export function lengthValidator(str: string, err?: string): boolean | string {
  if (str.trim().length) {
    return true;
  }
  return err ?? false;
}
