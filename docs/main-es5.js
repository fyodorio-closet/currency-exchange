(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!***********************************************************************************************************************!*\
  !*** /Users/fyodor/Code/TEMP/new_angular_app/currency-convertor/node_modules/raw-loader!./src/app/app.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"currency-convertor-app\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <span fxFlex>Currency Exchange App</span>\n      <a href=\"https://github.com/loenko/currency-exchange\" target=\"_blank\">\n        <img src=\"../assets/github-logo.png\" alt=\"Source at Github\">\n      </a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <form [formGroup]=\"currencyForm\" fxFlexFill>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field>\n        <select id=\"source-select\" formControlName=\"sourceCurrency\" matNativeControl>\n          <option value=\"\">--Please choose a source currency--</option>\n          <option *ngFor=\"let sourceKey of sourceCurrencyList\" value=\"{{sourceKey}}\">{{sourceKey}}</option>\n        </select>\n      </mat-form-field>\n\n      <button (click)=\"swapCurrencies()\" mat-icon-button aria-label=\"Swap Currencies\">\n        <mat-icon>cached</mat-icon>\n      </button>\n\n      <mat-form-field>\n        <select id=\"target-select\" formControlName=\"targetCurrency\" matNativeControl>\n          <option value=\"\">--Please choose a target currency--</option>\n          <option *ngFor=\"let targetKey of targetCurrencyList\" value=\"{{targetKey}}\">{{targetKey}}</option>\n        </select>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"counting-row\">\n        <mat-icon>account_balance_wallet</mat-icon>\n        <mat-form-field>\n          <input matInput type=\"number\" formControlName=\"sourceValue\">\n        </mat-form-field>\n        <mat-icon>arrow_forward_ios</mat-icon>\n        <div class=\"mat-h2\" id=\"target-value\">{{targetValue || ''}}</div>\n      </div>\n\n      <mat-form-field>\n        <input\n          matInput\n          [matDatepicker]=\"picker\"\n          placeholder=\"Choose a date\"\n          [min]=\"'1999-01-01'\"\n          [max]=\"currentDate\"\n          formControlName=\"requestDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n  </form>\n\n  <div *ngIf=\"sortedCurrencyTable.dataSource\" class=\"mat-elevation-z8 table-container\">\n    <table mat-table matSort (matSortChange)=\"sortData($event)\" [dataSource]=\"sortedCurrencyTable.dataSource\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"code\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Currency Code </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"value\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Exchange Rate to {{currentSourceCurrencyName}} </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"currentCurrencyTable.displayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: currentCurrencyTable.displayedColumns;\"></tr>\n    </table>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".currency-convertor-app .mat-h2 {\n  margin: 0;\n  color: green;\n}\n.currency-convertor-app .counting-row > mat-icon {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.currency-convertor-app table {\n  width: 400px;\n  text-align: center;\n}\n.currency-convertor-app table .mat-header-cell {\n  text-align: center;\n}\n.currency-convertor-app img {\n  margin-top: 9px;\n}\n.currency-convertor-app .table-container {\n  min-height: 128px;\n  height: 50vh;\n  overflow: auto;\n  margin-bottom: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9meW9kb3IvQ29kZS9URU1QL25ld19hbmd1bGFyX2FwcC9jdXJyZW5jeS1jb252ZXJ0b3IvYXBwcy9jdXJyZW5jeS1jb252ZXJ0b3Ivc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIuLi9hcHBzL2N1cnJlbmN5LWNvbnZlcnRvci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNFLGtCQUFBO0FDQ047QURFRTtFQUNFLGVBQUE7QUNBSjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoiLi4vYXBwcy9jdXJyZW5jeS1jb252ZXJ0b3Ivc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVuY3ktY29udmVydG9yLWFwcCB7XG4gIC5tYXQtaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiAgLmNvdW50aW5nLXJvdyA+IG1hdC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuICBpbWcge1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgfVxuICAudGFibGUtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMjhweDtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICB9XG59XG4iLCIuY3VycmVuY3ktY29udmVydG9yLWFwcCAubWF0LWgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogZ3JlZW47XG59XG4uY3VycmVuY3ktY29udmVydG9yLWFwcCAuY291bnRpbmctcm93ID4gbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5jdXJyZW5jeS1jb252ZXJ0b3ItYXBwIHRhYmxlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3VycmVuY3ktY29udmVydG9yLWFwcCB0YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1cnJlbmN5LWNvbnZlcnRvci1hcHAgaW1nIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuLmN1cnJlbmN5LWNvbnZlcnRvci1hcHAgLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEyOHB4O1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_rates_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/rates.actions */ "./src/app/state/rates.actions.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(calculator, store, fb) {
        var _this = this;
        this.calculator = calculator;
        this.store = store;
        this.fb = fb;
        this.objectKeys = Object.keys;
        this.currencyForm = this.fb.group({
            sourceCurrency: [''],
            targetCurrency: [''],
            sourceValue: [''],
            requestDate: ['']
        });
        this.currentSourceCurrencyName = 'EUR';
        this.currentTargetCurrencyName = 'USD';
        this.sourceValue = 1;
        this.currentDate = new Date();
        this.currentCurrencyTable = {
            displayedColumns: [],
            dataSource: []
        };
        this.sortedCurrencyTable = {
            displayedColumns: [],
            dataSource: []
        };
        this.rates$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('state'));
        this.subscription = this.rates$.subscribe(function (data) {
            _this.targetCurrencyList = _this.objectKeys(data.ratesSet.rates).map(function (key) { return key; });
            _this.sourceCurrencyList = _this.targetCurrencyList.concat([
                data.ratesSet.base
            ]);
            _this.dataSet = data.ratesSet;
            _this.defaultDate = data.ratesSet.date;
            _this.currencyForm.controls['sourceCurrency'].setValue(_this.currentSourceCurrencyName, { onlySelf: true });
            _this.currencyForm.controls['targetCurrency'].setValue(_this.currentTargetCurrencyName, { onlySelf: true });
            _this.currencyForm.controls['requestDate'].setValue(_this.defaultDate, { onlySelf: true });
            _this.currencyForm.controls['sourceValue'].setValue(_this.sourceValue, { onlySelf: true });
            _this.targetValue = _this.currencyForm.controls['sourceValue'].value * data.ratesSet.rates[_this.currencyForm.controls['targetCurrency'].value];
            _this.generateCurrencyTable();
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _state_rates_actions__WEBPACK_IMPORTED_MODULE_4__["LoadRates"]());
        // Process number change
        this.subscription.add(this.currencyForm.controls['sourceValue'].valueChanges.subscribe(function (change) {
            _this.sourceValue = change;
            _this.targetValue = change * _this.dataSet.rates[_this.currentTargetCurrencyName];
        }));
        // Process source currency change
        this.subscription.add(this.currencyForm.controls['sourceCurrency'].valueChanges.subscribe(function (change) {
            _this.dataSet = _this.calculator.getRatesByAnotherBase(_this.dataSet, change);
            // In target list remove new currency to avoid repetition
            _this.targetCurrencyList = _this.targetCurrencyList.filter(function (item) { return change !== item; });
            // Check if currency is flipped and replace it
            if (_this.currencyForm.controls['targetCurrency'].value === change) {
                _this.targetCurrencyList.push(_this.currentSourceCurrencyName);
                _this.currencyForm.controls['targetCurrency'].setValue(_this.currentSourceCurrencyName, { onlySelf: true });
                _this.currentTargetCurrencyName = _this.currentSourceCurrencyName;
            }
            // Reference current chosen currency in component
            _this.currentSourceCurrencyName = change;
            // Change calculation if any
            _this.targetValue = _this.sourceValue * _this.dataSet.rates[_this.currencyForm.controls['targetCurrency'].value];
            _this.generateCurrencyTable();
        }));
        // Process target currency change
        this.subscription.add(this.currencyForm.controls['targetCurrency'].valueChanges.subscribe(function (change) {
            _this.targetValue = _this.sourceValue * _this.dataSet.rates[_this.currencyForm.controls['targetCurrency'].value];
            _this.currentTargetCurrencyName = change;
        }));
        // Process date change
        this.subscription.add(this.currencyForm.controls['requestDate'].valueChanges.subscribe(function (change) {
            var oldValue = _this.dataSet.date;
            var newValue = new Date(change).toISOString().substring(0, 10);
            if (newValue && newValue !== oldValue)
                _this.store.dispatch(new _state_rates_actions__WEBPACK_IMPORTED_MODULE_4__["LoadRatesByDate"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.dataSet, { date: newValue, base: _this.currentSourceCurrencyName })));
        }));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.swapCurrencies = function () {
        this.currencyForm.controls['sourceCurrency'].setValue(this.currentTargetCurrencyName);
    };
    AppComponent.prototype.sortData = function (sort) {
        var _this = this;
        var data = this.currentCurrencyTable.dataSource.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedCurrencyTable.dataSource = data;
            return;
        }
        this.sortedCurrencyTable.dataSource = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'code': return _this.compare(a.code, b.code, isAsc);
                case 'value': return _this.compare(a.value, b.value, isAsc);
                default: return 0;
            }
        });
    };
    AppComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    AppComponent.prototype.generateCurrencyTable = function () {
        var _this = this;
        this.currentCurrencyTable.displayedColumns = ['code', 'value'];
        this.currentCurrencyTable.dataSource = this.objectKeys(this.dataSet.rates).map(function (key) {
            return { code: key, value: _this.dataSet.rates[key] };
        });
        this.sortedCurrencyTable = this.currentCurrencyTable;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'currency-convertor-app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _state_rates_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/rates.reducer */ "./src/app/state/rates.reducer.ts");
/* harmony import */ var _state_rates_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/rates.effects */ "./src/app/state/rates.effects.ts");
/* harmony import */ var _data_fetcher_data_fetcher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-fetcher/data-fetcher.service */ "./src/app/data-fetcher/data-fetcher.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({ state: _state_rates_reducer__WEBPACK_IMPORTED_MODULE_6__["ratesReducer"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_state_rates_effects__WEBPACK_IMPORTED_MODULE_7__["RatesEffects"]]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({
                    name: 'NgRx Currency Convertor App',
                    logOnly: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
                }),
            ],
            providers: [_data_fetcher_data_fetcher_service__WEBPACK_IMPORTED_MODULE_8__["DataFetcherService"], _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_LOCALE"], useValue: 'en-GB' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getRatesByAnotherBase = function (rates, newBase) {
        if (newBase === rates.base)
            return rates;
        // Isolate basic set of rates
        var setOfRates = JSON.parse(JSON.stringify(rates.rates));
        // Calculate rate of old base by new base for future pushing
        var rateOfOldBaseByNewBase = 1 / setOfRates[newBase];
        // Iterate through object with rates to recalculate by new base
        for (var key in setOfRates) {
            if (setOfRates.hasOwnProperty(key)) {
                setOfRates[key] = rates.rates[key] / rates.rates[newBase];
            }
        }
        // Push rate for old base by new base
        setOfRates[rates.base] = rateOfOldBaseByNewBase;
        // Remove old base from the list
        delete setOfRates[newBase];
        // Compile new response in the same format
        var newResponse = {
            base: newBase,
            date: rates.date,
            rates: JSON.parse(JSON.stringify(setOfRates))
        };
        return newResponse;
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/data-fetcher/data-fetcher.service.ts":
/*!******************************************************!*\
  !*** ./src/app/data-fetcher/data-fetcher.service.ts ***!
  \******************************************************/
/*! exports provided: DataFetcherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFetcherService", function() { return DataFetcherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





var API_URL_BASE = 'https://api.exchangeratesapi.io/';
var API_URL = API_URL_BASE + "latest";
// Mock url is used when the main API is not accessible
// const API_MOCK_URL = 'https://api.myjson.com/bins/1dnd5n';
var DataFetcherService = /** @class */ (function () {
    function DataFetcherService(http, calculator) {
        this.http = http;
        this.calculator = calculator;
    }
    DataFetcherService.prototype.getData = function () {
        return this.http.get(API_URL);
    };
    DataFetcherService.prototype.getDataByDate = function (action) {
        var _this = this;
        var date = action.payload.date;
        var base = action.payload.base;
        return this.http.get("" + API_URL_BASE + date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (rateSet) { return _this.calculator.getRatesByAnotherBase(rateSet, base); }));
    };
    DataFetcherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
    ]; };
    DataFetcherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], DataFetcherService);
    return DataFetcherService;
}());



/***/ }),

/***/ "./src/app/state/rates.actions.ts":
/*!****************************************!*\
  !*** ./src/app/state/rates.actions.ts ***!
  \****************************************/
/*! exports provided: RatesActionTypes, LoadRates, LoadRatesByDate, RatesLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesActionTypes", function() { return RatesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRates", function() { return LoadRates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRatesByDate", function() { return LoadRatesByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesLoaded", function() { return RatesLoaded; });
var RatesActionTypes;
(function (RatesActionTypes) {
    RatesActionTypes["LoadRates"] = "[Rates] Load Rates";
    RatesActionTypes["LoadRatesByDate"] = "[Rates] Load Rates by Date";
    RatesActionTypes["RatesLoaded"] = "[Rates] Rates Loaded";
})(RatesActionTypes || (RatesActionTypes = {}));
var LoadRates = /** @class */ (function () {
    function LoadRates() {
        this.type = RatesActionTypes.LoadRates;
    }
    return LoadRates;
}());

var LoadRatesByDate = /** @class */ (function () {
    function LoadRatesByDate(payload) {
        this.payload = payload;
        this.type = RatesActionTypes.LoadRatesByDate;
    }
    LoadRatesByDate.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRatesByDate;
}());

var RatesLoaded = /** @class */ (function () {
    function RatesLoaded(payload) {
        this.payload = payload;
        this.type = RatesActionTypes.RatesLoaded;
    }
    RatesLoaded.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return RatesLoaded;
}());



/***/ }),

/***/ "./src/app/state/rates.effects.ts":
/*!****************************************!*\
  !*** ./src/app/state/rates.effects.ts ***!
  \****************************************/
/*! exports provided: RatesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesEffects", function() { return RatesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _rates_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rates.actions */ "./src/app/state/rates.actions.ts");
/* harmony import */ var _data_fetcher_data_fetcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-fetcher/data-fetcher.service */ "./src/app/data-fetcher/data-fetcher.service.ts");







var RatesEffects = /** @class */ (function () {
    function RatesEffects(actions$, dataFetcher) {
        var _this = this;
        this.actions$ = actions$;
        this.dataFetcher = dataFetcher;
        this.loadRates$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_rates_actions__WEBPACK_IMPORTED_MODULE_5__["RatesActionTypes"].LoadRates), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.dataFetcher.getData(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (ratesSet) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _rates_actions__WEBPACK_IMPORTED_MODULE_5__["RatesLoaded"](ratesSet)); }));
        this.loadRatesByDate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_rates_actions__WEBPACK_IMPORTED_MODULE_5__["RatesActionTypes"].LoadRatesByDate), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.dataFetcher.getDataByDate(action); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (ratesSet) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _rates_actions__WEBPACK_IMPORTED_MODULE_5__["RatesLoaded"](ratesSet)); }));
    }
    RatesEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _data_fetcher_data_fetcher_service__WEBPACK_IMPORTED_MODULE_6__["DataFetcherService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatesEffects.prototype, "loadRates$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatesEffects.prototype, "loadRatesByDate$", void 0);
    RatesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _data_fetcher_data_fetcher_service__WEBPACK_IMPORTED_MODULE_6__["DataFetcherService"]])
    ], RatesEffects);
    return RatesEffects;
}());



/***/ }),

/***/ "./src/app/state/rates.reducer.ts":
/*!****************************************!*\
  !*** ./src/app/state/rates.reducer.ts ***!
  \****************************************/
/*! exports provided: ratesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratesReducer", function() { return ratesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rates_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rates.actions */ "./src/app/state/rates.actions.ts");


var initialRatesState = {
    ratesSet: {
        base: '',
        date: '',
        rates: {}
    }
};
function ratesReducer(state, action) {
    if (state === void 0) { state = initialRatesState; }
    switch (action.type) {
        case _rates_actions__WEBPACK_IMPORTED_MODULE_1__["RatesActionTypes"].RatesLoaded: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ratesSet: action.payload });
        }
        case _rates_actions__WEBPACK_IMPORTED_MODULE_1__["RatesActionTypes"].LoadRatesByDate: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ratesSet: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.ratesSet, { date: action.payload.date }) });
        }
        default: return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fyodor/Code/TEMP/new_angular_app/currency-convertor/apps/currency-convertor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map