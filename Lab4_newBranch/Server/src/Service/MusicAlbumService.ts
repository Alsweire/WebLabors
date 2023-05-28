import { Injectable } from "@nestjs/common";
import { MusicAlbum } from "src/Entity/MusicAlbumEntity";

Injectable();
export class MusicAlbumService {
	protected MusicAlbums: Array<MusicAlbum> = [
		{
			Id: 1,
			CountryId: "ru",
			TitleAlbum: "Мумий Тролль - Морская",
			Image: "",
			Description: "",
		},
		{
			Id: 2,
			CountryId: "ru",
			TitleAlbum: "Кино - Группа крови",
			Image: "src/maxresdefault.jpg",
			Description: "",
		},
		{
			Id: 3,
			CountryId: "ru",
			TitleAlbum: "Noize MC - Последний альбом",
			Image: "",
			Description: "",
		},
		{
			Id: 4,
			CountryId: "ru",
			TitleAlbum: "Баста - 3",
			Image: "",
			Description: "",
		},
		{
			Id: 5,
			CountryId: "ru",
			TitleAlbum: "L'One - Спутник",
			Image: "",
			Description: "",
		},
		{
			Id: 6,
			CountryId: "ru",
			TitleAlbum: "Мегаполис - Из жизни планет",
			Image: "",
			Description: "",
		},
	];

	public getById(Id): Array<MusicAlbum> {
		return this.MusicAlbums.filter((album) => album.Id == Id);
	}

	public getByCountryId(countryId): Array<MusicAlbum> {
		return this.MusicAlbums.filter((album) => album.CountryId == countryId);
	}

	public getAll(): Array<MusicAlbum> {
		return this.MusicAlbums;
	}
}
