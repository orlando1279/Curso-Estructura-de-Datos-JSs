class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
        const  lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        data[length - 1] = null;
        this.length --;
        return lastItem;
    }
    delete(index){
        const item = data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
          this.ata[i] =  this.data[i +1];
        }
        delete this.data[this.length - 1];
        this.length --;
    }
    unshift(item) {
        if (item) {
          this.length = 1;
          Object.values(this.data).forEach(el => {
            this.data[this.length++] = el;
          });
          this.data[0] = item;
        }
        return this.length;
      }
    }
const myArray = new MyArray();
  myArray.push('Diego');
  myArray.push('Karen');
  myArray.push('Oscar');
  console.log(myArray);
  console.log(myArray.get(1));
  console.log(myArray.length);