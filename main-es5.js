function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_model_error_msg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/model/error-msg */
    "./src/app/shared/model/error-msg.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_mocky_candy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/mocky/candy */
    "./src/app/shared/mocky/candy.ts");
    /* harmony import */


    var _shared_reactive_forms_validate_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/reactive-forms/validate-checkbox */
    "./src/app/shared/reactive-forms/validate-checkbox.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_component_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/component/input-checkbox/input-checkbox.component */
    "./src/app/shared/component/input-checkbox/input-checkbox.component.ts");
    /* harmony import */


    var _shared_component_msg_msg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/component/msg/msg.component */
    "./src/app/shared/component/msg/msg.component.ts");

    function AppComponent_app_msg_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-msg", 17);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", 1)("msg", ctx_r0.error.name);
      }
    }

    function AppComponent_app_msg_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-msg", 17);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", 1)("msg", ctx_r1.error.color);
      }
    }

    function AppComponent_app_msg_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-msg", 17);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", 1)("msg", ctx_r2.error.candy);
      }
    }

    function AppComponent_app_msg_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-msg", 17);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", 1)("msg", ctx_r3.error.jobs);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "successfully": a0
      };
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(fb) {
        _classCallCheck(this, AppComponent);

        this.fb = fb;
        this.error = new _shared_model_error_msg__WEBPACK_IMPORTED_MODULE_1__["ErrorMsg"]();
        this.actionSave = false;
        this.form = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
          age: [65, []],
          color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
          candy: [_shared_mocky_candy__WEBPACK_IMPORTED_MODULE_3__["candy"], [_shared_reactive_forms_validate_checkbox__WEBPACK_IMPORTED_MODULE_4__["validateCheckbox"]]],
          jobs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]]
        });
      }

      _createClass(AppComponent, [{
        key: "validate",
        value: function validate(controlName, field) {
          if (this.form.get(controlName).errors && this.form.get(controlName).errors.required) {
            this.error[controlName] = "".concat(field, " \xE9 um campo obrigat\xF3rio");
          } else if (this.form.get(controlName).errors && this.form.get(controlName).errors.minlength) {
            this.error[controlName] = "".concat(field, " \xE9 no m\xEDnimo ").concat(this.form.get(controlName).errors.minlength.requiredLength, " caracteres");
          } else if (this.form.get(controlName).errors && this.form.get(controlName).errors.maxlength) {
            this.error[controlName] = "".concat(field, " \xE9 no m\xEDnimo ").concat(this.form.get(controlName).errors.maxlength.requiredLength, " caracteres");
          }
        }
      }, {
        key: "send",
        value: function send() {
          var _this = this;

          this.error = new _shared_model_error_msg__WEBPACK_IMPORTED_MODULE_1__["ErrorMsg"]();
          var fieldBr;

          for (var _i = 0, _Object$keys = Object.keys(this.form.value); _i < _Object$keys.length; _i++) {
            var field = _Object$keys[_i];

            switch (field) {
              case 'name':
                {
                  fieldBr = 'Nome';
                  break;
                }

              case 'color':
                {
                  fieldBr = 'Cor';
                  break;
                }

              case 'candy':
                {
                  fieldBr = 'Doce';
                  break;
                }

              case 'jobs':
                {
                  fieldBr = 'Jobs';
                  break;
                }
            }

            this.validate(field, fieldBr);
          }

          if (this.form.valid) {
            this.actionSave = true;
            setTimeout(function () {
              return _this.actionSave = false;
            }, 1000);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 34,
      vars: 12,
      consts: [[1, "container-fluid", 3, "formGroup", "ngSubmit"], [1, "container"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], [3, "type", "msg", 4, "ngIf"], ["type", "range", "min", "18", "max", "130", "formControlName", "age"], ["for", "inputColor"], ["id", "inputColor", "list", "color", "formControlName", "color"], ["id", "color"], ["value", "Azul"], ["value", "Laranja"], ["value", "Preto"], ["formControlName", "candy"], ["for", "jobs"], ["id", "jobs", "rows", "4", "cols", "50", "formControlName", "jobs"], ["type", "submit", "value", "enviar", 3, "disabled"], [1, "saved", 3, "ngClass", "type", "msg"], [3, "type", "msg"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.send();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_msg_5_Template, 1, 2, "app-msg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Idade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cor favorita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "datalist", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_app_msg_20_Template, 1, 2, "app-msg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Doces favoritos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-input-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_app_msg_25_Template, 1, 2, "app-msg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Jobs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_app_msg_30_Template, 1, 2, "app-msg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-msg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.form.get("age").value + " anos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.candy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.jobs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.actionSave);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.actionSave === true))("type", 2)("msg", "Salvado com sucesso!");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _shared_component_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["InputCheckboxComponent"], _shared_component_msg_msg_component__WEBPACK_IMPORTED_MODULE_7__["MsgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: flex;\n  font-size: 13px;\n  width: 300px;\n  margin-top: 20px;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-bottom: 30px;\n  width: 100%;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .saved[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -170px;\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .saved.successfully[_ngcontent-%COMP%] {\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n  right: 20px !important;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 5px;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:after {\n  content: \"*\";\n  color: red;\n  font-weight: bolder;\n  margin-left: 5px;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 8pt;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   app-input-checkbox[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  cursor: pointer;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]) {\n  height: 25px;\n  border-bottom: 2px solid #000;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n  position: relative;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]):focus {\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n  border-bottom: 2px solid #17a2b8;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background: none;\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n  background: #17a2b8;\n  color: #FFF;\n  border: 1px solid #17a2b8;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 25px;\n  background: rgba(211, 211, 211, 0.4);\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 250ms;\n  -webkit-transition: opacity 250ms;\n  transition: opacity 250ms;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  background: #17a2b8;\n  cursor: pointer;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  background: #17a2b8;\n  cursor: pointer;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHJlcG9zaXRvcmlvc1xccmVhY3RpdmUtZm9ybXMtYW5ndWxhcjkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0NOO0FEQ007RUFDRSxxQ0FBQTtFQUFBLDZCQUFBO0VBQ0Esc0JBQUE7QUNDUjtBREdJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRE47QURHTTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FES0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0FDSk47QURPSTs7OztFQUlFLFVBQUE7RUFDQSxlQUFBO0FDTE47QURRSTs7RUFFRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFFNOztFQUNFLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSxnQ0FBQTtBQ0xSO0FEU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNQTjtBRFNNO0VBQ0UscUNBQUE7RUFBQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDUFI7QURXSTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDVE47QURXTTtFQUNFLFVBQUE7QUNUUjtBRFlNO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDVlI7QURhTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDWFI7QURlSTtFQUNFLFlBQUE7QUNiTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5zYXZlZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogLTE3MHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDI1MG1zIGFsbDtcclxuXHJcbiAgICAgICYuc3VjY2Vzc2Z1bGx5IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDI1MG1zIGFsbDtcclxuICAgICAgICByaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPmxhYmVsIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnKic7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB0O1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1pbnB1dC1jaGVja2JveCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCxcclxuICAgIGlucHV0OmZvY3VzLFxyXG4gICAgdGV4dGFyZWEsXHJcbiAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QsXHJcbiAgICBpbnB1dDpub3QoW3R5cGU9J3N1Ym1pdCddKSB7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMjUwbXMgYWxsO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDI1MG1zIGFsbDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE3YTJiODtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDI1MG1zIGFsbDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAyNTBtcyBhbGw7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE3YTJiODtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTdhMmI4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT0ncmFuZ2UnXSB7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjQpO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMjUwbXM7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXM7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxN2EyYjg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE3YTJiODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXItZmx1aWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciAuc2F2ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0xNzBweDtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAyNTBtcyBhbGw7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgLnNhdmVkLnN1Y2Nlc3NmdWxseSB7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMjUwbXMgYWxsO1xuICByaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci1mbHVpZCAuY29udGFpbmVyID4gbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciA+IGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgc3Ryb25nIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDhwdDtcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciBhcHAtaW5wdXQtY2hlY2tib3gge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgaW5wdXQsXG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgaW5wdXQ6Zm9jdXMsXG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgdGV4dGFyZWEsXG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgc2VsZWN0LFxuLmNvbnRhaW5lci1mbHVpZCAuY29udGFpbmVyIGlucHV0Om5vdChbdHlwZT1zdWJtaXRdKSB7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMjUwbXMgYWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgc2VsZWN0OmZvY3VzLFxuLmNvbnRhaW5lci1mbHVpZCAuY29udGFpbmVyIGlucHV0Om5vdChbdHlwZT1zdWJtaXRdKTpmb2N1cyB7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMjUwbXMgYWxsO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE3YTJiODtcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMjUwbXMgYWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAyNTBtcyBhbGw7XG4gIGJhY2tncm91bmQ6ICMxN2EyYjg7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTdhMmI4O1xufVxuLmNvbnRhaW5lci1mbHVpZCAuY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyNTBtcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcztcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_component_msg_msg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/component/msg/msg.component */
    "./src/app/shared/component/msg/msg.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_component_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/component/input-checkbox/input-checkbox.component */
    "./src/app/shared/component/input-checkbox/input-checkbox.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_component_msg_msg_component__WEBPACK_IMPORTED_MODULE_3__["MsgComponent"], _shared_component_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["InputCheckboxComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_component_msg_msg_component__WEBPACK_IMPORTED_MODULE_3__["MsgComponent"], _shared_component_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["InputCheckboxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/component/input-checkbox/input-checkbox.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/component/input-checkbox/input-checkbox.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: InputCheckboxComponent */

  /***/
  function srcAppSharedComponentInputCheckboxInputCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputCheckboxComponent", function () {
      return InputCheckboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "invalid": a0
      };
    };

    function InputCheckboxComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputCheckboxComponent_ng_container_0_Template_input_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var checkbox_r5 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.setChecked(checkbox_r5.value, _r6.checked);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var checkbox_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r4.error))("id", checkbox_r5.value)("value", checkbox_r5.value)("checked", checkbox_r5.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", checkbox_r5.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](checkbox_r5.label);
      }
    }

    var InputCheckboxComponent =
    /*#__PURE__*/
    function () {
      function InputCheckboxComponent() {
        _classCallCheck(this, InputCheckboxComponent);

        this.onChangeCb = function () {};

        this.onTouchedCb = function () {};
      }

      _createClass(InputCheckboxComponent, [{
        key: "writeValue",
        value: function writeValue(checkboxes) {
          this.checkboxes = checkboxes;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCb = fn;
          this.error = false;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCb = fn;
        }
      }, {
        key: "setChecked",
        value: function setChecked(value, checked) {
          this.checkboxes.map(function (res) {
            if (res.value === value) {
              res.checked = checked;
            }
          });
          this.error = false;
          this.onChangeCb(this.checkboxes);
        }
      }, {
        key: "selectOrDeselect",
        value: function selectOrDeselect(checked) {
          this.checkboxes.map(function (res) {
            res.checked = checked;
          });
          this.onChangeCb(this.checkboxes);
        }
      }]);

      return InputCheckboxComponent;
    }();

    InputCheckboxComponent.ɵfac = function InputCheckboxComponent_Factory(t) {
      return new (t || InputCheckboxComponent)();
    };

    InputCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputCheckboxComponent,
      selectors: [["app-input-checkbox"]],
      inputs: {
        error: "error"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return InputCheckboxComponent;
        }),
        multi: true
      }])],
      decls: 6,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [1, "container-options"], [3, "click"], [1, "container"], ["type", "checkbox", 3, "ngClass", "id", "value", "checked", "click"], ["selectedCheckbox", ""], [3, "for"]],
      template: function InputCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputCheckboxComponent_ng_container_0_Template, 6, 8, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputCheckboxComponent_Template_label_click_2_listener($event) {
            return ctx.selectOrDeselect(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Marcar todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputCheckboxComponent_Template_label_click_4_listener($event) {
            return ctx.selectOrDeselect(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Desmarcar todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.checkboxes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-bottom: 8px;\n}\n.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 9px;\n  color: #071723;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  all: unset;\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  background: #17a2b8;\n  border-radius: 4px;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:after {\n  content: \"\u2714\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: #FFFFFF;\n  font-size: 10px;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background: palette-color(\"actions\", \"hover\");\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   input.disabled[_ngcontent-%COMP%] {\n  background: palette-color(\"actions\", \"disabled\");\n}\n.container[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  background: palette-color(\"actions\", \"invalid\");\n}\n.container-options[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  color: #17a2b8;\n  font-weight: bold;\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n}\n.container-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  color: #1a8595;\n  -webkit-transition: ease-in 250ms all;\n  transition: ease-in 250ms all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC1jaGVja2JveC9pbnB1dC1jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC1jaGVja2JveC9DOlxccmVwb3NpdG9yaW9zXFxyZWFjdGl2ZS1mb3Jtcy1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRcXGlucHV0LWNoZWNrYm94XFxpbnB1dC1jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QURFRjtBQ0FFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURFSjtBQ0NFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBRENKO0FDRU07RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREFSO0FDSUk7RUFDRSw2Q0FBQTtFQUNBLGVBQUE7QURGTjtBQ0tJO0VBQ0UsZ0RBQUE7QURITjtBQ01JO0VBQ0UsK0NBQUE7QURKTjtBQ1VBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FEUEY7QUNTRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRFBKO0FDU0k7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBRFBOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC1jaGVja2JveC9pbnB1dC1jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY29udGFpbmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBjb2xvcjogIzA3MTcyMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciBpbnB1dCB7XG4gIGFsbDogdW5zZXQ7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzE3YTJiODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNvbnRhaW5lciBpbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoXCJhY3Rpb25zXCIsIFwiaG92ZXJcIik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgaW5wdXQuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKFwiYWN0aW9uc1wiLCBcImRpc2FibGVkXCIpO1xufVxuLmNvbnRhaW5lciBpbnB1dC5pbnZhbGlkIHtcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcihcImFjdGlvbnNcIiwgXCJpbnZhbGlkXCIpO1xufVxuXG4uY29udGFpbmVyLW9wdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyLW9wdGlvbnMgbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMxN2EyYjg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDI1MG1zIGFsbDtcbn1cbi5jb250YWluZXItb3B0aW9ucyBsYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMWE4NTk1O1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDI1MG1zIGFsbDtcbn0iLCIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBjb2xvcjogIzA3MTcyMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGFsbDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMxN2EyYjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuXHJcbiAgICAmOmNoZWNrZWQge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnXFwwMDI3MTQnO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignYWN0aW9ucycsICdob3ZlcicpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ2FjdGlvbnMnLCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdhY3Rpb25zJywgJ2ludmFsaWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyLW9wdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzE3YTJiODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAyNTBtcyBhbGw7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMWE4NTk1O1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDI1MG1zIGFsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-checkbox',
          templateUrl: './input-checkbox.component.html',
          styleUrls: ['./input-checkbox.component.scss'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return InputCheckboxComponent;
            }),
            multi: true
          }]
        }]
      }], function () {
        return [];
      }, {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/component/msg/msg.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/component/msg/msg.component.ts ***!
    \*******************************************************/

  /*! exports provided: MsgComponent */

  /***/
  function srcAppSharedComponentMsgMsgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MsgComponent", function () {
      return MsgComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "info": a0,
        "error": a1,
        "success": a2
      };
    };

    var MsgComponent =
    /*#__PURE__*/
    function () {
      function MsgComponent() {
        _classCallCheck(this, MsgComponent);
      }

      _createClass(MsgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MsgComponent;
    }();

    MsgComponent.ɵfac = function MsgComponent_Factory(t) {
      return new (t || MsgComponent)();
    };

    MsgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MsgComponent,
      selectors: [["app-msg"]],
      inputs: {
        msg: "msg",
        type: "type"
      },
      decls: 2,
      vars: 6,
      consts: [[3, "ngClass"]],
      template: function MsgComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.type === 0, ctx.type === 1, ctx.type === 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".info[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  color: #FFF;\n}\n\n.error[_ngcontent-%COMP%] {\n  background: #d83333;\n  color: #FFF;\n}\n\n.success[_ngcontent-%COMP%] {\n  background: #2a802a;\n  color: #FFF;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 20px;\n  text-align: center;\n  margin-top: 10px;\n  font-size: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9tc2cvQzpcXHJlcG9zaXRvcmlvc1xccmVhY3RpdmUtZm9ybXMtYW5ndWxhcjkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50XFxtc2dcXG1zZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9tc2cvbXNnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9tc2cvbXNnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8ge1xyXG4gIGJhY2tncm91bmQ6ICMxN2EyYjg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgYmFja2dyb3VuZDogI2Q4MzMzMztcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IHJnYig0MiwgMTI4LCA0Mik7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuXHJcbiIsIi5pbmZvIHtcbiAgYmFja2dyb3VuZDogIzE3YTJiODtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5lcnJvciB7XG4gIGJhY2tncm91bmQ6ICNkODMzMzM7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICMyYTgwMmE7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-msg',
          templateUrl: './msg.component.html',
          styleUrls: ['./msg.component.scss']
        }]
      }], function () {
        return [];
      }, {
        msg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/mocky/candy.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/mocky/candy.ts ***!
    \***************************************/

  /*! exports provided: candy */

  /***/
  function srcAppSharedMockyCandyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "candy", function () {
      return candy;
    });

    var candy = [{
      label: 'Brigadeiro',
      value: 'brigadeiro',
      checked: false
    }, {
      label: 'Wafer c/ doce de leite',
      value: 'wafer',
      checked: false
    }, {
      label: 'Torta de morango',
      value: 'pie',
      checked: false
    }, {
      label: 'Bomba de Chocolate',
      value: 'bombaChocolate',
      checked: false
    }];
    /***/
  },

  /***/
  "./src/app/shared/model/error-msg.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/model/error-msg.ts ***!
    \*******************************************/

  /*! exports provided: ErrorMsg */

  /***/
  function srcAppSharedModelErrorMsgTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMsg", function () {
      return ErrorMsg;
    });

    var ErrorMsg = function ErrorMsg() {
      _classCallCheck(this, ErrorMsg);
    };
    /***/

  },

  /***/
  "./src/app/shared/reactive-forms/validate-checkbox.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/reactive-forms/validate-checkbox.ts ***!
    \************************************************************/

  /*! exports provided: validateCheckbox */

  /***/
  function srcAppSharedReactiveFormsValidateCheckboxTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateCheckbox", function () {
      return validateCheckbox;
    });

    function validateCheckbox(control) {
      var counter = 0;
      control.value.map(function (res) {
        if (res.checked === false) {
          counter++;
        }
      });
      return counter === control.value.length ? {
        required: true
      } : null;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\repositorios\reactive-forms-angular9\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map