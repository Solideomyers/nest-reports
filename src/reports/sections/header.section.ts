import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';
import { HeaderOptions } from 'src/interfaces';

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const currentDate: Content = {
  text: DateFormatter.getDDMMMMYYYY(new Date()),
  alignment: 'right',
  margin: [20, 30],
  width: 150,
};

export const headerSection = (options: HeaderOptions): Content => {
  const { showDate = true, showLogo = true, subTitle, title } = options;
  const headerLogo: Content = showLogo ? logo : null;
  const headerDate: Content = showDate ? currentDate : null;

  const headerSubTitle: Content = subTitle
    ? {
        stack: [
          {
            text: subTitle,
            alignment: 'center',
            margin: [0, 2, 0, 0],
            style: {
              bold: true,
              fontSize: 16,
            },
          },
        ],
      }
    : null;

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            alignment: 'center',
            margin: [0, 15, 0, 0],
            style: {
              bold: true,
              fontSize: 22,
            },
          },
          headerSubTitle,
        ],
      }
    : null;
  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
