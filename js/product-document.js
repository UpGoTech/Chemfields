
function select_document_primecel() {
   var e = document.getElementById("pdf_document_primecel");
       var i = e.options[e.selectedIndex].value;
       console.log(i);
    if ("primecel_product_1" == i) {
        window.open("/images/pdf/primecel/primecel-101.pdf", "_blank").location;
    }
    else if ("primecel_product_2" == i) {
        window.open("/images/pdf/primecel/primecel-102.pdf", "_blank").location
    } 
    else if ("primecel_product_3" == i) {
        window.open("/images/pdf/primecel/primecel-200.pdf", "_blank").location
    } 
}

function select_document_chemicel() {
   var e = document.getElementById("pdf_document_chemicel");
       var i = e.options[e.selectedIndex].value;
  
    if("chemicel_product_2" == i){
       window.open("/images/pdf/chemicel/specification-ph-101-min.pdf", "_blank").location;
    }
    else if("chemicel_product_3" == i){
       window.open("/images/pdf/chemicel/specification-ph-102-lm-min.pdf", "_blank").location;
    }
    else if("chemicel_product_4" == i){
       window.open("/images/pdf/chemicel/specification-ph-102-min.pdf", "_blank").location;
    }
    else if("chemicel_product_5" == i){
       window.open("/images/pdf/chemicel/specification-ph-103-min.pdf", "_blank").location;
    }
    else if("chemicel_product_6" == i){
       window.open("/images/pdf/chemicel/specification-ph-112-min.pdf", "_blank").location;
    }
    else if("chemicel_product_7" == i){
       window.open("/images/pdf/chemicel/specification-ph-301-min.pdf", "_blank").location;
    }
    else if("chemicel_product_8" == i){
       window.open("/images/pdf/chemicel/specification-ph-302-min.pdf", "_blank").location;
    }
    else if("chemicel_product_9" == i){
       window.open("/images/pdf/chemicel/specification-ph-200-min.pdf", "_blank").location;
    }
}