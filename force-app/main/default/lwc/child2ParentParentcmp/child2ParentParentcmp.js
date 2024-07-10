import { LightningElement } from 'lwc';

export default class Child2ParentParentcmp extends LightningElement {

    message;
    handletheparentmethod(event){
        this.message = event.detail;
    }  
}