import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const date: Content = {
  text: DateFormatter.getDDMMMMYYYY(new Date()),
  alignment: 'right',
  margin: [20, 20],
};

interface HeaderOptions {
  title?: string;
  sibTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { showDate = true, showLogo = true, sibTitle, title } = options;
  const headerLogo: Content = showLogo ? logo : null;
  const headerDate: Content = showDate ? date : null;
  return {
    columns: [headerLogo, headerDate],
  };
};
