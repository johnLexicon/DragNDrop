
function hash(str) {
    var hash = 5381,
        i    = str.length;
  
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
  
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return hash >>> 0;
}


class Message {
    constructor(t){
        this.text = t;
    }

    get text(){
        return this._text;
    }

    set text(value){
        this._text = value;
    }

    get messageId(){
        return hash(this._text);
    }

    equals(otherMessage){
        return this.messageId === otherMessage.messageId;
    }
}

class MessageHandler{

    constructor(){
        this._messages = [];
    }

    addMessage(text){
        this._messages.push(new Message(text));
        this.saveMessages();
    }

    removeMessage(message){
        this._messages = this._messages.filter(m => !m.equals(message));
        this.saveMessages();
    }

    saveMessages(){
        if(Storage){
            localStorage.setItem("MessageCollection", JSON.stringify(this._messages));
        }
    }
}