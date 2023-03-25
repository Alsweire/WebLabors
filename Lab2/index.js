class Country{
    constructor(id, name, titlePage)
    {
        this.id = id;
        this.name = name;
        this.titlePage = titlePage;
    }
}

class MusicAlbum{
    constructor(id, countryId, title, image, description)
    {
        this.id = id;
        this.countryId = countryId;
        this.title = title;
        this.image = image;
        this.description = description;
    }
}

countries=[
    new Country("uk", "Великобритания", "Британские музыкальные альбомы"),
    new Country("ge", "Германия", "Немецкие музыкальные альбомы"),
    new Country("ru", "Россия", "Русские музыкальные альбомы"),
    new Country("us", "США", "Американские музыкальные альбомы"),
    new Country("fr", "Франция", "Французские музыкальные альбомы"),
    new Country("sk", "Южная Корея", "Южнокорейские музыкальные альбомы")
];

musicAlbums = [
    new MusicAlbum(
        1,
        "ru",
        "Мумий Тролль - Морская",
        "",
        "",
        ""
    ),
    new MusicAlbum(
        2,
        "ru",
        "Кино - Группа крови",
        "./maxresdefault.jpg",
        "Шестой студийный альбом советской рок-группы «Кино», вышедший 5 января 1988 года. Получил широкую известность как в СССР, так и за рубежом. Выход альбома принёс группе быстрый рост известности, многие песни стали одними из самых узнаваемых в творчестве группы."
    ),
    new MusicAlbum(
        3,
        "ru",
        "Noize MC - Последний альбом",
        "",
        ""
    ),
    new MusicAlbum(
        4,
        "ru",
        "Баста - 3",
        "",
        ""
    ),
    new MusicAlbum(
        5,
        "ru",
        "L'One - Спутник",
        "",
        ""
    ),
    new MusicAlbum(
        6,
        "ru",
        "Мегаполис - Из жизни планет",
        "",
        ""
    )
];

function MainPage(){

    document.querySelector('title').innerText = "Главная";
    document.querySelector('header').innerHTML=
        `<h1 style="color:rgb(50, 35, 117);"><p align="center">Музыкальные альбомы</p></h1>
        <hr>
        <ul class = "menushka">
            <li><a onclick="MainPage()">Главная</a></li>`;
    countries.forEach(
        (country) =>{
            document.querySelector('header').innerHTML +=
                `<li><a onclick="CategoryPage('${country.id}')">${country.name}</a></li>`;
        }
    );
    document.querySelector('header').innerHTML += `</ul>`;
    document.querySelector('main').innerHTML ='';
    document.querySelector('main').innerHTML =
        `<ul type = "circle">`;
    countries.forEach(
        (country) =>{
            document.querySelector('main').innerHTML +=
                `<li style = "font-size: 30px; color: rgb(62, 62, 126);"><a onclick = "CategoryPage('${country.id}')">${country.name}</a></li>`;
        }
    );
    document.querySelector('main').innerHTML += `</ul>`;
}

MainPage();

function CategoryPage(coId){

    const countryAlbum = countries.find(({id}) => id === coId);
    document.querySelector('title').innerHTML='';
    document.querySelector('title').innerHTML=countryAlbum.name;
    document.querySelector('main').innerHTML='';
    document.querySelector('main').innerHTML=
        `<h2 style="color:rgb(50, 35, 117);">${countryAlbum.titlePage}<p align="center"></p></h2>
        <ul type = "circle">`;
    musicAlbums.forEach(
        (album) => {
            if (album.countryId === coId){
                document.querySelector('main').innerHTML +=
                `<li style = "font-size: 20px; color: rgb(62, 62, 126);"><a onclick="AlbumPage('${album.id}')">${album.title}</a></li>`;
            }
        });
    
    document.querySelector('main').innerHTML += `</ul>`;
}

function AlbumPage(albumId){

    const album = albums.find(({id}) => id === albumId);
    document.querySelector('title').innerHTML='';
    document.querySelector('title')=album.title;
    document.querySelector('main').innerHTML='';
    document.querySelector('main').innerHTML =
        `<h2>"${album.title}"</h2>
        <img src="${album.image}" alt="альтернативный текст" width = 100%>
        <p>${album.description}</p>
        <hr>`;
}
