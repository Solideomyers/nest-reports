import { Content } from 'pdfmake/interfaces';
import { ReportOptions } from 'src/interfaces';

// Replicate this function: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; }
export const tableMainSection = (options: ReportOptions): Content => {
  const { countries } = options;
  return {
    layout: 'customLayout01', //'lightHorizontalLines',//optional
    table: {
      // headers are automatically repeated if the table spans over multiple pages
      // you can declare how many rows should be treated as headers
      headerRows: 1,
      widths: [50, 50, 50, '*', 'auto', '*'],

      body: [
        ['ID', 'ISO2', 'ISO3', 'Name', 'Continent', 'Local Name'],
        ...countries.map((country) => [
          country.id.toString(),
          country.iso2,
          country.iso3,
          { text: country.name, bold: true },
          country.continent,
          country.local_name,
        ]),
        // [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
        ['', '', '', '', '', ``],
        [
          '',
          '',
          '',
          '',
          'Total',
          {
            text: `${countries.length} countries`,
            bold: true,
          },
        ],
      ],
    },
  };
};
