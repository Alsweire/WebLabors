<script lang="ts">
    import svelteLogo from './Assets/svelte.svg';
    import viteLogo from '/vite.svg';
	import MainPage from "./Pages/MainPage.svelte";
	import type {Country} from "./Entity/CountryEntity";
	import type {MusicAlbum} from "./Entity/MusicAlbumEntity";
	import CountryPage from "./Pages/CountryPage.svelte";
	let base_url = "http://localhost:3000/";
	let countries = <Array<Country>>[];
	let state:
		| { type: "main" }
		| { type: "country"; country: Country }
		| { type: "musicAlbum"; album: MusicAlbum } = { type: "main" };
	fetch(`${base_url}country/all`)
		.then((response) => response.json())
		.then((countryList: Array<Country>) => (countries = countryList));
	let countryPageId;
	let documetTitle = "Albums";
	function switchPage(countryId, docTitle) {
		countryPageId = countryId;
		documetTitle = docTitle;
	}
</script>