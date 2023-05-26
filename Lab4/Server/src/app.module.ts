import { Module } from "@nestjs/common";
import { CountryController } from "./Controller/CountryController";
import { CountryService } from "./Service/CountryService";
import { MusicAlbumController } from "./Controller/MusicAlbumController";
import { MusicAlbumService } from "./Service/MusicAlbumService";

@Module({
  controllers: [MusicAlbumController, CountryController],
  providers: [MusicAlbumService, CountryService],
})
export class AppModule {}
