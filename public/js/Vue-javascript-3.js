const myApp = new Vue({
    el: '#vue-app',
    data: {
        //https://api.myjson.com/bins/1epegx   //
        myName: 'Yoel',
        counter: 0,
        showHome: true,
        homeShowParties: false,
        homeShowChat: false,
        chatText: false,
        showDropDown: false,
        price: 0,
        showChosenParty: false,
        euroSign: 0,
        username: '',
        userEmail: '',
        resultObject: [],
        filterDiv: false,
        monthByCliking: 0,
        chosenMonth: 'All',
        filteredPartyArray: [],
        parties: [],
        parties2: [],
        month: 'January',
        monthsArray: ['All', 'January', 'Februery', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        jsonUrl: "https://api.myjson.com/bins/1epegx",

        mainText: document.getElementById("mainText"),
        submitBtn: document.getElementById("submitBtn"),
        fireHeading: document.getElementById("fireHeading"),

        chosenParty: [{}],
        allParties: [{}],
        chosenPartyPage: false,
        cover: 0,
        description: 0,
        address: 0,
        map: 0,

    },
    created(){
      
      this.ajaxCall();
        
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
            if (this.price == 'FREE') {
                this.price = 'Free Entrance';
            } else {

                this.price = 'Tickets ' + this.chosenParty.price + ' €';
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
                src: '#hidden-content',
                opts: {
                    afterClose: function () {
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
            if (this.price == 'FREE') {
                this.price = 'Free Entrance';
            } else {

                this.price = 'Tickets ' + this.chosenParty.price + ' €';
            }
        },

        partiesHorizontal: function () {
            this.showHome = false;
            this.homeShowParties = true;
            this.homeShowChat = false;
            this.chatText = false;
            this.showDropDown = false;
            this.chosenPartyPage = false;

            for (let i = 0; i < this.parties.length; i++) {
                this.counter = this.counter + 1;
                if (this.parties[i].price == 'FREE') {
                    this.price = 'Free Entrance';
                } else {

                    this.price = 'Tickets ' + this.parties[i].price + ' €';
                }
            }


        },

        purchased: function () {
            alert('You are IN!!!');
        },

        normalSignIn: function () {
            let email = "someEmail";
            let password = "somePassword";
            firebase.auth().normalSignIn(email, password);
        },

        googleSignIn: function () {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                this.resultObject = result;
                myApp.username = result.user.displayName;
                myApp.userEmail = result.user.email;

            });
            myApp.showChatTextOnly();

        },

        submitClick: function () {
            const myNode = document.getElementById("test-div-info");
            myNode.innerHTML = '';

            myApp.sendInformationDatabase();
            myApp.receiveInformationDatabase();
            document.getElementById('mainText').value = '';
        },

        sendInformationDatabase: function () {
            let messageText = mainText.value;
            let newKey = firebase.database().ref('/Users').push().key;

            let updates = {};
            updates['Users/' + newKey] = {
                userName: myApp.username,
                message: messageText
            }
            firebase.database().ref().update(updates);

        },

        receiveInformationDatabase: function () {
            firebase.database().ref('Users').once('value', function (data) {
                let myData = data.val();

                for (messages in myData) {
                    let name = myData[messages].userName
                    let message = myData[messages].message
                    $('#test-div-info').append('<div class="myMsg-main"><div class="myMsg"><p class="user-fonts">' + name + '</p></div> <div class="myMsg2"><p class="msg-fonts">' + message + '</p></div></div>');

                }

            })
        },

        signOut: function () {
            firebase.auth().signOut().then(function () {

            }).catch(function (error) {

            });
            myApp.showChatOnly();
        },

        changeMonthPlus: function(){
            this.monthByCliking = this.monthByCliking + 1;
            if(this.monthByCliking >= 13){
                this.monthByCliking = 0; 
            }
            myApp.myMonth();
            myApp.filterParties();
        },

        changeMonthMinus: function(){
            this.monthByCliking = this.monthByCliking - 1;
            if(this.monthByCliking < 0){
                this.monthByCliking = 12;
            }
            myApp.myMonth();
            myApp.filterParties();
        },

        myMonth: function(){
           let x =  this.monthsArray[this.monthByCliking];
           this.chosenMonth = x;        
        },
            
        filterParties: function(){ 
            document.getElementById('plus');
            this.filteredPartyArray = [];
            for (let i = 0 ; i < this.parties2.length ; i++){

                if(this.parties2[i].month == this.chosenMonth){
                    this.filteredPartyArray.push(this.parties2[i]);
                    document.getElementById('sorry-msg').innerHTML = '';

                }else if(this.chosenMonth == "All"){
                    this.filteredPartyArray = this.parties2;
                    document.getElementById('sorry-msg').innerHTML = '';

                }else if(this.chosenMonth == "October"){
                    document.getElementById('sorry-msg').innerHTML = '';

                }else{
                    document.getElementById('sorry-msg').innerHTML = "<h3>We're sorry, no parties found</h3>";

                }
                 
                this.parties = this.filteredPartyArray;
            }
           
            
        },

        ajaxCall: function(){
            fetch("https://api.myjson.com/bins/1epegx").then(function (response) {
                if (response.ok) {
                    return response.json()
                    
                }
                throw new Error(reponse.statusText);
            }).then(function (json) {
                myApp.parties2 = json;
                myApp.parties = json;
                
                
                console.log(myApp.parties);
                console.log(myApp.parties2);

                
                //functions->
                
            }).catch(function (error) {
            
            });
        
        }

    },
    



});














