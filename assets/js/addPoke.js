const main = document.querySelector("main");

const numPokes = 1000;

const fecthPoke = async() => {
    for(let i = 1; i <= numPokes; i++){
        await getPoke(i);
    }
};

const getPoke = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const request = await fetch(url);

    const info = await request.json();
    cardPoke(info);
};

const cardPoke = (poke) => {
    const card = document.createElement('div');
    card.classList = "card";

    const info = document.createElement('div');
    info.classList = "info";
    const id = document.createElement('div');
    id.classList = "id";
    if(poke.id < 10){
        id.textContent = `#000${poke.id}`;
    } else if(poke.id < 100){
        id.textContent = `#00${poke.id}`;
    } else if(poke.id < 1000){
        id.textContent = `#0${poke.id}`;
    } else{
        id.textContent = `#${poke.id}`;
    }
    const divisor = document.createElement('div');
    divisor.classList = "name";
    divisor.textContent = "-"
    const name = document.createElement('div');
    name.classList = "name";
    name.textContent = `${poke.name}`;

    const photo = document.createElement('div');
    photo.classList = "photo";
    const photoBg = document.createElement('div');
    photoBg.classList = "photoBg";
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("fill", "none");
    svg.setAttribute("color", "#ffffff");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("stroke-width", "1");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("xmlns", svgNS);
    const path1 = document.createElementNS(svgNS, "path");
    path1.setAttribute("d", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z");
    const path2 = document.createElementNS(svgNS, "path");
    path2.setAttribute("d", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z");
    const path3 = document.createElementNS(svgNS, "path");
    path3.setAttribute("d", "M15 12h6M3 12h6-6Z");
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    const photoSpriteN = document.createElement('img');
    photoSpriteN.classList = "photoSprite";
    photoSpriteN.classList = "normal";
    photoSpriteN.src = `${poke.sprites.front_default}`;
    const photoSpriteS = document.createElement('img');
    photoSpriteS.classList = "photoSprite";
    photoSpriteS.classList = "shiny";
    photoSpriteS.src = `${poke.sprites.front_shiny}`;

    const types = document.createElement('div');
    types.classList = "types";
    const typeAPI = poke.types;
    typeAPI.forEach((typeRes) => {
        const type = document.createElement('div');
        type.classList.add('type');
    
        const typeIcon = document.createElement('div');
        typeIcon.classList.add('typeIcon');
    
        const imgTypeIcon = document.createElement('img');
    
        const typeName = document.createElement('div');
        typeName.classList.add('typeName');
        typeName.textContent = typeRes.type.name;

        if(typeRes.type.name == "bug"){
            type.style.backgroundColor = "#90c12c"
            imgTypeIcon.src = `assets/img/types/bugIcon.png`;
        } else if(typeRes.type.name == "dark"){
            type.style.backgroundColor = "#5a5366"
            imgTypeIcon.src = `assets/img/types/darkIcon.png`;
        } else if(typeRes.type.name == "dragon"){
            type.style.backgroundColor = "#0a6dc4"
            imgTypeIcon.src = `assets/img/types/dragonIcon.png`;
        } else if(typeRes.type.name == "electric"){
            type.style.backgroundColor = "#f3d23b"
            imgTypeIcon.src = `assets/img/types/electricIcon.png`;
        } else if(typeRes.type.name == "fairy"){
            type.style.backgroundColor = "#ec8fe6"
            imgTypeIcon.src = `assets/img/types/fairyIcon.png`;
        } else if(typeRes.type.name == "fighting"){
            type.style.backgroundColor = "#ce4069"
            imgTypeIcon.src = `assets/img/types/fightingIcon.png`;
        } else if(typeRes.type.name == "fire"){
            type.style.backgroundColor = "#ff9c54"
            imgTypeIcon.src = `assets/img/types/fireIcon.png`;
        } else if(typeRes.type.name == "flying"){
            type.style.backgroundColor = "#8fa8dd"
            imgTypeIcon.src = `assets/img/types/flyingIcon.png`;
        } else if(typeRes.type.name == "ghost"){
            type.style.backgroundColor = "#5269ac"
            imgTypeIcon.src = `assets/img/types/ghostIcon.png`;
        } else if(typeRes.type.name == "grass"){
            type.style.backgroundColor = "#63bb5b"
            imgTypeIcon.src = `assets/img/types/grassIcon.png`;
        } else if(typeRes.type.name == "ground"){
            type.style.backgroundColor = "#da7844"
            imgTypeIcon.src = `assets/img/types/groundIcon.png`;
        } else if(typeRes.type.name == "ice"){
            type.style.backgroundColor = "#74cec0"
            imgTypeIcon.src = `assets/img/types/iceIcon.png`;
        } else if(typeRes.type.name == "normal"){
            type.style.backgroundColor = "#9099a1"
            imgTypeIcon.src = `assets/img/types/normalIcon.png`;
        } else if(typeRes.type.name == "poison"){
            type.style.backgroundColor = "#ab6ac8"
            imgTypeIcon.src = `assets/img/types/poisonIcon.png`;
        } else if(typeRes.type.name == "psychic"){
            type.style.backgroundColor = "#f97176"
            imgTypeIcon.src = `assets/img/types/psychicIcon.png`;
        } else if(typeRes.type.name == "rock"){
            type.style.backgroundColor = "#c7b78b"
            imgTypeIcon.src = `assets/img/types/rockIcon.png`;
        } else if(typeRes.type.name == "steel"){
            type.style.backgroundColor = "#5a8ea1"
            imgTypeIcon.src = `assets/img/types/steelIcon.png`;
        } else if(typeRes.type.name == "water"){
            type.style.backgroundColor = "#4d90d5"
            imgTypeIcon.src = `assets/img/types/waterIcon.png`;
        }
    
        typeIcon.appendChild(imgTypeIcon);
        typeIcon.appendChild(typeName);
        type.appendChild(typeIcon);
        types.appendChild(type);
    });
    
    const moreInfo = document.createElement('div');
    moreInfo.classList = "moreInfo";
    const pokeInfo = document.createElement('div');
    pokeInfo.classList = "pokeInfo";
    const pokeInfoNameId = document.createElement('div');
    pokeInfoNameId.classList = "pokeInfoNameId";
    const pokeInfoName = document.createElement('div');
    pokeInfoName.classList = "pokeInfoName";
    pokeInfoName.textContent = `${poke.name}`;
    const pokeInfoDivisor = document.createElement('div');
    pokeInfoDivisor.classList = "pokeInfoName";
    pokeInfoDivisor.textContent = `-`;
    const pokeInfoId = document.createElement('div');
    pokeInfoId.classList = "pokeInfoId";    
    if(poke.id < 10){
        pokeInfoId.textContent = `#000${poke.id}`;
    } else if(poke.id < 100){
        pokeInfoId.textContent = `#00${poke.id}`;
    } else if(poke.id < 1000){
        pokeInfoId.textContent = `#0${poke.id}`;
    } else{
        pokeInfoId.textContent = `#${poke.id}`;
    }

    info.appendChild(id);
    info.appendChild(divisor);
    info.appendChild(name);
    photoBg.appendChild(svg);
    photo.appendChild(photoBg);
    photo.appendChild(photoSpriteN);
    photo.appendChild(photoSpriteS);
    card.appendChild(info);
    card.appendChild(photo);
    card.appendChild(types);
    main.appendChild(card);

    pokeInfoNameId.appendChild(pokeInfoId);
    pokeInfoNameId.appendChild(pokeInfoDivisor);
    pokeInfoNameId.appendChild(pokeInfoName);
    pokeInfo.appendChild(pokeInfoNameId);
    moreInfo.appendChild(pokeInfo);
    main.appendChild(moreInfo);
};

fecthPoke();