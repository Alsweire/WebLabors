import { Injectable } from "@nestjs/common";
import { Country } from "src/Entity/CountryEntity";

Injectable();
export class CountryService {
  protected Countries: Array<Country> = [
    {
      Id: "uk",
      Name: "Великобритания",
      TitlePage: "Британские музыкальные альбомы",
    },
    {
      Id: "ge",
      Name: "Германия",
      TitlePage: "Немецкие музыкальные альбомы",
    },
    {
      Id: "ru",
      Name: "Россия",
      TitlePage: "Русские музыкальные альбомы",
    },
    {
      Id: "us",
      Name: "США",
      TitlePage: "Американские музыкальные альбомы",
    },
    {
      Id: "fr",
      Name: "Франция",
      TitlePage: "Французские музыкальные альбомы",
    },
    {
      Id: "sk",
      Name: "Южная Корея",
      TitlePage: "Южнокорейские музыкальные альбомы",
    },
  ];

  public getById(Id): Array<Country> {
    return this.Countries.filter((country) => country.Id == Id);
  }

  public getAll(): Array<Country> {
    return this.Countries;
  }
}
