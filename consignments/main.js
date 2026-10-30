(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chemfield App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/routing/app-routing.module */ "./src/app/shared/routing/app-routing.module.ts");
/* harmony import */ var _shared_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header/header.module */ "./src/app/shared/header/header.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.module */ "./src/app/components/home/home.module.ts");
/* harmony import */ var _components_login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.module */ "./src/app/components/login/login.module.ts");
/* harmony import */ var _components_consignments_consignments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/consignments/consignments.module */ "./src/app/components/consignments/consignments.module.ts");
/* harmony import */ var _components_consignment_detail_consignment_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/consignment-detail/consignment-detail.module */ "./src/app/components/consignment-detail/consignment-detail.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Base modules
 */



/**
 * Shared modules
 */



/**
 * Page Component modules
 */




/**
 * Providers & Services
 */


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                _components_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                _components_login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                _components_consignments_consignments_module__WEBPACK_IMPORTED_MODULE_8__["ConsignmentsModule"],
                _components_consignment_detail_consignment_detail_module__WEBPACK_IMPORTED_MODULE_9__["ConsignmentDetailModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_11__["BaseSettingsService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/consignment-detail/consignment-detail.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/consignment-detail/consignment-detail.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Statuses\n */\n.status-pending {\n  border: 1px dashed #26418b;\n  padding: 5%;\n  color: #26418b;\n  font-size: 20px !important;\n  font-weight: 300;\n}\n.status-despatched {\n  border: 1px dashed #ffa500;\n  padding: 5%;\n  color: #ffa500;\n  font-size: 20px !important;\n  font-weight: 300;\n}\n.status-delivered {\n  border: 1px dashed #00aa8f;\n  padding: 5%;\n  color: #00aa8f;\n  font-size: 20px !important;\n  font-weight: 300;\n}\n.small-hr {\n  width: 50%;\n}\n"

/***/ }),

/***/ "./src/app/components/consignment-detail/consignment-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/consignment-detail/consignment-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"wow fadeIn padding-35px-tb page-title-small top-space\" style=\"visibility: visible; animation-name: fadeIn;\">\n  <!-- Consignment Details Container -->\n  <div class=\"container\">\n    <!-- Loader -->\n    <div *ngIf=\"loading\">\n      <div class=\"row margin-bottom-40\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <h6 class=\"text-center\">\n            <img class=\"loader\" src=\"assets/images/loader.gif\">\n          </h6>\n        </div>\n\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <h6 class=\"text-theme-green text-center alt-font font-weight-400 cursor-pointer\">\n            Loading... Please wait ...\n          </h6>\n        </div>\n      </div>\n    </div>\n    <!-- Loader -->\n\n    <!-- Details -->\n    <div *ngIf=\"!loading && consignmentDetails\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 wow fadeInUp last-paragraph-no-margin\">\n          <div class=\"feature-box-5 position-relative\">\n            <!-- Name & Status -->\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                <a class=\"text-theme-green font-weight-400\" href=\"javascript:;\" (click)=\"goBack()\">\n                  <i class=\"position-relative ti-arrow-left font-weight-400 icon-extra-medium\"></i>\n                </a>\n              </div>\n\n              <div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-10\">\n                <h5 class=\"text-theme-green alt-font font-weight-400 cursor-pointer text-left\"\n                  [innerHTML]=\"consignmentDetails.name\"></h5>\n              </div>\n\n              <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\n                <a href=\"javascript:;\">\n                  <p class=\"capitalize status-{{ consignmentDetails.status_c }} text-center\"\n                    [innerHTML]=\"consignmentDetails.status_c\"></p>\n                </a>\n              </div>\n            </div>\n\n            <div class=\"row margin-top-20 hidden-lg hidden-md\"></div>\n\n            <div class=\"row margin-bottom-40 border-bottom-dashed-grey\"></div>\n            <!-- Name & Status -->\n\n            <!-- Product Name | Ph Grade | Quantity -->\n            <div class=\"row\">\n              <!-- Name -->\n              <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <p class=\"font-17 text-black font-weight-300 text-left\">\n                  <span class=\"text-grey font-15\">Product:</span><br>\n                  <span class=\"font-20\">{{ consignmentDetails.product.name }}</span>\n                </p>\n              </div>\n              <!-- Name -->\n\n              <!-- Ph Grade -->\n              <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <p class=\"font-17 text-black font-weight-300 text-left\">\n                  <span class=\"text-grey font-15\">Grade:</span><br>\n                  <span class=\"font-20\">{{ consignmentDetails.product.grade_c }}</span>\n                </p>\n              </div>\n              <!-- Ph Grade -->\n\n              <!-- Quantity -->\n              <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <p class=\"font-17 text-black font-weight-300 text-left\">\n                  <span class=\"text-grey font-15\">Quantity:</span><br>\n                  <span class=\"font-20\">{{ consignmentDetails.quantity_c +\" \"+ consignmentDetails.qty_unit_c }}</span>\n                </p>\n              </div>\n              <!-- Quantity -->\n            </div>\n            <hr class=\"small-hr pull-left margin-10px-bottom\">\n            <!-- Product Name | Ph Grade | Quantity -->\n\n            <!-- Consignment No -->\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <p class=\"font-17 text-black font-weight-300 text-left\">\n                  <span class=\"text-grey font-15\">Consignment No:</span><br>\n                  <span class=\"font-20\">{{ consignmentDetails.consignment_number_c }}</span>\n                </p>\n              </div>\n            </div>\n            <hr class=\"small-hr pull-left margin-10px-bottom\">\n            <!-- Consignment No -->\n\n            <!-- Dates -->\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left\">\n                <div class=\"row\">\n                  <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <p class=\"font-17 text-black font-weight-300 font-12\">\n                      <span class=\"text-grey font-15\">Created :</span><br>\n                      <span class=\"font-20\">{{ consignmentDetails.date_entered | date : \"mediumDate\" }}</span>\n                    </p>\n                  </div>\n                  <div class=\"row margin-bottom-20 hidden-lg hidden-md\"></div>\n\n                  <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <p class=\"font-17 text-black font-weight-300 font-12\">\n                      <span class=\"text-grey font-15\">Despatch :</span><br>\n                      <span class=\"font-20\">{{ consignmentDetails.despatch_date_c | date : \"mediumDate\" }}</span>\n                      <span class=\"font-20\" *ngIf=\"consignmentDetails.despatch_date_c == ''\"> - </span>\n                    </p>\n                  </div>\n                  <div class=\"row margin-bottom-20 hidden-lg hidden-md\"></div>\n\n                  <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <p class=\"font-17 text-black font-weight-300 font-12\">\n                      <span class=\"text-grey font-15\">Delivery :</span><br>\n                      <span class=\"font-20\">{{ consignmentDetails.delivery_date_c | date : \"mediumDate\" }}</span>\n                      <span class=\"font-20\" *ngIf=\"consignmentDetails.delivery_date_c == ''\"> - </span>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"small-hr pull-left margin-10px-bottom\">\n            <!-- Dates -->\n\n            <!-- Address -->\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left\">\n                <p class=\"font-17 text-left font-weight-300 text-black\">\n                  <span class=\"text-grey font-15\">Delivery Address :</span><br>\n                  <span class=\"font-20\">\n                    {{ consignmentDetails.delivery_address_street_c }}, {{ consignmentDetails.delivery_address_city_c }} - {{ consignmentDetails.delivery_address_postalcode_c }}\n                  </span>\n                </p>\n              </div>\n            </div>\n            <hr class=\"small-hr pull-left margin-10px-bottom\">\n            <!-- Address -->\n\n            <!-- COAs -->\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left\">\n                <p class=\"font-17 text-left font-weight-300 text-black\">\n                  <span class=\"text-grey font-15\">Attached COAs :</span>\n                </p>\n\n                <div *ngIf=\"consignmentDetails.coas.length > 0\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-6 col-xs-6 text-center\" *ngFor=\"let coa of consignmentDetails.coas\">\n                    <a href=\"javascript:;\" (click)=\"downloadAttachment(coa.coa_url_c)\">\n                      <i class=\"position-relative icon-download icon-extra-medium\"></i><br>\n                      <span>{{ coa.name }}</span>\n                    </a>\n                  </div>\n                </div>\n\n                <div *ngIf=\"consignmentDetails.coas.length == 0\">\n                  <span class=\"font-20 font-weight-300\">No COAs Attached</span>\n                </div>\n              </div>\n            </div>\n            <hr class=\"small-hr pull-left margin-10px-bottom\">\n            <!-- COAs -->\n\n            <!-- Additional Documents -->\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left\">\n                <p class=\"font-17 text-left font-weight-300 text-black\">\n                  <span class=\"text-grey font-15\">Additional Documents :</span>\n                </p>\n\n                <div *ngIf=\"consignmentDetails.documents.length > 0\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-6 col-xs-6 text-center\" *ngFor=\"let document of consignmentDetails.documents\">\n                    <a href=\"javascript:;\" (click)=\"downloadAttachment(document.doc_url_c)\">\n                      <i class=\"position-relative icon-download icon-extra-medium\"></i><br>\n                      <span>{{ document.name }}</span>\n                    </a>\n                  </div>\n                </div>\n\n                <div *ngIf=\"consignmentDetails.documents.length == 0\">\n                  <span class=\"font-20 font-weight-300\">No Documents Here</span>\n                </div>\n              </div>\n            </div>\n            <hr class=\"small-hr pull-left margin-10px-bottom\">\n            <!-- Additional Documents -->\n\n            <!-- Description -->\n            <div class=\"row\" *ngIf=\"consignmentDetails.description != ''\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <p class=\"font-17 font-weight-300 text-black justify\">\n                  <span class=\"text-grey font-15\">Notes / Remarks :</span><br>\n                  <span class=\"font-18\">{{ consignmentDetails.description }}</span>\n                </p>\n              </div>\n            </div>\n            <!-- Description -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Details -->\n  </div>\n</section>\n<!-- Consignment Details -->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/consignment-detail/consignment-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/consignment-detail/consignment-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsignmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentDetailComponent", function() { return ConsignmentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var _providers_consignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/consignment.service */ "./src/app/providers/consignment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */
/**
 * Ext Libs
 */



/**
 * Services
 */

var ConsignmentDetailComponent = /** @class */ (function () {
    /**
     * Initialize the class
     */
    function ConsignmentDetailComponent(router, route, consignmentService, localStorage, activatedRoute) {
        this.router = router;
        this.route = route;
        this.consignmentService = consignmentService;
        this.localStorage = localStorage;
        this.activatedRoute = activatedRoute;
    }
    /**
     * On Init Lifecycle Hook
     */
    ConsignmentDetailComponent.prototype.ngOnInit = function () {
        // Check current ongoing session
        this.checkSession();
        // Get the Id of the Customer from the URL
        // this.activatedRoute.params.subscribe((params: Params) => {
        // this.referrer = params['referrer'];
        // this.file_name = params['file_name'];
        // console.log(this.referrer);
        // console.log(this.file_name);
        // if (this.referrer !== undefined && this.file_name !== undefined) {
        //   console.log("asfasdfasfdsfsad",this.referrer, this.file_name)
        //   const pdf_url = `https://cdn.chemfields.com/downloads/${this.file_name}.pdf`;
        //   console.log("pdf_url", pdf_url )
        //   window.open(pdf_url, '_blank');
        // this.downloadAttachment(pdf_url)
        // }
        // });
    };
    /**
     * Get Current Session
     */
    ConsignmentDetailComponent.prototype.checkSession = function () {
        var customer = this.localStorage.get('customer-session');
        // Check If Customer ID exists
        if (customer && customer.id) {
            this.sessionUser = customer;
            // Get Consginments Listing
            var id = this.route.snapshot.paramMap.get('id');
            this.getConsignmentDetails(id);
        }
        // Check If Customer ID does not exist
        if (!customer) {
            // If so, redirect to login
            this.router.navigate(['/login']);
        }
    };
    /**
     * Get Consignments Detail Data using Consignment ID
     */
    ConsignmentDetailComponent.prototype.getConsignmentDetails = function (id) {
        var _this = this;
        this.loading = true;
        var params = {
            'consignment_id': id
        };
        this.consignmentService.details(params).subscribe(function (data) {
            _this.handleConsignmentResponseSucceess(data);
        }, function (err) {
            _this.handleConsignmentResponseError(err);
        });
    };
    /**
     * Handle Consignments Succeess Response
     */
    ConsignmentDetailComponent.prototype.handleConsignmentResponseSucceess = function (response) {
        this.loading = false;
        if (response.status == 'SUCCESS') {
            this.consignmentDetails = response.consignment;
            this.fetchError = false;
        }
    };
    /**
     * Handle Consignments Error Response
     */
    ConsignmentDetailComponent.prototype.handleConsignmentResponseError = function (err) {
        this.loading = false;
        var message = '';
        this.fetchError = true;
        // Bad Data or No data to the server
        if (err.status == 400) {
            message = 'Bad data passed!';
        }
        // Access Denies
        if (err.status == 403) {
            message = 'Access Denied!';
        }
        // Username or Password does not match
        if (err.status == 409) {
            message = 'Username or Password does not match';
        }
        // Error from Server
        if (err.status == 500) {
            message = 'Oops, something went wrong. Please try again.';
        }
        // No Network Error
        if (err.status == -1) {
            message = 'No Internet Connection. Please try to connect to a network and try again.';
        }
        this.errorMessage = message;
    };
    /**
     * Download COA
     */
    ConsignmentDetailComponent.prototype.downloadAttachment = function (downloadURL) {
        window.open(downloadURL, '_blank');
    };
    /**
     * Go Back
     */
    ConsignmentDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/consignments-list']);
    };
    ConsignmentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignment-detail',
            template: __webpack_require__(/*! ./consignment-detail.component.html */ "./src/app/components/consignment-detail/consignment-detail.component.html"),
            styles: [__webpack_require__(/*! ./consignment-detail.component.css */ "./src/app/components/consignment-detail/consignment-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _providers_consignment_service__WEBPACK_IMPORTED_MODULE_3__["ConsignmentService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ConsignmentDetailComponent);
    return ConsignmentDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/consignment-detail/consignment-detail.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/consignment-detail/consignment-detail.module.ts ***!
  \****************************************************************************/
/*! exports provided: ConsignmentDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentDetailModule", function() { return ConsignmentDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consignment_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consignment-detail.routing.module */ "./src/app/components/consignment-detail/consignment-detail.routing.module.ts");
/* harmony import */ var _consignment_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consignment-detail.component */ "./src/app/components/consignment-detail/consignment-detail.component.ts");
/* harmony import */ var _shared_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/header.module */ "./src/app/shared/header/header.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */
/**
 * Libraries
 */


/**
 * Consginment details
 */


/**
 * External Modules
 */


var ConsignmentDetailModule = /** @class */ (function () {
    function ConsignmentDetailModule() {
    }
    ConsignmentDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                _consignment_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsignmentDetailRoutingModule"],
            ],
            declarations: [
                _consignment_detail_component__WEBPACK_IMPORTED_MODULE_3__["ConsignmentDetailComponent"],
            ]
        })
    ], ConsignmentDetailModule);
    return ConsignmentDetailModule;
}());



/***/ }),

/***/ "./src/app/components/consignment-detail/consignment-detail.routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/consignment-detail/consignment-detail.routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ConsignmentDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentDetailRoutingModule", function() { return ConsignmentDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _consignments_consignments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consignments/consignments.component */ "./src/app/components/consignments/consignments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */




var routes = [
    { path: 'login/:referrer/:file_name', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'consignments-list/:referrer/:file_name', component: _consignments_consignments_component__WEBPACK_IMPORTED_MODULE_3__["ConsignmentsComponent"] }
];
var ConsignmentDetailRoutingModule = /** @class */ (function () {
    function ConsignmentDetailRoutingModule() {
    }
    ConsignmentDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsignmentDetailRoutingModule);
    return ConsignmentDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/consignments/consignments-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/consignments/consignments-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ConsignmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentsRoutingModule", function() { return ConsignmentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consignment_detail_consignment_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consignment-detail/consignment-detail.component */ "./src/app/components/consignment-detail/consignment-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'consignment-detail', component: _consignment_detail_consignment_detail_component__WEBPACK_IMPORTED_MODULE_2__["ConsignmentDetailComponent"] },
    { path: 'login/:referrer/:file_name', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var ConsignmentsRoutingModule = /** @class */ (function () {
    function ConsignmentsRoutingModule() {
    }
    ConsignmentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsignmentsRoutingModule);
    return ConsignmentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/consignments/consignments.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/consignments/consignments.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Consignment Vitale data\n */\n.consignment-name { font-size: 35px; line-height: 55px; }\n/**\n * Statuses\n */\n.status-pending {\n  border: 1px dashed #26418b;\n  padding: 2%;\n  color: #26418b;\n  font-size: 11px !important;\n}\n.status-despatched {\n  border: 1px dashed #ffa500;\n  padding: 2%;\n  color: #ffa500;\n  font-size: 11px !important;\n}\n.status-delivered {\n  border: 1px dashed #00aa8f;\n  padding: 2%;\n  color: #00aa8f;\n  font-size: 11px !important;\n}\n/**\n * Buttons\n */\n.view-more-btn:hover { color: #26418b !important;  }\n"

/***/ }),

/***/ "./src/app/components/consignments/consignments.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/consignments/consignments.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- Consignments Listing -->\n<div class=\"container margin-top-100 margin-bottom-100\">\n  <!-- Loader -->\n  <div *ngIf=\"loading\">\n    <div class=\"row margin-bottom-40\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <h6 class=\"text-center\">\n          <img class=\"loader\" src=\"assets/images/loader.gif\">\n        </h6>\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <h6 class=\"text-theme-green text-center alt-font font-weight-400 cursor-pointer\">\n          Loading... Please wait ...\n        </h6>\n      </div>\n    </div>\n  </div>\n  <!-- Loader -->\n\n  <!-- Listing -->\n  <div *ngIf=\"!loading && consignments\">\n    <div class=\"row margin\" *ngFor=\"let consignment of consignments; index as i\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 wow fadeInUp last-paragraph-no-margin\">\n        <div class=\"feature-box-5 position-relative\">\n          <div class=\"row margin-bottom-20 margin-top-20\">\n            <!-- No & Status -->\n            <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\n              <div class=\"row\">\n                <div class=\"col-12 text-center\">\n                  <h2 class=\"text-light-gray alt-font letter-spacing-minus-3 no-margin-bottom sm-margin-10px-bottom cursor-pointer font-30\"\n                    (click)=\"goToDetails(consignment.id)\">\n                    # {{ i + 1 }}\n                  </h2>\n                </div>\n              </div>\n\n              <div class=\"row margin-bottom-20\">\n                <div class=\"col-12 text-center\">\n                  <p class=\"font-13 text-light-grey margin-10px-bottom cursor-pointer\" [innerHTML]=\"consignment.consignment_number_c\"\n                    (click)=\"goToDetails(consignment.id)\" style=\"margin-bottom: 10px;\"></p>\n                </div>\n\n                <div class=\"col-12 text-center\">\n                  <a class=\"capitalize font-14 status-{{ consignment.status_c }}\" href=\"javascript:;\"\n                    [innerHTML]=\"consignment.status_c\"></a>\n                </div>\n              </div>\n            </div>\n            <!-- No & Status -->\n\n            <!-- Name & Description -->\n            <div class=\"col-lg-8 col-md-8 col-sm-12\">\n              <div class=\"feature-content\">\n                <a href=\"{{ websiteURL }}consignments/consignment-detail/{{ consignment.id }}\"\n                  class=\"consignment-name text-theme-green margin-10px-bottom alt-font font-30 font-weight-400 cursor-pointer\"\n                  [innerHTML]=\"consignment.name\"></a>\n                <p class=\"hidden-xs\" [innerHTML]=\"consignment.description | slice : 0 : 200\"></p>\n              </div>\n            </div>\n            <!-- Name & Description -->\n\n            <!-- Date & Options -->\n            <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\n              <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-6 text-center\">\n                <span class=\"text-dark-gray font-weight-300 font-11\" [innerHTML]=\"consignment.date_entered | date : 'mediumDate'\"></span>\n              </div>\n\n              <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-6 text-center\">\n                <a class=\"text-theme-green font-weight-300 font-16 view-more-btn\" href=\"javascript:;\"\n                  (click)=\"goToDetails(consignment.id)\">\n                  View More\n                </a>\n              </div>\n            </div>\n            <!-- Date & Options -->\n          </div>\n\n          <div class=\"row border-bottom-dashed-grey width-90\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Listing -->\n\n  <!-- Fetch Errors -->\n  <div *ngIf=\"!(loading) && ((fetchError == 404) || (fetchError == 400) || (fetchError == 403) || (fetchError == 409) || (fetchError == 500) || (fetchError == -1))\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <!-- Message -->\n        <h6 class=\"text-theme-green margin-10px-bottom alt-font font-weight-400 cursor-pointer\">\n          {{ errorMessage }}\n        </h6>\n        <p>{{ errorSubMessage }}</p>\n        <!-- Message -->\n      </div>\n    </div>\n  </div>\n  <!-- Fetch Errors -->\n</div>\n<!-- Consignments Listing -->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/consignments/consignments.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/consignments/consignments.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConsignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentsComponent", function() { return ConsignmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
/* harmony import */ var _providers_consignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/consignment.service */ "./src/app/providers/consignment.service.ts");
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Ext Libs
 */




/**
 * Services
 */

var ConsignmentsComponent = /** @class */ (function () {
    /**
     * Initialize the class
     */
    function ConsignmentsComponent(router, consignmentService, localStorage, baseProvider, activatedRoute) {
        this.router = router;
        this.consignmentService = consignmentService;
        this.localStorage = localStorage;
        this.baseProvider = baseProvider;
        this.activatedRoute = activatedRoute;
        // Base
        this.websiteURL = this.baseProvider.websiteURL;
        this.baseHREF = this.baseProvider.baseHREF;
        // Defaults
        this.consignments = [];
        // Loader
        this.loading = false;
    }
    /**
     * On Init Lifecycle Hook
     */
    ConsignmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check current ongoing session
        this.checkSession();
        // Get the Id of the Customer from the URL
        this.activatedRoute.params.subscribe(function (params) {
            _this.referrer = params['referrer'];
            _this.file_name = params['file_name'];
            console.log(_this.referrer);
            console.log(_this.file_name);
            if (_this.referrer !== undefined && _this.file_name !== undefined) {
                console.log('Download starting');
                var pdf_url = "https://cdn.chemfields.com/downloads/" + _this.file_name + ".pdf";
                console.log(pdf_url);
                window.open(pdf_url, '_blank');
            }
        });
    };
    /**
     * Get Current Session
     */
    ConsignmentsComponent.prototype.checkSession = function () {
        var customer = this.localStorage.get('customer-session');
        // Check If Customer ID exists
        if (customer && customer.id) {
            this.sessionUser = customer;
            // Get Consginments Listing
            this.getConsignmentsListing();
        }
        // Check If Customer ID does not exist
        if (!customer) {
            // If so, redirect to login
            this.router.navigate(['/login']);
        }
    };
    /**
     * Get Consignments Listing
     */
    ConsignmentsComponent.prototype.getConsignmentsListing = function () {
        var _this = this;
        this.loading = true;
        var params = {
            'related_customer_id_c': this.sessionUser.id
        };
        this.consignmentService.listing(params).subscribe(function (data) {
            _this.handleConsignmentResponseSucceess(data);
        }, function (err) {
            _this.handleConsignmentResponseError(err);
        });
    };
    /**
     * Handle Consignments Succeess Response
     */
    ConsignmentsComponent.prototype.handleConsignmentResponseSucceess = function (response) {
        this.loading = false;
        if (response.status == 'SUCCESS') {
            this.consignments = response.consignments;
            this.fetchError = 200;
        }
    };
    /**
     * Handle Consignments Error Response
     */
    ConsignmentsComponent.prototype.handleConsignmentResponseError = function (err) {
        this.loading = false;
        var message = '';
        var submessage = '';
        this.fetchError = err.status;
        // Bad Data or No data to the server
        if (err.status == 400) {
            message = 'Access Denied!';
            submessage = 'Bad data passed!';
        }
        // Bad Data or No data to the server
        if (err.status == 404) {
            message = 'No consignments for you yet';
            submessage = 'Please contact Chemfield Admin in case of any issues';
        }
        // Access Denies
        if (err.status == 403) {
            message = 'Access Denied!';
            submessage = 'Please check the data you have entered';
        }
        // Username or Password does not match
        if (err.status == 409) {
            message = 'Login Failure!';
            submessage = 'Username or Password does not match';
        }
        // Error from Server
        if (err.status == 500) {
            message = 'Something Went Wrong!';
            submessage = 'There seems to be something wrong at the moment. Please try again later.';
        }
        // No Network Error
        if (err.status == -1) {
            message = 'Network Error!';
            submessage = 'No Internet Connection. Please try to connect to a network and try again.';
        }
        this.errorMessage = message;
    };
    /**
     * Go to Details Page
     */
    ConsignmentsComponent.prototype.goToDetails = function (id) {
        this.router.navigate(['/consignment-detail', id]);
    };
    ConsignmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignments',
            template: __webpack_require__(/*! ./consignments.component.html */ "./src/app/components/consignments/consignments.component.html"),
            styles: [__webpack_require__(/*! ./consignments.component.css */ "./src/app/components/consignments/consignments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_consignment_service__WEBPACK_IMPORTED_MODULE_4__["ConsignmentService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__["BaseSettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ConsignmentsComponent);
    return ConsignmentsComponent;
}());



/***/ }),

/***/ "./src/app/components/consignments/consignments.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/consignments/consignments.module.ts ***!
  \****************************************************************/
/*! exports provided: ConsignmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentsModule", function() { return ConsignmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consignments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consignments-routing.module */ "./src/app/components/consignments/consignments-routing.module.ts");
/* harmony import */ var _consignments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consignments.component */ "./src/app/components/consignments/consignments.component.ts");
/* harmony import */ var _shared_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/header.module */ "./src/app/shared/header/header.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */
/**
 * Libraries
 */


/**
 * Consignments
 */


/**
 * External Modules
 */


/**
 * Providers
 */

var ConsignmentsModule = /** @class */ (function () {
    function ConsignmentsModule() {
    }
    ConsignmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                _consignments_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsignmentsRoutingModule"],
            ],
            declarations: [
                _consignments_component__WEBPACK_IMPORTED_MODULE_3__["ConsignmentsComponent"],
            ],
            providers: [
                _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_6__["BaseSettingsService"]
            ]
        })
    ], ConsignmentsModule);
    return ConsignmentsModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */

// import * from 'jquery';
var HomeComponent = /** @class */ (function () {
    /**
     * Intitialize the class
     */
    function HomeComponent() {
    }
    /**
     * On Init Lifecycle Hook
     */
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Form Fields\n */\n.login-field {\n  margin: 0 0px 5px 0 !important;\n}\n.btn-login {\n  border: 1px solid #ccc;\n  margin-top: 30px;\n}\n.btn-login:disabled {\n  background: #ccc !important;\n}\n.error {\n  font-size: 13px !important;\n  margin-left: 3px !important;\n  color: #da2226;\n}\n.success-message {\n  clear: both;\n  margin: 0 15px 15px;\n  text-align: center;\n  color: #1a940a;\n  padding: 2px 0;\n  font-size: 14px;\n}\n.failure-message {\n  clear: both;\n  margin: 0 15px 15px;\n  text-align: center;\n  color: #da2226;\n  padding: 2px 0;\n  font-size: 14px;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login Form -->\n<section class=\"wow fadeIn big-section\" id=\"section-down\">\n  <div class=\"container\">\n    <div class=\"row equalize sm-equalize-auto\">\n      <div class=\"col-md-6 col-md-offset-3 col-sm-12 col-xs-12 sm-margin-30px-bottom wow fadeInLeft\">\n        <div class=\"padding-fifteen-all bg-light-gray border-radius-6 md-padding-seven-all xs-padding-30px-all height-100\">\n          <div class=\"center-buttons text-center margin-bottom-25p\">\n            <img src=\"assets/images/logo.png\" class=\"logo-dark default\" alt=\"Pofo\">\n          </div>\n\n          <form class=\"border-bottom-thick\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"no-margin-lr success-message\">{{ responseMessage }}</div>\n            <div class=\"no-margin-lr failure-message\">{{ errorMessage }}</div>\n\n            <!-- Username -->\n            <input class=\"login-field\" type=\"text\" formControlName=\"username\" placeholder=\"Enter Your Username\"\n              [disabled]=\"loggingin\">\n            <span *ngIf=\"!loginForm.controls.username.valid && (loginForm.controls.username.dirty || loginForm.controls.username.touched)\">\n              <p class=\"error\">Please enter a valid Username.</p>\n            </span>\n            <!-- Username -->\n\n            <!-- Password -->\n            <input class=\"login-field\" type=\"password\" formControlName=\"password\" placeholder=\"Enter Your Password\"\n              [disabled]=\"loggingin\">\n            <span *ngIf=\"!loginForm.controls.password.valid && (loginForm.controls.password.dirty || loginForm.controls.password.touched)\">\n              <p class=\"error\">Please enter a valid Password.</p>\n            </span>\n            <!-- Password -->\n\n            <div class=\"center-buttons text-center\">\n              <button type=\"submit\" class=\"btn btn-large border-radius-4 btn-login\"\n                [disabled]=\"!loginForm.valid\">\n                {{ loginButtonText }}\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"col-md-3 col-sm-3 col-xs-3 sm-margin-30px-bottom wow fadeInLeft\"></div>\n    </div>\n  </div>\n</section>\n<!-- Login Form -->\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Ext Libs
 */




/**
 * Services
 */


var LoginComponent = /** @class */ (function () {
    /**
     * Initialize the class
     */
    function LoginComponent(router, formBuilder, userService, localStorage, baseSettings, activatedRoute) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.localStorage = localStorage;
        this.baseSettings = baseSettings;
        this.activatedRoute = activatedRoute;
        this.loggingin = false;
        // Login Button
        this.loginButtonText = 'Login';
        // Setting up Login Form Group
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    }
    /**
     * On Init Lifecycle Hook
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the Id of the Customer from the URL
        this.activatedRoute.params.subscribe(function (params) {
            _this.referrer = params['referrer'];
            _this.file_name = params['file_name'];
            _this.checkSession();
        });
    };
    /**
     * Check if user already logged in
     */
    LoginComponent.prototype.checkSession = function () {
        var customer = this.localStorage.get(this.baseSettings.customerSessionKey);
        // Check If Customer ID exists
        if (customer && customer.id) {
            // If so, redirect to Consignments Listing
            if (this.referrer && this.file_name) {
                this.router.navigate(['/consignments-list', this.referrer, this.file_name]);
            }
            else {
                this.router.navigate(['/consignments-list']);
            }
        }
    };
    /**
     * Submit Login Form
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        // Prerequisites
        this.loggingin = true;
        this.errorMessage = '';
        this.loginButtonText = 'Logging In...';
        // Set Params
        var params = {
            'username_c': this.loginForm.controls.username.value,
            'password_c': this.loginForm.controls.password.value
        };
        // Ask Service to request Login
        this.userService.login(params).subscribe(function (data) {
            _this.handleLoginResponseSuccess(data);
        }, function (err) {
            _this.handleLoginResponseError(err);
        });
    };
    /**
     * Handle Login Success Response
     */
    LoginComponent.prototype.handleLoginResponseSuccess = function (response) {
        this.loggingin = false;
        this.loginButtonText = 'Login';
        if (response.status == 'SUCCESS') {
            var session = {
                'id': response.customer.id,
                'name': response.customer.name,
                'email_c': response.customer.email_c,
                'address_c': response.customer.address_c,
                'contact_number_c': response.customer.contact_number_c,
                'postal_code_c': response.customer.postal_code_c,
                'username_c': response.customer.username_c,
            };
            this.localStorage.set(this.baseSettings.customerSessionKey, session);
            if (this.referrer && this.file_name) {
                this.router.navigate(['/consignments-list', this.referrer, this.file_name]);
            }
            else {
                this.router.navigate(['/consignments-list']);
            }
        }
    };
    /**
     * Handle Login Error Response
     */
    LoginComponent.prototype.handleLoginResponseError = function (err) {
        var message = '';
        this.loggingin = false;
        this.loginButtonText = 'Login';
        // Bad Data or No data to the server
        if (err.status === 400) {
            message = 'Bad data passed!';
        }
        // Access Denies
        if (err.status === 403) {
            message = 'Access Denied!';
        }
        // Username or Password does not match
        if (err.status === 409) {
            message = 'Username or Password does not match';
        }
        // Error from Server
        if (err.status === 500) {
            message = 'Oops, something went wrong. Please try again.';
        }
        // No Network Error
        if (err.status === -1) {
            message = 'No Internet Connection. Please try to connect to a network and try again.';
        }
        this.errorMessage = message;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-page',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _providers_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_5__["BaseSettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.routing.module */ "./src/app/components/login/login.routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_store__WEBPACK_IMPORTED_MODULE_3__["WebStorageModule"],
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/login/login.routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _consignments_consignments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consignments/consignments.component */ "./src/app/components/consignments/consignments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */




var routes = [
    { path: 'consignments-list/:referrer/:file_name', component: _consignments_consignments_component__WEBPACK_IMPORTED_MODULE_3__["ConsignmentsComponent"] },
    { path: 'login/:referrer/:file_name', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/providers/base-settings.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/base-settings.service.ts ***!
  \****************************************************/
/*! exports provided: BaseSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSettingsService", function() { return BaseSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Author : Aaditya Gandhare
 * Created : 13th Aug, 2018
 */

var BaseSettingsService = /** @class */ (function () {
    /**
     * Initialize this class
     */
    function BaseSettingsService() {
        this.env = {
            "dev": "development",
            "stg": "staging",
            "prod": "production"
        };
        // Set the env to either dev or prod;
        var ENV = this.env.prod;
        /**
         * Configure Environment Settings
         */
        switch (ENV) {
            case "development":
                this.baseAPIsURL = "http://apis.chemfield.flyingpenguins.co/";
                this.websiteURL = "http://localhost:4200/";
                this.baseHREF = "consignments/";
                this.customerSessionKey = "customer-session";
                break;
            case "staging":
                this.baseAPIsURL = "http://apis.chemfield.flyingpenguins.co/";
                this.websiteURL = "http://chemfield.flyingpenguins.co/";
                this.baseHREF = "consignments/";
                this.customerSessionKey = "customer-session";
                break;
            case "production":
                this.baseAPIsURL = "https://apis.chemfields.com/";
                this.websiteURL = "https://chemfields.com/";
                this.baseHREF = "consignments/";
                this.customerSessionKey = "customer-session";
                break;
            default:
                this.baseAPIsURL = "http://apis.chemfield.flyingpenguins.co/";
                this.websiteURL = "http://localhost:4200/";
                this.baseHREF = "consignments/";
                this.customerSessionKey = "customer-session";
                break;
        }
    }
    BaseSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BaseSettingsService);
    return BaseSettingsService;
}());



/***/ }),

/***/ "./src/app/providers/consignment.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/consignment.service.ts ***!
  \**************************************************/
/*! exports provided: ConsignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentService", function() { return ConsignmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _base_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-settings.service */ "./src/app/providers/base-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */




var ConsignmentService = /** @class */ (function () {
    /**
     * Initialize this class
     */
    function ConsignmentService(baseSettings, http) {
        this.baseSettings = baseSettings;
        this.http = http;
        this.baseURL = baseSettings.baseAPIsURL + 'consignments/';
    }
    /**
     * Get Consignments Listing
     */
    ConsignmentService.prototype.listing = function (params) {
        var url = this.baseURL + 'listing';
        return this.http.post(url, params).map(function (res) { return res; });
    };
    /**
     * Get Consignment Details
     */
    ConsignmentService.prototype.details = function (params) {
        var url = this.baseURL + 'details';
        return this.http.post(url, params).map(function (res) { return res; });
    };
    ConsignmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_base_settings_service__WEBPACK_IMPORTED_MODULE_3__["BaseSettingsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsignmentService);
    return ConsignmentService;
}());



/***/ }),

/***/ "./src/app/providers/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _base_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-settings.service */ "./src/app/providers/base-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */




var UserService = /** @class */ (function () {
    /**
     * Initialize this class
     */
    function UserService(baseSettings, http) {
        this.baseSettings = baseSettings;
        this.http = http;
        this.baseURL = baseSettings.baseAPIsURL + 'customers/';
    }
    /**
     * Login
     */
    UserService.prototype.login = function (params) {
        var url = this.baseURL + 'login';
        return this.http.post(url, params).map(function (res) { return res; });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_base_settings_service__WEBPACK_IMPORTED_MODULE_3__["BaseSettingsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Footer -->\n<footer class=\"footer-standard-dark bg-extra-dark-gray footer-title\">\n  <div class=\"footer-widget-area padding-five-tb xs-padding-30px-tb\">\n    <div class=\"container\">\n      <div class=\"row equalize xs-equalize-auto\">\n        <div class=\"col-md-3 col-sm-6 col-xs-12 widget border-right border-color-medium-dark-gray sm-no-border-right sm-margin-30px-bottom\" style=\"height: 199px;\">\n          <a href=\"{{ websiteURL }}index\" class=\"margin-20px-bottom display-inline-block\">\n            <img class=\"footer-logo\" src=\"{{ websiteURL }}images/logo-white.png\" alt=\"Chemfield\">\n          </a>\n          <p class=\"text-small width-95 xs-width-100\" style=\"color: #b3aeae; font-size: 13px; line-height: 1.7;\">\n            Chemfield Cellulose is part of a first generation, family-run conglomerate called Field Group (FG).\n          </p>\n          <div class=\"social-icon-style-8 display-inline-block vertical-align-middle\">\n            <ul class=\"small-icon no-margin-bottom\">\n              <li><a class=\"facebook text-white\" href=\"https://www.facebook.com/\" target=\"_blank\"><i class=\"fab fa-facebook-f\" aria-hidden=\"true\"></i></a></li>\n              <li><a class=\"twitter text-white\" href=\"https://twitter.com/\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li>\n              <li><a class=\"google text-white\" href=\"https://plus.google.com\" target=\"_blank\"><i class=\"fab fa-google-plus-g\"></i></a></li>\n              <li><a class=\"instagram text-white\" href=\"https://instagram.com/\" target=\"_blank\"><i class=\"fab fa-instagram no-margin-right\" aria-hidden=\"true\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 col-xs-12 widget border-right border-color-medium-dark-gray padding-45px-left sm-padding-15px-left sm-no-border-right sm-margin-30px-bottom \" style=\"height: 199px;\">\n          <div class=\"widget-title alt-font text-small text-medium-gray text-uppercase margin-10px-bottom font-weight-600\">Quick Links</div>\n          <ul class=\"list-unstyled quick-links\">\n            <li><a href=\"{{ websiteURL }}about-us\">About</a></li>\n            <li><a href=\"{{ websiteURL }}products\">Products</a></li>\n            <li><a href=\"{{ websiteURL }}facility\">Facility</a></li>\n            <li><a href=\"{{ websiteURL }}quality\">Quality</a></li>\n            <li><a href=\"{{ websiteURL }}contact-us\">Contact</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-3 col-sm-6 col-xs-12 widget border-right border-color-medium-dark-gray padding-45px-left sm-padding-15px-left sm-clear-both sm-no-border-right  xs-margin-30px-bottom \" style=\"height: 199px;\">\n          <div class=\"widget-title alt-font text-small text-medium-gray text-uppercase margin-10px-bottom font-weight-600\">Contact Info</div>\n          <p class=\"text-small display-block margin-15px-bottom width-80 xs-width-100 xs-center-col\" style=\"color: #b3aeae;\n            font-size: 14px; line-height: 1.6;\">2nd Floor, 'Bhaskar',<br> Near MLA Hostel, Civil Lines, Nagpur - 44 00 01</p>\n          <div class=\"text-small\" style=\"color: #b3aeae; font-size: 14px; line-height: 1.6;\">\n            Email:\n            <a href=\"mailto:info@chemfields.com\" style=\"color:#b3aeae\">info@chemfields.com</a>\n          </div>\n          <div class=\"text-small\" style=\"color: #b3aeae; font-size: 14px; line-height: 1.6;\">\n            Phone: +91 712 255 5176\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 col-xs-12 widget padding-45px-left sm-padding-15px-left \" style=\"height: 199px;\">\n          <div class=\"widget-title alt-font text-small text-medium-gray text-uppercase margin-20px-bottom font-weight-600\">View Direction</div>\n          <div class=\"instagram-follow-api\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1010127103136!2d79.06937851482928!3d21.148377989060094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f3c0000001%3A0x83bdd2a07f2b5f77!2sFieldspares+Sales+%26+Services+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1534225320252\"\n              width=\"100%\" height=\"220\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bg-dark-footer ptb10 text-center xs-padding-30px-tb\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 col-xs-12 text-left text-small xs-text-center\">© 2018 Chemfield Cellulose. All Rights Reserved.</div>\n        <div class=\"col-md-6 col-sm-6 col-xs-12 text-right text-small xs-text-center\">\n          Designed & Developed by\n          <a href=\"https://www.flyingpenguins.in/\" target=\"_blank\" class=\"text-dark-gray\">\n            Flying Penguins\n            <img src=\"{{ websiteURL }}images/fp-white-footer-icon.png\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- Start Footer -->\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */


var FooterComponent = /** @class */ (function () {
    /**
     * Initialize the class
     */
    function FooterComponent(baseProvider) {
        this.baseProvider = baseProvider;
        this.websiteURL = this.baseProvider.websiteURL;
        this.baseHREF = this.baseProvider.baseHREF;
    }
    /**
     * On Init Lifecycle Hook
     */
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_base_settings_service__WEBPACK_IMPORTED_MODULE_1__["BaseSettingsService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ],
            exports: [
                _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ],
            providers: [
                _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__["BaseSettingsService"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!***/\n /** Nav*/\n /**!*/\n /*.nav-user-dropdown {*/\n /*display: inline-block;*/\n /*background-color: #00aa8f !important;*/\n /*border-color: #00aa8f;*/\n /*color: white;*/\n /*padding: 10px 20px;*/\n /*box-shadow: none;*/\n /*margin-top: 13px;*/\n /*}*/\n /*nav.navbar.navbar-default ul.nav>li>a {*/\n /*padding: 26px 0 !important;*/\n /*}*/\n nav.navbar.navbar-default[_ngcontent-c3] ul.nav[_ngcontent-c3] > li[_ngcontent-c3] > a[_ngcontent-c3] {\n  padding: 23px 2px -1px 0 !important;\n  margin: 0px 17px;\n}\n .dropdown-mob-content li a:hover{\n  color: #939393 !important;\n}\n @media (max-width: 991px){\n\n  nav.navbar.navbar-default[_ngcontent-c2] ul.nav[_ngcontent-c2] > li[_ngcontent-c2] > a[_ngcontent-c2] {\n    padding: 9px 15px 8px !important;\n  }\n  nav.navbar.bootsnav ul.nav li.dropdown.simple-dropdown>.dropdown-menu {\n    display: block !important;\n  }\n\n}\n .simple-dropdown .dropdown-menu{\n  border: none !important;\n}\n .simple-dropdown .dropdown-menu>li a:hover {\n  color: gray !important;\n}\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start header -->\r\n<!--<header>-->\r\n  <!--<nav class=\"navbar navbar-default bootsnav bg-transparent navbar-scroll-top header-light\">-->\r\n    <!--<div class=\"container nav-header-container\">-->\r\n      <!--<div class=\"row\">-->\r\n        <!--<div class=\"col-md-2 col-xs-5\">-->\r\n          <!--<a href=\"index.html\" title=\"Chemfield\" class=\"logo\">-->\r\n            <!--<img src=\"{{ websiteURL }}images/logo.png\" class=\"logo-dark default\" alt=\"Chemfield\">-->\r\n            <!--<img src=\"{{ websiteURL }}images/logo-white.png\" alt=\"Chemfield\" class=\"logo-light\">-->\r\n          <!--</a>-->\r\n        <!--</div>-->\r\n\r\n        <!--&lt;!&ndash;======== Login Button for mobile ========&ndash;&gt;-->\r\n        <!--<div class=\"col-xs-5 visible-xs visible-sm\">-->\r\n          <!--<li class=\"login-header mt0 pull-right unset-mb-right\" style=\"display: none\" id=\"login_btn-mobile\">-->\r\n            <!--<a href=\"{{ websiteURL }}consignments/login\" class=\"btn btn-very-small box-shadow-dark login-header-btn\" style=\"background-color: #00aa8f !important;-->\r\n              <!--border-color: #00aa8f; color: white; padding: 7px 19px; font-size: 12px; box-shadow: none; margin-top: 5px; border-radius: 25px;\">-->\r\n              <!--Login-->\r\n              <!--<i class=\"fa fa-user\"></i>-->\r\n            <!--</a>-->\r\n          <!--</li>-->\r\n          <!--<div class=\"dropdown-mob pull-right\" id=\"logout_btn-mobile\">-->\r\n            <!--<span>-->\r\n              <!--<a class=\"active myprofile-padd color-green\">-->\r\n                <!--My Profile-->\r\n                <!--<i class=\"fa fa-user\"></i>-->\r\n              <!--</a>-->\r\n            <!--</span>-->\r\n            <!--<div class=\"dropdown-mob-content\">-->\r\n              <!--<ul>-->\r\n                <!--<li>-->\r\n                  <!--<a href=\"{{ websiteURL }}consignments/consignments-list\">Consignments</a>-->\r\n                <!--</li>-->\r\n                <!--<li>-->\r\n                  <!--<a (click)=\"logout()\" class=\"logout_page-mobile\">Logout</a>-->\r\n                <!--</li>-->\r\n              <!--</ul>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <!--&lt;!&ndash;======== End login button for mobile =====&ndash;&gt;-->\r\n\r\n        <!--&lt;!&ndash;========== Login button for dekstop ============&ndash;&gt;-->\r\n        <!--<div class=\"col-md-10 col-xs-2 width-auto pull-right accordion-menu\">-->\r\n          <!--<button type=\"button\" class=\"navbar-toggle collapsed pull-right\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-toggle-1\">-->\r\n          <!--<span class=\"sr-only\">toggle navigation</span>-->\r\n          <!--<span class=\"icon-bar\"></span>-->\r\n          <!--<span class=\"icon-bar\"></span>-->\r\n          <!--<span class=\"icon-bar\"></span>-->\r\n          <!--</button>-->\r\n          <!--<div class=\"navbar-collapse collapse pull-right\" id=\"navbar-collapse-toggle-1\">-->\r\n            <!--<ul id=\"accordion\" class=\"nav navbar-nav navbar-left no-margin alt-font text-normal\" data-in=\"fadeIn\" data-out=\"fadeOut\">-->\r\n              <!--<li class=\"\">-->\r\n                <!--<a href=\"{{ websiteURL }}index\">Home</a>-->\r\n              <!--</li>-->\r\n              <!--<li class=\"dropdown simple-dropdown\">-->\r\n                <!--<a href=\"{{ websiteURL }}about-us\" id=\"dropdown-about-link\">-->\r\n                  <!--About-->\r\n                  <!--<i class=\"fa fa-angle-down dropdown-toggle hidden-xs\" data-toggle=\"dropdown\" aria-hidden=\"true\" style=\"\"></i>-->\r\n                <!--</a>-->\r\n                <!--<ul id=\"dropdown-about\" class=\"dropdown-menu animated\" style=\"top: 81px !important; display: none;\">-->\r\n                  <!--<li><a href=\"{{ websiteURL }}about-us#about\">About Us</a></li>-->\r\n                  <!--<li><a href=\"{{ websiteURL }}about-us#history-milestones\">History & Milestones</a></li>-->\r\n                  <!--<li><a href=\"{{ websiteURL }}about-us#team\">Team</a></li>-->\r\n                <!--</ul>-->\r\n              <!--</li>-->\r\n              <!--<li>-->\r\n                <!--<a href=\"{{ websiteURL }}products\">Products</a>-->\r\n              <!--</li>-->\r\n              <!--<li>-->\r\n                <!--<a href=\"{{ websiteURL }}facility\">Facility</a>-->\r\n              <!--</li>-->\r\n              <!--<li>-->\r\n                <!--<a href=\"{{ websiteURL }}quality\">Quality</a>-->\r\n              <!--</li>-->\r\n              <!--<li>-->\r\n                <!--<a href=\"{{ websiteURL }}rnd\">R&D</a>-->\r\n              <!--</li>-->\r\n              <!--<li>-->\r\n                <!--<a href=\"{{ websiteURL }}network\">Network</a>-->\r\n              <!--</li>-->\r\n              <!--<li>-->\r\n                <!--<a href=\"{{ websiteURL }}contact-us\">Contact</a>-->\r\n              <!--</li>-->\r\n              <!--<li class=\"login-header mt0 hidden-xs hidden-sm\" style=\"display: none\" id=\"login_btn\">-->\r\n                <!--<a href=\"{{ websiteURL }}consignments/login\" class=\"btn btn-very-small box-shadow-dark login-header-btn\"-->\r\n                  <!--style=\"background-color: #00aa8f !important; border-color: #00aa8f; color: white; padding: 10px 20px; box-shadow: none; margin-top: 5px; border-radius: 25px;\">-->\r\n                  <!--Login-->\r\n                  <!--<i class=\"fa fa-user\"></i>-->\r\n                <!--</a>-->\r\n              <!--</li>-->\r\n              <!--<li class=\"dropdown simple-dropdown mt0 hidden-xs\">-->\r\n                <!--<a id=\"dropdown-profile-link\" class=\"myprofile-padd color-green\">-->\r\n                  <!--My Profile-->\r\n                  <!--<i class=\"fa fa-user\"></i>-->\r\n                <!--</a>-->\r\n                <!--<ul id=\"dropdown-profile\" class=\"dropdown-menu\">-->\r\n                  <!--<li>-->\r\n                    <!--<a href=\"{{ websiteURL }}consignments/consignments-list\">Consignments</a>-->\r\n                  <!--</li>-->\r\n                  <!--<li>-->\r\n                    <!--<a class=\"logout_page\" (click)=\"logout()\">Logout</a>-->\r\n                  <!--</li>-->\r\n                <!--</ul>-->\r\n              <!--</li>-->\r\n            <!--</ul>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <!--&lt;!&ndash;========== End Login button for dekstop ============&ndash;&gt;-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</nav>-->\r\n<!--</header>-->\r\n<!-- End header -->\r\n\r\n<header role=\"header\">\r\n  <nav class=\"navbar navbar-default bootsnav bg-transparent navbar-scroll-top header-light\">\r\n    <div class=\"container nav-header-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-xs-5\">\r\n          <a href=\"{{ websiteURL }}index\" title=\"Pofo\" class=\"logo\">\r\n            <img src=\"{{ websiteURL }}images/logo.png\" class=\"logo-dark default\" alt=\"logo\">\r\n            <img src=\"{{ websiteURL }}images/logo-white.png\" alt=\"logo\" class=\"logo-light\" >\r\n          </a>\r\n        </div>\r\n        <!--======== Login Button for mobile ========-->\r\n        <div class=\"col-xs-5 visible-xs visible-sm\" role=\"button\">\r\n          <li class=\"login-header mt0 pull-right unset-mb-right\" style=\"display: none\" id=\"login_btn-mobile\">\r\n            <a href=\"{{ websiteURL }}consignments/login\"  class=\"btn btn-very-small box-shadow-dark login-header-btn login-bt-h\">Login<i class=\"fa fa-user\"></i></a>\r\n          </li>\r\n          <div class=\"dropdown-mob pull-right\" id=\"logout_btn-mobile\">\r\n            <span> <a class=\"active myprofile-padd color-green\">My Profile <i class=\"fa fa-user\"></i></a></span>\r\n            <div class=\"dropdown-mob-content\">\r\n              <ul>\r\n                <li class=\"\">\r\n                  <a href=\"https://chemfields.com/consignments/consignments-list\">Consignments </a>\r\n                </li>\r\n                <li class=\"\">\r\n                  <a (click)=\"logout()\" class=\"logout_page-mobile\">Logout</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--========End login button for mobile=====-->\r\n        <div class=\"col-md-10 col-xs-2 width-auto pull-right accordion-menu\" role=\"menu\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed pull-right\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-toggle-1\">\r\n            <span class=\"sr-only\">toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <div class=\"navbar-collapse collapse pull-right\" id=\"navbar-collapse-toggle-1\">\r\n            <ul id=\"accordion\" class=\"nav navbar-nav navbar-left no-margin alt-font text-normal\" data-in=\"fadeIn\" data-out=\"fadeOut\">\r\n              <li class=\"\">\r\n                <a href=\"index\">Home</a>\r\n              </li>\r\n              <li class=\"dropdown simple-dropdown\">\r\n                <a href=\"{{ websiteURL }}about-us\">About <i class=\"fa fa-angle-down dropdown-toggle hidden-xs\" data-toggle=\"dropdown\" aria-hidden=\"true\" style=\"\"></i></a>\r\n                <ul class=\"dropdown-menu animated\">\r\n                  <li><a href=\"{{ websiteURL }}about-us#about\">About Us</a></li>\r\n                  <li><a href=\"{{ websiteURL }}about-us#infrastructure\">Infrastructure</a></li>\r\n                  <li><a href=\"{{ websiteURL }}about-us#history-milestones\">History & Milestones</a></li>\r\n                  <li><a href=\"{{ websiteURL }}about-us#team\">Team</a></li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"dropdown simple-dropdown\">\r\n                <a href=\"products\">Products <i class=\"fa fa-angle-down dropdown-toggle hidden-xs\" data-toggle=\"dropdown\" aria-hidden=\"true\" style=\"\"></i></a>\r\n                <ul class=\"dropdown-menu animated\">\r\n                  <li><a href=\"{{ websiteURL }}products#overview\">Overview</a></li>\r\n                  <li><a href=\"{{ websiteURL }}product/chemicel\">Chemicel®</a></li>\r\n                  <li><a href=\"{{ websiteURL }}product/primecel\">Primecel®</a></li>\r\n                  <li><a href=\"{{ websiteURL }}product/regulatory-services\">Regulatory Services</a></li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"\">\r\n                <a href=\"{{ websiteURL }}facility\">Facility</a>\r\n              </li>\r\n              <li class=\"\">\r\n                <a href=\"{{ websiteURL }}quality\">Quality</a>\r\n              </li>\r\n              <li class=\"\">\r\n                <a href=\"{{ websiteURL }}rnd\">R&D</a>\r\n              </li>\r\n              <li class=\"\">\r\n                <a href=\"{{ websiteURL }}network\">Network</a>\r\n              </li>\r\n              <li class=\"\">\r\n                <a href=\"{{ websiteURL }}contact-us\">Contact</a>\r\n              </li>\r\n              <!--==========Login button for dekstop============-->\r\n              <li class=\"login-header mt0 hidden-xs hidden-sm\" style=\"display: none\" id=\"login_btn\" role=\"login button\">\r\n                <a href=\"{{ websiteURL }}consignments/login\"  class=\"btn btn-very-small box-shadow-dark login-header-btn login-bt-h\">Login<i class=\"fa fa-user\"></i></a>\r\n              </li>\r\n              <li class=\"dropdown simple-dropdown login-header mt0 hidden-xs\" id=\"logout_btn\">\r\n                <a class=\"active myprofile-padd color-green\">My Profile <i class=\"fa fa-user\"></i></a>\r\n                <ul class=\"dropdown-menu animated drop-down-top fadeOut drop-down-top-60\" role=\"menu\" style=\"opacity: 1; display: none;\">\r\n                  <li class=\"\">\r\n                    <a href=\"https://chemfields.com/consignments/consignments-list\">Consignments </a>\r\n                  </li>\r\n                  <li class=\"\">\r\n                    <a (click)=\"logout()\" class=\"logout_page\">Logout</a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <!--==========Login button for dekstop============-->\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Ext Libs
 */




var HeaderComponent = /** @class */ (function () {
    /**
     * Initialize the class
     */
    function HeaderComponent(router, localStorage, baseProvider) {
        this.router = router;
        this.localStorage = localStorage;
        this.baseProvider = baseProvider;
        this.websiteURL = this.baseProvider.websiteURL;
        this.baseHREF = this.baseProvider.baseHREF;
    }
    /**
     * On Init Lifecycle Hook
     */
    HeaderComponent.prototype.ngOnInit = function () {
        // Check current ongoing session
        this.checkSession();
    };
    /**
     * Get Current Session
     */
    HeaderComponent.prototype.checkSession = function () {
        var customer = this.localStorage.get('customer-session');
        // Check If Customer ID Exists
        if (customer && customer.id) {
            this.sessionUser = customer;
        }
    };
    /**
     * Logout
     */
    HeaderComponent.prototype.logout = function () {
        this.localStorage.remove('customer-session');
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__["BaseSettingsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/base-settings.service */ "./src/app/providers/base-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */




var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
            ],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
            ],
            providers: [
                _providers_base_settings_service__WEBPACK_IMPORTED_MODULE_3__["BaseSettingsService"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/routing/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/routing/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_consignments_consignments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/consignments/consignments.component */ "./src/app/components/consignments/consignments.component.ts");
/* harmony import */ var _components_consignment_detail_consignment_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/consignment-detail/consignment-detail.component */ "./src/app/components/consignment-detail/consignment-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Author : Komal Sadrani
 * Changes : Aaditya Gandhare
 * Modified : 13th Aug, 2018
 */






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'consignments-list/:referrer/:file_name', component: _components_consignments_consignments_component__WEBPACK_IMPORTED_MODULE_4__["ConsignmentsComponent"] },
    { path: 'consignments-list', component: _components_consignments_consignments_component__WEBPACK_IMPORTED_MODULE_4__["ConsignmentsComponent"] },
    { path: 'consignment-detail/:id', component: _components_consignment_detail_consignment_detail_component__WEBPACK_IMPORTED_MODULE_5__["ConsignmentDetailComponent"] },
    { path: 'login/:referrer/:file_name', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/flying-penguins/clients/chemfields/chemfield-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map