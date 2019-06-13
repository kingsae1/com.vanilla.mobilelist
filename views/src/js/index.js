(function (global) {
  global.skt = {};
  Object.defineProperties(global.skt, {
    init: {
      value: function () {
        // skt.manager.layerManager.init();
        Promise.resolve().then(function () {
          skt.manager.layerManager.init();
        });
      }
    },
    view: {value: {}},
    manager: {value: {}}
  });
})(window);
