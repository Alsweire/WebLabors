<script lang="ts">
	import type { MusicAlbum } from "../Entity/MusicAlbumEntity";
	import MainPage from "./MainPage.svelte";
	import CountryPage from "./CountryPage.svelte";

	export let albumId: number;
	export let countryId: number;
	export let docTitle;
	export let state;

	state.type = "album";

	let base_url = "http://localhost:3000/";
	let albums = <Array<MusicAlbum>>[];

	fetch(`${base_url}album/byId/${albumId}`)
		.then((response) => response.json())
		.then((data) =>
			data.map(album) => {

			})
		);
		};

	const getAlbumTitle = (album: MusicAlbum) => {
		fetch(`${base_url}band/byId/${album.Id}`)
			.then((response) => response.json())
			.then((data) =>
				data.map((band) => {
					document.title = `${album.TitleAlbum}	/	${band.Title}`;
					document.querySelector(
						`.content_box_${album.CountryId}_${album.Id}>.less_information>p`
					).innerHTML = `${album.TitleAlbum}	/	${band.Title}`;
				})
			);
	};

	const getImage = (album: MusicAlbum) => {
		fetch(`${base_url}country/byId/${album.CountryId}`)
			.then((response) => response.json())
			.then((data) =>
				data.map((country) => {
					document.querySelector(
						`.content_box_${album.CountryId}_${album.Id}>.less_information>.Flag`
					).innerHTML = /*html*/ `<img	src="https://flagicons.lipis.dev/flags/4x3/${country.ShortTitle}.svg"	alt="country_img"	/>`;
				})
			);
	};
</script>

{#if state.type === "album"}
	{#each albums as album}
		<div class="content_box_{album.CountryId}_{album.Id}">
			<div class="less_information">
				<div class="album_image">
					<img src={album.Image} alt="" />
				</div>
				<p>{getAlbumTitle(album)}</p>
				<div class="Flag">
					{getImage(album)}
				</div>
			</div>
			<div class="about_album">
				{album.Description}
			</div>
		</div>
	{/each}
{:else if state.type == "country"}
	<CountryPage {countryId} {docTitle} {state} />
{:else}
	<MainPage {state} {docTitle} />
{/if}
