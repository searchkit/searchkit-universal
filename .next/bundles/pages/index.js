
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(61);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(60);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _searchkit = __webpack_require__(555);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ssetem/Projects/searchkit/searchkit-universal/pages/index.js?entry';


var ReactDOMServer = __webpack_require__(685);


var searchkit;

var MovieHitsGridItem = function MovieHitsGridItem(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'hi');
};

var host = "http://demo.searchkit.co/api/movies";

var searchCode = function searchCode(searchkit) {
  return _react2.default.createElement(_searchkit.SearchkitProvider, { searchkit: searchkit, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_searchkit.Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_searchkit.TopBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('div', { className: 'my-logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Searchkit Acme co'), _react2.default.createElement(_searchkit.SearchBox, { autofocus: true, searchOnChange: true, prefixQueryFields: ["actors^1", "type^2", "languages", "title^10"], __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), _react2.default.createElement(_searchkit.LayoutBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_searchkit.SideBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_searchkit.HierarchicalMenuFilter, { fields: ["type.raw", "genres.raw"], title: 'Categories', id: 'categories', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement(_searchkit.DynamicRangeFilter, { field: 'metaScore', id: 'metascore', title: 'Metascore', rangeFormatter: function rangeFormatter(count) {
      return count + "*";
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement(_searchkit.RangeFilter, { min: 0, max: 10, field: 'imdbRating', id: 'imdbRating', title: 'IMDB Rating', showHistogram: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement(_searchkit.InputFilter, { id: 'writers', searchThrottleTime: 500, title: 'Writers', placeholder: 'Search writers', searchOnChange: true, queryFields: ["writers"], __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement(_searchkit.RefinementListFilter, { id: 'actors', title: 'Actors', field: 'actors.raw', size: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement(_searchkit.RefinementListFilter, { translations: { "facets.view_more": "View more writers" }, id: 'writers', title: 'Writers', field: 'writers.raw', operator: 'OR', size: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement(_searchkit.RefinementListFilter, { id: 'countries', title: 'Countries', field: 'countries.raw', operator: 'OR', size: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement(_searchkit.NumericRefinementListFilter, { id: 'runtimeMinutes', title: 'Length', field: 'runtimeMinutes', options: [{ title: "All" }, { title: "up to 20", from: 0, to: 20 }, { title: "21 to 60", from: 21, to: 60 }, { title: "60 or more", from: 61, to: 1000 }], __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), _react2.default.createElement(_searchkit.LayoutResults, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_searchkit.ActionBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_searchkit.ActionBarRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_searchkit.HitsStats, { translations: {
      "hitstats.results_found": "{hitCount} results found"
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement(_searchkit.ViewSwitcherToggle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), _react2.default.createElement(_searchkit.SortingSelector, { options: [{ label: "Relevance", field: "_score", order: "desc" }, { label: "Latest Releases", field: "released", order: "desc" }, { label: "Earliest Releases", field: "released", order: "asc" }], __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  })), _react2.default.createElement(_searchkit.ActionBarRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement(_searchkit.GroupedSelectedFilters, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), _react2.default.createElement(_searchkit.ResetFilters, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }))), _react2.default.createElement(_searchkit.Hits, { scrollTo: false,
    hitsPerPage: 12,
    highlightFields: ["title", "plot"],
    itemComponent: MovieHitsGridItem, __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }), _react2.default.createElement(_searchkit.NoHits, { suggestionsField: "title", __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }), _react2.default.createElement(_searchkit.Pagination, { showNumbers: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  })))));
};

var MainPage = function (_React$Component) {
  (0, _inherits3.default)(MainPage, _React$Component);

  function MainPage(props) {
    (0, _classCallCheck3.default)(this, MainPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).call(this, props));

    console.log("constructor");
    if (searchkit) {
      _this.searchkit = searchkit;
      searchkit.accessors = new _searchkit.AccessorManager();
      searchkit.accessors.add = function (accessor) {
        accessor.results = props.results;
        return _searchkit.AccessorManager.prototype.add.call(searchkit.accessors, accessor);
      };
      console.log('hits', searchkit.getHits());
    } else {
      _this.searchkit = new _searchkit.SearchkitManager(host, {
        useHistory: false,
        searchOnLoad: false,
        getLocation: function getLocation() {
          search: "";
        }
      });
      _this.searchkit.setupListeners = function () {};
      if (props.results) {
        _this.searchkit.results = props.results;
        _this.searchkit.initialLoading = false;
        _this.searchkit.accessors.setResults(props.results);
      }
      if (props.state) {
        _this.searchkit.state = props.state;
      }
    }

    // console.log(this.searchkit)
    return _this;
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // console.log("HI")
      // setTimeout(()=> {
      //   this.searchkit.onResponseChange()
      // }, 2000)
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.searchkit)
      return searchCode(this.searchkit);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(props) {
        var pathname, query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pathname = props.pathname, query = props.query;

                searchkit = new _searchkit.SearchkitManager(host, {
                  useHistory: false,
                  getLocation: function getLocation() {
                    return '/';
                  }
                });
                ReactDOMServer.renderToString(searchCode(searchkit));
                searchkit.performSearch();
                console.log("getInitialProps"
                // console.log(searchkit)
                );return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                  searchkit.addResultsListener(function (results) {
                    resolve({ results: results, state: searchkit.state });
                  });
                }));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MainPage;
}(_react2.default.Component);

exports.default = MainPage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ssetem/Projects/searchkit/searchkit-universal/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ssetem/Projects/searchkit/searchkit-universal/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(81)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(612);


/***/ })

},[792]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2FmNTY3MjMiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKT9hZjU2NzIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaGtpdE1hbmFnZXIsU2VhcmNoa2l0UHJvdmlkZXIsXG4gIFNlYXJjaEJveCwgUmVmaW5lbWVudExpc3RGaWx0ZXIsIFBhZ2luYXRpb24sXG4gIEhpZXJhcmNoaWNhbE1lbnVGaWx0ZXIsIEhpdHNTdGF0cywgU29ydGluZ1NlbGVjdG9yLCBOb0hpdHMsXG4gIFJlc2V0RmlsdGVycywgUmFuZ2VGaWx0ZXIsIE51bWVyaWNSZWZpbmVtZW50TGlzdEZpbHRlcixcbiAgVmlld1N3aXRjaGVySGl0cywgVmlld1N3aXRjaGVyVG9nZ2xlLCBEeW5hbWljUmFuZ2VGaWx0ZXIsXG4gIElucHV0RmlsdGVyLCBHcm91cGVkU2VsZWN0ZWRGaWx0ZXJzLCBBY2Nlc3Nvck1hbmFnZXIsXG4gIExheW91dCwgVG9wQmFyLCBMYXlvdXRCb2R5LCBMYXlvdXRSZXN1bHRzLCBIaXRzLFxuICBBY3Rpb25CYXIsIEFjdGlvbkJhclJvdywgU2lkZUJhciB9IGZyb20gJ3NlYXJjaGtpdCdcblxudmFyIFJlYWN0RE9NU2VydmVyID0gcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnZhciBzZWFyY2hraXRcblxuY29uc3QgTW92aWVIaXRzR3JpZEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PmhpPC9kaXY+XG4gIClcbn1cblxuY29uc3QgaG9zdCA9IFwiaHR0cDovL2RlbW8uc2VhcmNoa2l0LmNvL2FwaS9tb3ZpZXNcIlxuXG5cbmxldCBzZWFyY2hDb2RlID0gIChzZWFyY2hraXQpPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hraXRQcm92aWRlciBzZWFyY2hraXQ9e3NlYXJjaGtpdH0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8VG9wQmFyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktbG9nb1wiPlNlYXJjaGtpdCBBY21lIGNvPC9kaXY+XG4gICAgICAgICAgPFNlYXJjaEJveCBhdXRvZm9jdXM9e3RydWV9IHNlYXJjaE9uQ2hhbmdlPXt0cnVlfSBwcmVmaXhRdWVyeUZpZWxkcz17W1wiYWN0b3JzXjFcIixcInR5cGVeMlwiLFwibGFuZ3VhZ2VzXCIsXCJ0aXRsZV4xMFwiXX0vPlxuICAgICAgICA8L1RvcEJhcj5cblxuICAgICAgPExheW91dEJvZHk+XG5cbiAgICAgICAgPFNpZGVCYXI+XG4gICAgICAgICAgPEhpZXJhcmNoaWNhbE1lbnVGaWx0ZXIgZmllbGRzPXtbXCJ0eXBlLnJhd1wiLCBcImdlbnJlcy5yYXdcIl19IHRpdGxlPVwiQ2F0ZWdvcmllc1wiIGlkPVwiY2F0ZWdvcmllc1wiLz5cbiAgICAgICAgICA8RHluYW1pY1JhbmdlRmlsdGVyIGZpZWxkPVwibWV0YVNjb3JlXCIgaWQ9XCJtZXRhc2NvcmVcIiB0aXRsZT1cIk1ldGFzY29yZVwiIHJhbmdlRm9ybWF0dGVyPXsoY291bnQpPT4gY291bnQgKyBcIipcIn0vPlxuICAgICAgICAgIDxSYW5nZUZpbHRlciBtaW49ezB9IG1heD17MTB9IGZpZWxkPVwiaW1kYlJhdGluZ1wiIGlkPVwiaW1kYlJhdGluZ1wiIHRpdGxlPVwiSU1EQiBSYXRpbmdcIiBzaG93SGlzdG9ncmFtPXt0cnVlfS8+XG4gICAgICAgICAgPElucHV0RmlsdGVyIGlkPVwid3JpdGVyc1wiIHNlYXJjaFRocm90dGxlVGltZT17NTAwfSB0aXRsZT1cIldyaXRlcnNcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCB3cml0ZXJzXCIgc2VhcmNoT25DaGFuZ2U9e3RydWV9IHF1ZXJ5RmllbGRzPXtbXCJ3cml0ZXJzXCJdfSAvPlxuICAgICAgICAgIDxSZWZpbmVtZW50TGlzdEZpbHRlciBpZD1cImFjdG9yc1wiIHRpdGxlPVwiQWN0b3JzXCIgZmllbGQ9XCJhY3RvcnMucmF3XCIgc2l6ZT17MTB9Lz5cbiAgICAgICAgICA8UmVmaW5lbWVudExpc3RGaWx0ZXIgdHJhbnNsYXRpb25zPXt7XCJmYWNldHMudmlld19tb3JlXCI6XCJWaWV3IG1vcmUgd3JpdGVyc1wifX0gaWQ9XCJ3cml0ZXJzXCIgdGl0bGU9XCJXcml0ZXJzXCIgZmllbGQ9XCJ3cml0ZXJzLnJhd1wiIG9wZXJhdG9yPVwiT1JcIiBzaXplPXsxMH0vPlxuICAgICAgICAgIDxSZWZpbmVtZW50TGlzdEZpbHRlciBpZD1cImNvdW50cmllc1wiIHRpdGxlPVwiQ291bnRyaWVzXCIgZmllbGQ9XCJjb3VudHJpZXMucmF3XCIgb3BlcmF0b3I9XCJPUlwiIHNpemU9ezEwfS8+XG4gICAgICAgICAgPE51bWVyaWNSZWZpbmVtZW50TGlzdEZpbHRlciBpZD1cInJ1bnRpbWVNaW51dGVzXCIgdGl0bGU9XCJMZW5ndGhcIiBmaWVsZD1cInJ1bnRpbWVNaW51dGVzXCIgb3B0aW9ucz17W1xuICAgICAgICAgICAge3RpdGxlOlwiQWxsXCJ9LFxuICAgICAgICAgICAge3RpdGxlOlwidXAgdG8gMjBcIiwgZnJvbTowLCB0bzoyMH0sXG4gICAgICAgICAgICB7dGl0bGU6XCIyMSB0byA2MFwiLCBmcm9tOjIxLCB0bzo2MH0sXG4gICAgICAgICAgICB7dGl0bGU6XCI2MCBvciBtb3JlXCIsIGZyb206NjEsIHRvOjEwMDB9XG4gICAgICAgICAgXX0vPlxuICAgICAgICA8L1NpZGVCYXI+XG4gICAgICAgIDxMYXlvdXRSZXN1bHRzPlxuICAgICAgICAgIDxBY3Rpb25CYXI+XG5cbiAgICAgICAgICAgIDxBY3Rpb25CYXJSb3c+XG4gICAgICAgICAgICAgIDxIaXRzU3RhdHMgdHJhbnNsYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgXCJoaXRzdGF0cy5yZXN1bHRzX2ZvdW5kXCI6XCJ7aGl0Q291bnR9IHJlc3VsdHMgZm91bmRcIlxuICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgIDxWaWV3U3dpdGNoZXJUb2dnbGUvPlxuICAgICAgICAgICAgICA8U29ydGluZ1NlbGVjdG9yIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICB7bGFiZWw6XCJSZWxldmFuY2VcIiwgZmllbGQ6XCJfc2NvcmVcIiwgb3JkZXI6XCJkZXNjXCJ9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDpcIkxhdGVzdCBSZWxlYXNlc1wiLCBmaWVsZDpcInJlbGVhc2VkXCIsIG9yZGVyOlwiZGVzY1wifSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6XCJFYXJsaWVzdCBSZWxlYXNlc1wiLCBmaWVsZDpcInJlbGVhc2VkXCIsIG9yZGVyOlwiYXNjXCJ9XG4gICAgICAgICAgICAgIF19Lz5cbiAgICAgICAgICAgIDwvQWN0aW9uQmFyUm93PlxuXG4gICAgICAgICAgICA8QWN0aW9uQmFyUm93PlxuICAgICAgICAgICAgICA8R3JvdXBlZFNlbGVjdGVkRmlsdGVycy8+XG4gICAgICAgICAgICAgIDxSZXNldEZpbHRlcnMvPlxuICAgICAgICAgICAgPC9BY3Rpb25CYXJSb3c+XG5cbiAgICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgICA8SGl0cyBzY3JvbGxUbz17ZmFsc2V9XG4gICAgICAgICAgICBoaXRzUGVyUGFnZT17MTJ9XG4gICAgICAgICAgICBoaWdobGlnaHRGaWVsZHM9e1tcInRpdGxlXCIsXCJwbG90XCJdfVxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudD17TW92aWVIaXRzR3JpZEl0ZW19Lz5cbiAgICAgICAgICA8Tm9IaXRzIHN1Z2dlc3Rpb25zRmllbGQ9e1widGl0bGVcIn0vPlxuICAgICAgICAgIDxQYWdpbmF0aW9uIHNob3dOdW1iZXJzPXt0cnVlfS8+XG4gICAgICAgIDwvTGF5b3V0UmVzdWx0cz5cblxuICAgICAgICA8L0xheW91dEJvZHk+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1NlYXJjaGtpdFByb3ZpZGVyPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yXCIpXG4gICAgaWYoc2VhcmNoa2l0KXtcbiAgICAgIHRoaXMuc2VhcmNoa2l0ID0gc2VhcmNoa2l0XG4gICAgICBzZWFyY2hraXQuYWNjZXNzb3JzID0gbmV3IEFjY2Vzc29yTWFuYWdlcigpXG4gICAgICBzZWFyY2hraXQuYWNjZXNzb3JzLmFkZCA9IGZ1bmN0aW9uKGFjY2Vzc29yKSB7XG4gICAgICAgIGFjY2Vzc29yLnJlc3VsdHMgPSBwcm9wcy5yZXN1bHRzXG4gICAgICAgIHJldHVybiBBY2Nlc3Nvck1hbmFnZXIucHJvdG90eXBlLmFkZC5jYWxsKFxuICAgICAgICAgIHNlYXJjaGtpdC5hY2Nlc3NvcnMsIGFjY2Vzc29yKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2hpdHMnLCBzZWFyY2hraXQuZ2V0SGl0cygpKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoa2l0ID0gbmV3IFNlYXJjaGtpdE1hbmFnZXIoaG9zdCwge1xuICAgICAgICB1c2VIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgc2VhcmNoT25Mb2FkOmZhbHNlLFxuICAgICAgICBnZXRMb2NhdGlvbjogKCkgPT4ge1xuICAgICAgICAgIHNlYXJjaDpcIlwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnNlYXJjaGtpdC5zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uKCl7fVxuICAgICAgaWYocHJvcHMucmVzdWx0cyl7XG4gICAgICAgIHRoaXMuc2VhcmNoa2l0LnJlc3VsdHMgPSBwcm9wcy5yZXN1bHRzXG4gICAgICAgIHRoaXMuc2VhcmNoa2l0LmluaXRpYWxMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy5zZWFyY2hraXQuYWNjZXNzb3JzLnNldFJlc3VsdHMocHJvcHMucmVzdWx0cylcbiAgICAgIH1cbiAgICAgIGlmKHByb3BzLnN0YXRlKXtcbiAgICAgICAgdGhpcy5zZWFyY2hraXQuc3RhdGUgPSBwcm9wcy5zdGF0ZVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hraXQpXG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgLy8gY29uc29sZS5sb2coXCJISVwiKVxuICAgIC8vIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgLy8gICB0aGlzLnNlYXJjaGtpdC5vblJlc3BvbnNlQ2hhbmdlKClcbiAgICAvLyB9LCAyMDAwKVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwcm9wc1xuICAgIHNlYXJjaGtpdCA9IG5ldyBTZWFyY2hraXRNYW5hZ2VyKGhvc3QsIHtcbiAgICAgIHVzZUhpc3Rvcnk6IGZhbHNlLFxuICAgICAgZ2V0TG9jYXRpb246ICgpID0+ICcvJ1xuICAgIH0pXG4gICAgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoc2VhcmNoQ29kZShzZWFyY2hraXQpKVxuICAgIHNlYXJjaGtpdC5wZXJmb3JtU2VhcmNoKClcbiAgICBjb25zb2xlLmxvZyhcImdldEluaXRpYWxQcm9wc1wiKVxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaGtpdClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2VhcmNoa2l0LmFkZFJlc3VsdHNMaXN0ZW5lcigocmVzdWx0cyk9PiB7XG4gICAgICAgIHJlc29sdmUoe3Jlc3VsdHMsIHN0YXRlOnNlYXJjaGtpdC5zdGF0ZX0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hraXQpXG4gICAgcmV0dXJuIChcbiAgICAgIHNlYXJjaENvZGUodGhpcy5zZWFyY2hraXQpXG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHZlcnR4IChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gNzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFPQTtBQVBBO0FBT0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUlBO0FBSkE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUhBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQU9BO0FBUEE7O0FBcERBO0FBQ0E7QUEyREE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQVJBO0FBV0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBTkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBbENBO0FBa0NBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFvQkE7QUFDQTtBQUNBOzs7OztBQXBCQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdkRBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        