import { LightningElement,api} from 'lwc';

export default class Parenttochildchildcmp extends LightningElement {
  msg;

   @api textinchild(strmsg){
      this.msg = strmsg
    }
}