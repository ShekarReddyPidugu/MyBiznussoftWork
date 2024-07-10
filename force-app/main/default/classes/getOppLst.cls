public with sharing class getOppLst {
@AuraEnabled(cacheable=true)
public static List<Opportunity> getOppLst1(Id accountId) {
    return [SELECT Id, Name FROM Opportunity WHERE AccountId = :accountId];
}
}
