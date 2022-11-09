// vue

const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({

    data(){
        return{

            // array di oggetti
            contacts:[
                {
                name: 'Alessandro',
                avatar: 'assets/img/avatar_1.jpg',
                visible: true,
                active: true,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Hai portato a spasso il gatto?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Ricordati di fare la spesa',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Tutto fatto!',
                    status: 'received',
                    info: false,
                    toggle: false
                    }
                ],
                },
                {
                name: 'Simone',
                avatar: 'assets/img/avatar_2.jpg',
                visible: true,
                active: false,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Ciao come stai?',
                    status: 'sent',
                    info: false,
                    toggle: false,
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Bene grazie! Domani ci vediamo?',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Mi piacerebbe ma devo andare al cinema con Luca.',
                    status: 'sent',
                    info: false,
                    toggle: false
                    }
                ],
                },
                {
                name: 'Samuele',
                avatar: 'assets/img/avatar_3.jpg',
                visible: true,
                active: false,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'La Marianna va in discoteca',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Ops, scusa!',
                    status: 'received',
                    info: false,
                    toggle: false
                    }
                ],
                },
                {
                name: 'Nicola',
                avatar: 'assets/img/avatar_4.jpg',
                visible: true,
                active: false,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Lo sai che Marco ha aperto una nuova pizzeria?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Si, ma preferirei andare al bowling',
                    status: 'received',
                    info: false,
                    toggle: false
                    }
                ],
                },
                {
                name: 'Domenico',
                avatar: 'assets/img/avatar_5.jpg',
                visible: true,
                active: false,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Ricordati di chiamare lo zio',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Va bene, stasera lo sento!',
                    status: 'received',
                    info: false,
                    toggle: false
                    }
                ],
                },
                {
                name: 'Rita',
                avatar: 'assets/img/avatar_6.jpg',
                visible: true,
                active: false,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Ciao cara, hai novità?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Non ancora',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Va bene, ci risentiamo!',
                    status: 'sent',
                    info: false,
                    toggle: false
                    }
                ],
                },
                {
                name: 'Federico',
                avatar: 'assets/img/avatar_7.jpg',
                visible: true,
                active: false,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Fai gli auguri a Giovanni che è il suo compleanno!',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Grazie per avermelo ricordato, gli scrivo subito!',
                    status: 'received',
                    info: false,
                    toggle: false
                    }
                ],
                },
                {
                name: 'Pietro',
                avatar: 'assets/img/avatar_8.jpg',
                visible: true,
                active: false,
                lastSeen: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'No, l\'ho già mangiata ieri, andiamo al sushi!',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'OK!!',
                    status: 'received',
                    info: false,
                    toggle: false
                    }
                ],
                }
            ],

            // array risposte random
            replies: ['Ok!', 'Va bene.', 'Grazie.', 'Fantastico.', 'Arrivo!', 'Scusa!', 'Non posso.', 'Ho da fare!', 'Scendi!', 'Richiamami.'],

            activeChat: 0,
            newMessage: '',
            search: '',
            scroll: ''
        }
    },

    // metodi
    methods:{

        // cambia la chat attiva al click di essa
        getNewChat(index){
            this.contacts[this.activeChat].active = false;
            this.activeChat = index;
            this.contacts[this.activeChat].active = true;
        },

        // aggiunge un nuovo messaggio alla chat attiva al enter del input
        addNewMessage(){
            if(!this.newMessage) return;
            const tempMessage = {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                message: this.newMessage,
                status: 'sent',
                toggle: false
            }
            this.contacts[this.activeChat].messages.push(tempMessage);
            this.newMessage = '';
            setTimeout(this.getReplyMessage, 2000);
            setTimeout(this.refreshScroll, 200);
        },

        // genera risposta random dopo due secondi dal invio del nuovo messaggio
        getReplyMessage(){
            const tempMessage = {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                message: this.getRandomReply(),
                status: 'received',
                toggle: false
            }
            this.contacts[this.activeChat].messages.push(tempMessage);

            // aggiorno ultimo accesso
            this.contacts[this.activeChat].lastSeen = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
            
            setTimeout(this.refreshScroll, 200);
        },

        // filtra le chat tramite l input in barra
        findChat(){
            this.contacts.forEach(contact => {
                if(!contact.name.toLowerCase().includes(this.search.toLowerCase())){
                    contact.visible = false;
                }else{
                    contact.visible = true;
                }
            });
        },

        // cancella il messaggio al click dell opzione
        deleteMessage(i){
            this.contacts[this.activeChat].messages.splice(i, 1);
        },

        // verifica se non sono presenti messaggi e ritorna una stringa vuota da visualizzare nel anteprima
        lastMessage(contact){
            if(contact.messages.length !== 0){
                return contact.messages[contact.messages.length - 1].message;
            }else{
                return "";
            }
        },

        // verifica se non sono presenti date e ritorna una stringa vuota da visualizzare nel anteprima
        lastDate(contact){
            if(contact.messages.length !== 0){
                return contact.messages[contact.messages.length - 1].date;
            }else{
                return "";
            }
        },

        // genera un numero random e restituisce una stringa in quell indice
        getRandomReply(){
            const num = Math.floor(Math.random() * (this.replies.length));
            return this.replies[num];
        },

        // apre il toggle per eliminare un messagio e previene l apertura di altri toggle se presente uno aperto
        getToggle(i){
            this.closeAllToggle();
            this.contacts[this.activeChat].messages[i].toggle = true;
        },

        // previene l apertura di piu toggle contemporaneamente
        closeAllToggle(){
            this.contacts[this.activeChat].messages.forEach(contact => {
                contact.toggle = false;
                contact.info = false
            });
        },

        // refresh scroll dal basso
        refreshScroll(){
            let box = document.querySelector('.box-chat');
            box.scrollTop = box.scrollHeight;
        },
    }

}).mount('#app');