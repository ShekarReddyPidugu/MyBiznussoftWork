import { LightningElement } from 'lwc';

export default class Parentochildparentcmp extends LightningElement {
   
    
    handletextchange(event){
        this.template.querySelector('c-parenttochildchildcmp').textinchild(event.target.value);
        
    }

}