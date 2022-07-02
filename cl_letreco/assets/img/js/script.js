let control = {
  letra_pos: "0",
  linha_pos: "0",
  id: "00",

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


}
