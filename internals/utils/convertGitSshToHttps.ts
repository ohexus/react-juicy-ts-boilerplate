export default function convertGitSshToHttps(path: string): string {
  if (!path.startsWith('git@')) {
    return path;
  }
  return path.replace(
    /(git@)(git(\w+).com:)/,
    (match: string, p1: string, p2: string, p3: string) => `https://git${p3}.com/`,
  );
}
