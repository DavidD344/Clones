let control = {
  letra_pos: "0",
  linha_pos: "0",
  id: "00",
  letruco: "DAVID",
  nome: "",

  nextLetter() {
    if (this.letra_pos < 5) {
      this.letra_pos = String(Number(this.letra_pos) + 1);
    }
  },
  backLetter() {
    if (this.letra_pos > 0) {
      this.letra_pos = String(Number(this.letra_pos) - 1);
    }
  },

  nextRow() {

    if(Number(this.letra_pos) > 3){
    this.linha_pos = String(Number(this.linha_pos) + 1);

    this.letra_pos = "0"
    this.actId()  
}
  },

  actId() {
    this.id = this.linha_pos + this.letra_pos;
  },

  callName() {
    this.nome = ""
    this.nome += document.getElementById(this.linha_pos + "0").innerHTML
    this.nome += document.getElementById(this.linha_pos + "1").innerHTML
    this.nome += document.getElementById(this.linha_pos + "2").innerHTML
    this.nome += document.getElementById(this.linha_pos + "3").innerHTML
    this.nome += document.getElementById(this.linha_pos + "4").innerHTML

    console.log(this.nome)
    console.log(this.nome[1])
},

 verifyWin() {

    if (this.nome == this.letruco){

        console.log("You win")
        document.getElementById("menu").classList.remove('escondido')
    }
    
  },

  verifyColor() {
    this.verifyYell()
    this.verifyGrenn()
    this.verifyRed()

  },
  verifyGrenn() {

    // [...this.nome]
    // [...this.letruco]


        [...this.nome].forEach((letter, index)=>{          
            
            if (letter == this.letruco[index]) {

                document.getElementById(this.linha_pos + String(index)).classList.remove('yell')
                document.getElementById(this.linha_pos + String(index)).classList.add('green')
            }
        })
        
    
    
  },
  verifyYell() {

    //  [...this.nome].forEach((letter, index)=>{
        
    //      if (letter == this.letruco) {
    //          document.getElementById(this.linha_pos + String(index)).classList.add('green')
    //      }
    //  })

    [...this.nome].forEach((a,index)=>{

        [...this.letruco].forEach(b=>{

           if(a == b){document.getElementById(this.linha_pos + String(index)).classList.add('yell')}
        })
    })
  },

  verifyRed() {


    [...this.nome].forEach((a,index)=>{

        let i = 0;
        [...this.letruco].forEach(b=>{

           if(a == b){i = i+1}
        })
        if(i == 0){ document.getElementById(this.linha_pos + String(index)).classList.add('red')}
    })
  
    // [...this.nome].forEach((a,index)=>{
    //     i=0;
    //     [...this.letruco].forEach((b,bindex)=>{

    //        if(a.includes(b)){i++}
    //        console.log(i)
    //     if(i==0){
    //         document.getElementById(this.linha_pos + String(index)).classList.add('red')
    //     }
    //     })
    // })
    
  },



// \\\\\\\\\\\\\\\

  insert(letter) {
    if ( this.letra_pos < 5) {

        document.getElementById(this.id).innerHTML = letter;
        this.nextLetter();
        this.actId();
    } 
  },

  delete() {
    this.backLetter();
    this.actId();
    document.getElementById(this.id).innerHTML = "";
 
  },

  downRow() {
    this.callName()
    this.verifyColor()
    this.verifyWin()
    this.nextRow()
 
  }


}



// \\\\\\\\\\\\\\\



