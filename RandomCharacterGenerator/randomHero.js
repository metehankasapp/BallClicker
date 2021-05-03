var footballersMainImg = $('.footballer');

var characterList = [];

function CharacterGenerate(characterSrc, characterName, characterPower, characterPrice, index) {



    var characterPows = Math.floor(50 + Math.random() * 50); // bu kısım daha sonra geliştirilebilir ama şu anda sabit olarak 50 üzeri puanlar gösterilicek.
    characterPower.innerHTML = characterPows;


    var footballerPrice = characterPows * 20;
    characterPrice.innerHTML = `${footballerPrice} $`;

    var hairColorSelects = ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown'];
    var facialHairSelects = ['Blank', 'BeardLight', 'MoustacheFancy', 'BeardMedium', 'MoustacheMagnum'];
    var avatarStyleSelects = 'Transparent';
    var topSelects = ['NoHair', 'LonghairBun', 'LongHairCurly', 'ShortHairDreads02', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairTheCaesar'];
    var facialHairColorSelects = hairColorSelects;
    var clothesSelects = 'ShirtCrewNeck';
    var colorFabricSelects = 'Black';
    var eyesSelects = ['Default', 'Happy', 'Squint', 'Surprised', 'Wink'];
    var eyebrowSelects = ['Angry', 'Default', 'FlatNatural', 'UnibrowNatural', 'Updown', 'SadConcerned'];
    var mouthSelects = ['Default', 'Grimace', 'Serious', 'Smile', 'Twinkle'];
    var skinSelects = ['Light', 'Brown', 'DarkBrown', 'Black', 'Pale'];

    var allOfselects = [hairColorSelects, facialHairSelects, topSelects, facialHairColorSelects, eyesSelects, eyebrowSelects, mouthSelects, skinSelects];

    var randlist = [];

    for (i in allOfselects) {
        const random = Math.floor(Math.random() * allOfselects[i].length);
        randlist.push(random);
    };



    characterSrcsi = `https://avataaars.io/?avatarStyle=Transparent&topType=${topSelects[randlist[2]]}&accessoriesType=Blank&HairColor=${hairColorSelects[randlist[0]]}&facialHairType=${facialHairSelects[randlist[1]]}&facialHairColor=${facialHairColorSelects[randlist[3]]}&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=${eyesSelects[randlist[4]]}&eyebrowType=${eyebrowSelects[randlist[5]]}&mouthType=${mouthSelects[randlist[6]]}&skinColor=${skinSelects[randlist[7]]}`;
    characterSrc.src = characterSrcsi;

    $.ajax({
        url: 'https://randomuser.me/api/?gender=male',
        dataType: 'json',
        success: function(data) {
            var FootballerFirstName = data.results[0].name.first;
            var FootballarLastName = data.results[0].name.last;
            var footballerAllName = FootballerFirstName + ' ' + FootballarLastName;
            characterName.innerHTML = footballerAllName;
            localStorage.setItem(`${index}.footballer`, footballerAllName); // her seferinde karakteri karakter ismiyle local storage kaydeder.

        }



    });


    setTimeout(function() {
        var footballerObject = {
            name: characterName.innerHTML,
            power: `${characterPows}`,
            imgSrc: characterSrcsi,
            price: footballerPrice

        }

        console.log(footballerObject);
    }, 1000); //yaklaşık 1 saniye sonra yazdırmamızın sebebi ise önce diğer fonksiyonları bitirmesidir.


};









//girilen ilk değer image olucak
//girilen ikinci değer name içeren div olucak
//girilen üçüncü değer power kısmını içeren div olucak
//girilen dördüncü değer ise index bilgisi olucak

CharacterGenerate($('.footballerImg')[0], $('.footballerName')[0], $('.footballerPower')[0], $('.footballerPrice')[0], 0);
CharacterGenerate($('.footballerImg')[1], $('.footballerName')[1], $('.footballerPower')[1], $('.footballerPrice')[1], 1);
CharacterGenerate($('.footballerImg')[2], $('.footballerName')[2], $('.footballerPower')[2], $('.footballerPrice')[2], 2);
CharacterGenerate($('.footballerImg')[3], $('.footballerName')[3], $('.footballerPower')[3], $('.footballerPrice')[3], 3);
CharacterGenerate($('.footballerImg')[4], $('.footballerName')[4], $('.footballerPower')[4], $('.footballerPrice')[4], 4);
CharacterGenerate($('.footballerImg')[5], $('.footballerName')[5], $('.footballerPower')[5], $('.footballerPrice')[5], 5);