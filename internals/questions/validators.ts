/* eslint-disable import/prefer-default-export */
export function lengthValidator(str: string, err?: string): boolean | string {
  if (str.trim().length) {
    return true;
  }
  return err ?? false;
}
