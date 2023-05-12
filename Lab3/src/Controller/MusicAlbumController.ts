import { Controller, Get, Param } from '@nestjs/common';
import { MusicAlbumService } from 'src/Service/MusicAlbumService';

@Controller('/musicAlbum')
export class MusicAlbumController {
  constructor(private musicAlbumService: MusicAlbumService) {}

  @Get('/byId/:Id')
  getById(@Param('Id') Id) {
    return this.musicAlbumService.getById(Id);
  }

  @Get('/byCountryId/:countryId')
  getByCountryId(@Param('countryId') countryId) {
    return this.musicAlbumService.getByCountryId(countryId);
  }

  @Get('/all')
  getAll() {
    return this.musicAlbumService.getAll();
  }
}
