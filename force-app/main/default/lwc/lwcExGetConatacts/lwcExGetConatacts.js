import { LightningElement, wire } from 'lwc';
import getcons from '@salesforce/apex/getContactsCls.getcons'

const colmns = [
          {label:'First Name',fieldName:'FirstName',type:'text'},
          {label:'Phone',fieldName:'Phone'},
          {label:'Email',fieldName:'Email',type:'Email'},
          {label:'Name',fieldName:'Name',type:'text'},
          {label:'AccountId',fieldName:'AccountId',type:'String'}
         
         ];


export default class LwcExGetConatacts extends LightningElement {


    @wire (getcons,{searchstr:'$searchword'}) cons;
    colms = colmns;

    searchword;
    handleonchange(event){

        this.searchword = event.target.value;

    }

}