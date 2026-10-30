  //Call on dropdown value change 

  function select_document() {

    var e = document.getElementById("pdf_document"),
    selected_document = e.options[e.selectedIndex].value;

    //store selected document value in local storage
    localStorage.setItem("selected_document", selected_document);

    /*
       If form enquiry_id not present in local storage then show the form otherwise
       Download Document
    */
    download_document();
  }


  /*
    1. Call When enquiry_id already present in local storage 
  */

  function download_document() {
    var i = localStorage.getItem('selected_document');
     console.log(i);

     //Actual Qaulity Document
    if ("gmp-certificate" == i)
    {
      location.href = "https://www.chemfields.com/consignments/login/download/gmp-certificate";
    }
    else if ("excipact-certificate" == i) {
     location.href = "https://www.chemfields.com/consignments/login/download/excipact-certificate";
    } 

    else if ("iso" == i) {
      location.href = "https://www.chemfields.com/consignments/login/download/iso";
    } 
    else if ("msds" == i) {
     location.href = "https://www.chemfields.com/consignments/login/download/msds";
    } 
    else if ("ehs-policy" == i) {
     location.href = "https://www.chemfields.com/consignments/login/download/ehs-policy";
    } 
   
    else if ("primecel-process-flow-chart" == i) {
      location.href = "https://www.chemfields.com/consignments/login/download/primecel-process-flow-chart";
    }
    else if ("declaration-for-elemental-impurities" == i) {
     location.href = "https://www.chemfields.com/consignments/login/download/declaration-for-elemental-impurities";
    }
   
    else if ("stp" == i) {
     location.href = "https://www.chemfields.com/consignments/login/download/stp";
    }

    //chemicel
     else if ("chemicel-aflatoxin-dioxin-free-declaration" == i) {
         location.href = "https://www.chemfields.com/consignments/login/download/chemicel-aflatoxin-dioxin-free-declaration";
      }
      else if ("chemicel-certificate-of-origin" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/chemicel-certificate-of-origin";
      } 
      else if ("chemicel-confirmation-of-non-irradiation-status" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/chemicel-confirmation-of-non-irradiation-status";
      } 
      else if ("chemicel-declaration-for-absence-of-pesticide-residue" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-declaration-for-absence-of-pesticide-residue";
      } 
      else if ("chemicel-declaration-for-genotoxic-impurity" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/chemicel-declaration-for-genotoxic-impurity";
      } 
      else if ("chemicel-declaration-for-microbiological-test" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-declaration-for-microbiological-test";
      }  
      else if ("chemicel-declaration-in-relation-to-kosher-halal-status" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-declaration-in-relation-to-kosher-halal-status";
      } 
      else if ("chemicel-gluten-free-declaration" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/chemicel-gluten-free-declaration";
      } 
      else if ("chemicel-gmo-certificate" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-gmo-certificate";
      } 
      else if ("chemicel-non-allergen-statement" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-non-allergen-statement";
      } 
      else if ("chemicel-palletisation" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-palletisation";
      } 
      else if ("chemicel-raw-material-diagram" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/chemicel-raw-material-diagram";
      } 
      else if ("chemicel-residual-solvent-statement" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/chemicel-residual-solvent-statement";
      } 
      else if ("chemicel-statement-of-melamine-contamination" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-statement-of-melamine-contamination";
      } 
      else if ("chemicel-tse-bse-free-statement" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/chemicel-tse-bse-free-statement";
      } 
     
       else if ("chemicel-process-flow-diagram" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-process-flow-diagram";
      } 
       else if ("chemicel-statement-of-nutritional-information" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-statement-of-nutritional-information";
      } 
      else if ("chemicel-statement-of-wada" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/chemicel-statement-of-wada";
      } 
        else if ("chemicel-metal-catalyst-and-reagent" == i) {
     location.href = "https://www.chemfields.com/consignments/login/download/chemicel-metal-catalyst-and-reagent";
    } 
     else if ("chemicel-statement-for-volatile-organic-compounds" == i) {
      location.href = "https://www.chemfields.com/consignments/login/download/chemicel-statement-for-volatile-organic-compounds";
    }

      //primcel

       else if ("primecel-declaration-for-metal-catalysts-reagents" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-declaration-for-metal-catalysts-reagents";
      } 
      else if ("primecel-aflatoxin-dioxin-free-declaration" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-aflatoxin-dioxin-free-declaration";
      } 
      else if ("primecel-certificate-of-origin" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-certificate-of-origin";
      } 
      else if ("primecel-confirmation-of-non-irradiation-status" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-confirmation-of-non-irradiation-status";
      } 
      else if ("primecel-declaration-for-absence-of-pesticide-residue" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-declaration-for-absence-of-pesticide-residue";
      } 
      else if ("primecel-declaration-for-microbiological-tests" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-declaration-for-microbiological-tests";
      } 
      else if ("primecel-declaration-in-relation-to-kosher-halal-status" == i) {
         location.href = "https://www.chemfields.com/consignments/login/download/primecel-declaration-in-relation-to-kosher-halal-status";
      } 
      else if ("primecel-gluten-free-declaration" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-gluten-free-declaration";
      } 
      else if ("primecel-gmo-certificate" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/primecel-gmo-certificate";
      } 
      else if ("primecel-non-allergen-statement" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-non-allergen-statement";
      } 
      else if ("primecel-residual-solvent-statement" == i) {
       location.href = "https://www.chemfields.com/consignments/login/download/primecel-residual-solvent-statement";
      } 
      else if ("primecel-statement-on-melamine-contamination" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-statement-on-melamine-contamination";
      } 
      else if ("primecel-tse-bse-free-statement" == i) {
        location.href = "https://www.chemfields.com/consignments/login/download/primecel-tse-bse-free-statement";
      } 
      
      else if ("primecel-genotoxic-impurity-viral-contamination-min" == i) {
         location.href = "https://www.chemfields.com/consignments/login/download/primecel-genotoxic-impurity-viral-contamination-min";
      } 
      else if ("primecel-statement-of-nutritional-information" == i) {
         location.href = "https://www.chemfields.com/consignments/login/download/primecel-statement-of-nutritional-information";
      } 
      else if ("primecel-statement-of-wada" == i) {
         location.href = "https://www.chemfields.com/consignments/login/download/primecel-statement-of-wada";
      } 
  }

