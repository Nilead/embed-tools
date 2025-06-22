var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import require$$0, { useState, useEffect, useReducer } from "react";
import require$$0$1 from "react-dom";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m2.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var React = require$$0;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self) ;
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      var didWarnAboutKeySpread = {};
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum();
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          {
            if (hasOwnProperty.call(props, "key")) {
              var componentName = getComponentNameFromType(type);
              var keys = Object.keys(props).filter(function(k) {
                return k !== "key";
              });
              var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
              if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}
if (process.env.NODE_ENV === "production") {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var m = require$$0$1;
if (process.env.NODE_ENV === "production") {
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  client.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  client.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
const quizSteps = [
  {
    step: 1,
    key: "primaryTask",
    question: "What is your primary task or application?",
    options: [
      { value: "long_document", label: "Long-Form Document Processing / Complex Text Generation" },
      { value: "translation", label: "High-Quality Translation" },
      { value: "conversational_ai", label: "Conversational AI / Chatbots" },
      { value: "reasoning", label: "Reasoning / Analytical Tasks / Coding" },
      { value: "text_generation", label: "General-Purpose Text Writing" }
    ]
  },
  {
    step: 2,
    key: "keyPriority",
    question: "What is your most important priority?",
    options: [
      { value: "cost-efficiency", label: "Cost-Efficiency (Lowest Price)" },
      { value: "top-quality", label: "Highest Quality / Accuracy" },
      { value: "large-context", label: "Largest Context Window" },
      { value: "speed-latency", label: "Fastest Performance / Low Latency" }
    ]
  },
  {
    step: 3,
    key: "volumeControl",
    question: "What about volume and data control?",
    options: [
      { value: "high-volume", label: "High Volume / Repetitive Queries" },
      { value: "medium-low", label: "Medium or Low Volume / Varied Queries" },
      { value: "self-hosting", label: "Data Privacy / Prefer Self-Hosting (open-source)" }
    ]
  }
];
const aiModels = [
  {
    id: "gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    provider: "Google",
    description: "Excels in extreme long-context handling.",
    tokenLimits: {
      contextWindow: 2097152,
      outputTokenLimit: "8,192 tokens",
      notes: "Google's Gemini Pro models lead in extreme long-context handling, up to ~2 million tokens, far exceeding others."
    },
    pricing: {
      inputCost: 2.5,
      outputCost: 15,
      notes: "Pricing is for prompts >200K tokens. Google Gemini pricing varies by model and usage tier; Pro is premium."
    },
    tags: {
      task: ["long_document", "text_generation", "reasoning"],
      quality: "premium",
      priority: ["large-context", "top-quality"]
    },
    useCases: ["Long-Form Document Processing (high cost but unmatched context)", "Complex Text Generation", "Advanced Reasoning"]
  },
  {
    id: "gemini-1-5-flash",
    name: "Gemini 1.5 Flash",
    provider: "Google",
    description: "Cost-efficient for large contexts and fast performance.",
    tokenLimits: {
      contextWindow: 1048576,
      outputTokenLimit: "8,192 tokens",
      notes: "Google's Gemini Flash offers large context windows, optimized for speed and cost."
    },
    pricing: {
      inputCost: 0.3,
      outputCost: 2.5,
      notes: "Gemini Flash is cost-efficient for large contexts and high-volume tasks."
    },
    tags: {
      task: ["summarization", "data_extraction", "text_generation", "conversational_ai"],
      quality: "balanced",
      priority: ["speed-latency", "cost-efficiency", "large-context"],
      special: ["high-volume"]
    },
    useCases: ["High-volume, cost-sensitive summarization or data extraction", "General Text Generation", "Conversational AI (high volume)"]
  },
  {
    id: "mistral-7b-mixtral-8x7b",
    name: "Mixtral 8×7B",
    provider: "Mistral",
    description: "Suitable for medium-length contexts, known for open-source flexibility.",
    tokenLimits: {
      contextWindow: 32e3,
      outputTokenLimit: "32,000 tokens",
      notes: "Mistral's frontier models cap around 32K tokens, suitable for medium-length contexts."
    },
    pricing: {
      inputCost: 0.7,
      outputCost: 0.7,
      notes: "Mixtral 8x7B is a relatively cost-effective open-source option."
    },
    tags: {
      task: ["text_generation"],
      quality: "balanced",
      priority: ["cost-efficiency"],
      features: ["open-source", "self-hosting"]
    },
    useCases: ["Medium-scale text generation and tasks requiring moderate context", "Data Privacy / Prefer Self-Hosting (open-source)"]
  },
  {
    id: "mistral-large",
    name: "Mistral Large",
    provider: "Mistral",
    description: "Higher capacity model from Mistral with top-tier reasoning.",
    tokenLimits: {
      contextWindow: 32e3,
      outputTokenLimit: "32,000 tokens",
      notes: "Mistral Large shares similar context window with other Mistral frontier models."
    },
    pricing: {
      inputCost: 3,
      outputCost: 9,
      notes: "Mistral Large is higher cost but greater capacity for complex tasks."
    },
    tags: {
      task: ["text_generation", "reasoning", "multilingual", "coding"],
      quality: "premium",
      priority: ["top-quality"]
    },
    useCases: ["Medium-Scale Text Generation (balanced cost and capability)", "Complex Multilingual Reasoning", "Code Generation"]
  },
  {
    id: "mistral-small-3-1",
    name: "Mistral Small 3.1",
    provider: "Mistral",
    description: "Cutting-edge, open-source AI model optimized for multilingual tasks, accuracy, and low-latency conversational AI.",
    tokenLimits: {
      contextWindow: 128e3,
      outputTokenLimit: "N/A (check latest Mistral docs)",
      notes: "Mistral Small 3.1 features a larger context window, beneficial for complex tasks and real-time AI."
    },
    pricing: {
      inputCost: 0.1,
      outputCost: 0.3,
      notes: "Very competitive pricing, attractive for high-volume, cost-sensitive applications."
    },
    tags: {
      task: ["multilingual", "conversational_ai", "text_generation"],
      quality: "balanced",
      priority: ["cost-efficiency", "speed-latency"],
      features: ["open-source", "self-hosting"]
    },
    useCases: ["Multilingual tasks", "Low-latency, real-time conversational AI", "Cost-Sensitive Applications", "Data Privacy / Self-Hosting"]
  },
  {
    id: "deepseek-r1-v3",
    name: "DeepSeek R1/V3",
    provider: "DeepSeek",
    description: "Optimized for conversational and reasoning tasks with competitive rates and unique caching.",
    tokenLimits: {
      contextWindow: 128e3,
      outputTokenLimit: "8,000 tokens",
      notes: "DeepSeek models offer a substantial context window for various tasks."
    },
    pricing: {
      // Using an average for sorting, but notes retain full detail.
      inputCost: (0.07 + 0.27 + 0.14 + 0.55) / 4,
      outputCost: (1.1 + 2.19) / 2,
      notes: "Highly competitive rates, with cache-hit/off-peak discounts. Prices shown are averages of hit/miss and model types."
    },
    tags: {
      task: ["conversational_ai", "reasoning", "content_creation", "translation"],
      quality: "premium",
      priority: ["cost-efficiency", "top-quality"],
      special: ["high-volume"]
    },
    useCases: ["Conversational AI (balancing cost and responsiveness)", "Reasoning / Analytical Tasks", "Content Creation", "High-Quality Translation"]
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    description: "Balanced performance, strong multimodal capabilities, and reasonable context window.",
    tokenLimits: {
      contextWindow: 128e3,
      outputTokenLimit: "4,096 tokens",
      notes: "GPT-4o retains a smaller 128K context window compared to the 4.1 series."
    },
    pricing: {
      inputCost: 2.5,
      outputCost: 10,
      notes: "Full GPT-4o incurs higher per-token fees but offers greater capability, especially for multimodal inputs."
    },
    tags: {
      task: ["multimodal", "text_generation", "translation"],
      quality: "premium",
      priority: ["top-quality"]
    },
    useCases: ["General purpose applications requiring robust performance", "Multimodal Content Creation (text, audio, image input)", "High-Quality Translation"]
  },
  {
    id: "gpt-4-1",
    name: "GPT-4.1 (Pro variants)",
    provider: "OpenAI",
    description: "High capacity with robust capabilities, major gains in coding and instruction following.",
    tokenLimits: {
      contextWindow: 1e6,
      outputTokenLimit: "32,768 tokens",
      notes: "OpenAI's newest 4.1 models share a 1 million-token window with 32K output."
    },
    pricing: {
      inputCost: 2,
      outputCost: 8,
      notes: "GPT-4.1 incurs higher per-token fees but offers greater capability for complex coding and long-context tasks."
    },
    tags: {
      task: ["coding", "reasoning", "text_generation", "translation", "long_document"],
      quality: "premium",
      priority: ["large-context", "top-quality"]
    },
    useCases: ["Comprehensive applications requiring large context and high output length.", "Complex Coding Workflows", "Long-Context Reasoning", "High-Quality Translation"]
  },
  {
    id: "gpt-4-1-mini",
    name: "GPT-4.1 Mini",
    provider: "OpenAI",
    description: "Balanced cost and capability for medium-scale tasks, matching or exceeding GPT-4o performance.",
    tokenLimits: {
      contextWindow: 1e6,
      outputTokenLimit: "32,768 tokens",
      notes: "GPT-4.1-mini offers a large context window for its pricing tier."
    },
    pricing: {
      inputCost: 0.4,
      outputCost: 1.6,
      notes: "GPT-4.1-mini is more affordable for medium-scale tasks, offering a strong balance of performance and cost."
    },
    tags: {
      task: ["text_generation", "translation"],
      quality: "balanced",
      priority: ["cost-efficiency", "large-context"]
    },
    useCases: ["Medium-Scale Text Generation (balanced cost and capability)", "General-Purpose Text Writing", "Cost-Efficient AI applications", "High-Quality Translation"]
  },
  {
    id: "gpt-4-1-nano",
    name: "GPT-4.1 Nano",
    provider: "OpenAI",
    description: "Most affordable for small-scale tasks, optimized for speed and cost-effectiveness.",
    tokenLimits: {
      contextWindow: 1e6,
      outputTokenLimit: "32,768 tokens",
      notes: "GPT-4.1-nano maintains a significant context window for its cost efficiency."
    },
    pricing: {
      inputCost: 0.1,
      outputCost: 0.4,
      notes: "OpenAI's GPT-4.1 nano is most affordable for small-scale tasks, built for speed."
    },
    tags: {
      task: ["classification", "extraction", "text_generation", "translation"],
      quality: "economy",
      priority: ["cost-efficiency", "speed-latency", "large-context"]
    },
    useCases: ["Cost-Sensitive Applications (for straightforward tasks)", "Simple Text Generation", "Classification", "Information Extraction", "High-Quality Translation"]
  }
];
function useModelRecommender(answers) {
  const [recommendedModels, setRecommendedModels] = useState([]);
  useEffect(() => {
    if (!answers || Object.keys(answers).length === 0) {
      setRecommendedModels([]);
      return;
    }
    let filtered = [...aiModels];
    if (answers.primaryTask) {
      filtered = filtered.filter((model) => model.tags.task.includes(answers.primaryTask));
    }
    if (answers.volumeControl) {
      if (answers.volumeControl === "high-volume") {
        filtered = filtered.filter((model) => {
          var _a;
          return (_a = model.tags.special) == null ? void 0 : _a.includes("high-volume");
        });
      } else if (answers.volumeControl === "self-hosting") {
        filtered = filtered.filter((model) => {
          var _a;
          return (_a = model.tags.features) == null ? void 0 : _a.includes("self-hosting");
        });
      }
    }
    if (answers.keyPriority) {
      const sorter = [...filtered];
      switch (answers.keyPriority) {
        case "cost-efficiency":
          sorter.sort((a, b) => a.pricing.inputCost + a.pricing.outputCost - (b.pricing.inputCost + b.pricing.outputCost));
          break;
        case "top-quality":
          const qualityOrder = { "premium": 3, "balanced": 2, "economy": 1 };
          sorter.sort((a, b) => (qualityOrder[b.tags.quality] || 0) - (qualityOrder[a.tags.quality] || 0));
          break;
        case "large-context":
          sorter.sort((a, b) => b.tokenLimits.contextWindow - a.tokenLimits.contextWindow);
          break;
        case "speed-latency":
          const speedOrder = { "fast": 3, "moderate": 2, "slow": 1 };
          sorter.sort((a, b) => {
            const aScore = speedOrder[a.tags.speed] || 0;
            const bScore = speedOrder[b.tags.speed] || 0;
            return bScore - aScore;
          });
          break;
      }
      filtered = sorter;
    }
    setRecommendedModels(filtered);
  }, [answers]);
  return recommendedModels;
}
const QuestionStep = ({ stepConfig, currentAnswer, onAnswer, onBack }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-blue-800 mb-6", children: stepConfig.question }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto", children: stepConfig.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onAnswer(stepConfig.key, option.value),
        className: `p-4 rounded-xl shadow-md transition duration-200 border-2 ${currentAnswer === option.value ? "bg-blue-100 border-blue-600 text-blue-800" : "bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700"}`,
        children: option.label
      },
      option.value
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center space-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onBack,
        className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md",
        children: "Back"
      }
    ) })
  ] });
};
const formatNumber = (num) => new Intl.NumberFormat("en-US").format(num);
const ModelCard = ({ model }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col",
      onClick: () => setIsExpanded(!isExpanded),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-blue-700 mb-2", children: model.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-4", children: model.provider }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 flex-grow text-base", children: model.description }),
        isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-gray-200 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-800 mb-1", children: "Token Limits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-gray-700 text-sm list-disc list-inside space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Context Window: ",
                formatNumber(model.tokenLimits.contextWindow),
                " tokens"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Output Token Limit: ",
                model.tokenLimits.outputTokenLimit
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gray-500 text-xs mt-1", children: model.tokenLimits.notes })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-800 mb-1", children: "Pricing (per 1M tokens)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-gray-700 text-sm list-disc list-inside space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Input Cost: $",
                model.pricing.inputCost.toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Output Cost: $",
                model.pricing.outputCost.toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gray-500 text-xs mt-1", children: model.pricing.notes })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-800 mb-1", children: "Recommended Use Cases" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-gray-700 text-sm list-disc list-inside space-y-1", children: model.useCases.map((useCase, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: useCase }, idx)) })
          ] })
        ] })
      ]
    }
  );
};
const ResultsStep = ({ recommendedModels, onBack, onRestart }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-blue-800 mb-8 text-center", children: "Recommended AI Models for You" }),
    recommendedModels.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: recommendedModels.map((model) => /* @__PURE__ */ jsxRuntimeExports.jsx(ModelCard, { model }, model.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xl text-gray-600 mt-10", children: "No models found matching your criteria. Try adjusting your selections." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onBack,
          className: "w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out",
          children: "Back to Questions"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onRestart,
          className: "w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105",
          children: "Restart Discovery"
        }
      )
    ] })
  ] });
};
const TokensInfo = () => {
  const [showTokensInfo, setShowTokensInfo] = useState(false);
  const [sampleText, setSampleText] = useState("");
  const [estimatedTokens, setEstimatedTokens] = useState(0);
  const estimateTokens = (text) => {
    if (!text.trim()) {
      setEstimatedTokens(0);
      return;
    }
    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    const estimateFromWords = Math.ceil(words / 0.75);
    const estimateFromChars = Math.ceil(characters / 4);
    setEstimatedTokens(Math.max(estimateFromWords, estimateFromChars));
  };
  const handleTextChange = (e) => {
    const text = e.target.value;
    setSampleText(text);
    estimateTokens(text);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-12 border border-blue-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "h2",
      {
        className: "text-3xl font-bold text-blue-700 mb-6 flex items-center justify-between cursor-pointer",
        onClick: () => setShowTokensInfo(!showTokensInfo),
        children: [
          'What are "Tokens"?',
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: `h-7 w-7 text-blue-500 transform transition-transform duration-300 ${showTokensInfo ? "rotate-180" : ""}`,
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    showTokensInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-700 leading-relaxed space-y-8 pt-4 border-t border-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: `In the world of AI models like those used for text writing and translation, a "token" is a fundamental unit of text that the model processes. It's how AI models "see" and understand language.` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Not just words:" }),
              ` Tokens aren't always whole words. For example, the word "understanding" might be broken down into "under", "stand", and "ing" as separate tokens. Punctuation marks, spaces, and even parts of words can be tokens.`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Model-specific:" }),
              " The exact way text is broken into tokens varies between different AI models."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Understanding tokens is crucial for business owners because they directly impact:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cost:" }),
              ' AI models are often priced "per token" for both input (what you send to the model) and output (what the model generates). More tokens mean higher costs.'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Context Window:" }),
              ' This refers to the maximum number of tokens an AI model can "remember" or consider at one time. A larger context window allows the model to process longer documents, maintain conversation history, or understand complex instructions.'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Performance:" }),
              " Efficient tokenization and effective use of the context window contribute to the model's ability to generate coherent, relevant, and high-quality text or translations."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-xl border border-blue-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-semibold text-blue-800 mb-4 flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" }) }),
          "Token Estimator"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Paste your text below to get an estimate of how many tokens it might use. This is a rough approximation - actual tokenization varies by model." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "sampleText", className: "block text-sm font-medium text-gray-700 mb-2", children: "Your Text:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "sampleText",
                value: sampleText,
                onChange: handleTextChange,
                placeholder: "Paste your text here to estimate tokens...",
                className: "w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border border-gray-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: estimatedTokens }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Estimated Tokens" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border border-gray-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: sampleText.trim().split(/\s+/).filter((word) => word.length > 0).length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Words" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg border border-gray-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-purple-600", children: sampleText.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Characters" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 bg-white p-3 rounded border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " This is a simplified estimation based on a common rule of thumb where ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 word ≈ 1.33 tokens" }),
            " (or 1 token ≈ 0.75 words). Actual tokenization depends on the specific AI model, language, and text complexity. For precise counts, use the model's official tokenizer."
          ] })
        ] })
      ] })
    ] })
  ] });
};
const initialState = {
  currentStep: 0,
  // 0 is welcome, 1-3 are questions, 4 is results
  answers: {}
};
function quizReducer(state, action) {
  switch (action.type) {
    case "ANSWER":
      const nextStep = state.currentStep >= quizSteps.length ? state.currentStep + 1 : state.currentStep + 1;
      return __spreadProps(__spreadValues({}, state), {
        answers: __spreadProps(__spreadValues({}, state.answers), { [action.key]: action.value }),
        currentStep: nextStep
      });
    case "SET_STEP":
      return __spreadProps(__spreadValues({}, state), { currentStep: action.payload });
    case "RESTART":
      return __spreadProps(__spreadValues({}, initialState), { currentStep: 1 });
    default:
      return state;
  }
}
const App = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentStep, answers } = state;
  const recommendedModels = useModelRecommender(currentStep === quizSteps.length + 1 ? answers : null);
  const handleAnswer = (key, value) => {
    dispatch({ type: "ANSWER", key, value });
  };
  const handleBack = () => {
    if (currentStep > 0) {
      dispatch({ type: "SET_STEP", payload: currentStep - 1 });
    }
  };
  const renderStep = () => {
    if (currentStep === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-blue-800 mb-6", children: "Discover the Best AI Model for Your Needs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-8", children: "Answer a few questions to find the perfect AI model." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => dispatch({ type: "SET_STEP", payload: 1 }),
            className: "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300",
            children: "Start Discovery"
          }
        )
      ] });
    }
    if (currentStep > 0 && currentStep <= quizSteps.length) {
      const stepConfig = quizSteps.find((step) => step.step === currentStep);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuestionStep,
        {
          stepConfig,
          currentAnswer: answers[stepConfig.key],
          onAnswer: handleAnswer,
          onBack: handleBack
        }
      );
    }
    if (currentStep === quizSteps.length + 1) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResultsStep,
        {
          recommendedModels,
          onBack: handleBack,
          onRestart: () => dispatch({ type: "RESTART" })
        }
      );
    }
    return null;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-sans antialiased bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen text-gray-800 p-4 sm:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "mb-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-extrabold text-blue-800", children: "AI Model Discovery" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-12 border border-blue-100", children: renderStep() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TokensInfo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-12 text-center text-gray-500 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2025 AI Model Discovery. All rights reserved." }) })
  ] });
};
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
