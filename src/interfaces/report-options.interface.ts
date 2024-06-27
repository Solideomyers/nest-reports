import { countries as Country } from '@prisma/client';

export interface ReportOptions {
  title?: string;
  subTitle?: string;
  countries: Country[];
}
