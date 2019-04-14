'use strict';

define("agencia/tests/integration/components/modal-component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | modal-component', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8Z8yrQf2",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"modal-component\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "FW6e+UnU",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"modal-component\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});

define("agencia/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/modal-component.js should pass ESLint\n\n14:17 - \'idModal\' is assigned a value but never used. (no-unused-vars)\n16:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n16:17 - \'$\' is not defined. (no-undef)\n18:17 - \'$\' is not defined. (no-undef)');
  });
  QUnit.test('controllers/portal.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/portal.js should pass ESLint\n\n2:15 - \'filter\' is defined but never used. (no-unused-vars)\n9:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('models/product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/product.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/portal.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/portal.js should pass ESLint\n\n10:32 - \'model\' is defined but never used. (no-unused-vars)');
  });
});

define("agencia/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('agencia/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'agencia/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('agencia/templates/components/modal-component.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'agencia/templates/components/modal-component.hbs should pass TemplateLint.\n\nagencia/templates/components/modal-component.hbs\n  4:4  error  Incorrect indentation for `<div>` beginning at L4:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:4  error  Incorrect indentation for `<div>` beginning at L14:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:8  error  Incorrect indentation for `<img>` beginning at L6:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<h1>` beginning at L8:C8. Expected `<h1>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:41  error  Incorrect indentation for `\n                PRODUTO ADICIONADO AO CARRINHO\n        ` beginning at L8:C41. Expected `\n                PRODUTO ADICIONADO AO CARRINHO\n        ` to be at an indentation of 10 but was found at 16.  block-indentation\n  15:8  error  Incorrect indentation for `<button>` beginning at L15:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  3:8  error  Unnecessary string concatenation. Use {{idModal}} instead of "{{idModal}}".  no-unnecessary-concat\n');
  });
  QUnit.test('agencia/templates/portal.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'agencia/templates/portal.hbs should pass TemplateLint.\n\nagencia/templates/portal.hbs\n  1:1  error  Incorrect indentation for `<header>` beginning at L1:C1. Expected `<header>` to be at an indentation of 0, but was found at 1.  block-indentation\n  37:11  error  Incorrect indentation for `header` beginning at L1:C1. Expected `</header>` ending at L37:C11 to be at an indentation of 1 but was found at 2.  block-indentation\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 3 but was found at 4.  block-indentation\n  36:12  error  Incorrect indentation for `div` beginning at L2:C4. Expected `</div>` ending at L36:C12 to be at an indentation of 4 but was found at 6.  block-indentation\n  3:8  error  Incorrect indentation for `<input>` beginning at L3:C8. Expected `<input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:8  error  Incorrect indentation for `<div>` beginning at L4:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<div>` beginning at L10:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  16:8  error  Incorrect indentation for `<div>` beginning at L16:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  22:8  error  Incorrect indentation for `<div>` beginning at L22:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  27:8  error  Incorrect indentation for `<div>` beginning at L27:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:12  error  Incorrect indentation for `<a>` beginning at L11:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:12  error  Incorrect indentation for `<a>` beginning at L12:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `<a>` beginning at L13:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:12  error  Incorrect indentation for `<img>` beginning at L18:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<input>` beginning at L19:C12. Expected `<input>` to be at an indentation of 10 but was found at 12.  block-indentation\n  23:12  error  Incorrect indentation for `<img>` beginning at L23:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  41:6  error  Incorrect indentation for `<div>` beginning at L41:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n  90:6  error  Incorrect indentation for `<div>` beginning at L90:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n  104:8  error  Incorrect indentation for `<div>` beginning at L104:C8. Expected `<div>` to be at an indentation of 4 but was found at 8.  block-indentation\n  113:8  error  Incorrect indentation for `<div>` beginning at L113:C8. Expected `<div>` to be at an indentation of 4 but was found at 8.  block-indentation\n  43:12  error  Incorrect indentation for `<img>` beginning at L43:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  46:12  error  Incorrect indentation for `<img>` beginning at L46:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  50:12  error  Incorrect indentation for `<h1>` beginning at L50:C12. Expected `<h1>` to be at an indentation of 10 but was found at 12.  block-indentation\n  51:12  error  Incorrect indentation for `<div>` beginning at L51:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  67:12  error  Incorrect indentation for `<div>` beginning at L67:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  52:16  error  Incorrect indentation for `<div>` beginning at L52:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  55:16  error  Incorrect indentation for `<div>` beginning at L55:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  62:16  error  Incorrect indentation for `<div>` beginning at L62:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  53:20  error  Incorrect indentation for `<label>` beginning at L53:C20. Expected `<label>` to be at an indentation of 18 but was found at 20.  block-indentation\n  57:24  error  Incorrect indentation for `<label>` beginning at L57:C24. Expected `<label>` to be at an indentation of 18 but was found at 24.  block-indentation\n  58:24  error  Incorrect indentation for `<h5>` beginning at L58:C24. Expected `<h5>` to be at an indentation of 18 but was found at 24.  block-indentation\n  64:20  error  Incorrect indentation for `<button>` beginning at L64:C20. Expected `<button>` to be at an indentation of 18 but was found at 20.  block-indentation\n  68:16  error  Incorrect indentation for `<div>` beginning at L68:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  74:16  error  Incorrect indentation for `<div>` beginning at L74:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  69:24  error  Incorrect indentation for `<div>` beginning at L69:C24. Expected `<div>` to be at an indentation of 18 but was found at 24.  block-indentation\n  70:28  error  Incorrect indentation for `<h5>` beginning at L70:C28. Expected `<h5>` to be at an indentation of 26 but was found at 28.  block-indentation\n  77:28  error  Incorrect indentation for `<input>` beginning at L77:C28. Expected `<input>` to be at an indentation of 18 but was found at 28.  block-indentation\n  80:28  error  Incorrect indentation for `<input>` beginning at L80:C28. Expected `<input>` to be at an indentation of 18 but was found at 28.  block-indentation\n  83:28  error  Incorrect indentation for `<button>` beginning at L83:C28. Expected `<button>` to be at an indentation of 18 but was found at 28.  block-indentation\n  103:16  error  Incorrect indentation for `div` beginning at L90:C6. Expected `</div>` ending at L103:C16 to be at an indentation of 6 but was found at 10.  block-indentation\n  91:12  error  Incorrect indentation for `<div>` beginning at L91:C12. Expected `<div>` to be at an indentation of 8 but was found at 12.  block-indentation\n  92:16  error  Incorrect indentation for `<h4>` beginning at L92:C16. Expected `<h4>` to be at an indentation of 14 but was found at 16.  block-indentation\n  95:16  error  Incorrect indentation for `<p>` beginning at L95:C16. Expected `<p>` to be at an indentation of 14 but was found at 16.  block-indentation\n  98:16  error  Incorrect indentation for `<p>` beginning at L98:C16. Expected `<p>` to be at an indentation of 14 but was found at 16.  block-indentation\n  92:40  error  Incorrect indentation for `\n                    Descri\xE7\xE3o do Produto\n                ` beginning at L92:C40. Expected `\n                    Descri\xE7\xE3o do Produto\n                ` to be at an indentation of 18 but was found at 20.  block-indentation\n  95:37  error  Incorrect indentation for `\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam vel nisi sagittis ultricies vitae sed dolor. Suspendisse accumsan justo sit amet sapien semper, quis euismod purus tempus. Donec tincidunt nibh sed lacinia hendrerit. Mauris nec sem nec urna fermentum condimentum. Etiam nisl metus, molestie nec ultricies et, eleifend eu nibh. Nullam placerat venenatis lorem, vel scelerisque risus venenatis eget. Nullam accumsan nisl sit amet eros ornare viverra.\n                ` beginning at L95:C37. Expected `\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam vel nisi sagittis ultricies vitae sed dolor. Suspendisse accumsan justo sit amet sapien semper, quis euismod purus tempus. Donec tincidunt nibh sed lacinia hendrerit. Mauris nec sem nec urna fermentum condimentum. Etiam nisl metus, molestie nec ultricies et, eleifend eu nibh. Nullam placerat venenatis lorem, vel scelerisque risus venenatis eget. Nullam accumsan nisl sit amet eros ornare viverra.\n                ` to be at an indentation of 18 but was found at 24.  block-indentation\n  98:37  error  Incorrect indentation for `\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam vel nisi sagittis ultricies vitae sed dolor. Suspendisse accumsan justo sit amet sapien semper, quis euismod purus tempus. Donec tincidunt nibh sed lacinia hendrerit. Mauris nec sem nec urna fermentum condimentum. Etiam nisl metus, molestie nec ultricies et, eleifend eu nibh. Nullam placerat venenatis lorem, vel scelerisque risus venenatis eget. Nullam accumsan nisl sit amet eros ornare viverra.\n                ` beginning at L98:C37. Expected `\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam vel nisi sagittis ultricies vitae sed dolor. Suspendisse accumsan justo sit amet sapien semper, quis euismod purus tempus. Donec tincidunt nibh sed lacinia hendrerit. Mauris nec sem nec urna fermentum condimentum. Etiam nisl metus, molestie nec ultricies et, eleifend eu nibh. Nullam placerat venenatis lorem, vel scelerisque risus venenatis eget. Nullam accumsan nisl sit amet eros ornare viverra.\n                ` to be at an indentation of 18 but was found at 24.  block-indentation\n  105:12  error  Incorrect indentation for `<div>` beginning at L105:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  106:16  error  Incorrect indentation for `<h4>` beginning at L106:C16. Expected `<h4>` to be at an indentation of 14 but was found at 16.  block-indentation\n  106:40  error  Incorrect indentation for `\n                    Quem viu, viu tamb\xE9m\n                ` beginning at L106:C40. Expected `\n                    Quem viu, viu tamb\xE9m\n                ` to be at an indentation of 18 but was found at 20.  block-indentation\n  114:12  error  Incorrect indentation for `{{#each}}` beginning at L114:C12. Expected `{{#each}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  115:16  error  Incorrect indentation for `<div>` beginning at L115:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  116:24  error  Incorrect indentation for `<img>` beginning at L116:C24. Expected `<img>` to be at an indentation of 18 but was found at 24.  block-indentation\n  117:24  error  Incorrect indentation for `<h5>` beginning at L117:C24. Expected `<h5>` to be at an indentation of 18 but was found at 24.  block-indentation\n  118:24  error  Incorrect indentation for `<div>` beginning at L118:C24. Expected `<div>` to be at an indentation of 18 but was found at 24.  block-indentation\n  119:28  error  Incorrect indentation for `<label>` beginning at L119:C28. Expected `<label>` to be at an indentation of 26 but was found at 28.  block-indentation\n  120:28  error  Incorrect indentation for `<h5>` beginning at L120:C28. Expected `<h5>` to be at an indentation of 26 but was found at 28.  block-indentation\n  128:6  error  Incorrect indentation for `<div>` beginning at L128:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n  129:10  error  Incorrect indentation for `<div>` beginning at L129:C10. Expected `<div>` to be at an indentation of 8 but was found at 10.  block-indentation\n  132:10  error  Incorrect indentation for `<div>` beginning at L132:C10. Expected `<div>` to be at an indentation of 8 but was found at 10.  block-indentation\n  133:14  error  Incorrect indentation for `<p>` beginning at L133:C14. Expected `<p>` to be at an indentation of 12 but was found at 14.  block-indentation\n  11:12  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  12:12  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  13:12  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  22:56  error  Unnecessary string concatenation. Use {{cartItems}} instead of "{{cartItems}}".  no-unnecessary-concat\n  43:50  error  Unnecessary string concatenation. Use {{defaultProduct.banner}} instead of "{{defaultProduct.banner}}".  no-unnecessary-concat\n  46:43  error  Unnecessary string concatenation. Use {{defaultProduct.banner}} instead of "{{defaultProduct.banner}}".  no-unnecessary-concat\n  116:59  error  Unnecessary string concatenation. Use {{product.banner}} instead of "{{product.banner}}".  no-unnecessary-concat\n');
  });
});

define("agencia/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/modal-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/modal-component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/portal-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/portal-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/product-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/portal-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/portal-test.js should pass ESLint\n\n');
  });
});

define("agencia/tests/test-helper", ["agencia/app", "agencia/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});

define("agencia/tests/unit/controllers/portal-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | portal', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:portal');
      assert.ok(controller);
    });
  });
});

define("agencia/tests/unit/models/product-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | product', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('product', {});
      assert.ok(model);
    });
  });
});

define("agencia/tests/unit/routes/portal-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | portal', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:portal');
      assert.ok(route);
    });
  });
});

define('agencia/config/environment', [], function() {
  var prefix = 'agencia';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('agencia/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
