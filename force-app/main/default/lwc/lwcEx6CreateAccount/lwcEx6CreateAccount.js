import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';

import { deleteRecord } from 'lightning/uiRecordApi';


export default class LwcEx6CreateAccount extends LightningElement {

    conName;
    Phone;
    Email;

    namechange(event){
        this.conName = event.target.value;
    }

    phonechange(event){
        this.Phone = event.target.value;
    }

    Emailchange(event){
        this.Email = event.target.value;
    }
    handlesave(event){
       const fields = {'Name':this.conName,'Phone':this.Phone,'MyTestingPkg__Email__c':this.Email};
       const recordInput = {
            apiName:'Account'
            ,fields
        };
        console.log('recordInput',recordInput);
        createRecord(recordInput).then(
            Response => {
                console.log('Response',Response.id);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
              }
        ).catch(
            error=>{
                console.log('error',error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            }
        );
        
    }
   
}