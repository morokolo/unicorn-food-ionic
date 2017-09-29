webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retryWhen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// observable








var HttpHelper = (function () {
    function HttpHelper(http, storage, loadingCtrl) {
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.loadingActive = false;
        this.timeOut = 30 * 1000;
    }
    /**
     * Handles external GET requests
     * @param url
     * @param data
     * @param loadMessage
     * @returns {Observable}
     */
    HttpHelper.prototype.get = function (url, data, loadMessage) {
        return this.httpHelperRequester('GET', url, data, loadMessage);
    };
    /**
     * Handles external POST requests
     * @param url
     * @param data
     * @param loadMessage
     * @returns {Observable}
     */
    HttpHelper.prototype.post = function (url, data, loadMessage) {
        return this.httpHelperRequester('POST', url, data, loadMessage);
    };
    /**
     * Handles all PUT requests
     * @param url
     * @param data
     * @param loadMessage
     * @returns {Observable}
     */
    HttpHelper.prototype.put = function (url, data, loadMessage) {
        return this.httpHelperRequester('PUT', url, data, loadMessage);
    };
    /**
     * Handles all DELETE requests
     * @param url
     * @param loadMessage
     * @returns {Observable}
     */
    HttpHelper.prototype.delete = function (url, loadMessage) {
        var data = {};
        return this.httpHelperRequester('DELETE', url, data, loadMessage);
    };
    /**
     * Handles all http request within app
     * @param action
     * @param url
     * @param data
     * @param loadingMessage
     * @returns {Observable}
     */
    HttpHelper.prototype.httpHelperRequester = function (action, url, data, loadingMessage) {
        var _this = this;
        this.showLoading(loadingMessage);
        // tslint:disable-next-line
        var observable = __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"]
            .from(this.storage.get('apikey'))
            .flatMap(function (key) {
            var headers;
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            });
            data['apikey'] = key;
            // let params: URLSearchParams = this.objToSearchParams(data);
            // tslint:disable-next-line
            var response;
            if (action === 'GET') {
                response = _this.http.get(url, data);
            }
            else if (action === 'POST') {
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                response = _this.http.post(url, data, options);
            }
            else if (action === 'PUT') {
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                response = _this.http.put(url, data, options);
            }
            else if (action === 'DELETE') {
                response = _this.http.delete(url, data);
            }
            else {
                response = __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"].of('Invalid Request');
            }
            return response;
        })
            .map(function (res) {
            _this.hideLoading(loadingMessage);
            if (res['status'] === 204) {
                return 'No Content';
            }
            else if (res === 'Invalid Request') {
                return res;
            }
            else {
                var body = res.json();
                return body['data'] || {};
            }
        })
            .timeout(this.timeOut)
            .catch(function (err) {
            _this.hideLoading(loadingMessage);
            return __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"].throw(err);
        });
        return observable;
    };
    ;
    HttpHelper.prototype.showLoading = function (loadingMessage) {
        if (loadingMessage && loadingMessage !== '') {
            this.loadingActive = true;
            this.presentLoading(loadingMessage);
        }
    };
    HttpHelper.prototype.hideLoading = function (loadingMessage) {
        if (loadingMessage && loadingMessage !== '' && this.loading) {
            if (this.loading) {
                this.dismiss();
            }
            this.loadingActive = false;
        }
    };
    /**
     * Sets search parameters for requests
     * @param obj
     * @returns {URLSearchParams}
     */
    HttpHelper.prototype.objToSearchParams = function (obj) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                params.set(key, obj[key]);
            }
        }
        return params;
    };
    HttpHelper.prototype.presentLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    /**
     * Dismisses loading message
     */
    HttpHelper.prototype.dismiss = function () {
        this.loading.dismiss().catch(function () {
            return true;
        });
    };
    return HttpHelper;
}());
HttpHelper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* LoadingController */]])
], HttpHelper);

//# sourceMappingURL=http-helper.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSettings = (function () {
    function AppSettings() {
        this.prod = '';
        this.preprod = '/preprod';
        this.staging = '/staging';
        this.baseUrl = 'http://52.168.148.228:7071/';
    }
    Object.defineProperty(AppSettings.prototype, "CREATEPROFILE", {
        get: function () {
            return this.baseUrl + 'api/createuserprofiles/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "GETRESTUARANTS", {
        get: function () {
            return this.baseUrl + 'api/restaurants/';
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
AppSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppSettings);

//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenusPage = (function () {
    function MenusPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.slides = [
            {
                price: "R 78.50",
                name: "Jalapeno & Cheese Burger",
                description: "Topped with melted cheese, chilli con carne, nachos and guacamole. ",
                image: "assets/img/ica-slidebox-img-3.jpg",
            },
            {
                price: "R 135.00",
                name: "Jalapeno & Cheese Burger",
                description: "Topped with melted cheese, chilli con carne, nachos and guacamole. ",
                image: "assets/img/ica-slidebox-img-3.jpg",
            },
            {
                price: "R 23.00",
                name: "Jalapeno & Cheese Burger",
                description: "Topped with melted cheese, chilli con carne, nachos and guacamole. ",
                image: "assets/img/ica-slidebox-img-3.jpg",
            }
        ];
        this.getMenus();
    }
    MenusPage.prototype.getMenus = function () {
        var _this = this;
        var data = {
            'apiKey': '5f691425a4aa1f7ff685a6ee6aa3dc46b0d22f05'
        };
        this.authService.getRestuarants(data)
            .subscribe(function (res) {
            _this.slides = [
                { "id": 1, "price": "R56.50", "name": "BBQ Meal", description: "BBQ burger with Coke and Chips", image: "assets/img/BBQMeal.png" },
                { "id": 1, "price": "R39.50", "name": "Big Mac Meal", description: "Big Mac bugrger with Coke and Chips", image: "assets/img/BigMac.png" },
            ];
        }, function (err) {
            // this._errorHelper.handleError(err);
        });
    };
    MenusPage.prototype.goToOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__orders_orders__["a" /* OrdersPage */]);
    };
    return MenusPage;
}());
MenusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-menus',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/menus/menus.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menus</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="ion-content-dashboard ">\n  <ion-slides pager>\n    <ion-slide options="sliderOptions" *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image"/>\n      <ion-list>\n        <ion-item>\n          <p>{{slide.name}}</p>\n          <button ion-button clear item-end>{{slide.price}}</button>\n        </ion-item>\n\n      </ion-list>\n      <p [innerHTML]="slide.description"></p>\n      <ion-list>\n        <ion-item class="small-item">\n          <ion-input type="text" placeholder="1"></ion-input>\n          <button item-end ion-button secondary >Add To Order</button>\n        </ion-item>\n      </ion-list>\n\n      <button ion-button primary full (click)="goToOrder()">Send Order</button>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/menus/menus.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], MenusPage);

var _a, _b;
//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersPage = (function () {
    function OrdersPage(navCtrl, camera, nav, authService) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.nav = nav;
        this.authService = authService;
        this.orders = [];
        this.orders = [
            { "id": 1, "price": "R56.50", "name": "BBQ Meal", description: "BBQ burger with Coke and Chips", image: "../../assets/img/BBQMeal.png" }
        ];
    }
    OrdersPage.prototype.goToResturant = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OrdersPage.prototype.makePayments = function () {
        var _this = this;
        var data = {
            'page': 'ordering'
        };
        this.authService.getRestuarants(data)
            .subscribe(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]);
        }, function (err) {
            // this._errorHelper.handleError(err);
        });
        // let options: CameraOptions = {
        //   quality: 100,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE,
        //   cameraDirection : 1,
        // }
        // this.camera.getPicture(options).then((imageData) => {
        //   // imageData is either a base64 encoded string or a file URI
        //   // If it's base64:
        //   let base64Image = 'data:image/jpeg;base64,' + imageData;
        // }, (err) => {
        //   // Handle error
        // });
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-orders',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/orders/orders.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="white">Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="ion-content-dashboard ">\n\n  <ion-list>\n\n    <ion-item  *ngFor="let order of orders">\n      <ion-thumbnail item-start>\n        <img src="{{order.image}}"/>\n      </ion-thumbnail>\n      <h2>{{order.name}}</h2>\n      <button ion-button clear item-end>{{order.price}}</button>\n    </ion-item>\n\n    <button ion-button primary full (click)="makePayments()">Make Payment</button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/orders/orders.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], OrdersPage);

var _a, _b, _c, _d;
//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/help/help.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/help/help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserHistoryPage = (function () {
    function UserHistoryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return UserHistoryPage;
}());
UserHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-history',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/user-history/user-history.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/user-history/user-history.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], UserHistoryPage);

//# sourceMappingURL=user-history.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resturants_resturants__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.order = { "id": 1, "price": "R56.50", "name": "BBQ Meal", description: "BBQ burger with Coke and Chips", image: "../../assets/img/BBQMeal.png" };
    }
    SettingsPage.prototype.goToRestuarants = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__resturants_resturants__["a" /* ResturantsPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Order Complete</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <img src="{{order.image}}"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{order.name}}\n          </ion-card-title>\n          <p>\n            Desription: <br>{{order.description}}\n          </p>\n          Price: {{order.price}}\n        </ion-card-content>\n      </ion-card>\n\n\n      <button ion-button (click)="goToRestuarants()" secondary full>Done</button>\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _b || Object])
], SettingsPage);

var _a, _b;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegistrationPage = (function () {
    function UserRegistrationPage(navCtrl, authService, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
    }
    UserRegistrationPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        var user = {
            "user": {
                "first_name": form['value']['firstname'],
                "last_name": form['value']['lastname'],
                "username": form['value']['username'],
                "password": form['value']['password'],
                "email": form['value']['email'],
                "status": true
            },
            "cellphone": form['value']['cell'],
            "user_type": "buyer"
        };
        if (form['valid']) {
            this.storage.set('username', user.user.username).then(function () {
                _this.authService.create(user)
                    .subscribe(function (res) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }, function (err) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                });
            });
        }
    };
    return UserRegistrationPage;
}());
UserRegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-user-registration',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/user-registration/user-registration.html"*/'<ion-content padding class="ion-content-home">\n\n  <ion-row class="logo">\n    <img src="assets/logo-1.png">\n  </ion-row>\n\n  <ion-list>\n    <form (ngSubmit)="onSubmit(authForm)" #authForm="ngForm" padding novalidate>\n\n      <ion-item class="no-padding">\n        <ion-input clearInput type="text" placeholder="First Name" required (ngModel)="firstname" name="firstname" #firstname="ngModel" autocapitalize="none"></ion-input>\n      </ion-item>\n      <!--username error divs-->\n      <div [hidden]="firstname.valid || firstname.untouched && !authForm.submitted">\n        <p ion-text color="danger">\n          First Name is required\n        </p>\n      </div>\n\n      <ion-item class="no-padding">\n        <ion-input clearInput type="text" placeholder="Last Name" required (ngModel)="lastname" name="lastname" #lastname="ngModel" autocapitalize="none"></ion-input>\n      </ion-item>\n      <!--username error divs-->\n      <div [hidden]="lastname.valid || lastname.untouched && !authForm.submitted">\n        <p ion-text color="danger">\n          Last Name is required\n        </p>\n      </div>\n      \n      <ion-item class="no-padding">\n        <ion-input clearInput type="text" placeholder="Username" required (ngModel)="username" name="username" #username="ngModel" ></ion-input>\n      </ion-item>\n      <!--password error divs-->\n      <div [hidden]="username.valid || username.untouched && !authForm.submitted">\n        <p ion-text color="danger">\n          Cellphone is required\n        </p>\n      </div>\n\n      <ion-item class="no-padding">\n        <ion-input clearInput type="password" placeholder="Password" required (ngModel)="password" name="password" #password="ngModel" ></ion-input>\n      </ion-item>\n      <!--password error divs-->\n      <div [hidden]="password.valid || password.untouched && !authForm.submitted">\n        <p ion-text color="danger">\n          Password is required\n        </p>\n      </div>\n\n      <ion-item class="no-padding">\n        <ion-input clearInput type="text" placeholder="Cell Number" required (ngModel)="cell" name="cell" #cell="ngModel" ></ion-input>\n      </ion-item>\n      <!--password error divs-->\n      <div [hidden]="cell.valid || cell.untouched && !authForm.submitted">\n        <p ion-text color="danger">\n          Cellphone is required\n        </p>\n      </div>\n\n      <ion-item class="no-padding">\n        <ion-input clearInput type="email" placeholder="Email Address" required (ngModel)="email" name="email" #email="ngModel" ></ion-input>\n      </ion-item>\n      <!--password error divs-->\n      <div [hidden]="email.valid || email.untouched && !authForm.submitted">\n        <p ion-text color="danger">\n          Email address is required\n        </p>\n      </div>\n\n      <!-- <ion-item class="no-padding">\n        <ion-input clearInput type="text" placeholder="Image" required (ngModel)="image" name="image" #image="ngModel" ></ion-input>\n      </ion-item>\n      <!--password error divs-->\n      <!-- <div [hidden]="email.valid || image.untouched && !authForm.submitted">\n        <p ion-text color="danger">\n          Email address is required\n        </p>\n      </div> -->\n      <!-- <input type="file" accept="image/*" (change)="handleInputChange($event)"/> -->\n\n      <br><br>\n\n      <button ion-button type="submit" secondary full>Register</button>\n\n    </form>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/user-registration/user-registration.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], UserRegistrationPage);

//# sourceMappingURL=user-registration.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_helper__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_help_help__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_history_user_history__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_resturants_resturants__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menus_menus__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_registration_user_registration__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_app_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_history_user_history__["a" /* UserHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_resturants_resturants__["a" /* ResturantsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_user_registration_user_registration__["a" /* UserRegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_menus_menus__["a" /* MenusPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__["a" /* OrdersPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_history_user_history__["a" /* UserHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_resturants_resturants__["a" /* ResturantsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_user_registration_user_registration__["a" /* UserRegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_menus_menus__["a" /* MenusPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__["a" /* OrdersPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_18__providers_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_helper__["a" /* HttpHelper */],
            __WEBPACK_IMPORTED_MODULE_20__providers_app_settings__["a" /* AppSettings */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_help_help__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_history_user_history__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_registration_user_registration__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_user_registration_user_registration__["a" /* UserRegistrationPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Resturants', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-restaurant' },
            { title: 'Orders', component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */], icon: 'ios-settings-outline' },
            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_7__pages_user_history_user_history__["a" /* UserHistoryPage */], icon: 'ios-clock-outline' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_6__pages_help_help__["a" /* HelpPage */], icon: 'ios-help-circle-outline' },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */], icon: 'ios-settings-outline' },
            { title: 'Payments', component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */], icon: 'ios-settings-outline' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: 'ios-bookmark-outline' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="http://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png">\n        </ion-avatar>\n        <h2>John Doe</h2>\n      </ion-item>\n    </ion-list>\n\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-start></ion-icon>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResturantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResturantsPage = (function () {
    function ResturantsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ResturantsPage;
}());
ResturantsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resturants',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/resturants/resturants.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Resurants</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/resturants/resturants.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ResturantsPage);

//# sourceMappingURL=resturants.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/list/list.html"*/''/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menus_menus__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.restuarants = [];
        this.getResuturants();
    }
    HomePage.prototype.getResuturants = function () {
        var _this = this;
        var data = {
            'page': 'restu'
        };
        this.authService.getRestuarants(data)
            .subscribe(function (res) {
            _this.restuarants = [{ "id": 1, "name": "McDonalds", "address": "Fourways", "latlong": "asdasda", "menu": { "id": 1, "title": "asdasdasd" } }, { "id": 2, "name": "McDonalds", "address": "Mall of Africa", "latlong": "asdasfdas", "menu": { "id": 2, "title": "asdasda" } }];
        }, function (err) {
            // this._errorHelper.handleError(err);
        });
    };
    HomePage.prototype.goToResturant = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menus_menus__["a" /* MenusPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="white">Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-content-dashboard ">\n\n  <ion-list (click)="goToResturant()">\n    <ion-item *ngFor="let res of restuarants">\n      <ion-thumbnail item-start>\n        <img src="../../assets/logo_mcd.png"/>\n      </ion-thumbnail>\n      <h2>{{res.name}}</h2>\n      <p>{{res.address}}</p>\n    </ion-item>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/kwakhona/Documents/devLAB/Tangent/Hackerthon/unicorn-food-ionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_helper__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Providersr


var AuthenticationService = (function () {
    function AuthenticationService(appSettings, _httpHelper) {
        this.appSettings = appSettings;
        this._httpHelper = _httpHelper;
    }
    AuthenticationService.prototype.create = function (data) {
        var url = this.appSettings.CREATEPROFILE;
        return this._httpHelper.post(url, data, 'Creating user...');
    };
    AuthenticationService.prototype.getRestuarants = function (data) {
        var url = this.appSettings.GETRESTUARANTS;
        var messages = {
            'restu': 'Getting restuarants...',
            'ordering': 'Making payment...'
        };
        return this._httpHelper.get(url, data, messages[data['page']]);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_helper__["a" /* HttpHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_helper__["a" /* HttpHelper */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication-service.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map