/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from 'ionic-angular/module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from 'ionic-angular/components/app/app';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from 'ionic-angular/gestures/gesture-config';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import26 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import27 from '@angular/forms/src/form_builder';
import * as import28 from 'ionic-angular/components/action-sheet/action-sheet';
import * as import29 from 'ionic-angular/components/alert/alert';
import * as import30 from 'ionic-angular/util/events';
import * as import31 from 'ionic-angular/util/form';
import * as import32 from 'ionic-angular/util/haptic';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/util/keyboard';
import * as import35 from 'ionic-angular/components/loading/loading';
import * as import36 from '@angular/common/src/location/location';
import * as import37 from 'ionic-angular/components/menu/menu-controller';
import * as import38 from 'ionic-angular/components/modal/modal';
import * as import39 from 'ionic-angular/components/picker/picker';
import * as import40 from 'ionic-angular/components/popover/popover';
import * as import41 from 'ionic-angular/components/tap-click/tap-click';
import * as import42 from 'ionic-angular/components/toast/toast';
import * as import43 from 'ionic-angular/translation/translate';
import * as import44 from 'ionic-angular/transitions/transition-controller';
import * as import45 from '@ionic/storage/dist/es5/storage';
import * as import46 from '../providers/auth';
import * as import47 from '../providers/getFirms';
import * as import48 from '@angular/core/src/di/injector';
import * as import49 from '../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import50 from '../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import51 from '../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import52 from '../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import53 from '../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import54 from '../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import55 from '../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import56 from '../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import57 from './app.component.ngfactory';
import * as import58 from '../pages/login-page/login-page.ngfactory';
import * as import59 from '../pages/firms/firms.ngfactory';
import * as import60 from '../pages/report/report.ngfactory';
import * as import61 from '../pages/old-reports/old-reports.ngfactory';
import * as import62 from '@angular/core/src/application_tokens';
import * as import63 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import64 from '@angular/platform-browser/src/dom/events/key_events';
import * as import65 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import66 from '@angular/core/src/zone/ng_zone';
import * as import67 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import68 from './app.component';
import * as import69 from '@angular/common/src/location/platform_location';
import * as import70 from '@angular/common/src/location/location_strategy';
import * as import71 from 'ionic-angular/navigation/url-serializer';
import * as import72 from 'ionic-angular/navigation/deep-linker';
import * as import73 from 'ionic-angular/platform/query-params';
import * as import74 from 'ionic-angular/platform/platform-registry';
import * as import75 from 'ionic-angular/platform/platform';
import * as import76 from 'ionic-angular/config/config';
import * as import77 from 'ionic-angular/config/mode-registry';
import * as import78 from 'ionic-angular/transitions/transition-registry';
import * as import79 from '@angular/core/src/console';
import * as import80 from '@angular/core/src/i18n/tokens';
import * as import81 from '@angular/core/src/error_handler';
import * as import82 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import83 from '@angular/platform-browser/src/dom/animation_driver';
import * as import84 from '@angular/core/src/render/api';
import * as import85 from '@angular/core/src/security';
import * as import86 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import87 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import88 from '@angular/http/src/interfaces';
import * as import89 from '@angular/http/src/http';
import * as import90 from 'ionic-angular/components/app/app-root';
import * as import91 from '@angular/core/src/i18n/tokens';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _InternalFormsSharedModule_4:import6.InternalFormsSharedModule;
  _FormsModule_5:import7.FormsModule;
  _ReactiveFormsModule_6:import7.ReactiveFormsModule;
  _IonicModule_7:import8.IonicModule;
  _AppModule_8:import1.AppModule;
  __LOCALE_ID_9:any;
  __NgLocalization_10:import9.NgLocaleLocalization;
  _ErrorHandler_11:any;
  _ConfigToken_12:any;
  _UrlToken_13:any;
  _QueryParams_14:any;
  _PlatformConfigToken_15:any;
  _UserAgentToken_16:any;
  _NavigatorPlatformToken_17:any;
  _DocumentDirToken_18:any;
  _DocLangToken_19:any;
  _Platform_20:any;
  _Config_21:any;
  _App_22:import10.App;
  _APP_INITIALIZER_23:any[];
  _ApplicationInitStatus_24:import11.ApplicationInitStatus;
  _Testability_25:import12.Testability;
  _ApplicationRef__26:import13.ApplicationRef_;
  __ApplicationRef_27:any;
  __Compiler_28:import14.Compiler;
  __APP_ID_29:any;
  __DOCUMENT_30:any;
  __HAMMER_GESTURE_CONFIG_31:import15.IonicGestureConfig;
  __EVENT_MANAGER_PLUGINS_32:any[];
  __EventManager_33:import16.EventManager;
  __DomSharedStylesHost_34:import17.DomSharedStylesHost;
  __AnimationDriver_35:any;
  __DomRootRenderer_36:import18.DomRootRenderer_;
  __RootRenderer_37:any;
  __DomSanitizer_38:import19.DomSanitizerImpl;
  __Sanitizer_39:any;
  __ViewUtils_40:import20.ViewUtils;
  __IterableDiffers_41:any;
  __KeyValueDiffers_42:any;
  __SharedStylesHost_43:any;
  __Title_44:import21.Title;
  __BrowserXhr_45:import22.BrowserXhr;
  __ResponseOptions_46:import23.BaseResponseOptions;
  __XSRFStrategy_47:any;
  __XHRBackend_48:import24.XHRBackend;
  __RequestOptions_49:import25.BaseRequestOptions;
  __Http_50:any;
  __RadioControlRegistry_51:import26.RadioControlRegistry;
  __FormBuilder_52:import27.FormBuilder;
  __AppRootToken_53:any;
  __DeepLinkConfigToken_54:any;
  __ActionSheetController_55:import28.ActionSheetController;
  __AlertController_56:import29.AlertController;
  __Events_57:import30.Events;
  __Form_58:import31.Form;
  __Haptic_59:import32.Haptic;
  __GestureController_60:import33.GestureController;
  __Keyboard_61:import34.Keyboard;
  __LoadingController_62:import35.LoadingController;
  __LocationStrategy_63:any;
  __Location_64:import36.Location;
  __MenuController_65:import37.MenuController;
  __ModalController_66:import38.ModalController;
  __PickerController_67:import39.PickerController;
  __PopoverController_68:import40.PopoverController;
  __TapClick_69:import41.TapClick;
  __ToastController_70:import42.ToastController;
  __Translate_71:import43.Translate;
  __TransitionController_72:import44.TransitionController;
  __UrlSerializer_73:any;
  __DeepLinker_74:any;
  __Storage_75:import45.Storage;
  __Auth_76:import46.Auth;
  __FirmService_77:import47.FirmService;
  __TRANSLATIONS_FORMAT_78:any;
  constructor(parent:import48.Injector) {
    super(parent,[
      import49.ActionSheetCmpNgFactory,
      import50.AlertCmpNgFactory,
      import51.IonicAppNgFactory,
      import52.LoadingCmpNgFactory,
      import53.ModalCmpNgFactory,
      import54.PickerCmpNgFactory,
      import55.PopoverCmpNgFactory,
      import56.ToastCmpNgFactory,
      import57.MyAppNgFactory,
      import57.MyAppNgFactory,
      import58.LoginPageNgFactory,
      import59.FirmsPageNgFactory,
      import60.ReportsPageNgFactory,
      import61.OldReportsNgFactory,
      import51.IonicAppNgFactory
    ]
    ,[import51.IonicAppNgFactory]);
  }
  get _LOCALE_ID_9():any {
    if ((this.__LOCALE_ID_9 == (null as any))) { (this.__LOCALE_ID_9 = (null as any)); }
    return this.__LOCALE_ID_9;
  }
  get _NgLocalization_10():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == (null as any))) { (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9)); }
    return this.__NgLocalization_10;
  }
  get _ApplicationRef_27():any {
    if ((this.__ApplicationRef_27 == (null as any))) { (this.__ApplicationRef_27 = this._ApplicationRef__26); }
    return this.__ApplicationRef_27;
  }
  get _Compiler_28():import14.Compiler {
    if ((this.__Compiler_28 == (null as any))) { (this.__Compiler_28 = new import14.Compiler()); }
    return this.__Compiler_28;
  }
  get _APP_ID_29():any {
    if ((this.__APP_ID_29 == (null as any))) { (this.__APP_ID_29 = import62._appIdRandomProviderFactory()); }
    return this.__APP_ID_29;
  }
  get _DOCUMENT_30():any {
    if ((this.__DOCUMENT_30 == (null as any))) { (this.__DOCUMENT_30 = import4._document()); }
    return this.__DOCUMENT_30;
  }
  get _HAMMER_GESTURE_CONFIG_31():import15.IonicGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_31 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_31 = new import15.IonicGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_31;
  }
  get _EVENT_MANAGER_PLUGINS_32():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_32 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_32 = [
      new import63.DomEventsPlugin(),
      new import64.KeyEventsPlugin(),
      new import65.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_31)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_32;
  }
  get _EventManager_33():import16.EventManager {
    if ((this.__EventManager_33 == (null as any))) { (this.__EventManager_33 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_32,this.parent.get(import66.NgZone))); }
    return this.__EventManager_33;
  }
  get _DomSharedStylesHost_34():import17.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_34 == (null as any))) { (this.__DomSharedStylesHost_34 = new import17.DomSharedStylesHost(this._DOCUMENT_30)); }
    return this.__DomSharedStylesHost_34;
  }
  get _AnimationDriver_35():any {
    if ((this.__AnimationDriver_35 == (null as any))) { (this.__AnimationDriver_35 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_35;
  }
  get _DomRootRenderer_36():import18.DomRootRenderer_ {
    if ((this.__DomRootRenderer_36 == (null as any))) { (this.__DomRootRenderer_36 = new import18.DomRootRenderer_(this._DOCUMENT_30,this._EventManager_33,this._DomSharedStylesHost_34,this._AnimationDriver_35)); }
    return this.__DomRootRenderer_36;
  }
  get _RootRenderer_37():any {
    if ((this.__RootRenderer_37 == (null as any))) { (this.__RootRenderer_37 = import67._createConditionalRootRenderer(this._DomRootRenderer_36,this.parent.get(import67.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_37;
  }
  get _DomSanitizer_38():import19.DomSanitizerImpl {
    if ((this.__DomSanitizer_38 == (null as any))) { (this.__DomSanitizer_38 = new import19.DomSanitizerImpl()); }
    return this.__DomSanitizer_38;
  }
  get _Sanitizer_39():any {
    if ((this.__Sanitizer_39 == (null as any))) { (this.__Sanitizer_39 = this._DomSanitizer_38); }
    return this.__Sanitizer_39;
  }
  get _ViewUtils_40():import20.ViewUtils {
    if ((this.__ViewUtils_40 == (null as any))) { (this.__ViewUtils_40 = new import20.ViewUtils(this._RootRenderer_37,this._APP_ID_29,this._Sanitizer_39)); }
    return this.__ViewUtils_40;
  }
  get _IterableDiffers_41():any {
    if ((this.__IterableDiffers_41 == (null as any))) { (this.__IterableDiffers_41 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_41;
  }
  get _KeyValueDiffers_42():any {
    if ((this.__KeyValueDiffers_42 == (null as any))) { (this.__KeyValueDiffers_42 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_42;
  }
  get _SharedStylesHost_43():any {
    if ((this.__SharedStylesHost_43 == (null as any))) { (this.__SharedStylesHost_43 = this._DomSharedStylesHost_34); }
    return this.__SharedStylesHost_43;
  }
  get _Title_44():import21.Title {
    if ((this.__Title_44 == (null as any))) { (this.__Title_44 = new import21.Title()); }
    return this.__Title_44;
  }
  get _BrowserXhr_45():import22.BrowserXhr {
    if ((this.__BrowserXhr_45 == (null as any))) { (this.__BrowserXhr_45 = new import22.BrowserXhr()); }
    return this.__BrowserXhr_45;
  }
  get _ResponseOptions_46():import23.BaseResponseOptions {
    if ((this.__ResponseOptions_46 == (null as any))) { (this.__ResponseOptions_46 = new import23.BaseResponseOptions()); }
    return this.__ResponseOptions_46;
  }
  get _XSRFStrategy_47():any {
    if ((this.__XSRFStrategy_47 == (null as any))) { (this.__XSRFStrategy_47 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_47;
  }
  get _XHRBackend_48():import24.XHRBackend {
    if ((this.__XHRBackend_48 == (null as any))) { (this.__XHRBackend_48 = new import24.XHRBackend(this._BrowserXhr_45,this._ResponseOptions_46,this._XSRFStrategy_47)); }
    return this.__XHRBackend_48;
  }
  get _RequestOptions_49():import25.BaseRequestOptions {
    if ((this.__RequestOptions_49 == (null as any))) { (this.__RequestOptions_49 = new import25.BaseRequestOptions()); }
    return this.__RequestOptions_49;
  }
  get _Http_50():any {
    if ((this.__Http_50 == (null as any))) { (this.__Http_50 = import5.httpFactory(this._XHRBackend_48,this._RequestOptions_49)); }
    return this.__Http_50;
  }
  get _RadioControlRegistry_51():import26.RadioControlRegistry {
    if ((this.__RadioControlRegistry_51 == (null as any))) { (this.__RadioControlRegistry_51 = new import26.RadioControlRegistry()); }
    return this.__RadioControlRegistry_51;
  }
  get _FormBuilder_52():import27.FormBuilder {
    if ((this.__FormBuilder_52 == (null as any))) { (this.__FormBuilder_52 = new import27.FormBuilder()); }
    return this.__FormBuilder_52;
  }
  get _AppRootToken_53():any {
    if ((this.__AppRootToken_53 == (null as any))) { (this.__AppRootToken_53 = import68.MyApp); }
    return this.__AppRootToken_53;
  }
  get _DeepLinkConfigToken_54():any {
    if ((this.__DeepLinkConfigToken_54 == (null as any))) { (this.__DeepLinkConfigToken_54 = (null as any)); }
    return this.__DeepLinkConfigToken_54;
  }
  get _ActionSheetController_55():import28.ActionSheetController {
    if ((this.__ActionSheetController_55 == (null as any))) { (this.__ActionSheetController_55 = new import28.ActionSheetController(this._App_22)); }
    return this.__ActionSheetController_55;
  }
  get _AlertController_56():import29.AlertController {
    if ((this.__AlertController_56 == (null as any))) { (this.__AlertController_56 = new import29.AlertController(this._App_22)); }
    return this.__AlertController_56;
  }
  get _Events_57():import30.Events {
    if ((this.__Events_57 == (null as any))) { (this.__Events_57 = new import30.Events()); }
    return this.__Events_57;
  }
  get _Form_58():import31.Form {
    if ((this.__Form_58 == (null as any))) { (this.__Form_58 = new import31.Form()); }
    return this.__Form_58;
  }
  get _Haptic_59():import32.Haptic {
    if ((this.__Haptic_59 == (null as any))) { (this.__Haptic_59 = new import32.Haptic(this._Platform_20)); }
    return this.__Haptic_59;
  }
  get _GestureController_60():import33.GestureController {
    if ((this.__GestureController_60 == (null as any))) { (this.__GestureController_60 = new import33.GestureController(this._App_22)); }
    return this.__GestureController_60;
  }
  get _Keyboard_61():import34.Keyboard {
    if ((this.__Keyboard_61 == (null as any))) { (this.__Keyboard_61 = new import34.Keyboard(this._Config_21,this._Form_58,this.parent.get(import66.NgZone))); }
    return this.__Keyboard_61;
  }
  get _LoadingController_62():import35.LoadingController {
    if ((this.__LoadingController_62 == (null as any))) { (this.__LoadingController_62 = new import35.LoadingController(this._App_22)); }
    return this.__LoadingController_62;
  }
  get _LocationStrategy_63():any {
    if ((this.__LocationStrategy_63 == (null as any))) { (this.__LocationStrategy_63 = import8.provideLocationStrategy(this.parent.get(import69.PlatformLocation),this.parent.get(import70.APP_BASE_HREF,(null as any)),this._Config_21)); }
    return this.__LocationStrategy_63;
  }
  get _Location_64():import36.Location {
    if ((this.__Location_64 == (null as any))) { (this.__Location_64 = new import36.Location(this._LocationStrategy_63)); }
    return this.__Location_64;
  }
  get _MenuController_65():import37.MenuController {
    if ((this.__MenuController_65 == (null as any))) { (this.__MenuController_65 = new import37.MenuController()); }
    return this.__MenuController_65;
  }
  get _ModalController_66():import38.ModalController {
    if ((this.__ModalController_66 == (null as any))) { (this.__ModalController_66 = new import38.ModalController(this._App_22)); }
    return this.__ModalController_66;
  }
  get _PickerController_67():import39.PickerController {
    if ((this.__PickerController_67 == (null as any))) { (this.__PickerController_67 = new import39.PickerController(this._App_22)); }
    return this.__PickerController_67;
  }
  get _PopoverController_68():import40.PopoverController {
    if ((this.__PopoverController_68 == (null as any))) { (this.__PopoverController_68 = new import40.PopoverController(this._App_22)); }
    return this.__PopoverController_68;
  }
  get _TapClick_69():import41.TapClick {
    if ((this.__TapClick_69 == (null as any))) { (this.__TapClick_69 = new import41.TapClick(this._Config_21,this._App_22,this.parent.get(import66.NgZone))); }
    return this.__TapClick_69;
  }
  get _ToastController_70():import42.ToastController {
    if ((this.__ToastController_70 == (null as any))) { (this.__ToastController_70 = new import42.ToastController(this._App_22)); }
    return this.__ToastController_70;
  }
  get _Translate_71():import43.Translate {
    if ((this.__Translate_71 == (null as any))) { (this.__Translate_71 = new import43.Translate()); }
    return this.__Translate_71;
  }
  get _TransitionController_72():import44.TransitionController {
    if ((this.__TransitionController_72 == (null as any))) { (this.__TransitionController_72 = new import44.TransitionController(this._Config_21)); }
    return this.__TransitionController_72;
  }
  get _UrlSerializer_73():any {
    if ((this.__UrlSerializer_73 == (null as any))) { (this.__UrlSerializer_73 = import71.setupUrlSerializer(this._DeepLinkConfigToken_54)); }
    return this.__UrlSerializer_73;
  }
  get _DeepLinker_74():any {
    if ((this.__DeepLinker_74 == (null as any))) { (this.__DeepLinker_74 = import72.setupDeepLinker(this._App_22,this._UrlSerializer_73,this._Location_64)); }
    return this.__DeepLinker_74;
  }
  get _Storage_75():import45.Storage {
    if ((this.__Storage_75 == (null as any))) { (this.__Storage_75 = new import45.Storage()); }
    return this.__Storage_75;
  }
  get _Auth_76():import46.Auth {
    if ((this.__Auth_76 == (null as any))) { (this.__Auth_76 = new import46.Auth(this._Http_50,this._Storage_75)); }
    return this.__Auth_76;
  }
  get _FirmService_77():import47.FirmService {
    if ((this.__FirmService_77 == (null as any))) { (this.__FirmService_77 = new import47.FirmService(this._Http_50)); }
    return this.__FirmService_77;
  }
  get _TRANSLATIONS_FORMAT_78():any {
    if ((this.__TRANSLATIONS_FORMAT_78 == (null as any))) { (this.__TRANSLATIONS_FORMAT_78 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_78;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
    this._FormsModule_5 = new import7.FormsModule();
    this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
    this._IonicModule_7 = new import8.IonicModule();
    this._AppModule_8 = new import1.AppModule();
    this._ErrorHandler_11 = import4.errorHandler();
    this._ConfigToken_12 = (null as any);
    this._UrlToken_13 = import8.provideLocationHref();
    this._QueryParams_14 = import73.setupQueryParams(this._UrlToken_13);
    this._PlatformConfigToken_15 = import74.providePlatformConfigs();
    this._UserAgentToken_16 = import8.provideUserAgent();
    this._NavigatorPlatformToken_17 = import8.provideNavigatorPlatform();
    this._DocumentDirToken_18 = import8.provideDocumentDirection();
    this._DocLangToken_19 = import8.provideDocumentLang();
    this._Platform_20 = import75.setupPlatform(this._PlatformConfigToken_15,this._QueryParams_14,this._UserAgentToken_16,this._NavigatorPlatformToken_17,this._DocumentDirToken_18,this._DocLangToken_19,this.parent.get(import66.NgZone));
    this._Config_21 = import76.setupConfig(this._ConfigToken_12,this._QueryParams_14,this._Platform_20);
    this._App_22 = new import10.App(this._Config_21,this._Platform_20);
    this._APP_INITIALIZER_23 = [
      import77.registerModeConfigs(this._Config_21),
      import78.registerTransitions(this._Config_21),
      import30.setupProvideEvents(this._Platform_20),
      import41.setupTapClick(this._Config_21,this._App_22,this.parent.get(import66.NgZone))
    ]
    ;
    this._ApplicationInitStatus_24 = new import11.ApplicationInitStatus(this._APP_INITIALIZER_23);
    this._Testability_25 = new import12.Testability(this.parent.get(import66.NgZone));
    this._ApplicationRef__26 = new import13.ApplicationRef_(this.parent.get(import66.NgZone),this.parent.get(import79.Console),this,this._ErrorHandler_11,this,this._ApplicationInitStatus_24,this.parent.get(import12.TestabilityRegistry,(null as any)),this._Testability_25);
    return this._AppModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_4; }
    if ((token === import7.FormsModule)) { return this._FormsModule_5; }
    if ((token === import7.ReactiveFormsModule)) { return this._ReactiveFormsModule_6; }
    if ((token === import8.IonicModule)) { return this._IonicModule_7; }
    if ((token === import1.AppModule)) { return this._AppModule_8; }
    if ((token === import80.LOCALE_ID)) { return this._LOCALE_ID_9; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import81.ErrorHandler)) { return this._ErrorHandler_11; }
    if ((token === import76.ConfigToken)) { return this._ConfigToken_12; }
    if ((token === import73.UrlToken)) { return this._UrlToken_13; }
    if ((token === import73.QueryParams)) { return this._QueryParams_14; }
    if ((token === import74.PlatformConfigToken)) { return this._PlatformConfigToken_15; }
    if ((token === import75.UserAgentToken)) { return this._UserAgentToken_16; }
    if ((token === import75.NavigatorPlatformToken)) { return this._NavigatorPlatformToken_17; }
    if ((token === import75.DocumentDirToken)) { return this._DocumentDirToken_18; }
    if ((token === import75.DocLangToken)) { return this._DocLangToken_19; }
    if ((token === import75.Platform)) { return this._Platform_20; }
    if ((token === import76.Config)) { return this._Config_21; }
    if ((token === import10.App)) { return this._App_22; }
    if ((token === import11.APP_INITIALIZER)) { return this._APP_INITIALIZER_23; }
    if ((token === import11.ApplicationInitStatus)) { return this._ApplicationInitStatus_24; }
    if ((token === import12.Testability)) { return this._Testability_25; }
    if ((token === import13.ApplicationRef_)) { return this._ApplicationRef__26; }
    if ((token === import13.ApplicationRef)) { return this._ApplicationRef_27; }
    if ((token === import14.Compiler)) { return this._Compiler_28; }
    if ((token === import62.APP_ID)) { return this._APP_ID_29; }
    if ((token === import82.DOCUMENT)) { return this._DOCUMENT_30; }
    if ((token === import65.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_31; }
    if ((token === import16.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_32; }
    if ((token === import16.EventManager)) { return this._EventManager_33; }
    if ((token === import17.DomSharedStylesHost)) { return this._DomSharedStylesHost_34; }
    if ((token === import83.AnimationDriver)) { return this._AnimationDriver_35; }
    if ((token === import18.DomRootRenderer)) { return this._DomRootRenderer_36; }
    if ((token === import84.RootRenderer)) { return this._RootRenderer_37; }
    if ((token === import19.DomSanitizer)) { return this._DomSanitizer_38; }
    if ((token === import85.Sanitizer)) { return this._Sanitizer_39; }
    if ((token === import20.ViewUtils)) { return this._ViewUtils_40; }
    if ((token === import86.IterableDiffers)) { return this._IterableDiffers_41; }
    if ((token === import87.KeyValueDiffers)) { return this._KeyValueDiffers_42; }
    if ((token === import17.SharedStylesHost)) { return this._SharedStylesHost_43; }
    if ((token === import21.Title)) { return this._Title_44; }
    if ((token === import22.BrowserXhr)) { return this._BrowserXhr_45; }
    if ((token === import23.ResponseOptions)) { return this._ResponseOptions_46; }
    if ((token === import88.XSRFStrategy)) { return this._XSRFStrategy_47; }
    if ((token === import24.XHRBackend)) { return this._XHRBackend_48; }
    if ((token === import25.RequestOptions)) { return this._RequestOptions_49; }
    if ((token === import89.Http)) { return this._Http_50; }
    if ((token === import26.RadioControlRegistry)) { return this._RadioControlRegistry_51; }
    if ((token === import27.FormBuilder)) { return this._FormBuilder_52; }
    if ((token === import90.AppRootToken)) { return this._AppRootToken_53; }
    if ((token === import71.DeepLinkConfigToken)) { return this._DeepLinkConfigToken_54; }
    if ((token === import28.ActionSheetController)) { return this._ActionSheetController_55; }
    if ((token === import29.AlertController)) { return this._AlertController_56; }
    if ((token === import30.Events)) { return this._Events_57; }
    if ((token === import31.Form)) { return this._Form_58; }
    if ((token === import32.Haptic)) { return this._Haptic_59; }
    if ((token === import33.GestureController)) { return this._GestureController_60; }
    if ((token === import34.Keyboard)) { return this._Keyboard_61; }
    if ((token === import35.LoadingController)) { return this._LoadingController_62; }
    if ((token === import70.LocationStrategy)) { return this._LocationStrategy_63; }
    if ((token === import36.Location)) { return this._Location_64; }
    if ((token === import37.MenuController)) { return this._MenuController_65; }
    if ((token === import38.ModalController)) { return this._ModalController_66; }
    if ((token === import39.PickerController)) { return this._PickerController_67; }
    if ((token === import40.PopoverController)) { return this._PopoverController_68; }
    if ((token === import41.TapClick)) { return this._TapClick_69; }
    if ((token === import42.ToastController)) { return this._ToastController_70; }
    if ((token === import43.Translate)) { return this._Translate_71; }
    if ((token === import44.TransitionController)) { return this._TransitionController_72; }
    if ((token === import71.UrlSerializer)) { return this._UrlSerializer_73; }
    if ((token === import72.DeepLinker)) { return this._DeepLinker_74; }
    if ((token === import45.Storage)) { return this._Storage_75; }
    if ((token === import46.Auth)) { return this._Auth_76; }
    if ((token === import47.FirmService)) { return this._FirmService_77; }
    if ((token === import91.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_78; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__26.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);