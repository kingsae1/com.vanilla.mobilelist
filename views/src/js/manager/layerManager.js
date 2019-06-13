skt.manager.layerManager = (function () {
    function _init() {
        var initView = "";
        initView += skt.view.main.getView();
        initView += skt.view.loading.getView();
        document.body.innerHTML = initView;
        skt.view.loading.start();
    }

    return {
        init: _init,
    }
})();