(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Applications_ShowTerms_vue"],{

/***/ "./node_modules/@headlessui/vue/dist/headlessui.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/vue/dist/headlessui.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* binding */ Dialog),
/* harmony export */   "DialogDescription": () => (/* binding */ DialogDescription),
/* harmony export */   "DialogOverlay": () => (/* binding */ DialogOverlay),
/* harmony export */   "DialogTitle": () => (/* binding */ DialogTitle),
/* harmony export */   "Disclosure": () => (/* binding */ Disclosure),
/* harmony export */   "DisclosureButton": () => (/* binding */ DisclosureButton),
/* harmony export */   "DisclosurePanel": () => (/* binding */ DisclosurePanel),
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap),
/* harmony export */   "Listbox": () => (/* binding */ Listbox),
/* harmony export */   "ListboxButton": () => (/* binding */ ListboxButton),
/* harmony export */   "ListboxLabel": () => (/* binding */ ListboxLabel),
/* harmony export */   "ListboxOption": () => (/* binding */ ListboxOption),
/* harmony export */   "ListboxOptions": () => (/* binding */ ListboxOptions),
/* harmony export */   "Menu": () => (/* binding */ Menu),
/* harmony export */   "MenuButton": () => (/* binding */ MenuButton),
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem),
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems),
/* harmony export */   "Popover": () => (/* binding */ Popover),
/* harmony export */   "PopoverButton": () => (/* binding */ PopoverButton),
/* harmony export */   "PopoverGroup": () => (/* binding */ PopoverGroup),
/* harmony export */   "PopoverOverlay": () => (/* binding */ PopoverOverlay),
/* harmony export */   "PopoverPanel": () => (/* binding */ PopoverPanel),
/* harmony export */   "Portal": () => (/* binding */ Portal),
/* harmony export */   "PortalGroup": () => (/* binding */ PortalGroup),
/* harmony export */   "RadioGroup": () => (/* binding */ RadioGroup),
/* harmony export */   "RadioGroupDescription": () => (/* binding */ RadioGroupDescription),
/* harmony export */   "RadioGroupLabel": () => (/* binding */ RadioGroupLabel),
/* harmony export */   "RadioGroupOption": () => (/* binding */ RadioGroupOption),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "SwitchDescription": () => (/* binding */ SwitchDescription),
/* harmony export */   "SwitchGroup": () => (/* binding */ SwitchGroup),
/* harmony export */   "SwitchLabel": () => (/* binding */ SwitchLabel),
/* harmony export */   "Tab": () => (/* binding */ Tab),
/* harmony export */   "TabGroup": () => (/* binding */ TabGroup),
/* harmony export */   "TabList": () => (/* binding */ TabList),
/* harmony export */   "TabPanel": () => (/* binding */ TabPanel),
/* harmony export */   "TabPanels": () => (/* binding */ TabPanels),
/* harmony export */   "TransitionChild": () => (/* binding */ TransitionChild),
/* harmony export */   "TransitionRoot": () => (/* binding */ TransitionRoot)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return typeof returnValue === 'function' ? returnValue.apply(void 0, args) : returnValue;
  }

  var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup).map(function (key) {
    return "\"" + key + "\"";
  }).join(', ') + ".");
  if (Error.captureStackTrace) Error.captureStackTrace(error, match);
  throw error;
}

var Features;

(function (Features) {
  /** No features at all */
  Features[Features["None"] = 0] = "None";
  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */

  Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */

  Features[Features["Static"] = 2] = "Static";
})(Features || (Features = {}));

var RenderStrategy;

(function (RenderStrategy) {
  RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
  RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));

function render(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      _ref$features = _ref.features,
      features = _ref$features === void 0 ? Features.None : _ref$features,
      main = _objectWithoutPropertiesLoose(_ref, ["visible", "features"]);

  // Visible always render
  if (visible) return _render(main);

  if (features & Features.Static) {
    // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else
    if (main.props["static"]) return _render(main);
  }

  if (features & Features.RenderStrategy) {
    var _main$props$unmount, _match;

    var strategy = ((_main$props$unmount = main.props.unmount) != null ? _main$props$unmount : true) ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function () {
      return null;
    }, _match[RenderStrategy.Hidden] = function () {
      return _render(_extends({}, main, {
        props: _extends({}, main.props, {
          hidden: true,
          style: {
            display: 'none'
          }
        })
      }));
    }, _match));
  } // No features enabled, just render


  return _render(main);
}

function _render(_ref2) {
  var props = _ref2.props,
      attrs = _ref2.attrs,
      slots = _ref2.slots,
      slot = _ref2.slot,
      name = _ref2.name;

  var _omit = omit(props, ['unmount', 'static']),
      as = _omit.as,
      passThroughProps = _objectWithoutPropertiesLoose(_omit, ["as"]);

  var children = slots["default"] == null ? void 0 : slots["default"](slot);

  if (as === 'template') {
    if (Object.keys(passThroughProps).length > 0 || Object.keys(attrs).length > 0) {
      var _ref3 = children != null ? children : [],
          firstChild = _ref3[0],
          other = _ref3.slice(1);

      if (!isValidElement(firstChild) || other.length > 0) {
        throw new Error(['Passing props on "template"!', '', "The current component <" + name + " /> is rendering a \"template\".", "However we need to passthrough the following props:", Object.keys(passThroughProps).concat(Object.keys(attrs)).map(function (line) {
          return "  - " + line;
        }).join('\n'), '', 'You can apply a few solutions:', ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', 'Render a single element as the child so that we can forward the props onto that element.'].map(function (line) {
          return "  - " + line;
        }).join('\n')].join('\n'));
      }

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(firstChild, passThroughProps);
    }

    if (Array.isArray(children) && children.length === 1) {
      return children[0];
    }

    return children;
  }

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(as, passThroughProps, children);
}

function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }

  var clone = Object.assign({}, object);

  for (var _iterator = _createForOfIteratorHelperLoose(keysToOmit), _step; !(_step = _iterator()).done;) {
    var key = _step.value;
    if (key in clone) delete clone[key];
  }

  return clone;
}

function isValidElement(input) {
  if (input == null) return false; // No children

  if (typeof input.type === 'string') return true; // 'div', 'span', ...

  if (typeof input.type === 'object') return true; // Other components

  if (typeof input.type === 'function') return true; // Built-ins like Transition

  return false; // Comments, strings, ...
}

// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;

(function (Keys) {
  Keys["Space"] = " ";
  Keys["Enter"] = "Enter";
  Keys["Escape"] = "Escape";
  Keys["Backspace"] = "Backspace";
  Keys["ArrowLeft"] = "ArrowLeft";
  Keys["ArrowUp"] = "ArrowUp";
  Keys["ArrowRight"] = "ArrowRight";
  Keys["ArrowDown"] = "ArrowDown";
  Keys["Home"] = "Home";
  Keys["End"] = "End";
  Keys["PageUp"] = "PageUp";
  Keys["PageDown"] = "PageDown";
  Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));

var id = 0;

function generateId() {
  return ++id;
}

function useId() {
  return generateId();
}

//  - https://stackoverflow.com/a/30753870

var focusableSelector = /*#__PURE__*/['[contentEditable=true]', '[tabindex]', 'a[href]', 'area[href]', 'button:not([disabled])', 'iframe', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])'].map( false ? // TODO: Remove this once JSDOM fixes the issue where an element that is
// "hidden" can be the document.activeElement, because this is not possible
// in real browsers.
// TODO: Remove this once JSDOM fixes the issue where an element that is
0 : function (selector) {
  return selector + ":not([tabindex='-1'])";
}).join(',');
var Focus;

(function (Focus) {
  /** Focus the first non-disabled element */
  Focus[Focus["First"] = 1] = "First";
  /** Focus the previous non-disabled element */

  Focus[Focus["Previous"] = 2] = "Previous";
  /** Focus the next non-disabled element */

  Focus[Focus["Next"] = 4] = "Next";
  /** Focus the last non-disabled element */

  Focus[Focus["Last"] = 8] = "Last";
  /** Wrap tab around */

  Focus[Focus["WrapAround"] = 16] = "WrapAround";
  /** Prevent scrolling the focusable elements into view */

  Focus[Focus["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));

var FocusResult;

(function (FocusResult) {
  FocusResult[FocusResult["Error"] = 0] = "Error";
  FocusResult[FocusResult["Overflow"] = 1] = "Overflow";
  FocusResult[FocusResult["Success"] = 2] = "Success";
  FocusResult[FocusResult["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));

var Direction;

(function (Direction) {
  Direction[Direction["Previous"] = -1] = "Previous";
  Direction[Direction["Next"] = 1] = "Next";
})(Direction || (Direction = {}));

function getFocusableElements(container) {
  if (container === void 0) {
    container = document.body;
  }

  if (container == null) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;

(function (FocusableMode) {
  /** The element itself must be focusable. */
  FocusableMode[FocusableMode["Strict"] = 0] = "Strict";
  /** The element should be inside of a focusable element. */

  FocusableMode[FocusableMode["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));

function isFocusableElement(element, mode) {
  var _match;

  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }

  if (element === document.body) return false;
  return match(mode, (_match = {}, _match[FocusableMode.Strict] = function () {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function () {
    var next = element;

    while (next !== null) {
      if (next.matches(focusableSelector)) return true;
      next = next.parentElement;
    }

    return false;
  }, _match));
}
function focusElement(element) {
  element == null ? void 0 : element.focus({
    preventScroll: true
  });
}
function focusIn(container, focus) {
  var elements = Array.isArray(container) ? container : getFocusableElements(container);
  var active = document.activeElement;

  var direction = function () {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next;
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var startIndex = function () {
    if (focus & Focus.First) return 0;
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus.Last) return elements.length - 1;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var focusOptions = focus & Focus.NoScroll ? {
    preventScroll: true
  } : {};
  var offset = 0;
  var total = elements.length;
  var next = undefined;

  do {
    var _next;

    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error;
    var nextIdx = startIndex + offset;

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0) return FocusResult.Underflow;
      if (nextIdx >= total) return FocusResult.Overflow;
    }

    next = elements[nextIdx]; // Try the focus the next element, might not work if it is "hidden" to the user.

    (_next = next) == null ? void 0 : _next.focus(focusOptions); // Try the next one in line

    offset += direction;
  } while (next !== document.activeElement); // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.


  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0');
  return FocusResult.Success;
}

function useWindowEvent(type, listener, options) {
  window.addEventListener(type, listener, options);
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
    return window.removeEventListener(type, listener, options);
  });
}

function contains(containers, element) {
  for (var _iterator = _createForOfIteratorHelperLoose(containers), _step; !(_step = _iterator()).done;) {
    var container = _step.value;
    if (container.contains(element)) return true;
  }

  return false;
}

function useFocusTrap(containers, enabled, options) {
  if (enabled === void 0) {
    enabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  }

  if (options === void 0) {
    options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
  }

  var restoreElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(typeof window !== 'undefined' ? document.activeElement : null);
  var previousActiveElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  function handleFocus() {
    if (!enabled.value) return;
    if (containers.value.size !== 1) return;
    var initialFocus = options.value.initialFocus;
    var activeElement = document.activeElement;

    if (initialFocus) {
      if (initialFocus === activeElement) {
        return; // Initial focus ref is already the active element
      }
    } else if (contains(containers.value, activeElement)) {
      return; // Already focused within Dialog
    }

    restoreElement.value = activeElement; // Try to focus the initialFocus ref

    if (initialFocus) {
      focusElement(initialFocus);
    } else {
      var couldFocus = false;

      for (var _iterator = _createForOfIteratorHelperLoose(containers.value), _step; !(_step = _iterator()).done;) {
        var container = _step.value;
        var result = focusIn(container, Focus.First);

        if (result === FocusResult.Success) {
          couldFocus = true;
          break;
        }
      }

      if (!couldFocus) throw new Error('There are no focusable elements inside the <FocusTrap />');
    }

    previousActiveElement.value = document.activeElement;
  } // Restore when `enabled` becomes false


  function restore() {
    focusElement(restoreElement.value);
    restoreElement.value = null;
    previousActiveElement.value = null;
  } // Handle initial focus


  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(handleFocus);
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(function () {
    enabled.value ? handleFocus() : restore();
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(restore); // Handle Tab & Shift+Tab keyboard events

  useWindowEvent('keydown', function (event) {
    if (!enabled.value) return;
    if (event.key !== Keys.Tab) return;
    if (!document.activeElement) return;
    if (containers.value.size !== 1) return;
    event.preventDefault();

    for (var _iterator2 = _createForOfIteratorHelperLoose(containers.value), _step2; !(_step2 = _iterator2()).done;) {
      var element = _step2.value;
      var result = focusIn(element, (event.shiftKey ? Focus.Previous : Focus.Next) | Focus.WrapAround);

      if (result === FocusResult.Success) {
        previousActiveElement.value = document.activeElement;
        break;
      }
    }
  }); // Prevent programmatically escaping

  useWindowEvent('focus', function (event) {
    if (!enabled.value) return;
    if (containers.value.size !== 1) return;
    var previous = previousActiveElement.value;
    if (!previous) return;
    var toElement = event.target;

    if (toElement && toElement instanceof HTMLElement) {
      if (!contains(containers.value, toElement)) {
        event.preventDefault();
        event.stopPropagation();
        focusElement(previous);
      } else {
        previousActiveElement.value = toElement;
        focusElement(toElement);
      }
    } else {
      focusElement(previousActiveElement.value);
    }
  }, true);
}

var CHILDREN_SELECTOR =  false ? 0 : 'body > *';
var interactables = /*#__PURE__*/new Set();
var originals = /*#__PURE__*/new Map();

function inert(element) {
  element.setAttribute('aria-hidden', 'true'); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = true;
}

function restore(element) {
  var original = originals.get(element);
  if (!original) return;
  if (original['aria-hidden'] === null) element.removeAttribute('aria-hidden');else element.setAttribute('aria-hidden', original['aria-hidden']); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = original.inert;
}

function useInertOthers(container, enabled) {
  if (enabled === void 0) {
    enabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function (onInvalidate) {
    if (!enabled.value) return;
    if (!container.value) return;
    var element = container.value; // Mark myself as an interactable element

    interactables.add(element); // Restore elements that now contain an interactable child

    for (var _iterator = _createForOfIteratorHelperLoose(originals.keys()), _step; !(_step = _iterator()).done;) {
      var original = _step.value;

      if (original.contains(element)) {
        restore(original);
        originals["delete"](original);
      }
    } // Collect direct children of the body


    document.querySelectorAll(CHILDREN_SELECTOR).forEach(function (child) {
      if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
      // Skip the interactables, and the parents of the interactables

      for (var _iterator2 = _createForOfIteratorHelperLoose(interactables), _step2; !(_step2 = _iterator2()).done;) {
        var interactable = _step2.value;
        if (child.contains(interactable)) return;
      } // Keep track of the elements


      if (interactables.size === 1) {
        originals.set(child, {
          'aria-hidden': child.getAttribute('aria-hidden'),
          // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
          inert: child.inert
        }); // Mutate the element

        inert(child);
      }
    });
    onInvalidate(function () {
      // Inert is disabled on the current element
      interactables["delete"](element); // We still have interactable elements, therefore this one and its parent
      // will become inert as well.

      if (interactables.size > 0) {
        // Collect direct children of the body
        document.querySelectorAll(CHILDREN_SELECTOR).forEach(function (child) {
          if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
          // Skip already inert parents

          if (originals.has(child)) return; // Skip the interactables, and the parents of the interactables

          for (var _iterator3 = _createForOfIteratorHelperLoose(interactables), _step3; !(_step3 = _iterator3()).done;) {
            var interactable = _step3.value;
            if (child.contains(interactable)) return;
          }

          originals.set(child, {
            'aria-hidden': child.getAttribute('aria-hidden'),
            // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
            inert: child.inert
          }); // Mutate the element

          inert(child);
        });
      } else {
        for (var _iterator4 = _createForOfIteratorHelperLoose(originals.keys()), _step4; !(_step4 = _iterator4()).done;) {
          var _element = _step4.value;
          // Restore
          restore(_element); // Cleanup

          originals["delete"](_element);
        }
      }
    });
  });
}

var StackContext = /*#__PURE__*/Symbol('StackContext');
var StackMessage;

(function (StackMessage) {
  StackMessage[StackMessage["AddElement"] = 0] = "AddElement";
  StackMessage[StackMessage["RemoveElement"] = 1] = "RemoveElement";
})(StackMessage || (StackMessage = {}));

function useStackContext() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(StackContext, function () {});
}
function useElemenStack(element) {
  var notify = useStackContext();
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function (onInvalidate) {
    var domElement = element == null ? void 0 : element.value;
    if (!domElement) return;
    notify(StackMessage.AddElement, domElement);
    onInvalidate(function () {
      return notify(StackMessage.RemoveElement, domElement);
    });
  });
}
function useStackProvider(onUpdate) {
  var parentUpdate = useStackContext();

  function notify() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Notify our layer
    onUpdate == null ? void 0 : onUpdate.apply(void 0, args); // Notify the parent

    parentUpdate.apply(void 0, args);
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(StackContext, notify);
}

var ForcePortalRootContext = /*#__PURE__*/Symbol('ForcePortalRootContext');
function usePortalRoot() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(ForcePortalRootContext, false);
}
var ForcePortalRoot = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ForcePortalRoot',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    force: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(ForcePortalRootContext, props.force);
    return function () {
      var passThroughProps = _objectWithoutPropertiesLoose(props, ["force"]);

      return render({
        props: passThroughProps,
        slot: {},
        slots: slots,
        attrs: attrs,
        name: 'ForcePortalRoot'
      });
    };
  }
});

function getPortalRoot() {
  var existingRoot = document.getElementById('headlessui-portal-root');
  if (existingRoot) return existingRoot;
  var root = document.createElement('div');
  root.setAttribute('id', 'headlessui-portal-root');
  return document.body.appendChild(root);
}

var Portal = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Portal',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var forcePortalRoot = usePortalRoot();
    var groupContext = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(PortalGroupContext, null);
    var myTarget = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(forcePortalRoot === true ? getPortalRoot() : groupContext === null ? getPortalRoot() : groupContext.resolveTarget());
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      if (forcePortalRoot) return;
      if (groupContext === null) return;
      myTarget.value = groupContext.resolveTarget();
    });
    var element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    useElemenStack(element);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      var root = document.getElementById('headlessui-portal-root');
      if (!root) return;
      if (myTarget.value !== root) return;

      if (myTarget.value.children.length <= 0) {
        var _myTarget$value$paren;

        (_myTarget$value$paren = myTarget.value.parentElement) == null ? void 0 : _myTarget$value$paren.removeChild(myTarget.value);
      }
    });
    useStackProvider();
    return function () {
      if (myTarget.value === null) return null;
      var propsWeControl = {
        ref: element
      };
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)( // @ts-expect-error Children can be an object, but TypeScript is not happy
      // with it. Once this is fixed upstream we can remove this assertion.
      vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
        to: myTarget.value
      }, render({
        props: _extends({}, props, propsWeControl),
        slot: {},
        attrs: attrs,
        slots: slots,
        name: 'Portal'
      }));
    };
  }
}); // ---

var PortalGroupContext = /*#__PURE__*/Symbol('PortalGroupContext');
var PortalGroup = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'PortalGroup',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    target: {
      type: Object,
      "default": null
    }
  },
  setup: function setup(props, _ref2) {
    var attrs = _ref2.attrs,
        slots = _ref2.slots;
    var api = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      resolveTarget: function resolveTarget() {
        return props.target;
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(PortalGroupContext, api);
    return function () {
      var passThroughProps = _objectWithoutPropertiesLoose(props, ["target"]);

      return render({
        props: passThroughProps,
        slot: {},
        attrs: attrs,
        slots: slots,
        name: 'PortalGroup'
      });
    };
  }
});

var DescriptionContext = /*#__PURE__*/Symbol('DescriptionContext');

function useDescriptionContext() {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(DescriptionContext, null);

  if (context === null) {
    throw new Error('Missing parent');
  }

  return context;
}

function useDescriptions(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$slot = _ref.slot,
      slot = _ref$slot === void 0 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({}) : _ref$slot,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'Description' : _ref$name,
      _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props;

  var descriptionIds = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  function register(value) {
    descriptionIds.value.push(value);
    return function () {
      var idx = descriptionIds.value.indexOf(value);
      if (idx === -1) return;
      descriptionIds.value.splice(idx, 1);
    };
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(DescriptionContext, {
    register: register,
    slot: slot,
    name: name,
    props: props
  }); // The actual id's as string or undefined.

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return descriptionIds.value.length > 0 ? descriptionIds.value.join(' ') : undefined;
  });
} // ---

var Description = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Description',
  props: {
    as: {
      type: [Object, String],
      "default": 'p'
    }
  },
  render: function render$1() {
    var _this$context = this.context,
        _this$context$name = _this$context.name,
        name = _this$context$name === void 0 ? 'Description' : _this$context$name,
        _this$context$slot = _this$context.slot,
        slot = _this$context$slot === void 0 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({}) : _this$context$slot,
        _this$context$props = _this$context.props,
        props = _this$context$props === void 0 ? {} : _this$context$props;
    var passThroughProps = this.$props;

    var propsWeControl = _extends({}, Object.entries(props).reduce(function (acc, _ref2) {
      var _Object$assign;

      var key = _ref2[0],
          value = _ref2[1];
      return Object.assign(acc, (_Object$assign = {}, _Object$assign[key] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(value), _Object$assign));
    }, {}), {
      id: this.id
    });

    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: slot.value,
      attrs: this.$attrs,
      slots: this.$slots,
      name: name
    });
  },
  setup: function setup() {
    var context = useDescriptionContext();
    var id = "headlessui-description-" + useId();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(context.register(id));
    });
    return {
      id: id,
      context: context
    };
  }
});

function dom(ref) {
  var _ref$value$$el;

  if (ref == null) return null;
  if (ref.value == null) return null;
  return (_ref$value$$el = ref.value.$el) != null ? _ref$value$$el : ref.value;
}

var Context = /*#__PURE__*/Symbol('Context');
var State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Closed"] = 1] = "Closed";
})(State || (State = {}));

function hasOpenClosed() {
  return useOpenClosed() !== null;
}
function useOpenClosed() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(Context, null);
}
function useOpenClosedProvider(value) {
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(Context, value);
}

var DialogStates;

(function (DialogStates) {
  DialogStates[DialogStates["Open"] = 0] = "Open";
  DialogStates[DialogStates["Closed"] = 1] = "Closed";
})(DialogStates || (DialogStates = {}));

var DialogContext = /*#__PURE__*/Symbol('DialogContext');

function useDialogContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(DialogContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <Dialog /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDialogContext);
    throw err;
  }

  return context;
} // ---


var Missing = 'DC8F892D-2EBD-447C-A4C8-A03058436FF4';
var Dialog = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Dialog',
  inheritAttrs: false,
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    "static": {
      type: Boolean,
      "default": false
    },
    unmount: {
      type: Boolean,
      "default": true
    },
    open: {
      type: [Boolean, String],
      "default": Missing
    },
    initialFocus: {
      type: Object,
      "default": null
    }
  },
  emits: ['close'],
  render: function render$1() {
    var _this = this;

    var propsWeControl = _extends({}, this.$attrs, {
      ref: 'el',
      id: this.id,
      role: 'dialog',
      'aria-modal': this.dialogState === DialogStates.Open ? true : undefined,
      'aria-labelledby': this.titleId,
      'aria-describedby': this.describedby,
      onClick: this.handleClick,
      onKeydown: this.handleKeyDown
    });

    var _this$$props = this.$props,
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props, ["open", "initialFocus"]);

    var slot = {
      open: this.dialogState === DialogStates.Open
    };
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(ForcePortalRoot, {
      force: true
    }, function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Portal, function () {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(PortalGroup, {
          target: _this.dialogRef
        }, function () {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(ForcePortalRoot, {
            force: false
          }, function () {
            return render({
              props: _extends({}, passThroughProps, propsWeControl),
              slot: slot,
              attrs: _this.$attrs,
              slots: _this.$slots,
              visible: _this.visible,
              features: Features.RenderStrategy | Features.Static,
              name: 'Dialog'
            });
          });
        });
      });
    });
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var containers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(new Set());
    var usesOpenClosedState = useOpenClosed();
    var open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (props.open === Missing && usesOpenClosedState !== null) {
        var _match;

        // Update the `open` prop based on the open closed state
        return match(usesOpenClosedState.value, (_match = {}, _match[State.Open] = true, _match[State.Closed] = false, _match));
      }

      return props.open;
    }); // Validations

    var hasOpen = props.open !== Missing || usesOpenClosedState !== null;

    if (!hasOpen) {
      throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
    }

    if (typeof open.value !== 'boolean') {
      throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + (open.value === Missing ? undefined : props.open));
    }

    var dialogState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.open ? DialogStates.Open : DialogStates.Closed;
    });
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState.value === State.Open;
      }

      return dialogState.value === DialogStates.Open;
    });
    var internalDialogRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var enabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(dialogState.value === DialogStates.Open);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(function () {
      enabled.value = dialogState.value === DialogStates.Open;
    });
    var id = "headlessui-dialog-" + useId();
    var focusTrapOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        initialFocus: props.initialFocus
      };
    });
    useFocusTrap(containers, enabled, focusTrapOptions);
    useInertOthers(internalDialogRef, enabled);
    useStackProvider(function (message, element) {
      var _match2;

      return match(message, (_match2 = {}, _match2[StackMessage.AddElement] = function () {
        containers.value.add(element);
      }, _match2[StackMessage.RemoveElement] = function () {
        containers.value["delete"](element);
      }, _match2));
    });
    var describedby = useDescriptions({
      name: 'DialogDescription',
      slot: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return {
          open: open.value
        };
      })
    });
    var titleId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var api = {
      titleId: titleId,
      dialogState: dialogState,
      setTitleId: function setTitleId(id) {
        if (titleId.value === id) return;
        titleId.value = id;
      },
      close: function close() {
        emit('close', false);
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(DialogContext, api); // Handle outside click

    useWindowEvent('mousedown', function (event) {
      var target = event.target;
      if (dialogState.value !== DialogStates.Open) return;
      if (containers.value.size !== 1) return;
      if (contains(containers.value, target)) return;
      api.close();
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        return target == null ? void 0 : target.focus();
      });
    }); // Scroll lock

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function (onInvalidate) {
      if (dialogState.value !== DialogStates.Open) return;
      var overflow = document.documentElement.style.overflow;
      var paddingRight = document.documentElement.style.paddingRight;
      var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.paddingRight = scrollbarWidth + "px";
      onInvalidate(function () {
        document.documentElement.style.overflow = overflow;
        document.documentElement.style.paddingRight = paddingRight;
      });
    }); // Trigger close when the FocusTrap gets hidden

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function (onInvalidate) {
      if (dialogState.value !== DialogStates.Open) return;
      var container = dom(internalDialogRef);
      if (!container) return;
      var observer = new IntersectionObserver(function (entries) {
        for (var _iterator = _createForOfIteratorHelperLoose(entries), _step; !(_step = _iterator()).done;) {
          var entry = _step.value;

          if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
            api.close();
          }
        }
      });
      observer.observe(container);
      onInvalidate(function () {
        return observer.disconnect();
      });
    });
    return {
      id: id,
      el: internalDialogRef,
      dialogRef: internalDialogRef,
      containers: containers,
      dialogState: dialogState,
      titleId: titleId,
      describedby: describedby,
      visible: visible,
      open: open,
      handleClick: function handleClick(event) {
        event.stopPropagation();
      },
      // Handle `Escape` to close
      handleKeyDown: function handleKeyDown(event) {
        if (event.key !== Keys.Escape) return;
        if (dialogState.value !== DialogStates.Open) return;
        if (containers.value.size > 1) return; // 1 is myself, otherwise other elements in the Stack

        event.preventDefault();
        event.stopPropagation();
        api.close();
      }
    };
  }
}); // ---

var DialogOverlay = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'DialogOverlay',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    }
  },
  render: function render$1() {
    var api = useDialogContext('DialogOverlay');
    var propsWeControl = {
      ref: 'el',
      id: this.id,
      'aria-hidden': true,
      onClick: this.handleClick
    };
    var passThroughProps = this.$props;
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: {
        open: api.dialogState.value === DialogStates.Open
      },
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'DialogOverlay'
    });
  },
  setup: function setup() {
    var api = useDialogContext('DialogOverlay');
    var id = "headlessui-dialog-overlay-" + useId();
    return {
      id: id,
      handleClick: function handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        api.close();
      }
    };
  }
}); // ---

var DialogTitle = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'DialogTitle',
  props: {
    as: {
      type: [Object, String],
      "default": 'h2'
    }
  },
  render: function render$1() {
    var api = useDialogContext('DialogTitle');
    var propsWeControl = {
      id: this.id
    };
    var passThroughProps = this.$props;
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: {
        open: api.dialogState.value === DialogStates.Open
      },
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'DialogTitle'
    });
  },
  setup: function setup() {
    var api = useDialogContext('DialogTitle');
    var id = "headlessui-dialog-title-" + useId();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      api.setTitleId(id);
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
        return api.setTitleId(null);
      });
    });
    return {
      id: id
    };
  }
}); // ---

var DialogDescription = Description;

var DisclosureStates;

(function (DisclosureStates) {
  DisclosureStates[DisclosureStates["Open"] = 0] = "Open";
  DisclosureStates[DisclosureStates["Closed"] = 1] = "Closed";
})(DisclosureStates || (DisclosureStates = {}));

var DisclosureContext = /*#__PURE__*/Symbol('DisclosureContext');

function useDisclosureContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(DisclosureContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <Disclosure /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }

  return context;
}

var DisclosurePanelContext = /*#__PURE__*/Symbol('DisclosurePanelContext');

function useDisclosurePanelContext() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(DisclosurePanelContext, null);
} // ---


var Disclosure = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Disclosure',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    defaultOpen: {
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var buttonId = "headlessui-disclosure-button-" + useId();
    var panelId = "headlessui-disclosure-panel-" + useId();
    var disclosureState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.defaultOpen ? DisclosureStates.Open : DisclosureStates.Closed);
    var panelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var buttonRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var api = {
      buttonId: buttonId,
      panelId: panelId,
      disclosureState: disclosureState,
      panel: panelRef,
      button: buttonRef,
      toggleDisclosure: function toggleDisclosure() {
        var _match;

        disclosureState.value = match(disclosureState.value, (_match = {}, _match[DisclosureStates.Open] = DisclosureStates.Closed, _match[DisclosureStates.Closed] = DisclosureStates.Open, _match));
      },
      closeDisclosure: function closeDisclosure() {
        if (disclosureState.value === DisclosureStates.Closed) return;
        disclosureState.value = DisclosureStates.Closed;
      },
      close: function close(focusableElement) {
        api.closeDisclosure();

        var restoreElement = function () {
          if (!focusableElement) return dom(api.button);
          if (focusableElement instanceof HTMLElement) return focusableElement;
          if (focusableElement.value instanceof HTMLElement) return dom(focusableElement);
          return dom(api.button);
        }();

        restoreElement == null ? void 0 : restoreElement.focus();
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(DisclosureContext, api);
    useOpenClosedProvider((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _match2;

      return match(disclosureState.value, (_match2 = {}, _match2[DisclosureStates.Open] = State.Open, _match2[DisclosureStates.Closed] = State.Closed, _match2));
    }));
    return function () {
      var passThroughProps = _objectWithoutPropertiesLoose(props, ["defaultOpen"]);

      var slot = {
        open: disclosureState.value === DisclosureStates.Open,
        close: api.close
      };
      return render({
        props: passThroughProps,
        slot: slot,
        slots: slots,
        attrs: attrs,
        name: 'Disclosure'
      });
    };
  }
}); // ---

var DisclosureButton = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'DisclosureButton',
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    },
    disabled: {
      type: [Boolean],
      "default": false
    }
  },
  render: function render$1() {
    var api = useDisclosureContext('DisclosureButton');
    var slot = {
      open: api.disclosureState.value === DisclosureStates.Open
    };
    var propsWeControl = this.isWithinPanel ? {
      type: 'button',
      onClick: this.handleClick,
      onKeydown: this.handleKeyDown
    } : {
      id: this.id,
      ref: 'el',
      type: 'button',
      'aria-expanded': this.$props.disabled ? undefined : api.disclosureState.value === DisclosureStates.Open,
      'aria-controls': dom(api.panel) ? api.panelId : undefined,
      disabled: this.$props.disabled ? true : undefined,
      onClick: this.handleClick,
      onKeydown: this.handleKeyDown,
      onKeyup: this.handleKeyUp
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'DisclosureButton'
    });
  },
  setup: function setup(props) {
    var api = useDisclosureContext('DisclosureButton');
    var panelContext = useDisclosurePanelContext();
    var isWithinPanel = panelContext === null ? false : panelContext === api.panelId;
    return {
      isWithinPanel: isWithinPanel,
      id: api.buttonId,
      el: isWithinPanel ? undefined : api.button,
      handleClick: function handleClick() {
        if (props.disabled) return;

        if (isWithinPanel) {
          var _dom;

          api.toggleDisclosure();
          (_dom = dom(api.button)) == null ? void 0 : _dom.focus();
        } else {
          api.toggleDisclosure();
        }
      },
      handleKeyDown: function handleKeyDown(event) {
        var _dom2;

        if (props.disabled) return;

        if (isWithinPanel) {
          switch (event.key) {
            case Keys.Space:
            case Keys.Enter:
              event.preventDefault();
              event.stopPropagation();
              api.toggleDisclosure();
              (_dom2 = dom(api.button)) == null ? void 0 : _dom2.focus();
              break;
          }
        } else {
          switch (event.key) {
            case Keys.Space:
            case Keys.Enter:
              event.preventDefault();
              event.stopPropagation();
              api.toggleDisclosure();
              break;
          }
        }
      },
      handleKeyUp: function handleKeyUp(event) {
        switch (event.key) {
          case Keys.Space:
            // Required for firefox, event.preventDefault() in handleKeyDown for
            // the Space key doesn't cancel the handleKeyUp, which in turn
            // triggers a *click*.
            event.preventDefault();
            break;
        }
      }
    };
  }
}); // ---

var DisclosurePanel = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'DisclosurePanel',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    "static": {
      type: Boolean,
      "default": false
    },
    unmount: {
      type: Boolean,
      "default": true
    }
  },
  render: function render$1() {
    var api = useDisclosureContext('DisclosurePanel');
    var slot = {
      open: api.disclosureState.value === DisclosureStates.Open,
      close: api.close
    };
    var propsWeControl = {
      id: this.id,
      ref: 'el'
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      features: Features.RenderStrategy | Features.Static,
      visible: this.visible,
      name: 'DisclosurePanel'
    });
  },
  setup: function setup() {
    var api = useDisclosureContext('DisclosurePanel');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(DisclosurePanelContext, api.panelId);
    var usesOpenClosedState = useOpenClosed();
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState.value === State.Open;
      }

      return api.disclosureState.value === DisclosureStates.Open;
    });
    return {
      id: api.panelId,
      el: api.panel,
      visible: visible
    };
  }
});

var FocusTrap = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'FocusTrap',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    initialFocus: {
      type: Object,
      "default": null
    }
  },
  render: function render$1() {
    var slot = {};
    var propsWeControl = {
      ref: 'el'
    };

    var _this$$props = this.$props,
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props, ["initialFocus"]);

    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'FocusTrap'
    });
  },
  setup: function setup(props) {
    var containers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(new Set());
    var container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var enabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var focusTrapOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        initialFocus: props.initialFocus
      };
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (!container.value) return;
      containers.value.add(container.value);
      useFocusTrap(containers, enabled, focusTrapOptions);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      enabled.value = false;
    });
    return {
      el: container
    };
  }
});

function assertNever(x) {
  throw new Error('Unexpected object: ' + x);
}

var Focus$1;

(function (Focus) {
  /** Focus the first non-disabled item. */
  Focus[Focus["First"] = 0] = "First";
  /** Focus the previous non-disabled item. */

  Focus[Focus["Previous"] = 1] = "Previous";
  /** Focus the next non-disabled item. */

  Focus[Focus["Next"] = 2] = "Next";
  /** Focus the last non-disabled item. */

  Focus[Focus["Last"] = 3] = "Last";
  /** Focus a specific item based on the `id` of the item. */

  Focus[Focus["Specific"] = 4] = "Specific";
  /** Focus no items at all. */

  Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus$1 || (Focus$1 = {}));

function calculateActiveIndex(action, resolvers) {
  var items = resolvers.resolveItems();
  if (items.length <= 0) return null;
  var currentActiveIndex = resolvers.resolveActiveIndex();
  var activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;

  var nextActiveIndex = function () {
    switch (action.focus) {
      case Focus$1.First:
        return items.findIndex(function (item) {
          return !resolvers.resolveDisabled(item);
        });

      case Focus$1.Previous:
        {
          var idx = items.slice().reverse().findIndex(function (item, idx, all) {
            if (activeIndex !== -1 && all.length - idx - 1 >= activeIndex) return false;
            return !resolvers.resolveDisabled(item);
          });
          if (idx === -1) return idx;
          return items.length - 1 - idx;
        }

      case Focus$1.Next:
        return items.findIndex(function (item, idx) {
          if (idx <= activeIndex) return false;
          return !resolvers.resolveDisabled(item);
        });

      case Focus$1.Last:
        {
          var _idx = items.slice().reverse().findIndex(function (item) {
            return !resolvers.resolveDisabled(item);
          });

          if (_idx === -1) return _idx;
          return items.length - 1 - _idx;
        }

      case Focus$1.Specific:
        return items.findIndex(function (item) {
          return resolvers.resolveId(item) === action.id;
        });

      case Focus$1.Nothing:
        return null;

      default:
        assertNever(action);
    }
  }();

  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}

var ListboxStates;

(function (ListboxStates) {
  ListboxStates[ListboxStates["Open"] = 0] = "Open";
  ListboxStates[ListboxStates["Closed"] = 1] = "Closed";
})(ListboxStates || (ListboxStates = {}));

function nextFrame(cb) {
  requestAnimationFrame(function () {
    return requestAnimationFrame(cb);
  });
}

var ListboxContext = /*#__PURE__*/Symbol('ListboxContext');

function useListboxContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(ListboxContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <Listbox /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useListboxContext);
    throw err;
  }

  return context;
} // ---


var Listbox = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Listbox',
  emits: ['update:modelValue'],
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    disabled: {
      type: [Boolean],
      "default": false
    },
    horizontal: {
      type: [Boolean],
      "default": false
    },
    modelValue: {
      type: [Object, String, Number, Boolean]
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;
    var listboxState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(ListboxStates.Closed);
    var labelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var buttonRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var optionsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var searchQuery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var activeOptionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.modelValue;
    });
    var api = {
      listboxState: listboxState,
      value: value,
      orientation: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return props.horizontal ? 'horizontal' : 'vertical';
      }),
      labelRef: labelRef,
      buttonRef: buttonRef,
      optionsRef: optionsRef,
      disabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return props.disabled;
      }),
      options: options,
      searchQuery: searchQuery,
      activeOptionIndex: activeOptionIndex,
      closeListbox: function closeListbox() {
        if (props.disabled) return;
        if (listboxState.value === ListboxStates.Closed) return;
        listboxState.value = ListboxStates.Closed;
        activeOptionIndex.value = null;
      },
      openListbox: function openListbox() {
        if (props.disabled) return;
        if (listboxState.value === ListboxStates.Open) return;
        listboxState.value = ListboxStates.Open;
      },
      goToOption: function goToOption(focus, id) {
        if (props.disabled) return;
        if (listboxState.value === ListboxStates.Closed) return;
        var nextActiveOptionIndex = calculateActiveIndex(focus === Focus$1.Specific ? {
          focus: Focus$1.Specific,
          id: id
        } : {
          focus: focus
        }, {
          resolveItems: function resolveItems() {
            return options.value;
          },
          resolveActiveIndex: function resolveActiveIndex() {
            return activeOptionIndex.value;
          },
          resolveId: function resolveId(option) {
            return option.id;
          },
          resolveDisabled: function resolveDisabled(option) {
            return option.dataRef.disabled;
          }
        });
        if (searchQuery.value === '' && activeOptionIndex.value === nextActiveOptionIndex) return;
        searchQuery.value = '';
        activeOptionIndex.value = nextActiveOptionIndex;
      },
      search: function search(value) {
        if (props.disabled) return;
        if (listboxState.value === ListboxStates.Closed) return;
        searchQuery.value += value.toLowerCase();
        var match = options.value.findIndex(function (option) {
          return !option.dataRef.disabled && option.dataRef.textValue.startsWith(searchQuery.value);
        });
        if (match === -1 || match === activeOptionIndex.value) return;
        activeOptionIndex.value = match;
      },
      clearSearch: function clearSearch() {
        if (props.disabled) return;
        if (listboxState.value === ListboxStates.Closed) return;
        if (searchQuery.value === '') return;
        searchQuery.value = '';
      },
      registerOption: function registerOption(id, dataRef) {
        // @ts-expect-error The expected type comes from property 'dataRef' which is declared here on type '{ id: string; dataRef: { textValue: string; disabled: boolean; }; }'
        options.value.push({
          id: id,
          dataRef: dataRef
        });
      },
      unregisterOption: function unregisterOption(id) {
        var nextOptions = options.value.slice();
        var currentActiveOption = activeOptionIndex.value !== null ? nextOptions[activeOptionIndex.value] : null;
        var idx = nextOptions.findIndex(function (a) {
          return a.id === id;
        });
        if (idx !== -1) nextOptions.splice(idx, 1);
        options.value = nextOptions;

        activeOptionIndex.value = function () {
          if (idx === activeOptionIndex.value) return null;
          if (currentActiveOption === null) return null; // If we removed the option before the actual active index, then it would be out of sync. To
          // fix this, we will find the correct (new) index position.

          return nextOptions.indexOf(currentActiveOption);
        }();
      },
      select: function select(value) {
        if (props.disabled) return;
        emit('update:modelValue', value);
      }
    };
    useWindowEvent('mousedown', function (event) {
      var _dom, _dom2, _dom3;

      var target = event.target;
      var active = document.activeElement;
      if (listboxState.value !== ListboxStates.Open) return;
      if ((_dom = dom(buttonRef)) == null ? void 0 : _dom.contains(target)) return;
      if (!((_dom2 = dom(optionsRef)) == null ? void 0 : _dom2.contains(target))) api.closeListbox();
      if (active !== document.body && (active == null ? void 0 : active.contains(target))) return; // Keep focus on newly clicked/focused element

      if (!event.defaultPrevented) (_dom3 = dom(buttonRef)) == null ? void 0 : _dom3.focus({
        preventScroll: true
      });
    }); // @ts-expect-error Types of property 'dataRef' are incompatible.

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(ListboxContext, api);
    useOpenClosedProvider((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _match;

      return match(listboxState.value, (_match = {}, _match[ListboxStates.Open] = State.Open, _match[ListboxStates.Closed] = State.Closed, _match));
    }));
    return function () {
      var slot = {
        open: listboxState.value === ListboxStates.Open,
        disabled: props.disabled
      };
      return render({
        props: omit(props, ['modelValue', 'onUpdate:modelValue', 'disabled', 'horizontal']),
        slot: slot,
        slots: slots,
        attrs: attrs,
        name: 'Listbox'
      });
    };
  }
}); // ---

var ListboxLabel = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxLabel',
  props: {
    as: {
      type: [Object, String],
      "default": 'label'
    }
  },
  render: function render$1() {
    var api = useListboxContext('ListboxLabel');
    var slot = {
      open: api.listboxState.value === ListboxStates.Open,
      disabled: api.disabled.value
    };
    var propsWeControl = {
      id: this.id,
      ref: 'el',
      onClick: this.handleClick
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'ListboxLabel'
    });
  },
  setup: function setup() {
    var api = useListboxContext('ListboxLabel');
    var id = "headlessui-listbox-label-" + useId();
    return {
      id: id,
      el: api.labelRef,
      handleClick: function handleClick() {
        var _dom4;

        (_dom4 = dom(api.buttonRef)) == null ? void 0 : _dom4.focus({
          preventScroll: true
        });
      }
    };
  }
}); // ---

var ListboxButton = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxButton',
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    }
  },
  render: function render$1() {
    var _dom5, _dom6;

    var api = useListboxContext('ListboxButton');
    var slot = {
      open: api.listboxState.value === ListboxStates.Open,
      disabled: api.disabled.value
    };
    var propsWeControl = {
      ref: 'el',
      id: this.id,
      type: 'button',
      'aria-haspopup': true,
      'aria-controls': (_dom5 = dom(api.optionsRef)) == null ? void 0 : _dom5.id,
      'aria-expanded': api.disabled.value ? undefined : api.listboxState.value === ListboxStates.Open,
      'aria-labelledby': api.labelRef.value ? [(_dom6 = dom(api.labelRef)) == null ? void 0 : _dom6.id, this.id].join(' ') : undefined,
      disabled: api.disabled.value === true ? true : undefined,
      onKeydown: this.handleKeyDown,
      onKeyup: this.handleKeyUp,
      onClick: this.handleClick
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'ListboxButton'
    });
  },
  setup: function setup() {
    var api = useListboxContext('ListboxButton');
    var id = "headlessui-listbox-button-" + useId();

    function handleKeyDown(event) {
      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
        case Keys.Space:
        case Keys.Enter:
        case Keys.ArrowDown:
          event.preventDefault();
          api.openListbox();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom7;

            (_dom7 = dom(api.optionsRef)) == null ? void 0 : _dom7.focus({
              preventScroll: true
            });
            if (!api.value.value) api.goToOption(Focus$1.First);
          });
          break;

        case Keys.ArrowUp:
          event.preventDefault();
          api.openListbox();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom8;

            (_dom8 = dom(api.optionsRef)) == null ? void 0 : _dom8.focus({
              preventScroll: true
            });
            if (!api.value.value) api.goToOption(Focus$1.Last);
          });
          break;
      }
    }

    function handleKeyUp(event) {
      switch (event.key) {
        case Keys.Space:
          // Required for firefox, event.preventDefault() in handleKeyDown for
          // the Space key doesn't cancel the handleKeyUp, which in turn
          // triggers a *click*.
          event.preventDefault();
          break;
      }
    }

    function handleClick(event) {
      if (api.disabled.value) return;

      if (api.listboxState.value === ListboxStates.Open) {
        api.closeListbox();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _dom9;

          return (_dom9 = dom(api.buttonRef)) == null ? void 0 : _dom9.focus({
            preventScroll: true
          });
        });
      } else {
        event.preventDefault();
        api.openListbox();
        nextFrame(function () {
          var _dom10;

          return (_dom10 = dom(api.optionsRef)) == null ? void 0 : _dom10.focus({
            preventScroll: true
          });
        });
      }
    }

    return {
      id: id,
      el: api.buttonRef,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      handleClick: handleClick
    };
  }
}); // ---

var ListboxOptions = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxOptions',
  props: {
    as: {
      type: [Object, String],
      "default": 'ul'
    },
    "static": {
      type: Boolean,
      "default": false
    },
    unmount: {
      type: Boolean,
      "default": true
    }
  },
  render: function render$1() {
    var _api$options$value$ap, _dom$id, _dom11, _dom12;

    var api = useListboxContext('ListboxOptions');
    var slot = {
      open: api.listboxState.value === ListboxStates.Open
    };
    var propsWeControl = {
      'aria-activedescendant': api.activeOptionIndex.value === null ? undefined : (_api$options$value$ap = api.options.value[api.activeOptionIndex.value]) == null ? void 0 : _api$options$value$ap.id,
      'aria-labelledby': (_dom$id = (_dom11 = dom(api.labelRef)) == null ? void 0 : _dom11.id) != null ? _dom$id : (_dom12 = dom(api.buttonRef)) == null ? void 0 : _dom12.id,
      'aria-orientation': api.orientation.value,
      id: this.id,
      onKeydown: this.handleKeyDown,
      role: 'listbox',
      tabIndex: 0,
      ref: 'el'
    };
    var passThroughProps = this.$props;
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      features: Features.RenderStrategy | Features.Static,
      visible: this.visible,
      name: 'ListboxOptions'
    });
  },
  setup: function setup() {
    var api = useListboxContext('ListboxOptions');
    var id = "headlessui-listbox-options-" + useId();
    var searchDebounce = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    function handleKeyDown(event) {
      if (searchDebounce.value) clearTimeout(searchDebounce.value);

      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
        // @ts-expect-error Fallthrough is expected here
        case Keys.Space:
          if (api.searchQuery.value !== '') {
            event.preventDefault();
            event.stopPropagation();
            return api.search(event.key);
          }

        // When in type ahead mode, fallthrough

        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();

          if (api.activeOptionIndex.value !== null) {
            var dataRef = api.options.value[api.activeOptionIndex.value].dataRef;
            api.select(dataRef.value);
          }

          api.closeListbox();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom13;

            return (_dom13 = dom(api.buttonRef)) == null ? void 0 : _dom13.focus({
              preventScroll: true
            });
          });
          break;

        case match(api.orientation.value, {
          vertical: Keys.ArrowDown,
          horizontal: Keys.ArrowRight
        }):
          event.preventDefault();
          event.stopPropagation();
          return api.goToOption(Focus$1.Next);

        case match(api.orientation.value, {
          vertical: Keys.ArrowUp,
          horizontal: Keys.ArrowLeft
        }):
          event.preventDefault();
          event.stopPropagation();
          return api.goToOption(Focus$1.Previous);

        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          event.stopPropagation();
          return api.goToOption(Focus$1.First);

        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          event.stopPropagation();
          return api.goToOption(Focus$1.Last);

        case Keys.Escape:
          event.preventDefault();
          event.stopPropagation();
          api.closeListbox();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom14;

            return (_dom14 = dom(api.buttonRef)) == null ? void 0 : _dom14.focus({
              preventScroll: true
            });
          });
          break;

        case Keys.Tab:
          event.preventDefault();
          event.stopPropagation();
          break;

        default:
          if (event.key.length === 1) {
            api.search(event.key);
            searchDebounce.value = setTimeout(function () {
              return api.clearSearch();
            }, 350);
          }

          break;
      }
    }

    var usesOpenClosedState = useOpenClosed();
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState.value === State.Open;
      }

      return api.listboxState.value === ListboxStates.Open;
    });
    return {
      id: id,
      el: api.optionsRef,
      handleKeyDown: handleKeyDown,
      visible: visible
    };
  }
});
var ListboxOption = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ListboxOption',
  props: {
    as: {
      type: [Object, String],
      "default": 'li'
    },
    value: {
      type: [Object, String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
        attrs = _ref2.attrs;
    var api = useListboxContext('ListboxOption');
    var id = "headlessui-listbox-option-" + useId();
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return api.activeOptionIndex.value !== null ? api.options.value[api.activeOptionIndex.value].id === id : false;
    });
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(api.value.value) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props.value);
    });
    var dataRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      disabled: props.disabled,
      value: props.value,
      textValue: ''
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var _document$getElementB, _document$getElementB2;

      var textValue = (_document$getElementB = document.getElementById(id)) == null ? void 0 : (_document$getElementB2 = _document$getElementB.textContent) == null ? void 0 : _document$getElementB2.toLowerCase().trim();
      if (textValue !== undefined) dataRef.value.textValue = textValue;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return api.registerOption(id, dataRef);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return api.unregisterOption(id);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([api.listboxState, selected], function () {
        var _document$getElementB3;

        if (api.listboxState.value !== ListboxStates.Open) return;
        if (!selected.value) return;
        api.goToOption(Focus$1.Specific, id);
        (_document$getElementB3 = document.getElementById(id)) == null ? void 0 : _document$getElementB3.focus == null ? void 0 : _document$getElementB3.focus();
      }, {
        immediate: true
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      if (api.listboxState.value !== ListboxStates.Open) return;
      if (!active.value) return;
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        var _document$getElementB4;

        return (_document$getElementB4 = document.getElementById(id)) == null ? void 0 : _document$getElementB4.scrollIntoView == null ? void 0 : _document$getElementB4.scrollIntoView({
          block: 'nearest'
        });
      });
    });

    function handleClick(event) {
      if (props.disabled) return event.preventDefault();
      api.select(props.value);
      api.closeListbox();
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        var _dom15;

        return (_dom15 = dom(api.buttonRef)) == null ? void 0 : _dom15.focus({
          preventScroll: true
        });
      });
    }

    function handleFocus() {
      if (props.disabled) return api.goToOption(Focus$1.Nothing);
      api.goToOption(Focus$1.Specific, id);
    }

    function handleMove() {
      if (props.disabled) return;
      if (active.value) return;
      api.goToOption(Focus$1.Specific, id);
    }

    function handleLeave() {
      if (props.disabled) return;
      if (!active.value) return;
      api.goToOption(Focus$1.Nothing);
    }

    return function () {
      var disabled = props.disabled;
      var slot = {
        active: active.value,
        selected: selected.value,
        disabled: disabled
      };
      var propsWeControl = {
        id: id,
        role: 'option',
        tabIndex: disabled === true ? undefined : -1,
        'aria-disabled': disabled === true ? true : undefined,
        'aria-selected': selected.value === true ? selected.value : undefined,
        disabled: undefined,
        onClick: handleClick,
        onFocus: handleFocus,
        onPointermove: handleMove,
        onMousemove: handleMove,
        onPointerleave: handleLeave,
        onMouseleave: handleLeave
      };
      return render({
        props: _extends({}, props, propsWeControl),
        slot: slot,
        attrs: attrs,
        slots: slots,
        name: 'ListboxOption'
      });
    };
  }
});

function useTreeWalker(_ref) {
  var container = _ref.container,
      accept = _ref.accept,
      walk = _ref.walk,
      enabled = _ref.enabled;
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
    var root = container.value;
    if (!root) return;
    if (enabled !== undefined && !enabled.value) return;
    var acceptNode = Object.assign(function (node) {
      return accept(node);
    }, {
      acceptNode: accept
    });
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, acceptNode, false);

    while (walker.nextNode()) {
      walk(walker.currentNode);
    }
  });
}

var MenuStates;

(function (MenuStates) {
  MenuStates[MenuStates["Open"] = 0] = "Open";
  MenuStates[MenuStates["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));

function nextFrame$1(cb) {
  requestAnimationFrame(function () {
    return requestAnimationFrame(cb);
  });
}

var MenuContext = /*#__PURE__*/Symbol('MenuContext');

function useMenuContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(MenuContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <Menu /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuContext);
    throw err;
  }

  return context;
}

var Menu = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Menu',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var menuState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(MenuStates.Closed);
    var buttonRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var itemsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var searchQuery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var activeItemIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var api = {
      menuState: menuState,
      buttonRef: buttonRef,
      itemsRef: itemsRef,
      items: items,
      searchQuery: searchQuery,
      activeItemIndex: activeItemIndex,
      closeMenu: function closeMenu() {
        menuState.value = MenuStates.Closed;
        activeItemIndex.value = null;
      },
      openMenu: function openMenu() {
        return menuState.value = MenuStates.Open;
      },
      goToItem: function goToItem(focus, id) {
        var nextActiveItemIndex = calculateActiveIndex(focus === Focus$1.Specific ? {
          focus: Focus$1.Specific,
          id: id
        } : {
          focus: focus
        }, {
          resolveItems: function resolveItems() {
            return items.value;
          },
          resolveActiveIndex: function resolveActiveIndex() {
            return activeItemIndex.value;
          },
          resolveId: function resolveId(item) {
            return item.id;
          },
          resolveDisabled: function resolveDisabled(item) {
            return item.dataRef.disabled;
          }
        });
        if (searchQuery.value === '' && activeItemIndex.value === nextActiveItemIndex) return;
        searchQuery.value = '';
        activeItemIndex.value = nextActiveItemIndex;
      },
      search: function search(value) {
        searchQuery.value += value.toLowerCase();
        var match = items.value.findIndex(function (item) {
          return item.dataRef.textValue.startsWith(searchQuery.value) && !item.dataRef.disabled;
        });
        if (match === -1 || match === activeItemIndex.value) return;
        activeItemIndex.value = match;
      },
      clearSearch: function clearSearch() {
        searchQuery.value = '';
      },
      registerItem: function registerItem(id, dataRef) {
        // @ts-expect-error The expected type comes from property 'dataRef' which is declared here on type '{ id: string; dataRef: { textValue: string; disabled: boolean; }; }'
        items.value.push({
          id: id,
          dataRef: dataRef
        });
      },
      unregisterItem: function unregisterItem(id) {
        var nextItems = items.value.slice();
        var currentActiveItem = activeItemIndex.value !== null ? nextItems[activeItemIndex.value] : null;
        var idx = nextItems.findIndex(function (a) {
          return a.id === id;
        });
        if (idx !== -1) nextItems.splice(idx, 1);
        items.value = nextItems;

        activeItemIndex.value = function () {
          if (idx === activeItemIndex.value) return null;
          if (currentActiveItem === null) return null; // If we removed the item before the actual active index, then it would be out of sync. To
          // fix this, we will find the correct (new) index position.

          return nextItems.indexOf(currentActiveItem);
        }();
      }
    };
    useWindowEvent('mousedown', function (event) {
      var _dom, _dom2, _dom3;

      var target = event.target;
      var active = document.activeElement;
      if (menuState.value !== MenuStates.Open) return;
      if ((_dom = dom(buttonRef)) == null ? void 0 : _dom.contains(target)) return;
      if (!((_dom2 = dom(itemsRef)) == null ? void 0 : _dom2.contains(target))) api.closeMenu();
      if (active !== document.body && (active == null ? void 0 : active.contains(target))) return; // Keep focus on newly clicked/focused element

      if (!event.defaultPrevented) (_dom3 = dom(buttonRef)) == null ? void 0 : _dom3.focus({
        preventScroll: true
      });
    }); // @ts-expect-error Types of property 'dataRef' are incompatible.

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(MenuContext, api);
    useOpenClosedProvider((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _match;

      return match(menuState.value, (_match = {}, _match[MenuStates.Open] = State.Open, _match[MenuStates.Closed] = State.Closed, _match));
    }));
    return function () {
      var slot = {
        open: menuState.value === MenuStates.Open
      };
      return render({
        props: props,
        slot: slot,
        slots: slots,
        attrs: attrs,
        name: 'Menu'
      });
    };
  }
});
var MenuButton = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'MenuButton',
  props: {
    disabled: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [Object, String],
      "default": 'button'
    }
  },
  render: function render$1() {
    var _dom4;

    var api = useMenuContext('MenuButton');
    var slot = {
      open: api.menuState.value === MenuStates.Open
    };
    var propsWeControl = {
      ref: 'el',
      id: this.id,
      type: 'button',
      'aria-haspopup': true,
      'aria-controls': (_dom4 = dom(api.itemsRef)) == null ? void 0 : _dom4.id,
      'aria-expanded': this.$props.disabled ? undefined : api.menuState.value === MenuStates.Open,
      onKeydown: this.handleKeyDown,
      onKeyup: this.handleKeyUp,
      onClick: this.handleClick
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'MenuButton'
    });
  },
  setup: function setup(props) {
    var api = useMenuContext('MenuButton');
    var id = "headlessui-menu-button-" + useId();

    function handleKeyDown(event) {
      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
        case Keys.Space:
        case Keys.Enter:
        case Keys.ArrowDown:
          event.preventDefault();
          event.stopPropagation();
          api.openMenu();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom5;

            (_dom5 = dom(api.itemsRef)) == null ? void 0 : _dom5.focus({
              preventScroll: true
            });
            api.goToItem(Focus$1.First);
          });
          break;

        case Keys.ArrowUp:
          event.preventDefault();
          event.stopPropagation();
          api.openMenu();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom6;

            (_dom6 = dom(api.itemsRef)) == null ? void 0 : _dom6.focus({
              preventScroll: true
            });
            api.goToItem(Focus$1.Last);
          });
          break;
      }
    }

    function handleKeyUp(event) {
      switch (event.key) {
        case Keys.Space:
          // Required for firefox, event.preventDefault() in handleKeyDown for
          // the Space key doesn't cancel the handleKeyUp, which in turn
          // triggers a *click*.
          event.preventDefault();
          break;
      }
    }

    function handleClick(event) {
      if (props.disabled) return;

      if (api.menuState.value === MenuStates.Open) {
        api.closeMenu();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          var _dom7;

          return (_dom7 = dom(api.buttonRef)) == null ? void 0 : _dom7.focus({
            preventScroll: true
          });
        });
      } else {
        event.preventDefault();
        event.stopPropagation();
        api.openMenu();
        nextFrame$1(function () {
          var _dom8;

          return (_dom8 = dom(api.itemsRef)) == null ? void 0 : _dom8.focus({
            preventScroll: true
          });
        });
      }
    }

    return {
      id: id,
      el: api.buttonRef,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      handleClick: handleClick
    };
  }
});
var MenuItems = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'MenuItems',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    "static": {
      type: Boolean,
      "default": false
    },
    unmount: {
      type: Boolean,
      "default": true
    }
  },
  render: function render$1() {
    var _api$items$value$api$, _dom9;

    var api = useMenuContext('MenuItems');
    var slot = {
      open: api.menuState.value === MenuStates.Open
    };
    var propsWeControl = {
      'aria-activedescendant': api.activeItemIndex.value === null ? undefined : (_api$items$value$api$ = api.items.value[api.activeItemIndex.value]) == null ? void 0 : _api$items$value$api$.id,
      'aria-labelledby': (_dom9 = dom(api.buttonRef)) == null ? void 0 : _dom9.id,
      id: this.id,
      onKeydown: this.handleKeyDown,
      onKeyup: this.handleKeyUp,
      role: 'menu',
      tabIndex: 0,
      ref: 'el'
    };
    var passThroughProps = this.$props;
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      features: Features.RenderStrategy | Features.Static,
      visible: this.visible,
      name: 'MenuItems'
    });
  },
  setup: function setup() {
    var api = useMenuContext('MenuItems');
    var id = "headlessui-menu-items-" + useId();
    var searchDebounce = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    useTreeWalker({
      container: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return dom(api.itemsRef);
      }),
      enabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return api.menuState.value === MenuStates.Open;
      }),
      accept: function accept(node) {
        if (node.getAttribute('role') === 'menuitem') return NodeFilter.FILTER_REJECT;
        if (node.hasAttribute('role')) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      },
      walk: function walk(node) {
        node.setAttribute('role', 'none');
      }
    });

    function handleKeyDown(event) {
      if (searchDebounce.value) clearTimeout(searchDebounce.value);

      switch (event.key) {
        // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
        // @ts-expect-error Fallthrough is expected here
        case Keys.Space:
          if (api.searchQuery.value !== '') {
            event.preventDefault();
            event.stopPropagation();
            return api.search(event.key);
          }

        // When in type ahead mode, fallthrough

        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();

          if (api.activeItemIndex.value !== null) {
            var _document$getElementB;

            var _id = api.items.value[api.activeItemIndex.value].id;
            (_document$getElementB = document.getElementById(_id)) == null ? void 0 : _document$getElementB.click();
          }

          api.closeMenu();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom10;

            return (_dom10 = dom(api.buttonRef)) == null ? void 0 : _dom10.focus({
              preventScroll: true
            });
          });
          break;

        case Keys.ArrowDown:
          event.preventDefault();
          event.stopPropagation();
          return api.goToItem(Focus$1.Next);

        case Keys.ArrowUp:
          event.preventDefault();
          event.stopPropagation();
          return api.goToItem(Focus$1.Previous);

        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          event.stopPropagation();
          return api.goToItem(Focus$1.First);

        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          event.stopPropagation();
          return api.goToItem(Focus$1.Last);

        case Keys.Escape:
          event.preventDefault();
          event.stopPropagation();
          api.closeMenu();
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            var _dom11;

            return (_dom11 = dom(api.buttonRef)) == null ? void 0 : _dom11.focus({
              preventScroll: true
            });
          });
          break;

        case Keys.Tab:
          event.preventDefault();
          event.stopPropagation();
          break;

        default:
          if (event.key.length === 1) {
            api.search(event.key);
            searchDebounce.value = setTimeout(function () {
              return api.clearSearch();
            }, 350);
          }

          break;
      }
    }

    function handleKeyUp(event) {
      switch (event.key) {
        case Keys.Space:
          // Required for firefox, event.preventDefault() in handleKeyDown for
          // the Space key doesn't cancel the handleKeyUp, which in turn
          // triggers a *click*.
          event.preventDefault();
          break;
      }
    }

    var usesOpenClosedState = useOpenClosed();
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState.value === State.Open;
      }

      return api.menuState.value === MenuStates.Open;
    });
    return {
      id: id,
      el: api.itemsRef,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      visible: visible
    };
  }
});
var MenuItem = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'MenuItem',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots,
        attrs = _ref2.attrs;
    var api = useMenuContext('MenuItem');
    var id = "headlessui-menu-item-" + useId();
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return api.activeItemIndex.value !== null ? api.items.value[api.activeItemIndex.value].id === id : false;
    });
    var dataRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      disabled: props.disabled,
      textValue: ''
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var _document$getElementB2, _document$getElementB3;

      var textValue = (_document$getElementB2 = document.getElementById(id)) == null ? void 0 : (_document$getElementB3 = _document$getElementB2.textContent) == null ? void 0 : _document$getElementB3.toLowerCase().trim();
      if (textValue !== undefined) dataRef.value.textValue = textValue;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return api.registerItem(id, dataRef);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return api.unregisterItem(id);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      if (api.menuState.value !== MenuStates.Open) return;
      if (!active.value) return;
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        var _document$getElementB4;

        return (_document$getElementB4 = document.getElementById(id)) == null ? void 0 : _document$getElementB4.scrollIntoView == null ? void 0 : _document$getElementB4.scrollIntoView({
          block: 'nearest'
        });
      });
    });

    function handleClick(event) {
      if (props.disabled) return event.preventDefault();
      api.closeMenu();
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        var _dom12;

        return (_dom12 = dom(api.buttonRef)) == null ? void 0 : _dom12.focus({
          preventScroll: true
        });
      });
    }

    function handleFocus() {
      if (props.disabled) return api.goToItem(Focus$1.Nothing);
      api.goToItem(Focus$1.Specific, id);
    }

    function handleMove() {
      if (props.disabled) return;
      if (active.value) return;
      api.goToItem(Focus$1.Specific, id);
    }

    function handleLeave() {
      if (props.disabled) return;
      if (!active.value) return;
      api.goToItem(Focus$1.Nothing);
    }

    return function () {
      var disabled = props.disabled;
      var slot = {
        active: active.value,
        disabled: disabled
      };
      var propsWeControl = {
        id: id,
        role: 'menuitem',
        tabIndex: disabled === true ? undefined : -1,
        'aria-disabled': disabled === true ? true : undefined,
        onClick: handleClick,
        onFocus: handleFocus,
        onPointermove: handleMove,
        onMousemove: handleMove,
        onPointerleave: handleLeave,
        onMouseleave: handleLeave
      };
      return render({
        props: _extends({}, props, propsWeControl),
        slot: slot,
        attrs: attrs,
        slots: slots,
        name: 'MenuItem'
      });
    };
  }
});

var PopoverStates;

(function (PopoverStates) {
  PopoverStates[PopoverStates["Open"] = 0] = "Open";
  PopoverStates[PopoverStates["Closed"] = 1] = "Closed";
})(PopoverStates || (PopoverStates = {}));

var PopoverContext = /*#__PURE__*/Symbol('PopoverContext');

function usePopoverContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(PopoverContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Popover.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }

  return context;
}

var PopoverGroupContext = /*#__PURE__*/Symbol('PopoverGroupContext');

function usePopoverGroupContext() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(PopoverGroupContext, null);
}

var PopoverPanelContext = /*#__PURE__*/Symbol('PopoverPanelContext');

function usePopoverPanelContext() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(PopoverPanelContext, null);
} // ---


var Popover = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Popover',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var buttonId = "headlessui-popover-button-" + useId();
    var panelId = "headlessui-popover-panel-" + useId();
    var popoverState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(PopoverStates.Closed);
    var button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var panel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var api = {
      popoverState: popoverState,
      buttonId: buttonId,
      panelId: panelId,
      panel: panel,
      button: button,
      togglePopover: function togglePopover() {
        var _match;

        popoverState.value = match(popoverState.value, (_match = {}, _match[PopoverStates.Open] = PopoverStates.Closed, _match[PopoverStates.Closed] = PopoverStates.Open, _match));
      },
      closePopover: function closePopover() {
        if (popoverState.value === PopoverStates.Closed) return;
        popoverState.value = PopoverStates.Closed;
      },
      close: function close(focusableElement) {
        api.closePopover();

        var restoreElement = function () {
          if (!focusableElement) return dom(api.button);
          if (focusableElement instanceof HTMLElement) return focusableElement;
          if (focusableElement.value instanceof HTMLElement) return dom(focusableElement);
          return dom(api.button);
        }();

        restoreElement == null ? void 0 : restoreElement.focus();
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(PopoverContext, api);
    useOpenClosedProvider((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _match2;

      return match(popoverState.value, (_match2 = {}, _match2[PopoverStates.Open] = State.Open, _match2[PopoverStates.Closed] = State.Closed, _match2));
    }));
    var registerBag = {
      buttonId: buttonId,
      panelId: panelId,
      close: function close() {
        api.closePopover();
      }
    };
    var groupContext = usePopoverGroupContext();
    var registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;

    function isFocusWithinPopoverGroup() {
      var _groupContext$isFocus, _dom, _dom2;

      return (_groupContext$isFocus = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _groupContext$isFocus : ((_dom = dom(button)) == null ? void 0 : _dom.contains(document.activeElement)) || ((_dom2 = dom(panel)) == null ? void 0 : _dom2.contains(document.activeElement));
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      return registerPopover == null ? void 0 : registerPopover(registerBag);
    }); // Handle focus out

    useWindowEvent('focus', function () {
      if (popoverState.value !== PopoverStates.Open) return;
      if (isFocusWithinPopoverGroup()) return;
      if (!button) return;
      if (!panel) return;
      api.closePopover();
    }, true); // Handle outside click

    useWindowEvent('mousedown', function (event) {
      var _dom3, _dom4;

      var target = event.target;
      if (popoverState.value !== PopoverStates.Open) return;
      if ((_dom3 = dom(button)) == null ? void 0 : _dom3.contains(target)) return;
      if ((_dom4 = dom(panel)) == null ? void 0 : _dom4.contains(target)) return;
      api.closePopover();

      if (!isFocusableElement(target, FocusableMode.Loose)) {
        var _dom5;

        event.preventDefault();
        (_dom5 = dom(button)) == null ? void 0 : _dom5.focus();
      }
    });
    return function () {
      var slot = {
        open: popoverState.value === PopoverStates.Open,
        close: api.close
      };
      return render({
        props: props,
        slot: slot,
        slots: slots,
        attrs: attrs,
        name: 'Popover'
      });
    };
  }
}); // ---

var PopoverButton = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'PopoverButton',
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    },
    disabled: {
      type: [Boolean],
      "default": false
    }
  },
  render: function render$1() {
    var api = usePopoverContext('PopoverButton');
    var slot = {
      open: api.popoverState.value === PopoverStates.Open
    };
    var propsWeControl = this.isWithinPanel ? {
      type: 'button',
      onKeydown: this.handleKeyDown,
      onClick: this.handleClick
    } : {
      ref: 'el',
      id: api.buttonId,
      type: 'button',
      'aria-expanded': this.$props.disabled ? undefined : api.popoverState.value === PopoverStates.Open,
      'aria-controls': dom(api.panel) ? api.panelId : undefined,
      disabled: this.$props.disabled ? true : undefined,
      onKeydown: this.handleKeyDown,
      onKeyup: this.handleKeyUp,
      onClick: this.handleClick
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'PopoverButton'
    });
  },
  setup: function setup(props) {
    var api = usePopoverContext('PopoverButton');
    var groupContext = usePopoverGroupContext();
    var closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
    var panelContext = usePopoverPanelContext();
    var isWithinPanel = panelContext === null ? false : panelContext === api.panelId; // TODO: Revisit when handling Tab/Shift+Tab when using Portal's

    var activeElementRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var previousActiveElementRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(typeof window === 'undefined' ? null : document.activeElement);
    useWindowEvent('focus', function () {
      previousActiveElementRef.value = activeElementRef.value;
      activeElementRef.value = document.activeElement;
    }, true);
    return {
      isWithinPanel: isWithinPanel,
      el: isWithinPanel ? null : api.button,
      handleKeyDown: function handleKeyDown(event) {
        var _dom6, _dom7;

        if (isWithinPanel) {
          if (api.popoverState.value === PopoverStates.Closed) return;

          switch (event.key) {
            case Keys.Space:
            case Keys.Enter:
              event.preventDefault(); // Prevent triggering a *click* event

              event.stopPropagation();
              api.closePopover();
              (_dom6 = dom(api.button)) == null ? void 0 : _dom6.focus(); // Re-focus the original opening Button

              break;
          }
        } else {
          switch (event.key) {
            case Keys.Space:
            case Keys.Enter:
              event.preventDefault(); // Prevent triggering a *click* event

              event.stopPropagation();
              if (api.popoverState.value === PopoverStates.Closed) closeOthers == null ? void 0 : closeOthers(api.buttonId);
              api.togglePopover();
              break;

            case Keys.Escape:
              if (api.popoverState.value !== PopoverStates.Open) return closeOthers == null ? void 0 : closeOthers(api.buttonId);
              if (!dom(api.button)) return;
              if (!((_dom7 = dom(api.button)) == null ? void 0 : _dom7.contains(document.activeElement))) return;
              api.closePopover();
              break;

            case Keys.Tab:
              if (api.popoverState.value !== PopoverStates.Open) return;
              if (!api.panel) return;
              if (!api.button) return; // TODO: Revisit when handling Tab/Shift+Tab when using Portal's

              if (event.shiftKey) {
                var _dom8, _dom9;

                // Check if the last focused element exists, and check that it is not inside button or panel itself
                if (!previousActiveElementRef.value) return;
                if ((_dom8 = dom(api.button)) == null ? void 0 : _dom8.contains(previousActiveElementRef.value)) return;
                if ((_dom9 = dom(api.panel)) == null ? void 0 : _dom9.contains(previousActiveElementRef.value)) return; // Check if the last focused element is *after* the button in the DOM

                var focusableElements = getFocusableElements();
                var previousIdx = focusableElements.indexOf(previousActiveElementRef.value);
                var buttonIdx = focusableElements.indexOf(dom(api.button));
                if (buttonIdx > previousIdx) return;
                event.preventDefault();
                event.stopPropagation();
                focusIn(dom(api.panel), Focus.Last);
              } else {
                event.preventDefault();
                event.stopPropagation();
                focusIn(dom(api.panel), Focus.First);
              }

              break;
          }
        }
      },
      handleKeyUp: function handleKeyUp(event) {
        var _dom10, _dom11;

        if (isWithinPanel) return;

        if (event.key === Keys.Space) {
          // Required for firefox, event.preventDefault() in handleKeyDown for
          // the Space key doesn't cancel the handleKeyUp, which in turn
          // triggers a *click*.
          event.preventDefault();
        }

        if (api.popoverState.value !== PopoverStates.Open) return;
        if (!api.panel) return;
        if (!api.button) return; // TODO: Revisit when handling Tab/Shift+Tab when using Portal's

        switch (event.key) {
          case Keys.Tab:
            // Check if the last focused element exists, and check that it is not inside button or panel itself
            if (!previousActiveElementRef.value) return;
            if ((_dom10 = dom(api.button)) == null ? void 0 : _dom10.contains(previousActiveElementRef.value)) return;
            if ((_dom11 = dom(api.panel)) == null ? void 0 : _dom11.contains(previousActiveElementRef.value)) return; // Check if the last focused element is *after* the button in the DOM

            var focusableElements = getFocusableElements();
            var previousIdx = focusableElements.indexOf(previousActiveElementRef.value);
            var buttonIdx = focusableElements.indexOf(dom(api.button));
            if (buttonIdx > previousIdx) return;
            event.preventDefault();
            event.stopPropagation();
            focusIn(dom(api.panel), Focus.Last);
            break;
        }
      },
      handleClick: function handleClick() {
        if (props.disabled) return;

        if (isWithinPanel) {
          var _dom12;

          api.closePopover();
          (_dom12 = dom(api.button)) == null ? void 0 : _dom12.focus(); // Re-focus the original opening Button
        } else {
          var _dom13;

          if (api.popoverState.value === PopoverStates.Closed) closeOthers == null ? void 0 : closeOthers(api.buttonId);
          (_dom13 = dom(api.button)) == null ? void 0 : _dom13.focus();
          api.togglePopover();
        }
      },
      handleFocus: function handleFocus() {}
    };
  }
}); // ---

var PopoverOverlay = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'PopoverOverlay',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    "static": {
      type: Boolean,
      "default": false
    },
    unmount: {
      type: Boolean,
      "default": true
    }
  },
  render: function render$1() {
    var api = usePopoverContext('PopoverOverlay');
    var slot = {
      open: api.popoverState.value === PopoverStates.Open
    };
    var propsWeControl = {
      id: this.id,
      ref: 'el',
      'aria-hidden': true,
      onClick: this.handleClick
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      features: Features.RenderStrategy | Features.Static,
      visible: this.visible,
      name: 'PopoverOverlay'
    });
  },
  setup: function setup() {
    var api = usePopoverContext('PopoverOverlay');
    var usesOpenClosedState = useOpenClosed();
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState.value === State.Open;
      }

      return api.popoverState.value === PopoverStates.Open;
    });
    return {
      id: "headlessui-popover-overlay-" + useId(),
      handleClick: function handleClick() {
        api.closePopover();
      },
      visible: visible
    };
  }
}); // ---

var PopoverPanel = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'PopoverPanel',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    "static": {
      type: Boolean,
      "default": false
    },
    unmount: {
      type: Boolean,
      "default": true
    },
    focus: {
      type: Boolean,
      "default": false
    }
  },
  render: function render$1() {
    var api = usePopoverContext('PopoverPanel');
    var slot = {
      open: api.popoverState.value === PopoverStates.Open,
      close: api.close
    };
    var propsWeControl = {
      ref: 'el',
      id: this.id,
      onKeydown: this.handleKeyDown
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      features: Features.RenderStrategy | Features.Static,
      visible: this.visible,
      name: 'PopoverPanel'
    });
  },
  setup: function setup(props) {
    var focus = props.focus;
    var api = usePopoverContext('PopoverPanel');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(PopoverPanelContext, api.panelId);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      api.panel.value = null;
    }); // Move focus within panel

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      var _dom14;

      if (!focus) return;
      if (api.popoverState.value !== PopoverStates.Open) return;
      if (!api.panel) return;
      var activeElement = document.activeElement;
      if ((_dom14 = dom(api.panel)) == null ? void 0 : _dom14.contains(activeElement)) return; // Already focused within Dialog

      focusIn(dom(api.panel), Focus.First);
    }); // Handle Tab / Shift+Tab focus positioning

    useWindowEvent('keydown', function (event) {
      var _dom15;

      if (api.popoverState.value !== PopoverStates.Open) return;
      if (!dom(api.panel)) return;
      if (event.key !== Keys.Tab) return;
      if (!document.activeElement) return;
      if (!((_dom15 = dom(api.panel)) == null ? void 0 : _dom15.contains(document.activeElement))) return; // We will take-over the default tab behaviour so that we have a bit
      // control over what is focused next. It will behave exactly the same,
      // but it will also "fix" some issues based on whether you are using a
      // Portal or not.

      event.preventDefault();
      var result = focusIn(dom(api.panel), event.shiftKey ? Focus.Previous : Focus.Next);

      if (result === FocusResult.Underflow) {
        var _dom16;

        return (_dom16 = dom(api.button)) == null ? void 0 : _dom16.focus();
      } else if (result === FocusResult.Overflow) {
        if (!dom(api.button)) return;
        var elements = getFocusableElements();
        var buttonIdx = elements.indexOf(dom(api.button));
        var nextElements = elements.splice(buttonIdx + 1) // Elements after button
        .filter(function (element) {
          var _dom17;

          return !((_dom17 = dom(api.panel)) == null ? void 0 : _dom17.contains(element));
        }); // Ignore items in panel
        // Try to focus the next element, however it could fail if we are in a
        // Portal that happens to be the very last one in the DOM. In that
        // case we would Error (because nothing after the button is
        // focusable). Therefore we will try and focus the very first item in
        // the document.body.

        if (focusIn(nextElements, Focus.First) === FocusResult.Error) {
          focusIn(document.body, Focus.First);
        }
      }
    }); // Handle focus out when we are in special "focus" mode

    useWindowEvent('focus', function () {
      var _dom18;

      if (!focus) return;
      if (api.popoverState.value !== PopoverStates.Open) return;
      if (!dom(api.panel)) return;
      if ((_dom18 = dom(api.panel)) == null ? void 0 : _dom18.contains(document.activeElement)) return;
      api.closePopover();
    }, true);
    var usesOpenClosedState = useOpenClosed();
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (usesOpenClosedState !== null) {
        return usesOpenClosedState.value === State.Open;
      }

      return api.popoverState.value === PopoverStates.Open;
    });
    return {
      id: api.panelId,
      el: api.panel,
      handleKeyDown: function handleKeyDown(event) {
        var _dom19, _dom20;

        switch (event.key) {
          case Keys.Escape:
            if (api.popoverState.value !== PopoverStates.Open) return;
            if (!dom(api.panel)) return;
            if (!((_dom19 = dom(api.panel)) == null ? void 0 : _dom19.contains(document.activeElement))) return;
            event.preventDefault();
            api.closePopover();
            (_dom20 = dom(api.button)) == null ? void 0 : _dom20.focus();
            break;
        }
      },
      visible: visible
    };
  }
}); // ---

var PopoverGroup = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'PopoverGroup',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    }
  },
  render: function render$1() {
    var propsWeControl = {
      ref: 'el'
    };
    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: {},
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'PopoverGroup'
    });
  },
  setup: function setup() {
    var groupRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var popovers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    function unregisterPopover(registerBag) {
      var idx = popovers.value.indexOf(registerBag);
      if (idx !== -1) popovers.value.splice(idx, 1);
    }

    function registerPopover(registerBag) {
      popovers.value.push(registerBag);
      return function () {
        unregisterPopover(registerBag);
      };
    }

    function isFocusWithinPopoverGroup() {
      var _dom21;

      var element = document.activeElement;
      if ((_dom21 = dom(groupRef)) == null ? void 0 : _dom21.contains(element)) return true; // Check if the focus is in one of the button or panel elements. This is important in case you are rendering inside a Portal.

      return popovers.value.some(function (bag) {
        var _document$getElementB, _document$getElementB2;

        return ((_document$getElementB = document.getElementById(bag.buttonId)) == null ? void 0 : _document$getElementB.contains(element)) || ((_document$getElementB2 = document.getElementById(bag.panelId)) == null ? void 0 : _document$getElementB2.contains(element));
      });
    }

    function closeOthers(buttonId) {
      for (var _iterator = _createForOfIteratorHelperLoose(popovers.value), _step; !(_step = _iterator()).done;) {
        var popover = _step.value;
        if (popover.buttonId !== buttonId) popover.close();
      }
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(PopoverGroupContext, {
      registerPopover: registerPopover,
      unregisterPopover: unregisterPopover,
      isFocusWithinPopoverGroup: isFocusWithinPopoverGroup,
      closeOthers: closeOthers
    });
    return {
      el: groupRef
    };
  }
});

var LabelContext = /*#__PURE__*/Symbol('LabelContext');

function useLabelContext() {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(LabelContext, null);

  if (context === null) {
    var err = new Error('You used a <Label /> component, but it is not inside a parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useLabelContext);
    throw err;
  }

  return context;
}

function useLabels(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$slot = _ref.slot,
      slot = _ref$slot === void 0 ? {} : _ref$slot,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'Label' : _ref$name,
      _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props;

  var labelIds = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  function register(value) {
    labelIds.value.push(value);
    return function () {
      var idx = labelIds.value.indexOf(value);
      if (idx === -1) return;
      labelIds.value.splice(idx, 1);
    };
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(LabelContext, {
    register: register,
    slot: slot,
    name: name,
    props: props
  }); // The actual id's as string or undefined.

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return labelIds.value.length > 0 ? labelIds.value.join(' ') : undefined;
  });
} // ---

var Label = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Label',
  props: {
    as: {
      type: [Object, String],
      "default": 'label'
    },
    passive: {
      type: [Boolean],
      "default": false
    }
  },
  render: function render$1() {
    var _this$context = this.context,
        _this$context$name = _this$context.name,
        name = _this$context$name === void 0 ? 'Label' : _this$context$name,
        _this$context$slot = _this$context.slot,
        slot = _this$context$slot === void 0 ? {} : _this$context$slot,
        _this$context$props = _this$context.props,
        props = _this$context$props === void 0 ? {} : _this$context$props;

    var _this$$props = this.$props,
        passive = _this$$props.passive,
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props, ["passive"]);

    var propsWeControl = _extends({}, Object.entries(props).reduce(function (acc, _ref2) {
      var _Object$assign;

      var key = _ref2[0],
          value = _ref2[1];
      return Object.assign(acc, (_Object$assign = {}, _Object$assign[key] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(value), _Object$assign));
    }, {}), {
      id: this.id
    });

    var allProps = _extends({}, passThroughProps, propsWeControl); // @ts-expect-error props are dynamic via context, some components will
    //                  provide an onClick then we can delete it.


    if (passive) delete allProps['onClick'];
    return render({
      props: allProps,
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: name
    });
  },
  setup: function setup() {
    var context = useLabelContext();
    var id = "headlessui-label-" + useId();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(context.register(id));
    });
    return {
      id: id,
      context: context
    };
  }
});

var RadioGroupContext = /*#__PURE__*/Symbol('RadioGroupContext');

function useRadioGroupContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(RadioGroupContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <RadioGroup /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useRadioGroupContext);
    throw err;
  }

  return context;
} // ---


var RadioGroup = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'RadioGroup',
  emits: ['update:modelValue'],
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    disabled: {
      type: [Boolean],
      "default": false
    },
    modelValue: {
      type: [Object, String, Number, Boolean]
    }
  },
  render: function render$1() {
    var _this$$props = this.$props,
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props, ["modelValue", "disabled"]);

    var propsWeControl = {
      ref: 'el',
      id: this.id,
      role: 'radiogroup',
      'aria-labelledby': this.labelledby,
      'aria-describedby': this.describedby,
      onKeydown: this.handleKeyDown
    };
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: {},
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'RadioGroup'
    });
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var radioGroupRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var labelledby = useLabels({
      name: 'RadioGroupLabel'
    });
    var describedby = useDescriptions({
      name: 'RadioGroupDescription'
    });
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.modelValue;
    });
    var api = {
      options: options,
      value: value,
      disabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return props.disabled;
      }),
      firstOption: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return options.value.find(function (option) {
          if (option.propsRef.disabled) return false;
          return true;
        });
      }),
      containsCheckedOption: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return options.value.some(function (option) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(option.propsRef.value) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props.modelValue);
        });
      }),
      change: function change(nextValue) {
        var _options$value$find;

        if (props.disabled) return false;
        if (value.value === nextValue) return false;
        var nextOption = (_options$value$find = options.value.find(function (option) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(option.propsRef.value) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(nextValue);
        })) == null ? void 0 : _options$value$find.propsRef;
        if (nextOption == null ? void 0 : nextOption.disabled) return false;
        emit('update:modelValue', nextValue);
        return true;
      },
      registerOption: function registerOption(action) {
        var _radioGroupRef$value;

        var orderMap = Array.from((_radioGroupRef$value = radioGroupRef.value) == null ? void 0 : _radioGroupRef$value.querySelectorAll('[id^="headlessui-radiogroup-option-"]')).reduce(function (lookup, element, index) {
          var _Object$assign;

          return Object.assign(lookup, (_Object$assign = {}, _Object$assign[element.id] = index, _Object$assign));
        }, {});
        options.value.push(action);
        options.value.sort(function (a, z) {
          return orderMap[a.id] - orderMap[z.id];
        });
      },
      unregisterOption: function unregisterOption(id) {
        var idx = options.value.findIndex(function (radio) {
          return radio.id === id;
        });
        if (idx === -1) return;
        options.value.splice(idx, 1);
      }
    }; // @ts-expect-error ...

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(RadioGroupContext, api);
    useTreeWalker({
      container: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return dom(radioGroupRef);
      }),
      accept: function accept(node) {
        if (node.getAttribute('role') === 'radio') return NodeFilter.FILTER_REJECT;
        if (node.hasAttribute('role')) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      },
      walk: function walk(node) {
        node.setAttribute('role', 'none');
      }
    });

    function handleKeyDown(event) {
      if (!radioGroupRef.value) return;
      if (!radioGroupRef.value.contains(event.target)) return;
      var all = options.value.filter(function (option) {
        return option.propsRef.disabled === false;
      }).map(function (radio) {
        return radio.element;
      });

      switch (event.key) {
        case Keys.ArrowLeft:
        case Keys.ArrowUp:
          {
            event.preventDefault();
            event.stopPropagation();
            var result = focusIn(all, Focus.Previous | Focus.WrapAround);

            if (result === FocusResult.Success) {
              var activeOption = options.value.find(function (option) {
                return option.element === document.activeElement;
              });
              if (activeOption) api.change(activeOption.propsRef.value);
            }
          }
          break;

        case Keys.ArrowRight:
        case Keys.ArrowDown:
          {
            event.preventDefault();
            event.stopPropagation();

            var _result = focusIn(all, Focus.Next | Focus.WrapAround);

            if (_result === FocusResult.Success) {
              var _activeOption = options.value.find(function (option) {
                return option.element === document.activeElement;
              });

              if (_activeOption) api.change(_activeOption.propsRef.value);
            }
          }
          break;

        case Keys.Space:
          {
            event.preventDefault();
            event.stopPropagation();

            var _activeOption2 = options.value.find(function (option) {
              return option.element === document.activeElement;
            });

            if (_activeOption2) api.change(_activeOption2.propsRef.value);
          }
          break;
      }
    }

    var id = "headlessui-radiogroup-" + useId();
    return {
      id: id,
      labelledby: labelledby,
      describedby: describedby,
      el: radioGroupRef,
      handleKeyDown: handleKeyDown
    };
  }
}); // ---

var OptionState;

(function (OptionState) {
  OptionState[OptionState["Empty"] = 1] = "Empty";
  OptionState[OptionState["Active"] = 2] = "Active";
})(OptionState || (OptionState = {}));

var RadioGroupOption = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'RadioGroupOption',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    value: {
      type: [Object, String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  render: function render$1() {
    var _this$$props2 = this.$props,
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props2, ["value", "disabled"]);

    var slot = {
      checked: this.checked,
      disabled: this.disabled,
      active: Boolean(this.state & OptionState.Active)
    };
    var propsWeControl = {
      id: this.id,
      ref: 'el',
      role: 'radio',
      'aria-checked': this.checked ? 'true' : 'false',
      'aria-labelledby': this.labelledby,
      'aria-describedby': this.describedby,
      'aria-disabled': this.disabled ? true : undefined,
      tabIndex: this.tabIndex,
      onClick: this.disabled ? undefined : this.handleClick,
      onFocus: this.disabled ? undefined : this.handleFocus,
      onBlur: this.disabled ? undefined : this.handleBlur
    };
    return render({
      props: _extends({}, passThroughProps, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'RadioGroupOption'
    });
  },
  setup: function setup(props) {
    var api = useRadioGroupContext('RadioGroupOption');
    var id = "headlessui-radiogroup-option-" + useId();
    var labelledby = useLabels({
      name: 'RadioGroupLabel'
    });
    var describedby = useDescriptions({
      name: 'RadioGroupDescription'
    });
    var optionRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var propsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        value: props.value,
        disabled: props.disabled
      };
    });
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(OptionState.Empty);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return api.registerOption({
        id: id,
        element: optionRef,
        propsRef: propsRef
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return api.unregisterOption(id);
    });
    var isFirstOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _api$firstOption$valu;

      return ((_api$firstOption$valu = api.firstOption.value) == null ? void 0 : _api$firstOption$valu.id) === id;
    });
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return api.disabled.value || props.disabled;
    });
    var checked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(api.value.value) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props.value);
    });
    return {
      id: id,
      el: optionRef,
      labelledby: labelledby,
      describedby: describedby,
      state: state,
      disabled: disabled,
      checked: checked,
      tabIndex: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        if (disabled.value) return -1;
        if (checked.value) return 0;
        if (!api.containsCheckedOption.value && isFirstOption.value) return 0;
        return -1;
      }),
      handleClick: function handleClick() {
        var _optionRef$value;

        if (!api.change(props.value)) return;
        state.value |= OptionState.Active;
        (_optionRef$value = optionRef.value) == null ? void 0 : _optionRef$value.focus();
      },
      handleFocus: function handleFocus() {
        state.value |= OptionState.Active;
      },
      handleBlur: function handleBlur() {
        state.value &= ~OptionState.Active;
      }
    };
  }
}); // ---

var RadioGroupLabel = Label;
var RadioGroupDescription = Description;

var GroupContext = /*#__PURE__*/Symbol('GroupContext'); // ---

var SwitchGroup = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'SwitchGroup',
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var switchRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var labelledby = useLabels({
      name: 'SwitchLabel',
      props: {
        onClick: function onClick() {
          if (!switchRef.value) return;
          switchRef.value.click();
          switchRef.value.focus({
            preventScroll: true
          });
        }
      }
    });
    var describedby = useDescriptions({
      name: 'SwitchDescription'
    });
    var api = {
      switchRef: switchRef,
      labelledby: labelledby,
      describedby: describedby
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(GroupContext, api);
    return function () {
      return render({
        props: props,
        slot: {},
        slots: slots,
        attrs: attrs,
        name: 'SwitchGroup'
      });
    };
  }
}); // ---

var Switch = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Switch',
  emits: ['update:modelValue'],
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    },
    modelValue: {
      type: Boolean,
      "default": false
    }
  },
  render: function render$1() {
    var api = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(GroupContext, null);
    var slot = {
      checked: this.$props.modelValue
    };
    var propsWeControl = {
      id: this.id,
      ref: api === null ? undefined : api.switchRef,
      role: 'switch',
      tabIndex: 0,
      'aria-checked': this.$props.modelValue,
      'aria-labelledby': this.labelledby,
      'aria-describedby': this.describedby,
      onClick: this.handleClick,
      onKeyup: this.handleKeyUp,
      onKeypress: this.handleKeyPress
    };

    if (this.$props.as === 'button') {
      Object.assign(propsWeControl, {
        type: 'button'
      });
    }

    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'Switch'
    });
  },
  setup: function setup(props, _ref2) {
    var emit = _ref2.emit;
    var api = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(GroupContext, null);
    var id = "headlessui-switch-" + useId();

    function toggle() {
      emit('update:modelValue', !props.modelValue);
    }

    return {
      id: id,
      el: api == null ? void 0 : api.switchRef,
      labelledby: api == null ? void 0 : api.labelledby,
      describedby: api == null ? void 0 : api.describedby,
      handleClick: function handleClick(event) {
        event.preventDefault();
        toggle();
      },
      handleKeyUp: function handleKeyUp(event) {
        if (event.key !== Keys.Tab) event.preventDefault();
        if (event.key === Keys.Space) toggle();
      },
      // This is needed so that we can "cancel" the click event when we use the `Enter` key on a button.
      handleKeyPress: function handleKeyPress(event) {
        event.preventDefault();
      }
    };
  }
}); // ---

var SwitchLabel = Label;
var SwitchDescription = Description;

var TabsContext = /*#__PURE__*/Symbol('TabsContext');

function useTabsContext(component) {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(TabsContext, null);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <TabGroup /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useTabsContext);
    throw err;
  }

  return context;
} // ---


var TabGroup = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'TabGroup',
  emits: ['change'],
  props: {
    as: {
      type: [Object, String],
      "default": 'template'
    },
    defaultIndex: {
      type: [Number],
      "default": 0
    },
    vertical: {
      type: [Boolean],
      "default": false
    },
    manual: {
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;
    var selectedIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var panels = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var api = {
      selectedIndex: selectedIndex,
      orientation: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return props.vertical ? 'vertical' : 'horizontal';
      }),
      activation: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return props.manual ? 'manual' : 'auto';
      }),
      tabs: tabs,
      panels: panels,
      setSelectedIndex: function setSelectedIndex(index) {
        if (selectedIndex.value === index) return;
        selectedIndex.value = index;
        emit('change', index);
      },
      registerTab: function registerTab(tab) {
        if (!tabs.value.includes(tab)) tabs.value.push(tab);
      },
      unregisterTab: function unregisterTab(tab) {
        var idx = tabs.value.indexOf(tab);
        if (idx !== -1) tabs.value.slice(idx, 1);
      },
      registerPanel: function registerPanel(panel) {
        if (!panels.value.includes(panel)) panels.value.push(panel);
      },
      unregisterPanel: function unregisterPanel(panel) {
        var idx = panels.value.indexOf(panel);
        if (idx !== -1) panels.value.slice(idx, 1);
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(TabsContext, api);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (api.tabs.value.length <= 0) return console.log('bail');
      if (selectedIndex.value !== null) return console.log('bail 2');
      var tabs = api.tabs.value.map(function (tab) {
        return dom(tab);
      }).filter(Boolean);
      var focusableTabs = tabs.filter(function (tab) {
        return !tab.hasAttribute('disabled');
      }); // Underflow

      if (props.defaultIndex < 0) {
        selectedIndex.value = tabs.indexOf(focusableTabs[0]);
      } // Overflow
      else if (props.defaultIndex > api.tabs.value.length) {
          selectedIndex.value = tabs.indexOf(focusableTabs[focusableTabs.length - 1]);
        } // Middle
        else {
            var before = tabs.slice(0, props.defaultIndex);
            var after = tabs.slice(props.defaultIndex);
            var next = [].concat(after, before).find(function (tab) {
              return focusableTabs.includes(tab);
            });
            if (!next) return;
            selectedIndex.value = tabs.indexOf(next);
          }
    });
    return function () {
      var slot = {
        selectedIndex: selectedIndex.value
      };
      return render({
        props: omit(props, ['defaultIndex', 'manual', 'vertical']),
        slot: slot,
        slots: slots,
        attrs: attrs,
        name: 'TabGroup'
      });
    };
  }
}); // ---

var TabList = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'TabList',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    }
  },
  setup: function setup(props, _ref2) {
    var attrs = _ref2.attrs,
        slots = _ref2.slots;
    var api = useTabsContext('TabList');
    return function () {
      var slot = {
        selectedIndex: api.selectedIndex.value
      };
      var propsWeControl = {
        role: 'tablist',
        'aria-orientation': api.orientation.value
      };
      var passThroughProps = props;
      return render({
        props: _extends({}, passThroughProps, propsWeControl),
        slot: slot,
        attrs: attrs,
        slots: slots,
        name: 'TabList'
      });
    };
  }
}); // ---

var Tab = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Tab',
  props: {
    as: {
      type: [Object, String],
      "default": 'button'
    },
    disabled: {
      type: [Boolean],
      "default": false
    }
  },
  render: function render$1() {
    var _api$panels$value$thi, _api$panels$value$thi2;

    var api = useTabsContext('Tab');
    var slot = {
      selected: this.selected
    };
    var propsWeControl = {
      ref: 'el',
      onKeydown: this.handleKeyDown,
      onFocus: api.activation.value === 'manual' ? this.handleFocus : this.handleSelection,
      onClick: this.handleSelection,
      id: this.id,
      role: 'tab',
      type: this.type,
      'aria-controls': (_api$panels$value$thi = api.panels.value[this.myIndex]) == null ? void 0 : (_api$panels$value$thi2 = _api$panels$value$thi.value) == null ? void 0 : _api$panels$value$thi2.id,
      'aria-selected': this.selected,
      tabIndex: this.selected ? 0 : -1,
      disabled: this.$props.disabled ? true : undefined
    };

    if (false) { var _Object$assign; }

    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      name: 'Tab'
    });
  },
  setup: function setup(props, _ref3) {
    var attrs = _ref3.attrs;
    var api = useTabsContext('Tab');
    var id = "headlessui-tabs-tab-" + useId();
    var tabRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return api.registerTab(tabRef);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return api.unregisterTab(tabRef);
    });
    var myIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return api.tabs.value.indexOf(tabRef);
    });
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return myIndex.value === api.selectedIndex.value;
    });
    var type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _attrs$type;

      return (_attrs$type = attrs.type) != null ? _attrs$type : props.as === 'button' ? 'button' : undefined;
    });

    function handleKeyDown(event) {
      var list = api.tabs.value.map(function (tab) {
        return dom(tab);
      }).filter(Boolean);

      if (event.key === Keys.Space || event.key === Keys.Enter) {
        event.preventDefault();
        event.stopPropagation();
        api.setSelectedIndex(myIndex.value);
        return;
      }

      switch (event.key) {
        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          event.stopPropagation();
          return focusIn(list, Focus.First);

        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          event.stopPropagation();
          return focusIn(list, Focus.Last);
      }

      return match(api.orientation.value, {
        vertical: function vertical() {
          if (event.key === Keys.ArrowUp) return focusIn(list, Focus.Previous | Focus.WrapAround);
          if (event.key === Keys.ArrowDown) return focusIn(list, Focus.Next | Focus.WrapAround);
          return;
        },
        horizontal: function horizontal() {
          if (event.key === Keys.ArrowLeft) return focusIn(list, Focus.Previous | Focus.WrapAround);
          if (event.key === Keys.ArrowRight) return focusIn(list, Focus.Next | Focus.WrapAround);
          return;
        }
      });
    }

    function handleFocus() {
      var _dom;

      (_dom = dom(tabRef)) == null ? void 0 : _dom.focus();
    }

    function handleSelection() {
      var _dom2;

      if (props.disabled) return;
      (_dom2 = dom(tabRef)) == null ? void 0 : _dom2.focus();
      api.setSelectedIndex(myIndex.value);
    }

    return {
      el: tabRef,
      id: id,
      selected: selected,
      myIndex: myIndex,
      type: type,
      handleKeyDown: handleKeyDown,
      handleFocus: handleFocus,
      handleSelection: handleSelection
    };
  }
}); // ---

var TabPanels = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'TabPanels',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    }
  },
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots,
        attrs = _ref4.attrs;
    var api = useTabsContext('TabPanels');
    return function () {
      var slot = {
        selectedIndex: api.selectedIndex.value
      };
      return render({
        props: props,
        slot: slot,
        attrs: attrs,
        slots: slots,
        name: 'TabPanels'
      });
    };
  }
});
var TabPanel = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'TabPanel',
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    "static": {
      type: Boolean,
      "default": false
    },
    unmount: {
      type: Boolean,
      "default": true
    }
  },
  render: function render$1() {
    var _api$tabs$value$this$, _api$tabs$value$this$2;

    var api = useTabsContext('TabPanel');
    var slot = {
      selected: this.selected
    };
    var propsWeControl = {
      ref: 'el',
      id: this.id,
      role: 'tabpanel',
      'aria-labelledby': (_api$tabs$value$this$ = api.tabs.value[this.myIndex]) == null ? void 0 : (_api$tabs$value$this$2 = _api$tabs$value$this$.value) == null ? void 0 : _api$tabs$value$this$2.id,
      tabIndex: this.selected ? 0 : -1
    };

    if (false) { var _Object$assign2; }

    return render({
      props: _extends({}, this.$props, propsWeControl),
      slot: slot,
      attrs: this.$attrs,
      slots: this.$slots,
      features: Features.Static | Features.RenderStrategy,
      visible: this.selected,
      name: 'TabPanel'
    });
  },
  setup: function setup() {
    var api = useTabsContext('TabPanel');
    var id = "headlessui-tabs-panel-" + useId();
    var panelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return api.registerPanel(panelRef);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      return api.unregisterPanel(panelRef);
    });
    var myIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return api.panels.value.indexOf(panelRef);
    });
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return myIndex.value === api.selectedIndex.value;
    });
    return {
      id: id,
      el: panelRef,
      selected: selected,
      myIndex: myIndex
    };
  }
});

function once(cb) {
  var state = {
    called: false
  };
  return function () {
    if (state.called) return;
    state.called = true;
    return cb.apply(void 0, arguments);
  };
}

function disposables() {
  var disposables = [];
  var api = {
    requestAnimationFrame: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function () {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      api.requestAnimationFrame(function () {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function () {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function () {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = _createForOfIteratorHelperLoose(disposables.splice(0)), _step; !(_step = _iterator()).done;) {
        var dispose = _step.value;
        dispose();
      }
    }
  };
  return api;
}

function addClasses(node) {
  var _node$classList;

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
}

function removeClasses(node) {
  var _node$classList2;

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
}

var Reason;

(function (Reason) {
  Reason["Finished"] = "finished";
  Reason["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));

function waitForTransition(node, done) {
  var d = disposables();
  if (!node) return d.dispose; // Safari returns a comma separated list of values, so let's sort them and take the highest value.

  var _getComputedStyle = getComputedStyle(node),
      transitionDuration = _getComputedStyle.transitionDuration,
      transitionDelay = _getComputedStyle.transitionDelay;

  var _map = [transitionDuration, transitionDelay].map(function (value) {
    var _value$split$filter$m = value.split(',') // Remove falseys we can't work with
    .filter(Boolean) // Values are returned as `0.3s` or `75ms`
    .map(function (v) {
      return v.includes('ms') ? parseFloat(v) : parseFloat(v) * 1000;
    }).sort(function (a, z) {
      return z - a;
    }),
        _value$split$filter$m2 = _value$split$filter$m[0],
        resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;

    return resolvedValue;
  }),
      durationMs = _map[0],
      delaysMs = _map[1]; // Waiting for the transition to end. We could use the `transitionend` event, however when no
  // actual transition/duration is defined then the `transitionend` event is not fired.
  //
  // TODO: Downside is, when you slow down transitions via devtools this timeout is still using the
  // full 100% speed instead of the 25% or 10%.


  if (durationMs !== 0) {
    d.setTimeout(function () {
      return done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    // No transition is happening, so we should cleanup already. Otherwise we have to wait until we
    // get disposed.
    done(Reason.Finished);
  } // If we get disposed before the timeout runs we should cleanup anyway


  d.add(function () {
    return done(Reason.Cancelled);
  });
  return d.dispose;
}

function transition(node, base, from, to, entered, done) {
  var d = disposables();

  var _done = done !== undefined ? once(done) : function () {};

  removeClasses.apply(void 0, [node].concat(entered));
  addClasses.apply(void 0, [node].concat(base, from));
  d.nextFrame(function () {
    removeClasses.apply(void 0, [node].concat(from));
    addClasses.apply(void 0, [node].concat(to));
    d.add(waitForTransition(node, function (reason) {
      removeClasses.apply(void 0, [node].concat(to, base));
      addClasses.apply(void 0, [node].concat(entered));
      return _done(reason);
    }));
  }); // Once we get disposed, we should ensure that we cleanup after ourselves. In case of an unmount,
  // the node itself will be nullified and will be a no-op. In case of a full transition the classes
  // are already removed which is also a no-op. However if you go from enter -> leave mid-transition
  // then we have some leftovers that should be cleaned.

  d.add(function () {
    return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
  }); // When we get disposed early, than we should also call the done method but switch the reason.

  d.add(function () {
    return _done(Reason.Cancelled);
  });
  return d.dispose;
}

function splitClasses(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return classes.split(' ').filter(function (className) {
    return className.trim().length > 1;
  });
}

var TransitionContext = /*#__PURE__*/Symbol('TransitionContext');
var TreeStates;

(function (TreeStates) {
  TreeStates["Visible"] = "visible";
  TreeStates["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));

function hasTransitionContext() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(TransitionContext, null) !== null;
}

function useTransitionContext() {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(TransitionContext, null);

  if (context === null) {
    throw new Error('A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.');
  }

  return context;
}

function useParentNesting() {
  var context = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(NestingContext, null);

  if (context === null) {
    throw new Error('A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.');
  }

  return context;
}

var NestingContext = /*#__PURE__*/Symbol('NestingContext');

function hasChildren(bag) {
  if ('children' in bag) return hasChildren(bag.children);
  return bag.value.filter(function (_ref) {
    var state = _ref.state;
    return state === TreeStates.Visible;
  }).length > 0;
}

function useNesting(done) {
  var transitionableChildren = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var mounted = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    return mounted.value = true;
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
    return mounted.value = false;
  });

  function unregister(childId, strategy) {
    var _match;

    if (strategy === void 0) {
      strategy = RenderStrategy.Hidden;
    }

    var idx = transitionableChildren.value.findIndex(function (_ref2) {
      var id = _ref2.id;
      return id === childId;
    });
    if (idx === -1) return;
    match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function () {
      transitionableChildren.value.splice(idx, 1);
    }, _match[RenderStrategy.Hidden] = function () {
      transitionableChildren.value[idx].state = TreeStates.Hidden;
    }, _match));

    if (!hasChildren(transitionableChildren) && mounted.value) {
      done == null ? void 0 : done();
    }
  }

  function register(childId) {
    var child = transitionableChildren.value.find(function (_ref3) {
      var id = _ref3.id;
      return id === childId;
    });

    if (!child) {
      transitionableChildren.value.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }

    return function () {
      return unregister(childId, RenderStrategy.Unmount);
    };
  }

  return {
    children: transitionableChildren,
    register: register,
    unregister: unregister
  };
} // ---


var TransitionChildRenderFeatures = Features.RenderStrategy;
var TransitionChild = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    show: {
      type: [Boolean],
      "default": null
    },
    unmount: {
      type: [Boolean],
      "default": true
    },
    appear: {
      type: [Boolean],
      "default": false
    },
    enter: {
      type: [String],
      "default": ''
    },
    enterFrom: {
      type: [String],
      "default": ''
    },
    enterTo: {
      type: [String],
      "default": ''
    },
    entered: {
      type: [String],
      "default": ''
    },
    leave: {
      type: [String],
      "default": ''
    },
    leaveFrom: {
      type: [String],
      "default": ''
    },
    leaveTo: {
      type: [String],
      "default": ''
    }
  },
  emits: ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'],
  render: function render$1() {
    var _this = this;

    if (this.renderAsRoot) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(TransitionRoot, _extends({}, this.$props, {
        onBeforeEnter: function onBeforeEnter() {
          return _this.$emit('beforeEnter');
        },
        onAfterEnter: function onAfterEnter() {
          return _this.$emit('afterEnter');
        },
        onBeforeLeave: function onBeforeLeave() {
          return _this.$emit('beforeLeave');
        },
        onAfterLeave: function onAfterLeave() {
          return _this.$emit('afterLeave');
        }
      }), this.$slots);
    }

    var _this$$props = this.$props,
        rest = _objectWithoutPropertiesLoose(_this$$props, ["appear", "show", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);

    var propsWeControl = {
      ref: 'el'
    };
    var passthroughProps = rest;
    return render({
      props: _extends({}, passthroughProps, propsWeControl),
      slot: {},
      slots: this.$slots,
      attrs: this.$attrs,
      features: TransitionChildRenderFeatures,
      visible: this.state === TreeStates.Visible,
      name: 'TransitionChild'
    });
  },
  setup: function setup(props, _ref4) {
    var emit = _ref4.emit;

    if (!hasTransitionContext() && hasOpenClosed()) {
      return {
        renderAsRoot: true
      };
    }

    var container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(TreeStates.Visible);
    var strategy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    });

    var _useTransitionContext = useTransitionContext(),
        show = _useTransitionContext.show,
        appear = _useTransitionContext.appear;

    var _useParentNesting = useParentNesting(),
        register = _useParentNesting.register,
        unregister = _useParentNesting.unregister;

    var initial = {
      value: true
    };
    var id = useId();
    var isTransitioning = {
      value: false
    };
    var nesting = useNesting(function () {
      // When all children have been unmounted we can only hide ourselves if and only if we are not
      // transitioning ourselves. Otherwise we would unmount before the transitions are finished.
      if (!isTransitioning.value) {
        state.value = TreeStates.Hidden;
        unregister(id);
        emit('afterLeave');
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var unregister = register(id);
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(unregister);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      var _match2;

      // If we are in another mode than the Hidden mode then ignore
      if (strategy.value !== RenderStrategy.Hidden) return;
      if (!id) return; // Make sure that we are visible

      if (show && state.value !== TreeStates.Visible) {
        state.value = TreeStates.Visible;
        return;
      }

      match(state.value, (_match2 = {}, _match2[TreeStates.Hidden] = function () {
        return unregister(id);
      }, _match2[TreeStates.Visible] = function () {
        return register(id);
      }, _match2));
    });
    var enterClasses = splitClasses(props.enter);
    var enterFromClasses = splitClasses(props.enterFrom);
    var enterToClasses = splitClasses(props.enterTo);
    var enteredClasses = splitClasses(props.entered);
    var leaveClasses = splitClasses(props.leave);
    var leaveFromClasses = splitClasses(props.leaveFrom);
    var leaveToClasses = splitClasses(props.leaveTo);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
        if (state.value === TreeStates.Visible) {
          var domElement = dom(container); // When you return `null` from a component, the actual DOM reference will
          // be an empty comment... This means that we can never check for the DOM
          // node to be `null`. So instead we check for an empty comment.

          var isEmptyDOMNode = domElement instanceof Comment && domElement.data === '';

          if (isEmptyDOMNode) {
            throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
          }
        }
      });
    });

    function executeTransition(onInvalidate) {
      // Skipping initial transition
      var skip = initial.value && !appear.value;
      var node = dom(container);
      if (!node || !(node instanceof HTMLElement)) return;
      if (skip) return;
      isTransitioning.value = true;
      if (show.value) emit('beforeEnter');
      if (!show.value) emit('beforeLeave');
      onInvalidate(show.value ? transition(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function (reason) {
        isTransitioning.value = false;
        if (reason === Reason.Finished) emit('afterEnter');
      }) : transition(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function (reason) {
        isTransitioning.value = false;
        if (reason !== Reason.Finished) return; // When we don't have children anymore we can safely unregister from the parent and hide
        // ourselves.

        if (!hasChildren(nesting)) {
          state.value = TreeStates.Hidden;
          unregister(id);
          emit('afterLeave');
        }
      }));
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([show, appear], function (_oldValues, _newValues, onInvalidate) {
        executeTransition(onInvalidate);
        initial.value = false;
      }, {
        immediate: true
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(NestingContext, nesting);
    useOpenClosedProvider((0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _match3;

      return match(state.value, (_match3 = {}, _match3[TreeStates.Visible] = State.Open, _match3[TreeStates.Hidden] = State.Closed, _match3));
    }));
    return {
      el: container,
      renderAsRoot: false,
      state: state
    };
  }
}); // ---

var TransitionRoot = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  inheritAttrs: false,
  props: {
    as: {
      type: [Object, String],
      "default": 'div'
    },
    show: {
      type: [Boolean],
      "default": null
    },
    unmount: {
      type: [Boolean],
      "default": true
    },
    appear: {
      type: [Boolean],
      "default": false
    },
    enter: {
      type: [String],
      "default": ''
    },
    enterFrom: {
      type: [String],
      "default": ''
    },
    enterTo: {
      type: [String],
      "default": ''
    },
    entered: {
      type: [String],
      "default": ''
    },
    leave: {
      type: [String],
      "default": ''
    },
    leaveFrom: {
      type: [String],
      "default": ''
    },
    leaveTo: {
      type: [String],
      "default": ''
    }
  },
  emits: ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'],
  render: function render$1() {
    var _this2 = this;

    var _this$$props2 = this.$props,
        unmount = _this$$props2.unmount,
        passThroughProps = _objectWithoutPropertiesLoose(_this$$props2, ["show", "appear", "unmount"]);

    var sharedProps = {
      unmount: unmount
    };
    return render({
      props: _extends({}, sharedProps, {
        as: 'template'
      }),
      slot: {},
      slots: _extends({}, this.$slots, {
        "default": function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(TransitionChild, _extends({
            onBeforeEnter: function onBeforeEnter() {
              return _this2.$emit('beforeEnter');
            },
            onAfterEnter: function onAfterEnter() {
              return _this2.$emit('afterEnter');
            },
            onBeforeLeave: function onBeforeLeave() {
              return _this2.$emit('beforeLeave');
            },
            onAfterLeave: function onAfterLeave() {
              return _this2.$emit('afterLeave');
            }
          }, _this2.$attrs, sharedProps, passThroughProps), _this2.$slots["default"])];
        }
      }),
      attrs: {},
      features: TransitionChildRenderFeatures,
      visible: this.state === TreeStates.Visible,
      name: 'Transition'
    });
  },
  setup: function setup(props) {
    var usesOpenClosedState = useOpenClosed();
    var show = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (props.show === null && usesOpenClosedState !== null) {
        var _match4;

        return match(usesOpenClosedState.value, (_match4 = {}, _match4[State.Open] = true, _match4[State.Closed] = false, _match4));
      }

      return props.show;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      if (![true, false].includes(show.value)) {
        throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
      }
    });
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(show.value ? TreeStates.Visible : TreeStates.Hidden);
    var nestingBag = useNesting(function () {
      state.value = TreeStates.Hidden;
    });
    var initial = {
      value: true
    };
    var transitionBag = {
      show: show,
      appear: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return props.appear || !initial.value;
      })
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
        initial.value = false;

        if (show.value) {
          state.value = TreeStates.Visible;
        } else if (!hasChildren(nestingBag)) {
          state.value = TreeStates.Hidden;
        }
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(NestingContext, nestingBag);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(TransitionContext, transitionBag);
    return {
      state: state,
      show: show
    };
  }
});


//# sourceMappingURL=headlessui.esm.js.map


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");
/* harmony import */ var _Pages_Admin_Applications_Independent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Admin/Applications/Independent.vue */ "./resources/js/Pages/Admin/Applications/Independent.vue");
/* harmony import */ var _Pages_Admin_Applications_Premium_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Admin/Applications/Premium.vue */ "./resources/js/Pages/Admin/Applications/Premium.vue");
/* harmony import */ var _Pages_Admin_Applications_Sierra_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Admin/Applications/Sierra.vue */ "./resources/js/Pages/Admin/Applications/Sierra.vue");
/* harmony import */ var _Pages_Admin_Applications_SPAIN_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Admin/Applications/SPAIN.vue */ "./resources/js/Pages/Admin/Applications/SPAIN.vue");
/* harmony import */ var _Pages_Admin_Applications_GERMANY_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/Admin/Applications/GERMANY.vue */ "./resources/js/Pages/Admin/Applications/GERMANY.vue");
/* harmony import */ var _Pages_Admin_Applications_USA_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Pages/Admin/Applications/USA.vue */ "./resources/js/Pages/Admin/Applications/USA.vue");
/* harmony import */ var _Pages_Admin_Applications_NODESTINATION_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Pages/Admin/Applications/NODESTINATION.vue */ "./resources/js/Pages/Admin/Applications/NODESTINATION.vue");
/* harmony import */ var _Pages_Admin_Applications_OPCI_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Pages/Admin/Applications/OPCI.vue */ "./resources/js/Pages/Admin/Applications/OPCI.vue");
/* harmony import */ var _Shared_DialogModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Shared/DialogModal */ "./resources/js/Shared/DialogModal.vue");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["close", "prihvacam", "neprihvacam"],
  components: {
    Independent: _Pages_Admin_Applications_Independent_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Premium: _Pages_Admin_Applications_Premium_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Sierra: _Pages_Admin_Applications_Sierra_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    SPAIN: _Pages_Admin_Applications_SPAIN_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    GERMANY: _Pages_Admin_Applications_GERMANY_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    USA: _Pages_Admin_Applications_USA_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    NODESTINATION: _Pages_Admin_Applications_NODESTINATION_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    OPCI: _Pages_Admin_Applications_OPCI_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    DialogModal: _Shared_DialogModal__WEBPACK_IMPORTED_MODULE_9__.default,
    TabGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.TabGroup,
    TabList: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.TabList,
    Tab: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.Tab,
    TabPanels: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.TabPanels,
    TabPanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_0__.TabPanel
  },
  props: {
    showModal: Boolean,
    type: String,
    uvjeti: {
      "default": true
    },
    program: String
  },
  data: function data() {
    return {//
    };
  },
  computed: {
    computedProgram: function computedProgram() {
      /*           if (this.type == 'Work & travel' || this.type == 'worktravel') {
                    return this.program
                } */
      if (this.program == "Destinacija nije unesena") {
        return 'NODESTINATION';
      }

      return this.program;
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/USA.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/USA.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_ModalNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/ModalNew */ "./resources/js/Shared/ModalNew.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["close"],
  components: {
    ModalNew: _Shared_ModalNew__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    show: {
      "default": false
    },
    closeable: {
      "default": true
    },
    big: {
      "default": false
    }
  },
  methods: {
    close: function close() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["close"],
  props: {
    show: {
      "default": false
    },
    closeable: {
      "default": true
    },
    closeIcon: {
      "default": true
    },
    big: {
      "default": false
    }
  },
  methods: {
    close: function close() {
      if (this.closeable) {
        this.$emit("close");
      }
    },
    closeOnEscape: function closeOnEscape(e) {
      if (e.key === "Escape" && this.show) {
        this.close();
      }
    }
  },
  watch: {
    show: function show(val) {
      if (val) {
        this.$nextTick(function () {
          var _document$querySelect, _document$querySelect2;

          return ((_document$querySelect = document.querySelector("input")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.focus()) || ((_document$querySelect2 = document.querySelector("textarea")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.focus());
        });
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    }
  },
  created: function created() {
    document.addEventListener("keydown", this.closeOnEscape);
  },
  unmounted: function unmounted() {
    document.removeEventListener("keydown", this.closeOnEscape);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=template&id=588c4a70":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=template&id=588c4a70 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 prose"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"Title\"><strong>AU PAIR NJEMAČKA</strong></p><p class=\"Normal tm30\"><strong><span class=\"tm31\">ŠTO JE AU PAIR?</span></strong></p><p class=\"Normal tm30\"><span class=\"tm32\">Au Pair su djevojke koje odlaze u stranu zemlju naučiti i usavršiti određeni jezik, upoznati kulturu i običaje zemlje koju su odabrale. Djevojke se smještaju u obitelji koje trebaju pomoć oko djece i lakših kućanskih poslova. U obiteljima su prihvaćene kao njihov ravnopravni član. Djevojka mora imati osiguran smještaj ( svoju vlastitu sobu), hranu, džeparac, slobodno vrijeme za pohađanje tečaja jezika i ostale aktivnosti. Zauzvrat, Au pair djevojka je dužna pomoći oko čuvanja djece, pripreme za školu ili vrtić, vođenja na aktivnosti, njege ( oblačenja, hranjenja, kupanja i sl.) kao i oko lakših kućanskih poslova (peglanje, usisavanje, brisanje prašine). </span></p><p class=\"Normal tm30\"><span class=\"tm32\">Radno vrijeme au pair djevojaka u Njemačkoj je 30 sati tjedno, a ukoliko roditelji idu navečer van au pair je dužna ostati kod kuće s djecom (2-3 puta tjedno). </span></p><p class=\"Normal tm30\"><span class=\"tm32\">Au pair u Njemačkoj prima minimalno 260 EUR džeparca mjesečno i 50 EUR kao doprinos za tečaj jezika. Cijena tečaja ovisi o školi i gradu, a može se kretati od 100-200 eur za 4 do 8 tjedana. Osim toga, obitelj plaća zdravstveno osiguranje za au pair te troškove prijevoza do škole. Au pair sama snosi troškove puta.</span></p><p class=\"Normal tm30\"><span class=\"tm32\">Au Pair ima pravo na 4 tjedna plaćenog godišnjeg odmora. Važno je imati na umu da Au Pair nisu kućne pomoćnice i da ih treba tretirati kao člana svoje obitelji. </span></p><p class=\"BodyText2\"><strong><span class=\"tm33\">Kao au pair ćeš:</span></strong></p>", 7);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", {
  border: "0",
  rules: "all",
  "class": "tm35 tm36"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", {
  "class": "tm37"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "tm38 tm39 tm40"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "BodyText2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm32"
}, " ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "tm38 tm39 tm41"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "BodyTextIndent2 tm42"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm32"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm43"
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm32"
}, "Brinuti o djeci i pomoći oko lakših kućanskih poslova maksimalno 30 sati tjedno ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "tm38 tm39 tm40"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "BodyText2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm32"
}, " ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "tm38 tm39 tm41"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "BodyTextIndent2 tm42"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm32"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm43"
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm32"
}, "Biti baby-sitter najviše 3 večeri tjedno, u dogovoru s obitelji")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "BodyTextIndent2 tm45"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "tm32"
}, " ")])])])])], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"BodyText2\"><strong><em><span class=\"tm46\"> </span></em></strong></p><p class=\"BodyText2\"><span class=\"tm32\"></span><strong><span class=\"tm33\">Zauzvrat ćeš dobiti</span></strong><span class=\"tm32\">:</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\"></span><span class=\"tm32\">Vlastitu sobu i hranu</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\"></span><span class=\"tm32\">260 eur džeparca mjesečno</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\"></span><span class=\"tm32\"> 4 tjedna godišnjeg odmora u 12 mjeseci (uz džeparac)</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\"></span><span class=\"tm32\"> slobodno vrijeme za pohađanje tečaja njemačkog</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\"></span><span class=\"tm32\"> 50 EUR mjesečno kao doprinos za tečaj njemačkog troškove prijevoza do škole zdravstveno osiguranje</span></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"BodyText2\"><strong><span class=\"tm31\">PRIJAVA</span></strong></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"BodyText2\"><strong><span class=\"tm31\">Dokumenti potrebni za prijavu:</span></strong></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\">1 fotografija formata za putovnicu (sa smješkom);</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\">fotografije iz obiteljskog albuma (s djecom obavezno, kućnim ljubimcima, obitelji)</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\">2 preporuke – preporuke pišu obitelji kod kojih si čuvala djecu te trebaju sadržavati opis tvojih karakteristika, radnih navika, ophođenje s djecom, opis dužnosti. Preporuke moraju sadržavati ime, adresu i broj telefona osobe koja je piše.</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\">Prijateljsko pismo - nasloviti “Draga obitelji” i u njoj navesti opće podatke o rođenju, obrazovanju, obitelji, hobijima i motivu odlaska u Njemačku Biografija se OBAVEZNO piše na hrvatskom i na njemačkom jeziku i veličine je najmanje jedne stranice A4 formata.</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\">Liječnička potvrda - od liječnika opće prakse. Uvidom u povijest bolesti iz zdravstvenog kartona potvrđuje se opće tjelesno i mentalno zdravlje;</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\">Fotokopija putovnice;</span></p><p class=\"BodyText2 tm42\"><span class=\"tm32\"></span><span class=\"tm43\"> </span><span class=\"tm32\">Potvrda o nekažnjavanju (podiže se na općinskom sudu);</span></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"BodyText2\"><span class=\"tm32\">Po primitku sve potrebne dokumentacije Sunčana vura će ti u najkraćem mogućem roku ponuditi odgovarajuću obitelj. S obitelji ćeš putem maila dogovoriti razgovor (načešće Skypeom). Nakon skype intervjua između djevojke i obitelji, te međusobnog prihvaćanja, potpisujete ugovor. Obitelj dočekuje djevojku na mjestu dogovorenom u njihovom razgovoru. U slučaju bilo kakvih problema kontaktirat ćeš savjetnicu u Njemačkoj ili agenciju.</span></p><p class=\"BodyText2\"><strong><span class=\"tm31\"> </span></strong></p><p class=\"BodyText2\"><strong><span class=\"tm31\">CIJENA PROGRAMA</span></strong></p><p class=\"BodyText2\"><span class=\"tm32\">Prilikom prijave u program uplaćuje se 500,00 kn, a ostatak od 500,00 kn nakon dogovora s obitelji. U slučaju odustajanja od programa (iz bilo kojih razloga) Sunčana vura zadržava iznos uplaćen prilikom prijave. Djevojke same snose troškove putovanja i vize.</span></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"Normal tm47\"><strong><span class=\"tm48\"></span><span class=\"tm48\">Online prihvaćanjem Uvj</span><span class=\"tm49\">e</span><span class=\"tm48\">ta Au Pair in America pro</span><span class=\"tm49\">g</span><span class=\"tm48\">rama potvrđujem da sam u</span><span class=\"tm49\">p</span><span class=\"tm48\">oznata</span><span class=\"tm49\"> sa svim pravilima i uvjetima programa </span><span class=\"tm48\">i da </span><span class=\"tm49\">p</span><span class=\"tm48\">rihv</span><span class=\"tm49\">a</span><span class=\"tm48\">ćam pro</span><span class=\"tm49\">g</span><span class=\"tm48\">r</span><span class=\"tm49\">a</span><span class=\"tm48\">m </span><span class=\"tm49\"></span><span class=\"tm48\">putovanja </span><span class=\"tm49\"></span><span class=\"tm48\">organ</span><span class=\"tm49\">i</span><span class=\"tm48\">z</span><span class=\"tm49\">a</span><span class=\"tm48\">t</span><span class=\"tm49\">o</span><span class=\"tm48\">r</span><span class=\"tm49\">a</span><span class=\"tm48\">.</span></strong></p><p class=\"Normal tm50\"><strong><span class=\"tm48\"> </span></strong></p><p class=\"Normal tm51\"><strong><span class=\"tm48\">Sastav</span><span class=\"tm49\">n</span><span class=\"tm48\">i dio</span><span class=\"tm49\"></span><span class=\"tm48\">Uvj</span><span class=\"tm49\">e</span><span class=\"tm48\">ta Au Pair in America su: 1.</span><span class=\"tm49\"></span><span class=\"tm48\">Uvjeti</span><span class=\"tm49\"></span><span class=\"tm48\">sponzora, 2. Opći</span><span class=\"tm49\"></span><span class=\"tm48\">u</span><span class=\"tm49\">v</span><span class=\"tm48\">je</span><span class=\"tm49\">t</span><span class=\"tm48\">i</span></strong></p><p class=\"Normal tm51\"><span class=\"tm52\"></span><strong><span class=\"tm48\">p</span><span class=\"tm49\">u</span><span class=\"tm48\">to</span><span class=\"tm49\">v</span><span class=\"tm48\">anja Sunčane vure.</span></strong></p><p class=\"BodyText2\"><span class=\"tm32\"><a id=\"aGoBack\"></a> </span></p><p class=\"Normal\"><span class=\"tm32\"> </span></p>", 30);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, _hoisted_9, _hoisted_10]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=template&id=76fc6c37":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=template&id=76fc6c37 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 prose"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2>Uvjeti poslovanja Work &amp; Travel - Independent Placement</h2><p> Work &amp; Travel program je program kulturološke razmjene i omogućuje studentima da provedu ljetne praznike u SAD-u radeći i putujući i namijenjen je studentima koji polažu ispite u kontinuitetu te imaju konverzacijiski nivo znanja engleskog jezika. Za hrvatske studente Work and Travel program traje 4 mjeseca u periodu 04. 06 do 10. 10. 2022. Period putovanja- grace period, traje maksimalno 30 dana i mora završiti do 10.10.2022. </p><p>U Independent Placement opciji studenti sami pronalaze posao: kontaktiraju direktno poslodavce u SAD-u, dogovaraju intervju i dostavljaju nam dokumente o kompaniji radi verificiranja.</p><h3>U INDEPENDENT PLACEMENT program je uključeno:</h3><ul><li>obrada aplikacije</li><li>testiranje engleskog</li><li>zdravstveno osiguranje</li><li>dokumenti za vizu (DS 2019)</li><li>orijentacijski sastanak prije puta</li><li>24/7 podrška za hitne slučajeve</li></ul><p>CIJENA INDEPENDENT OPCIJE: <span class=\"text-red-500 font-medium\">6.770,00 HRK</span></p><p class=\"text-red-500 font-medium\">U program su uključeni i obavezni 35 USD SEVIS FEE te zdravstveno osiguranje koje pokriva period od početka rada do kraja boravka u SAD-u.</p><h3> Cijena ne uključuje: </h3><ul><li>avionsku kartu*</li><li>troškove smještaja, hranu i osobne troškove u SAD-u</li><li>troškove vize 160 USD</li><li>prijevoz od aerodroma do poslodavca</li></ul><p>*Agencija Sunčana vura će vam ponuditi najbolju opciju leta po posebnim tarifama za Work &amp; Travel studente.</p><h3>Dinamika plaćanja:</h3><ul><li>REZERVACIJA – 750,00 HRK plaća se odmah ukoliko se student odluči za rezervaciju mjesta prije nego je pronašao posao. Kod nastavka programa rezervacija se pretvara u 1.ratu zajedno s drugim dijelom uplate. U slučaju da se student prijavljuje radi verifikacije posla kojeg je već pronašao uplaćuje se odmah 1.940 HRK.</li><li>2. dio uplate – 1.190,00 HRK -treba biti uplaćeno nakon dostavljanja poslovne ponude radi verificiranja posla ako je student prethodno uplatio rezervaciju mjesta u iznosu od 750 HRK.</li><li>3. dio uplate – 4.830 HRK treba biti uplaćeno prije predaje dokumenta za vizu DS2019</li></ul><h3>Odustajanje od programa:</h3><ul><li>750,00 HRK se zadržava ukoliko odustanete od programa nakon što ste upisani u sistem i mjesto za independent verificiranje vam je rezervirano</li><li>1.940 HRK se zadržava ukoliko odustanete od programa nakon što vam je posao verificiran</li><li>Ukupan iznos cijene programa se zadržava ukoliko odustanete nakon što ste dobili vizu.</li></ul><h3>Prekid programa radi više sile (Force Majeure):</h3><ul><li>U slučaju nepredvidivih okolnosti na koje agencija Sunčana vura nema utjecaja uključujući i novi val epidemije izazvane COVID-om 19 i/ ili privremeni prestanak rada ambasade, a radi kojih se sudjelovanje u programu ne može održati agencija zadržava HRK 1135 + naknadu sponzora od 500 do 1240 HRK ovisno o sponzoru.</li><li>Agencijski iznos 1135 kn se može iskoristiti za bilo koji od programa Sunčane vure u narednoj godini.</li></ul><h3>ODBIJENA VIZA</h3><p>U slučaju odbijene vize VRAĆAMO CIJELOKUPAN IZNOS CIJENE PROGRAMA uplaćenog Agenciji i sponzoru* ako ispunjavate sljedeće uvjete:</p><ol><li>da ste redovno polagali ispite</li><li>da imate minimalno tri položena ispita iz tekuće školske godine</li><li>da niste ponavljali zadnju godinu</li><li>da ste studirali u kontinuitetu bez pauza između upisanih godina na fakultetu</li><li>da nakon završetka srednje škole i prije upisivanja fakulteta niste imali pauzu</li><li> da niste mijenjali fakultete</li><li>da niste kažnjavani</li></ol><p>*ne odnosi se na iznos 160 USD uplaćen Američkoj ambasadi za proces obrade zahtjeva za vizu</p><p>Ukoliko je razlog odbijene vize neka od gore navedenih točaka ili je razlog odbijanja neki netočan, neistinit i/ ili nepredočeni ključni podatak prilikom prijave u Program i kod ispunjavanja upitnika za vizu, Agencija zadržava upisninu 1.940 HRK.</p><h3>Sastavni dio Uvjeta Independent placement programa su: </h3><ol><li>Uvjeti sponzora</li><li>Opći uvjeti putovanja Sunčane vure.</li></ol>", 23);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=template&id=56e419aa":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=template&id=56e419aa ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 prose"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Za prikaz uvjeta poslovanja destinacija mora biti unesena", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=template&id=1e92117a":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=template&id=1e92117a ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"text-lg max-w-prose mx-auto\"><h1><span class=\"block text-base text-center text-indigo tracking-wide uppercase\">SunČana Vura</span><span class=\"mt-2 block text-3xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl\">Opći uvjeti poslovanja</span></h1></div><div class=\"mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto\"><h3>1. OPĆE ODREDBE</h3><p>Ovdje objavljeni opći uvjeti i upute pružanja putničkih usluga turističke agencije (u daljnjem tekstu: Opći uvjeti) sastavni su dio programa paket aranžmana i Ugovora o putovanju u paket aranžmanu (u daljnjem tekstu: Ugovor) sklopljenog između putničke agencije Sunčana vura, d.o.o., Kožarska 2, 10 000 Zagreb (u daljnjem tekstu: Agencija ili organizator), odnosno trgovca ili prodavatelja aranžmana i putnika (u daljem tekstu: putnik). Izrazi koji se koriste u ovim Općim uvjetima imaju značenje utvrđeno Zakonom o pružanju usluga u turizmu (NN 130/2017), osim ako drugačije nije izričito naznačeno. </p><h3>2. PRIJAVE I UPLATE</h3><p>Putnik se za putovanje može prijaviti telefonom, emailom i on line putem web stranice. Potpisivanjem Ugovora, tj. stavljanjem na raspolaganje broja kreditne kartice kod kupnje usluga, putnik u cijelosti prihvaća ove uvjete rezervacija putovanja koje je prethodno pažljivo proučio. Agencija ima pravo uskratiti uslugu ukoliko ne primi odgovarajuću uplatu do ugovorenog roka: prilikom prijave putnik uplaćuje 40% vrijednosti putovanja, preostalih 60% iznosa treba uplatiti najkasnije 30 dana prije početka putovanja, ako u programu nije drugačije navedeno. Uz prijavu putnik je dužan navesti sve podatke, programom predviđene dokumente te uplatiti akontaciju. Ukoliko putnik ne navede točne podatke, odgovoran je za sve troškove tj. posljedice nastale iz krivih podataka. Na dan prijave putnik potpisuje ugovor pod naznakom „Suglasan sam s Općim uvjetima putovanja“. Na taj način sve što je navedeno u općim uvjetima i programu postaje pravna obveza i za putnika i za organizatora putovanja.</p><h3>3. SADRŽAJ I CIJENA ARANŽMANA</h3><p>Cijena aranžmana uključuje one usluge navedene na programu pod „Cijena uključuje” te može sadržavati i razne pristojbe što je na programu posebno istaknuto. Cijena aranžmana ne uključuje one usluge koje su kao takve posebno na programu i navedene pod „Cijena ne uključuje” s napomenom da se neke od fakultativnih usluga mogu unaprijed ugovoriti te će biti evidentirane u Ugovoru o putovanju. Sve vrste posebnih usluga putnik sam plaća i dužan ih je naglasiti prilikom prijave putovanja. Cijene aranžmana objavljene su u kunama za svaki program i temeljene su na odnosu kune i stranih valuta i vrijede od dana objave programa.</p><h3>4. IZMJENA UGOVORENE CIJENE PAKET-ARANŽMANA</h3><p>Agencija ima pravo povisiti cijenu aranžmana ako je povećanje cijene isključivo izravna posljedica promjene: <br> <br><strong>a)</strong> cijene prijevoza putnika koje su proizašle iz troškova goriva i/ili drugih izvora energije,<br> <br><strong>b)</strong> visine poreza i/ili naknada za usluge putovanja obuhvaćene ugovorom koje određuju treće osobe koje nisu izravno uključene u izvršenje paket-aranžmana, uključujući turističke poreze, pristojbe za slijetanje ili naknade za ukrcaj ili iskrcaj u lukama i zračnim lukama, <br> <br><strong>c)</strong> deviznih tečajeva koji su relevantni za paket-aranžman. </p><h3>5. OBVEZE ORGANIZATORA </h3><p>Agencija je dužna brinuti o izvršenju usluga, kao i o izboru izvršitelja usluga, pažnjom dobrog gospodarstvenika te skrbiti o pravima i interesima putnika u skladu s dobrim običajima u turizmu. Agencija je dužna putniku pružiti sve ugovorene usluge za pojedini aranžman te dati odgovore zbog eventualnog neizvršenja usluga ili dijela usluga. Agencija će sve navedene obaveze iz svojih programa izvesti u potpunosti i na opisani način, osim u slučaju više sile ili nepredviđenih okolnosti. Ako bude moguće Agencija će u takvim slučajevima ponuditi zamjensko rješenje. Agencija nije dužna pružati usluge izvan ovih Općih uvjeta poslovanja.</p><h3>6. PUTNE ISPRAVE I OSTALE OBVEZE PUTNIKA </h3><p>1. Putnik je obvezan posjedovati valjane osobne putne dokumente. Prilikom sklapanja Ugovora putnik je dužan dati osobne podatke i pravovremeno dostaviti svu dokumentaciju i podatke potrebne za organiziranje putovanja. <br> <br> 2. Putnik je dužan obavijestiti Agenciju o svim činjenicama u pogledu svog zdravlja, navika i sl., a koje bi mogle ugroziti odvijanje putovanja. <br> <br> 3. Ukoliko je za neko putovanje potrebna viza, Agencija može (ukoliko tijelo koje izdaje vizu dozvoljava posredovanje) posredovati u pribavljanju iste uz posebnu doplatu, no nije odgovorna za odluke službenih tijela koje za posljedicu imaju odbijanje dozvole ulaska u pojedinu/e zemlju/e. Neodobravanje vize, odnosno nevaljane putne isprave, koje imaju za posljedicu odustajanje od putovanja ne obvezuju Agenciju koja zadržava pravo naplate naknade štete kako je određeno ovim Općim uvjetima. <br> <br> 4. Putnik je dužan poštivati carinske, devizne i druge propise, kao i zakone i druge podzakonske propise Republike Hrvatske i drugih zemalja kroz koje prolazi i u kojima boravi. U slučaju nemogućnosti nastavka putovanja radi kršenja propisa od strane putnika, sve nastale troškove i posljedice snosi putnik. Ukoliko za vrijeme putovanja dođe do gubitka ili krađe putnih isprava, troškove izdavanja novih isprava snosi sam putnik. Putnik je dužan brinuti se da on osobno, njegovi dokumenti, prtljaga i stvari ispune uvjete predviđene viznim, graničnim, carinskim, zdravstvenim i drugim propisima, kako RH, tako i zemlje u koju se i kroz koju se putuje, pridržavati se kućnog reda u ugostiteljskim i hotelskim objektima. <br> <br> 5. Putnik je dužan pridržavati se pravila ponašanja u smještajnim objektima, odnosno sredstvima prijevoza i svojim postupcima ne smije onemogućavati nesmetano odvijanje programa putovanja kao i ne ugrožavati prava ostalih putnika u korištenju. U slučaju da putnik svojim ponašanjem uzrokuje štetu davatelju usluge u smještajnom objektu ili sredstvu prijevoza odnosno onemogućava redovno i nesmetano odvijanje programa putovanja dužan je takvu štetu odmah otkloniti odnosno nadoknaditi oštećenom pri čemu je u obvezi surađivati s davateljem tih usluga i Agencijom. Ako putnik ugrožava redovno i nesmetano odvijanje programa putovanja, Agencija, osim prava na naknadu štete ima pravo prekinuti putovanje, u kojem slučaju će se smatrati da je putovanje prekinuto na zahtjev putnika pri čemu Agencija nije dužna snositi troškove povratka na mjesto polaska. U slučaju da je putnik maloljetna osoba odnosno dijete, roditelj je dužan prihvatiti povratak djeteta kući odnosno doći po svoje dijete, o vlastitom trošku. <br> <br> 6. Putnik je dužan, bez nepotrebnog odgađanja i vodeći računa o okolnostima , obavijestiti Agenciju o svakoj nesukladnosti koju utvrdi tijekom ispunjenja usluge putovanja obuhvaćene ugovorom o putovanju u paket aranžmanu. Ako bilo koja od usluga putovanja nije izvršena u skladu s ugovorom o putovanju u paket-aranžmanu, na zahtjev putnika Agencija je dužna ispraviti tu nesukladnost, osim ako to nije moguće ili ako bi otklanjanje nesukladnosti prouzročilo nesrazmjerne troškove uzimajući u obzir nesukladnost i vrijednost usluga putovanja na koje nesukladnost utječe. <br> <br> 7. Ime putnika mora odgovarati imenu na putovnici. Kod jednom izdanih karata nije moguće naknadno promijeniti ili korigirati imena. Aviokarte su neprenosivi dokument (ne mogu se prenijeti na drugu osobu). <br> <br> Prema pravilima zrakoplovnih kompanija, promjene imena na rezervaciji nisu moguće, a jednako tako nije moguće koristiti avionsku kartu s tuđim imenom za vlastito putovanje. <br> <br> Dobne skupine u avioprijevozu su: mala beba do navršene dvije godine starosti (infant), dijete od 2 do navršenih dvanaest godina starosti (child), mladi od dvanaest do navršenih dvadeset i pet godina starosti (youth) te odrasle osobe (adults). </p><h3>7. PUTNIKOVA PRTLJAGA</h3><p>Težina dozvoljene prtljage koja je uključena u cijenu aranžmana na zrakoplovnim putovanjima ovisi o avio kompaniji te će biti posebno naznačena. Višak prtljage putnik doplaćuje sam prema važećim pravilima i cijenama prijevoznika. Za prijevoz posebne prtljage, putnik je dužan doplatiti troškove prijevozniku prema cijeniku. U svakom slučaju, prijevoz takve vrste prtljage obvezno je najaviti već prilikom prijave. Bez obzira na navedeno prijevoznik zbog ograničenog kapaciteta u svakom slučaju ima pravo odbiti prijevoz takve posebne vrste prtljage. Sve troškove odnosno štetu koja može nastati zbog toga snosi sam putnik. <br> <br> Za prijevoz prtljage nije odgovoran organizator, agent ili posrednik. Agencija ne preuzima odgovornost za izgubljenu i/ili oštećenu prtljagu. Bilo kakvu nepravilnost vezanu za prtljagu, putnik bez odgode prijavljuje direktno prijevozniku, ukoliko je nepravilnost nastala kod prijevoza, ili hotelu ukoliko je nepravilnost nastala tijekom smještaja. Kod zrakoplovnog prijevoza, za predanu prtljagu je odgovoran zrakoplovni prijevoznik kojem je prtljaga predana na prijevoz i to na osnovu propisa koji vrijede u zračnom prometu, dok je za ručnu prtljagu i prtljagu privremeno smještenu u prtljažnik, odgovoran putnik osobno. U slučaju nepravilnosti, putnik direktno kod prijevoznika ili agenta ovlaštenog od strane prijevoznika za postupanje u slučaju neregularnosti u prijevozu prtljage ispunjava prijavu o neregularnosti. Na osnovu te prijave prijevoznik isplaćuje odštetu prema propisima koji vrijede u domaćem i međunarodnom putničkom zračnom prometu. U slučaju gubitka, oštećenja i/ili otuđenja prtljage u hotelu, putnik zahtjev za odštetom upućuje hotelu u kojem je prtljaga izgubljena, oštećena i/ili izgubljena. Putnik je sam dužan voditi brigu o svojim stvarima i prtljazi unesenim u putničku kabinu prijevoznog sredstva (zrakoplov, autobus, vlak, brod i sl.) te ih je prilikom svakog napuštanja prijevoznog sredstva dužan ponijeti sa sobom. </p><h3>8. OBAVIJESTI PRIJE POLASKA / PUTOVANJA</h3><p>Organizator ili njegov posrednik obvezni su putniku staviti na raspolaganje promidžbeni materijal i ove Opće uvjete u pisanom ili elektroničkom obliku, te dati propisane i odgovarajuće informacije o glavnim obilježjima usluga putovanja, o organizatoru i posredniku putovanja, cijeni aranžmana, načinima plaćanja, podacima o osnovnim značajkama putovanja, o uvjetima odredišne zemlje u vezi s putovnicama i vizama, o tome da putnik može raskinuti ugovor u bilo kojem trenutku prije početka paket aranžmana uz plaćanje primjerene naknade za raskid ugovora, o neobveznom ili obveznom osiguranju radi pokrivanja troška raskida ugovora od strane putnika ili troška pružanja pomoći, uključujući repatrijaciju, u slučaju nesreće, bolesti ili smrti. Potpisom ugovora putnik potvrđuje da su mu bile prezentirane sve ove informacije i da je upoznat sa sadržajem i mogućnošću osiguranja. <br> <br> 1. Fotografije objavljene na internetskim stranicama i u reklamnim materijalima informativne su i neobvezujuće prirode. <br> <br> 2. Organizator ne odgovara za eventualne greške u tisku niti za naknadne promjene u novim izdanjima promidžbenih materijala i programa o kojima je putnik obaviješten prije zaključenja Ugovora, pa se u tom smislu smatraju mjerodavnima podaci navedeni u Ugovoru, a ne u promidžbenom materijalu. <br> <br> 3. Prema propisima Svjetske zdravstvene organizacije, putnik se za putovanja u određene države dužan cijepiti te pribaviti odgovarajuću ispravu o obavljenom cijepljenju. Cijepljenje je također obvezno ako je propis te vrste prihvaćen potpisom ugovora o putovanju. <br> <br> 4. Za sva putovanja u inozemstvo Agencija preporučuje uplatu police zdravstvenog osiguranja. </p><h3>9. ORGANIZATOROVO PRAVO NA OTKAZ PUTOVANJA ILI PROMJENU PROGRAMA</h3><p>Agencija je dužna putniku vratiti sav uplaćen iznos aranžmana bez nepotrebnog odgađanja a najkasnije u roku od 14 dana od raskida Ugovora o putovanju u paket-aranžmanu pod uvjetom da je putnik Agenciji poslao podatke koji su potrebni za povrat novca. Ako nastupe izvanredne okolnosti koje se ne mogu predvidjeti, izbjeći ili ukloniti organizator putovanja ima pravo izmijeniti program. Smještaj koji je ugovoren može se zamijeniti samo sa smještajem u objektu iste ili više kategorije. Agencija zadržava pravo promjene dana ili sata putovanja zbog promjene reda letenja ili zbog nastupanja nepredviđenih okolnosti, pravo promjene smjera putovanja ukoliko se promijene uvjeti za putovanje (promijenjen red letenja, sigurnosna situacija u određenoj zemlji, elementarne nepogode ili druge situacije na koje Agencija ne može utjecati) i to bez naknade štete, a prema važećim propisima u domaćem i međunarodnom prometu. Agencija ne odgovara za kašnjenje zrakoplova, broda ili vlaka kao ni za promjene programa i troškove nastale uvjetovane takvim kašnjenjem. U slučaju kašnjenja vezanog leta koji utječe na propuštanje osnovnog leta je isključivo odgovorna avio kompanija. Za bilo kakvu nepravilnost u avio prometu, Agencija ne može asistirati već putnik sam mora podnijeti prigovor direktno na avio kompaniju. Ukoliko se dogodi overbooking na letu, putnik je dužan surađivati sa predstavnicima avio kompanije te moraju pokušati zajedno naći odgovarajuće rješenje jer za takve okolnosti je isključivo odgovorna avio kompanija, Agencija. Ako okolnosti na samom odredištu onemogućuju smještaj putnika u rezerviranom objektu, Organizator će putnika smjestiti u drugi objekt jednake ili više kategorije od rezerviranoga i na vlastiti trošak. Agencija ne preuzima odgovornost za promjene radi nepredviđenih okolnosti i više sile u toku putovanja. U tom slučaju može osigurati usluge s obzirom na danu situaciju.</p><h3>10. PUTNIKOV OTKAZ PUTOVANJA</h3><p>Putnik ima pravo na otkaz putovanja prije početka putovanja no to svakako mora napraviti u pisanom obliku. Agencija u tom slučaju ima pravo na naknadu troškova zbog otkazanog putovanja, a visina troškova određuje se prema danu putnikova otkazivanja i vrsti putovanja. Ako putnik koji otkaže putovanje nađe novog korisnika iste rezervacije, a koji ispunjava sve predviđene uvjete organizator zaračunava samo troškove uzrokovane zamjenom. Kada su stvarno nastali troškovi veći od onih u navedenoj ljestvici, organizator putovanja zadržava pravo naplate stvarno nastalih troškova uz predočenje dokaza o stvarnim troškovima a u maksimalnoj visini 100% cijene aranžmana. <br> <br> Ukoliko putnik otkaže uplaćeni aranžman, Agencija od ukupne cijene aranžmana zadržava: </p><h3>Europska putovanja</h3><ul><li>do 30 dana prije polaska 40% cijene aranžmana</li><li>29 – 22 dana prije polaska 60% cijene aranžmana</li><li>21 – 15 dana prije polaska 80% cijene aranžmana</li><li> 14 – 0 dana prije polaska 100% cijene aranžmana, odnosno za “no-show” ili za prekid putovanja koji je nastao od strane putnika, organizator će naplatiti 100% cijene aranžmana.</li></ul><h3>Daleka putovanja</h3><ul><li>do 45 dana prije polaska 40% cijene aranžmana</li><li>44 – 15 dana prije polaska 80% cijene aranžmana</li><li> 14 – 0 dana prije polaska 100% cijene aranžmana</li><li> nakon polaska, odnosno za “no- show”, organizator će naplatiti 100% cijene aranžmana.</li></ul><h3>Transferi</h3><ul><li>120 – 91 dana prije polaska 10% cijene transfera</li><li>90 – 61 dana prije polaska 20% cijene transfera</li><li>60 – 45 dana prije polaska 30% cijene transfera</li><li> 44 – 31 dana prije polaska 50% cijene transfera</li><li> 30 – 21 dana prije polaska 70% cijene transfera</li><li>20 – 0 dana prije polaska 100% cijene transfera</li><li>nakon polaska, odnosno za “no show” 100 % cijene transfera</li></ul><p>Navedeni troškovi primjenjuju se i na promjene datuma polaska i/ili smještajnog objekta kao i na sve druge bitne promjene.</p><p>Ukoliko 30 dana prije polaska na put putnik ne izvrši uplatu ostatka do ukupne cijene aranžmana ili ne osigura dokumentaciju za neospornu naplatu ukupne cijene aranžmana, smatrat će se da je odustao od rezervacije bez mogućnosti povrata uplaćene akontacije.</p><h3>Avio karte i individualna putovanja</h3><p>U slučaju putnikova otkaza avio karte, putnik snosi trošak otkazivanja avio karte koji je 100%. Kod individualnih putovanja, ukoliko su izdani voucheri za smještaj i ostale usluge, troškovi otkaza ovise o uvjetima spomenutih dobavljača. </p><h3>11. KATEGORIZACIJA I OPIS USLUGA</h3><p>Ponuđeni hoteli, apartmani ili drugi objekti u programima opisani su prema službenoj kategorizaciji dotične zemlje važećoj u trenutku izdavanja programa. Ukazujemo da se lokalna kategorizacija u pojedinim zemljama bitno razlikuje. Udobnost, prehrana, sadržaj smještajne jedinice kao i druge usluge pod nadzorom su mjesnih i državnih turističkih uprava, a standardi smještaja i usluga su različiti i nisu usporedivi. Organizator ne preuzima odgovornost za bilo kakvu pisanu ili usmenu informaciju koja nije u skladu s opisom usluga i objekata u objavljenim programima a koja je dana bilo od strane djelatnika Agencije ili neke treće osobe. Ukoliko putnik koristi trokrevetnu ili višekrevetnu sobu u hotelu, hotelijer najčešće daje dvokrevetnu sobu s pomoćnim ležajem. Kvaliteta pomoćnog (dodatnog) ležaja u potpunosti ovisi o hotelu. Agencija ni u kom slučaju ne snosi odgovornost po bilo kojem pitanju kvalitete pomoćnog ležaja, te eventualno nezadovoljstvo putnika proizašlo iz ovih razloga, ne može biti predmetom prigovora.</p><h3>12. SMJEŠTAJ U SOBE / APARTMANE</h3><p>Raspored smještaja u sobe/apartmane određuje recepcija smještajnog objekta u mjestu boravka. Ukoliko putnik nije izričito ugovorio sobu/apartman posebnih odlika, prihvatit će bilo koju službeno registriranu smještajnu jedinicu u pojedinom objektu ili destinaciji opisanu u programu putovanja, katalogu i cjeniku. Ako je moguće Agencija će pokušati zadovoljiti unaprijed najavljen zahtjev putnika za smještajem (dječji krevetić, orijentacija sobe, kat i sl.) no ne može jamčiti ispunjenje istog. Smještaj najčešće nije moguć prije 15 sati na dan početka korištenja usluge, a isti se mora napustiti do 10 sati na dan završetka korištenja usluge. Dolaske iza 19 sati nužno je najaviti unaprijed, osim ako nije drugačije naznačeno. Odluku o ranijem ulasku i/ili kasnijem izlasku iz smještajne jedinice donosi samostalno smještajni objekt i Agencija nema utjecaja na istu.</p><h3>13. PUTNO OSIGURANJE</h3><p>Potpisivanjem Ugovora o putovanju, čiji su sastavni dio ovi Opći uvjeti, smatra se da su putnicima ponuđena i preporučena putna osiguranja: dragovoljno zdravstveno osiguranje, osiguranje od posljedica nesretnog slučaja, osiguranje oštećenja i/ili gubitka prtljage, osiguranje za slučaj otkaza putovanja te osiguranje od odgovornosti prema trećim osobama, kao i da su putniku stavljene na raspolaganje informacije o sadržaju tih osiguranja i Opći uvjeti Ugovora o osiguranju. U slučaju da putnik želi ugovoriti navedena osiguranja, ona se mogu ugovoriti izravno kod osiguravatelja ili kod Agencije, pri čemu Agencija djeluje tek kao posrednik osiguravajućeg društva. Osiguranje od otkaza putovanja, prema uvjetima osiguravajućeg društva, ugovara se prilikom sklapanja Ugovora o putovanju te ga nije moguće ugovoriti naknadno u Agenciji. Ukoliko putnik ne dostavi podatke za izradu police osiguranja u roku koji će biti naveden na ponudi, smatra se da putnik ne želi ugovoriti putno osiguranje ili da će ga ugovoriti samostalno. Premija osiguranja izračunava se ovisno o dužini trajanja i cijeni putovanja prema cjeniku osiguravajućeg društva. Valjane razloge za otkaz putovanja određuje osiguravajuće društvo sukladno uvjetima osiguranja. Uplaćene premije osiguranja nisu predmet osiguranja od otkaza, niti dio paket-aranžmana i neće biti vraćeni kao niti troškovi nabavke viza/e i usluge rezervacije, unatoč tome što putnik ima uplaćeno osiguranje od otkaza. Ukoliko putnik mora otkazati putovanje, Agencija zadržava pravo naplate primjerene naknade. Ostali uvjeti osiguranja nalaze se uz policu osiguranja koji će putniku biti poslani ili uručeni.</p><h3>14. VANJSKE POVEZNICE</h3><p>Na svojoj web stranici možemo postaviti poveznice na web stranice svojih poslovnih partnera. Ako slijedite tu poveznicu na bilo koju od tih web stranica, uzmite u obzir da se na te web stranice primjenjuju njihova vlastita pravila o privatnosti i da SUNČANA VURA d.o.o. nema nikakvu odgovornost vezanu uz ta pravila. Molimo da pregledate takva pravila prije negoli na tim web stranicama upisujete ili posredstvom njih dostavljate svoje osobne podatke.</p><h3>14. POKLON BONOVI</h3><p>Poklon bon je sredstvo plaćanja u papirnatom obliku, numeriran je jedinstvenim brojem prilikom izdavanja. Izdavatelj ga izdaje uz uplatu sredstava koju vrši i čiju visinu određuje korisnik. Poklon bon moguće je iskoristiti za grupno ili individualno putovanje ili bilo koju drugu uslugu u ponudi Agencije. Iznos na poklon bonu važeći je do datuma istaknutog na poklon bonu, nakon isteka roka iznos na poklon bonu nije moguće iskoristiti. Nije moguća isplata već uplaćenog novčanog iznosa na poklon bonu. Korisnik uplatom iznosa prihvaća Opće uvjete Agencije s poklon bonom te se smatra da je s istima upoznat.</p><h3>15. OSIGURANJE ZA SLUČAJ PLATNE NEMOGUĆNOSTI ILI STEČAJA ORGANIZATORA PUTOVANJA</h3><p>Ponuđena kombinacija usluga putovanja jest paket-aranžman u smislu Zakona o pružanju usluga u turizmu. Putnik stoga ima sva prava koja proizlaze iz odredbi Zakona o pružanju usluga u turizmu koje se odnose na paket-aranžman. Putnička agencija Sunčana vura, d.o.o. Zagreb, Kožarska 2, OIB: 81240702858 u cijelosti je odgovorna za pravilno izvršenje paket-aranžmana kao cjeline. Putnička agencija Sunčana vura, d.o.o., ima zakonom propisanu osiguranu jamčevinu za naknadu putnikovih plaćanja i, ako je prijevoz uključen u paket-aranžman, osiguravanje repatrijacije putnika u slučaju da postane nesolventna.</p><h3>16. RJEŠAVANJE PRIGOVORA</h3><p>Putnik ima pravo prigovora za nepotpuno ili nekvalitetno izvršene usluge iz Ugovora. Putnik može zahtijevati srazmjernu odštetu pisanim putem. Svaki putnik/nositelj Ugovora prigovor podnosi zasebno te Agencija neće uzeti u razmatranje grupne prigovore.</p><ul><li>Odmah na samome mjestu putnik reklamira neodgovarajuću uslugu kod predstavnika organizatora i/ili kod izvršitelja usluga (smještajni objekt, prijevoznik i sl.). Putnik je dužan surađivati s predstavnikom ili izvršiteljem usluga u dobroj namjeri da se otklone uzroci prigovora. Ukoliko putnik ne prihvati na samome mjestu ponuđeno rješenje prigovora koje odgovara uplaćenoj usluzi, organizator neće uvažiti naknadnu putnikovu reklamaciju niti na nju odgovoriti.</li><li>Ako uzrok prigovoru ne bi bio otklonjen, putnik o tome sastavlja s predstavnikom pisani zapisnik – izjavu.</li><li>Najkasnije 8 dana od dana završetka putovanja, putnik predaje pisani prigovor u prodajnom mjestu gdje je uplatio aranžman, te prilaže pisanu izjavu potpisanu od predstavnika i eventualne račune za dodatne troškove. <br> Organizator će primiti u postupak samo potpuno dokumentirane pritužbe koje primi u navedenom roku od 8 dana od dana završetka putovanja. Ukoliko putnik uloži pisani prigovor nakon tog roka, Agencija takav prigovor nije dužna uzeti u obzir.</li><li>Organizator je dužan donijeti pisano rješenje na ovaj prigovor u roku od 15 dana po primitku prigovora na prodajnom mjestu. Organizator može odgoditi rok rješenja pritužbe za dodatnih 15 dana zbog prikupljanja informacija o čemu je dužan, u pisanom obliku, obavijestiti putnika/podnositelja prigovora. Organizator će rješavati samo one pritužbe kojima se uzrok nije mogao otkloniti u toku putovanja. Dok organizator ne donese rješenje, putnik se odriče posredovanja bilo koje druge osobe, sudske ustanove i davanja informacija u medije. Najviša naknada po prigovoru može doseći iznos reklamiranog dijela usluga, ne može obuhvatiti već iskorištene usluge kao ni cjelokupni iznos aranžmana. Ovime se isključuje pravo kupaca na naknadu idealne štete.</li></ul><p>Putnik i Agencija će moguće sporne slučajeve pokušati riješiti sporazumno sukladno uvjetima. Ukoliko to nije moguće, u slučaju spora nadležan je stvarno nadležni sud u Zagrebu, a primjenjuju se pozitivni zakonski propisi RH.</p><p>Prema Zakonu o pružanju usluga u turizmu, putnik može podnijeti prijedlog za rješavanje spora pred notificiranim tijelom za alternativno rješavanje potrošačkih sporova sukladno zakonu kojim se uređuje alternativno rješavanje potrošačkih sporova. </p><h3>17. ZAŠTITA OSOBNIH PODATAKA</h3><p>Putnik osobne podatke daje dobrovoljno. Osobni podatci putnika koriste se u procesu realizacije tražene usluge, uključivo i prosljeđivanje osobnih podataka trećim osobama u zemlji i inozemstvu, te osiguravateljima ukoliko putnik ugovara izabrana osiguranja preko Agencije. <br> <br> Svi se podaci o putnicima strogo čuvaju i dostupni su samo djelatnicima kojima su ti podaci nužni za obavljanje posla. Svi djelatnici Agencije i poslovni partneri odgovorni su za poštivanje načela zaštite privatnosti. Ovi se podaci mogu, uz privolu putnika, koristiti i za daljnju međusobnu komunikaciju i za dostavu marketinških poruka Agencije, a putnik se uvijek može samostalno isključiti iz marketinških aktivnosti. Agencija se obvezuje osobne podatke čuvati u bazi podataka, sukladno Zakonu o zaštiti osobnih podataka, odnosno općoj uredbi o zaštiti osobnih podataka (GDPR). </p><h3>18. UVJETI PUTOVANJA ZA POVEZANE PUTNE ARANŽMANE</h3><p>Opći uvjeti putovanja za paket-aranžmane ne vrijede za putovanja u povezanom putnom aranžmanu, osim u dijelu zaštite putnika u slučaju nesolventnosti organizatora. Povezani putni aranžman podrazumijeva najmanje dvije različite vrste usluga putovanja kupljene za potrebe istog putovanja ili odmora koje ne predstavljaju paket-aranžman (npr. individualna rezervacija hotela, avio karte, transfera i slične dodatne usluge). Kod putovanja u povezanim putnim aranžmanima, Agencija djeluje u ime i za račun pružatelja usluga, odnosno kao ovlašteni prodajni agent raznih pružatelja usluga (zrakoplovnih tvrtki, hotela, transfera, agencija za rezervaciju turističkih usluga i slično) te je svaki od pružatelja usluga isključivo odgovaran za pravilno izvršenje svojih usluga u skladu s ugovorom. U završnim putnim dokumentima, putnik će biti informiran o kontaktu pružatelja usluge.</p><h3>19. PUTOVANJA U ORGANIZACIJI DRUGIH ORGANIZATORA / TUROPERATORA</h3><p>Za svaki pojedini program primjenjuju se uvjeti odgovornog organizatora koji je naveden za to putovanje. Svi programi u kojima Agencija nastupa kao posrednik, neće odgovarati za provedbu putovanja odnosno turističkih aranžmana kojima nije odgovorni organizator već samo posreduje u prodaji. Svi turistički aranžmani koje Agencija zastupa kao posrednik posebno su označeni, a što će biti vidljivo na Ugovoru o putovanju. U tom slučaju primjenjuju se Opći uvjeti navedenog organizatora putovanja. Potpisivanjem Ugovora ugovaratelj/putnik u cijelosti prihvaća program i uvjete putovanja.</p><h3>20. ZAVRŠNE ODREDBE</h3><p>Opći uvjeti putovanja su sastavni dio Ugovora kojeg ugovaratelj/putnik sklapa s Agencijom, odnosno ovlaštenom turističkom agencijom u kojoj se prijavio za putovanje u organizaciji Agencije. Moguća odstupanja od ovih Općih uvjeta moraju biti navedena u tekstu programa putovanja ili u Ugovoru.</p><p>Izmjene i dopune ovih Općih uvjeta trebaju biti objavljene tako da budu dostupne zainteresiranim ugovornim strankama te u tom slučaju obvezuju sve stranke u postupku i s ovim Općim uvjetima čine jedinstvenu pravnu cjelinu. Opći uvjeti objavljeni su na web stranici Agencije www.suncanavura.com i stupaju na snagu 15.10.2020. godine i isključuju sva ranija izdanja.</p><p>U Zagrebu, 15.10.2020.</p><strong>Direktor</strong><p>Elica Rajlić <br> Kožarska 2, 10 000 Zagreb</p><p>infosv@suncana.org <br> +385 1 4813 636</p></div>", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=template&id=0a596714":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=template&id=0a596714 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 prose"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2>Uvjeti poslovanja Work &amp; Travel - Premium Placement</h2><p> Work &amp; Travel program je program kulturološke razmjene i omogućuje studentima da provedu ljetne praznike u SAD-u radeći i putujući. Program traje do 4 mjeseca i namijenjen je studentima koji polažu ispite u kontinuitetu te imaju konverzacijiski nivo znanja engleskog jezika. Za hrvatske studente Work and Travel program traje 4 mjeseca, u periodu između 04. 06 i 10. 10. 2022. Period putovanja- grace period traje maksimalno 30 dana i mora završiti do 10.10.2022. </p><p>U programu Premium placement agencija Sunčana vura uz pomoć sponzora pronalazi studentu posao. Obaveza studenta je pronalazak smještaja (uz naše sugestije), avionska karta, organizacija prijevoza od aerodroma do smještaja i prijava za vizu. Mi ćemo ti sugerirati gdje možeš pronaći smještaj i dati ponudu za avionsku kartu.</p><h3>U Premium je uključeno:</h3><ul><li>obrada aplikacije</li><li>testiranje engleskog</li><li>ponuda poslova</li><li>intervju s poslodavcem</li><li>zdravstveno osiguranje</li><li>dokumenti za vizu (DS 2019)</li><li>SEVIS (obavezna uplata za bazu podataka pri Američkoj ambasadi)</li><li>orijentacijski sastanak prije puta</li><li>24/7 podrška za hitne slučajeve</li><li>usluga pronalaska leta i ponude avionske karte</li></ul><p>CIJENA PREMIUM PLACEMENT PROGRAMA: <span class=\"text-red-500 font-medium\">9,720 HRK</span></p><p class=\"text-red-500 font-medium\">U program su uključeni i obavezni 35 USD SEVIS FEE te zdravstveno osiguranje koje pokriva period od početka rada do kraja boravka u SAD-u.</p><h3>Obavezni dodatni troškovi:</h3><ul><li>160 USD viza (plaća se nakon prijave za vizu, u PBZ banci direktno ambasadi SAD-a)</li></ul><h3> Cijena ne uključuje: </h3><ul><li>avionsku kartu*</li><li>prijevoz od aerodroma do poslodavca</li><li>troškove smještaja, hranu i osobne troškove u SAD-u</li><li>troškove vize</li></ul><p>*Agencija Sunčana vura će vam ponuditi najbolju opciju leta po posebnim tarifama za Work &amp; Travel studente.</p><h3>Dinamika plaćanja:</h3><ul><li>1. dio uplate – 1.940,00 HRK plaća se kod prijave</li><li>2. dio uplate – 1.940,00 HRK po dobitku posla</li><li>3. dio uplate – 5.840,00 HRK treba biti uplaćeno prije predaje dokumenta za vizu DS2019 a najkasnije do 01.03.2022.</li></ul><h3>Odustajanje od programa:</h3><ul><li>HRK 1.940,00 HRK se zadržava ukoliko odustanete od programa nakon obrade aplikacije</li><li>HRK 3.880,00 HRK se zadržava ukoliko odustanete nakon što ste dobili ponudu za posao </li><li>Ukupan iznos cijene programa se zadržava ukoliko odustanete nakon što ste dobili vizu</li></ul><h3>Prekid programa radi više sile (Force Majeure):</h3><ul><li>U slučaju nepredvidivih okolnosti na koje agencija Sunčana vura nema utjecaja uključujući i novi val epidemije izazvane COVID-om 19 i/ ili privremeni prestanak rada ambasade, a radi kojih se sudjelovanje u programu ne može održati agencija zadržava HRK 1135 + naknadu sponzora od 500 do 1240 HRK ovisno o sponzoru.</li><li>Agencijski iznos 1135 kn se može iskoristiti za bilo koji od programa Sunčane vure u narednoj godini.</li></ul><h3>ODBIJENA VIZA</h3><p>U slučaju odbijene vize VRAĆAMO CIJELOKUPAN IZNOS CIJENE PROGRAMA uplaćenog Agenciji i sponzoru* ako ispunjavate sljedeće uvjete:</p><ol><li>da ste redovno polagali ispite</li><li>da imate minimalno tri položena ispita iz tekuće školske godine</li><li>da niste ponavljali zadnju godinu</li><li>da ste studirali u kontinuitetu bez pauza između upisanih godina na fakultetu</li><li>da nakon završetka srednje škole i prije upisivanja fakulteta niste imali pauzu</li><li> da niste mijenjali fakultete</li><li>da niste kažnjavani</li><li>da ste poštivali datum povratka iz SAD-a upisan na prethodnim vizama (J-1, B1, B2 i bilo koja druga koja vam je bila izdana za ulazak u SAD)</li></ol><p>*ne odnosi se na iznos 160 USD uplaćen Američkoj ambasadi za proces obrade zahtjeva za vizu</p><p>Ukoliko je razlog odbijene vize neka od gore navedenih točaka ili je razlog odbijanja neki netočan, neistinit i/ ili nepredočeni ključni podatak prilikom prijave u Program i kod ispunjavanja upitnika za vizu, Agencija zadržava upisninu 1.940,00 HRK.</p>", 23);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=template&id=c6d0c274":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=template&id=c6d0c274 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 prose"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"Normal tm27\"><strong><span class=\"tm28\"> </span></strong></p><p class=\"Title\"><strong>AU PAIR ŠPANJOLSKA</strong></p><p class=\"Normal tm30\"><strong><span class=\"tm31\">ŠTO JE AU PAIR?</span></strong></p><p class=\"Normal tm30\"><span class=\"tm32\">Au pair su djevojke koje odlaze u stranu zemlju naučiti i usavršiti određeni jezik, upoznati kulturu i običaje zemlje koju su odabrale. Djevojke se smještaju u obitelji koje trebaju pomoć oko djece i lakših kućanskih poslova. U obiteljima su prihvaćene kao njihov ravnopravni član. Djevojka mora imati osiguran smještaj ( svoju vlastitu sobu), hranu, džeparac, slobodno vrijeme za pohađanje tečaja jezika i ostale aktivnosti. Zauzvrat, au pair je dužna pomoći oko čuvanja djece, pripreme za školu ili vrtić, vođenja na aktivnosti, njege ( oblačenja, hranjenja, kupanja i sl.) kao i oko lakših kućanskih poslova, održavanja reda u kući. Za au pair u Španjolskoj se mogu prijaviti djevojke i dečki 18-30 godina. U Španjoslkoj se može boraviti 1-12 mjeseci: tijekom godine se češće traži dulji boravak, no tijekom ljeta au pair se primaju i na do 3 mjeseca, između 15.6. i 15.9..</span></p><p class=\"Normal tm30\"><span class=\"tm32\">Nakon 6 mjeseci, au pair imaju pravo na tjedan dana godišnjeg za koje vrijeme također dobivaju svoj džeparac.</span></p><p class=\"Normal tm30\"><span class=\"tm32\">95% španjolskih obitelji traže au pair s dobrim znanjem engleskog radi pomoći oko zadaća i poduke. Njemački je također opcija. Mnoge obitelji ne zahtijevaju znanje španjolskog. </span></p><p class=\"Normal tm30\"><strong><span class=\"tm31\">POZICIJE, RADNO VRIJEME I DŽEPARAC</span></strong></p><p class=\"Normal tm30\"><span class=\"tm32\"></span><strong><span class=\"tm31\">Demi au pair</span></strong><span class=\"tm32\">:              20 sati, do 50 EUR tjedno </span></p><p class=\"Normal tm30\"><span class=\"tm32\"></span><strong><span class=\"tm31\">Au Pair</span></strong><span class=\"tm32\">:              30 sati , minimalno 70 EUR tjedno. U velikim gradovima (Madrid, Barcelona, Sevilla) obitelj plaća mjesečni prijevoz ili plaćaju 75 EUR tjedno džeparca. </span></p><p class=\"Normal tm30\"><span class=\"tm32\"></span><strong><span class=\"tm31\">Au pair plus</span></strong><span class=\"tm32\">:             30-35 sati, 80- 100 EUR tjedno. Obitelji au pair plus rijetko traže tijekom godine, ali često tijekom ljetnih praznika kad djeca kod kuće provode više vremena (15.6-15.9.) Vikendi su slobodni, povremeno se može tražiti da au pair odradi 2-3 sata subotom prije podne radi pomoći oko zadaća.</span></p><p class=\"Normal tm30\"><span class=\"tm32\"></span><strong><span class=\"tm31\">Language assistant:             </span></strong><span class=\"tm32\">djevojke s visokim nivoom engleskog mogu se prijaviti za ovu poziciju. Engleski se testira u agenciji pismeno i usmeno. Language assistants isključivo rade s djecom, bez večernjih baby sittinga, a obitelji tijekom dana najčešće imaju spremačicu za kućanske poslove. Radno vrijeme je od ponedjeljka do petka, maksimalno 15 sati tjedno i 50 EUR džeparca tjedno. Za izvorne govornike džeparac može biti viši. </span></p><p class=\"Normal tm30\"><strong><span class=\"tm31\"></span></strong><span class=\"tm32\">Tijekom boravka u Španjolskoj, au pair ima 24-satni pristup savjetnici, pomoć pri odabiru škole jezika po posebnim cijenama za au pair te tjednu listu događanja.</span></p><p class=\"BodyText2\"><strong><span class=\"tm31\">PRIJAVA</span></strong></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"BodyText2\"><strong><span class=\"tm31\">Dokumenti potrebni za prijavu:</span></strong></p><p class=\"BodyText2 tm33\"><span class=\"tm32\"></span><span class=\"tm34\"> </span><span class=\"tm32\">1 fotografija formata za putovnicu (sa smješkom);</span></p><p class=\"BodyText2 tm33\"><span class=\"tm32\"></span><span class=\"tm34\"> </span><span class=\"tm32\">fotografije iz obiteljskog albuma (s djecom obavezno, kućnim ljubimcima, obitelji)</span></p><p class=\"BodyText2 tm33\"><span class=\"tm32\"></span><span class=\"tm34\"> </span><span class=\"tm32\">2 preporuke – preporuke pišu obitelji kod kojih si čuvala djecu te trebaju sadržavati opis tvojih karakteristika, radnih navika, ophođenje s djecom, opis dužnosti. Preporuke moraju sadržavati ime, adresu i broj telefona osobe koja je piše.</span></p><p class=\"BodyText2 tm33\"><span class=\"tm32\"></span><span class=\"tm34\"> </span><span class=\"tm32\">Prijateljsko pismo - nasloviti “Draga obitelji” i u njoj navesti opće podatke o rođenju, obrazovanju, obitelji, hobijima i motivu odlaska u Španjolsku. Biografija se OBAVEZNO piše na hrvatskom i na engleskom jeziku i veličine je najmanje jedne stranice A4 formata.</span></p><p class=\"BodyText2 tm33\"><span class=\"tm32\"></span><span class=\"tm34\"> </span><span class=\"tm32\">Liječnička potvrda - od liječnika opće prakse. Uvidom u povijest bolesti iz zdravstvenog kartona potvrđuje se opće tjelesno i mentalno zdravlje;</span></p><p class=\"BodyText2 tm33\"><span class=\"tm32\"></span><span class=\"tm34\"> </span><span class=\"tm32\">Fotokopija putovnice;</span></p><p class=\"BodyText2 tm33\"><span class=\"tm32\"></span><span class=\"tm34\"> </span><span class=\"tm32\">Potvrda o nekažnjavanju (podiže se na općinskom sudu);</span></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"BodyText2\"><span class=\"tm32\">Prije razgovora s obitelji, poslat ćemo ti pismo obitelji, fotografiju kuće, obitelji i djece te raspored rada i slobodnog vremena. S obitelji ćeš putem maila dogovoriti razgovor (načešće Skypeom). Nakon skype intervjua između djevojke i obitelji, te međusobnog prihvaćanja, potpisujete ugovor. Obitelj dočekuje djevojku na mjestu dogovorenom u njihovom razgovoru. Ukoliko obitelj nije u mogućnosti dočekati au pair na aerodromu, podmiruju trošak prijevoza do njihove kuće. </span></p><p class=\"BodyText2 PageBreak\"><strong><span class=\"tm31\"> </span></strong></p><p class=\"BodyText2\"><strong><span class=\"tm31\">CIJENA PROGRAMA</span></strong></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"BodyText2\"><span class=\"tm32\">Prilikom prijave u program uplaćuje se 500,00 kn, a ostatak od 500,00 kn nakon dogovora s obitelji. U slučaju odustajanja od programa (iz bilo kojih razloga) Sunčana vura zadržava iznos uplaćen prilikom prijave. Djevojke same snose troškove putovanja.</span></p><p class=\"BodyText2\"><span class=\"tm32\"> </span></p><p class=\"Normal tm36\"><strong><span class=\"tm37\"></span><span class=\"tm37\">Online prihvaćanjem Uvj</span><span class=\"tm38\">e</span><span class=\"tm37\">ta Au Pair in America pro</span><span class=\"tm38\">g</span><span class=\"tm37\">rama potvrđujem da sam u</span><span class=\"tm38\">p</span><span class=\"tm37\">oznata</span><span class=\"tm38\"> sa svim pravilima i uvjetima programa </span><span class=\"tm37\">i da </span><span class=\"tm38\">p</span><span class=\"tm37\">rihv</span><span class=\"tm38\">a</span><span class=\"tm37\">ćam pro</span><span class=\"tm38\">g</span><span class=\"tm37\">r</span><span class=\"tm38\">a</span><span class=\"tm37\">m </span><span class=\"tm38\"></span><span class=\"tm37\">putovanja </span><span class=\"tm38\"></span><span class=\"tm37\">organ</span><span class=\"tm38\">i</span><span class=\"tm37\">z</span><span class=\"tm38\">a</span><span class=\"tm37\">t</span><span class=\"tm38\">o</span><span class=\"tm37\">r</span><span class=\"tm38\">a</span><span class=\"tm37\">.</span></strong></p><p class=\"Normal tm39\"><strong><span class=\"tm37\"> </span></strong></p><p class=\"Normal tm40\"><strong><span class=\"tm37\">Sastav</span><span class=\"tm38\">n</span><span class=\"tm37\">i dio</span><span class=\"tm38\"></span><span class=\"tm37\">Uvj</span><span class=\"tm38\">e</span><span class=\"tm37\">ta Au Pair in America su: 1.</span><span class=\"tm38\"></span><span class=\"tm37\">Uvjeti</span><span class=\"tm38\"></span><span class=\"tm37\">sponzora, 2. Opći</span><span class=\"tm38\"></span><span class=\"tm37\">u</span><span class=\"tm38\">v</span><span class=\"tm37\">je</span><span class=\"tm38\">t</span><span class=\"tm37\">i</span></strong></p><p class=\"Normal tm40\"><span class=\"tm41\"></span><strong><span class=\"tm37\">p</span><span class=\"tm38\">u</span><span class=\"tm37\">to</span><span class=\"tm38\">v</span><span class=\"tm37\">anja Sunčane vure.</span></strong></p><p class=\"BodyText2\"><strong><span class=\"tm31\"> </span></strong></p>", 35);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=template&id=ffef72f2":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=template&id=ffef72f2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "overflow-y-scroll",
  style: {
    "height": "80vh"
  }
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "py-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, " UVJETI POSLOVANJA ")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "border-t border-gray-200 py-5 sm:p-0"
};
var _hoisted_4 = {
  key: 0,
  "class": "flex space-x-4 py-8"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dialog_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dialog-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_dialog_modal, {
    show: $props.showModal,
    big: true,
    onClose: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$emit('close');
    })
  }, {
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.computedProgram))), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("             <TabGroup >\n                <TabList class=\"lg:max-w-7xl lg:mx-auto xl:max-w-screen-2xl border-b space-x-8 -mb-px\">\n                    <Tab v-slot=\"{ selected }\" as=\"template\">\n                        <button\n                        class=\"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none\"\n                        :class=\"[selected ? 'border-pink-500 text-gray-900 '\n                            : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']\"\n                        >\n                        Program Independent\n                        </button>\n                    </Tab>\n                    <Tab v-slot=\"{ selected }\" as=\"template\">\n                        <button\n                        class=\"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none\"\n                        :class=\"[selected ? 'border-pink-500 text-gray-900 '\n                            : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']\"\n                        >\n                        Program Premium\n                        </button>\n                    </Tab>\n                    <Tab v-slot=\"{ selected }\" as=\"template\">\n                        <button\n                        class=\"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none\"\n                        :class=\"[selected ? 'border-pink-500 text-gray-900 '\n                            : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']\"\n                        >\n                        Program Sierra\n                        </button>\n                    </Tab>\n                </TabList>\n                <TabPanels>\n                    <TabPanel>\n                        <Independent @neprihvacam=\"$emit('neprihvacam')\" @prihvacam=\"$emit('prihvacam')\" />\n                    </TabPanel>\n                    <TabPanel>\n                        <Premium @neprihvacam=\"$emit('neprihvacam')\" @prihvacam=\"$emit('prihvacam')\"  />\n                    </TabPanel>\n                    <TabPanel>\n                        <Sierra @neprihvacam=\"$emit('neprihvacam')\" @prihvacam=\"$emit('prihvacam')\"/>\n                    </TabPanel>\n                </TabPanels>\n            </TabGroup> "), $props.uvjeti && $props.program != 'Destinacija nije unesena' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        type: "button",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.$emit('prihvacam');
        }),
        "class": "inline-flex items-center px-4 py-2 border border-blue-500 text-base\n                    leading-5 font-medium rounded-md text-blue-700 bg-white hover:text-blue-500\n                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-blue-800\n                    active:bg-blue-50 transition duration-150 ease-in-out"
      }, " Prihvaćam uvjete "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        type: "button",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.$emit('neprihvacam');
        }),
        "class": "inline-flex items-center px-4 py-2 border border-blue-500 text-base\n                    leading-5 font-medium rounded-md text-blue-700 bg-white hover:text-blue-500\n                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-blue-800\n                    active:bg-blue-50 transition duration-150 ease-in-out"
      }, " Ne prihvaćam uvjete ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=template&id=749d6376":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=template&id=749d6376 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 prose"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2>Uvjeti poslovanja Work &amp; Travel- Sierra Life Guards</h2><p> Work &amp; Travel program je program kulturološke razmjene i omogućuje studentima da provedu ljetne praznike u SAD-u radeći i putujući i namijenjen je studentima koji polažu ispite u kontinuitetu te imaju konverzacijiski nivo znanja engleskog jezika. Za hrvatske studente Work and Travel program traje 4 mjeseca u periodu 04. 06 do 10. 10. 2022. Period putovanja- grace period, traje maksimalno 30 dana i mora završiti do 10.10.2022. </p><p>U programu Sierra Lige Guards agencija Sunčana vura uz pomoć sponzora pronalazi studentu posao spasioca na bazenima. </p><h3>U Sierra - Life Guards je uključeno:</h3><ul><li>obrada aplikacije</li><li>testiranje engleskog</li><li>ponuda poslova</li><li>intervju s poslodavcem</li><li>zdravstveno osiguranje</li><li>dokumenti za vizu (DS 2019)</li><li>SEVIS (Student Exchange Visitor Information System)</li><li>Obuka + 3 certifikata: Lifeguarding koji vrijedi 2 godine; First Aid/ CPR.AED -2 godine; Bloodborne Pathogens- 1 godina</li><li>orijentacijski sastanak prije puta</li><li>povratna aviokarta*</li><li>transfer od zračne luke u US do poslodavca</li><li>pronalazak smještaja</li><li>24/7 podrška za hitne slučajeve</li></ul><p>*Mjesto polaska i povratka je isto i rezervira se prema mjestu rada.</p><p>Ukoliko se želi rezervirati povratak iz nekog drugog grada postoji mogućnost nadoplate radi razlike u cijeni karte.</p><p>CIJENA PROGRAMA: <span class=\"text-red-500 font-medium\">14.420 HRK</span></p><p class=\"text-red-500 font-medium\">U program su uključeni i obavezni 35 USD SEVIS FEE te zdravstveno osiguranje koje pokriva period od početka rada do kraja boravka u SAD-u.</p><h3>Obavezni dodatni troškovi:</h3><ul><li>160 USD viza (plaća se nakon prijave za vizu, u PBZ banci direktno ambasadi SAD-a)</li></ul><h3> Cijena ne uključuje: </h3><ul><li>troškove smještaja, hranu i osobne troškove u SAD-u</li><li>troškove vize</li></ul><h3>Dinamika plaćanja:</h3><ul><li>1. dio uplate – 1.940,00 HRK plaća se kod prijave</li><li>2. dio uplate – 4.300,00 HRK po dobitku posla</li><li>dio uplate – 8,180,00 HRK treba biti uplaćeno prije predaje dokumenta za vizu DS2019 a najkasnije do 01.03.2022.</li></ul><h3>Odustajanje od programa:</h3><ul><li>HRK 1.940,00 HRK se zadržava ukoliko odustanete od programa nakon obrade aplikacije</li><li>HRK 5.300,00 HRK se zadržava ukoliko odustanete nakon što ste dobili ponudu za posao </li><li>HRK 6.240,00 HRK se zadržava nakon što ste odradili obuku za spasioce</li><li>Ukupan iznos cijene programa se zadržava ukoliko odustanete nakon što ste dobili vizu</li></ul><h3>Prekid programa radi više sile (Force Majeure):</h3><ul><li>U slučaju nepredvidivih okolnosti na koje agencija Sunčana vura nema utjecaja uključujući i novi val epidemije izazvane COVID-om 19 i/ ili privremeni prestanak rada ambasade, a radi kojih se sudjelovanje u programu ne može održati agencija zadržava HRK 1135 + naknadu sponzora od 500 do 1240 HRK ovisno o sponzoru.</li><li>Agencijski iznos 1135 kn se može iskoristiti za bilo koji od programa Sunčane vure u narednoj godini.</li></ul><h3>ODBIJENA VIZA*</h3><p>U slučaju odbijene vize VRAĆAMO CIJELOKUPAN IZNOS CIJENE PROGRAMA uplaćenog Agenciji i sponzoru* ako ispunjavate sljedeće uvjete:</p><ol><li>da ste redovno polagali ispite</li><li>da imate minimalno tri položena ispita iz tekuće školske godine</li><li>da niste ponavljali zadnju godinu</li><li>da ste studirali u kontinuitetu bez pauza između upisanih godina na fakultetu</li><li>da nakon završetka srednje škole i prije upisivanja fakulteta niste imali pauzu</li><li> da niste mijenjali fakultete</li><li>da niste kažnjavani</li><li>da ste poštivali datum povratka iz SAD-a upisan na prethodnim vizama (J-1, B1, B2 i bilo koja druga koja vam je bila izdana za ulazak u SAD)</li></ol><p>*ne odnosi se na iznos 160 USD uplaćen Američkoj ambasadi za proces obrade zahtjeva za vizu</p><p>Ukoliko je razlog odbijene vize neka od gore navedenih točaka ili je razlog odbijanja neki netočan, neistinit i/ili nepredočeni ključni podatak prilikom prijave u Program i kod ispunjavanja upitnika za vizu, Agencija zadržava upisninu 1.940 HRK.</p><p>Online prihvaćanjem Uvjeta Sierra Life Guards programa potvrđujem da sam upoznat-a sa svim pravilima i uvjetima programa i da prihvaćam program putovanja organizatora.</p><p>Sastavni dio Uvjeta Sierra Life Guards programa su: 1. Uvjeti sponzora, 2. Opći uvjeti putovanja Sunčane vure.</p><div class=\"flex space-x-4 py-8\"></div>", 27);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/USA.vue?vue&type=template&id=f52d0280":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/USA.vue?vue&type=template&id=f52d0280 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5 prose"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"Normal tm7\"><strong><span class=\"tm8\">A</span><span class=\"tm9\">U </span><span class=\"tm8\">P</span><span class=\"tm8\">A</span><span class=\"tm9\">IR</span><span class=\"tm8\"></span><span class=\"tm9\">IN</span><span class=\"tm8\"></span><span class=\"tm8\">AM</span><span class=\"tm8\">E</span><span class=\"tm8\">R</span><span class=\"tm9\">I</span><span class=\"tm8\">C</span><span class=\"tm9\">A</span></strong></p><p class=\"Normal tm10\">Age<span class=\"tm11\">n</span><span class=\"tm11\">c</span>ija<span class=\"tm11\"></span>Us<span class=\"tm11\">p</span>i<span class=\"tm11\">n</span>ja<span class=\"tm11\">č</span>a<span class=\"tm11\">-</span><span class=\"tm11\">S</span><span class=\"tm11\">un</span><span class=\"tm11\">č</span>a<span class=\"tm11\">n</span>a<span class=\"tm11\"></span>v<span class=\"tm11\">u</span>ra<span class=\"tm11\"> d</span>.<span class=\"tm11\">o</span>.<span class=\"tm11\">o</span>. iz<span class=\"tm11\"></span>Zagre<span class=\"tm11\">b</span>a<span class=\"tm11\"></span>,<span class=\"tm11\"></span><span class=\"tm11\">H</span>rva<span class=\"tm11\">t</span>s<span class=\"tm11\">k</span>a,<span class=\"tm11\"></span>je<span class=\"tm11\"></span>age<span class=\"tm11\">n</span><span class=\"tm11\">c</span>ija<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>ja<span class=\"tm11\"></span>ima<span class=\"tm11\"> više od 30 </span>g<span class=\"tm11\">od</span>i<span class=\"tm11\">n</span>a is<span class=\"tm11\">k</span><span class=\"tm11\">u</span>s<span class=\"tm11\">t</span>va<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>gramima <span class=\"tm11\">k</span><span class=\"tm11\">u</span>l<span class=\"tm11\">tu</span>r<span class=\"tm11\">o</span>l<span class=\"tm11\">o</span>š<span class=\"tm11\">k</span>e<span class=\"tm11\"></span>ra<span class=\"tm11\">z</span>mje<span class=\"tm11\">n</span>e i<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\">po</span>šljava<span class=\"tm11\">n</span><span class=\"tm11\">j</span><span class=\"tm11\">u</span>.<span class=\"tm11\"></span>Ovlaš<span class=\"tm11\">t</span>e<span class=\"tm11\">n</span>i<span class=\"tm11\"></span>smo<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">e</span><span class=\"tm11\">d</span>s<span class=\"tm11\">t</span>av<span class=\"tm11\">n</span>i<span class=\"tm11\">c</span>i<span class=\"tm11\"></span><span class=\"tm11\">z</span>a <span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>gram<span class=\"tm11\"></span>Au<span class=\"tm11\"></span><span class=\"tm11\">P</span>air<span class=\"tm11\"></span><span class=\"tm11\">i</span>n<span class=\"tm11\"></span>A<span class=\"tm11\">m</span>e<span class=\"tm11\">r</span>i<span class=\"tm11\">c</span>a<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">H</span>rva<span class=\"tm11\">t</span>s<span class=\"tm11\">k</span><span class=\"tm11\">o</span>j<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">B</span><span class=\"tm11\">o</span>s<span class=\"tm11\">n</span>i<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">H</span>er<span class=\"tm11\">c</span>eg<span class=\"tm11\">o</span>vi<span class=\"tm11\">n</span>i<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>ji<span class=\"tm11\">m</span>a<span class=\"tm11\"></span>s<span class=\"tm11\">u</span>r<span class=\"tm11\">a</span>đ<span class=\"tm11\">u</span>jemo<span class=\"tm11\"></span>već <span class=\"tm11\">25</span><span class=\"tm11\"></span><span class=\"tm11\">g</span><span class=\"tm11\">od</span>i<span class=\"tm11\">n</span>a<span class=\"tm11\"></span><span class=\"tm11\">t</span>e imamo<span class=\"tm11\"></span>mr<span class=\"tm11\">e</span><span class=\"tm11\">ž</span>u<span class=\"tm11\"></span><span class=\"tm11\">l</span><span class=\"tm11\">o</span><span class=\"tm11\">k</span>al<span class=\"tm11\">n</span>ih<span class=\"tm11\"></span>s<span class=\"tm11\">u</span>ra<span class=\"tm11\">d</span><span class=\"tm11\">n</span>i<span class=\"tm11\">k</span>a.<span class=\"tm11\"></span><span class=\"tm11\">D</span>a<span class=\"tm11\">n</span>as<span class=\"tm11\"></span><span class=\"tm11\">j</span>e <span class=\"tm11\"></span>AU <span class=\"tm11\">P</span>AIR<span class=\"tm11\"></span>IN<span class=\"tm11\"></span>A<span class=\"tm11\">M</span>E<span class=\"tm11\">R</span>I<span class=\"tm11\">C</span>A <span class=\"tm11\"></span><span class=\"tm11\">n</span>ajve<span class=\"tm11\">ć</span>i i<span class=\"tm11\"></span><span class=\"tm11\">n</span>aj<span class=\"tm11\">u</span><span class=\"tm11\">s</span><span class=\"tm11\">p</span>ješ<span class=\"tm11\">n</span>iji<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">r</span><span class=\"tm11\">o</span>gram<span class=\"tm11\"></span>s više <span class=\"tm11\"></span><span class=\"tm11\">o</span>d <span class=\"tm11\"></span><span class=\"tm11\">5</span>.<span class=\"tm11\">00</span>0 <span class=\"tm11\"></span><span class=\"tm11\">z</span><span class=\"tm11\">a</span><span class=\"tm11\">do</span>v<span class=\"tm11\">o</span>l<span class=\"tm11\">j</span><span class=\"tm11\">n</span>ih <span class=\"tm11\"></span>s<span class=\"tm11\">ud</span><span class=\"tm11\">i</span><span class=\"tm11\">on</span>i<span class=\"tm11\">k</span>a <span class=\"tm11\"></span>g<span class=\"tm11\">od</span>iš<span class=\"tm11\">n</span>je <span class=\"tm11\"></span><span class=\"tm11\">t</span>e <span class=\"tm11\"></span>smo <span class=\"tm11\"></span>ja<span class=\"tm11\">k</span>o <span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\">do</span>v<span class=\"tm11\">o</span>l<span class=\"tm11\">j</span><span class=\"tm11\">n</span>i <span class=\"tm11\"></span>š<span class=\"tm11\">t</span>o <span class=\"tm11\"></span>vam <span class=\"tm11\"></span>ga <span class=\"tm11\"></span>m<span class=\"tm11\">ož</span>e<span class=\"tm11\">m</span>o <span class=\"tm11\">p</span>re<span class=\"tm11\">d</span><span class=\"tm11\">s</span><span class=\"tm11\">t</span>avi<span class=\"tm11\">t</span><span class=\"tm11\">i</span>!</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm13\"><span class=\"tm11\">N</span>a<span class=\"tm11\">d</span>amo<span class=\"tm11\"></span><span class=\"tm11\">s</span>e<span class=\"tm11\"></span><span class=\"tm11\">d</span>a<span class=\"tm11\"></span><span class=\"tm11\">ć</span>e<span class=\"tm11\"></span>vam<span class=\"tm11\"></span><span class=\"tm11\">i</span><span class=\"tm11\">nfo</span>r<span class=\"tm11\">m</span>a<span class=\"tm11\">c</span>ije<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>je<span class=\"tm11\"></span>smo<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">i</span><span class=\"tm11\">p</span>remili <span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>i <span class=\"tm11\">z</span>a<span class=\"tm11\">n</span>iml<span class=\"tm11\">j</span>ive,<span class=\"tm11\"></span>a <span class=\"tm11\">u</span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>li<span class=\"tm11\">k</span>o<span class=\"tm11\"></span>ima<span class=\"tm11\">t</span>e <span class=\"tm11\">b</span>ilo<span class=\"tm11\"></span><span class=\"tm11\">k</span>a<span class=\"tm11\">k</span>vih <span class=\"tm11\">p</span>i<span class=\"tm11\">t</span><span class=\"tm11\">a</span><span class=\"tm11\">n</span>ja<span class=\"tm11\"></span>sl<span class=\"tm11\">o</span><span class=\"tm11\">bo</span><span class=\"tm11\">d</span><span class=\"tm11\">n</span>o<span class=\"tm11\"></span><span class=\"tm11\">n</span>as<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span><span class=\"tm11\">n</span><span class=\"tm11\">t</span>a<span class=\"tm11\">k</span><span class=\"tm11\">t</span>iraj<span class=\"tm11\">t</span>e!</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm14\"><strong><span class=\"tm15\">O </span><span class=\"tm16\">P</span><span class=\"tm16\">R</span><span class=\"tm15\">OG</span><span class=\"tm16\">R</span><span class=\"tm15\">A</span><span class=\"tm16\">M</span><span class=\"tm15\">U</span></strong></p><p class=\"Normal tm12\"> </p><p class=\"Normal tm17\"><span class=\"tm11\">P</span>r<span class=\"tm11\">o</span>gram<span class=\"tm11\"></span><span class=\"tm11\">A</span>u<span class=\"tm11\"></span><span class=\"tm11\">P</span>air<span class=\"tm11\"></span>u<span class=\"tm11\"></span>A<span class=\"tm11\">me</span>ri<span class=\"tm11\">c</span>i<span class=\"tm11\"></span>je<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>m<span class=\"tm11\">b</span>i<span class=\"tm11\">n</span>a<span class=\"tm11\">c</span>ija<span class=\"tm11\"></span>ra<span class=\"tm11\">d</span>a, s<span class=\"tm11\">tud</span><span class=\"tm11\">i</span>ra<span class=\"tm11\">n</span>ja<span class=\"tm11\"></span>i<span class=\"tm11\"> p</span><span class=\"tm11\">u</span><span class=\"tm11\">to</span>v<span class=\"tm11\">a</span><span class=\"tm11\">n</span>ja<span class=\"tm11\"></span>-<span class=\"tm11\"> ob</span>r<span class=\"tm11\">a</span><span class=\"tm11\">zo</span>v<span class=\"tm11\">n</span><span class=\"tm11\">o</span><span class=\"tm11\">-</span><span class=\"tm11\">k</span><span class=\"tm11\">u</span>l<span class=\"tm11\">t</span><span class=\"tm11\">u</span>r<span class=\"tm11\">o</span>l<span class=\"tm11\">o</span>š<span class=\"tm11\">ki </span><span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>gram<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\"></span><span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>e<span class=\"tm11\"></span>i<span class=\"tm11\">z</span><span class=\"tm11\">m</span>eđu<span class=\"tm11\"></span><span class=\"tm11\">1</span>8<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">2</span>6<span class=\"tm11\"></span><span class=\"tm11\">g</span><span class=\"tm11\">od</span><span class=\"tm11\">i</span><span class=\"tm11\">n</span>a <span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>jim<span class=\"tm11\"></span>se<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">m</span><span class=\"tm11\">o</span>g<span class=\"tm11\">u</span><span class=\"tm11\">ć</span>ava<span class=\"tm11\"></span><span class=\"tm11\">u</span>savršava<span class=\"tm11\">n</span>je<span class=\"tm11\"></span><span class=\"tm11\">zn</span><span class=\"tm11\">a</span><span class=\"tm11\">n</span>ja<span class=\"tm11\"></span>e<span class=\"tm11\">n</span>gles<span class=\"tm11\">k</span><span class=\"tm11\">o</span>g je<span class=\"tm11\">z</span>i<span class=\"tm11\">k</span>a<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">u</span><span class=\"tm11\">p</span><span class=\"tm11\">o</span><span class=\"tm11\">z</span><span class=\"tm11\">n</span>ava<span class=\"tm11\">n</span>je am<span class=\"tm11\">e</span>ri<span class=\"tm11\">čk</span>e<span class=\"tm11\"></span><span class=\"tm11\">t</span>ra<span class=\"tm11\">d</span>i<span class=\"tm11\">c</span>ije<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">u</span><span class=\"tm11\">l</span><span class=\"tm11\">tu</span>re<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">r</span><span class=\"tm11\">o</span>z<span class=\"tm11\"></span><span class=\"tm11\">ž</span>iv<span class=\"tm11\">o</span>t<span class=\"tm11\"></span>u<span class=\"tm11\"> ob</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>elji<span class=\"tm11\"></span>i <span class=\"tm11\">b</span>rigu<span class=\"tm11\"></span>o<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">c</span>i.<span class=\"tm11\"></span>Au<span class=\"tm11\"> p</span>air<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">r</span><span class=\"tm11\">o</span>gram u <span class=\"tm11\"></span>SA<span class=\"tm11\">D</span><span class=\"tm11\">-</span>u <span class=\"tm11\"> od</span><span class=\"tm11\">r</span><span class=\"tm11\">ž</span>ava se <span class=\"tm11\">p</span><span class=\"tm11\">o</span>d <span class=\"tm11\"></span>s<span class=\"tm11\">t</span>r<span class=\"tm11\">o</span>gim<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span><span class=\"tm11\">k</span>r<span class=\"tm11\">o</span>vi<span class=\"tm11\">t</span>elj<span class=\"tm11\">s</span><span class=\"tm11\">t</span><span class=\"tm11\">v</span><span class=\"tm11\">o</span>m<span class=\"tm11\"></span>S<span class=\"tm11\">t</span>a<span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">D</span><span class=\"tm11\">e</span><span class=\"tm11\">p</span>ar<span class=\"tm11\">t</span><span class=\"tm11\">m</span>e<span class=\"tm11\">n</span><span class=\"tm11\">t</span>a<span class=\"tm11\"></span>j<span class=\"tm11\">o</span>š<span class=\"tm11\"></span><span class=\"tm11\">o</span>d <span class=\"tm11\"> 1</span><span class=\"tm11\">9</span><span class=\"tm11\">86</span>.<span class=\"tm11\"></span>g<span class=\"tm11\">od</span><span class=\"tm11\">i</span><span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">te ob</span>i<span class=\"tm11\">t</span>elji<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>d<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>j<span class=\"tm11\">i</span>h<span class=\"tm11\"></span>se <span class=\"tm11\">d</span>je<span class=\"tm11\">v</span><span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>e<span class=\"tm11\"></span>smješ<span class=\"tm11\">t</span>a<span class=\"tm11\">j</span><span class=\"tm11\">u</span>,<span class=\"tm11\"></span><span class=\"tm11\">b</span>aš <span class=\"tm11\">k</span>ao<span class=\"tm11\"></span>i <span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>e<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>je<span class=\"tm11\"></span><span class=\"tm11\">s</span>e<span class=\"tm11\"></span><span class=\"tm11\">p</span>ri<span class=\"tm11\">j</span>avlj<span class=\"tm11\">u</span>ju<span class=\"tm11\"> z</span>a<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>gram, <span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>l<span class=\"tm11\">a</span><span class=\"tm11\">z</span>e <span class=\"tm11\">t</span>emelj<span class=\"tm11\">i</span><span class=\"tm11\">t</span>u <span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>v<span class=\"tm11\">j</span>er<span class=\"tm11\">u</span>.</p><p class=\"Normal tm17\"> </p><p class=\"Normal tm18\">O<span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>el<span class=\"tm11\">j</span><span class=\"tm11\">-do</span>ma<span class=\"tm11\">ć</span><span class=\"tm11\">i</span>n<span class=\"tm11\"></span>je<span class=\"tm11\"></span>au <span class=\"tm11\">p</span>a<span class=\"tm11\">i</span>r<span class=\"tm11\"> d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">c</span>i<span class=\"tm11\"> d</span><span class=\"tm11\">už</span><span class=\"tm11\">n</span>a<span class=\"tm11\"> o</span>si<span class=\"tm11\">g</span><span class=\"tm11\">u</span>ra<span class=\"tm11\">t</span>i<span class=\"tm11\"></span>smješ<span class=\"tm11\">t</span>aj<span class=\"tm11\"> (</span><span class=\"tm11\">po</span>s<span class=\"tm11\">e</span><span class=\"tm11\">b</span><span class=\"tm11\">n</span>u<span class=\"tm11\"></span>s<span class=\"tm11\">o</span><span class=\"tm11\">bu</span>)<span class=\"tm11\"></span>i<span class=\"tm11\"> p</span><span class=\"tm11\">r</span>e<span class=\"tm11\">h</span>r<span class=\"tm11\">a</span><span class=\"tm11\">nu</span>,<span class=\"tm11\"></span>š<span class=\"tm11\">k</span><span class=\"tm11\">o</span>lu <span class=\"tm11\">po </span>i<span class=\"tm11\">zbo</span><span class=\"tm11\">r</span>u <span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>e<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">i</span><span class=\"tm11\">zno</span><span class=\"tm11\">s</span>u <span class=\"tm11\">o</span>d<span class=\"tm11\"></span><span class=\"tm11\">$</span><span class=\"tm11\">500</span>,<span class=\"tm11\"> p</span><span class=\"tm11\">o</span>vra<span class=\"tm11\">t</span><span class=\"tm11\">n</span>u<span class=\"tm11\"></span>av<span class=\"tm11\">i</span><span class=\"tm11\">o</span><span class=\"tm11\">n</span>s<span class=\"tm11\">k</span>u<span class=\"tm11\"></span><span class=\"tm11\">k</span>ar<span class=\"tm11\">t</span>u <span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">t</span>j<span class=\"tm11\">e</span><span class=\"tm11\">dn</span>i<span class=\"tm11\"> d</span><span class=\"tm11\">ž</span>e<span class=\"tm11\">p</span><span class=\"tm11\">a</span>rac u<span class=\"tm11\"> minimalnom </span><span class=\"tm11\">i</span><span class=\"tm11\">zno</span><span class=\"tm11\">s</span>u<span class=\"tm11\"></span><span class=\"tm11\">$</span><span class=\"tm11\">195</span><span class=\"tm11\">,</span><span class=\"tm11\">7</span>5<span class=\"tm11\"></span>ili <sup><span class=\"tm11\">$250</span>.<span class=\"tm11\"></span><span class=\"tm11\">D</span><span class=\"tm11\">u</span><span class=\"tm11\">ž</span><span class=\"tm11\">n</span><span class=\"tm11\">o</span>st<span class=\"tm11\"></span><span class=\"tm11\">a</span>u <span class=\"tm11\">p</span>air<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">j</span>ev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>e<span class=\"tm11\"></span>je<span class=\"tm11\"></span><span class=\"tm11\">č</span><span class=\"tm11\">u</span>v<span class=\"tm11\">a</span><span class=\"tm11\">n</span>je<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">c</span>e<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>elji<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>j<span class=\"tm11\">o</span>m<span class=\"tm11\"></span><span class=\"tm11\">ž</span>ivi<span class=\"tm11\"></span><span class=\"tm11\">d</span>o<span class=\"tm11\"></span><span class=\"tm11\">4</span>5<span class=\"tm11\"></span>sa<span class=\"tm11\">t</span>i<span class=\"tm11\"> t</span><span class=\"tm11\">j</span>e<span class=\"tm11\">d</span><span class=\"tm11\">no</span>.<span class=\"tm11\"></span><span class=\"tm11\">Mo</span>g<span class=\"tm11\">u</span><span class=\"tm11\">ćn</span><span class=\"tm11\">o</span>st </sup><span class=\"tm11\">bo</span>rav<span class=\"tm11\">k</span>a<span class=\"tm11\"></span><span class=\"tm11\">a</span>u<span class=\"tm11\"></span><span class=\"tm11\">p</span>air<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">A</span>meri<span class=\"tm11\">c</span>i<span class=\"tm11\"></span>je<span class=\"tm11\"></span><span class=\"tm11\">1</span>2<span class=\"tm11\"></span>mjese<span class=\"tm11\">c</span>i<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">mo</span>g<span class=\"tm11\">u</span><span class=\"tm11\">ć</span><span class=\"tm11\">no</span>š<span class=\"tm11\">ć</span>u <span class=\"tm11\">p</span>r<span class=\"tm11\">o</span><span class=\"tm11\">d</span><span class=\"tm11\">u</span><span class=\"tm11\">ž</span>e<span class=\"tm11\">n</span>ja<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\"></span><span class=\"tm11\">6</span>,<span class=\"tm11\"></span>9<span class=\"tm11\"></span>ili<span class=\"tm11\"></span>j<span class=\"tm11\">o</span>š<span class=\"tm11\"></span><span class=\"tm11\">1</span>2<span class=\"tm11\"></span>mjese<span class=\"tm11\">c</span>i.</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm17\">U<span class=\"tm11\">k</span><span class=\"tm11\">o</span>li<span class=\"tm11\">k</span>o<span class=\"tm11\"></span><span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>a<span class=\"tm11\"></span>ima<span class=\"tm11\"></span><span class=\"tm11\">b</span>ilo<span class=\"tm11\"></span><span class=\"tm11\">k</span>a<span class=\"tm11\">k</span>vih<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">ob</span>lema,<span class=\"tm11\"></span><span class=\"tm11\">o</span>s<span class=\"tm11\">j</span>e<span class=\"tm11\">ć</span>a<span class=\"tm11\"></span>se<span class=\"tm11\"></span><span class=\"tm11\">u</span>samlje<span class=\"tm11\">n</span>o<span class=\"tm11\"></span>ili<span class=\"tm11\"></span><span class=\"tm11\">j</span><span class=\"tm11\">o</span>j<span class=\"tm11\"></span><span class=\"tm11\">n</span><span class=\"tm11\">e</span><span class=\"tm11\">d</span><span class=\"tm11\">o</span>s<span class=\"tm11\">t</span>aje<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">o</span>m,<span class=\"tm11\"></span><span class=\"tm11\">u</span>vijek m<span class=\"tm11\">o</span><span class=\"tm11\">ž</span>e ra<span class=\"tm11\">z</span>g<span class=\"tm11\">o</span>var<span class=\"tm11\">a</span><span class=\"tm11\">t</span>i<span class=\"tm11\"></span>sa<span class=\"tm11\"></span>sv<span class=\"tm11\">o</span>j<span class=\"tm11\">o</span>m<span class=\"tm11\"></span>s<span class=\"tm11\">a</span>vje<span class=\"tm11\">tn</span>i<span class=\"tm11\">c</span><span class=\"tm11\">o</span>m.<span class=\"tm11\"></span>Savj<span class=\"tm11\">e</span><span class=\"tm11\">tn</span>i<span class=\"tm11\">c</span>a<span class=\"tm11\"> p</span><span class=\"tm11\">o</span>sje<span class=\"tm11\">ć</span><span class=\"tm11\">u</span>je<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">v</span><span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>u<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">n</span>je<span class=\"tm11\">n</span><span class=\"tm11\">o</span>m<span class=\"tm11\"></span><span class=\"tm11\">no</span>v<span class=\"tm11\">o</span>m<span class=\"tm11\"> do</span>m<span class=\"tm11\">u</span>, <span class=\"tm11\">b</span>r<span class=\"tm11\">i</span><span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">d</span>a <span class=\"tm11\">ob</span>i<span class=\"tm11\">t</span>elj<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">j</span>ev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>a<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>ro <span class=\"tm11\">f</span><span class=\"tm11\">un</span><span class=\"tm11\">kc</span>i<span class=\"tm11\">on</span>ira<span class=\"tm11\">j</span>u<span class=\"tm11\"></span>i<span class=\"tm11\"></span>is<span class=\"tm11\">p</span><span class=\"tm11\">un</span>java<span class=\"tm11\">j</span>u<span class=\"tm11\"></span>sv<span class=\"tm11\">o</span>je<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>ve<span class=\"tm11\">z</span>e,<span class=\"tm11\"></span><span class=\"tm11\">o</span>rg<span class=\"tm11\">a</span><span class=\"tm11\">n</span>i<span class=\"tm11\">z</span>i<span class=\"tm11\">r</span>a<span class=\"tm11\"></span><span class=\"tm11\">d</span>r<span class=\"tm11\">u</span><span class=\"tm11\">ž</span>e<span class=\"tm11\">n</span>ja<span class=\"tm11\"></span>sa<span class=\"tm11\"></span><span class=\"tm11\">o</span>s<span class=\"tm11\">t</span>alim<span class=\"tm11\"></span><span class=\"tm11\">a</span>u <span class=\"tm11\">p</span>air<span class=\"tm11\"></span><span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>ama<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">po</span>m<span class=\"tm11\">a</span><span class=\"tm11\">ž</span>e<span class=\"tm11\"></span>im<span class=\"tm11\"></span><span class=\"tm11\">od</span><span class=\"tm11\">a</span><span class=\"tm11\">b</span>ra<span class=\"tm11\">t</span>i<span class=\"tm11\"></span>š<span class=\"tm11\">k</span><span class=\"tm11\">o</span>lu<span class=\"tm11\"></span>ili<span class=\"tm11\"></span><span class=\"tm11\">t</span>e<span class=\"tm11\">č</span>aj<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>ji<span class=\"tm11\"></span><span class=\"tm11\">ž</span>ele<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span><span class=\"tm11\">h</span>ađa<span class=\"tm11\">t</span>i.<span class=\"tm11\"></span>Osim<span class=\"tm11\"></span>savje<span class=\"tm11\">tn</span>i<span class=\"tm11\">c</span>e,<span class=\"tm11\"></span>au<span class=\"tm11\"></span><span class=\"tm11\">p</span>a<span class=\"tm11\">i</span>r imaju <span class=\"tm11\">p</span>ris<span class=\"tm11\">t</span><span class=\"tm11\">u</span>p <span class=\"tm11\">b</span>r<span class=\"tm11\">o</span><span class=\"tm11\">j</span>u <span class=\"tm11\">z</span>a<span class=\"tm11\"></span><u><span class=\"tm11\">h</span>i<span class=\"tm11\">t</span><span class=\"tm11\">n</span>e<span class=\"tm11\"></span>sl<span class=\"tm11\">u</span><span class=\"tm11\">č</span>a<span class=\"tm11\">j</span>eve</u><span class=\"tm11\"></span><span class=\"tm11\">2</span>4<span class=\"tm11\"></span>s<span class=\"tm11\">a</span><span class=\"tm11\">t</span>a<span class=\"tm11\"></span><span class=\"tm11\">dn</span><span class=\"tm11\">e</span>v<span class=\"tm11\">no </span>u glav<span class=\"tm11\">n</span><span class=\"tm11\">o</span>m<span class=\"tm11\"></span><span class=\"tm11\">u</span>re<span class=\"tm11\">d</span>u u S<span class=\"tm11\">t</span>am<span class=\"tm11\">f</span><span class=\"tm11\">o</span>r<span class=\"tm11\">d</span><span class=\"tm11\">u</span>.</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm17\">S<span class=\"tm11\">p</span>e<span class=\"tm11\">c</span>i<span class=\"tm11\">f</span>i<span class=\"tm11\">č</span><span class=\"tm11\">no</span><span class=\"tm11\">s</span>t<span class=\"tm11\"> o</span>v<span class=\"tm11\">o</span>g <span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>g<span class=\"tm11\">r</span>ama<span class=\"tm11\"></span>jest<span class=\"tm11\"></span>i <span class=\"tm11\">t</span>r<span class=\"tm11\">o</span><span class=\"tm11\">d</span><span class=\"tm11\">n</span>ev<span class=\"tm11\">n</span>i <span class=\"tm19\">o</span><span class=\"tm19\">r</span><span class=\"tm20\">ije</span><span class=\"tm19\">nt</span><span class=\"tm20\">a</span><span class=\"tm19\">c</span><span class=\"tm20\">ijs</span><span class=\"tm19\">k</span><span class=\"tm20\">i </span><span class=\"tm19\">p</span><span class=\"tm20\">r</span><span class=\"tm19\">o</span><span class=\"tm20\">gram </span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>ji se<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">d</span>r<span class=\"tm11\">ž</span>ava<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">d</span>mah<span class=\"tm11\"></span><span class=\"tm11\">po </span><span class=\"tm11\">do</span>las<span class=\"tm11\">k</span>u<span class=\"tm11\"></span>u<span class=\"tm11\"></span>A<span class=\"tm11\">m</span>eri<span class=\"tm11\">k</span><span class=\"tm11\">u*</span>.<span class=\"tm11\"></span><span class=\"tm11\">D</span>je<span class=\"tm11\">v</span><span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>e<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>je<span class=\"tm11\"></span>su<span class=\"tm11\"></span><span class=\"tm11\">do</span><span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">t</span><span class=\"tm11\">o</span>vale is<span class=\"tm11\">to</span>g<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">a</span><span class=\"tm11\">n</span>a<span class=\"tm11\"></span><span class=\"tm11\">p</span>ri<span class=\"tm11\">s</span><span class=\"tm11\">u</span>s<span class=\"tm11\">t</span>v<span class=\"tm11\">u</span><span class=\"tm11\">j</span>u<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">r</span>e<span class=\"tm11\">d</span>ava<span class=\"tm11\">n</span>ji<span class=\"tm11\">m</span>a<span class=\"tm11\"></span><span class=\"tm11\">n</span>a<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>jima<span class=\"tm11\"></span>se sl<span class=\"tm11\">u</span>ša<span class=\"tm11\"></span>o<span class=\"tm11\"></span>s<span class=\"tm11\">p</span>e<span class=\"tm11\">c</span>i<span class=\"tm11\">f</span>i<span class=\"tm11\">č</span><span class=\"tm11\">no</span><span class=\"tm11\">s</span><span class=\"tm11\">t</span>ima<span class=\"tm11\"> ž</span><span class=\"tm11\">i</span>v<span class=\"tm11\">ot</span>a<span class=\"tm11\"></span>u<span class=\"tm11\"></span>SA<span class=\"tm11\">D</span><span class=\"tm11\">-u</span>, <span class=\"tm11\">n</span>ji<span class=\"tm11\">h</span><span class=\"tm11\">o</span>vim<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">č</span>ajima,<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">u</span>l<span class=\"tm11\">t</span><span class=\"tm11\">u</span>ri, <span class=\"tm11\">n</span>avi<span class=\"tm11\">k</span>ama,<span class=\"tm11\"></span><span class=\"tm11\">n</span>a<span class=\"tm11\">č</span>i<span class=\"tm11\">n</span>u<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">d</span>g<span class=\"tm11\">o</span>ja<span class=\"tm11\"> d</span>je<span class=\"tm11\">c</span>e, <span class=\"tm11\">k</span><span class=\"tm11\">u</span>l<span class=\"tm11\">tu</span>r<span class=\"tm11\">o</span><span class=\"tm11\">l</span><span class=\"tm11\">o</span>š<span class=\"tm11\">k</span>im<span class=\"tm11\"></span>ra<span class=\"tm11\">z</span>li<span class=\"tm11\">k</span>ama.<span class=\"tm11\">.</span>.<span class=\"tm11\">T</span>a<span class=\"tm11\">k</span><span class=\"tm11\">o</span>đer<span class=\"tm11\"></span>se<span class=\"tm11\"></span>j<span class=\"tm11\">o</span>š<span class=\"tm11\"></span>j<span class=\"tm11\">e</span><span class=\"tm11\">dn</span><span class=\"tm11\">o</span>m g<span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>ri<span class=\"tm11\"></span>o <span class=\"tm11\">p</span>ravima<span class=\"tm11\"></span>i <span class=\"tm11\">d</span><span class=\"tm11\">u</span><span class=\"tm11\">žn</span><span class=\"tm11\">o</span>s<span class=\"tm11\">t</span>ima<span class=\"tm11\"></span>au<span class=\"tm11\"> p</span>air i<span class=\"tm11\"></span><span class=\"tm11\">ob</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>elji <span class=\"tm11\">t</span>e <span class=\"tm11\">o</span>s<span class=\"tm11\">no</span>vama <span class=\"tm11\">p</span>rve<span class=\"tm11\"> po</span>m<span class=\"tm11\">o</span><span class=\"tm11\">ć</span>i u<span class=\"tm11\"></span>s<span class=\"tm11\">u</span>r<span class=\"tm11\">a</span><span class=\"tm11\">dn</span>ji s<span class=\"tm11\"></span><span class=\"tm11\">C</span>rve<span class=\"tm11\">n</span>im<span class=\"tm11\"></span><span class=\"tm11\">k</span>r<span class=\"tm11\">i</span><span class=\"tm11\">ž</span>em.<span class=\"tm11\"></span>Gr<span class=\"tm11\">u</span><span class=\"tm11\">p</span>e<span class=\"tm11\"></span><span class=\"tm11\">s</span>u<span class=\"tm11\"></span>sas<span class=\"tm11\">t</span>avl<span class=\"tm11\">je</span><span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">o</span>d<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">j</span>ev<span class=\"tm11\">o</span>ja<span class=\"tm11\">k</span>a<span class=\"tm11\"></span>iz<span class=\"tm11\"></span><span class=\"tm11\">c</span>ijel<span class=\"tm11\">o</span>g svije<span class=\"tm11\">t</span>a<span class=\"tm11\"></span><span class=\"tm11\">(</span><span class=\"tm11\">o</span>d<span class=\"tm11\"></span><span class=\"tm11\">1</span><span class=\"tm11\">0</span>0<span class=\"tm11\"></span><span class=\"tm11\">d</span>o <span class=\"tm11\">25</span><span class=\"tm11\">0</span><span class=\"tm11\">!</span><span class=\"tm11\">)</span>,<span class=\"tm11\"></span>a<span class=\"tm11\"></span><span class=\"tm11\">o</span>rije<span class=\"tm11\">n</span><span class=\"tm11\">t</span>a<span class=\"tm11\">c</span>ija<span class=\"tm11\"></span>se<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">d</span><span class=\"tm11\">r</span><span class=\"tm11\">ž</span>ava<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">h</span><span class=\"tm11\">o</span><span class=\"tm11\">t</span>e<span class=\"tm11\">l</span>u<span class=\"tm11\"></span><span class=\"tm11\">t</span><span class=\"tm11\">h</span>e<span class=\"tm11\"></span><span class=\"tm11\">D</span><span class=\"tm11\">o</span><span class=\"tm11\">u</span><span class=\"tm11\">b</span>le<span class=\"tm11\"></span><span class=\"tm11\">T</span>r<span class=\"tm11\">e</span>e<span class=\"tm11\"></span><span class=\"tm11\">H</span>il<span class=\"tm11\">to</span>n<span class=\"tm11\"></span><span class=\"tm11\">H</span><span class=\"tm11\">o</span><span class=\"tm11\">t</span>el<span class=\"tm11\"></span><span class=\"tm11\">i</span>n <span class=\"tm11\">T</span>arr<span class=\"tm11\">y</span><span class=\"tm11\">to</span><span class=\"tm11\">w</span><span class=\"tm11\">n</span>,<span class=\"tm11\"></span><span class=\"tm11\">N</span>ew<span class=\"tm11\"></span><span class=\"tm11\">Yo</span>rk<span class=\"tm11\"></span><span class=\"tm11\">(</span><span class=\"tm11\">u</span>z<span class=\"tm11\"></span><span class=\"tm11\">H</span><span class=\"tm11\">ud</span>s<span class=\"tm11\">o</span>n<span class=\"tm11\"></span><span class=\"tm11\">R</span>iver<span class=\"tm11\">)</span>.<span class=\"tm11\"></span><span class=\"tm11\">D</span>jev<span class=\"tm11\">o</span><span class=\"tm11\">j</span><span class=\"tm11\">k</span>e<span class=\"tm11\"></span>su<span class=\"tm11\"></span>smješ<span class=\"tm11\">t</span>e<span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">p</span>o<span class=\"tm11\"></span><span class=\"tm11\">t</span>ri<span class=\"tm11\"></span>u<span class=\"tm11\"></span>s<span class=\"tm11\">ob</span>i,<span class=\"tm11\"></span><span class=\"tm11\">p</span>rema<span class=\"tm11\"></span>mje<span class=\"tm11\">s</span><span class=\"tm11\">t</span>u<span class=\"tm11\"></span>u</p><p class=\"Normal tm21\"><span class=\"tm11\">k</span><span class=\"tm11\">o</span>jem<span class=\"tm11\"></span><span class=\"tm11\">ć</span>e<span class=\"tm11\"> ž</span>iv<span class=\"tm11\">j</span>e<span class=\"tm11\">t</span>i<span class=\"tm11\"> k</span>a<span class=\"tm11\">k</span>o<span class=\"tm11\"></span><span class=\"tm11\">b</span>i<span class=\"tm11\"></span><span class=\"tm11\">s</span>e<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>v<span class=\"tm11\">o</span>rila<span class=\"tm11\"></span><span class=\"tm11\">p</span>rva<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span><span class=\"tm11\">z</span><span class=\"tm11\">n</span>a<span class=\"tm11\">n</span>s<span class=\"tm11\">t</span><span class=\"tm11\">v</span>a.</p><p class=\"ListParagraph tm22\"> </p><p class=\"Normal tm23\"><strong><span class=\"tm15\"></span></strong>              <strong><span class=\"tm15\">UVJETI SUDJELOVANJA:</span></strong></p><p class=\"Normal tm24\"><strong><span class=\"tm25\">VJ</span><span class=\"tm26\">E</span><span class=\"tm25\"></span><span class=\"tm26\">T</span><span class=\"tm25\"></span><span class=\"tm26\">I</span><span class=\"tm25\"></span><span class=\"tm26\">Z</span><span class=\"tm25\"></span><span class=\"tm26\">A</span><span class=\"tm25\"></span><span class=\"tm26\">P</span><span class=\"tm25\"></span><span class=\"tm26\">R</span><span class=\"tm25\"></span><span class=\"tm26\">I</span><span class=\"tm25\"></span><span class=\"tm25\">J</span><span class=\"tm26\">A</span><span class=\"tm25\"></span><span class=\"tm26\">V</span><span class=\"tm25\"></span><span class=\"tm26\">U</span></strong></p><p class=\"Normal tm27\">•                                         <span class=\"tm11\">dob</span>:<span class=\"tm11\"></span><span class=\"tm11\">1</span>8<span class=\"tm11\"></span>–<span class=\"tm11\"></span><span class=\"tm11\">2</span>6<span class=\"tm11\"></span><span class=\"tm11\">g</span><span class=\"tm11\">od</span><span class=\"tm11\">i</span><span class=\"tm11\">n</span>a</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm28\">•                                         v<span class=\"tm11\">oz</span>a<span class=\"tm11\">čk</span>a<span class=\"tm11\"> d</span><span class=\"tm11\">o</span><span class=\"tm11\">z</span>v<span class=\"tm11\">o</span>la</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm28\">•                                         <span class=\"tm11\">z</span>avrše<span class=\"tm11\">n</span>a<span class=\"tm11\"></span>sre<span class=\"tm11\">d</span><span class=\"tm11\">n</span>ja<span class=\"tm11\"></span>š<span class=\"tm11\">k</span><span class=\"tm11\">o</span>la</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm28\">•                                         <span class=\"tm11\">o</span>s<span class=\"tm11\">no</span>v<span class=\"tm11\">n</span>o<span class=\"tm11\"> z</span><span class=\"tm11\">n</span>a<span class=\"tm11\">n</span><span class=\"tm11\">j</span>e<span class=\"tm11\"></span><span class=\"tm11\">e</span><span class=\"tm11\">n</span>gles<span class=\"tm11\">k</span><span class=\"tm11\">o</span>g<span class=\"tm11\"></span>je<span class=\"tm11\">z</span>i<span class=\"tm11\">k</span>a</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm29\">• <span class=\"tm11\">20</span>0<span class=\"tm11\"></span>s<span class=\"tm11\">a</span><span class=\"tm11\">t</span>i<span class=\"tm11\"></span>is<span class=\"tm11\">k</span><span class=\"tm11\">u</span>s<span class=\"tm11\">t</span>va<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">č</span><span class=\"tm11\">u</span>v<span class=\"tm11\">a</span><span class=\"tm11\">n</span>ju<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">c</span>e<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span>slje<span class=\"tm11\">d</span><span class=\"tm11\">n</span>je<span class=\"tm11\"></span><span class=\"tm11\">t</span>ri<span class=\"tm11\"></span>g<span class=\"tm11\">od</span>i<span class=\"tm11\">n</span>e:<span class=\"tm11\"></span><span class=\"tm11\">č</span><span class=\"tm11\">u</span>v<span class=\"tm11\">a</span><span class=\"tm11\">n</span>je<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">c</span>e<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>d<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>elji, s<span class=\"tm11\">u</span>sje<span class=\"tm11\">d</span>a, <span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>eljs<span class=\"tm11\">k</span>ih<span class=\"tm11\"> p</span>ri<span class=\"tm11\">j</span>a<span class=\"tm11\">t</span>elja, <span class=\"tm11\">r</span><span class=\"tm11\">o</span>đa<span class=\"tm11\">k</span>a, a<span class=\"tm11\">n</span>ga<span class=\"tm11\">ž</span>m<span class=\"tm11\">a</span>n<span class=\"tm11\"></span>u<span class=\"tm11\"></span>l<span class=\"tm11\">o</span><span class=\"tm11\">k</span>al<span class=\"tm11\">n</span><span class=\"tm11\">o</span>j š<span class=\"tm11\">k</span><span class=\"tm11\">o</span>li, vr<span class=\"tm11\">t</span>i<span class=\"tm11\">ć</span><span class=\"tm11\">u</span>, <span class=\"tm11\">h</span><span class=\"tm11\">u</span>ma<span class=\"tm11\">n</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>ar<span class=\"tm11\">n</span><span class=\"tm11\">i</span>m <span class=\"tm11\">u</span>s<span class=\"tm11\">t</span>a<span class=\"tm11\">n</span><span class=\"tm11\">o</span>vama,<span class=\"tm11\"></span><span class=\"tm11\">k</span>am<span class=\"tm11\">p</span><span class=\"tm11\">o</span>vi<span class=\"tm11\">m</span>a<span class=\"tm11\"></span>i<span class=\"tm11\"></span>sli<span class=\"tm11\">č</span><span class=\"tm11\">n</span>o<span class=\"tm11\"></span><span class=\"tm11\">(z</span>a<span class=\"tm11\"></span><span class=\"tm11\">b</span>ri<span class=\"tm11\">g</span>u<span class=\"tm11\"></span>o<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">c</span>i<span class=\"tm11\"></span>mlađ<span class=\"tm11\">o</span>j<span class=\"tm11\"></span><span class=\"tm11\">o</span>d<span class=\"tm11\"></span>2<span class=\"tm11\"></span><span class=\"tm11\">g</span><span class=\"tm11\">od</span><span class=\"tm11\">i</span><span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\">k</span><span class=\"tm11\">on</span>s<span class=\"tm11\">k</span>i<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">e</span><span class=\"tm11\">du</span>vj<span class=\"tm11\">e</span>t<span class=\"tm11\"></span>je</p><p class=\"Normal tm30\"><span class=\"tm11\">20</span>0<span class=\"tm11\"></span>s<span class=\"tm11\">a</span><span class=\"tm11\">t</span>i<span class=\"tm11\"></span>is<span class=\"tm11\">k</span><span class=\"tm11\">u</span><span class=\"tm11\">s</span><span class=\"tm11\">t</span>va<span class=\"tm11\"></span>sa<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">c</span><span class=\"tm11\">o</span>m<span class=\"tm11\"> t</span>e<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\"></span>i<span class=\"tm11\"></span>mi<span class=\"tm11\">n</span>i<span class=\"tm11\">m</span>al<span class=\"tm11\">n</span>a<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">o</span>b<span class=\"tm11\"></span><span class=\"tm11\">1</span>9<span class=\"tm11\"></span>g<span class=\"tm11\">o</span><span class=\"tm11\">d</span>i<span class=\"tm11\">n</span>a)</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm31\">•                                         <span class=\"tm11\">pot</span>v<span class=\"tm11\">r</span><span class=\"tm11\">d</span>a<span class=\"tm11\"></span>o<span class=\"tm11\"></span><span class=\"tm11\">n</span>e<span class=\"tm11\">k</span><span class=\"tm11\">a</span><span class=\"tm11\">žn</span>jav<span class=\"tm11\">a</span><span class=\"tm11\">n</span>ju</p><p class=\"Normal tm32\">•                                         lije<span class=\"tm11\">č</span><span class=\"tm11\">n</span>i<span class=\"tm11\">čk</span>a<span class=\"tm11\"> p</span><span class=\"tm11\">o</span><span class=\"tm11\">t</span>vr<span class=\"tm11\">d</span>a</p><p class=\"Normal tm32\">•                                         m<span class=\"tm11\">o</span>g<span class=\"tm11\">u</span><span class=\"tm11\">ć</span><span class=\"tm11\">no</span><span class=\"tm11\">s</span>t<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">s</span><span class=\"tm11\">t</span>a<span class=\"tm11\">n</span><span class=\"tm11\">k</span>a<span class=\"tm11\"></span>u<span class=\"tm11\"></span>S<span class=\"tm11\">A</span><span class=\"tm11\">D-</span>u <span class=\"tm11\">1</span>2<span class=\"tm11\"></span>mjese<span class=\"tm11\">c</span>i</p><p class=\"Normal tm33\"> </p><p class=\"Normal tm23\"><strong><span class=\"tm15\">  UVJETI SUDJELOVANJA:</span></strong></p><p class=\"Normal tm33\"> </p><p class=\"Normal tm24\"><strong><span class=\"tm26\">P</span><span class=\"tm25\"></span><span class=\"tm26\">R</span><span class=\"tm25\"></span><span class=\"tm26\">I</span><span class=\"tm25\"></span><span class=\"tm25\">J</span><span class=\"tm26\">A</span><span class=\"tm25\"></span><span class=\"tm25\">V</span><span class=\"tm26\">A</span><span class=\"tm25\"></span></strong></p><p class=\"Normal tm34\">•                            <span class=\"tm11\">p</span>r<span class=\"tm11\">o</span><span class=\"tm11\">č</span>i<span class=\"tm11\">t</span>a<span class=\"tm11\">j</span><span class=\"tm11\">t</span>e <span class=\"tm11\"></span><span class=\"tm11\">b</span><span class=\"tm11\">r</span><span class=\"tm11\">o</span>š<span class=\"tm11\">u</span><span class=\"tm11\">r</span>u <span class=\"tm11\"></span>–<span class=\"tm11\">k</span><span class=\"tm11\">ont</span>a<span class=\"tm11\">k</span><span class=\"tm11\">t</span>ira<span class=\"tm11\">j</span><span class=\"tm11\">t</span>e <span class=\"tm11\"></span>sv<span class=\"tm11\">o</span>g <span class=\"tm11\"></span>l<span class=\"tm11\">o</span><span class=\"tm11\">k</span>al<span class=\"tm11\">n</span><span class=\"tm11\">o</span>g <span class=\"tm11\"></span><span class=\"tm11\">p</span>re<span class=\"tm11\">d</span><span class=\"tm11\">s</span><span class=\"tm11\">t</span>av<span class=\"tm11\">n</span>i<span class=\"tm11\">k</span>a <span class=\"tm11\"></span>u <span class=\"tm11\"></span>sl<span class=\"tm11\">uč</span>aju <span class=\"tm11\"></span><span class=\"tm11\">b</span>ilo <span class=\"tm11\"></span><span class=\"tm11\">k</span>a<span class=\"tm11\">k</span>vih <span class=\"tm11\">n</span>ejas<span class=\"tm11\">no</span><span class=\"tm11\">ć</span><span class=\"tm11\">a</span>!</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm35\">•                            is<span class=\"tm11\">pun</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span>a<span class=\"tm11\">p</span>li<span class=\"tm11\">k</span>a<span class=\"tm11\">c</span>iju <span class=\"tm11\">n</span>a<span class=\"tm11\"></span><u><a href=\"http://www.aupairamerica.co.uk/\"><span class=\"tm11\">w</span><span class=\"tm11\">w</span><span class=\"tm11\">w</span>.a<span class=\"tm11\">up</span>airameri<span class=\"tm11\">c</span>a.<span class=\"tm11\">c</span><span class=\"tm11\">o</span>.<span class=\"tm11\">u</span>k</a></u> i<span class=\"tm11\"></span><span class=\"tm11\">p</span>ri<span class=\"tm11\">k</span><span class=\"tm11\">up</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">po</span><span class=\"tm11\">t</span>re<span class=\"tm11\">b</span><span class=\"tm11\">n</span>u <span class=\"tm11\">do</span><span class=\"tm11\">ku</span>me<span class=\"tm11\">nt</span>a<span class=\"tm11\">c</span>i<span class=\"tm11\">j</span>u</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm35\">•                            <span class=\"tm11\">do</span>g<span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>r<span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">i</span><span class=\"tm11\">n</span><span class=\"tm11\">t</span>ervju<span class=\"tm11\"></span><span class=\"tm11\">(</span>Al<span class=\"tm11\">i</span><span class=\"tm11\">d</span>a<span class=\"tm11\"></span><span class=\"tm11\">B</span><span class=\"tm11\">o</span>lari<span class=\"tm11\">ć</span>,<span class=\"tm11\"></span>+<span class=\"tm11\">3</span><span class=\"tm11\">8</span>5<span class=\"tm11\"></span>98223031<span class=\"tm11\">)</span>;<span class=\"tm11\"></span><u><a href=\"mailto:alida.bolaric@suncana.org\">ali<span class=\"tm11\">d</span>a.<span class=\"tm11\">bo</span>lari<span class=\"tm11\">c@</span>s<span class=\"tm11\">u</span><span class=\"tm11\">n</span><span class=\"tm11\">c</span>a<span class=\"tm11\">n</span>a.<span class=\"tm11\">o</span>rg</a></u></p><p class=\"Normal tm12\"> </p><p class=\"Normal tm36\">•                            a<span class=\"tm11\">k</span>o<span class=\"tm11\"></span>ima<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>m<span class=\"tm11\">o</span>g<span class=\"tm11\">u</span><span class=\"tm11\">c</span><span class=\"tm11\">no</span><span class=\"tm11\">s</span>t<span class=\"tm11\"></span>s<span class=\"tm11\">k</span>e<span class=\"tm11\">n</span>ira<span class=\"tm11\">n</span>ja,<span class=\"tm11\"></span>sami<span class=\"tm11\"></span>s<span class=\"tm11\">k</span>e<span class=\"tm11\">n</span>ira<span class=\"tm11\">j</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">do</span><span class=\"tm11\">k</span><span class=\"tm11\">u</span>me<span class=\"tm11\">n</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span>š<span class=\"tm11\">t</span>o<span class=\"tm11\"></span><span class=\"tm11\">ub</span><span class=\"tm11\">r</span><span class=\"tm11\">z</span><span class=\"tm11\">a</span>va<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">o</span><span class=\"tm11\">c</span>es<span class=\"tm11\"></span><span class=\"tm11\">p</span>rijave; <span class=\"tm11\">u</span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>li<span class=\"tm11\">k</span>o<span class=\"tm11\"></span><span class=\"tm11\">n</span>em<span class=\"tm11\">a</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">t</span>u<span class=\"tm11\"></span><span class=\"tm11\">m</span><span class=\"tm11\">o</span>g<span class=\"tm11\">uć</span><span class=\"tm11\">no</span>st<span class=\"tm11\"></span><span class=\"tm11\">n</span>a<span class=\"tm11\"></span>i<span class=\"tm11\">n</span><span class=\"tm11\">t</span>ervju<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">o</span><span class=\"tm11\">n</span>es<span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span>svu<span class=\"tm11\"></span><span class=\"tm11\">po</span><span class=\"tm11\">t</span>re<span class=\"tm11\">b</span><span class=\"tm11\">n</span>u<span class=\"tm11\"></span><span class=\"tm11\">do</span><span class=\"tm11\">k</span><span class=\"tm11\">u</span><span class=\"tm11\">m</span>e<span class=\"tm11\">nt</span>a<span class=\"tm11\">c</span>i<span class=\"tm11\">j</span>u<span class=\"tm11\"></span><span class=\"tm11\">p</span>a<span class=\"tm11\"></span><span class=\"tm11\">ć</span><span class=\"tm11\">e</span>mo mi<span class=\"tm11\"></span>s<span class=\"tm11\">k</span>e<span class=\"tm11\">n</span>ira<span class=\"tm11\">t</span>i<span class=\"tm11\"> z</span>a<span class=\"tm11\"></span>vas:</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm35\">•                            1<span class=\"tm11\"></span><span class=\"tm11\">f</span><span class=\"tm11\">o</span><span class=\"tm11\">to</span>gr<span class=\"tm11\">a</span><span class=\"tm11\">f</span>ija<span class=\"tm11\"></span><span class=\"tm11\">c</span>i<span class=\"tm11\">j</span>el<span class=\"tm11\">o</span>g<span class=\"tm11\"></span>li<span class=\"tm11\">c</span>a<span class=\"tm11\"></span><span class=\"tm11\">(</span><span class=\"tm11\">ob</span>ave<span class=\"tm11\">z</span><span class=\"tm11\">n</span>o<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">o</span>smj<span class=\"tm11\">e</span><span class=\"tm11\">ho</span>m,<span class=\"tm11\"> u</span>re<span class=\"tm11\">d</span><span class=\"tm11\">n</span>o<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span><span class=\"tm11\">č</span>ešlja<span class=\"tm11\">n</span><span class=\"tm11\">i</span><span class=\"tm11\">!</span>)</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm35\">•                            <span class=\"tm11\">n</span>ajma<span class=\"tm11\">n</span><span class=\"tm11\">j</span>e<span class=\"tm11\"></span>4<span class=\"tm11\"></span><span class=\"tm11\">f</span><span class=\"tm11\">o</span><span class=\"tm11\">to</span>gr<span class=\"tm11\">a</span><span class=\"tm11\">f</span>ije<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">d</span>je<span class=\"tm11\">c</span><span class=\"tm11\">o</span>m<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">p</span>o<span class=\"tm11\"> ž</span>elji<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">ob</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>elji</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm37\">•                                          <span class=\"tm11\">k</span><span class=\"tm11\">op</span>iju<span class=\"tm11\"></span>svj<span class=\"tm11\">e</span><span class=\"tm11\">do</span><span class=\"tm11\">d</span><span class=\"tm11\">ž</span><span class=\"tm11\">b</span>e<span class=\"tm11\"></span><span class=\"tm11\">i</span>z<span class=\"tm11\"></span>sr<span class=\"tm11\">e</span><span class=\"tm11\">d</span><span class=\"tm11\">n</span>je<span class=\"tm11\"></span>š<span class=\"tm11\">k</span><span class=\"tm11\">o</span>le<span class=\"tm11\"></span>ili<span class=\"tm11\"></span><span class=\"tm11\">f</span>a<span class=\"tm11\">k</span><span class=\"tm11\">u</span>l<span class=\"tm11\">t</span><span class=\"tm11\">e</span><span class=\"tm11\">t</span>a</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm35\">•                            <span class=\"tm11\">k</span><span class=\"tm11\">op</span>iju<span class=\"tm11\"></span>v<span class=\"tm11\">o</span><span class=\"tm11\">z</span>a<span class=\"tm11\">čk</span>e<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">oz</span>v<span class=\"tm11\">o</span>le</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm35\">•                            <span class=\"tm11\">k</span><span class=\"tm11\">op</span>iju<span class=\"tm11\"></span>v<span class=\"tm11\">a</span><span class=\"tm11\">ž</span>e<span class=\"tm11\">ć</span>e<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">to</span>v<span class=\"tm11\">n</span>i<span class=\"tm11\">c</span>e</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm35\">•                            <span class=\"tm11\">u</span>vjere<span class=\"tm11\">n</span>je<span class=\"tm11\"></span>o<span class=\"tm11\"></span><span class=\"tm11\">n</span>e<span class=\"tm11\">k</span><span class=\"tm11\">a</span><span class=\"tm11\">žn</span>jav<span class=\"tm11\">a</span><span class=\"tm11\">n</span><span class=\"tm11\">j</span>u</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm35\">•                            is<span class=\"tm11\">pun</span><span class=\"tm11\">j</span>en <span class=\"tm11\">fo</span>r<span class=\"tm11\">m</span><span class=\"tm11\">u</span>lar<span class=\"tm11\"></span>o<span class=\"tm11\"></span><span class=\"tm11\">zd</span>r<span class=\"tm11\">a</span>vs<span class=\"tm11\">t</span>ve<span class=\"tm11\">no</span>m<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>a<span class=\"tm11\">n</span>ju</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm38\">•                            i<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">op</span>ije<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span><span class=\"tm11\">t</span>vr<span class=\"tm11\">d</span>a<span class=\"tm11\"></span>svih <span class=\"tm11\">t</span>e<span class=\"tm11\">č</span><span class=\"tm11\">a</span>jeva,<span class=\"tm11\"></span>semi<span class=\"tm11\">n</span>ara,<span class=\"tm11\"></span>r<span class=\"tm11\">a</span><span class=\"tm11\">d</span>i<span class=\"tm11\">o</span><span class=\"tm11\">n</span>i<span class=\"tm11\">c</span>a,<span class=\"tm11\"></span>m<span class=\"tm11\">u</span><span class=\"tm11\">z</span>i<span class=\"tm11\">čk</span>ih<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">p</span>les<span class=\"tm11\">n</span><span class=\"tm11\">i</span>h<span class=\"tm11\"></span>š<span class=\"tm11\">k</span><span class=\"tm11\">o</span>la<span class=\"tm11\"> k</span><span class=\"tm11\">o</span>je<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>m<span class=\"tm11\">o</span><span class=\"tm11\">ž</span><span class=\"tm11\">d</span>a <span class=\"tm11\">poh</span>ađali</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm39\"><span class=\"tm11\">P</span>IS<span class=\"tm11\">M</span>O „<span class=\"tm11\">D</span>EAR F<span class=\"tm11\">A</span><span class=\"tm11\">M</span>IL<span class=\"tm11\">Y</span>“</p><p class=\"Normal tm17\"><span class=\"tm11\"></span><span class=\"tm11\">T</span>o<span class=\"tm11\"></span>je<span class=\"tm11\"></span><span class=\"tm11\">p</span>ismo<span class=\"tm11\"></span><span class=\"tm11\">u</span><span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">ć</span>e<span class=\"tm11\">n</span>o<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>elji<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>j<span class=\"tm11\">e</span>m<span class=\"tm11\"></span>g<span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>ri<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>o<span class=\"tm11\"></span>se<span class=\"tm11\">b</span>i:<span class=\"tm11\"></span><span class=\"tm11\">n</span>av<span class=\"tm11\">e</span><span class=\"tm11\">d</span>i<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>ra<span class=\"tm11\">z</span><span class=\"tm11\">l</span><span class=\"tm11\">o</span>ge<span class=\"tm11\"></span><span class=\"tm11\">z</span><span class=\"tm11\">bo</span>g<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>jih <span class=\"tm11\"></span>je<span class=\"tm11\"></span><span class=\"tm11\">s</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">od</span><span class=\"tm11\">l</span><span class=\"tm11\">u</span><span class=\"tm11\">č</span>ili s<span class=\"tm11\">ud</span>jel<span class=\"tm11\">o</span>v<span class=\"tm11\">a</span><span class=\"tm11\">t</span>i u<span class=\"tm11\"> p</span>r<span class=\"tm11\">o</span>gra<span class=\"tm11\">m</span><span class=\"tm11\">u</span>, <span class=\"tm11\">n</span>eš<span class=\"tm11\">t</span>o<span class=\"tm11\"></span>o<span class=\"tm11\"> d</span>je<span class=\"tm11\">c</span>i<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span><span class=\"tm11\">j</span>u<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">ču</span>vali,<span class=\"tm11\"></span>o<span class=\"tm11\"></span>a<span class=\"tm11\">k</span><span class=\"tm11\">t</span>i<span class=\"tm11\">v</span><span class=\"tm11\">no</span>s<span class=\"tm11\">t</span>ima <span class=\"tm11\">k</span><span class=\"tm11\">o</span>je v<span class=\"tm11\">o</span>li<span class=\"tm11\">t</span>e s<span class=\"tm11\"></span><span class=\"tm11\">n</span><span class=\"tm11\">j</span>ima <span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>v<span class=\"tm11\">o</span><span class=\"tm11\">d</span>i<span class=\"tm11\">t</span>i. O<span class=\"tm11\">p</span>iši<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>sv<span class=\"tm11\">o</span>ju<span class=\"tm11\"></span><span class=\"tm11\">ob</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>elj<span class=\"tm11\"></span>-<span class=\"tm11\"></span><span class=\"tm11\">č</span><span class=\"tm11\">i</span>me<span class=\"tm11\"></span>se<span class=\"tm11\"></span><span class=\"tm11\">b</span>ave<span class=\"tm11\"></span>r<span class=\"tm11\">o</span><span class=\"tm11\">d</span>i<span class=\"tm11\">t</span>e<span class=\"tm11\">l</span>ji,<span class=\"tm11\"></span><span class=\"tm11\">b</span>r<span class=\"tm11\">a</span><span class=\"tm11\">ć</span>a<span class=\"tm11\"></span>ili<span class=\"tm11\"></span>ses<span class=\"tm11\">t</span>re, <span class=\"tm11\"></span>sv<span class=\"tm11\">o</span>j<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">d</span><span class=\"tm11\">no</span>s<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">n</span>jima.<span class=\"tm11\"></span><span class=\"tm11\">N</span>ave<span class=\"tm11\">d</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span>sv<span class=\"tm11\">o</span>je <span class=\"tm11\">k</span>vali<span class=\"tm11\">t</span>e<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>i <span class=\"tm11\">d</span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>re<span class=\"tm11\"></span><span class=\"tm11\">o</span>s<span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">n</span><span class=\"tm11\">e</span>,<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>je<span class=\"tm11\"></span><span class=\"tm11\">ć</span>e<span class=\"tm11\"></span>vam<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span>m<span class=\"tm11\">o</span><span class=\"tm11\">ć</span>i<span class=\"tm11\"></span><span class=\"tm11\">d</span>a se<span class=\"tm11\"></span>la<span class=\"tm11\">k</span>še<span class=\"tm11\"></span><span class=\"tm11\">u</span><span class=\"tm11\">k</span>l<span class=\"tm11\">op</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">ob</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>elj<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">r</span><span class=\"tm11\">už</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"> d</span>je<span class=\"tm11\">c</span>i<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">a</span><span class=\"tm11\">žn</span><span class=\"tm11\">j</span>u<span class=\"tm11\"></span>i lj<span class=\"tm11\">ub</span>av.<span class=\"tm11\"></span><span class=\"tm11\">N</span>ave<span class=\"tm11\">d</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">š</span><span class=\"tm11\">t</span>o<span class=\"tm11\"></span>više<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">e</span><span class=\"tm11\">t</span>alja<span class=\"tm11\"></span>o<span class=\"tm11\"></span>s<span class=\"tm11\">e</span><span class=\"tm11\">b</span>i,<span class=\"tm11\"></span></p><p class=\"Normal tm17\"><span class=\"tm11\"> </span></p><p class=\"Normal tm17\"><span class=\"tm11\"> </span></p><p class=\"Normal tm17\"><span class=\"tm11\">k</span>a<span class=\"tm11\">k</span>o<span class=\"tm11\"></span><span class=\"tm11\">b</span>i<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>elj<span class=\"tm11\"></span><span class=\"tm11\">č</span>i<span class=\"tm11\">t</span>a<span class=\"tm11\">j</span><span class=\"tm11\">u</span><span class=\"tm11\">ć</span>i<span class=\"tm11\"></span>vaše<span class=\"tm11\"></span><span class=\"tm11\">p</span>ismo<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>e<span class=\"tm11\">k</span>la<span class=\"tm11\"></span><span class=\"tm11\">š</span><span class=\"tm11\">t</span>o<span class=\"tm11\"></span><span class=\"tm11\">bo</span>lji<span class=\"tm11\"></span><span class=\"tm11\">do</span>j<span class=\"tm11\">a</span>m<span class=\"tm11\"></span>o <span class=\"tm11\">vašo</span>j<span class=\"tm11\"></span><span class=\"tm11\">o</span>s<span class=\"tm11\">o</span><span class=\"tm11\">bno</span><span class=\"tm11\">s</span><span class=\"tm11\">t</span>i.<span class=\"tm11\"> P</span>is<span class=\"tm11\">m</span>o<span class=\"tm11\"></span><span class=\"tm11\">“</span><span class=\"tm11\">D</span>ear <span class=\"tm11\">f</span>amil<span class=\"tm11\">y</span>” je <span class=\"tm11\">n</span>ajva<span class=\"tm11\">ž</span><span class=\"tm11\">n</span>iji <span class=\"tm11\">d</span>io a<span class=\"tm11\">p</span>li<span class=\"tm11\">k</span>a<span class=\"tm11\">c</span>ije <span class=\"tm11\">z</span><span class=\"tm11\">a</span><span class=\"tm11\">t</span>o je <span class=\"tm11\">b</span>i<span class=\"tm11\">t</span><span class=\"tm11\">n</span>o <span class=\"tm11\">d</span>a<span class=\"tm11\"></span><span class=\"tm11\">m</span>u<span class=\"tm11\"> po</span>sv<span class=\"tm11\">e</span><span class=\"tm11\">t</span>i<span class=\"tm11\">t</span>e <span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">n</span>o <span class=\"tm11\">p</span>a<span class=\"tm11\">ž</span><span class=\"tm11\">n</span>je. <span class=\"tm11\">P</span>is<span class=\"tm11\">m</span>o<span class=\"tm11\"></span><span class=\"tm11\">ć</span>e<span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">n</span>a<span class=\"tm11\">p</span>i<span class=\"tm11\">s</span>a<span class=\"tm11\">t</span>i<span class=\"tm11\"></span><span class=\"tm11\">n</span>a<span class=\"tm11\"></span><span class=\"tm11\">w</span>eb s<span class=\"tm11\">t</span>r<span class=\"tm11\">a</span><span class=\"tm11\">n</span>i<span class=\"tm11\">c</span>i<span class=\"tm11\"> n</span>a<span class=\"tm11\"> k</span><span class=\"tm11\">o</span><span class=\"tm11\">j</span><span class=\"tm11\">o</span>j<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>is<span class=\"tm11\">p</span><span class=\"tm11\">un</span>ili<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">a</span><span class=\"tm11\">p</span>li<span class=\"tm11\">k</span>a<span class=\"tm11\">c</span>ij<span class=\"tm11\">u</span>.</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm40\">FO<span class=\"tm11\">T</span>OG<span class=\"tm11\">R</span>AFIJE</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm17\">F<span class=\"tm11\">oto</span>gr<span class=\"tm11\">a</span><span class=\"tm11\">f</span>ije <span class=\"tm11\">b</span>i <span class=\"tm11\">t</span>r<span class=\"tm11\">e</span><span class=\"tm11\">b</span>ale <span class=\"tm11\">p</span>ri<span class=\"tm11\">k</span>a<span class=\"tm11\">z</span>iva<span class=\"tm11\">t</span>i <span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>u<span class=\"tm11\"></span>s <span class=\"tm11\">d</span>j<span class=\"tm11\">e</span><span class=\"tm11\">c</span><span class=\"tm11\">o</span>m <span class=\"tm11\">k</span><span class=\"tm11\">o</span>ju<span class=\"tm11\"></span>je <span class=\"tm11\">č</span><span class=\"tm11\">u</span>vala, <span class=\"tm11\">č</span>l<span class=\"tm11\">a</span><span class=\"tm11\">no</span>vima <span class=\"tm11\">ob</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>elji, <span class=\"tm11\">k</span><span class=\"tm11\">u</span><span class=\"tm11\">ć</span><span class=\"tm11\">n</span>im lj<span class=\"tm11\">ub</span>im<span class=\"tm11\">c</span>ima<span class=\"tm11\"></span>a<span class=\"tm11\">k</span>o<span class=\"tm11\"></span>ih<span class=\"tm11\"></span>ima<span class=\"tm11\">t</span>e.<span class=\"tm11\"></span><span class=\"tm11\">Po</span><span class=\"tm11\">k</span>raj<span class=\"tm11\"></span>sva<span class=\"tm11\">k</span>e<span class=\"tm11\"></span><span class=\"tm11\">foto</span>gra<span class=\"tm11\">f</span>ije<span class=\"tm11\"></span><span class=\"tm11\">pot</span><span class=\"tm11\">r</span>e<span class=\"tm11\">b</span><span class=\"tm11\">n</span>o<span class=\"tm11\"></span>je<span class=\"tm11\"></span><span class=\"tm11\">ob</span>ja<span class=\"tm11\">s</span><span class=\"tm11\">n</span>i<span class=\"tm11\">t</span>i <span class=\"tm11\">t</span><span class=\"tm11\">k</span>o<span class=\"tm11\"></span>je<span class=\"tm11\"></span><span class=\"tm11\">n</span>a<span class=\"tm11\"></span><span class=\"tm11\">n</span>j<span class=\"tm11\">o</span>j<span class=\"tm11\"></span>i<span class=\"tm11\"></span>g<span class=\"tm11\">d</span>je<span class=\"tm11\"></span>je s<span class=\"tm11\">n</span>imlje<span class=\"tm11\">n</span>a.</p><p class=\"Normal tm33\"> </p><p class=\"Normal tm17\"><span class=\"tm11\">N</span>a<span class=\"tm11\">k</span><span class=\"tm11\">o</span>n<span class=\"tm11\"></span>š<span class=\"tm11\">t</span>o<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>se<span class=\"tm11\"></span><span class=\"tm11\">r</span>egis<span class=\"tm11\">t</span>rirali<span class=\"tm11\"></span>i<span class=\"tm11\"></span>is<span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">n</span>ili <span class=\"tm11\">fo</span>r<span class=\"tm11\">m</span><span class=\"tm11\">u</span>la<span class=\"tm11\">r</span>e,<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">ont</span>a<span class=\"tm11\">k</span><span class=\"tm11\">t</span>ir<span class=\"tm11\">a</span>t<span class=\"tm11\"></span><span class=\"tm11\">ć</span>emo<span class=\"tm11\"></span>va<span class=\"tm11\">s</span>,<span class=\"tm11\"></span><span class=\"tm11\">p</span>regl<span class=\"tm11\">e</span><span class=\"tm11\">d</span>a<span class=\"tm11\">t</span>i<span class=\"tm11\"></span><span class=\"tm11\">a</span><span class=\"tm11\">p</span>li<span class=\"tm11\">k</span>a<span class=\"tm11\">c</span>iju<span class=\"tm11\"></span>i <span class=\"tm11\">do</span>g<span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>r<span class=\"tm11\">i</span><span class=\"tm11\">t</span>i<span class=\"tm11\"></span>ra<span class=\"tm11\">z</span><span class=\"tm11\">g</span><span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>r<span class=\"tm11\"></span>u<span class=\"tm11\"></span>a<span class=\"tm11\">g</span>e<span class=\"tm11\">n</span><span class=\"tm11\">c</span>iji. U<span class=\"tm11\">k</span><span class=\"tm11\">o</span>li<span class=\"tm11\">k</span>o<span class=\"tm11\"></span>je<span class=\"tm11\"></span>sve<span class=\"tm11\"></span>u<span class=\"tm11\"></span>r<span class=\"tm11\">e</span><span class=\"tm11\">du</span>, <span class=\"tm11\">p</span><span class=\"tm11\">o</span>slat<span class=\"tm11\"></span><span class=\"tm11\">ć</span>e<span class=\"tm11\">m</span>o<span class=\"tm11\"></span>vašu<span class=\"tm11\"></span>a<span class=\"tm11\">p</span><span class=\"tm11\">l</span>i<span class=\"tm11\">k</span>a<span class=\"tm11\">c</span>iju<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">u</span>r<span class=\"tm11\">e</span>d<span class=\"tm11\"></span>u<span class=\"tm11\"></span>L<span class=\"tm11\">o</span><span class=\"tm11\">n</span><span class=\"tm11\">d</span><span class=\"tm11\">o</span><span class=\"tm11\">nu k</span><span class=\"tm11\">o</span>ji<span class=\"tm11\"></span><span class=\"tm11\">ć</span>e<span class=\"tm11\"></span>ju<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">dob</span>r<span class=\"tm11\">i</span><span class=\"tm11\">t</span>i<span class=\"tm11\"></span>i<span class=\"tm11\"> p</span><span class=\"tm11\">r</span><span class=\"tm11\">o</span>ves<span class=\"tm11\">t</span>i<span class=\"tm11\"></span>u<span class=\"tm11\"></span>si<span class=\"tm11\">s</span><span class=\"tm11\">t</span>em.<span class=\"tm11\"></span>O<span class=\"tm11\">b</span><span class=\"tm11\">i</span><span class=\"tm11\">t</span>el<span class=\"tm11\">j</span>i<span class=\"tm11\"></span><span class=\"tm11\">(</span><span class=\"tm11\">ho</span>st<span class=\"tm11\"></span><span class=\"tm11\">f</span><span class=\"tm11\">a</span>milies)<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>je<span class=\"tm11\"></span>su<span class=\"tm11\"></span>vas <span class=\"tm11\">z</span>ai<span class=\"tm11\">n</span><span class=\"tm11\">t</span>eres<span class=\"tm11\">i</span>ra<span class=\"tm11\">n</span>e<span class=\"tm11\"></span>v<span class=\"tm11\">a</span>s <span class=\"tm11\">k</span><span class=\"tm11\">ont</span>a<span class=\"tm11\">k</span><span class=\"tm11\">t</span>ira<span class=\"tm11\">j</span>u<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">t</span>em<span class=\"tm11\"></span>vaše<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>ra<span class=\"tm11\">n</span>i<span class=\"tm11\">c</span>e<span class=\"tm11\"></span>i<span class=\"tm11\"></span>mail<span class=\"tm11\">o</span>m,<span class=\"tm11\"></span><span class=\"tm11\">t</span>e a<span class=\"tm11\">k</span>o<span class=\"tm11\"></span>vam<span class=\"tm11\"></span>se<span class=\"tm11\"></span>sv<span class=\"tm11\">i</span>đaj<span class=\"tm11\">u</span>,<span class=\"tm11\"></span><span class=\"tm11\">do</span>g<span class=\"tm11\">o</span>vara<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>ra<span class=\"tm11\">z</span><span class=\"tm11\">g</span><span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>r<span class=\"tm11\"></span>vi<span class=\"tm11\">d</span><span class=\"tm11\">e</span>o s<span class=\"tm11\">ky</span><span class=\"tm11\">p</span>e<span class=\"tm11\">o</span>m.<span class=\"tm11\"></span><span class=\"tm11\">R</span>a<span class=\"tm11\">z</span>g<span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>ri<span class=\"tm11\"></span><span class=\"tm11\">t</span>ra<span class=\"tm11\">j</span>u<span class=\"tm11\"></span>i<span class=\"tm11\">z</span><span class=\"tm11\">m</span>eđu<span class=\"tm11\"></span><span class=\"tm11\">4</span>5<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">6</span>0<span class=\"tm11\"></span>m<span class=\"tm11\">i</span><span class=\"tm11\">n</span><span class=\"tm11\">u</span><span class=\"tm11\">t</span>a<span class=\"tm11\"></span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">n</span>a<span class=\"tm11\">k</span><span class=\"tm11\">o</span>n<span class=\"tm11\"></span><span class=\"tm11\">n</span>e<span class=\"tm11\">k</span><span class=\"tm11\">o</span>li<span class=\"tm11\">k</span>o<span class=\"tm11\"></span>r<span class=\"tm11\">a</span><span class=\"tm11\">z</span>g<span class=\"tm11\">o</span>v<span class=\"tm11\">o</span>ra<span class=\"tm11\"></span>ili<span class=\"tm11\"></span>ra<span class=\"tm11\">z</span><span class=\"tm11\">m</span>je<span class=\"tm11\">n</span>e<span class=\"tm11\"></span>e- mail<span class=\"tm11\">o</span>va<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">d</span>l<span class=\"tm11\">u</span><span class=\"tm11\">č</span><span class=\"tm11\">u</span>j<span class=\"tm11\">e</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span>jes<span class=\"tm11\">t</span>e<span class=\"tm11\"></span>li<span class=\"tm11\"></span>je<span class=\"tm11\">d</span><span class=\"tm11\">n</span>i<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\"> d</span><span class=\"tm11\">r</span><span class=\"tm11\">u</span>ge.<span class=\"tm11\"></span><span class=\"tm11\">N</span>a<span class=\"tm11\">k</span><span class=\"tm11\">o</span>n <span class=\"tm11\">t</span>ele<span class=\"tm11\">f</span><span class=\"tm11\">o</span><span class=\"tm11\">n</span>s<span class=\"tm11\">k</span><span class=\"tm11\">o</span>g<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">ont</span>a<span class=\"tm11\">k</span><span class=\"tm11\">t</span>a<span class=\"tm11\"></span>i<span class=\"tm11\">z</span><span class=\"tm11\">m</span>eđu<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">j</span>ev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>e<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>elji,<span class=\"tm11\"></span><span class=\"tm11\">t</span>e međ<span class=\"tm11\">u</span>s<span class=\"tm11\">o</span><span class=\"tm11\">b</span><span class=\"tm11\">no</span>g<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">i</span><span class=\"tm11\">h</span>va<span class=\"tm11\">ć</span>a<span class=\"tm11\">n</span><span class=\"tm11\">j</span>a,<span class=\"tm11\"></span>šaljemo<span class=\"tm11\"></span>vam<span class=\"tm11\"></span>svu<span class=\"tm11\"></span><span class=\"tm11\">pot</span><span class=\"tm11\">r</span>e<span class=\"tm11\">b</span><span class=\"tm11\">n</span>u<span class=\"tm11\"></span><span class=\"tm11\">do</span><span class=\"tm11\">k</span><span class=\"tm11\">u</span>m<span class=\"tm11\">e</span><span class=\"tm11\">nt</span>a<span class=\"tm11\">c</span>i<span class=\"tm11\">j</span>u<span class=\"tm11\"></span><span class=\"tm11\">z</span>a <span class=\"tm11\">dob</span>iv<span class=\"tm11\">a</span><span class=\"tm11\">n</span>je<span class=\"tm11\"></span>vi<span class=\"tm11\">z</span>e<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">u</span><span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">z</span>a <span class=\"tm11\">d</span>alj<span class=\"tm11\">n</span>ji<span class=\"tm11\"></span><span class=\"tm11\">po</span><span class=\"tm11\">s</span><span class=\"tm11\">t</span><span class=\"tm11\">u</span><span class=\"tm11\">p</span>a<span class=\"tm11\">k</span>.</p><p class=\"Normal tm41\"> </p><p class=\"Normal tm41\"><strong><span class=\"tm25\"> </span><span class=\"tm26\">O</span><span class=\"tm25\"></span><span class=\"tm26\">V</span><span class=\"tm25\"></span><span class=\"tm26\">I</span><span class=\"tm25\"></span><span class=\"tm26\">P</span><span class=\"tm25\"></span><span class=\"tm25\">R</span><span class=\"tm26\">O</span><span class=\"tm25\"></span><span class=\"tm26\">G</span><span class=\"tm25\"></span><span class=\"tm25\">R</span><span class=\"tm26\">A</span><span class=\"tm25\"></span><span class=\"tm26\">M</span><span class=\"tm25\"></span><span class=\"tm26\">A</span></strong></p><p class=\"Normal tm33\"> </p><p class=\"Normal PageBreak tm43\"><strong><span class=\"tm16\">  </span></strong></p><p class=\"Normal tm43\"><strong><span class=\"tm16\"> </span></strong></p><p class=\"Normal tm43\"><strong><span class=\"tm16\"> </span></strong></p><p class=\"Normal tm43\"><strong><span class=\"tm16\">  R</span><span class=\"tm16\">E</span><span class=\"tm15\">D</span><span class=\"tm16\">O</span><span class=\"tm15\">VNA</span><span class=\"tm16\"></span><span class=\"tm15\">C</span><span class=\"tm16\">I</span><span class=\"tm16\">J</span><span class=\"tm16\">E</span><span class=\"tm15\">NA EUR</span><span class=\"tm16\"></span><span class=\"tm16\">1</span><span class=\"tm16\">2</span><span class=\"tm16\">50</span></strong></p><p class=\"Normal tm43\"><strong><span class=\"tm16\"> </span></strong></p><p class=\"Normal tm12\"> </p><p class=\"Normal tm44\"><strong><span class=\"tm8\">PR</span><span class=\"tm8\">O</span><span class=\"tm8\">M</span><span class=\"tm8\">OTI</span><span class=\"tm9\">VNA</span><span class=\"tm8\"></span><span class=\"tm8\">C</span><span class=\"tm8\">I</span><span class=\"tm9\">J</span><span class=\"tm8\">E</span><span class=\"tm9\">NA</span><span class=\"tm8\"></span><span class=\"tm8\">D</span><span class=\"tm9\">O</span><span class=\"tm8\"></span><span class=\"tm8\">3</span><span class=\"tm8\">0</span><span class=\"tm9\">. </span><span class=\"tm8\">1</span><span class=\"tm8\">1</span><span class=\"tm9\">.</span><span class=\"tm8\"></span><span class=\"tm8\">2</span><span class=\"tm8\">02</span><span class=\"tm8\">2</span><span class=\"tm9\">.</span></strong></p><p class=\"Normal tm24\"><strong><sup><span class=\"tm45\">:                                                                                                      </span></sup><span class=\"tm46\">EUR               500</span></strong></p><p class=\"Normal tm33\"> </p><p class=\"Normal tm33\"> </p><p class=\"Normal tm23\"> </p><p class=\"Normal tm47\">•                                                                                     <span class=\"tm11\">10</span>0<span class=\"tm11\"></span>EUR<span class=\"tm11\"></span>/<span class=\"tm11\"></span><span class=\"tm11\">7</span><span class=\"tm11\">5</span>0<span class=\"tm11\"> HR</span>K<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>d<span class=\"tm11\"></span><span class=\"tm11\">i</span><span class=\"tm11\">nt</span>erv<span class=\"tm11\">j</span><span class=\"tm11\">u</span>a</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm48\">•                                                                                     <span class=\"tm11\">o</span>s<span class=\"tm11\">t</span>a<span class=\"tm11\">t</span>ak<span class=\"tm11\"></span><u><span class=\"tm11\">n</span>a<span class=\"tm11\">k</span><span class=\"tm11\">o</span>n</u> š<span class=\"tm11\">t</span>o<span class=\"tm11\"></span>s<span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>ili<span class=\"tm11\"></span>vi<span class=\"tm11\">z</span>u</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm24\"><strong><span class=\"tm15\">C</span><span class=\"tm16\">ij</span><span class=\"tm16\">e</span><span class=\"tm16\">n</span><span class=\"tm15\">a</span><span class=\"tm16\"></span><span class=\"tm16\">p</span><span class=\"tm16\">ro</span><span class=\"tm16\">g</span><span class=\"tm16\">r</span><span class=\"tm16\">am</span><span class=\"tm15\">a</span><span class=\"tm16\"></span><span class=\"tm16\">po</span><span class=\"tm15\">k</span><span class=\"tm16\">r</span><span class=\"tm16\">i</span><span class=\"tm16\">va:</span></strong></p><p class=\"Normal tm12\"> </p><p class=\"Normal tm49\">•<span class=\"tm11\"> p</span>r<span class=\"tm11\">o</span><span class=\"tm11\">c</span>j<span class=\"tm11\">e</span><span class=\"tm11\">nu</span>,<span class=\"tm11\"></span>i<span class=\"tm11\">n</span><span class=\"tm11\">t</span>erv<span class=\"tm11\">j</span><span class=\"tm11\">u</span>e<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">d</span>a<span class=\"tm11\">b</span>ir<span class=\"tm11\"></span><span class=\"tm11\">o</span><span class=\"tm11\">b</span>i<span class=\"tm11\">t</span>elji<span class=\"tm11\"></span><span class=\"tm11\">do</span>ma<span class=\"tm11\">ć</span>i<span class=\"tm11\">n</span>a</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm49\">•<span class=\"tm11\"> do</span><span class=\"tm11\">k</span><span class=\"tm11\">u</span><span class=\"tm11\">m</span>e<span class=\"tm11\">n</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\"></span><span class=\"tm11\">J</span><span class=\"tm11\">-</span>1<span class=\"tm11\"></span>au <span class=\"tm11\">p</span>air<span class=\"tm11\"></span>vi<span class=\"tm11\">z</span>u</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm49\">•<span class=\"tm11\"> t</span>r<span class=\"tm11\">o</span><span class=\"tm11\">d</span><span class=\"tm11\">n</span>ev<span class=\"tm11\">n</span>i<span class=\"tm11\"></span><span class=\"tm11\">o</span>rij<span class=\"tm11\">e</span><span class=\"tm11\">nt</span>a<span class=\"tm11\">c</span>ijs<span class=\"tm11\">k</span>i<span class=\"tm11\"> p</span>r<span class=\"tm11\">o</span>gr<span class=\"tm11\">a</span>m<span class=\"tm11\"></span>u <span class=\"tm11\">N</span>ew<span class=\"tm11\"></span><span class=\"tm11\">Yo</span>r<span class=\"tm11\">ku</span></p><p class=\"Normal tm23\"> </p><p class=\"Normal tm49\">•<span class=\"tm11\"> p</span><span class=\"tm11\">o</span><span class=\"tm11\">d</span>rš<span class=\"tm11\">k</span>u<span class=\"tm11\"></span>savj<span class=\"tm11\">e</span><span class=\"tm11\">tn</span>i<span class=\"tm11\">c</span>e<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">u</span><span class=\"tm11\">r</span>e<span class=\"tm11\">d</span>a<span class=\"tm11\"></span>u<span class=\"tm11\"></span>S<span class=\"tm11\">A</span><span class=\"tm11\">D</span><span class=\"tm11\">-</span>u<span class=\"tm11\"></span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">n</span>aše<span class=\"tm11\"></span>ag<span class=\"tm11\">e</span><span class=\"tm11\">n</span><span class=\"tm11\">c</span>ije</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm49\">•<span class=\"tm11\"></span>a<span class=\"tm11\">d</span>m<span class=\"tm11\">i</span><span class=\"tm11\">n</span>is<span class=\"tm11\">t</span>r<span class=\"tm11\">a</span><span class=\"tm11\">t</span>iv<span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">u</span>s<span class=\"tm11\">l</span><span class=\"tm11\">u</span>ge<span class=\"tm11\"></span>i<span class=\"tm11\"> u</span>sl<span class=\"tm11\">u</span>ge<span class=\"tm11\"> p</span><span class=\"tm11\">od</span>rš<span class=\"tm11\">k</span>e<span class=\"tm11\"></span><span class=\"tm11\">t</span>ima<span class=\"tm11\"></span><span class=\"tm11\">A</span>u <span class=\"tm11\">P</span>air<span class=\"tm11\"></span><span class=\"tm11\">i</span>n<span class=\"tm11\"></span>Am<span class=\"tm11\">e</span>ri<span class=\"tm11\">c</span>a<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">n</span>ji<span class=\"tm11\">h</span><span class=\"tm11\">o</span>vih <span class=\"tm11\">p</span>r<span class=\"tm11\">e</span><span class=\"tm11\">d</span>s<span class=\"tm11\">t</span>av<span class=\"tm11\">n</span>i<span class=\"tm11\">k</span>a</p><p class=\"Normal tm12\"> </p><p class=\"Normal tm49\">•<span class=\"tm11\"> n</span><span class=\"tm11\">e</span><span class=\"tm11\">o</span>gra<span class=\"tm11\">n</span>i<span class=\"tm11\">č</span><span class=\"tm11\">e</span>n<span class=\"tm11\"></span><span class=\"tm11\">p</span>ris<span class=\"tm11\">t</span><span class=\"tm11\">u</span>p <span class=\"tm11\">o</span><span class=\"tm11\">n</span>li<span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">r</span>es<span class=\"tm11\">u</span>rsima<span class=\"tm11\"></span><span class=\"tm11\">p</span>ri<span class=\"tm11\">j</span>e<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">po</span>s<span class=\"tm11\">l</span>ije<span class=\"tm11\"> o</span><span class=\"tm11\">d</span>las<span class=\"tm11\">k</span>a;<span class=\"tm11\"> t</span><span class=\"tm11\">r</span>e<span class=\"tm11\">n</span><span class=\"tm11\">i</span><span class=\"tm11\">n</span>g<span class=\"tm11\"></span><span class=\"tm11\">w</span>e<span class=\"tm11\">b</span><span class=\"tm11\">i</span><span class=\"tm11\">n</span>ars<span class=\"tm11\"></span>u SA<span class=\"tm11\">D</span><span class=\"tm11\">-</span>u</p><p class=\"Normal tm23\"> </p><p class=\"Normal tm49\"><strong><span class=\"tm16\">K</span><span class=\"tm16\">a</span><span class=\"tm15\">o</span><span class=\"tm16\"></span><span class=\"tm16\">a</span><span class=\"tm15\">u </span><span class=\"tm16\">p</span><span class=\"tm16\">ai</span><span class=\"tm15\">r</span><span class=\"tm16\"></span><span class=\"tm16\">d</span><span class=\"tm16\">o</span><span class=\"tm16\">b</span><span class=\"tm16\">i</span><span class=\"tm16\">va</span><span class=\"tm16\">t</span><span class=\"tm15\">e</span><span class=\"tm16\"></span><span class=\"tm16\">i</span><span class=\"tm15\">:</span></strong></p><p class=\"Normal tm23\"> </p><p class=\"Normal tm50\">•                            avi<span class=\"tm11\">on</span>s<span class=\"tm11\">k</span>u<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">o</span>vra<span class=\"tm11\">t</span><span class=\"tm11\">n</span>u <span class=\"tm11\">k</span>ar<span class=\"tm11\">t</span>u<span class=\"tm11\"></span>Zagreb –<span class=\"tm11\"></span>USA-<span class=\"tm11\"></span>Zagr<span class=\"tm11\">e</span>b<span class=\"tm11\"></span><span class=\"tm11\">(</span><span class=\"tm11\">p</span><span class=\"tm11\">l</span>a<span class=\"tm11\">ć</span>a<span class=\"tm11\"></span>Au <span class=\"tm11\">P</span>air<span class=\"tm11\"></span><span class=\"tm11\">i</span>n<span class=\"tm11\"></span>A<span class=\"tm11\">m</span>eri<span class=\"tm11\">c</span>a<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">ob</span>i<span class=\"tm11\">t</span>elj)</p><p class=\"Normal tm51\"> </p><p class=\"Normal tm52\">•                            <span class=\"tm11\">o</span>s<span class=\"tm11\">no</span>v<span class=\"tm11\">n</span>o <span class=\"tm11\"></span><span class=\"tm11\">zd</span>rav<span class=\"tm11\">s</span><span class=\"tm11\">t</span>ve<span class=\"tm11\">n</span>o <span class=\"tm11\"></span>i <span class=\"tm11\"></span><span class=\"tm11\">ž</span>iv<span class=\"tm11\">o</span><span class=\"tm11\">t</span><span class=\"tm11\">n</span>o <span class=\"tm11\"></span><span class=\"tm11\">o</span>sig<span class=\"tm11\">u</span><span class=\"tm11\">r</span>a<span class=\"tm11\">n</span>je <span class=\"tm11\"></span><span class=\"tm11\">n</span>a <span class=\"tm11\"></span><span class=\"tm11\">10</span>0 <span class=\"tm11\"></span><span class=\"tm11\">0</span><span class=\"tm11\">0</span>0 <span class=\"tm11\"></span>USD <span class=\"tm11\"></span><span class=\"tm11\">(</span><span class=\"tm11\">A</span><u>u <span class=\"tm11\"></span><span class=\"tm11\">P</span>air <span class=\"tm11\"></span>in <span class=\"tm11\"></span>Ameri<span class=\"tm11\">c</span>a <span class=\"tm11\"></span><span class=\"tm11\">n</span><span class=\"tm11\">u</span><span class=\"tm11\">d</span>i</u> <u>m<span class=\"tm11\">o</span>g<span class=\"tm11\">u</span><span class=\"tm11\">ć</span><span class=\"tm11\">no</span><span class=\"tm11\">s</span>t<span class=\"tm11\"></span><span class=\"tm11\">u</span><span class=\"tm11\">p</span>l<span class=\"tm11\">a</span><span class=\"tm11\">te</span><span class=\"tm11\"></span><span class=\"tm11\">dod</span><span class=\"tm11\">a</span><span class=\"tm11\">t</span><span class=\"tm11\">no</span>g <span class=\"tm11\">o</span>si<span class=\"tm11\">g</span><span class=\"tm11\">u</span>ra<span class=\"tm11\">n</span>ja<span class=\"tm11\"></span><span class=\"tm11\">na</span><span class=\"tm11\"></span>i<span class=\"tm11\">z</span><span class=\"tm11\">no</span>s<span class=\"tm11\"></span><span class=\"tm11\">o</span>d<span class=\"tm11\"></span><span class=\"tm11\">5</span><span class=\"tm11\">0</span>0<span class=\"tm11\"></span><span class=\"tm11\">00</span>0<span class=\"tm11\"></span>US<span class=\"tm11\">D)</span></u></p><p class=\"Normal tm51\"> </p><p class=\"Normal tm50\">•                            <span class=\"tm11\">50</span>0<span class=\"tm11\"></span>$<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\"></span><span class=\"tm11\">t</span>e<span class=\"tm11\">č</span>aj<span class=\"tm11\"></span><span class=\"tm11\">p</span>o<span class=\"tm11\"></span><span class=\"tm11\">i</span><span class=\"tm11\">zb</span><span class=\"tm11\">o</span>ru</p><p class=\"Normal tm53\"> </p><p class=\"Normal tm50\">•                            smješ<span class=\"tm11\">t</span>aj<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">h</span>r<span class=\"tm11\">a</span><span class=\"tm11\">n</span>u</p><p class=\"Normal tm53\"> </p><p class=\"Normal tm50\"> </p><p class=\"Normal tm50\"> </p><p class=\"Normal tm50\">•                            <span class=\"tm11\">dž</span><span class=\"tm11\">e</span><span class=\"tm11\">p</span>arac <span class=\"tm11\">(od </span><span class=\"tm19\">9</span><span class=\"tm19\">6</span><span class=\"tm19\">0</span><span class=\"tm20\">0</span><span class=\"tm19\"></span><span class=\"tm20\">$</span><span class=\"tm19\"></span><span class=\"tm19\">-</span><span class=\"tm19\">12</span><span class=\"tm19\">0</span><span class=\"tm19\">0</span><span class=\"tm20\">0</span><span class=\"tm19\"></span><span class=\"tm20\">$</span><span class=\"tm19\"></span>g<span class=\"tm11\">o</span><span class=\"tm11\">d</span>iš<span class=\"tm11\">n</span>je)</p><p class=\"Normal tm54\"> </p><p class=\"Normal tm55\">• <span class=\"tm11\"></span>2<span class=\"tm11\"></span><span class=\"tm11\">t</span><span class=\"tm11\">j</span>e<span class=\"tm11\">d</span><span class=\"tm11\">n</span>a<span class=\"tm11\"> p</span><span class=\"tm11\">l</span>a<span class=\"tm11\">ć</span>e<span class=\"tm11\">no</span>g<span class=\"tm11\"></span>g<span class=\"tm11\">od</span>i<span class=\"tm11\">š</span><span class=\"tm11\">n</span>jeg<span class=\"tm11\"> od</span><span class=\"tm11\">m</span><span class=\"tm11\">o</span>ra</p><p class=\"Normal tm51\"> </p><p class=\"Normal tm56\">•                            <span class=\"tm11\">pod</span>rš<span class=\"tm11\">k</span>u savje<span class=\"tm11\">t</span><span class=\"tm11\">n</span>i<span class=\"tm11\">c</span>e<span class=\"tm11\"></span><span class=\"tm11\">k</span><span class=\"tm11\">o</span>ja<span class=\"tm11\"></span><span class=\"tm11\">b</span>ri<span class=\"tm11\">n</span>e<span class=\"tm11\"></span>o<span class=\"tm11\"></span><span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>ama<span class=\"tm11\"> (</span><span class=\"tm11\">u</span><span class=\"tm11\">k</span>lj<span class=\"tm11\">u</span><span class=\"tm11\">č</span><span class=\"tm11\">u</span>je<span class=\"tm11\"></span>i<span class=\"tm11\"></span><span class=\"tm11\">o</span>rg<span class=\"tm11\">a</span><span class=\"tm11\">n</span>i<span class=\"tm11\">z</span>a<span class=\"tm11\">c</span>i<span class=\"tm11\">j</span>u<span class=\"tm11\"></span><span class=\"tm11\">d</span>r<span class=\"tm11\">už</span>e<span class=\"tm11\">n</span>ja<span class=\"tm11\"></span>s<span class=\"tm11\"></span><span class=\"tm11\">d</span><span class=\"tm11\">r</span><span class=\"tm11\">u</span>gim<span class=\"tm11\"></span><span class=\"tm11\">a</span>u <span class=\"tm11\">p</span>air<span class=\"tm11\"></span><span class=\"tm11\">d</span>jev<span class=\"tm11\">o</span>j<span class=\"tm11\">k</span>ama<span class=\"tm11\"></span>)</p><p class=\"Normal tm51\"> </p><p class=\"Normal tm57\">• <span class=\"tm11\"></span>m<span class=\"tm11\">o</span>g<span class=\"tm11\">u</span><span class=\"tm11\">ć</span><span class=\"tm11\">no</span><span class=\"tm11\">s</span>t<span class=\"tm11\"></span><span class=\"tm11\">p</span><span class=\"tm11\">u</span><span class=\"tm11\">t</span><span class=\"tm11\">o</span>va<span class=\"tm11\">n</span>ja<span class=\"tm11\"></span><span class=\"tm11\">1</span><span class=\"tm11\">3</span>. mjesec <span class=\"tm11\">(</span><span class=\"tm11\">2</span>8<span class=\"tm11\"></span><span class=\"tm11\">d</span>a<span class=\"tm11\">n</span>a)</p><p class=\"Normal tm53\"> </p><p class=\"Normal tm58\">• <span class=\"tm11\"></span><span class=\"tm11\">b</span>es<span class=\"tm11\">p</span>l<span class=\"tm11\">a</span><span class=\"tm11\">t</span>an <span class=\"tm11\">t</span>e<span class=\"tm11\">l</span>e<span class=\"tm11\">f</span><span class=\"tm11\">o</span><span class=\"tm11\">n</span>s<span class=\"tm11\">k</span>i<span class=\"tm11\"> p</span><span class=\"tm11\">o</span><span class=\"tm11\">z</span><span class=\"tm11\">i</span>vi<span class=\"tm11\"></span>u<span class=\"tm11\"></span>glav<span class=\"tm11\">n</span>i<span class=\"tm11\"></span><span class=\"tm11\">u</span>red u<span class=\"tm11\"></span><span class=\"tm11\">S</span><span class=\"tm11\">t</span>a<span class=\"tm11\">m</span><span class=\"tm11\">f</span><span class=\"tm11\">o</span>r<span class=\"tm11\">du</span></p><p class=\"Normal tm53\"> </p><p class=\"Normal tm59\"><strong><span class=\"tm15\">Ostali troškova:</span></strong></p><p class=\"Normal tm53\"> </p><p class=\"Normal tm60\">•                           <span class=\"tm11\">t</span>r<span class=\"tm11\">o</span>šak vi<span class=\"tm11\">z</span>e<span class=\"tm11\"></span><span class=\"tm11\">1</span><span class=\"tm11\">6</span>0<span class=\"tm11\"></span>US<span class=\"tm11\">D</span>,<span class=\"tm11\"> p</span><span class=\"tm11\">l</span>a<span class=\"tm11\">t</span>ivo<span class=\"tm11\"></span>u <span class=\"tm11\">P</span><span class=\"tm11\">B</span>Z<span class=\"tm11\"> b</span><span class=\"tm11\">a</span><span class=\"tm11\">n</span><span class=\"tm11\">c</span>i<span class=\"tm11\"></span><span class=\"tm11\">p</span>rije<span class=\"tm11\"></span><span class=\"tm11\">od</span>l<span class=\"tm11\">a</span>s<span class=\"tm11\">k</span>a<span class=\"tm11\"> n</span>a<span class=\"tm11\"></span>a<span class=\"tm11\">m</span><span class=\"tm11\">b</span>asa<span class=\"tm11\">d</span>u</p><p class=\"Normal tm53\"> </p><p class=\"Normal tm60\">•                           <span class=\"tm11\">t</span>r<span class=\"tm11\">o</span>š<span class=\"tm11\">k</span><span class=\"tm11\">o</span>vi<span class=\"tm11\"></span>međ<span class=\"tm11\">u</span><span class=\"tm11\">n</span>ar<span class=\"tm11\">o</span><span class=\"tm11\">d</span><span class=\"tm11\">n</span>e<span class=\"tm11\"></span><span class=\"tm11\">v</span><span class=\"tm11\">oz</span>a<span class=\"tm11\">čk</span>e<span class=\"tm11\"> d</span><span class=\"tm11\">o</span><span class=\"tm11\">z</span>v<span class=\"tm11\">o</span>le<span class=\"tm11\"> (cc</span>a<span class=\"tm11\"> 22</span>0<span class=\"tm11\"></span><span class=\"tm11\">HR</span>K<span class=\"tm11\"></span>u<span class=\"tm11\"></span><span class=\"tm11\">H</span>rva<span class=\"tm11\">t</span>s<span class=\"tm11\">k</span><span class=\"tm11\">o</span>m<span class=\"tm11\"></span><span class=\"tm11\">a</span><span class=\"tm11\">uto</span><span class=\"tm11\">k</span><span class=\"tm11\">l</span><span class=\"tm11\">ubu)</span></p><p class=\"Normal tm12\"> </p><p class=\"Normal tm61\"><strong><span class=\"tm15\">Dinamika plaćanja:</span></strong></p><p class=\"ListParagraph tm62\"><span class=\"tm63\"> </span>750 kn akontacija se uplaćuje kod prijave agenciji Sunčana vura.</p><p class=\"ListParagraph tm64\"><span class=\"tm63\"> </span>400 EUR - os<span class=\"tm11\">t</span>a<span class=\"tm11\">t</span>ak <span class=\"tm11\">u</span><span class=\"tm11\">p</span>l<span class=\"tm11\">a</span><span class=\"tm11\">t</span>e<span class=\"tm11\"></span><span class=\"tm11\">z</span>a<span class=\"tm11\"></span><span class=\"tm11\">p</span>r<span class=\"tm11\">o</span>g<span class=\"tm11\">r</span>am<span class=\"tm11\"></span><span class=\"tm11\">u</span><span class=\"tm11\">p</span>la<span class=\"tm11\">ć</span><span class=\"tm11\">u</span>je<span class=\"tm11\"></span>se<span class=\"tm11\"></span>s<span class=\"tm11\">p</span><span class=\"tm11\">o</span><span class=\"tm11\">n</span><span class=\"tm11\">zo</span>ru <strong><span class=\"tm16\">A</span><span class=\"tm16\">me</span><span class=\"tm16\">ri</span><span class=\"tm15\">c</span><span class=\"tm16\">a</span><span class=\"tm15\">n</span><span class=\"tm16\"></span><span class=\"tm16\">In</span><span class=\"tm16\">s</span><span class=\"tm16\">ti</span><span class=\"tm16\">t</span><span class=\"tm16\">ut</span><span class=\"tm15\">e</span><span class=\"tm16\"></span><span class=\"tm16\">f</span><span class=\"tm16\">o</span><span class=\"tm15\">r</span><span class=\"tm16\"></span><span class=\"tm16\">F</span><span class=\"tm16\">or</span><span class=\"tm16\">e</span><span class=\"tm16\">i</span><span class=\"tm16\">g</span><span class=\"tm15\">n</span><span class=\"tm16\"></span><span class=\"tm16\">S</span><span class=\"tm16\">t</span><span class=\"tm16\">u</span><span class=\"tm16\">d</span><span class=\"tm15\">y</span><span class=\"tm16\"></span><span class=\"tm15\">(</span><span class=\"tm16\">U</span><span class=\"tm16\">K</span><span class=\"tm15\">)</span><span class=\"tm16\"></span><span class=\"tm16\">L</span><span class=\"tm16\">t</span><span class=\"tm16\">d</span><span class=\"tm15\">. </span><span class=\"tm16\">na</span><span class=\"tm15\">kon</span><span class=\"tm16\"></span><span class=\"tm16\">d</span><span class=\"tm15\">o</span><span class=\"tm16\">g</span><span class=\"tm15\">o</span><span class=\"tm16\">v</span><span class=\"tm15\">o</span><span class=\"tm16\">r</span><span class=\"tm15\">a s</span><span class=\"tm16\"></span><span class=\"tm15\">o</span><span class=\"tm16\">b</span><span class=\"tm16\">i</span><span class=\"tm16\">t</span><span class=\"tm16\">e</span><span class=\"tm16\">l</span><span class=\"tm16\">j</span><span class=\"tm16\">i</span><span class=\"tm15\">.</span></strong></p><p class=\"Normal tm33\">  </p><p class=\"Normal tm65\"><strong><span class=\"tm15\">Odustajanje od programa</span></strong>:</p><p class=\"Normal tm33\"> </p><p class=\"Normal tm66\"><span class=\"tm63\"> </span>750,00 HRK se zadržava ukoliko odustanete od programa nakon što ste upisani u sistem i obavili intervju sa Sunčanom vurom</p><p class=\"Normal tm54\"> </p><p class=\"Normal tm67\"><strong><span class=\"tm15\">Prekid programa radi više sile (</span><em><span class=\"tm68\">Force Majeure</span></em><span class=\"tm15\">):</span></strong></p><p class=\"Normal tm69\">U slučaju nepredvidivih okolnosti na koje agencija Sunčana vura nema utjecaja uključujući i novi val epidemije izazvane COVID-om 19 i/ ili privremeni prestanak rada ambasade, a radi kojih se sudjelovanje u programu ne može održati agencija zadržava HRK 750.</p><p class=\"Normal tm69\"> </p><p class=\"Normal tm70\"><strong><span class=\"tm15\"> </span></strong></p><p class=\"Normal tm70\"><strong><span class=\"tm15\"><a id=\"aHlk82698939\"></a><a id=\"aGoBack\"></a>Online prihvaćanjem Uvj</span><span class=\"tm16\">e</span><span class=\"tm15\">ta Au Pair in America pro</span><span class=\"tm16\">g</span><span class=\"tm15\">rama potvrđujem da sam u</span><span class=\"tm16\">p</span><span class=\"tm15\">oznata</span><span class=\"tm16\"> sa svim pravilima i uvjetima programa </span><span class=\"tm15\">i da </span><span class=\"tm16\">p</span><span class=\"tm15\">rihv</span><span class=\"tm16\">a</span><span class=\"tm15\">ćam pro</span><span class=\"tm16\">g</span><span class=\"tm15\">r</span><span class=\"tm16\">a</span><span class=\"tm15\">m </span><span class=\"tm16\"></span><span class=\"tm15\">putovanja </span><span class=\"tm16\"></span><span class=\"tm15\">organ</span><span class=\"tm16\">i</span><span class=\"tm15\">z</span><span class=\"tm16\">a</span><span class=\"tm15\">t</span><span class=\"tm16\">o</span><span class=\"tm15\">r</span><span class=\"tm16\">a</span><span class=\"tm15\">.</span></strong></p><p class=\"Normal tm71\"><strong><span class=\"tm15\"> </span></strong></p><p class=\"Normal tm72\"><strong><span class=\"tm15\">Sastav</span><span class=\"tm16\">n</span><span class=\"tm15\">i dio</span><span class=\"tm16\"></span><span class=\"tm15\">Uvj</span><span class=\"tm16\">e</span><span class=\"tm15\">ta Au Pair in America su: 1.</span><span class=\"tm16\"></span><span class=\"tm15\">Uvjeti</span><span class=\"tm16\"></span><span class=\"tm15\">sponzora, 2. Opći</span><span class=\"tm16\"></span><span class=\"tm15\">u</span><span class=\"tm16\">v</span><span class=\"tm15\">je</span><span class=\"tm16\">t</span><span class=\"tm15\">i</span></strong></p><p class=\"Normal tm72\"><span class=\"tm73\"></span><strong><span class=\"tm15\">p</span><span class=\"tm16\">u</span><span class=\"tm15\">to</span><span class=\"tm16\">v</span><span class=\"tm15\">anja Sunčane vure.</span></strong></p>", 147);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sm:flex sm:items-start"
};
var _hoisted_2 = {
  "class": "w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left"
};
var _hoisted_3 = {
  "class": "mt-5 sm:ml-12 sm:pl-4 sm:flex"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modal_new = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal-new");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modal_new, {
    show: $props.show,
    big: $props.big,
    closeable: $props.closeable,
    onClose: $options.close
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "content")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")])];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["show", "big", "closeable", "onClose"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed z-10 inset-0 overflow-y-auto"
};
var _hoisted_2 = {
  "class": "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "absolute inset-0 bg-gray-500 opacity-75"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "hidden sm:block absolute top-0 right-0 pt-4 pr-4"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "leave-active-class": "duration-200"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "ease-out duration-300",
        "enter-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "ease-in duration-200",
        "leave-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "class": "fixed inset-0 transition-opacity",
            onClick: _cache[1] || (_cache[1] = function () {
              return $options.close && $options.close.apply($options, arguments);
            }),
            "aria-hidden": "true"
          }, [_hoisted_3], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.show]])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" This element is to trick the browser into centering the modal contents. "), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "ease-out duration-300",
        "enter-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
        "leave-active-class": "ease-in duration-200",
        "leave-class": "opacity-100 translate-y-0 sm:scale-100",
        "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "class": [[$props.big ? 'sm:max-w-4xl' : 'sm:max-w-lg'], "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"],
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "modal-headline"
          }, [$props.closeIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            type: "button",
            onClick: _cache[2] || (_cache[2] = function () {
              return $options.close && $options.close.apply($options, arguments);
            }),
            "class": "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: x "), _hoisted_7])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
          /* CLASS */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.show]])];
        }),
        _: 3
        /* FORWARDED */

      })])], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.show]])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/GERMANY.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/GERMANY.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GERMANY_vue_vue_type_template_id_588c4a70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GERMANY.vue?vue&type=template&id=588c4a70 */ "./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=template&id=588c4a70");
/* harmony import */ var _GERMANY_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GERMANY.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=script&lang=js");



_GERMANY_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _GERMANY_vue_vue_type_template_id_588c4a70__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_GERMANY_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/GERMANY.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_GERMANY_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Independent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Independent.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Independent_vue_vue_type_template_id_76fc6c37__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Independent.vue?vue&type=template&id=76fc6c37 */ "./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=template&id=76fc6c37");
/* harmony import */ var _Independent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Independent.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=script&lang=js");



_Independent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Independent_vue_vue_type_template_id_76fc6c37__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Independent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/Independent.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Independent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/NODESTINATION.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/NODESTINATION.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NODESTINATION_vue_vue_type_template_id_56e419aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NODESTINATION.vue?vue&type=template&id=56e419aa */ "./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=template&id=56e419aa");
/* harmony import */ var _NODESTINATION_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NODESTINATION.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=script&lang=js");



_NODESTINATION_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NODESTINATION_vue_vue_type_template_id_56e419aa__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_NODESTINATION_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/NODESTINATION.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODESTINATION_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/OPCI.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/OPCI.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OPCI_vue_vue_type_template_id_1e92117a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OPCI.vue?vue&type=template&id=1e92117a */ "./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=template&id=1e92117a");
/* harmony import */ var _OPCI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OPCI.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=script&lang=js");



_OPCI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _OPCI_vue_vue_type_template_id_1e92117a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_OPCI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/OPCI.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OPCI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Premium.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Premium.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Premium_vue_vue_type_template_id_0a596714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Premium.vue?vue&type=template&id=0a596714 */ "./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=template&id=0a596714");
/* harmony import */ var _Premium_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Premium.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=script&lang=js");



_Premium_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Premium_vue_vue_type_template_id_0a596714__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Premium_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/Premium.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Premium_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/SPAIN.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/SPAIN.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SPAIN_vue_vue_type_template_id_c6d0c274__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SPAIN.vue?vue&type=template&id=c6d0c274 */ "./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=template&id=c6d0c274");
/* harmony import */ var _SPAIN_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPAIN.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=script&lang=js");



_SPAIN_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _SPAIN_vue_vue_type_template_id_c6d0c274__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_SPAIN_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/SPAIN.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SPAIN_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/ShowTerms.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/ShowTerms.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowTerms_vue_vue_type_template_id_ffef72f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowTerms.vue?vue&type=template&id=ffef72f2 */ "./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=template&id=ffef72f2");
/* harmony import */ var _ShowTerms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowTerms.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=script&lang=js");



_ShowTerms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ShowTerms_vue_vue_type_template_id_ffef72f2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ShowTerms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/ShowTerms.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ShowTerms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Sierra.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Sierra.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sierra_vue_vue_type_template_id_749d6376__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sierra.vue?vue&type=template&id=749d6376 */ "./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=template&id=749d6376");
/* harmony import */ var _Sierra_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sierra.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=script&lang=js");



_Sierra_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Sierra_vue_vue_type_template_id_749d6376__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Sierra_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/Sierra.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Sierra_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/USA.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/USA.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _USA_vue_vue_type_template_id_f52d0280__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./USA.vue?vue&type=template&id=f52d0280 */ "./resources/js/Pages/Admin/Applications/USA.vue?vue&type=template&id=f52d0280");
/* harmony import */ var _USA_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./USA.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/USA.vue?vue&type=script&lang=js");



_USA_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _USA_vue_vue_type_template_id_f52d0280__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_USA_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/USA.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_USA_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/DialogModal.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/DialogModal.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogModal.vue?vue&type=template&id=79416519 */ "./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519");
/* harmony import */ var _DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js");



_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/DialogModal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/ModalNew.vue":
/*!******************************************!*\
  !*** ./resources/js/Shared/ModalNew.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalNew.vue?vue&type=template&id=1e55538f */ "./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f");
/* harmony import */ var _ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalNew.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js");



_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/ModalNew.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GERMANY_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GERMANY_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GERMANY.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Independent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Independent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Independent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NODESTINATION_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NODESTINATION_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NODESTINATION.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OPCI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OPCI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OPCI.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Premium_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Premium_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Premium.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SPAIN_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SPAIN_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SPAIN.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTerms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTerms_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShowTerms.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sierra_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sierra_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sierra.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/USA.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/USA.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_USA_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_USA_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./USA.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/USA.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DialogModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalNew.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=template&id=588c4a70":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=template&id=588c4a70 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GERMANY_vue_vue_type_template_id_588c4a70__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GERMANY_vue_vue_type_template_id_588c4a70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GERMANY.vue?vue&type=template&id=588c4a70 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/GERMANY.vue?vue&type=template&id=588c4a70");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=template&id=76fc6c37":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=template&id=76fc6c37 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Independent_vue_vue_type_template_id_76fc6c37__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Independent_vue_vue_type_template_id_76fc6c37__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Independent.vue?vue&type=template&id=76fc6c37 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Independent.vue?vue&type=template&id=76fc6c37");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=template&id=56e419aa":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=template&id=56e419aa ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NODESTINATION_vue_vue_type_template_id_56e419aa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NODESTINATION_vue_vue_type_template_id_56e419aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NODESTINATION.vue?vue&type=template&id=56e419aa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/NODESTINATION.vue?vue&type=template&id=56e419aa");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=template&id=1e92117a":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=template&id=1e92117a ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OPCI_vue_vue_type_template_id_1e92117a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OPCI_vue_vue_type_template_id_1e92117a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OPCI.vue?vue&type=template&id=1e92117a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/OPCI.vue?vue&type=template&id=1e92117a");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=template&id=0a596714":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=template&id=0a596714 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Premium_vue_vue_type_template_id_0a596714__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Premium_vue_vue_type_template_id_0a596714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Premium.vue?vue&type=template&id=0a596714 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Premium.vue?vue&type=template&id=0a596714");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=template&id=c6d0c274":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=template&id=c6d0c274 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SPAIN_vue_vue_type_template_id_c6d0c274__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SPAIN_vue_vue_type_template_id_c6d0c274__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SPAIN.vue?vue&type=template&id=c6d0c274 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/SPAIN.vue?vue&type=template&id=c6d0c274");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=template&id=ffef72f2":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=template&id=ffef72f2 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTerms_vue_vue_type_template_id_ffef72f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShowTerms_vue_vue_type_template_id_ffef72f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShowTerms.vue?vue&type=template&id=ffef72f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ShowTerms.vue?vue&type=template&id=ffef72f2");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=template&id=749d6376":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=template&id=749d6376 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sierra_vue_vue_type_template_id_749d6376__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sierra_vue_vue_type_template_id_749d6376__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sierra.vue?vue&type=template&id=749d6376 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Sierra.vue?vue&type=template&id=749d6376");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/USA.vue?vue&type=template&id=f52d0280":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/USA.vue?vue&type=template&id=f52d0280 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_USA_vue_vue_type_template_id_f52d0280__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_USA_vue_vue_type_template_id_f52d0280__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./USA.vue?vue&type=template&id=f52d0280 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/USA.vue?vue&type=template&id=f52d0280");


/***/ }),

/***/ "./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DialogModal.vue?vue&type=template&id=79416519 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519");


/***/ }),

/***/ "./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f":
/*!************************************************************************!*\
  !*** ./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalNew.vue?vue&type=template&id=1e55538f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f");


/***/ })

}]);