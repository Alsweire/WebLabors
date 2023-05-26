<script lang="ts">
	import type { MusicAlbum } from "../Entity/MusicAlbumEntity";
	import type { Country } from "../Entity/CountryEntity";
	import AlbumPage from "./AlbumPage.svelte";

	let base_url = "http://localhost:3000/";

	export let countryId;
	export let docTitle;
	export let state;

	let albums = <Array<MusicAlbum>>[];
	let countries = <Array<Country>>[];
	let albumId = 0;

	$: fetch(`${base_url}album/byCountryId/${countryId}`)
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
							`.wrapper_${album.CountryId}_${album.Id}_${album.Id}>.flag`
						)
						.forEach((select) => {
							select.innerHTML = /*html*/ `<img src="https://flagicons.lipis.dev/flags/4x3/${country.TitlePage}.svg" alt="country_img" />`;
						});
				})
			);
	};

</script>

<svelte:head>
	<title>{docTitle}</title>
</svelte:head>

{#if albumId === 0}
	{#each albums as album}
		<div class="wrapper_{album.CountryId}_{album.Id}">
			<div class="top_chart" />
			<div class="album_cover">
				<img src={album.Image} alt={album.TitleAlbum} />
			</div>
			<div class="info_box">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="album_name"
					on:click={() => {
						albumId = Number(album.Id);
					}}
				>
					{getAlbumTitle(album)}
				</div>
				<br />
				<div class="album_info">
					{album.Description}
				</div>
			</div>
			<div class="flag">
				{getImage(album)}
			</div>
		</div>
	{/each}
{:else}
	<AlbumPage albumId={Number(albumId)} {countryId} {state} {docTitle} />
{/if}
