import { LightningElement, wire } from 'lwc';

import getcons from '@salesforce/apex/getContactsCls.getcons'
import FirstName_Field from '@salesforce/schema/Contact.FirstName';
import Id_Field from '@salesforce/schema/Contact.Id';

import { updateRecord } from 'lightning/uiRecordApi';
import { createRecord } from 'lightning/uiRecordApi';



const cols = [
{label:'First Name',fieldName:'FirstName',type:'text',editable:true},
{label:'Phone',fieldName:'Phone'},
{label:'Email',fieldName:'Email',type:'Email'},
{label:'Name',fieldName:'Name',type:'text'},
{label:'AccountId',fieldName:'AccountId',type:'String'}

];

export default class LwcExample5WireFunction extends LightningElement {
    
    colms = cols;
    cities = ['Hyd','Chennai','Mumbai','Bglore'];
    colmns = [
    {label:'First Name',fieldName:'FirstName',type:'text'},
    {label:'Phone',fieldName:'Phone'},
    {label:'AccountId',fieldName:'AccountId',type:'String'}
    
    ];
    searchkey;
    searchkey1;
    returneddata;
    errorrr;
    
    handleonchange(event){
    this.searchkey = event.target.value;
    console.log( this.searchkey );
        }


    handleonchange1(event){
    this.searchkey1 = event.target.value;
    console.log('val2=', this.searchkey1 );
/*
    //advanced method for now
    getcons({ searchstr: this.searchkey1 })
		.then(result => {
			this.returneddata = result;
			this.error = undefined;
		})
		.catch(error => {
			this.error = error;
			this.returneddata = undefined;
		})
*/
    }

    @wire(getcons,{searchstr:'$searchkey'}) cons;

    @wire(getcons,{searchstr:'$searchkey1'}) retnData({error,data}){
    if(data){
        this.returneddata = data;
    }
    else if(error){
        this.errorrr = error;
        this.returneddata = undefined;
    }
    else{
        this.returneddata = undefined;
        this.errorrr = undefined;
    }

}

handleSave(event){

 const fields = {}
 fields[FirstName_Field.fieldApiName] = event.detail.draftValues[0].FirstName;
 fields[Id_Field.fieldApiName] = event.detail.draftValues[0].Id;
 const recordInput = {fields};
 console.log('recordInput',recordInput);

updateRecord({ fields: recordInput })
    .then(() => {
      
    })
    .catch(error => {
    
    });


}

}