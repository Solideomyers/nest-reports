import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
// import { countries as Country } from '@prisma/client';
import { footerSection } from './sections/footer.section';
import { footerTotalSection } from './sections/footer-total.section';
import { ReportOptions } from 'src/interfaces';
import { tableMainSection } from './sections/table-main.section';

export const getCountriesReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { title, subTitle, countries } = options;

  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: title ?? 'Countries Report',
      subTitle: subTitle ?? 'List of Countries',
    }),
    footer: footerSection,
    pageMargins: [40, 110, 40, 60],
    content: [
      // Table main
      tableMainSection(options),
      // Tabla de totales
      footerTotalSection(countries.length),
    ],
  };
};
