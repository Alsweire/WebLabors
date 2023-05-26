<script lang="ts">
	import type { MusicAlbum } from "../Entity/MusicAlbumEntity";
	import type { Country } from "../Entity/CountryEntity";
	import AlbumPage from "./AlbumPage.svelte";

	let base_url = "http://localhost:3000/";

	export let docTitle;
	export let state;

	let albums = <Array<MusicAlbum>>[];
	let countries = <Array<Country>>[];
	let albumId = 0;
	let albumCountryId = 0;

	fetch(`${base_url}album/all`)
		.then((response) => response.json())
		.then((albumList: Array<MusicAlbum>) => (albums = albumList));

	fetch(`${base_url}country/all`)
		.then((response) => response.json())
		.then((countryList: Array<Country>) => (countries = countryList));

	const getImage = (album: MusicAlbum) => {
		fetch(`${base_url}country/byId/${album.CountryId}`)
			.then((response) => response.json())
			.then((data) =>
				data.map((country) => {
					document
						.querySelectorAll(
							`.wrapper_${album.CountryId}_${album.Id}>.flag`
						)
				})
			);
	};

</script>

<svelte:head>
	<title>{docTitle}</title>
</svelte:head>