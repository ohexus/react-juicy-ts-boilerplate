import chalk from 'chalk';

enum Colors {
  Blue = '#2196f3',
  Cyan = '#80deea',
  Green = '#8bc34a',
  Red = '#c62828',
  Yellow = '#fdd835',
}

export default function chalkColored(str: string, color: keyof typeof Colors): string {
  return chalk.hex(Colors[color])(str);
}
