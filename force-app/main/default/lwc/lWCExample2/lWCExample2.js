import { LightningElement } from 'lwc';

export default class LWCExample2 extends LightningElement {

name = 'test';
name1;
number1 =0;
number2 =0;
number3 =0;

number4 = 0;
number5 = 0;
number6 = 0;
greaterNum;

cities = ['Hyd','Chennai','Mumbai','Bglore'];

countries = ['India','US','China','UK'];

onchangeaction(event){
   this.name = event.target.value;
   console.log('name==>',event.target.value);
}

save(event){
    this.name1 = this.name;
}

action1(event){

    this.number1 = event.target.value;
}
action2(event){
    this.number2 = event.target.value;
}

changecities(){
    this.cities = ['Patna','Delhi','Punjab','J&K'];
}

action3(event){
    this.number3 = event.target.value;
}

uniqueaction(event){

    let uniq = event.target.name;
    if(uniq == 'one'){
       this.number4 = event.target.value;
    }else if(uniq == 'two'){
        this.number5 = event.target.value;
    }else if(uniq == 'three'){
        this.number6 = event.target.value;
    }
}
clickhere(event){
   const aval = parseInt(this.number4);
   const bval = parseInt(this.number5);
   const cval = parseInt(this.number6);
   aval = 25;
 if(aval > bval && aval > cval){
    this.greaterNum = aval;
 }else if(bval > aval && bval>cval){
    this.greaterNum = bval;
 }else if(cval>aval && cval>bval){
    this.greaterNum = cval;
 }
console.log('greater number==',this.greaterNum);

}
submit(event){
    const firstN = parseInt(this.number1);
    const SecondN = parseInt(this.number2);
    const ThirdN = parseInt(this.number3);

if (firstN > SecondN && firstN>ThirdN) {
    alert(this.number1 +' IS GREATER THAN '+this.number2 +' & ' + this.number3);
  }else{
     if (SecondN > firstN && SecondN>ThirdN) {
        alert(this.number2 +' IS GREATER THAN '+this.number1 +' & ' + this.number3);
         }else{
           if (ThirdN > firstN && ThirdN>SecondN) {
            alert(this.number3 +' IS GREATER THAN '+this.number1 +' & ' + this.number2);
             }
             
           /*  else{
                if(SecondN > firstN){
                alert(this.number2 +' IS GREATER THAN '+this.number1);
                  }else{
                    if(ThirdN > firstN){
                    alert(this.number3 +' IS GREATER THAN '+this.number1);
                        }else{
                          if(ThirdN > SecondN){
                            alert(this.number3 +' IS GREATER THAN '+this.number2);
                             }
                        } 
                }
              }*/
        }

    }

}


}