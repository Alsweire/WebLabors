import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from 'src/Service/CountryService';

@Controller('/country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get('/byId/:Id')
  getById(@Param('Id') Id) {
    return this.countryService.getById(Id);
  }

  @Get('/all')
  getAll() {
    return this.countryService.getAll();
  }
}
