$('header').slideToggle('fast');
$('#volume_element').slideUp('fast')
$('#play').fadeOut('fast');

$("#screensaver").on('click'||"keydown.myPlugin", function (){
    $("#screensaver").fadeOut();
    $('header').slideDown('1000');
    $('#volume_element').slideDown('2000');
    $('#play').fadeIn('fast');

});

$("main").on('click', function(){
    $("#alert").fadeOut();
});

let parts = {
    rain: {
        name:'rain',
        path:'Звуки/rain.wav',
        img:'img/rain.png'
    },
    thunder: {
        name: 'thunder',
        path: 'Звуки/thunder.mp3',
        img:'img/thunder.png',
    },
    birds:{
        name:'birds',
        path:'Звуки/bird.mp3',
        img:'img/bird.png',
    },
    city:{
        name:'city',
        path:'Звуки/city.mp3',
        img:'img/city.png',
    },
    crickets:{
        name:'crickets',
        path:'Звуки/crickets.mp3',
        img:'img/cricket.png',
    },
    fire:{
        name:'fire',
        path:'Звуки/fire.mp3',
        img:'img/fire.png',
    },
    frogs:{
        name:'frogs',
        path:'Звуки/frogs.mp3',
        img:'img/frog.png',
    },
    record:{
        name:'record',
        path:'Звуки/record.wav',
        img:'img/record.png',
    },
    rain_on_roof:{
        name:'roof',
        path:'Звуки/roof.mp3',
        img:'img/roof.png',
    },
    rain_on_tree:{
        name:'tree',
        path:'Звуки/tree.mp3',
        img:'img/tree.png',
    },
    TV:{
        name:'TV',
        path:'Звуки/TV.mp3',
        img:'img/TV.png',
    },
    waterfall:{
        name:'waterfall',
        path:'Звуки/waterfall.mp3',
        img:'img/waterfall.png',
    },
    waves:{
        name:'waves',
        path:'Звуки/waves.mp3',
        img:'img/waves.png',
    },
    wind:{
        name:'wind',
        path:'Звуки/wind.mp3',
        img:'img/wind.png',
    },

}
for (let i in parts){
    parts[i].sound = new Audio(parts[i].path);
    parts[i].sound.volume = 0.0;
    parts[i].sound.loop=true;
};


for (let i in parts){
    let div = $('<div>').attr('class', 'menu_element');
    let h1 = $(`<h1>${parts[i].name}</h1>`);
    let svg = $(`<img>`).attr('src', parts[i].img);
    let input = $(`<input>`).attr('type', 'range').attr('min', '0').attr('value', '0').attr('step', '0.01').attr('max', '1').attr('class', 'element_volume').attr('data-sound', parts[i].sound).attr('id', parts[i].name).on('input', function() {
        parts[i].sound.volume = $(this).val();
        if ($(this).val() == 0){
            parts[i].sound.pause();
        }else{
            parts[i].sound.play();
        }
    });;
    div.append(svg); div.append(h1); div.append(input);
    $('#menu').append(div)
}



menu_opened = false;
$("#menu").hide();
$("#volume_element").on('click', function (){
    if (menu_opened == false){
        $("#menu").show('slow' );
        menu_opened=true;
    }else{
        $("#menu").hide('slow' );
        menu_opened=false;
    }
});


$("#svg_stop").hide()
played=false;
$("#play").on('click', function(){
    if (played==false){
        $('#svg_play').slideToggle('fast') ;
        $("#svg_stop").slideToggle('fast') ;
        played=true;
    }else{
        $('#svg_play').slideToggle('fast') ;
        $("#svg_stop").slideToggle('fast') ;
        played=false;
    }
    for (let i in parts){
    if (played==true){
        if (parts[i].sound.volume!=0){
            parts[i].sound.play()
        };
    }else if (played==false){
        parts[i].sound.pause();
    };
    }
});

// Формулы не спасли меня от беспощадного js.

$("#volume").on('click', function (){
    for (let i in parts){
        if (parts[i].sound.volume!=0){
        parts[i].sound.volume = $('#volume').val()/100;
    };
};
});



// let rain = Audio('Звуки/rain.mp3');
// let thunder = Audio();
// let wind = Audio();
// let fire = Audio();
// let waves = Audio();
// let birds = Audio();
// let crickets = Audio();
// let white_noise = Audio();
// let trees_rain = Audio();
// let roof_rain = Audio();
// let waterfall = Audio();
// let city = Audio();
// let frogs = Audio();
// let record_player = Audio();
// let aimals