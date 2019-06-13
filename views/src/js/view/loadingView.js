skt.view.loading = (function () {
  function _getView () {
    var domStr = '<div id="loadingWrap"><div id="loading" class="loadingBar">';

    for (var i = 0; i<4; i++) {
      domStr += '<div></div>';
    }

    domStr += '</div></div>';

    return domStr;
  }

  function _start() {
    var loading = document.getElementById('loading');
    loading.className = "loadingBar on";
  }

  function _stop () {
    var loading = document.getElementById('loading');
    loading.className = "loadingBar";
  }

  return {
    getView: _getView,
    start: _start,
    stop: _stop
  }
})();
