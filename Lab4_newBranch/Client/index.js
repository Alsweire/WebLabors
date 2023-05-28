let header = document.querySelector('header');
header.innerHTML +=
   `<h1 class = "h1_style"><p align="center">Музыкальные альбомы</p></h1>`;
let h2 = document.querySelector('h2');
h2.innerHTML +=
    `<hr>
    <ul class = "menushka">
        <li><a onclick="MainPage()">Главная</a></li>
    </ul>`;

MainPage = async() => {
    document.querySelector('title').innerHTML = "Главная";
    document.querySelector('main').innerHTML ='';
    document.querySelector('main').innerHTML =
        `<ul type = "circle">
            <li><a onclick="MainPage()">Главная</a></li>
        </ul>`;
        await fetch('http://localhost:3000/country/all')
        .then(response => response.json())
        .then(country => {
            country.map(country => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.innerText = country.Name;
                a.setAttribute('onclick', `CategoryPage('${country.Id}')`);
                li.appendChild(a);
                li.setAttribute('class', 'mainMenu');
                const ul = document.querySelector('main ul');
                ul.appendChild(li);
            })
        })
}

HorizontalMenu = async() => {
    const ul = h2.querySelector('ul');
    await fetch('http://localhost:3000/country/all')
        .then(response => response.json())
        .then(country => {
            country.map(country => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.innerText = country.Name;
            a.setAttribute('onclick', `CategoryPage('${country.Id}', '${country.TitlePage}')`);
            li.appendChild(a);
            ul.appendChild(li);
        })
    })
}

CategoryPage = async(Id, TitlePage) => {
    document.querySelector('title').innerHTML = TitlePage;
    document.querySelector('main').innerHTML = '';
    document.querySelector('main').innerHTML=
        `<h2 class="h1_style">${TitlePage}<p align="center"></p></h2>
          <ul type = "circle">
          </ul>`;
    await fetch(`http://localhost:3000/musicAlbum/byCountryId/${Id}`)
        .then(response => response.json())
        .then(musicAlbum => {
            musicAlbum.map(musicAlbum => {
                if (musicAlbum.CountryId == Id){
                    const li = document.createElement('li');
                    li.setAttribute('class', 'albumMenu');
                    const a = document.createElement('a');
                    a.innerText = musicAlbum.TitleAlbum;
                    a.setAttribute('onclick', `AlbumPage('${musicAlbum}')`)
                    li.appendChild(a);
                    const ul = document.querySelector('main ul');
                    ul.appendChild(li);
                }
            })
        })
}

AlbumPage = (musicAlbum) => {
    if (musicAlbum != undefined || null){
        document.querySelector('title').innerHTML='';
        document.querySelector('title').innerHTML = musicAlbum.TitleAlbum;
        document.querySelector('main').innerHTML = '';
        if ((musicAlbum.Image != "") && (musicAlbum.Description != ""))
        {
            document.querySelector('main').innerHTML =
            `<h2>"${album.TitleAlbum}"</h2>
            <img src="${album.Image}" alt="" width = 100%>
            <p>${album.Description}</p>
            <hr>`;
        }
    }
}

HorizontalMenu();
MainPage();
