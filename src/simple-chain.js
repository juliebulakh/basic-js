const chainMaker = {
  str:[],
  getLength(){
      return this.str.length();
  },
  addLink(a){
      this.str.push(a.toString());
      return this;
  },
  removeLink (position){
      this.str.splice(position,1);
      return this;
  },
  reverseChain() {
      this.str.reverse();
      return this;
  },
  finishChain () {
      return this.str.map(a=>'('+a+')').join(" ~~ ");
  }
};

module.exports = chainMaker;
