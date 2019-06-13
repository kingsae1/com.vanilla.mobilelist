skt.view.table = (function () {
  function _getView (id) {
    return '<div id="table_' + id + '>' +
              '<div></div>'+
           '</div>';
  }

  return {
    getView: _getView
  }
})();
