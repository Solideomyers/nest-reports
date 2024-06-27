import { Content, ContextPageSize } from 'pdfmake/interfaces';

// Replicate this function: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; }
export const footerTotalSection = (totalCountries: number): Content => {
  return {
    layout: 'noBorders',
    table: {
      headerRows: 1,
      widths: [50, 50, 100, '*', 'auto', '*'],
      body: [
        [
          {
            text: 'Total of Countries',
            colSpan: 2,
            bold: true,
          },
          {},
          {
            text: `${totalCountries} countries`,
            bold: true,
          },
          {},
          {},
          {},
        ],
      ],
    },
  };
};
