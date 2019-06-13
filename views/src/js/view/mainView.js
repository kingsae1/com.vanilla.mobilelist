skt.view.main = (function () {
    function _getView() {
        var domStr = '<div id="main">';

        domStr += skt.view.top.getView();

        domStr += '</div>';
        return domStr;
    }

    return {
        getView: _getView
    }
})();