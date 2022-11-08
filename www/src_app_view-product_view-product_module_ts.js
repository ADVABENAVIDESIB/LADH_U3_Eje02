"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view-product_view-product_module_ts"],{

/***/ 5617:
/*!*************************************************************!*\
  !*** ./src/app/view-product/view-product-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProductPageRoutingModule": () => (/* binding */ ViewProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-product.page */ 8494);




const routes = [
    {
        path: '',
        component: _view_product_page__WEBPACK_IMPORTED_MODULE_0__.ViewProductPage
    }
];
let ViewProductPageRoutingModule = class ViewProductPageRoutingModule {
};
ViewProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewProductPageRoutingModule);



/***/ }),

/***/ 5964:
/*!*****************************************************!*\
  !*** ./src/app/view-product/view-product.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProductPageModule": () => (/* binding */ ViewProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-product-routing.module */ 5617);
/* harmony import */ var _view_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-product.page */ 8494);







let ViewProductPageModule = class ViewProductPageModule {
};
ViewProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewProductPageRoutingModule
        ],
        declarations: [_view_product_page__WEBPACK_IMPORTED_MODULE_1__.ViewProductPage]
    })
], ViewProductPageModule);



/***/ }),

/***/ 8494:
/*!***************************************************!*\
  !*** ./src/app/view-product/view-product.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProductPage": () => (/* binding */ ViewProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-product.page.html?ngResource */ 7601);
/* harmony import */ var _view_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-product.page.scss?ngResource */ 7836);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/products.service */ 9531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let ViewProductPage = class ViewProductPage {
    constructor(activatedRoute, productsService) {
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            const res = paramMap.get('id');
            this.producto = this.productsService.getProductById(res);
        });
    }
};
ViewProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService }
];
ViewProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-product',
        template: _view_product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewProductPage);



/***/ }),

/***/ 7836:
/*!****************************************************************!*\
  !*** ./src/app/view-product/view-product.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXByb2R1Y3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7601:
/*!****************************************************************!*\
  !*** ./src/app/view-product/view-product.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Descripción del producto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-text-center\">\r\n    <ion-card-header>\r\n      <ion-img [src]=\"producto.img\"></ion-img>\r\n      <ion-card-title>{{producto.name}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-chip color=\"primary\">\r\n      <ion-label>${{producto.price}}</ion-label>\r\n    </ion-chip>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view-product_view-product_module_ts.js.map