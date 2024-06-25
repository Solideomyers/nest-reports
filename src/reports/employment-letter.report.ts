import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';
import { headerSection } from './sections/header.section';

const styles: StyleDictionary = {
  header: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 20],
  },
  body: {
    alignment: 'justify',
    margin: [0, 0, 0, 70],
  },
  signature: {
    fontSize: 14,
    bold: true,
  },
  footer: {
    fontSize: 10,
    italics: true,
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
};

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles: styles,
    header: headerSection({}),
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'header',
      },
      {
        text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa], 
por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra 
empresa desde el [Fecha de Inicio del Empleado].\n\n
Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del 
Empleado],  demostrando  responsabilidad,  compromiso  y  habilidades  profesionales  en  sus 
labores.\n\n
La  jornada  laboral  del  Sr./ Sra.  [Nombre  del  Empleado]  es  de  [Número  de  Horas]  horas 
semanales,  con  un  horario  de  [Horario  de  Trabajo],  cumpliendo  con  las  políticas  y 
procedimientos establecidos por la empresa.
Esta constancia se expide a solicitud del interesado para los fines que considere conveniente
\n\n\n\n`,
      },
      {
        text: `Atentamente`,
        style: 'signature',
      },
      {
        text: `[Nombre del Empleador]`,
        style: 'signature',
      },
      {
        text: `[Cargo del Empleador]`,
        style: 'signature',
      },
      {
        text: `[Nombre de la Empresa]`,
        style: 'signature',
      },
      {
        text: `[Cargo del Empleador]`,
        style: 'signature',
      },
      {
        text: `[Fecha de Emisión]`,
        style: 'signature',
      },
      {
        text: `20 de mayo de 2024`,
        style: 'signature',
      },
    ],
    footer: {
      text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
      style: 'footer',
    },
  };

  return docDefinition;
};
