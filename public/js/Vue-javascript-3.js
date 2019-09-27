new Vue({
    el: '#vue-app',
    data: {
        myName: 'Yoel',
        counter: 0,
        showHome: false,
        homeShowParties: false,
        homeShowChat: true,
        chatText: false,
        showDropDown: false,
        price: 0,
        showChosenParty: false,
        euroSign: 0,
        
        chosenParty: [{

        }],
        chosenPartyPage: false,
        cover: 0,
        description: 0,
        address: 0,
        map: 0,



        parties: [{
            name: 'COSTA SOCIAL CLUB',
            description: 'FRIDAY AT COSTA SOCIAL CLUB SPECIAL GUEST: ENGEL PRESENTS "PÉGATE" MUSIC BY: JAVS, MZS and LA ROSA NARCOTICA',
            address: 'ENGEL @ COSTA SOCIAL CLUB',
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.313445945747!2d-3.6886359494135097!3d40.446198961670085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e660ae606b%3A0xc9a004d849b7dadb!2sCalle%20de%20Joaqu%C3%ADn%20Costa%2C%2027%2C%2028002%20Madrid!5e0!3m2!1sen!2ses!4v1568722182703!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            music: 'HIP HOP',
            url: 'https://xceed.me/events/madrid/76429/friday-20th-w-engel-costa-social-club',
            cover: 'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1568719422/events/cover/friday-20th-w-engel-costa-social-club-1568719421.jpeg.jpg',
            date: 'Fri 20-Sep-2019',
            price: '12',
            hours: '23:59 to 6:00'
            },
            {
                name: 'Universiparty',
                description: 'Lo clásico está de moda! Lo retro, vintage y también la música. Las fiestas #Remember han llegado para quedarse, porque ahora pasados los 40 aún somos jóvenes, y eso no depende de estilos.',
                address: 'Avenida de la Industria 82 28970 Humanes de Madrid, Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.5205044880513!2d-3.6806473856739435!3d40.48587175935738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42295cbc1ad819%3A0x7e400937e5828a77!2sCalle%20Antonio%20de%20Cabez%C3%B3n%2C%201%2C%2028034%20Madrid!5e0!3m2!1sen!2ses!4v1568718801506!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'Reggaeton',
                url: 'http://www.grupo-kapital.com/fabrik/',
                cover: 'https://www.taquilla.com/data/images/t/0d/fabrik-reggaeton-clasico.jpg',
                date: 'Sat 21-Sep-2019',
                price: '15',
                hours: ' 23:30 to 6:00'
            },
            {
                name: 'Natura Sunday | WADE',
                description: 'Domingo 29 de septiembre cerramos temporada de Natura Sunday desde las 17:00 con Wade que aterriza en Fabrik en una nueva edición con nuestros residentes',
                address: 'Fabrik Madrid - Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6088.91565972133!2d-3.8405620000000003!3d40.265579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418cbe0588d38f%3A0x704fd361e6750664!2sAv.%20de%20la%20Industria%2C%2082%2C%2028970%20Humanes%20de%20Madrid%2C%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sus!4v1568719725096!5m2!1ses!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'TECH HOUSE',
                url: 'https://www.ticketea.com/entradas/natura-sunday-wade-fabrik/',
                cover: 'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1563267466/events/cover/natura-sunday-wade-1563267464.png.jpg',
                date: 'Sun 29-Sep-2019',
                price: '18',
                hours: '17:00 to 1:00'
            },
            {
                name: 'FRACTAL jueves 3 octubre',
                description: 'FRACTAL JUEVES 3 OCTUBRE Line Up:CHELDON, 3D3PROFUNDIS, HAKKON',
                address: 'Ventura Rodriguez, 7, Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2570510773025!2d-3.715855549280643!3d40.42530666294081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42286f77e33d13%3A0xb556f3ce44ffe108!2sCalle%20Ventura%20Rodr%C3%ADguez%2C%207%2C%2028008%20Madrid!5e0!3m2!1sen!2ses!4v1568720715738!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'TECHNO',
                url: 'https://xceed.me/tickets-club/madrid/pirandello-i-ii',
                cover: 'https://res.cloudinary.com/xceed-me/image/upload/c_fill,f_auto,h_241,w_650/v1567784395/events/cover/fractal-jueves-3-octubre-1567784394.jpeg.jpg',
                date: 'Thu 3-Oct-2019',
                price: 'FREE',
                hours: '23:45 to 6:00'
            },
            {
                name: 'Stardust',
                description: 'The Empire Line (live) - Gritos sobreprocesados, embarrados, capas que derrumban las tradiciones del techno, y las unen al punk y DIY en una sola fuerza elemental.',
                address: 'Sala Cool - Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.446637516711!2d-3.7111002494142347!3d40.42110796319651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287b6e878eed%3A0x91fb1df82536d986!2sCalle%20de%20Isabel%20la%20Cat%C3%B3lica%2C%206%2C%2028013%20Madrid!5e0!3m2!1sen!2ses!4v1568721039843!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'TECHNO',
                url: 'https://www.facebook.com/stardustclub.madrid/',
                cover: 'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1566843109/events/cover/stardust-invites-the-empire-line-live-noele-1566843108.jpeg.jpg',
                date: 'Fri 20-Sep-2019',
                price: 'FREE',
                hours: '23:59 to 6:00'
            },
            {
                name: 'Get Addicted',
                description: 'GET ADDICTED con Adrian L & Carrera. Todos los martes en Opium con la mejor musica latina.',
                address: 'Opium Madrid - Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.693189387041!2d-3.6943848494137552!3d40.43779216218149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228edf026e0dd%3A0xa498df2aacb2db96!2sCalle%20de%20Jos%C3%A9%20Abascal%2C%2056%2C%2028003%20Madrid!5e0!3m2!1sen!2ses!4v1568721248688!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'LATIN',
                url: 'https://xceed.me/events/madrid/75138/get-addicted-41',
                cover: 'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1561478838/events/cover/get-addicted-1561478836.png.jpg',
                date: 'Tue 17-Sep-2019',
                price: 'FREE',
                hours: '23:45 to 6:00'
            },
            {
                name: 'Viernes || Teatro Kapital',
                description: 'Todos los Viernes en Teatro Kapital, una noche de Sueño. Ven a disfrutar de La mejor discoteca de Madrid, con 7 plantas, más de 6 salas diferentes. El mejor ambiente de todo el centro de Madrid. Baila con nosotros.',
                address: 'Teatro Kapital - Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.959550348459!2d-3.6952245494146596!3d40.409746863887506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4226289bedbaa5%3A0xea48e8b7f045a42!2sCalle%20de%20Atocha%2C%20125%2C%2028012%20Madrid!5e0!3m2!1sen!2ses!4v1568721585032!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'HOUSE',
                url: 'https://xceed.me/es/events/madrid/70747/viernes-teatro-kapital-63',
                cover: 'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1559919912/events/cover/viernes-teatro-kapital-1559919911.jpeg.jpg',
                date: 'Fri 20-Sep-2019',
                price: '17',
                hours: '23:45 to 6:00'
            },
            {
                name: 'JUICY jueves',
                description: 'NAZCA es una sala con una dimensión épica ya que puede albergar a más de 2.000 personas a la vez. Dividida en dos plantas diferenciadas entre sí, cada planta tiene acceso directo desde la calle y cuenta con diferentes zonas vip.',
                address: 'JUICY jueves 19 septiembre',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.075546755976!2d-3.69701084941333!3d40.451464861349585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228fd023617d7%3A0xb56e0bc388749130!2sCalle%20de%20Orense%2C%2024%2C%2028020%20Madrid!5e0!3m2!1sen!2ses!4v1568721846743!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'HITS',
                url: 'https://xceed.me/fr/events/madrid/76096/juicy-jueves-19-septiembre',
                cover: 'https://images.musement.com/cover/0033/64/thumb_3263178_cover_header.jpeg?&q=60&fit=crop&h=400&lossless=true&auto=format&w=1399',
                date: 'Thu 19-Sep-2019',
                price: '12',
                hours: '23:45 to 6:00'
            },
            {
                name: 'THE ROOM',
                description: 'Shôko Madrid situado en el Barrio de La latina pone a tu disposición 2 Salas: la sala Principal, conocida como “Gran Sala” con una capacidad para 400 personas, y otra sala en la planta de arriba “Sala Cristal” (Capacidad para 150 personas).',
                address: 'Shôko Madrid - Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.0020593584277!2d-3.7128843494146757!3d40.40880516394469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d71f2fdbb5%3A0x28ee91ddf7e106f7!2sCalle%20de%20Toledo%2C%2086%2C%2028005%20Madrid!5e0!3m2!1sen!2ses!4v1568722052622!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'HITS',
                url: 'https://xceed.me/events/madrid/76258/the-room-9',
                cover: 'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1568303847/events/cover/the-room-1568303845.png.jpg',
                date: 'Fri 20-Sep-2019',
                price: '10',
                hours: ' 23:45 to 5:45'
            },
            {
                name: 'Sanpapa Club Opening Party',
                description: '¡Vuelve Sanpapa Club! Comienza la quinta temporada por todo lo alto, con un cartel de artistas espectacular para empezar bailando bien fuerte. Tendremos ni más ni menos que a uno de los DJs más de moda de la escena electrónica.',
                address: 'Av. Matapiñonera, 6, San Sebastián de los Reyes, Madrid, Spain',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7000846307055!2d-3.6219919492769796!3d40.54821475545532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422d1d2fb86431%3A0x19cc1e942ce2b0d6!2sAv.%20Matapi%C3%B1onera%2C%206%2C%2028701%20San%20Sebasti%C3%A1n%20de%20los%20Reyes%2C%20Madrid!5e0!3m2!1sen!2ses!4v1568992289991!5m2!1sen!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                music: 'TECHNO - DEEP HOUSE',
                url: 'https://www.facebook.com/sanpapaclub/',
                cover: 'https://res.cloudinary.com/xceed-me/image/upload/c_fill,f_auto,h_241,w_650/v1568203853/events/cover/sanpapa-club-opening-party-1568203852.jpeg.jpg',
                date: 'Sat 28-Sep-2019',
                price: '15',
                hours: '23:59 to 6:00' 
            },
        ],
    },
    methods: {
        purchased: function (party) {
            return 'Ticket To ' + party + ' purchase! ' + this.name;
        },
        showHomeOnly: function () {
            this.showHome = true;
            this.homeShowParties = false;
            this.homeShowChat = false;
            this.showDropDown = false;
            this.chosenPartyPage = false;
            this.chatText = false;
        },

        showPartiesOnly: function (party) {
            this.showHome = false;
            this.homeShowParties = true;
            this.homeShowChat = false;
            this.chatText = false;
            this.showDropDown = false;
            this.chosenPartyPage = false;
            this.chosenParty = party;
            this.price = this.chosenParty.price;
            if(this.price == 'FREE'){
                this.price = 'Free Entrance';
            }else{

                this.price = 'Tickets ' + this.chosenParty.price +  ' €' ;
            }
        },
        showChatOnly: function () {
            this.showHome = false;
            this.homeShowParties = false;
            this.homeShowChat = true;
            this.chatText = false;
            this.showDropDown = false;
            this.chosenPartyPage = false;
        },
        showChatTextOnly: function () {
            this.showHome = false;
            this.homeShowParties = false;
            this.homeShowChat = false;
            this.showDropDown = false;
            this.chosenPartyPage = false;
            this.chatText = true;
        },
        photoFancyBox: function (e) { 
                $.fancybox.open({
                    src  : '#hidden-content',
                    opts : {
                        afterClose: function() {
                            $("#hidden-content").show();
                        }
                    }
                });
        },

        showChosenPartyOnly: function (party) {
            this.showHome = false;
            this.homeShowParties = false;
            this.homeShowChat = false;
            this.chatText = false;
            this.showDropDown = false;
            this.chosenPartyPage = true;
            this.chosenParty = party;
            this.cover = this.chosenParty.cover;
            this.description = this.chosenParty.description;
            this.address = this.chosenParty.address;
            this.map = this.chosenParty.map;
            this.price = this.chosenParty.price;
            if(this.price == 'FREE'){
                this.price = 'Free Entrance';
            }else{

                this.price = 'Tickets ' + this.chosenParty.price +  ' €' ;
            }
        },
        partiesHorizontal: function () {
            this.showHome = false;
            this.homeShowParties = true;
            this.homeShowChat = false;
            this.chatText = false;
            this.showDropDown = false;
            this.chosenPartyPage = false;

            for (let i = 0 ; i <this.parties.length ; i++ ){
                this.counter = this.counter +1;
                if(this.parties[i].price == 'FREE'){
                    this.price = 'Free Entrance';
                }else{
    
                    this.price = 'Tickets ' + this.parties[i].price +  ' €' ;
                }
            }
            
            
        },
        purchased: function (){
            alert('You are IN!!!');
        },
        normalSignIn: function(){
            let email = "someEmail";
            let password = "somePassword";
            firebase.auth().normalSignIn(email, password);
        },
        googleSignIn:function (){
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        },
        // signOut: function(){
        //     fireBase.auth().signOut();
        // }
        
        
        
    },



});
