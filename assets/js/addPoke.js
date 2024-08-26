//Elementos Principais
const body = document.querySelector('body');

const main = document.querySelector('main');

const cardsContainer = document.createElement('div');
cardsContainer.classList = "cardsContainer";

const moreInfos = document.createElement('div');


//Funções API
const numPokes = 1025;

const fecthPoke = async() => {
    for(let i = 1; i <= numPokes; i++){
        await getPoke(i);
    }
};

const getPoke = async(id) => {
    try {
        const urlPoke = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const requestPoke = await fetch(urlPoke);
        if (!requestPoke.ok) throw new Error(`Erro ao carregar pokémon de id: ${id}`);
        const infoPoke = await requestPoke.json();

        const urlSpecie = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
        const requestSpecie = await fetch(urlSpecie);
        const infoSpecie = await requestSpecie.json();

        cardPoke(infoPoke, infoSpecie);

    } catch (error) {
        console.error(error);
    }
};


//Criando Cards
const cardPoke = (poke, specie) => {
    //Criando Card Pequeno
    const card = document.createElement('div');
    card.classList = "card";


    //Colocando Nome e ID (Card Pequeno)
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


    //Colocando Sprite (Card Pequeno)
    const photo = document.createElement('div');
    photo.classList = "photo";

    const photoBg = document.createElement('div');
    photoBg.classList = "photoBg";

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("fill", "none");
    svg.setAttribute("color", "#e6e9ed");
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

    const photoSprite = document.createElement('img');
    photoSprite.classList = "photoSprite";
    photoSprite.src = `${poke.sprites.other.home.front_default}`;

    photo.addEventListener('mouseover', function(){
        photoSprite.src = `${poke.sprites.other.home.front_shiny}`;
    });

    photo.addEventListener('mouseleave', function(){
        photoSprite.src = `${poke.sprites.other.home.front_default}`;
    });


    //Colocando Tipagem (Card Pequeno)
    const types = document.createElement('div');
    types.classList = "types";

    const typeAPI = poke.types;
    typeAPI.forEach((typeRes) => {
        const type = document.createElement('div');
        type.classList = "type";
    
        const typeIcon = document.createElement('div');
        typeIcon.classList = "typeIcon";
    
        const imgTypeIcon = document.createElement('img');
    
        const typeName = document.createElement('div');
        typeName.classList = "typeName";
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

    
    //Aplicando Card Pequeno
    info.appendChild(id);
    info.appendChild(divisor);
    info.appendChild(name);

    photoBg.appendChild(svg);

    photo.appendChild(photoBg);
    photo.appendChild(photoSprite);

    card.appendChild(info);
    card.appendChild(photo);
    card.appendChild(types);

    cardsContainer.appendChild(card);
    

    //Criando Card Grande
    card.addEventListener('click', function() {
        //Limpando Div (Card Grande)
        moreInfos.innerHTML = '';
        

        //Travando Scroll
        body.style.overflow = "hidden";


        //Criando Div (Card Grande)
        moreInfos.classList = "moreInfos";
        const closeInfo = document.createElement('div');


        //Botão de Fechar (Card Grande)
        closeInfo.classList = "closeInfo";
        closeInfo.textContent = "X";
        moreInfos.appendChild(closeInfo);

        closeInfo.addEventListener('click', function() {
            moreInfos.style.visibility = "hidden";
            body.style.overflow = "auto";
        });


        //Colando Nome e ID (Card Grande) 
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
        };


        //Colocando Sprite (Card Grande)
        const infoPhoto = document.createElement('div');
        infoPhoto.classList = "infoPhoto";

        const infoSvgNS = "http://www.w3.org/2000/svg";
        const infoSvg = document.createElementNS(infoSvgNS, "svg");
        infoSvg.setAttribute("width", "100%");
        infoSvg.setAttribute("height", "100%");
        infoSvg.setAttribute("fill", "none");
        infoSvg.setAttribute("color", "#e6e9ed");
        infoSvg.setAttribute("stroke", "currentColor");
        infoSvg.setAttribute("stroke-linecap", "round");
        infoSvg.setAttribute("stroke-linejoin", "round");
        infoSvg.setAttribute("stroke-width", "1");
        infoSvg.setAttribute("viewBox", "0 0 24 24");
        infoSvg.setAttribute("xmlns", infoSvgNS);
        const infoPath1 = document.createElementNS(infoSvgNS, "path");
        infoPath1.setAttribute("d", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z");
        const infoPath2 = document.createElementNS(infoSvgNS, "path");
        infoPath2.setAttribute("d", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z");
        const infoPath3 = document.createElementNS(infoSvgNS, "path");
        infoPath3.setAttribute("d", "M15 12h6M3 12h6-6Z");
        infoSvg.appendChild(infoPath1);
        infoSvg.appendChild(infoPath2);
        infoSvg.appendChild(infoPath3);

        const infoSprite = document.createElement('img');
        infoSprite.classList = "infoSprite";
        infoSprite.src = `${poke.sprites.other.home.front_default}`;

        infoPhoto.addEventListener('mouseover', function(){
            infoSprite.src = `${poke.sprites.other.home.front_shiny}`;
        });
        infoPhoto.addEventListener('mouseleave', function(){
            infoSprite.src = `${poke.sprites.other.home.front_default}`;
        });


        //Trocando Sprite (Card Grande)
        const changeSpriteContainer = document.createElement('div');
        changeSpriteContainer.classList = "changeSpriteContainer";

        const btnSprite1 = document.createElement('div');
        btnSprite1.classList = "btnSprite";
        btnSprite1.textContent = "Pixel";

        btnSprite1.addEventListener('click', function(){
            infoSprite.src = `${poke.sprites.front_default}`;

            infoPhoto.addEventListener('mouseover', function(){
                infoSprite.src = `${poke.sprites.front_shiny}`;
            });

            infoPhoto.addEventListener('mouseleave', function(){
                infoSprite.src = `${poke.sprites.front_default}`;
            });
        });

        const btnSprite2 = document.createElement('div');
        btnSprite2.classList = "btnSprite";
        btnSprite2.textContent = "3D";

        btnSprite2.addEventListener('click', function(){
            infoSprite.src = `${poke.sprites.other.home.front_default}`;

            infoPhoto.addEventListener('mouseover', function(){
                infoSprite.src = `${poke.sprites.other.home.front_shiny}`;
            });

            infoPhoto.addEventListener('mouseleave', function(){
                infoSprite.src = `${poke.sprites.other.home.front_default}`;
            });
        });

        const btnSprite3 = document.createElement('div');
        btnSprite3.classList = "btnSprite";
        btnSprite3.textContent = "Drawing";

        btnSprite3.addEventListener('click', function(){
            infoSprite.src = `${poke.sprites.other['official-artwork'].front_default}`;

            infoPhoto.addEventListener('mouseover', function(){
                infoSprite.src = `${poke.sprites.other['official-artwork'].front_shiny}`;
            });

            infoPhoto.addEventListener('mouseleave', function(){
                infoSprite.src = `${poke.sprites.other['official-artwork'].front_default}`;
            });
        });

        const btnSprite4 = document.createElement('div');
        btnSprite4.classList = "btnSprite";
        btnSprite4.textContent = "Animated";

        btnSprite4.addEventListener('click', function(){
            infoSprite.src = `${poke.sprites.other.showdown.front_default}`;

            infoPhoto.addEventListener('mouseover', function(){
                infoSprite.src = `${poke.sprites.other.showdown.front_shiny}`;
            });

            infoPhoto.addEventListener('mouseleave', function(){
                infoSprite.src = `${poke.sprites.other.showdown.front_default}`;
            });
        });


        //Colocando Peso, Altura e Tipagem
        const infoMore = document.createElement('div');
        infoMore.classList = "infoMore";

        const infoMoreHeight = document.createElement('div');
        infoMoreHeight.classList = "infoMoreValues";
        const heightSvgNS = "http://www.w3.org/2000/svg";
        const heightSvg = document.createElementNS(heightSvgNS, "svg");
        heightSvg.setAttribute("viewBox", "0 0 24 24");
        heightSvg.setAttribute("fill", "none");
        heightSvg.setAttribute("xmlns", heightSvgNS);
        const heightGBackground = document.createElementNS(heightSvgNS, "g");
        heightGBackground.setAttribute("id", "SVGRepo_bgCarrier");
        heightGBackground.setAttribute("stroke-width", "0");
        const heightGTracer = document.createElementNS(heightSvgNS, "g");
        heightGTracer.setAttribute("id", "SVGRepo_tracerCarrier");
        heightGTracer.setAttribute("stroke-linecap", "round");
        heightGTracer.setAttribute("stroke-linejoin", "round");
        const heightGIcon = document.createElementNS(heightSvgNS, "g");
        heightGIcon.setAttribute("id", "SVGRepo_iconCarrier");
        const heightPath = document.createElementNS(heightSvgNS, "path");
        heightPath.setAttribute("d", "M12 22V2M12 22L8 18M12 22L16 18M12 2L8 6M12 2L16 6");
        heightPath.setAttribute("stroke", "#e6e9ed");
        heightPath.setAttribute("stroke-width", "2");
        heightPath.setAttribute("stroke-linecap", "round");
        heightPath.setAttribute("stroke-linejoin", "round");
        heightSvg.appendChild(heightGBackground);
        heightSvg.appendChild(heightGTracer);
        heightSvg.appendChild(heightGIcon);
        heightGIcon.appendChild(heightPath);
        const infoMoreHeightValue = document.createElement('div');
        infoMoreHeightValue.classList = "infoMoreValuesText";
        const height = poke.height / 10;
        infoMoreHeightValue.textContent = `Height: ${height}m`;

        const infoMoreWeight = document.createElement('div');
        infoMoreWeight.classList = "infoMoreValues";
        const weightSvgNS = "http://www.w3.org/2000/svg";
        const weightSvg = document.createElementNS(weightSvgNS, "svg");
        weightSvg.setAttribute("viewBox", "0 0 512 512");
        weightSvg.setAttribute("xmlns", weightSvgNS);
        weightSvg.setAttribute("fill", "#000000");
        const weightGBackground = document.createElementNS(weightSvgNS, "g");
        weightGBackground.setAttribute("id", "SVGRepo_bgCarrier");
        weightGBackground.setAttribute("stroke-width", "0");
        const weightGTracer = document.createElementNS(weightSvgNS, "g");
        weightGTracer.setAttribute("id", "SVGRepo_tracerCarrier");
        weightGTracer.setAttribute("stroke-linecap", "round");
        weightGTracer.setAttribute("stroke-linejoin", "round");
        const weightGIcon = document.createElementNS(weightSvgNS, "g");
        weightGIcon.setAttribute("id", "SVGRepo_iconCarrier");
        const weightPath = document.createElementNS(weightSvgNS, "path");
        weightPath.setAttribute("fill", "#e6e9ed");
        weightPath.setAttribute("d", "M256 46c-45.074 0-82 36.926-82 82 0 25.812 12.123 48.936 30.938 64H128L32 480h448l-96-288h-76.938C325.877 176.936 338 153.812 338 128c0-45.074-36.926-82-82-82zm0 36c25.618 0 46 20.382 46 46s-20.382 46-46 46-46-20.382-46-46 20.382-46 46-46zm-82.215 202.95h23.5v33.263l33.873-33.264h27.283l-43.883 43.15 48.4 47.974H233.54l-36.255-35.888v35.888h-23.5V284.95zm119.934 21.24c4.76 0 8.952.934 12.573 2.806 3.62 1.872 6.938 4.82 9.95 8.85v-10.13h21.972v61.462c0 10.986-3.48 19.368-10.438 25.146-6.917 5.82-16.968 8.727-30.152 8.727-4.272 0-8.4-.325-12.39-.976-3.986-.65-7.996-1.647-12.024-2.99v-17.03c3.826 2.198 7.57 3.826 11.23 4.884 3.664 1.098 7.347 1.648 11.05 1.648 7.162 0 12.41-1.566 15.746-4.7 3.337-3.132 5.006-8.035 5.006-14.708v-4.7c-3.01 3.986-6.328 6.916-9.95 8.788-3.62 1.87-7.813 2.808-12.573 2.808-8.343 0-15.238-3.275-20.69-9.826-5.453-6.592-8.18-14.974-8.18-25.146 0-10.214 2.727-18.576 8.18-25.086 5.452-6.55 12.347-9.827 20.69-9.827zm8.118 15.746c-4.517 0-8.038 1.67-10.56 5.005-2.523 3.338-3.784 8.058-3.784 14.162 0 6.266 1.22 11.026 3.662 14.28 2.442 3.215 6.003 4.823 10.682 4.823 4.557 0 8.096-1.67 10.62-5.006 2.522-3.337 3.784-8.036 3.784-14.098 0-6.104-1.262-10.824-3.785-14.16-2.523-3.337-6.062-5.006-10.62-5.006z");
        weightGIcon.appendChild(weightPath);
        weightSvg.appendChild(weightGBackground);
        weightSvg.appendChild(weightGTracer);
        weightSvg.appendChild(weightGIcon);
        const infoMoreWeightValue = document.createElement('div');
        infoMoreWeightValue.classList = "infoMoreValuesText";
        const weight = poke.weight / 10;
        infoMoreWeightValue.textContent = `Weight: ${weight}kg`;

        const infoTypes = document.createElement('div');
        infoTypes.classList = "infoTypes";

        const infoTypeAPI = poke.types;
        infoTypeAPI.forEach((typeRes) => {
            const infoType = document.createElement('div');
            infoType.classList = "infoType";
        
            const infoTypeIcon = document.createElement('div');
            infoTypeIcon.classList = "infoTypeIcon";
        
            const infoImgTypeIcon = document.createElement('img');
        
            const infoTypeName = document.createElement('div');
            infoTypeName.classList = "infoTypeName";
            infoTypeName.textContent = typeRes.type.name;

            if(typeRes.type.name == "bug"){
                infoType.style.backgroundColor = "#90c12c"
                infoImgTypeIcon.src = `assets/img/types/bugIcon.png`;
            } else if(typeRes.type.name == "dark"){
                infoType.style.backgroundColor = "#5a5366"
                infoImgTypeIcon.src = `assets/img/types/darkIcon.png`;
            } else if(typeRes.type.name == "dragon"){
                infoType.style.backgroundColor = "#0a6dc4"
                infoImgTypeIcon.src = `assets/img/types/dragonIcon.png`;
            } else if(typeRes.type.name == "electric"){
                infoType.style.backgroundColor = "#f3d23b"
                infoImgTypeIcon.src = `assets/img/types/electricIcon.png`;
            } else if(typeRes.type.name == "fairy"){
                infoType.style.backgroundColor = "#ec8fe6"
                infoImgTypeIcon.src = `assets/img/types/fairyIcon.png`;
            } else if(typeRes.type.name == "fighting"){
                infoType.style.backgroundColor = "#ce4069"
                infoImgTypeIcon.src = `assets/img/types/fightingIcon.png`;
            } else if(typeRes.type.name == "fire"){
                infoType.style.backgroundColor = "#ff9c54"
                infoImgTypeIcon.src = `assets/img/types/fireIcon.png`;
            } else if(typeRes.type.name == "flying"){
                infoType.style.backgroundColor = "#8fa8dd"
                infoImgTypeIcon.src = `assets/img/types/flyingIcon.png`;
            } else if(typeRes.type.name == "ghost"){
                infoType.style.backgroundColor = "#5269ac"
                infoImgTypeIcon.src = `assets/img/types/ghostIcon.png`;
            } else if(typeRes.type.name == "grass"){
                infoType.style.backgroundColor = "#63bb5b"
                infoImgTypeIcon.src = `assets/img/types/grassIcon.png`;
            } else if(typeRes.type.name == "ground"){
                infoType.style.backgroundColor = "#da7844"
                infoImgTypeIcon.src = `assets/img/types/groundIcon.png`;
            } else if(typeRes.type.name == "ice"){
                infoType.style.backgroundColor = "#74cec0"
                infoImgTypeIcon.src = `assets/img/types/iceIcon.png`;
            } else if(typeRes.type.name == "normal"){
                infoType.style.backgroundColor = "#9099a1"
                infoImgTypeIcon.src = `assets/img/types/normalIcon.png`;
            } else if(typeRes.type.name == "poison"){
                infoType.style.backgroundColor = "#ab6ac8"
                infoImgTypeIcon.src = `assets/img/types/poisonIcon.png`;
            } else if(typeRes.type.name == "psychic"){
                infoType.style.backgroundColor = "#f97176"
                infoImgTypeIcon.src = `assets/img/types/psychicIcon.png`;
            } else if(typeRes.type.name == "rock"){
                infoType.style.backgroundColor = "#c7b78b"
                infoImgTypeIcon.src = `assets/img/types/rockIcon.png`;
            } else if(typeRes.type.name == "steel"){
                infoType.style.backgroundColor = "#5a8ea1"
                infoImgTypeIcon.src = `assets/img/types/steelIcon.png`;
            } else if(typeRes.type.name == "water"){
                infoType.style.backgroundColor = "#4d90d5"
                infoImgTypeIcon.src = `assets/img/types/waterIcon.png`;
            }
        
            infoTypeIcon.appendChild(infoImgTypeIcon);
            infoTypeIcon.appendChild(infoTypeName);
            infoType.appendChild(infoTypeIcon);
            infoTypes.appendChild(infoType);
        });
        

        //Colocando Descrição
        const pokeMore = document.createElement('div');
        pokeMore.classList = "pokeMore";

        const moreLineUp = document.createElement('div');
        moreLineUp.classList = "moreLineUp";

        const moreDescriptionText = document.createElement('div');
        moreDescriptionText.classList = "moreDescriptionText";

        if(specie.generation.name == "generation-i" || specie.generation.name == "generation-ii" || specie.generation.name == "generation-iii"){
            const fileterdFlavorTextEntries = specie.flavor_text_entries.filter(
                (element) => element.language.name === "en"
            );

            const flavorTextEntry = fileterdFlavorTextEntries.length > 0 ? fileterdFlavorTextEntries[10] : {};

            moreDescriptionText.textContent = flavorTextEntry.flavor_text;
            moreLineUp.appendChild(moreDescriptionText);
        } else{
            const fileterdFlavorTextEntries = specie.flavor_text_entries.filter((element) => element.language.name === "en");

            const flavorTextEntry = fileterdFlavorTextEntries.length > 0 ? fileterdFlavorTextEntries[0] : {};
            
            moreDescriptionText.textContent = flavorTextEntry.flavor_text;
            moreLineUp.appendChild(moreDescriptionText);
        };
        
        
        //Aplicando Card Grande
        pokeInfoNameId.appendChild(pokeInfoId);
        pokeInfoNameId.appendChild(pokeInfoDivisor);
        pokeInfoNameId.appendChild(pokeInfoName);

        changeSpriteContainer.appendChild(btnSprite1);
        changeSpriteContainer.appendChild(btnSprite2);
        changeSpriteContainer.appendChild(btnSprite3);
        changeSpriteContainer.appendChild(btnSprite4);

        infoPhoto.appendChild(infoSvg);
        infoPhoto.appendChild(infoSprite);

        infoMoreHeight.appendChild(heightSvg);
        infoMoreHeight.appendChild(infoMoreHeightValue);

        infoMoreWeight.appendChild(weightSvg);
        infoMoreWeight.appendChild(infoMoreWeightValue);

        infoMore.appendChild(infoMoreHeight);
        infoMore.appendChild(infoMoreWeight);
        infoMore.appendChild(infoTypes);

        pokeInfo.appendChild(pokeInfoNameId);
        pokeInfo.appendChild(infoPhoto);
        pokeInfo.appendChild(changeSpriteContainer);
        pokeInfo.appendChild(infoMore);

        pokeMore.appendChild(moreLineUp);

        moreInfo.appendChild(pokeInfo);
        moreInfo.appendChild(pokeMore);

        moreInfos.appendChild(moreInfo);

        moreInfos.style.visibility = "visible";
    });

    //Colocando Status (Card Grande)
    const infoStatus = document.createElement('div');
    infoStatus.classList = "infoStatus";

    const statsAPI = poke.stats;
    statsAPI.forEach((statsRes) => {
        const infoStat = document.createElement('div');
        infoStat.classList = "infoStat";
        
        const infoStatNameValue = document.createElement('div');
        infoStatNameValue.classList = "infoStatNameValue";

        const infoStatName = document.createElement('div');
        infoStatName.classList = "infoStatName";
        infoStatName.textContent = `${statsRes.stat.name}: ${statsRes.base_stat}`;

        const infoStatBar = document.createElement('div');
        infoStatBar.classList = "infoStatBar";

        const infoStatProgress = document.createElement('div');
        infoStatProgress.classList = "infoStatProgress";
        const per255 = statsRes.base_stat / 2.55;
        infoStatProgress.style.width = `${per255}%`;

        if(statsRes.stat.name == "hp"){
            infoStatProgress.style.backgroundColor = 'rgb(0, 175, 0)';
        } else if(statsRes.stat.name == "attack"){
            infoStatProgress.style.backgroundColor = 'rgb(255, 131, 131)';
        } else if(statsRes.stat.name == "defense"){
            infoStatProgress.style.backgroundColor = 'rgb(171, 126, 255)';
        } else if(statsRes.stat.name == "special-attack"){
            infoStatProgress.style.backgroundColor = 'rgb(255, 113, 31)';
        } else if(statsRes.stat.name == "special-defense"){
            infoStatProgress.style.backgroundColor = 'rgb(126, 135, 255)';
        } else if(statsRes.stat.name == "speed"){
            infoStatProgress.style.backgroundColor = 'rgb(255, 126, 197)';
        };


        infoStatNameValue.appendChild(infoStatName);
        infoStatBar.appendChild(infoStatProgress);
        infoStat.appendChild(infoStatNameValue);
        infoStat.appendChild(infoStatBar);
        infoStatus.appendChild(infoStat);
    });
};


//Aplicando Cards ao Site
main.appendChild(moreInfos);
main.appendChild(cardsContainer)

fecthPoke();





