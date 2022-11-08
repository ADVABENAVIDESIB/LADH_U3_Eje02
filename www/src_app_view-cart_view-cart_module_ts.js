"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view-cart_view-cart_module_ts"],{

/***/ 2260:
/*!*******************************************************!*\
  !*** ./src/app/view-cart/view-cart-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCartPageRoutingModule": () => (/* binding */ ViewCartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-cart.page */ 6086);




const routes = [
    {
        path: '',
        component: _view_cart_page__WEBPACK_IMPORTED_MODULE_0__.ViewCartPage
    }
];
let ViewCartPageRoutingModule = class ViewCartPageRoutingModule {
};
ViewCartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewCartPageRoutingModule);



/***/ }),

/***/ 7292:
/*!***********************************************!*\
  !*** ./src/app/view-cart/view-cart.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCartPageModule": () => (/* binding */ ViewCartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-cart-routing.module */ 2260);
/* harmony import */ var _view_cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-cart.page */ 6086);







let ViewCartPageModule = class ViewCartPageModule {
};
ViewCartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewCartPageRoutingModule
        ],
        declarations: [_view_cart_page__WEBPACK_IMPORTED_MODULE_1__.ViewCartPage]
    })
], ViewCartPageModule);



/***/ }),

/***/ 6086:
/*!*********************************************!*\
  !*** ./src/app/view-cart/view-cart.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCartPage": () => (/* binding */ ViewCartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-cart.page.html?ngResource */ 1944);
/* harmony import */ var _view_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-cart.page.scss?ngResource */ 4674);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/products.service */ 9531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);



/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable radix */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/prefer-for-of */



let ViewCartPage = class ViewCartPage {
    constructor(productsService, activatedRoute) {
        this.productsService = productsService;
        this.activatedRoute = activatedRoute;
        this.total = 0;
        this.total = 0;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.productList = this.productsService.llenaCarro();
        });
        for (let i = 0; i < this.productList.length; i++) {
            this.total += (this.productList[i].price * this.productList[i].amount);
        }
    }
    removeProductFromCart(id) {
        this.total = 0;
        this.productsService.removeProductFromCart(id);
        for (let index = 0; index < this.productList.length; index++) {
            let price = this.productList[index].price;
            let amount = this.productList[index].amount;
            this.total += price * amount;
            console.log(this.total);
        }
    }
};
ViewCartPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ViewCartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-cart',
        template: _view_cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewCartPage);



/***/ }),

/***/ 4674:
/*!**********************************************************!*\
  !*** ./src/app/view-cart/view-cart.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNhcnQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1944:
/*!**********************************************************!*\
  !*** ./src/app/view-cart/view-cart.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Carrito</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list >\r\n    <ion-item-sliding *ngFor=\"let item of productList; let i = index\">\r\n    <ion-item *ngIf=\"item.amount > 0\">\r\n      <ion-avatar>\r\n        <img [src]=\"item.img\" />\r\n      </ion-avatar>\r\n      <ion-label class=\"ion-margin\">{{item.name}}</ion-label>\r\n      <ion-chip color=\"secondary\" mode=\"md\" outline=\"false\">\r\n        <ion-label>${{item.price}}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip color=\"tertiary\" mode=\"ios\" outline=\"true\">\r\n        <ion-label>X{{item.amount}}</ion-label>\r\n      </ion-chip>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"end\" (ionSwipe)=\"removeProductFromCart(i)\">\r\n      <ion-item-option expandable color=\"danger\">\r\n        <ion-icon name=\"trash-outline\"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n  </ion-item-sliding>\r\n  </ion-list>\r\n  <ion-item>\r\n    <ion-label>Total</ion-label>\r\n    <ion-chip color=\"primary\" mode=\"ios\" outline=\"false\">\r\n      <ion-label>${{total}}</ion-label>\r\n    </ion-chip>\r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view-cart_view-cart_module_ts.js.map