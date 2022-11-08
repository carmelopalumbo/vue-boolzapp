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
                lastSeen: '15:45',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    toggle: false
                    }
                ],
                },
                {
                name: 'Simone',
                avatar: 'assets/img/avatar_2.jpg',
                visible: true,
                active: false,
                lastSeen: '15:55',
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    toggle: false
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    toggle: false
                    }
                ],
                },
                {
                name: 'Samuele',
                avatar: 'assets/img/avatar_3.jpg',
                visible: true,
                active: false,
                lastSeen: '14:45',
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received',
                    toggle: false
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    toggle: false
                    }
                ],
                },
                {
                name: 'Nicola',
                avatar: 'assets/img/avatar_4.jpg',
                visible: true,
                active: false,
                lastSeen: '12:13',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    toggle: false
                    }
                ],
                },
                {
                name: 'Domenico',
                avatar: 'assets/img/avatar_5.jpg',
                visible: true,
                active: false,
                lastSeen: '17:20',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received',
                    toggle: false
                    }
                ],
                },
                {
                name: 'Rita',
                avatar: 'assets/img/avatar_6.jpg',
                visible: true,
                active: false,
                lastSeen: '15:48',
                messages: [
                    {
                    date: '10/01/2020 15:10:00',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent',
                    toggle: false
                    }
                ],
                },
                {
                name: 'Federico',
                avatar: 'assets/img/avatar_7.jpg',
                visible: true,
                active: false,
                lastSeen: '10:15',
                messages: [
                    {
                    date: '10/01/2020 15:30:00',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received',
                    toggle: false
                    }
                ],
                },
                {
                name: 'Pietro',
                avatar: 'assets/img/avatar_8.jpg',
                visible: true,
                active: false,
                lastSeen: '13:15',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent',
                    toggle: false
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received',
                    toggle: false
                    }
                ],
                }
            ],

            // array risposte random
            replies: ['Ok!', 'Va bene', 'Grazie', 'Fantastico', 'Arrivo!', 'Scusa!'],

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
                date: '10/01/2020 15:54:00',
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
                date: '10/01/2020 15:57:00',
                message: this.getRandomReply(),
                status: 'received',
                toggle: false
            }
            this.contacts[this.activeChat].messages.push(tempMessage);
        },

        // filtra le chat tramite l input in barra
        findChat(){
            this.contacts.forEach(contact => {
                if(!contact.name.includes(this.search)){
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

        getChatDate(i){
            const tempDate = Array.from(this.contacts[this.activeChat].messages[i].date);
            return tempDate.splice(11,5).join("");
        }
    },

    mounted(){
        
    }
    
}).mount('#app');