import { LightningElement, api, wire } from 'lwc';
import getOppLst1 from '@salesforce/apex/getOppLst.getOppLst1'


const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Acc Id', fieldName: 'AccountId' }
];


export default class Getopportunities extends LightningElement {

    @api recordId;
    columns = COLUMNS;

    opps = [{}];
    @wire(getOppLst1, { accountId: '$recordId'}) opssdata({error,data}){
    if(data){
        console.log(JSON.stringify(data));
        this.opps = data;
    }else if(error){

        this.opps = undefined;
        console.log(error);
    }
}
}
