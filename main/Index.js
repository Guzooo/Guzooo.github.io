const giraffes = {
    1: {
        noiseDistanceMin: 50,
        noiseDistanceMax: 90,
        countOfDiffusion: 6,
        colorsForSpace: ["#e2ddd2", "#e2ded2", "#e2ded3", "#e2dfd3", "#e2dfd4", "#e3e0d4", "#e3e1d5", "#e3e1d5", "#e3e2d6", "#e3e2d6", "#e3e3d7"],
        colorsForCell: ["#592f15", "#5b3016", "#5c3217", "#5e3319", "#5f341a", "#61361b", "#62371d", "#64381e", "#653a1f", "#673b20", "#683c22", "#6a3e23", "#6b3f24", "#6d4025", "#6e4227", "#704328", "#72452a", "#75462c", "#77482e", "#7a4a2f", "#7c4b31", "#7e4d33", "#814f35", "#835137", "#865239", "#88543b", "#89553c", "#8a563d", "#8b573f", "#8b5840", "#8c5941", "#8d5a42", "#8e5b43", "#8f5c45", "#905e46", "#915f47", "#926048", "#926149", "#93624b", "#94634c", "#95644d"],
        title: "Żyrafa siatkowana",
        description: 'Występują w Północnej Kenii. Ich wyróżniającą cechą wśród innych podgatunków jest umaszczenie. Ma ono postać siatki – cienkie linie jasnego koloru odgraniczają duże pola kasztanowego brązu. Ich cętkowany wzór sierści pomaga zakamuflować je na suchej sawannie.'
    },
    2: {
        noiseDistanceMin: 50,
        noiseDistanceMax: 90,
        countOfDiffusion: 7,
        colorsForSpace: ["#d3bf9e", "#d4c0a0", "#d5c2a1", "#d7c3a3", "#d8c5a5", "#d9c6a6", "#dac7a8", "#dbc9aa", "#ddcaac", "#deccad", "#dfcdaf"],
        colorsForCell: ["#986d3d", "#9a6f3e", "#9b7040", "#9d7241", "#9f7343", "#a07544", "#a27646", "#a47847", "#a57949", "#a77b4a", "#a97c4c", "#aa7e4d", "#ac7f4f", "#ae8150", "#af8252", "#b18453", "#b48755", "#b68956", "#b98c58", "#bc8e59", "#bf915b", "#c1935d", "#c4965e", "#c79960", "#c99b61", "#cc9e63", "#cd9f65", "#cda066", "#cea168", "#cea269", "#cfa36b", "#d0a46c", "#d0a56e", "#d1a56f", "#d1a671", "#d2a772", "#d3a874", "#d3a975", "#d4aa77", "#d4ab78", "#d5ac7a"],
        title: "Żyrafa zachodnioafrykańska",
        description: 'Od 2011 roku podgatunek ten przeżywa tylko w kilku izolowanych grupach, zawierających łącznie około 400 osobników. Ostatnie samowystarczalne stado znajduje się w południowo-zachodnim Nigrze. Ten podgatunek żyrafy widocznie różni się od innych typów jasnymi, brązowymi plamami. Inne żyrafy mają znacznie ciemniejsze plamy.'
    },
    3: {
        noiseDistanceMin: 50,
        noiseDistanceMax: 90,
        countOfDiffusion: 8,
        colorsForSpace: ["#e8d5ac", "#e6d2aa", "#e5d0a8", "#e3cda5", "#e1cba3", "#e0c8a1", "#dec59f", "#dcc39d", "#dac09b", "#d9be99", "#d7bb97"],
        colorsForCell: ["#a1763d", "#a2773e", "#a47940", "#a57a41", "#a77b42", "#a87d43", "#aa7e45", "#ab7f46", "#ad8147", "#ae8248", "#b0834a", "#b1854b", "#b3864c", "#b4874d", "#b6894f", "#b78a50", "#b88c51", "#ba8d53", "#bb8f54", "#bd9056", "#be9257", "#c09459", "#c1955a", "#c3975c", "#c4985d", "#c69a5f", "#c79b61", "#c79c62", "#c89d64", "#c99e65", "#c99f67", "#caa069", "#cba16a", "#cba26c", "#cca36d", "#cda46f", "#cda571", "#cea672", "#cfa774", "#cfa875", "#d0a977"],
        title: "Żyrafa numbijska",
        description: 'Żyrafa nubijska była szeroko rozpowszechniona w całej północno-wschodniej Afryce. Jednak w przeciągu 3 lat ich populacja spadła o 95%, została dlatego wymieniony jako podgatunek krytycznie zagrożony. Żyrafa nubijska ma ostro zaznaczone, kasztanowe plamy otoczone przeważnie białymi liniami, podczas gdy na spodniej stronie ciała, nie ma plam.'
    },
    4: {
        noiseDistanceMin: 60,
        noiseDistanceMax: 90,
        countOfDiffusion: 8,
        colorsForSpace: ["#e6d5b3", "#e8d6b5", "#e9d8b7", "#ebd9b9", "#ecdbbb", "#eedcbd", "#efdec0", "#f1dfc2", "#f2e1c4", "#f4e2c6", "#f5e4c8"],
        colorsForCell: ["#7c5d3b", "#7d5e3c", "#7f5f3d", "#80613f", "#816240", "#836341", "#846542", "#856643", "#876745", "#886846", "#896a47", "#8b6b48", "#8c6c49", "#8d6d4b", "#8f6f4c", "#90704d", "#92724e", "#947550", "#967751", "#987953", "#9b7b54", "#9d7e56", "#9f8057", "#a18259", "#a3855a", "#a5875c", "#a6885e", "#a7895f", "#a88a61", "#a98b62", "#aa8d64", "#ab8e66", "#ac8f67", "#ad9069", "#ae916a", "#af926c", "#b0936e", "#b1956f", "#b29671", "#b39772", "#b49874"],
        title: "Żyrafa kordofańska",
        description: 'Posiadają blade i nieregularne wzory. Ten podgatunek ma terytorium obejmujące północny Kamerun, Republikę Środkowoafrykańską i południowe regiony Czadu. Mówi się również, że w zachodnim Sudanie jest kilka populacji. Żyrafa Kordofan odróżnia się od innych podgatunków żyrafy niewielkim ciałem i nieregularnymi plamami na wewnętrznych częściach nóg. Obecnie na wolności żyje około 2000 osobników, a populacja maleje w zastraszającym tempie z powodu kłusownictwa. Żyrafa Kordofan jest sklasyfikowana jako zagrożona przez IUCN.'
    },
    5: {
        noiseDistanceMin: 20,
        noiseDistanceMax: 50,
        countOfDiffusion: 8,
        colorsForSpace: ["#b79d78", "#b89e79", "#b99f7b", "#baa17c", "#bba27e", "#bca37f", "#bda481", "#bea582", "#bfa784", "#c0a885", "#c1a987"],
        colorsForCell: ["#734b1e", "#744c1f", "#754d20", "#774e21", "#784f22", "#795023", "#7a5124", "#7b5225", "#7d5326", "#7e5427", "#7f5528", "#805629", "#81572a", "#83582b", "#84592c", "#855a2d", "#875c2f", "#885e32", "#8a6034", "#8c6236", "#8e6438", "#8f673b", "#91693d", "#936b3f", "#946d42", "#966f44", "#977046", "#987248", "#997349", "#9b754b", "#9c764d", "#9d774f", "#9e7951", "#9f7a52", "#a07c54", "#a17d56", "#a37e58", "#a4805a", "#a5815b", "#a6835d", "#a7845f"],
        title: "Żyrafa angolska",
        description: 'Pomimo swojej nazwy, żyrafy angolskie wymarły w Angoli przez translokacje z Namibii. Żyrafa angolska ma stosunkowo jasny kolor. W północno-zachodniej Namibii, gdzie jest szczególnie sucho, mogą być prawie bezbarwne. Mają duże, nieregularnie ząbkowane i jasnobrązowe plamy. Ich łaty są otoczone bladokremowym kolorem, a ich dolne nogi są przypadkowo nakrapiane nierównymi plamami.'
    },
    6: {
        noiseDistanceMin: 20,
        noiseDistanceMax: 50,
        countOfDiffusion: 6,
        colorsForSpace: ["#be9e76", "#c1a179", "#c4a57c", "#c8a880", "#cbab83", "#ceae86", "#d1b28a", "#d4b58d", "#d8b890", "#dbbc94", "#debf97"],
        colorsForCell: ["#8c6236", "#8d6438", "#8f6539", "#90673b", "#92683d", "#936a3f", "#956c40", "#966d42", "#986f44", "#997145", "#9b7247", "#9c7449", "#9e754b", "#9f774d", "#a1794e", "#a27a50", "#a47c52", "#a57e54", "#a77f55", "#a88157", "#aa8359", "#ab845b", "#ad865d", "#ae885e", "#b08960", "#b18b62", "#b38d64", "#b48e66", "#b69067", "#b79269", "#b9946b", "#ba956d", "#bc976f", "#bd9971", "#bf9a73", "#c09c74", "#c19e76", "#c3a078", "#c4a17a", "#c6a37c", "#c6a47d"],
        title: "Żyrafa południowoafrykańska",
        description: 'Ma zaokrąglone plamki, niektóre przypominające gwiazdy na jasnobrązowym tle, spływające do kopyt. Tak jak sugeruje jej nazwa, występuje w północnej Afryce Południowej - Botswanie, Zimbabwe i Mozambiku. Po lokalnych wyginięciach w różnych miejscach, żyrafy południowoafrykańskie zostały ponownie wprowadzone w wielu częściach Afryki Południowej, w tym w Suazi.'
    },
    7: {
        noiseDistanceMin: 20,
        noiseDistanceMax: 50,
        countOfDiffusion: 8,
        colorsForSpace: ["#eac49d", "#ebc8a1", "#edcca6", "#eed0aa", "#f0d3af", "#f1d7b4", "#f3dbb8", "#f5dfbd", "#f6e3c2", "#f8e6c7", "#faeacc"],
        colorsForCell: ["#46362e", "#4b382f", "#4f3b30", "#543d31", "#593f31", "#5e4132", "#624433", "#674634", "#6c4835", "#714b36", "#764d36", "#7a4f37", "#7f5238", "#845439", "#895739", "#8e593a", "#915c3c", "#935f3e", "#96623f", "#986541", "#9b6843", "#9d6b45", "#a06e47", "#a27149", "#a5744b", "#a7774d", "#a8784f", "#a97a50", "#aa7b52", "#ab7c54", "#ac7e56", "#ad7f57", "#ae8059", "#af825b", "#b0835d", "#b1845e", "#b28660", "#b38762", "#b48863", "#b58a65", "#b68b67"],
        title: "Żyrafa rotszylda",
        description: 'Żyrafy te mają zarysowane ostro nieregularne plamy na całym ciele, widoczne na kremowym tle. Plamy na ciele dorosłych osobników są ciemniejsze. Dorosłe samce osiągają wysokość dochodzącą nawet do 6 metrów wysokości i są jednymi z najwyższych podgatunków żyraf. Obecnie wszystkie osobniki zamieszkujące na wolności występują na obszarach chronionych w Kenii i Ugandzie.'
    },
    8: {
        noiseDistanceMin: 30,
        noiseDistanceMax: 40,
        countOfDiffusion: 8,
        colorsForSpace: ["#b1998b", "#b39c8e", "#b59f92", "#b7a295", "#b8a599", "#baa99c", "#bcaca0", "#beafa3", "#c0b2a7", "#c2b5aa", "#c4b8ae"],
        colorsForCell: ["#6a5246", "#6b5347", "#6c5448", "#6d5549", "#6e564a", "#70574b", "#71584c", "#72594d", "#735a4e", "#745c50", "#755d51", "#765e52", "#785f53", "#796054", "#7a6155", "#7b6256", "#7d6458", "#7f6659", "#82675b", "#84695c", "#866b5e", "#886d60", "#8a6f61", "#8d7063", "#8f7264", "#917466", "#927567", "#937769", "#94786a", "#96796c", "#977b6d", "#987c6f", "#997d70", "#9a7f72", "#9b8073", "#9c8175", "#9d8376", "#9f8478", "#a08579", "#a1877b", "#a2887c"],
        title: "Żyrafa thornicrofta",
        description: "Jest to podgatunek odizolowany geograficznie, występujący tylko w południowej dolinie Luangwa w Zambii. Szacuje się, że na wolności żyje około 550 osobników, bez populacji w niewoli. Długość życia żyrafy rodezyjskiej wynosi 22 lata dla samców i 28 lat dla samic. Zostały pierwotnie nazwane na cześć Harry'ego Scotta Thornicrofta, komisarza na ówczesnej północno-zachodniej Rodezji. Znane są również pod nazwą 'żyrafy Rhodesian'."
    },
    9: {
        noiseDistanceMin: 50,
        noiseDistanceMax: 90,
        countOfDiffusion: 3,
        colorsForSpace: ["#926d56", "#96715a", "#99755e", "#9d7862", "#a17c66", "#a4806a", "#a8846e", "#ac8872", "#b08c76", "#b3907a", "#b7947e"],
        colorsForCell: ["#3f2e2c", "#3f2e2c", "#402f2d", "#402f2d", "#41302e", "#42302e", "#42312f", "#43312f", "#433230", "#443230", "#453331", "#453331", "#463432", "#463432", "#473533", "#483634", "#493735", "#493836", "#4a3937", "#4b3937", "#4c3a38", "#4d3b39", "#4d3c3a", "#4e3d3b", "#4f3e3c", "#503f3d", "#52413f", "#534240", "#554442", "#564543", "#574745", "#594846", "#5a4a48", "#5c4b49", "#5d4d4b", "#5e4e4c", "#60504e", "#61514f", "#635350", "#645452", "#645452"],
        title: "Żyrafa masajska",
        description: 'Znana również jako żyrafa kenijska, ponieważ zamieszkuje afrykańskie sawanny południowej Kenii oraz niemal całej Tanzanii. Żyrafa masajska jest często zauważalnie ciemniejsza niż inne gatunki. Jej plamy są duże, ciemnobrązowe i mają charakterystyczny kształt liścia winorośli z postrzępionymi krawędziami. Plamy są otoczone kremowo-brązowym kolorem, który ciągnie się w dół aż do połowy ich nóg.'
    }
};
const customTitle = 'Stwórz swoją żyrafę!';
const customDescription = 'Dziewięć podgatunków to dla Ciebie za mało? Bez obaw, dzięki generatorowi możesz stworzyć własny rodzaj żyraf lub dopasować generowaną skórę do tworzonego modelu. Pamiętaj jednak, że charakterystyczne dla żyraf łaty mają konkretny cel - jest to kamuflaż i ochrona przed drapieżnikami. Dlatego bądź rozsądny, jeżeli chcesz, by miały długie oraz spokojne życie!';

let currentGirrafe;

//UI creators and logic
sliderCreator('spaceSlider', 'setSpaceMin', 'setSpaceMax', 5, 50);
sliderCreator('distanceXSlider', 'setDistanceXMin', 'setDistanceXMax', 150, 400);
sliderCreator('distanceYSlider', 'setDistanceYMin', 'setDistanceYMax', 150, 400);
spineSliderCreator('spineCountSlider', 'setSpineCount', 0, 20, 0.01, false);
spineSliderCreator('spineSizeSlider', 'setSpineSize', 1, 6, 1, true);
colorSliderCreator();
checkboxLogic();
clickGiraffe1();

function checkboxLogic() {
    let checkbox = document.getElementById('separationAxis');
    checkbox.addEventListener('change', function () {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
        onChangeSeparationAxis();
    });
}

function sliderCreator(sliderId, inputMinId, inputMaxId, min, max) {
    //initialize
    let slider = document.getElementById(sliderId);
    noUiSlider.create(slider, {
        start: [min, max],
        step: 1,
        connect: true,
        range: {
            'min': min,
            'max': max
        }
    });

    //update
    let input1Number = document.getElementById(inputMinId);
    let input2Number = document.getElementById(inputMaxId);
    slider.noUiSlider.on('update', function (values, handle) {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
        let value = values[handle];
        if (handle) {
            input2Number.value = Math.round(value);
        } else {
            input1Number.value = Math.round(value);
        }
    });
    input1Number.addEventListener('change', function () {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
        slider.noUiSlider.set([this.value, null]);
    });
    input2Number.addEventListener('change', function () {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
        slider.noUiSlider.set([null, this.value]);
    });
}

function spineSliderCreator(sliderId, inputId, min, max, step, rounded) {
    //initialize
    let slider = document.getElementById(sliderId);
    noUiSlider.create(slider, {
        start: [min],
        step: step,
        range: {
            'min': min,
            'max': max
        }
    });

    //update
    let input = document.getElementById(inputId);
    slider.noUiSlider.on('update', function (values, handle) {
        setGiraffeTitleAndDescriptionByCustomGiraffe();;
        let value = values[handle];
        if (handle) { } else {
            if (rounded) { input.value = Math.round(value); } else { input.value = value; }
        }
    });
    input.addEventListener('change', function () {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
        slider.noUiSlider.set([this.value]);
    });
}

function colorSliderCreator() {
    //initialize
    let pipsSlider = document.getElementById('brightnessSlider');
    noUiSlider.create(pipsSlider, {
        range: {
            min: -15,
            max: 15
        },
        step: 1,
        start: [0],
        pips: { mode: 'count', values: 3 }
    });

    //change
    let select = document.getElementById('skinColor');
    select.addEventListener('change', function () {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
    });

    //update
    pipsSlider.noUiSlider.on('update', function (values, handle) {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
        let value = values[handle];
    });

    //click
    let pips = pipsSlider.querySelectorAll('.noUi-value');
    function clickOnPip() {
        setGiraffeTitleAndDescriptionByCustomGiraffe();
        let value = Number(this.getAttribute('data-value'));
        pipsSlider.noUiSlider.set(value);
    }
    for (let i = 0; i < pips.length; i++) {
        if (i == 0) { pips[i].innerHTML = "ciemny"; }
        if (i == 1) { pips[i].innerHTML = "jednolity"; }
        if (i == 2) { pips[i].innerHTML = "jasny"; }
        pips[i].style.cursor = 'pointer';
        pips[i].addEventListener('click', clickOnPip);
    }
}

function generateSkin() {
    show();
    let poison = getPoisson();
    let spikesCreator = getSpikesCreator();
    let diagram = getVoronoiDiagram();
    diagram.setPoisson(poison);
    diagram.setSpikesCreator(spikesCreator);
    setTimeout(() => {
        diagram.createDiagram(getCanvas());
        hide();
    }, 1000);

}

//Żyrafa siatkowana
function clickGiraffe1() {
    setCurrentGiraffe(1);
    setSeparationAxis(false);
    setDistanceXMin(150);
    setDistanceXMax(220);
    setSpaceMin(16);
    setSpaceMax(16);
    setSpineCount(6);
    setSpineSize(1);
    setBrightness(0);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa zachodnioafrykańska
function clickGiraffe2() {
    setCurrentGiraffe(2);
    setSeparationAxis(false);
    setDistanceXMin(200);
    setDistanceXMax(205);
    setSpaceMax(18);
    setSpaceMin(18);
    setSpineCount(0);
    setSpineSize(0);
    setBrightness(10);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa numbijska
function clickGiraffe3() {
    setCurrentGiraffe(3);
    setSeparationAxis(false);
    setDistanceXMin(150);
    setDistanceXMax(300);
    setSpaceMin(21);
    setSpaceMax(24);
    setSpineCount(1.1);
    setSpineSize(2);
    setBrightness(-7);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa kordofańska
function clickGiraffe4() {
    setCurrentGiraffe(4);
    setSeparationAxis(false);
    setDistanceXMin(150);
    setDistanceXMax(300);
    setSpaceMin(25);
    setSpaceMax(30);
    setSpineCount(1.1);
    setSpineSize(2);
    setBrightness(-12);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa angolska
function clickGiraffe5() {
    setCurrentGiraffe(5);
    setSeparationAxis(false);
    setDistanceXMin(150);
    setDistanceXMax(200);
    setSpaceMin(19);
    setSpaceMax(28);
    setSpineCount(3.5);
    setSpineSize(1);
    setBrightness(-15);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa południowoafrykańska
function clickGiraffe6() {
    setCurrentGiraffe(6);
    setSeparationAxis(false);
    setDistanceXMin(170);
    setDistanceXMax(200);
    setSpaceMin(10);
    setSpaceMax(25);
    setSpineCount(5.1);
    setSpineSize(5);
    setBrightness(-15);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa rotszylda
function clickGiraffe7() {
    setCurrentGiraffe(7);
    setSeparationAxis(false);
    setDistanceXMin(215);
    setDistanceXMax(240);
    setSpaceMin(21);
    setSpaceMax(27);
    setSpineCount(7.70);
    setSpineSize(1);
    setBrightness(-15);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa thornicrofta (rodyjska)
function clickGiraffe8() {
    setCurrentGiraffe(8);
    setSeparationAxis(true);
    setDistanceXMin(150);
    setDistanceXMax(160);
    setDistanceYMin(260);
    setDistanceYMax(270);
    setSpaceMin(12);
    setSpaceMax(20);
    setSpineCount(0.35);
    setSpineSize(5);
    setBrightness(-5);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

//Żyrafa masajska
function clickGiraffe9() {
    setCurrentGiraffe(9);
    setSeparationAxis(false);
    setDistanceXMin(219);
    setDistanceXMax(227);
    setSpaceMin(16);
    setSpaceMax(18);
    setSpineCount(10);
    setSpineSize(6);
    setBrightness(15);
    setGiraffeTitleAndDescriptionByCurrentGiraffe();
}

function getPoisson() {
    let poison = new PoissonProces();
    let distanceXMin = getDistanceXMin();
    let distanceXMax = getDistanceXMax();
    let distanceYMin = getDistanceYMin();
    let distanceYMax = getDistanceYMax();
    poison.setDistanceX(distanceXMin, distanceXMax);
    poison.setDistanceY(distanceYMin, distanceYMax);
    return poison;
}

function getSpikesCreator() {
    let spikesCreator = new SpikesCreator();
    let spineSize = getSpineSize();
    let spineCount = getSpineCount();
    let spineMaxHeight = getShortestDistance() * 1 / 2;
    spikesCreator.setSpikesSize(spineSize);
    spikesCreator.setSpikesCount(spineCount);
    spikesCreator.setSpineMaxHeight(spineMaxHeight);
    return spikesCreator;
}

function getVoronoiDiagram() {
    let diagram = new VoronoiDiagram();
    let spaceMin = getSpaceMin();
    let spaceMax = getSpaceMax();
    let noiseDistanceMin = getNoiseDistanceMin();
    let noiseDistnaceMax = getNoiseDistanceMax();
    let spaceColor = getSpaceColors();
    let cellColors = getCellColors();
    let brightnessRadius = getShortestDistance() / 3;
    let brightness = getBrightness();
    let countOfDiffusion = getCountOfDiffusion();
    diagram.setSpace(spaceMin, spaceMax);
    diagram.setNoiseDistance(noiseDistanceMin, noiseDistnaceMax);
    diagram.setSpaceColors(spaceColor);
    diagram.setCellColors(cellColors);
    diagram.setBrightnessRadius(brightnessRadius);
    diagram.setCenterBrightness(brightness);
    diagram.setCountOfDiffusion(countOfDiffusion);
    return diagram;
}

function getSeparationAxis() {
    return document.getElementById('separationAxis').checked;
}

function setSeparationAxis(separation) {
    document.getElementById('separationAxis').checked = separation;
    onChangeSeparationAxis();
}

function onChangeSeparationAxis() {
    let osX = document.getElementById('osX');
    let osY = document.getElementById('osY');
    if (getSeparationAxis()) {
        document.getElementById("osXContainer").classList.remove("col-12");
        document.getElementById("osXContainer").classList.add("col-6");
        osX.style.visibility = 'visible';
        osY.style.display = 'initial';
    } else {
        document.getElementById("osXContainer").classList.remove("col-6");
        document.getElementById("osXContainer").classList.add("col-12");
        osX.style.visibility = 'hidden';
        osY.style.display = 'none';
    }
}

function getShortestDistance() {
    let minX = getDistanceXMin();
    let minY = getDistanceYMin();
    if (minY < minX)
        return minY;
    return minX;
}

function getDistanceXMin() {
    return document.getElementById('setDistanceXMin').value;
}

function getDistanceXMax() {
    return document.getElementById('setDistanceXMax').value;
}

function setDistanceXMin(distance) {
    document.getElementById('distanceXSlider').noUiSlider.set([distance, null]);
}

function setDistanceXMax(distance) {
    document.getElementById('distanceXSlider').noUiSlider.set([null, distance]);
}

function getDistanceYMin() {
    if (!getSeparationAxis())
        return getDistanceXMin();
    return document.getElementById('setDistanceYMin').value;
}

function getDistanceYMax() {
    if (!getSeparationAxis())
        return getDistanceXMax();
    return document.getElementById('setDistanceYMax').value;
}

function setDistanceYMin(distance) {
    document.getElementById('distanceYSlider').noUiSlider.set([distance, null]);
}

function setDistanceYMax(distance) {
    document.getElementById('distanceYSlider').noUiSlider.set([null, distance]);
}

function getSpaceMin() {
    return document.getElementById('setSpaceMin').value;
}

function getSpaceMax() {
    return document.getElementById('setSpaceMax').value;
}

function setSpaceMin(space) {
    document.getElementById('spaceSlider').noUiSlider.set([space, null]);
}

function setSpaceMax(space) {
    document.getElementById('spaceSlider').noUiSlider.set([null, space]);
}

function getSpineCount() {
    return document.getElementById('setSpineCount').value;
}

function setSpineCount(count) {
    document.getElementById('spineCountSlider').noUiSlider.set([count]);
}

function getSpineSize() {
    return document.getElementById('setSpineSize').value;
}

function setSpineSize(size) {
    document.getElementById('spineSizeSlider').noUiSlider.set(size);
}

function getNoiseDistanceMin() {
    let giraffeId = getSkinColor();
    let giraffe = getGiraffe(giraffeId);
    return giraffe.noiseDistanceMin;
}

function getNoiseDistanceMax() {
    let giraffeId = getSkinColor();
    let giraffe = getGiraffe(giraffeId);
    return giraffe.noiseDistanceMax;
}

function getCellColors() {
    let giraffeId = getSkinColor();
    let giraffe = getGiraffe(giraffeId);
    return giraffe.colorsForCell;
}

function getSpaceColors() {
    let giraffeId = getSkinColor();
    let giraffe = getGiraffe(giraffeId);
    return giraffe.colorsForSpace;
}

function getSkinColor() {
    return document.getElementById('skinColor').value;
}

function setSkinColor(giraffeId) {
    document.getElementById('skinColor').value = giraffeId;
}

function getBrightness() {
    return document.getElementById('brightnessSlider').noUiSlider.get();
}

function setBrightness(brightness) {
    document.getElementById('brightnessSlider').noUiSlider.set(brightness);
}

function getCountOfDiffusion() {
    let giraffeId = getSkinColor();
    let giraffe = getGiraffe(giraffeId);
    return giraffe.countOfDiffusion;
}

function setGiraffeTitleAndDescriptionByCurrentGiraffe() {
    let title = getCurrentGiraffe().title;
    let description = getCurrentGiraffe().description;
    setGiraffeTitle(title);
    setGiraffeDescription(description);
}

function setGiraffeTitleAndDescriptionByCustomGiraffe() {
    setGiraffeTitle(customTitle);
    setGiraffeDescription(customDescription);
}

function setGiraffeTitle(title) {
    document.getElementById('giraffeName').innerHTML = title;
}

function setGiraffeDescription(description) {
    document.getElementById('giraffeDescription').innerHTML = description;
}

function getCurrentGiraffe() {
    return getGiraffe(currentGirrafe);
}

function setCurrentGiraffe(id) {
    currentGirrafe = id;
    setSkinColor(id);
}

function getGiraffe(id) {
    return giraffes[id];
}

function getCanvas() {
    return document.getElementById("canvas");
}

function show() {
    document.getElementById("spinner").style.visibility = 'visible';
}

function hide() {
    document.getElementById("spinner").style.visibility = 'hidden';
}
