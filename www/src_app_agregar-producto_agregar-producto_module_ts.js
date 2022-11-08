"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_agregar-producto_agregar-producto_module_ts"],{

/***/ 8141:
/*!*********************************************************************!*\
  !*** ./src/app/agregar-producto/agregar-producto-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarProductoPageRoutingModule": () => (/* binding */ AgregarProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _agregar_producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-producto.page */ 9408);




const routes = [
    {
        path: '',
        component: _agregar_producto_page__WEBPACK_IMPORTED_MODULE_0__.AgregarProductoPage
    }
];
let AgregarProductoPageRoutingModule = class AgregarProductoPageRoutingModule {
};
AgregarProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarProductoPageRoutingModule);



/***/ }),

/***/ 4779:
/*!*************************************************************!*\
  !*** ./src/app/agregar-producto/agregar-producto.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarProductoPageModule": () => (/* binding */ AgregarProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agregar_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-producto-routing.module */ 8141);
/* harmony import */ var _agregar_producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-producto.page */ 9408);







let AgregarProductoPageModule = class AgregarProductoPageModule {
};
AgregarProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarProductoPageRoutingModule
        ],
        declarations: [_agregar_producto_page__WEBPACK_IMPORTED_MODULE_1__.AgregarProductoPage]
    })
], AgregarProductoPageModule);



/***/ }),

/***/ 9408:
/*!***********************************************************!*\
  !*** ./src/app/agregar-producto/agregar-producto.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarProductoPage": () => (/* binding */ AgregarProductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agregar_producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-producto.page.html?ngResource */ 5341);
/* harmony import */ var _agregar_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-producto.page.scss?ngResource */ 2021);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/products.service */ 9531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);



/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */




let AgregarProductoPage = class AgregarProductoPage {
    constructor(productsService, alertController, toastController) {
        this.productsService = productsService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.producto = {
            id: "",
            img: "",
            name: "",
            price: 0,
            amount: 0
        };
    }
    ngOnInit() { }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Guardado',
                subHeader: 'Aviso: ',
                message: 'Se guardo correctamente!',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentAlertError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                subHeader: 'Aviso: ',
                message: 'NO se guardo, ingrese todos los campos!',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentToast(position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'GUARDADO CORRECTAMENTE!',
                duration: 1500,
                position,
                color: 'success'
            });
            yield toast.present();
        });
    }
    addProduct() {
        if (this.producto.name !== '' && this.producto.img !== '' && this.producto.price != 0 && this.producto.id !== '') {
            this.productsService.addProduct(this.producto);
            this.producto = {
                id: "",
                img: "",
                name: "",
                price: 0,
                amount: 0
            };
            //this.presentAlert();
            this.presentToast("top");
        }
        else {
            this.presentAlertError();
        }
    }
};
AgregarProductoPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
AgregarProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-agregar-producto',
        template: _agregar_producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agregar_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgregarProductoPage);



/***/ }),

/***/ 2021:
/*!************************************************************************!*\
  !*** ./src/app/agregar-producto/agregar-producto.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLXByb2R1Y3RvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5341:
/*!************************************************************************!*\
  !*** ./src/app/agregar-producto/agregar-producto.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Nuevo Producto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">ID</ion-label>\r\n    <ion-input [(ngModel)]=\"producto.id\" ></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Nombre</ion-label>\r\n    <ion-input [(ngModel)]=\"producto.name\" ></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">URL de la imagen</ion-label>\r\n    <ion-input [(ngModel)]=\"producto.img\" ></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Precio</ion-label>\r\n    <ion-input [(ngModel)]=\"producto.price\" ></ion-input>\r\n  </ion-item>\r\n  <ion-button class=\"ion-margin\"  (click)=\"addProduct()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n    Agregar Producto\r\n  </ion-button>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_agregar-producto_agregar-producto_module_ts.js.map