const { createApp } = Vue;

createApp({
    data() {
        return {
            limit: 0,
            repeat: false,
            inputLet: false,
            inputNum: false,
            inputSim: false,
            repeat: false,
            lettere: "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
            numeri: "1234567890",
            simboli: "|!£$&/()=?°ç@",
            password: ""
        }
    },
    methods: {
        change() {
            letter = this.$refs.let
            num = this.$refs.num
            sim = this.$refs.sim

            if (letter.checked) {
                this.inputLet = true
            } else {
                this.inputLet = false
            }
            if (num.checked) {
                this.inputNum = true
            } else {
                this.inputNum = false
            }
            if (sim.checked) {
                this.inputSim = true
            } else {
                this.inputSim = false
            }

        },
        select() {
            this.repeat = !this.repeat
        },
        generate(){
            password = "";
            newString = '';
            if(this.inputLet){
                newString +=this.lettere
            }
            if(this.inputNum){
                newString += this.numeri
            }
            if(this.inputSim){
                newString += this.simboli
            }
            for(let i = 0 ; i < this.limit ; i++){
                numberRamdom= Math.floor(Math.random()*newString.length);
                if(this.repeat == false && !password.includes(newString[numberRamdom])){
                    password += newString[numberRamdom]
                } else if(this.repeat == true) {
                    password += newString[numberRamdom]
                } else {
                    i--
                }
            }
            this.password = password
            console.log(password);
        }
    }
}).mount("#app")