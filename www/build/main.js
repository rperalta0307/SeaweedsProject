webpackJsonp([5],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var HomePage = (function () {
    function HomePage(navCtrl, firebaseDb, alertCtrl, authProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseDb = firebaseDb;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.dates = [];
        this.result = [];
        this.timeStamp = [];
        this.valueTemp = [];
        this.valueSal = [];
        // valueWtrlvl = []
        this.valuePh = [];
        this.Temperatures = [];
        this.crop1 = "";
        this.crop2 = "";
        this.crop3 = "";
        this.buttonDisabled = true;
        //This is what i add came from the fisrt app
        this.buttonDisabled2 = true;
        this.fish = "";
        this.NumberOfFish = "";
        this.AgeOfFish = "";
        this.feed = "";
        this.crop1 = "";
        this.crop2 = "";
        this.crop3 = "";
        this.fish = "";
        this.NumberOfFish = "";
        this.AgeOfFish = "";
        this.feed = "";
        /*this.afd.list('Realtime_Data', ref => ref.limitToLast(12)).snapshotChanges().map(actions =>{
          this.timeStamp = [];
          return actions.map(action => ({ key: action.key, ...action.payload.val()}));
        }).subscribe(dates => {
          dates.map(date => {
            this.timeStamp.push(date.key);
          });
        });
    
        this.afd.list('Realtime_Data', ref => ref.limitToLast(12)).valueChanges().subscribe(snapshots=>{
          this.valueTemp = [];
          this.valueSal = [];
         // this.valueWtrlvl = [];
          this.valuePh = [];
          this.result = snapshots;
          this.result.map(key => {
            this.valueTemp.push(key.Measured_Temp_C);
            this.valueSal.push(key.Measured_Salinity);
           // this.valueWtrlvl.push(key.Measured_WaterLvl);
            this.valuePh.push(key.Measured_PHLevel);
          });
        });*/
        var datem = "";
        var year = "";
        var month = "";
        var day = "";
        this.firebaseDb.list('Sea_Realtime_Data', function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (dates) {
            dates.map(function (date) {
                year = date.key;
                console.log(year);
                _this.firebaseDb.list('Sea_Realtime_Data/' + year, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                    return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                }).subscribe(function (dates) {
                    dates.map(function (date) {
                        month = date.key;
                        console.log(month);
                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                        }).subscribe(function (dates) {
                            dates.map(function (date) {
                                day = date.key;
                                console.log(day);
                                _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                                    return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                                }).subscribe(function (dates) {
                                    dates.map(function (date) {
                                        datem = date.key;
                                        console.log(datem);
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(1); }).valueChanges().subscribe(function (snapshots) {
                                            _this.dates = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.dates.push(key.Date_Complete);
                                            });
                                        });
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueTemp = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueTemp.push(key.Measured_Temp_C);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueSal = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueSal.push(key.Measured_Salinity);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        /*this.firebaseDb.list('Sea_Realtime_Data/'+year+'/'+month+'/'+day+'/'+datem, ref => ref.limitToLast(5)).valueChanges().subscribe(snapshots=>{
                                          this.valueWtrlvl = [];
                                          this.timeStamp = [];
                                          this.result = snapshots;
                                          this.result.map(key => {
                                            this.valueWtrlvl.push(key.Measured_Waterlvl);
                                            this.timeStamp.push(key.Time);
                                          });
                                        });*/
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valuePh = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valuePh.push(key.Measured_PHLevel);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        console.log(this.valueTemp);
        console.log(this.valueSal);
        // console.log(this.valueWtrlvl);
        console.log(this.valuePh);
    }
    HomePage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to select these crops?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.update();
                        _this.Confirmed();
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.Confirmed = function () {
        var confirmed = this.alertCtrl.create({
            title: '',
            message: 'The crops have been selected!',
            buttons: [
                {
                    text: 'Done',
                    handler: function () {
                        console.log('Done clicked');
                    }
                }
            ]
        });
        confirmed.present();
    };
    HomePage.prototype.doConfirm2 = function () {
        var _this = this;
        var confirm2 = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to select these fishes?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.update2();
                        _this.update3();
                        _this.update4();
                        _this.update5();
                        _this.Confirmed2();
                    }
                }
            ]
        });
        confirm2.present();
    };
    HomePage.prototype.Confirmed2 = function () {
        var confirmed2 = this.alertCtrl.create({
            title: '',
            message: 'The fishes have been selected!',
            buttons: [
                {
                    text: 'Done',
                    handler: function () {
                        console.log('Done clicked');
                    }
                }
            ]
        });
        confirmed2.present();
    };
    /*check(){
      if(this.crop1 != '' || this.crop2 != '' || this.crop3 != ''){
        this.buttonDisabled=false;
      }else{
        this.buttonDisabled=true;
      }
    }*/
    HomePage.prototype.change = function (value) {
        console.log(this.crop1);
        this.crop1 = value.toString();
        if (this.crop1 != "" || this.crop2 != "" || this.crop3 != "") {
            this.buttonDisabled = null;
        }
    };
    HomePage.prototype.change2 = function (value) {
        console.log(this.crop2);
        this.crop2 = value.toString();
        if (this.crop1 != "" || this.crop2 != "" || this.crop3 != "") {
            this.buttonDisabled = null;
        }
    };
    HomePage.prototype.change3 = function (value) {
        console.log(this.crop3);
        this.crop3 = value.toString();
        if (this.crop1 != "" || this.crop2 != "" || this.crop3 != "") {
            this.buttonDisabled = null;
        }
    };
    HomePage.prototype.changeFish = function (value) {
        console.log(this.fish);
        this.fish = value.toString();
        if (this.fish != "" && this.NumberOfFish != "" && this.AgeOfFish != "") {
            this.buttonDisabled2 = null;
        }
    };
    HomePage.prototype.changeNumberOfFish = function (value) {
        console.log(this.NumberOfFish);
        this.NumberOfFish = value.toString();
        if (this.fish != "" && this.NumberOfFish != "" && this.AgeOfFish != "") {
            this.buttonDisabled2 = null;
        }
    };
    HomePage.prototype.changeAgeOfFish = function (value) {
        console.log(this.AgeOfFish);
        this.AgeOfFish = value.toString();
        if (this.fish != "" && this.NumberOfFish != "" && this.AgeOfFish != "") {
            this.buttonDisabled2 = null;
        }
    };
    HomePage.prototype.update = function () {
        console.log(this.crop1);
        this.firebaseDb.list("/Sea_Data/Sea_Name/").remove();
        this.firebaseDb.list("/Sea_Data/Sea_Name/").push(this.crop1.toString());
    };
    HomePage.prototype.update2 = function () {
        console.log(this.fish);
        this.firebaseDb.list("/Fish_Data/Fish_Name/").remove();
        this.firebaseDb.list("/Fish_Data/Fish_Name/").push(this.fish.toString());
    };
    HomePage.prototype.update3 = function () {
        console.log(this.AgeOfFish);
        this.firebaseDb.list("/Fish_Data/Fish_AgeOfFish/").remove();
        this.firebaseDb.list("/Fish_Data/Fish_AgeOfFish/").push(this.AgeOfFish.toString());
    };
    HomePage.prototype.update4 = function () {
        console.log(this.NumberOfFish);
        this.firebaseDb.list("/Fish_Data/NumberOfFish/").remove();
        this.firebaseDb.list("/Fish_Data/NumberOfFish/").push(this.NumberOfFish.toString());
    };
    HomePage.prototype.update5 = function () {
        console.log(this.feed);
        if (this.NumberOfFish == "21-30" && this.AgeOfFish == "2 Months Old") {
            this.feed = "A";
        }
        else if (this.NumberOfFish == "1-10" && this.AgeOfFish == "1 Week Old") {
            this.feed = "B";
        }
        else if (this.NumberOfFish == "1-10" && this.AgeOfFish == "2 Weeks Old") {
            this.feed = "C";
        }
        else if (this.NumberOfFish == "1-10" && this.AgeOfFish == "3 Weeks Old") {
            this.feed = "D";
        }
        else if (this.NumberOfFish == "1-10" && this.AgeOfFish == "1 Month Old") {
            this.feed = "E";
        }
        else if (this.NumberOfFish == "1-10" && this.AgeOfFish == "1 and 1/2 Months Old") {
            this.feed = "F";
        }
        else if (this.NumberOfFish == "1-10" && this.AgeOfFish == "2 Months Old") {
            this.feed = "G";
        }
        else if (this.NumberOfFish == "11-20" && this.AgeOfFish == "1 Week Old") {
            this.feed = "H";
        }
        else if (this.NumberOfFish == "11-20" && this.AgeOfFish == "2 Weeks Old") {
            this.feed = "I";
        }
        else if (this.NumberOfFish == "11-20" && this.AgeOfFish == "3 Weeks Old") {
            this.feed = "J";
        }
        else if (this.NumberOfFish == "11-20" && this.AgeOfFish == "1 Month Old") {
            this.feed = "K";
        }
        else if (this.NumberOfFish == "11-20" && this.AgeOfFish == "1 and 1/2 Months Old") {
            this.feed = "L";
        }
        else if (this.NumberOfFish == "11-20" && this.AgeOfFish == "2 Months Old") {
            this.feed = "M";
        }
        else if (this.NumberOfFish == "21-30" && this.AgeOfFish == "1 Week Old") {
            this.feed = "N";
        }
        else if (this.NumberOfFish == "21-30" && this.AgeOfFish == "2 Weeks Old") {
            this.feed = "O";
        }
        else if (this.NumberOfFish == "21-30" && this.AgeOfFish == "3 Weeks Old") {
            this.feed = "P";
        }
        else if (this.NumberOfFish == "21-30" && this.AgeOfFish == "1 Month Old") {
            this.feed = "Q";
        }
        else if (this.NumberOfFish == "21-30" && this.AgeOfFish == "1 and 1/2 Months Old") {
            this.feed = "R";
        }
        console.log(this.feed);
        this.firebaseDb.list("/Fish_Data/Feed/").remove();
        //this.firebaseDb.list("/Fish_Data/Feed/").push(this.feed);
        //this.firebaseDb.list('/Fish_Data').update("Feed", {"FeedCode" : this.feed});
        this.firebaseDb.list('/Actuator_Status').update("Monitor", { "zFeedCode": this.feed });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var temp = this;
        setInterval(function () {
            temp.lineChartHome = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](temp.lineCanvasHome.nativeElement, {
                type: 'line',
                data: {
                    labels: temp.timeStamp,
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    datasets: [{
                            label: "Water Temperature",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(219,112,147,0.4)",
                            borderColor: "rgb(219,112,147)",
                            borderCapStyle: 'square',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(219,112,147)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueTemp,
                            //data: ['5','10','15','20','25'],  
                            spanGaps: true,
                        },
                        {
                            label: "Salinity",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(147,112,219,0.4)",
                            //borderColor: "#DC143C", // The main line color
                            borderColor: "rgb(147,112,219)",
                            borderCapStyle: 'square',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(147,112,219)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueSal,
                            //data: ['55','60','65','70','75'],
                            spanGaps: true,
                        },
                        /*         {
                        
                                  label: "Water Level",
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: "rgba(68, 80, 234,0.4)",
                                    //borderColor: "#DC143C", // The main line color
                                    borderColor: "rgb(36, 56, 89)",
                                    borderCapStyle: 'square',
                                    borderDash: [], // try [5, 15] for instance
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: "rgba(75,192,192,1)",
                                    pointBackgroundColor: "#fff",
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 8,
                                    pointHoverBackgroundColor: "rgb(37, 47, 168)",
                                    pointHoverBorderColor: "rgba(220,220,220,1)",
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 4,
                                    pointHitRadius: 10,
                                    data: temp.valueWtrlvl,
                                    //data: ['55','60','65','70','75'],
                                    spanGaps: true,
                                  }, */
                        {
                            label: "Acidity",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(46,139,87,0.4)",
                            //borderColor: "rgb(167, 105, 0)",
                            borderColor: "rgb(46,139,87)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(46,139,87)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valuePh,
                            //data: ['2','4','6','8','10'],
                            spanGaps: false,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
        }, 5000);
    };
    HomePage.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.ConfirmLogOut();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.ConfirmLogOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.ConfirmedLogOut;
                        _this.authProvider.logoutUser();
                        _this.navCtrl.setRoot('LoginPage');
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.ConfirmedLogOut = function () {
        var confirmed = this.alertCtrl.create({
            title: '',
            message: 'You have logged out!',
            buttons: [
                {
                    text: 'Done',
                    handler: function () {
                        console.log('Done clicked');
                    }
                }
            ]
        });
        confirmed.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvasHome'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvasHome", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n    <ion-icon name="home"></ion-icon>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="bg">\n  \n  <ion-title class="logo">\n  <br><br><br><br>\n  </ion-title>\n  <h4 class="center">MCU-BASED CONTROLLED ENVIRONMENT</h4>\n    <h4 class="center">FOR EUCHEUMA SEAWEEDS</h4>\n      <h4 class="center">TO PREVENT ICE-ICE DISEASE</h4>\n  \n  \n  <h4 class="center">Seaweeds To Be Monitored</h4>\n  <ion-list>\n  <ion-item>\n    <ion-label>Seaweeds</ion-label>\n    <ion-select [(ngModel)]="crop1" (ionChange)="change(crop1)">\n      \n      \n    <ion-option>Alvarezii</ion-option>\n      <ion-option>Eucheuma</ion-option>\n      <ion-option>Gracilaria</ion-option>\n      </ion-select>\n  </ion-item>\n  <!--\n  <ion-item>\n    <ion-label>Crop 2</ion-label>\n      <ion-select [(ngModel)]="crop2" (ionChange)="change2(crop2)">\n       \n      \n    <ion-option>Asparagus</ion-option>\n      <ion-option>Basil</ion-option>\n      <ion-option>Beans and Peas</ion-option>\n      <ion-option>Brocolli</ion-option>\n      <ion-option>Cabbage</ion-option>\n      <ion-option>Cauliflower</ion-option>\n    <ion-option>Celery</ion-option>\n      <ion-option>Cucumber</ion-option>\n      <ion-option>Eggplant</ion-option>\n      <ion-option>Lettuce</ion-option>\n      <ion-option>Mangold</ion-option>\n    <ion-option>Mint</ion-option>\n    <ion-option>Mustard</ion-option>\n    <ion-option>Okra</ion-option>\n      <ion-option>Parsley</ion-option>\n    <ion-option>Pechay</ion-option>\n      <ion-option>Peppers</ion-option>\n    <ion-option>Spinach</ion-option>\n    <ion-option>Strawberry</ion-option>\n    <ion-option>Sweet Corn</ion-option>\n      <ion-option>Tomato</ion-option>\n      </ion-select>\n  </ion-item>\n \n  <ion-item>\n    <ion-label>Crop 3</ion-label>\n      <ion-select [(ngModel)]="crop3" (ionChange)="change3(crop3)">\n        \n      \n    <ion-option>Asparagus</ion-option>\n      <ion-option>Basil</ion-option>\n      <ion-option>Beans and Peas</ion-option>\n      <ion-option>Brocolli</ion-option>\n      <ion-option>Cabbage</ion-option>\n      <ion-option>Cauliflower</ion-option>\n    <ion-option>Celery</ion-option>\n      <ion-option>Cucumber</ion-option>\n      <ion-option>Eggplant</ion-option>\n      <ion-option>Lettuce</ion-option>\n      <ion-option>Mangold</ion-option>\n    <ion-option>Mint</ion-option>\n    <ion-option>Mustard</ion-option>\n    <ion-option>Okra</ion-option>\n      <ion-option>Parsley</ion-option>\n    <ion-option>Pechay</ion-option>\n      <ion-option>Peppers</ion-option>\n    <ion-option>Spinach</ion-option>\n    <ion-option>Strawberry</ion-option>\n    <ion-option>Sweet Corn</ion-option>\n      <ion-option>Tomato</ion-option>\n      </ion-select>\n  </ion-item>\n-->\n  </ion-list>\n\n  <button class="right"  ion-button (click)="doConfirm()" disabled={{buttonDisabled}}>\n    <ion-icon name=\'checkmark\'></ion-icon>\n    Done\n  </button>\n  \n<!--\n  <h4 class="center">Fish To Be Monitored</h4>\n  <ion-list>\n  <ion-item>\n  <ion-label>Select Fish</ion-label>\n    <ion-select [(ngModel)]="fish" (ionChange)="changeFish(fish)">\n        <ion-option>Bangus</ion-option>\n        <ion-option>Tilapia</ion-option>\n        <ion-option>Bisugo</ion-option>\n        <ion-option>Hito</ion-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item>\n  <ion-label>Number of Fishes</ion-label>\n    <ion-select [(ngModel)]="NumberOfFish" (ionChange)="changeNumberOfFish(NumberOfFish)">\n        <ion-option>1-10</ion-option>\n        <ion-option>11-20</ion-option>\n        <ion-option>21-30</ion-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item>\n  <ion-label>Age of Fish</ion-label>\n    <ion-select [(ngModel)]="AgeOfFish" (ionChange)="changeAgeOfFish(AgeOfFish)">\n        <ion-option>1 Week Old</ion-option>\n        <ion-option>2 Weeks Old</ion-option>\n        <ion-option>3 Weeks Old</ion-option>\n    <ion-option>1 Month Old</ion-option>\n    <ion-option>1 and 1/2 Months Old</ion-option>\n    <ion-option>2 Months Old</ion-option>\n    </ion-select>\n  </ion-item>\n  \n  </ion-list>\n\n  <button class="right"  ion-button (click)="doConfirm2()" disabled={{buttonDisabled2}}>\n    <ion-icon name=\'checkmark\'></ion-icon>\n    Done\n  </button>\n-->\n\n  <br>\n  <br>\n  <br>\n\n  <div class="chart-containerHome">\n    <canvas #lineCanvasHome></canvas>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\home\home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		675,
		4
	],
	"../pages/control/control.module": [
		676,
		3
	],
	"../pages/login/login.module": [
		678,
		2
	],
	"../pages/reset-password/reset-password.module": [
		677,
		1
	],
	"../pages/signup/signup.module": [
		679,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(52);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






__WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"].defaults.global.defaultFontColor = 'black';
var MonitorPage = (function () {
    function MonitorPage(navCtrl, firebaseDb, alertCtrl, authProvider) {
        // this.temp_Statusbtn = true;
        // this.phUp_Statusbtn = true;
        // this.phDown_Statusbtn = false;
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseDb = firebaseDb;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.result = [];
        this.dates = [];
        this.timeStamp = [];
        this.valueTemp = [];
        this.valueSal = [];
        this.valuePh = [];
        this.Temperatures = [];
        this.salinity = "";
        this.temperature = "";
        this.acidity = "";
        this.sensor_salinity = "";
        this.sensor_temperature = "";
        this.sensor_acidity = "";
        this.cropName1 = "";
        this.cropName2 = "";
        this.cropName3 = "";
        this.Cooler_Status = "";
        this.Cooler_Status_2 = "";
        this.phDown_Status = "";
        this.phUp_Status = "";
        this.highest_acidity = "";
        this.lowest_acidity = "";
        this.highest_salinity = "";
        this.lowest_salinity = "";
        this.highest_temperature = "";
        this.lowest_temperature = "";
        this.ToggleCooler = false;
        this.ToggleCooler2 = false;
        this.TogglePhUp = false;
        this.TogglePhDown = false;
        this.firebaseDb.list('/Sea_Sensor_Data').valueChanges().subscribe(function (snapshots) {
            _this.arrData = snapshots;
            // this.sensor_humidity = this.arrData[0];
            // this.sensor_acidity = this.arrData[1];
            // this.sensor_temperature = this.arrData[2];
            // this.humidity = this.arrData[3];
            // this.acidity = this.arrData[4];
            // this.temperature = this.arrData[5];
            _this.sensor_acidity = _this.arrData[0];
            _this.sensor_salinity = _this.arrData[1];
            _this.sensor_temperature = _this.arrData[2];
            _this.acidity = _this.arrData[3];
            _this.highest_acidity = _this.arrData[4];
            _this.lowest_acidity = _this.arrData[5];
            _this.salinity = _this.arrData[6];
            _this.highest_salinity = _this.arrData[7];
            _this.lowest_salinity = _this.arrData[8];
            _this.temperature = _this.arrData[9];
            _this.highest_temperature = _this.arrData[10];
            _this.lowest_temperature = _this.arrData[11];
        });
        this.firebaseDb.list('/Sea_Data/Sea_Name').valueChanges().subscribe(function (snapshots) {
            _this.arrName = snapshots;
            _this.cropName1 = _this.arrName[0];
            _this.cropName2 = _this.arrName[1];
            _this.cropName3 = _this.arrName[2];
        });
        this.firebaseDb.list('/Actuator_Status/Monitor').valueChanges().subscribe(function (snapshots) {
            _this.arrStatus = snapshots;
            _this.ToggleCooler = _this.arrStatus[0];
            _this.ToggleCooler2 = _this.arrStatus[1];
            _this.TogglePhDown = _this.arrStatus[4];
            _this.TogglePhUp = _this.arrStatus[5];
        });
        var datem = "";
        var year = "";
        var month = "";
        var day = "";
        this.firebaseDb.list('Sea_Realtime_Data', function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (dates) {
            dates.map(function (date) {
                year = date.key;
                console.log(year);
                _this.firebaseDb.list('Sea_Realtime_Data/' + year, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                    return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                }).subscribe(function (dates) {
                    dates.map(function (date) {
                        month = date.key;
                        console.log(month);
                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                        }).subscribe(function (dates) {
                            dates.map(function (date) {
                                day = date.key;
                                console.log(day);
                                _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                                    return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                                }).subscribe(function (dates) {
                                    dates.map(function (date) {
                                        datem = date.key;
                                        console.log(datem);
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(1); }).valueChanges().subscribe(function (snapshots) {
                                            _this.dates = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.dates.push(key.Date_Complete);
                                            });
                                        });
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueTemp = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueTemp.push(key.Measured_Temp_C);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueSal = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueSal.push(key.Measured_Salinity);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        _this.firebaseDb.list('Sea_Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valuePh = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valuePh.push(key.Measured_PHLevel);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        /*this.firebaseDb.list('Realtime_Data', ref => ref.limitToLast(12)).snapshotChanges().map(actions =>{
          this.timeStamp = [];
          return actions.map(action => ({ key: action.key, ...action.payload.val()}));
        }).subscribe(dates => {
          dates.map(date => {
            this.timeStamp.push(date.key);
          });
        });*/
        /*this.firebaseDb.list('Sea_Realtime_Data', ref => ref.limitToLast(12)).valueChanges().subscribe(snapshots=>{
          this.valueTemp = [];
          this.valueSal = [];
          this.valuePh = [];
          this.result = snapshots;
          this.result.map(key => {
            this.valueTemp.push(key.Measured_Temp_C);
            this.valueSal.push(key.Measured_Sal);
            this.valuePh.push(key.Measured_PHLevel);
          });
        });*/
        /*this.firebaseDb.list("/Crop_Data/Crop_Name", { preserveSnapshot: true})
        .subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
            if(snapshot.key=="Optimal_Salinity"){
              this.salinityy = snapshot.val();
            }
          });
        });*/
        //console.log(this.timeStamp);
        //console.log(this.result);
        console.log(this.valueTemp);
        console.log(this.valueSal);
        console.log(this.valuePh);
    }
    MonitorPage.prototype.updateValues = function () {
        this.lineChart.update();
    };
    MonitorPage.prototype.ionViewDidLoad = function () {
        var temp = this;
        setInterval(function () {
            temp.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas.nativeElement, {
                type: 'line',
                data: {
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    labels: temp.timeStamp,
                    datasets: [{
                            label: "Temperature",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueTemp,
                            //data: ['5','10','15','20','25'],  
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 40,
                                    min: 0
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart2 = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas2.nativeElement, {
                type: 'line',
                data: {
                    labels: temp.timeStamp,
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    datasets: [{
                            label: "Salinity",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            //borderColor: "rgba(75,192,192,1)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueSal,
                            //data: ['55','60','65','70','75'],
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 50,
                                    min: 0
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart3 = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas3.nativeElement, {
                type: 'line',
                data: {
                    labels: temp.timeStamp,
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    datasets: [{
                            label: "Acidity",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valuePh,
                            //data: ['2','4','6','8','10'],
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 15,
                                    min: 0
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart.update();
            temp.lineChart2.update();
            temp.lineChart3.update();
        }, 5000);
    };
    MonitorPage.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.ConfirmLogOut();
                return [2 /*return*/];
            });
        });
    };
    MonitorPage.prototype.ConfirmLogOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.ConfirmedLogOut;
                        _this.authProvider.logoutUser();
                        _this.navCtrl.setRoot('LoginPage');
                    }
                }
            ]
        });
        confirm.present();
    };
    MonitorPage.prototype.ConfirmedLogOut = function () {
        var confirmed = this.alertCtrl.create({
            title: '',
            message: 'You have logged out!',
            buttons: [
                {
                    text: 'Done',
                    handler: function () {
                        console.log('Done clicked');
                    }
                }
            ]
        });
        confirmed.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], MonitorPage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas2'),
        __metadata("design:type", Object)
    ], MonitorPage.prototype, "lineCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas3'),
        __metadata("design:type", Object)
    ], MonitorPage.prototype, "lineCanvas3", void 0);
    MonitorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-monitor',template:/*ion-inline-start:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\monitor\monitor.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><ion-icon name="desktop"></ion-icon> Monitor</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n<ion-list>\n<ion-card class="monitor">\n  <ion-card-header  class="monitorBG">\n    <h1 class="card-title">Seaweeds Being<br> Monitored</h1>\n  </ion-card-header >\n  <ion-card-content class="monitorBG"> \n    <ion-grid>\n      <ion-row> \n        <ion-col col-7>\n          <ion-label>Seaweeds #1: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{cropName1}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Seaweeds #2: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{cropName2}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Seaweeds #3: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{cropName3}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n<ion-card class="temperature">  \n    <div class="card-params">\n      <ion-card-header class="temperature">\n        <h1 class="card-params">TEMPERATURE</h1> \n      </ion-card-header>\n      <ion-card-content class="temperature">\n        <ion-label class="measuredTemp" >{{sensor_temperature}}</ion-label>\n        \n          <div class="chart-containerTemp">\n            <canvas #lineCanvas></canvas>\n          </div>\n      </ion-card-content>\n    </div>\n</ion-card>\n\n<ion-card class="humidity">\n    <div class="card-params">\n      <ion-card-header class="humidity">\n        <h1 class="card-params">Salinity </h1 >\n      </ion-card-header>\n      <ion-card-content class="humidity">\n        <ion-label class="measuredHum"> {{sensor_salinity}}</ion-label>\n      \n          <div class="chart-containerHum">\n            <canvas #lineCanvas2></canvas>\n          </div>\n      </ion-card-content>\n    </div>\n</ion-card>\n\n<ion-card class="ph">\n    <div class="card-params">\n      <ion-card-header class="ph">\n        <h1 class="card-params">ACIDITY </h1 >\n      </ion-card-header>\n      <ion-card-content class="ph">\n        <ion-label class="measuredPh"> {{sensor_acidity}}</ion-label>\n           <div class="chart-containerPh">\n            <canvas #lineCanvas3></canvas>\n          </div>\n      </ion-card-content>\n    </div>\n</ion-card>\n</ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\monitor\monitor.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MonitorPage);
    return MonitorPage;
}());

//# sourceMappingURL=monitor.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, alertCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.ConfirmLogOut();
                return [2 /*return*/];
            });
        });
    };
    AboutPage.prototype.ConfirmLogOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.ConfirmedLogOut;
                        _this.authProvider.logoutUser();
                        _this.navCtrl.setRoot('LoginPage');
                    }
                }
            ]
        });
        confirm.present();
    };
    AboutPage.prototype.ConfirmedLogOut = function () {
        var confirmed = this.alertCtrl.create({
            title: '',
            message: 'You have logged out!',
            buttons: [
                {
                    text: 'Done',
                    handler: function () {
                        console.log('Done clicked');
                    }
                }
            ]
        });
        confirmed.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title><ion-icon name="information-circle"></ion-icon> About</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="AboutBG">\n  <ion-title class="Logo">\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n  </ion-title>\n      <p padding class="aboutText">\n        This Android Application is specifically designed for the MCU-Based Aquaponics System for Urban Farming. The system provides the optimal level of parameters for crops\' growth and chosen type of fish provided that the user selected the crops and the fish to be planted and monitored. The application also provides real-time monitoring of the system that can be found on the Monitor Tab in which the user will be able to see the level of parameters both in figures and graph.\n      </p>\n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ControlPage = (function () {
    function ControlPage(navCtrl, navParams, firebaseDb, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseDb = firebaseDb;
        this.alertCtrl = alertCtrl;
        this.sensor_humidity = "";
        this.sensor_temperature = "";
        this.sensor_acidity = "";
        this.humidity = "";
        this.temperature = "";
        this.acidity = "";
        this.sensor_temperature2 = "";
        this.sensor_acidity2 = "";
        this.setTemperature = "";
        //setTempDown = ""
        this.setAcidity = "";
        //setAcidityDown = ""
        //buttonDisabled = true;
        this.highest_acidity = "";
        this.lowest_acidity = "";
        this.highest_humidity = "";
        this.lowest_humidity = "";
        this.highest_temperature = "";
        this.lowest_temperature = "";
        this.setTemperature = "";
        this.setAcidity = "";
        this.ToggleWaterPump = false;
        this.ToggleFishFeeder = false;
        this.ToggleGrowLight = false;
        this.Toggleph = false;
        this.Toggledht = false;
        this.Togglelvl = false;
        this.Toggletemp = false;
        this.firebaseDb.list('/Sensor_Data').valueChanges().subscribe(function (snapshots) {
            _this.arrData = snapshots;
            _this.sensor_humidity = _this.arrData[1];
            _this.sensor_acidity = _this.arrData[2];
            _this.sensor_temperature = _this.arrData[3];
            _this.humidity = _this.arrData[5];
            _this.highest_humidity = _this.arrData[6];
            _this.lowest_humidity = _this.arrData[7];
            _this.acidity = _this.arrData[8];
            _this.highest_acidity = _this.arrData[9];
            _this.lowest_acidity = _this.arrData[10];
            _this.temperature = _this.arrData[11];
            _this.highest_temperature = _this.arrData[12];
            _this.lowest_temperature = _this.arrData[13];
            //this.setAcidity = this.arrData[6];
            //this.setTemperature = this.arrData[7];
        });
        this.firebaseDb.list('/Sensor_Data/Set').valueChanges().subscribe(function (snapshots) {
            _this.arrData = snapshots;
            _this.sensor_acidity2 = _this.arrData[0];
            _this.sensor_temperature2 = _this.arrData[1];
        });
        this.firebaseDb.list('/Actuator_Status/Monitor').valueChanges().subscribe(function (snapshots) {
            _this.arrStatus = snapshots;
            _this.ToggleGrowLight = _this.arrStatus[0];
            _this.ToggleWaterPump = _this.arrStatus[1];
            _this.ToggleFishFeeder = _this.arrStatus[2];
        });
        //
        this.firebaseDb.list('/Sensor_Status/Monitor').valueChanges().subscribe(function (snapshots) {
            _this.arrStatus = snapshots;
            _this.Toggleph = _this.arrStatus[1];
            _this.Toggledht = _this.arrStatus[0];
            _this.Togglelvl = _this.arrStatus[2];
            _this.Toggletemp = _this.arrStatus[3];
        });
        //
    }
    ControlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ControlPage');
    };
    ControlPage.prototype.notify = function () {
        this.firebaseDb.list("/Actuator_Status/").update('Monitor', { "Waterpump_Status": "" + this.ToggleWaterPump });
        this.firebaseDb.list("/Actuator_Status/").update('Monitor', { "Growlight_Status": "" + this.ToggleGrowLight });
        this.firebaseDb.list("/Actuator_Status/").update('Monitor', { "zFeedCode": "" + this.ToggleFishFeeder });
        this.firebaseDb.list("/Sensor_Status/").update('Monitor', { "ph_Status": "" + this.Toggleph });
        this.firebaseDb.list("/Sensor_Status/").update('Monitor', { "dht_Status": "" + this.Toggledht });
        this.firebaseDb.list("/Sensor_Status/").update('Monitor', { "wtrtemp_Status": "" + this.Toggletemp });
        this.firebaseDb.list("/Sensor_Status/").update('Monitor', { "wtrlvl_Status": "" + this.Togglelvl });
        console.log("Toggled 5: " + this.ToggleWaterPump);
        console.log("Toggled 6: " + this.ToggleGrowLight);
        console.log("Toggled 7: " + this.ToggleFishFeeder);
        console.log("Toggled 1: " + this.Toggleph);
        console.log("Toggled 2: " + this.Toggledht);
        console.log("Toggled 3: " + this.Toggletemp);
        console.log("Toggled 4: " + this.Togglelvl);
    };
    ControlPage.prototype.setTempUp = function () {
        this.sensor_temperature2 = '' + ((parseFloat(this.sensor_temperature2) + 0.5).toFixed(2));
    };
    ControlPage.prototype.setTempDown = function () {
        this.sensor_temperature2 = '' + ((parseFloat(this.sensor_temperature2) - 0.5).toFixed(2));
    };
    ControlPage.prototype.setPhUp = function () {
        this.sensor_acidity2 = '' + ((parseFloat(this.sensor_acidity2) + .1).toFixed(2));
    };
    ControlPage.prototype.setPhDown = function () {
        this.sensor_acidity2 = '' + ((parseFloat(this.sensor_acidity2) - .1).toFixed(2));
    };
    ControlPage.prototype.updateSet = function () {
        //this.firebaseDb.list("/Sensor_Data/").push(this.setAciditiy.toString());
        //this.firebaseDb.list("/Sensor_Data/").push(this.setTemperature.toString());
        /*this.firebaseDb.list('/Sensor_Data', ref => ref.limitToLast(1)).snapshotChanges().map(actions =>{
          return actions.map(action => ({ key: action.key, ...action.payload.val()}));
        }).subscribe(dates => {
          dates.map(date => {
            if (date.key() === "Set_Temperature"){
              
            }
          });
        });*/
        console.log(this.sensor_temperature2);
        this.firebaseDb.list('/Sensor_Data').update("Set", { "Set_Temperature": this.sensor_temperature2 });
        this.firebaseDb.list('/Sensor_Data').update("Set", { "Set_Acidity": this.sensor_acidity2 });
    };
    ControlPage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to set these changes?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.updateSet();
                        _this.Confirmed();
                    }
                }
            ]
        });
        confirm.present();
    };
    ControlPage.prototype.Confirmed = function () {
        var confirmed = this.alertCtrl.create({
            title: '',
            message: 'The changes have been set!',
            buttons: [
                {
                    text: 'Done',
                    handler: function () {
                        console.log('Done clicked');
                    }
                }
            ]
        });
        confirmed.present();
    };
    ControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-control',template:/*ion-inline-start:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\control\control.html"*/'<!--\n  Generated template for the ControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  <ion-title><ion-icon name="switch"></ion-icon> Control</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n  <ion-card class="temperatureControl">\n    <ion-card-header>\n      <h1>Temperature</h1>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p>Measured: {{sensor_temperature}} </p>\n      <p>Optimal: {{lowest_temperature}} - {{highest_temperature}}</p>\n      \n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card class="acidityControl">\n      <ion-card-header>\n        <h1>Acidity</h1>\n      </ion-card-header>\n  \n      <ion-card-content>\n        <p>Measured: {{sensor_acidity}} </p>\n        <p>Optimal: {{lowest_acidity}} - {{highest_acidity}} </p>\n        \n      </ion-card-content>\n  \n    </ion-card>\n\n  </ion-list>\n\n\n  <ion-card class="status">\n  <ion-card-content>\n  <ion-list>\n    <ion-label>\n      Actuator Status\n    </ion-label>\n      \n    \n      <ion-item>\n        <ion-label>Power LED Light</ion-label>\n        <ion-toggle [(ngModel)]="ToggleGrowLight" (ionChange)="notify()"></ion-toggle>\n      </ion-item>\n\n\n     \n\n      <ion-item>\n        <ion-label>Water Pump OFF</ion-label>\n        <ion-toggle [(ngModel)]="ToggleWaterPump" (ionChange)="notify()"></ion-toggle>\n      </ion-item>\n	  \n	  <ion-item>\n        <ion-label>Fish Feeder</ion-label>\n        <ion-toggle [(ngModel)]="ToggleFishFeeder" (ionChange)="notify()"></ion-toggle>\n      </ion-item>\n\n  </ion-list>\n  </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class="sensorstatus">\n  <ion-card-content>\n  <ion-list>\n    <ion-label>\n      Sensor Status\n    </ion-label>\n     \n      <ion-item>\n        <ion-label>PH Sensor Status</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="Toggleph" (ionChange)="notify()"></ion-toggle>\n      </ion-item>\n\n     \n\n      <ion-item>\n        <ion-label>DHT Sensor Status</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="Toggledht" (ionChange)="notify()"></ion-toggle>\n      </ion-item>\n    \n    <ion-item>\n        <ion-label>Water Temperature Sensor Status</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="Toggletemp" (ionChange)="notify()"></ion-toggle>\n      </ion-item>\n\n\n    <ion-item>\n        <ion-label>Water Level Sensor Status</ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="Togglelvl" (ionChange)="notify()"></ion-toggle>\n      </ion-item>\n\n  </ion-list>\n  </ion-card-content>\n  </ion-card>\n\n\n  <button class="submitControl"  ion-button (click)="doConfirm()" disabled={{buttonDisabled}}>\n    <ion-icon name=\'checkmark\'></ion-icon>\n    Done\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\control\control.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ControlPage);
    return ControlPage;
}());

//# sourceMappingURL=control.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(455);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_monitor_monitor__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_control_control__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_report_report__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_firebase_firebase__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_global_vars_global_vars__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { GlobalVars } from '../providers/globalVars';


var firebaseConfig = {
    /* apiKey: "AIzaSyDSMrX2C715GsFpEC06emJ8LT1fGi0mil0",
     authDomain: "hvccareeee.firebaseapp.com",
     databaseURL: "https://hvccareeee.firebaseio.com",
     projectId: "hvccareeee",
     storageBucket: "hvccareeee.appspot.com",
     messagingSenderId: "179047373339"
     */
    apiKey: "AIzaSyCfOVS4fKzugZEv2o26Ir8rjkH2XwayfJo",
    authDomain: "hvccare-5b4bc.firebaseapp.com",
    databaseURL: "https://hvccare-5b4bc.firebaseio.com",
    projectId: "hvccare-5b4bc",
    storageBucket: "hvccare-5b4bc.appspot.com",
    messagingSenderId: "706149028538"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_monitor_monitor__["a" /* MonitorPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_control_control__["a" /* ControlPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/control/control.module#ControlPageModule', name: 'ControlPage', segment: 'control', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_monitor_monitor__["a" /* MonitorPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_control_control__["a" /* ControlPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
                //GlobalVars,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                                .auth()
                                .createUserWithEmailAndPassword(email, password)];
                    case 1:
                        newUser = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                                .database()
                                .ref("/userProfile/" + newUser.uid + "/email")
                                .set(email)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newUser];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 273,
	"./af.js": 273,
	"./ar": 274,
	"./ar-dz": 275,
	"./ar-dz.js": 275,
	"./ar-kw": 276,
	"./ar-kw.js": 276,
	"./ar-ly": 277,
	"./ar-ly.js": 277,
	"./ar-ma": 278,
	"./ar-ma.js": 278,
	"./ar-sa": 279,
	"./ar-sa.js": 279,
	"./ar-tn": 280,
	"./ar-tn.js": 280,
	"./ar.js": 274,
	"./az": 281,
	"./az.js": 281,
	"./be": 282,
	"./be.js": 282,
	"./bg": 283,
	"./bg.js": 283,
	"./bn": 284,
	"./bn.js": 284,
	"./bo": 285,
	"./bo.js": 285,
	"./br": 286,
	"./br.js": 286,
	"./bs": 287,
	"./bs.js": 287,
	"./ca": 288,
	"./ca.js": 288,
	"./cs": 289,
	"./cs.js": 289,
	"./cv": 290,
	"./cv.js": 290,
	"./cy": 291,
	"./cy.js": 291,
	"./da": 292,
	"./da.js": 292,
	"./de": 293,
	"./de-at": 294,
	"./de-at.js": 294,
	"./de-ch": 295,
	"./de-ch.js": 295,
	"./de.js": 293,
	"./dv": 296,
	"./dv.js": 296,
	"./el": 297,
	"./el.js": 297,
	"./en-au": 298,
	"./en-au.js": 298,
	"./en-ca": 299,
	"./en-ca.js": 299,
	"./en-gb": 300,
	"./en-gb.js": 300,
	"./en-ie": 301,
	"./en-ie.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./eo": 303,
	"./eo.js": 303,
	"./es": 304,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es.js": 304,
	"./et": 306,
	"./et.js": 306,
	"./eu": 307,
	"./eu.js": 307,
	"./fa": 308,
	"./fa.js": 308,
	"./fi": 309,
	"./fi.js": 309,
	"./fo": 310,
	"./fo.js": 310,
	"./fr": 311,
	"./fr-ca": 312,
	"./fr-ca.js": 312,
	"./fr-ch": 313,
	"./fr-ch.js": 313,
	"./fr.js": 311,
	"./fy": 314,
	"./fy.js": 314,
	"./gd": 315,
	"./gd.js": 315,
	"./gl": 316,
	"./gl.js": 316,
	"./gom-latn": 317,
	"./gom-latn.js": 317,
	"./he": 318,
	"./he.js": 318,
	"./hi": 319,
	"./hi.js": 319,
	"./hr": 320,
	"./hr.js": 320,
	"./hu": 321,
	"./hu.js": 321,
	"./hy-am": 322,
	"./hy-am.js": 322,
	"./id": 323,
	"./id.js": 323,
	"./is": 324,
	"./is.js": 324,
	"./it": 325,
	"./it.js": 325,
	"./ja": 326,
	"./ja.js": 326,
	"./jv": 327,
	"./jv.js": 327,
	"./ka": 328,
	"./ka.js": 328,
	"./kk": 329,
	"./kk.js": 329,
	"./km": 330,
	"./km.js": 330,
	"./kn": 331,
	"./kn.js": 331,
	"./ko": 332,
	"./ko.js": 332,
	"./ky": 333,
	"./ky.js": 333,
	"./lb": 334,
	"./lb.js": 334,
	"./lo": 335,
	"./lo.js": 335,
	"./lt": 336,
	"./lt.js": 336,
	"./lv": 337,
	"./lv.js": 337,
	"./me": 338,
	"./me.js": 338,
	"./mi": 339,
	"./mi.js": 339,
	"./mk": 340,
	"./mk.js": 340,
	"./ml": 341,
	"./ml.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./pa-in": 351,
	"./pa-in.js": 351,
	"./pl": 352,
	"./pl.js": 352,
	"./pt": 353,
	"./pt-br": 354,
	"./pt-br.js": 354,
	"./pt.js": 353,
	"./ro": 355,
	"./ro.js": 355,
	"./ru": 356,
	"./ru.js": 356,
	"./sd": 357,
	"./sd.js": 357,
	"./se": 358,
	"./se.js": 358,
	"./si": 359,
	"./si.js": 359,
	"./sk": 360,
	"./sk.js": 360,
	"./sl": 361,
	"./sl.js": 361,
	"./sq": 362,
	"./sq.js": 362,
	"./sr": 363,
	"./sr-cyrl": 364,
	"./sr-cyrl.js": 364,
	"./sr.js": 363,
	"./ss": 365,
	"./ss.js": 365,
	"./sv": 366,
	"./sv.js": 366,
	"./sw": 367,
	"./sw.js": 367,
	"./ta": 368,
	"./ta.js": 368,
	"./te": 369,
	"./te.js": 369,
	"./tet": 370,
	"./tet.js": 370,
	"./th": 371,
	"./th.js": 371,
	"./tl-ph": 372,
	"./tl-ph.js": 372,
	"./tlh": 373,
	"./tlh.js": 373,
	"./tr": 374,
	"./tr.js": 374,
	"./tzl": 375,
	"./tzl.js": 375,
	"./tzm": 376,
	"./tzm-latn": 377,
	"./tzm-latn.js": 377,
	"./tzm.js": 376,
	"./uk": 378,
	"./uk.js": 378,
	"./ur": 379,
	"./ur.js": 379,
	"./uz": 380,
	"./uz-latn": 381,
	"./uz-latn.js": 381,
	"./uz.js": 380,
	"./vi": 382,
	"./vi.js": 382,
	"./x-pseudo": 383,
	"./x-pseudo.js": 383,
	"./yo": 384,
	"./yo.js": 384,
	"./zh-cn": 385,
	"./zh-cn.js": 385,
	"./zh-hk": 386,
	"./zh-hk.js": 386,
	"./zh-tw": 387,
	"./zh-tw.js": 387
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 625;

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_monitor_monitor__ = __webpack_require__(431);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        //const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Monitor', component: __WEBPACK_IMPORTED_MODULE_5__pages_monitor_monitor__["a" /* MonitorPage */] },
        ];
        // if (user) {
        //   this.rootPage = 'LoginPage';
        //   unsubscribe();
        //   // this.pages = [
        //   //   { title: 'Home', component: HomePage },
        //   //   { title: 'Monitor', component: MonitorPage },
        //   //   { title: 'Control', component: ControlPage },
        //   //   { title: 'About', component: AboutPage }
        //   // ];  
        // } else {
        //   this.rootPage = 'LoginPage';
        //   unsubscribe();
        // }
    }
    ;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Christian Matthew\SeaweedsApp\src\app\app.html"*/'<ion-menu  [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title class="center"><img src="assets/imgs/sea1.png" height="30%" width="50%"/></ion-title>\n        <ion-title class="Sibol"><br>Seaweeds App</ion-title>\n        \n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list class="lists">\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n      \n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Christian Matthew\SeaweedsApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(52);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






__WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"].defaults.global.defaultFontColor = 'black';
var ReportPage = (function () {
    function ReportPage(navCtrl, firebaseDb, alertCtrl, authProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseDb = firebaseDb;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.result = [];
        this.dates = [];
        this.timeStamp = [];
        this.valueTemp = [];
        this.valueHum = [];
        this.valuePh = [];
        this.valueWtrlvl = [];
        this.valueenvi = [];
        this.Temperatures = [];
        this.humidity = "";
        this.temperature = "";
        this.acidity = "";
        this.Wtrlvl = "";
        this.envi = "";
        this.sensor_envi = "";
        this.sensor_humidity = "";
        this.sensor_temperature = "";
        this.sensor_acidity = "";
        this.sensor_Wtrlvl = "";
        this.cropName1 = "";
        this.cropName2 = "";
        this.cropName3 = "";
        this.fishName = "";
        this.AgeOfFish = "";
        this.NumberOfFish = "";
        this.MorningTemp = "";
        this.MorningPH = "";
        this.MorningWtrlvl = "";
        this.MorningHumidity = "";
        this.MorningEnvi = "";
        this.MorningTime = "";
        this.MorningDate = "";
        this.MorningCompleteDate = "";
        this.AftTemp = "";
        this.AftPH = "";
        this.AftWtrlvl = "";
        this.AftHumidity = "";
        this.AftEnvi = "";
        this.AftTime = "";
        this.AftDate = "";
        this.AftCompleteDate = "";
        this.EveCompleteDate = "";
        this.EveTemp = "";
        this.EvePH = "";
        this.EveWtrlvl = "";
        this.EveHumidity = "";
        this.EveEnvi = "";
        this.EveTime = "";
        this.EveDate = "";
        this.DawnTemp = "";
        this.DawnPH = "";
        this.DawnWtrlvl = "";
        this.DawnHumidity = "";
        this.DawnEnvi = "";
        this.DawnTime = "";
        this.DawnDate = "";
        this.DawnCompleteDate = "";
        //Cooler_Status = ""
        // Cooler_Status_2 = ""
        this.phDown_Status = "";
        this.phUp_Status = "";
        this.highest_acidity = "";
        this.lowest_acidity = "";
        this.highest_humidity = "";
        this.lowest_humidity = "";
        this.highest_temperature = "";
        this.lowest_temperature = "";
        this.highest_Wtrlvl = "";
        this.lowest_Wtrlvl = "";
        // this.temp_Statusbtn = true;
        // this.phUp_Statusbtn = true;
        // this.phDown_Statusbtn = false;
        // this.ToggleCooler = false;
        //this.ToggleCooler2 = false;
        this.TogglePhUp = false;
        this.TogglePhDown = false;
        this.firebaseDb.list('/Sensor_Data').valueChanges().subscribe(function (snapshots) {
            _this.arrData = snapshots;
            _this.sensor_envi = _this.arrData[0];
            _this.sensor_humidity = _this.arrData[1];
            _this.sensor_acidity = _this.arrData[2];
            _this.sensor_temperature = _this.arrData[3];
            _this.sensor_Wtrlvl = _this.arrData[4];
            _this.humidity = _this.arrData[5];
            _this.highest_humidity = _this.arrData[6];
            _this.lowest_humidity = _this.arrData[7];
            _this.acidity = _this.arrData[8];
            _this.highest_acidity = _this.arrData[9];
            _this.lowest_acidity = _this.arrData[10];
            _this.temperature = _this.arrData[11];
            _this.highest_temperature = _this.arrData[12];
            _this.lowest_temperature = _this.arrData[13];
            _this.Wtrlvl = _this.arrData[14];
            _this.highest_Wtrlvl = _this.arrData[15];
            _this.lowest_Wtrlvl = _this.arrData[16];
        });
        this.firebaseDb.list('/Crop_Data/Crop_Name').valueChanges().subscribe(function (snapshots) {
            _this.arrName = snapshots;
            _this.cropName1 = _this.arrName[0];
            _this.cropName2 = _this.arrName[1];
            _this.cropName3 = _this.arrName[2];
        });
        this.firebaseDb.list('/Fish_Data/Fish_Name').valueChanges().subscribe(function (snapshots) {
            _this.arrFish = snapshots;
            _this.fishName = _this.arrFish[0];
        });
        this.firebaseDb.list('/Fish_Data/Fish_AgeOfFish').valueChanges().subscribe(function (snapshots) {
            _this.arrFish1 = snapshots;
            _this.AgeOfFish = _this.arrFish1[0];
        });
        this.firebaseDb.list('/Fish_Data/NumberOfFish').valueChanges().subscribe(function (snapshots) {
            _this.arrFish2 = snapshots;
            _this.NumberOfFish = _this.arrFish2[0];
        });
        this.firebaseDb.list('/Afternoon_Data').valueChanges().subscribe(function (snapshots) {
            _this.arrAfternoon = snapshots;
            _this.AftCompleteDate = _this.arrAfternoon[0];
            _this.AftDate = _this.arrAfternoon[1];
            _this.AftEnvi = _this.arrAfternoon[2];
            _this.AftHumidity = _this.arrAfternoon[3];
            _this.AftPH = _this.arrAfternoon[4];
            _this.AftTemp = _this.arrAfternoon[5];
            _this.AftWtrlvl = _this.arrAfternoon[6];
            _this.AftTime = _this.arrAfternoon[7];
        });
        this.firebaseDb.list('/Morning_Data').valueChanges().subscribe(function (snapshots) {
            _this.arrMorning = snapshots;
            _this.MorningCompleteDate = _this.arrMorning[0];
            _this.MorningDate = _this.arrMorning[1];
            _this.MorningEnvi = _this.arrMorning[2];
            _this.MorningHumidity = _this.arrMorning[3];
            _this.MorningPH = _this.arrMorning[4];
            _this.MorningTemp = _this.arrMorning[5];
            _this.MorningWtrlvl = _this.arrMorning[6];
            _this.MorningTime = _this.arrMorning[7];
        });
        this.firebaseDb.list('/Evening_Data').valueChanges().subscribe(function (snapshots) {
            _this.arrEvening = snapshots;
            _this.EveCompleteDate = _this.arrEvening[0];
            _this.EveDate = _this.arrEvening[1];
            _this.EveEnvi = _this.arrEvening[2];
            _this.EveHumidity = _this.arrEvening[3];
            _this.EvePH = _this.arrEvening[4];
            _this.EveTemp = _this.arrEvening[5];
            _this.EveWtrlvl = _this.arrEvening[6];
            _this.EveTime = _this.arrEvening[7];
        });
        this.firebaseDb.list('/Dawn_Data').valueChanges().subscribe(function (snapshots) {
            _this.arrDawn = snapshots;
            _this.AftCompleteDate = _this.arrDawn[0];
            _this.DawnDate = _this.arrDawn[1];
            _this.DawnEnvi = _this.arrDawn[2];
            _this.DawnHumidity = _this.arrDawn[3];
            _this.DawnPH = _this.arrDawn[4];
            _this.DawnTemp = _this.arrDawn[5];
            _this.DawnWtrlvl = _this.arrDawn[6];
            _this.DawnTime = _this.arrDawn[7];
        });
        this.firebaseDb.list('/Actuator_Status/Monitor').valueChanges().subscribe(function (snapshots) {
            _this.arrStatus = snapshots;
            // this.ToggleCooler= this.arrStatus[0];
            // this.ToggleCooler2 = this.arrStatus[1];
            _this.TogglePhDown = _this.arrStatus[4];
            _this.TogglePhUp = _this.arrStatus[5];
        });
        var datem = "";
        var year = "";
        var month = "";
        var day = "";
        this.firebaseDb.list('Realtime_Data', function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        }).subscribe(function (dates) {
            dates.map(function (date) {
                year = date.key;
                console.log(year);
                _this.firebaseDb.list('Realtime_Data/' + year, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                    return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                }).subscribe(function (dates) {
                    dates.map(function (date) {
                        month = date.key;
                        console.log(month);
                        _this.firebaseDb.list('Realtime_Data/' + year + '/' + month, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                        }).subscribe(function (dates) {
                            dates.map(function (date) {
                                day = date.key;
                                console.log(day);
                                _this.firebaseDb.list('Realtime_Data/' + year + '/' + month + '/' + day, function (ref) { return ref.limitToLast(1); }).snapshotChanges().map(function (actions) {
                                    return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
                                }).subscribe(function (dates) {
                                    dates.map(function (date) {
                                        datem = date.key;
                                        console.log(datem);
                                        _this.firebaseDb.list('Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(1); }).valueChanges().subscribe(function (snapshots) {
                                            _this.dates = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.dates.push(key.Date_Complete);
                                            });
                                        });
                                        _this.firebaseDb.list('Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueTemp = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueTemp.push(key.Measured_Temp_C);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        _this.firebaseDb.list('Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueHum = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueHum.push(key.Measured_Humidity);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        _this.firebaseDb.list('Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valuePh = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valuePh.push(key.Measured_PHLevel);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        _this.firebaseDb.list('Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueWtrlvl = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueWtrlvl.push(key.Measured_Waterlvl);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                        _this.firebaseDb.list('Realtime_Data/' + year + '/' + month + '/' + day + '/' + datem, function (ref) { return ref.limitToLast(5); }).valueChanges().subscribe(function (snapshots) {
                                            _this.valueenvi = [];
                                            _this.timeStamp = [];
                                            _this.result = snapshots;
                                            _this.result.map(function (key) {
                                                _this.valueenvi.push(key.Measured_Environment);
                                                _this.timeStamp.push(key.Time);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        /*this.firebaseDb.list('Realtime_Data', ref => ref.limitToLast(12)).snapshotChanges().map(actions =>{
          this.timeStamp = [];
          return actions.map(action => ({ key: action.key, ...action.payload.val()}));
        }).subscribe(dates => {
          dates.map(date => {
            this.timeStamp.push(date.key);
          });
        });*/
        /*this.firebaseDb.list('Realtime_Data', ref => ref.limitToLast(12)).valueChanges().subscribe(snapshots=>{
          this.valueTemp = [];
          this.valueHum = [];
          this.valuePh = [];
          this.valueWtrlvl = [];
          this.valueenvi = [];
          this.result = snapshots;
          this.result.map(key => {
            this.valueTemp.push(key.Measured_Temp_C);
            this.valueHum.push(key.Measured_Humidity);
            this.valuePh.push(key.Measured_PHLevel);
            this.valueEnvi.push(key.Measured_Environment);
            this.valueWtrlvl.push(key.Measured_Waterlvl);
          });
        });*/
        /*this.firebaseDb.list("/Crop_Data/Crop_Name", { preserveSnapshot: true})
        .subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
            if(snapshot.key=="Optimal_Humidity"){
              this.humidity = snapshot.val();
            }
          });
        });*/
        //console.log(this.timeStamp);
        //console.log(this.result);
        console.log(this.valueTemp);
        console.log(this.valueHum);
        console.log(this.valuePh);
        console.log(this.valueWtrlvl);
        console.log(this.valueenvi);
    }
    ReportPage.prototype.updateValues = function () {
        this.lineChart.update();
    };
    ReportPage.prototype.ionViewDidLoad = function () {
        var temp = this;
        setInterval(function () {
            temp.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas.nativeElement, {
                type: 'line',
                data: {
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    labels: temp.timeStamp,
                    datasets: [{
                            label: "Temperature",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueTemp,
                            //data: ['5','10','15','20','25'],  
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 50,
                                    min: 0
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart2 = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas2.nativeElement, {
                type: 'line',
                data: {
                    labels: temp.timeStamp,
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    datasets: [{
                            label: "Humidity",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            //borderColor: "rgba(75,192,192,1)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueHum,
                            //data: ['55','60','65','70','75'],
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 100,
                                    min: 50
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart3 = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas3.nativeElement, {
                type: 'line',
                data: {
                    labels: temp.timeStamp,
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    datasets: [{
                            label: "Acidity",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valuePh,
                            //data: ['2','4','6','8','10'],
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 15,
                                    min: 0
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart5 = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas5.nativeElement, {
                type: 'line',
                data: {
                    labels: temp.timeStamp,
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    datasets: [{
                            label: "Greenhouse Temperature",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueenvi,
                            //data: ['2','4','6','8','10'],
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 60,
                                    min: 10
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart4 = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](temp.lineCanvas4.nativeElement, {
                type: 'line',
                data: {
                    //labels: ['Jan','Feb','Mar','Aprl','May'],
                    labels: temp.timeStamp,
                    datasets: [{
                            label: "Water Level",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            borderColor: "rgb(0,0,0)",
                            borderCapStyle: 'round',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "rgb(0,0,0)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: temp.valueWtrlvl,
                            //data: ['5','10','15','20','25'],  
                            spanGaps: false,
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    max: 30,
                                    min: 0
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: temp.dates,
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            temp.lineChart.update();
            temp.lineChart2.update();
            temp.lineChart3.update();
            temp.lineChart4.update();
            temp.lineChart5.update();
        }, 5000);
    };
    ReportPage.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.ConfirmLogOut();
                return [2 /*return*/];
            });
        });
    };
    ReportPage.prototype.ConfirmLogOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.ConfirmedLogOut;
                        _this.authProvider.logoutUser();
                        _this.navCtrl.setRoot('LoginPage');
                    }
                }
            ]
        });
        confirm.present();
    };
    ReportPage.prototype.ConfirmedLogOut = function () {
        var confirmed = this.alertCtrl.create({
            title: '',
            message: 'You have logged out!',
            buttons: [
                {
                    text: 'Done',
                    handler: function () {
                        console.log('Done clicked');
                    }
                }
            ]
        });
        confirmed.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ReportPage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas2'),
        __metadata("design:type", Object)
    ], ReportPage.prototype, "lineCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas3'),
        __metadata("design:type", Object)
    ], ReportPage.prototype, "lineCanvas3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas4'),
        __metadata("design:type", Object)
    ], ReportPage.prototype, "lineCanvas4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas5'),
        __metadata("design:type", Object)
    ], ReportPage.prototype, "lineCanvas5", void 0);
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\report\report.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><ion-icon name="paper"></ion-icon> Reports</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n<ion-list>\n<ion-card class="monitor">\n  <ion-card-header  class="monitorBG">\n    <h1 class="card-title">MORNING</h1>\n  </ion-card-header >\n  <ion-card-content class="monitorBG"> \n    <ion-grid>\n      <ion-row> \n        <ion-col col-7>\n          <ion-label>Date: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{MorningDate}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Time: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{MorningTime}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{MorningEnvi}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Humidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{MorningHumidity}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Acidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{MorningPH}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{MorningTemp}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Level: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{MorningWtrlvl}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n<ion-card class="monitor">\n  <ion-card-header  class="monitorBG">\n    <h1 class="card-title">AFTERNOON</h1>\n  </ion-card-header >\n  <ion-card-content class="monitorBG"> \n    <ion-grid>\n      <ion-row> \n        <ion-col col-7>\n          <ion-label>Date: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{AftDate}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Time: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{AftTime}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{AftEnvi}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Humidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{AftHumidity}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Acidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{AftPH}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{AftTemp}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Level: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{AftWtrlvl}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n<ion-card class="monitor">\n  <ion-card-header  class="monitorBG">\n    <h1 class="card-title">EVENING</h1>\n  </ion-card-header >\n  <ion-card-content class="monitorBG"> \n    <ion-grid>\n      <ion-row> \n        <ion-col col-7>\n          <ion-label>Date: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{EveDate}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Time: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{EveTime}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{EveEnvi}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Humidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{EveHumidity}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Acidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{EvePH}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{EveTemp}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Level: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{EveWtrlvl}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n<ion-card class="monitor">\n  <ion-card-header  class="monitorBG">\n    <h1 class="card-title">DAWN</h1>\n  </ion-card-header >\n  <ion-card-content class="monitorBG"> \n    <ion-grid>\n      <ion-row> \n        <ion-col col-7>\n          <ion-label>Date: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{DawnDate}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Time: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{DawnTime}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{DawnEnvi}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Greenhouse Humidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{DawnHumidity}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Acidity: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{DawnPH}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Temperature: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{DawnTemp}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <ion-label>Water Level: </ion-label>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-label>{{DawnWtrlvl}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n</ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Christian Matthew\SeaweedsApp\src\pages\report\report.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(http) {
        this.http = http;
        console.log('Hello FirebaseProvider Provider');
    }
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalVarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalVarsProvider = (function () {
    function GlobalVarsProvider(http) {
        this.http = http;
        console.log('Hello GlobalVarsProvider Provider');
    }
    GlobalVarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalVarsProvider);
    return GlobalVarsProvider;
}());

//# sourceMappingURL=global-vars.js.map

/***/ })

},[435]);
//# sourceMappingURL=main.js.map