import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import {
  getCountriesReport,
  getEmploymentLetterByIdReport,
  getEmploymentLetterReport,
  getHelloWorldReport,
} from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('BasicReportsService');

  constructor(private readonly printerService: PrinterService) {
    super();
  }
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connected');
  }

  hello() {
    const docDefinition = getHelloWorldReport({
      name: 'Francisco Myers',
    });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async reports() {
    const docDefinition = getHelloWorldReport({ name: 'Francisco Myers' });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetterReport();

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async employmentLetterById(employeeId: number) {
    const employee = await this.employees.findUnique({
      where: { id: employeeId },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${employeeId} not found`);
    }

    const docDefinition = getEmploymentLetterByIdReport({
      employerName: 'Francisco Myers',
      employerPosition: 'Gerente de RRHH',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'Nest Corporation Inc.',
    });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async getCountryReport() {
    const countries = await this.countries.findMany({
      where: {
        local_name: {
          not: null,
        },
      },
    });
    const docDefinition = getCountriesReport({ countries });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
