export default class CommonUtil{

    constructor(){}

    //  8: Supprimer, 9: Tab , 46: Supp, 37 et 39 : fleche directionnel, 86: v, 67: c, 88:x, 35: debut, 36:Fin, 90:z
    static commonAuthorization(event: KeyboardEvent){
        let paste = event.ctrlKey && event.keyCode === 86;
        let copy = event.ctrlKey && event.keyCode === 67;
        let cut = event.ctrlKey && event.keyCode === 88;
        let arrow = event.keyCode === 37 || event.keyCode === 39;
        let selectAll = event.ctrlKey && event.keyCode === 65;
        let shiftFin = event.shiftKey && event.keyCode === 35;
        let shiftDebut = event.shiftKey && event.keyCode === 36;
        let debutFin = event.keyCode === 35 || event.keyCode === 36;
        let deleteSuppr = event.keyCode === 8 || event.keyCode === 46;
        let annuler = event.ctrlKey && event.keyCode === 90;
        let tabulation = event.keyCode === 9;
        return paste || copy || cut|| arrow || selectAll || annuler || shiftDebut || shiftFin || debutFin || deleteSuppr || tabulation;
    }

    static restrictOnlyNumber(event: KeyboardEvent) {
        const regexNumero = /^[0-9]$/g;
        return this.commonAuthorization(event) || regexNumero.test(event.key);
    }

    static restrictOnlyNumberAndSlash(event: KeyboardEvent) {
        const regexNumero = /^[0-9/]$/g;
        return this.commonAuthorization(event) || regexNumero.test(event.key);
    }

    static restrictOnlyNumberAndStar(event: KeyboardEvent) {
        const regexNumero = /^[0-9*]$/g;
        return this.commonAuthorization(event) || regexNumero.test(event.key);
    }

    // Only AlphaNumeric
    static keyPressAlphaNumeric(event: KeyboardEvent) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z0-9]/.test(inp)) {
            return true;
        } else {
            event.preventDefault();
            return false;
        }
    }

    //44:virgule, 46:point (Table ASCII)
    static restrictFloat(event: KeyboardEvent) {
        const regexNumero = /^[0-9]$/g;
        return event.key.charCodeAt(0) === 44 || event.key.charCodeAt(0) === 46 || this.commonAuthorization(event) || regexNumero.test(event.key);
    }

    /*static isPasteInteger(event: ClipboardEvent) {
        let clipboardData = event.clipboardData;
        let pastedText = clipboardData.getData('text');
        let regex = /^\d+$/g;
        return regex.test(pastedText);
    }*/

    /*static isPasteFloat(event: ClipboardEvent) {
        const regex = /^[0-9,.]*$/g;
        let clipboardData = event.clipboardData;
        let pastedText = clipboardData.getData('text');
        pastedText = pastedText.toString().replace(/,/g, '.');
        return regex.test(pastedText);
    }*/

    static findMapCriteresApplicationsDde(){
        let mapCondiAppli = new Map();
        mapCondiAppli.set("numeroWagon", "NUMERO_WAGON");
        mapCondiAppli.set("categorieWagon", "CATEGORIE_WAGON");
        mapCondiAppli.set("natureWagon", "NATURE_WAGON");
        mapCondiAppli.set("fournitureWagon", "FOURNITURE_WAGON");
        mapCondiAppli.set("nombreEssieux", "NOMBRE_ESSIEUX");
        mapCondiAppli.set("dateDebut", "DATE_DEBUT");
        mapCondiAppli.set("dateFin", "DATE_FIN");
        mapCondiAppli.set("prestation", "PRESTATION");
        return mapCondiAppli;    
    }

    static findMapJoursDecompteDde(){
        let mapCondiAppli = new Map();
        mapCondiAppli.set("joursDecompte", "NATURE_WAGON");
        mapCondiAppli.set("samedi", "FOURNITURE_WAGON");
        mapCondiAppli.set("dimanche", "NOMBRE_ESSIEUX");
        mapCondiAppli.set("off", "DATE_DEBUT");
        return mapCondiAppli;    
    }

    static findMapJrsAValoriserDde(){
        let mapCondiAppli = new Map();
        mapCondiAppli.set("jrsSupllDec", "CATEGORIE_WAGON");
        return mapCondiAppli;    
    }

    static findMapCalculPrixDde(){
        let mapCalculPrix = new Map();
        mapCalculPrix.set("clientPayeur", "CLIENT_PAYEUR");
        mapCalculPrix.set("prix", "PRIX");
        return mapCalculPrix; 
    }

    static findMapCriteresApplications(){
        let mapCondiAppli = new Map();
        mapCondiAppli.set("origine", "ORIGINE");
        mapCondiAppli.set("destination", "DESTINATION");
        mapCondiAppli.set("produit", "PRODUIT");
        mapCondiAppli.set("itineraire", "ITINERAIRE");
        mapCondiAppli.set("communeEnlevement", "COMMUNE_ENLEVEMENT");
        mapCondiAppli.set("communeLivraison", "COMMUNE_LIVRAISON");
        mapCondiAppli.set("numeroWagon", "NUMERO_WAGON");
        mapCondiAppli.set("categorieWagon", "CATEGORIE_WAGON");
        mapCondiAppli.set("natureWagon", "NATURE_WAGON");
        mapCondiAppli.set("fournitureWagon", "FOURNITURE_WAGON");
        mapCondiAppli.set("marquageLitteral", "MARQUAGE_LITTERAL");
        mapCondiAppli.set("nombreEssieux", "NOMBRE_ESSIEUX");
        mapCondiAppli.set("detenteur", "DETENTEUR");
        mapCondiAppli.set("rid", "RID");
        mapCondiAppli.set("marchandise", "MARCHANDISE");
        mapCondiAppli.set("dateDebut", "DATE_DEBUT");
        mapCondiAppli.set("dateFin", "DATE_FIN");
        mapCondiAppli.set("jourRemise", "JOUR_REMISE");
        mapCondiAppli.set("masseNette", "MASSE_NETTE");
        mapCondiAppli.set("nombreWagon", "NOMBRE_WAGON");
        mapCondiAppli.set("masseBrute", "MASSE_BRUTE");
        mapCondiAppli.set("numeroTrain", "NUMERO_TRAIN");
        mapCondiAppli.set("distance", "DISTANCE");
        mapCondiAppli.set("prixImpose", "PRIX_IMPOSE");
        mapCondiAppli.set("garePan", "GARE_PAN");
        mapCondiAppli.set("prestation", "PRESTATION");
        return mapCondiAppli;    
    }

    static findMapCalculPrix(){
        let mapCalculPrix = new Map();
        mapCalculPrix.set("referenceClient", "NUMERO_COMMANDE_ACHAT");
        mapCalculPrix.set("coefficient1", "COEFFICIENT1");
        mapCalculPrix.set("coefficient2", "COEFFICIENT2");
        mapCalculPrix.set("remise", "REMISE");
        mapCalculPrix.set("prixScinde", "PRIX_SCINDE");
        mapCalculPrix.set("montantMinimum", "MONTANT_MINIMUM");
        mapCalculPrix.set("clientPayeur", "CLIENT_PAYEUR");
        mapCalculPrix.set("prix", "PRIX");
        mapCalculPrix.set("unite", "UNITE");
        mapCalculPrix.set("panSystematique", "PAN_SYSTEMATIQUE");
        mapCalculPrix.set("panInclusTransport", "PAN_INCLUS_TRANSPORT");
        mapCalculPrix.set("divers", "DIVERS");
        mapCalculPrix.set("pourcentage", "POURCENTAGE");
        mapCalculPrix.set("calculviaPourcentage", "CALCULVIAPOURCENTAGE");
        return mapCalculPrix; 
    }

    static findMapEnrichissement(){
        let mapEnrichissement = new Map();
        mapEnrichissement.set("enrichissement", "ENRICHISSEMENT");
        return mapEnrichissement; 
    }

    static findMapModificationMass(){
        let mapModificationMass = new Map();
        mapModificationMass.set("produit", "PDT");
        mapModificationMass.set("itineraire", "ITI");
        mapModificationMass.set("communeEnlevement", "COMMENLEV");
        mapModificationMass.set("communeLivraison", "COMMLIV");
        mapModificationMass.set("numeroWagon", "NUMWAG");
        mapModificationMass.set("fournitureWagon", "FWAG");
        mapModificationMass.set("marquageLitteral", "MARLI");
        mapModificationMass.set("detenteur", "DET");
        mapModificationMass.set("dateDebut", "DDEB");
        mapModificationMass.set("dateFin", "DFIN");
        mapModificationMass.set("jourRemise", "JRR");
        mapModificationMass.set("masseNette", "MASNET");
        mapModificationMass.set("nombreWagon", "NBWAG");
        mapModificationMass.set("numeroTrain", "NUMTRAIN");
        mapModificationMass.set("masseBrute", "MASBR");
        mapModificationMass.set("distance", "DIST");
        mapModificationMass.set("prixImpose", "PU");
        mapModificationMass.set("garePan", "GP");
        mapModificationMass.set("prestation", "PRES");
        mapModificationMass.set("referenceClient", "REFCLT");
        mapModificationMass.set("clientPayeur", "CLTPAY");
        mapModificationMass.set("prix", "PR");
        mapModificationMass.set("unite", "UNIT");
        mapModificationMass.set("coefficient1", "COEF1");
        mapModificationMass.set("coefficient2", "COEF2");
        mapModificationMass.set("remise", "REMISE");
        mapModificationMass.set("montantMinimum", "MTMIN");
        mapModificationMass.set("panSystematique", "PANSYS");
        mapModificationMass.set("panInclusTransport", "PANTRANS");
        mapModificationMass.set("origine", "O");
        mapModificationMass.set("destination", "D");
        mapModificationMass.set("categorieWagon", "CATWAG");
        mapModificationMass.set("marchandise", "MARCHANDISE");
        mapModificationMass.set("rid", "RID");
        mapModificationMass.set("natureWagon", "NATWAG");
        mapModificationMass.set("nombreEssieux", "NBESSIEU");
        mapModificationMass.set("divers", "DIVERS");
        mapModificationMass.set("enrichissement", "ENRICHISSEMENT");
        return mapModificationMass; 
    }

    static findMapModificationMassModif(){
        let mapModificationMassModif = new Map();
        mapModificationMassModif.set("nombreEssieux", "nbreEssieu");
        mapModificationMassModif.set("natureWagon", "natwag");
        mapModificationMassModif.set("rid", "rid");
        mapModificationMassModif.set("marchandise", "marchandise");
        mapModificationMassModif.set("categorieWagon", "catwag");
        mapModificationMassModif.set("origine", "PGL");
        mapModificationMassModif.set("destination", "PGL");
        return mapModificationMassModif; 
    }

    static findMapCritereCPU(){
        let mapCritereCpu = new Map();
        mapCritereCpu.set("origine", "ORIGINE");
        mapCritereCpu.set("destination", "DESTINATION");
        mapCritereCpu.set("categorieWagon", "CATEGORIE_WAGON");
        mapCritereCpu.set("fournitureWagon", "FOURNITURE_WAGON");
        mapCritereCpu.set("nombreEssieux", "NOMBRE_ESSIEUX");
        mapCritereCpu.set("marchandise", "MARCHANDISE");
        return mapCritereCpu; 
    }

    static restrictOnlyNumberandslash(event: KeyboardEvent) {
        const regexNumero = /^[0-9/]$/g;
        return this.commonAuthorization(event) || regexNumero.test(event.key);
    }

    static restrictOnlyNumberandcommas(event: KeyboardEvent) {
        const pattern = /^[a-zA-Z,]$/g;
        return this.commonAuthorization(event) || pattern.test(event.key);
    }
}