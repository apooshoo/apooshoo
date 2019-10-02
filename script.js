console.log('YO????//');
let rightCol = $('.rightCol-wrapper');

let screens = [
    'fgbf-screen.png',
    'as-screen.png',
    'tha-screen.png',
    'wak.png'
    ];
let descriptions = [
    'A React rhythm game featuring characters and music from the JRPG mobile game Granblue Fantasy.',
    'A Google Chrome extension that automatically syncs your anime downloads with your MyAnimeList watchlist.',
    'A hair-salon discovery and reviewing app to help you make an informed choice on your next haircut.',
    'My first app - a whack-a-mole learning guide where you filter through Japanese kanji characters to find the right one.'
  ];
let githubLinks = [
    'https://github.com/apooshoo/fake-granblue-fantasy',
    'https://github.com/apooshoo/animesync',
    'https://github.com/caspianzx/project-3',
    'https://github.com/apooshoo/whackakanji'
  ];
let appLinks = [
    "https://fake-granblue.herokuapp.com",
    "https://github.com/apooshoo/animesync",
    "https://hairaffair.herokuapp.com",
    "https://apooshoo.github.io/whackakanji/"
  ];
let createItem = (appNum) => {
    let div = $("<div class='item-container'/>").css({"width": "100%", "height": "100%", "position": "relative", "margin": "10px 0"});
    let imgDiv = $("<div class='img-container'/>").css({"width": "80%", "height": "60%", "margin": "0 auto", "cursor": "pointer"});
    imgDiv.click(()=>{window.location = `${appLinks[appNum]}`})
    let img = $(`<img src='./screens/${screens[appNum]}'/>`).css({"max-width": "100%", "max-height": "100%"});

    imgDiv.append(img);
    div.append(imgDiv);
    //imgDiv done

    let arrowDiv = $("<div class='arrow-container'/>").css({"width": "80%", "height": "30%", "margin": "5px auto", "display": "flex", "justify-content": "center"});
    let arrow = $("<i class='fas fa-hand-pointer fa-lg'/>").css({"margin": "auto 10px"});
    let arrowText = $("<span>Click to visit website</span>").css({"margin": "auto 10px"});
    arrowDiv.append([arrow, arrowText]);

    let textDiv = $("<div class='text-container'/>").css({"width": "80%", "height": "30%", "margin": "0 auto", "display": "flex", "justify-content": "center"});
    let description = $(`<p>${descriptions[appNum]}</p>`).css({"padding": "10px"});

    textDiv.append(description);
    //textDiv done

    let linksDiv = $("<div class='links-container'/>").css({"width": "80%", "height": "30%", "margin": "0 auto", "display": "flex", "justify-content": "center"});
    let githubLink = $(`<a href="${githubLinks[appNum]}"><i class="fab fa-github fa-2x"></i></a>`).css({"margin": "auto 10px"});
    let githubLinkText = $('<p>Github Link</p>').css({"margin": "auto 10px"});
    linksDiv.append([githubLink, githubLinkText]);

    div.append(arrowDiv)
    div.append(textDiv);
    div.append(linksDiv);

    rightCol.append(div);
    rightCol.append($('<hr>'))

}

screens.map((app, index)=>{
    createItem(index)
})