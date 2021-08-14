import { Spinner } from 'clui';

const spinnerAssets = [
  '(●    )',
  '(●    )',
  '(●    )',
  '( ●   )',
  '( ●   )',
  '(  ●  )',
  '(  ●  )',
  '(   ● )',
  '(   ● )',
  '(    ●)',
  '(    ●)',
  '(    ●)',
  '(   ● )',
  '(   ● )',
  '(  ●  )',
  '(  ●  )',
  '( ●   )',
  '( ●   )',
];

class JuicySpinner {
  private spinner: Spinner;

  constructor() {
    this.spinner = new Spinner('', spinnerAssets);
  }

  message(text: string): void {
    this.spinner.message(text);
  }

  start(text = ''): void {
    this.spinner.message(text);
    this.spinner.start();
  }

  stop(): void {
    this.spinner.message('');
    this.spinner.stop();
  }
}

export default new JuicySpinner();
