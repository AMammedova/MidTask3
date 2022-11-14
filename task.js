let btn_send = document.querySelector('.btn_send')
let userName = document.querySelector('.name_auth')
let message = document.querySelector('.message_auth')
let history_show = document.querySelector('.show_history');
let history = document.querySelector('.history')

class Message {
    constructor(userName, message) {
        this.userName = userName;
        this.date = new Date();
        this.message = message;
    }
    toString() {
        return (`Author: ${this.userName}, Message: ${this.message}, Time: ${this.date.getHours()}:${this.date.getMinutes()}`)
    }
}
class Messenger {
    list = [];
    send(userName, message) {
        let newmessage = new Message(userName, message)
        this.list.push(newmessage)
    };
    show_history() {
        this.list.forEach(message => {
            console.log(message.toString())
        })
    }
}

let messenger = new Messenger()

btn_send.addEventListener('click', (e) => {
    if (userName.value == '' || message.value == '') {
        alert("bosh sahe var")
    } else {
        messenger.send(userName.value, message.value)
        userName.value = '';
        message.value = '';
    }
})
history_show.addEventListener('click', (e) => {
    let data = '';
    messenger.list.forEach(message_data => {
        data += message_data.toString() + '<br>';
    })
    history.innerHTML = ` ${data}`;
})