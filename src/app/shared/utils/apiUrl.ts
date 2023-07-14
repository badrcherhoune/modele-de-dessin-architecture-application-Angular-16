import { environment } from "src/environments/environment.prod";

const url = environment.dev;
const composantUrl = url + `/versionComposant`

export const apiUrl = {
    //START search
    search: (searchEF:any) => url + `/IFE/findIFEValides?query=`+searchEF+'&limit=20',
    searchClient: (searchClient:any) => url + `/search/client?query=`+searchClient,
    searchPoleActivite: () => url + '/polesActivite/findPolesActiviteValides',
    searchCriteres: (typeTarif:any,typeTableau:any,typologyCriteria:any) => url + '/criteresPrix/findListeCriteresPrix?typeTarif='+typeTarif+'&typeTableau='+typeTableau+'&typologyCriteria='+typologyCriteria,
    searchRefGeo: (searchRefGeo:any,limit:any) => url + `/refGeo/findRefGeo?query=`+searchRefGeo+'&limit='+limit,
    searchPays: (searchPays:any) => url + `/search/pays?query=`+searchPays,
    searchGare: (searchGare:any) => url+ '/search/gare?query='+searchGare,
    searchtest2: (searchPFE:any) => url + `/search/test2?query=`+searchPFE,
    searchtable: (table:any) => url + '/detuser/findDetuserValides?query='+table,
    searchAppClien: (searchAppClien:any) => url + `/search/AppClien?query=`+searchAppClien,
    searchCategorieuser: (search:any, limit:any) => url + `/categorieuser/findByCodeOrLibelle?query=` + search + `&limit=` + limit,
    searchMarchandise: (searchMarchandise:any,limit:any) => url + `/marchandise/findMarchandise?query=`+searchMarchandise+'&limit='+limit,
    searchapp: (app:any) => url + `/app/findappsValides?query=`+app+'&limit=20',
    searchtest: (searchtest:any,limit:any) => url + `/refGeo/findtest?query=`+searchtest+'&limit='+limit,
    searchuser: () => url + '/user/findByDebutNumuserAndDate',
    //END search

}