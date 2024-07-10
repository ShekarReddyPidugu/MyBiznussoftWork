import { LightningElement } from 'lwc';

export default class Child2Parent_Childcmp extends LightningElement {

    buttonclicked(event){
        var evtnew = new CustomEvent('eventnameinlowercaseonly',{detail:'Hello event from Child cmp is called from parent cmp declaratively'});
        this.dispatchEvent(evtnew);
    }
}