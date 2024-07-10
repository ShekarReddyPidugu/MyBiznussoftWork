public with sharing class getContactsCls {
    public getContactsCls() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> getcons(string searchstr){

        string searchkey = '%'+searchstr+'%';
        
       // List<Contact> conlst =  [SELECT id,Name,FirstName,LastName,Phone,Email FROM Contact limit 10];
       List<Contact> conlst =  [SELECT id,Name,FirstName,LastName,Phone,Email FROM Contact WHERE FirstName like :searchkey];
        system.debug('conlst='+conlst);
        return conlst;
    }

    
}