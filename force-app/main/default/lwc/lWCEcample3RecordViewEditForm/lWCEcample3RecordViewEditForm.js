import { LightningElement,api } from 'lwc';

export default class LWCEcample3RecordViewEditForm extends LightningElement {

@api recordId = '0015j00001Axyh2AAB';
nameofrec;

namechanged(event){
    this.nameofrec = event.target.value;
}

reset(event){
    const inputfields = this.template.querySelectorAll('lightning-input-field');
    inputfields.forEach(field => {
        field.reset();
    })
    
}

}