var cookie = $('.cookie');
var cookiePoint = $('.cookiePoint');
var deleteAll = $('.resetGame');
var everySecondPlus = 0;
var uniformarea = $('.uniformarea');
var cizgiliForma = $('#cizgilibutton');
var duzForma = $('#duzbutton');
var sıkcizgili = $('#sikcizgilibutton');
var tekcizgili = $('#tekcizgilibutton');
var resetforma = $('#resetforma');
var logosecbutton = $('#logosecid');
var logocontainer = $('#logoContainer');
var circlelogoButton = $('#circlelogoButton');
var elipslogoButton = $('#elipslogoButton');
var concavelogoButton = $('#concavelogoButton');
var lastlogoButton = $('#lastlogoButton');
var startGameButton = $('.startGame');



$(document).ready(function() {
    console.log("ready!");
});




//Click function
var CookieClickPoint = 0;
$('.cookie').click(function() {

    cookie.css("width", "280px");
    cookie.css("height", "280px");
    setTimeout(function() {
        cookie.css("width", "250px");
        cookie.css("height", "250px");
    }, 100);

    CookieClickPoint += 1; // HER BASIŞTA ARTTIR;
    console.log(CookieClickPoint);
    cookiePoint.html(CookieClickPoint);
    localStorage.setItem('cookie point', CookieClickPoint);

});



//DELETEALL
deleteAll.click(function() {
    $('.evetBtn').mousedown(function() {
        $('.evetBtn').css('border', '3px solid #449f62');
    });

    $('.evetBtn').mouseup(function() {
        $('.evetBtn').css('border', '3px solid #333');
    });

    $('.resetDialog').fadeIn() //alertbox görünür.

    $('.evetBtn').click(function() {
        localStorage.clear(); //tüm datayı sildim.
        cookiePoint.html('0'); // puan kısmına 0 yazdım.
        CookieClickPoint = 0; // puan kısmını değer olarak sıfırla.
        $('.evetBtn').mousedown(function() {
            $('.evetBtn').css('border', '3px solid #449f62');
        });
        $('.resetDialog').fadeOut();
        startGameButton.slideDown();
        window.location.reload() //sayfayı yeniliyoruz çünkü buglar silinsin diye
    });

    $('.hayırBtn').click(function() {
        $('.resetDialog').fadeOut();
    });



});


//STARTGAME

startGameButton.click(function() {

    $('#teamUniformChooser').css('display', 'inline-flex'); //seçim ekranı  kısmı görünür hale geldi
    startGameButton.slideUp(); // start kısmı silindi.
    localStorage.setItem('startButtonDefaultCss', 'none');
})






//EVERY SECOND TAKE POİNT

function takepoint(item, time) {
    setInterval(function() {
        item += 1;
        console.log(item);
        CookieClickPoint += 1;
        cookiePoint.html(CookieClickPoint);
        localStorage.setItem('cookie point', CookieClickPoint); //her otomatik para ekleme yapıldığında local storage tekrardan etkilicek

    }, time);
}


takepoint(everySecondPlus, 1000); // her time ayarlamasınad otomatik arttir;







//WİNDOW ONLOAD
var item = localStorage.getItem('cookie point');
window.onload = function() {
    cookiePoint.html(Number(item));
    CookieClickPoint += Number(item);
    startGameButton.css('display', `${localStorage.getItem('startButtonDefaultCss')}`) //start butonnunun css'i local storageden çekiliyor.
}



//Change tabs

function changeTabs(item) {
    var x = document.getElementsByClassName("menuitem");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.add('d-none');
        document.getElementById(item).classList.remove('d-none');

    }


}

//change tabs color change

//TABSMAİN ETRAFINI ÇEVRELEYEN KISMIN BORDER CSSİ

$('#changeTabsUl li').click(function(a) {
    //ilk önce tüm hepsini rengini sıfırlıyoruz.
    $('#changeTabsUl li').css('background-color', 'rgba(255, 255, 255, .2);');

    //daha sonra sadece tıklanan resmin backgroundunu değiştiriyoruz.
    if ($(this).hasClass("item1")) {
        $('.item2').css('border', 'none');
        $('.item2').css('border-bottom', '8px solid #fff');
        $('.item3').css('border', 'none');
        $('.item3').css('border-bottom', '8px solid #fff');
        $(this).css('border', '8px solid #fff');
        $(this).css('border-bottom', 'none');
    } else if ($(this).hasClass("item2")) {

        $('.item1').css('border', 'none');
        $('.item1').css('border-bottom', '8px solid #fff');
        $('.item3').css('border', 'none');
        $('.item3').css('border-bottom', '8px solid #fff');
        $(this).css('border', '8px solid #fff');
        $(this).css('border-bottom', 'none');
    } else if ($(this).hasClass("item3")) {
        $('.item1').css('border', 'none');
        $('.item1').css('border-bottom', '8px solid #fff');
        $('.item2').css('border', 'none');
        $('.item2').css('border-bottom', '8px solid #fff');
        $(this).css('border', '8px solid #fff');
        $(this).css('border-bottom', 'none');
    }


    $(this).css('transition', '.1s all ease');
    $(this).css('background-color', 'rgba(255, 255, 255, .2)');

})








//color change


function colorChange() {

    /////////////////////its for uniform////////////////
    $('#fcolor').change(function() {
        var fcolor = $('#fcolor').val();
        $('.body').css("background-color", `${fcolor}`); //vücut rengi

        //second
        $('.cizgilibody').css("background-color", `${fcolor}`); //vücut rengi
        $('.cizgilikolvr').css("background-color", `${fcolor}`); //vücut rengi

        //third
        $('.sıkcizgilibody .vr ').css("border-left", `8px solid ${fcolor}`);
        $('.sıkcizgilikol1 .kolvr').css("background-color", `${fcolor}`);
        $('.sıkcizgilikol2 .kolvr').css("background-color", `${fcolor}`);

        //fourth
        $('.tekcizgibody').css("background-color", `${fcolor}`);

    });



    $('#scolor').change(function() {
        var scolor = $('#scolor').val();
        $('.kol1').css("background-color", `${scolor}`); //ilk kol rengi
        $('.kol2').css("background-color", `${scolor}`); //ikinci kol 

        //second
        $('.cizgilicizgi').css("border-left", `25px solid ${scolor}`); //ikinci kol 
        $('.cizgilikol').css("background-color", `${scolor}`); //ikinci kol 
        //third
        $('.sıkcizgilikol2').css("background-color", `${scolor}`);
        $('.sıkcizgilikol1').css("background-color", `${scolor}`);
        $('.sıkcizgilibody').css("background-color", `${scolor}`);

        //fourth
        $('.tekCizgi').css("background-color", `${scolor}`);
        $('.tekcizgikol').css("background-color", `${scolor}`);

    });


    ////////////////////////////now just for logo////////////////////

    $('#logoFirstColor').change(function() {
        var logofirst = $('#logoFirstColor').val();
        $('.gslogo').css('background-color', `${logofirst}`);
        $('.circle').css('background-color', `${logofirst}`);
        $('.concaveLogo').css('background-color', `${logofirst}`);
        $('.lstLogo').css('background-color', `${logofirst}`);
    });


    $('#logoSecondaryColor').change(function() {
        var logosecond = $('#logoSecondaryColor').val();
        $('.circleinner').css('background-color', `${logosecond}`);
        $('.gslogoinner').css('background-color', `${logosecond}`);
        $('.concaveLogo').css('border', `6px solid ${logosecond}`);
        $('.lstLogo').css('border', `18px groove ${logosecond}`);
    });




}



colorChange();



// renki tekrardan çağır

function Takecolor() {
    var scolor = $('#scolor').val();
    var fcolor = $('#fcolor').val();
    var logofirst = $('#logoFirstColor').val();
    var logosecond = $('#logoSecondaryColor').val();

    $('.body').css("background-color", `${fcolor}`); //vücut rengi
    $('.kol1').css("background-color", `${scolor}`); //ilk kol rengi
    $('.kol2').css("background-color", `${scolor}`); //ikinci kol 


    $('.cizgilibody').css("background-color", `${fcolor}`); //vücut rengi
    $('.cizgilikolvr').css("background-color", `${fcolor}`); //vücut rengi
    $('.cizgilicizgi').css("border-left", `25px solid ${scolor}`); //ikinci kol 
    $('.cizgilikol').css("background-color", `${scolor}`); //ikinci kol 



    $('.sıkcizgilikol2').css("background-color", `${scolor}`);
    $('.sıkcizgilikol1').css("background-color", `${scolor}`);
    $('.sıkcizgilibody .vr').css("border-left", `8px solid ${fcolor}`);
    $('.sıkcizgilibody').css("background-color", `${scolor}`);
    $('.sıkcizgilikol1 .kolvr').css("background-color", `${fcolor}`);
    $('.sıkcizgilikol2 .kolvr').css("background-color", `${fcolor}`);


    $('.tekcizgibody').css("background-color", `${fcolor}`);
    $('.tekCizgi').css("background-color", `${scolor}`);
    $('.tekcizgikol').css("background-color", `${scolor}`);


    //logo take color
    $('.gslogo').css('background-color', `${logofirst}`);
    $('.circle').css('background-color', `${logofirst}`);
    $('.concaveLogo').css('background-color', `${logofirst}`);
    $('.lstLogo').css('background-color', `${logofirst}`);
    $('.circleinner').css('background-color', `${logosecond}`);
    $('.gslogoinner').css('background-color', `${logosecond}`);
    $('.concaveLogo').css('border', `6px solid ${logosecond}`);
    $('.lstLogo').css('border', `18px groove ${logosecond}`);

}


var duzOutput = `<div class="body">
        </div>
        <div class="yaka"></div>
        <div class="kol1 kol"></div>
        <div class="kol2 kol"></div>`;



var cizgiliOutput = `<div class="cizgilibody">
        <div class=" cizgilicizgi"></div>
        <div class=" cizgilicizgi"></div>
        <div class=" cizgilicizgi"></div>
        <div class=" cizgilicizgi"></div>
        <div class=" cizgilicizgi"></div>
    </div>
    <div class="yaka"></div>
    <div class="kol1 cizgilikol">
        <div class="kolvr cizgilikolvr"></div>
    </div>
    <div class="kol2 cizgilikol">
        <div class="kolvr  cizgilikolvr"></div>
    </div>`;



var sıkcizgiliOutput = ` <div class="sıkcizgilibody">
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
    <div class="vr"></div>
</div>
<div class="yaka"></div>
<div class="sıkcizgilikol1 ">
    <div class="kolvr"></div>
    <div class="kolvr"></div>
    <div class="kolvr"></div>
    <div class="kolvr"></div>
    <div class="kolvr"></div>
</div>
<div class="sıkcizgilikol2">
    <div class="kolvr"></div>
    <div class="kolvr"></div>
    <div class="kolvr"></div>
    <div class="kolvr"></div>
    <div class="kolvr"></div>
</div>`;


var tekcizgiliOutput = `<div class="tekcizgibody">
                            <div class="tekCizgi">

                            </div>
                        </div>
                        <div class="yaka"></div>
                        <div class="kol1 tekcizgikol"></div>
                        <div class="kol2 tekcizgikol"></div>`;




function desenChange() {

    duzForma.click(function() {

        /* $('#fcolor').val('#ffffff');
        $('#scolor').val('#000000'); */


        uniformarea.html(duzOutput);
        Takecolor();


    });

    cizgiliForma.click(function() {
        /* $('#fcolor').val('#ffffff');
        $('#scolor').val('#000000'); */
        uniformarea.html(cizgiliOutput);
        Takecolor();

    });

    sıkcizgili.click(function() {
        /* $('#fcolor').val('#ffffff');
        $('#scolor').val('#000000'); */
        uniformarea.html(sıkcizgiliOutput);
        Takecolor();

    });


    tekcizgili.click(function() {
        /* $('#fcolor').val('#ffffff');
        $('#scolor').val('#000000'); */
        uniformarea.html(tekcizgiliOutput);
        Takecolor();

    });



}

desenChange();








///////////////////////////////////////////////////////////////////



//forma kaydedielni sil


resetforma.click(function() {
    uniformarea.html(duzOutput);
    console.log(uniformarea); //ilk önce forma stilini getir
    $('#fcolor').val('#000000');
    $('#scolor').val('#ffffff');
    console.log($('#fcolor').val()); //ilk rengin değerini aldık
    console.log($('#scolor').val()); // ikinci rengin değerini aldık
});


//forma logo seçme alanına git
// ve forma seçimini kaydet.

// $('#teamUniformChooser').css('display', 'none'); //LOGO BİTİNCE KALDIR
// $('#teamlogoChooser').css('display', 'block'); // LOGO BİTİNCE KALDIR

logosecbutton.click(function() {
    localStorage.setItem('ChoosingUniform', uniformarea.html());
    localStorage.setItem('UniformPrimaryColor', $('#fcolor').val());
    localStorage.setItem('UniformSecondaryColor', $('#scolor').val());

    $('#teamUniformChooser').slideUp("slow");

    setTimeout(function() {
        $('#teamlogoChooser').slideDown("slow");
        $('#teamlogoChooser').addClass('d-flex');

    }, 1000);

});
























///////////////////////////////////////////////////////////////

var circlelogoOutput = `<div class="circle">
                        <div class="circleinner">
                            <div class="logoimg">
                                <img src="../../assets/logoimages/horse.png" alt="">
                            </div>
                        </div>
                        </div>`;


var secondarylogoOutput = `<div class="gslogo">
                            <div class="gslogoinner">
                                <div class="logoimg">
                                    <img src="../../assets/logoimages/horse.png" alt="">
                                </div>
                            </div>
                            </div>`;

var thirdlogoOutput = `<div class="concaveLogo">

                        <div class="logoimg logoconcavee">
                            <img src="../../assets/logoimages/horse.png" alt="">
                        </div>

                        </div>`;

var fourtlogoOutput = `<div class="lstLogo">
                        <div class="logoimg logorotate">
                            <img src="../../assets/logoimages/horse.png" alt="" >
                        </div>

                        </div>`;


function logochanger() {

    $('.logoimg').click(function() {
        var srclogo = this.src;
        $('.logoimg img').attr('src', `${srclogo}`);
        localStorage.setItem('logoselected', srclogo);

        localStorage.setItem('logoHTML', $('#logoContainer').html());
    });
};


logochanger();



function logoClickchange() {

    circlelogoButton.click(function() {
        $('#logoContainer').html(circlelogoOutput);
        Takecolor();
        var newLogo = localStorage.getItem('logoselected');
        localStorage.setItem('amblemSelected', $('#circlelogoamblem').attr('src'));
        $('.logoimg img').attr('src', `${newLogo}`);

    });

    elipslogoButton.click(function() {
        $('#logoContainer').html(secondarylogoOutput);
        Takecolor();
        var newLogo = localStorage.getItem('logoselected');
        localStorage.setItem('amblemSelected', $('#elipslogoamblem').attr('src'));
        $('.logoimg img').attr('src', `${newLogo}`);

    });

    concavelogoButton.click(function() {
        $('#logoContainer').html(thirdlogoOutput);
        Takecolor();
        var newLogo = localStorage.getItem('logoselected');
        localStorage.setItem('amblemSelected', $('#concavelogoamblem').attr('src'));
        $('.logoimg img').attr('src', `${newLogo}`);

    });

    lastlogoButton.click(function() {
        $('#logoContainer').html(fourtlogoOutput);
        Takecolor();
        var newLogo = localStorage.getItem('logoselected');
        localStorage.setItem('amblemSelected', $('#lastlogoamblem').attr('src'));
        $('.logoimg img').attr('src', `${newLogo}`);

    });

}

logoClickchange(); // fonksiyonu çağırdık ki çalışsın


function savelogocolor() {
    localStorage.setItem('logoPrimaryColor', $('#logoFirstColor').val());
    localStorage.setItem('logoSecondaryColor', $('#logoSecondaryColor').val());
}





$('#saveid').click(function() {
    savelogocolor();
    $('#teamlogoChooser').slideUp('slow');
    $('#teamlogoChooser').removeClass('d-flex');
});



//EN SON LOGO RESET TUŞUNU YAP