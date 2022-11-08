// vue

const {createApp} = Vue;

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
                lastSeen: '10/01/2022 23:18:55',
                messages: [
                    {
                    date: '10/01/2022 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 16:15:22',
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
                lastSeen: '10/01/2022 18:50:55',
                messages: [
                    {
                    date: '20/03/2022 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent',
                    info: false,
                    toggle: false,
                    },
                    {
                    date: '20/03/2022 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '20/03/2022 16:35:00',
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
                lastSeen: '10/01/2022 23:20:55',
                messages: [
                    {
                    date: '28/03/2022 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '28/03/2022 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '28/03/2022 16:15:22',
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
                lastSeen: '10/01/2022 19:10:55',
                messages: [
                    {
                    date: '10/01/2022 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:50:00',
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
                lastSeen: '10/01/2022 19:30:55',
                messages: [
                    {
                    date: '10/01/2022 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:50:00',
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
                lastSeen: '10/01/2022 22:30:55',
                messages: [
                    {
                    date: '10/01/2022 15:10:00',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:50:00',
                    message: 'Non ancora',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:51:00',
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
                lastSeen: '10/01/2022 21:30:55',
                messages: [
                    {
                    date: '10/01/2022 15:30:00',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:50:00',
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
                lastSeen: '10/01/2022 20:30:55',
                messages: [
                    {
                    date: '10/01/2022 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent',
                    info: false,
                    toggle: false
                    },
                    {
                    date: '10/01/2022 15:51:00',
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
            search: ''
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
                date: '10/01/2022 17:34:00',
                message: this.newMessage,
                status: 'sent',
                toggle: false
            }
            this.contacts[this.activeChat].messages.push(tempMessage);
            this.newMessage = '';
            setTimeout(this.getReplyMessage, 2000);
        },

        // genera risposta random dopo due secondi dal invio del nuovo messaggio
        getReplyMessage(){
            const tempMessage = {
                date: '10/01/2022 17:39:00',
                message: this.getRandomReply(),
                status: 'received',
                toggle: false
            }
            this.contacts[this.activeChat].messages.push(tempMessage);
        },

        // filtra le chat tramite l input in barra
        findChat(){
            this.contacts.forEach(contact => {
                if(!contact.name.toLowerCase().includes(this.search)){
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

        //formatta la data per la visualizzazione in chat
        getChatDate(i){
            const tempDate = Array.from(this.contacts[this.activeChat].messages[i].date);
            return tempDate.splice(11,5).join("");
        },

        // apre il toggle per eliminare un messagio e previene l apertura di altri toggle se presente uno aperto
        getToggle(i){
            this.closeAllToggle();
            this.contacts[this.activeChat].messages[i].toggle = true;
        },

        closeAllToggle(){
            this.contacts[this.activeChat].messages.forEach(contact => {
                contact.toggle = false;
            });
        }
    },

    mounted(){
        
    }
    
}).mount('#app');