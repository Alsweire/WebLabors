import { Controller, Get, Param } from "@nestjs/common";
import { CountryService } from "src/Service/CountryService";
import { Country } from "src/Entity/CountryEntity";

@Controller("/country")
export class CountryController {
	constructor(private countryService: CountryService) {}

	@Get("/byId/:Id")
	public getById(@Param("Id") Id): Array<Country> {
		return this.countryService.getById(Id);
	}

	@Get("/all")
	public getAll(): Array<Country> {
		return this.countryService.getAll();
	}
}
