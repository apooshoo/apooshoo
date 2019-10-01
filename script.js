console.log('YO????//');
let rightCol = $('.rightCol-wrapper');

let screens = [
    'fgbf-screen.png',
    'tha-screen.png',
    'v-screen.png',
    'wak.png'
    ];
let descriptions = [
    'A rhythm game featuring characters from the JRPG mobile game Granblue Fantasy.'
  ];
let githubLinks = [
    'https://github.com/apooshoo/fake-granblue-fantasy'
  ];

let div = $("<div class='item-container'/>").css({"width": "100%", "height": "100%", "position": "relative"});
let imgDiv = $("<div class='img-container'/>").css({"width": "80%", "height": "60%", "margin": "0 auto"});
let img = $(`<img src='./screens/${screens[0]}'/>`).css({"max-width": "100%", "max-height": "100%"});

imgDiv.append(img);
div.append(imgDiv);
//imgDiv done

let arrowDiv = $("<div class='arrow-container'/>").css({"width": "80%", "height": "30%", "margin": "5px auto", "display": "flex", "justify-content": "center"});
let arrow = $("<i class='fas fa-hand-pointer fa-lg'/>").css({"margin": "auto 10px"});
let arrowText = $("<span>Click to visit website</span>").css({"margin": "auto 10px"});
arrowDiv.append([arrow, arrowText]);

let textDiv = $("<div class='text-container'/>").css({"width": "80%", "height": "30%", "margin": "0 auto"});
let description = $(`<p>${descriptions[0]}</p>`).css({"padding": "10px"});

textDiv.append(description);
//textDiv done

let linksDiv = $("<div class='links-container'/>").css({"width": "80%", "height": "30%", "margin": "0 auto"});
let githubLink = $(`<a class="col col-2 offset-2" href="${githubLinks[0]}"><i class="fab fa-github fa-2x"></i></a>`);
linksDiv.append(githubLink);

rightCol.append(div);
rightCol.append(arrowDiv)
rightCol.append(textDiv);
rightCol.append(linksDiv);