// vue

const {createApp} = Vue;
const dt = luxon.DateTime;
const now = dt.now();
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Ciao come stai?',
                    status: 'sent',
                    info: false,
                    toggle: false,
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'La Marianna va in campagna',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Ah scusa!',
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Si, ma preferirei andare al cinema',
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Va bene, stasera la sento',
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Non ancora',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Nessuna nuova, buona nuova',
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
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
                lastSeen: now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                messages: [
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
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
                date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
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
                date: now.setLocale('it').toLocaleString(dt.DATETIME_MED),
                message: this.getRandomReply(),
                status: 'received',
                toggle: false
            }
            this.contacts[this.activeChat].messages.push(tempMessage);
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
                tempData = now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
                return tempData;
            }else{
                return "";
            }
        },

        // genera un numero random e restituisce una stringa in quell indice
        getRandomReply(){
            const num = Math.floor(Math.random() * (this.replies.length));
            return this.replies[num];
        },

        //formatta la data per la visualizzazione in chat
        getChatDate(){
            return now.setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
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
    },

    mounted(){
        
    }
    
}).mount('#app');