import { Controller, Get, Param } from "@nestjs/common";
import { MusicAlbum } from "src/Entity/MusicAlbumEntity";
import { MusicAlbumService } from "src/Service/MusicAlbumService";

@Controller("/musicAlbum")
export class MusicAlbumController {
	constructor(private musicAlbumService: MusicAlbumService) {}

	@Get("/byId/:Id")
	public getById(@Param("Id") Id): Array<MusicAlbum> {
		return this.musicAlbumService.getById(Id);
	}

	@Get("/byCountryId/:countryId")
	public getByCountryId(@Param("countryId") countryId): Array<MusicAlbum> {
		return this.musicAlbumService.getByCountryId(countryId);
	}

	@Get("/all")
	public getAll(): Array<MusicAlbum> {
		return this.musicAlbumService.getAll();
	}
}
