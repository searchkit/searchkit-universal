
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

var _jsxFileName = '/Users/joe/projects/clients/ten-eleven/searchkit-universal/pages/index.js?entry';


var searchkit;

var MovieHitsGridItem = function MovieHitsGridItem(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'hi');
};

var MainPage = function (_React$Component) {
  (0, _inherits3.default)(MainPage, _React$Component);

  function MainPage() {
    (0, _classCallCheck3.default)(this, MainPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).call(this));

    var host = "http://demo.searchkit.co/api/movies";
    searchkit = new _searchkit.SearchkitManager(host, {
      useHistory: false,
      getLocation: function getLocation() {
        return '/';
      }
    });
    return _this;
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_searchkit.SearchkitProvider, { searchkit: searchkit, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_searchkit.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_searchkit.TopBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('div', { className: 'my-logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Searchkit Acme co'), _react2.default.createElement(_searchkit.SearchBox, { autofocus: true, searchOnChange: true, prefixQueryFields: ["actors^1", "type^2", "languages", "title^10"], __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement(_searchkit.LayoutBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_searchkit.SideBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_searchkit.HierarchicalMenuFilter, { fields: ["type.raw", "genres.raw"], title: 'Categories', id: 'categories', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_searchkit.DynamicRangeFilter, { field: 'metaScore', id: 'metascore', title: 'Metascore', rangeFormatter: function rangeFormatter(count) {
          return count + "*";
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_searchkit.RangeFilter, { min: 0, max: 10, field: 'imdbRating', id: 'imdbRating', title: 'IMDB Rating', showHistogram: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement(_searchkit.InputFilter, { id: 'writers', searchThrottleTime: 500, title: 'Writers', placeholder: 'Search writers', searchOnChange: true, queryFields: ["writers"], __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_searchkit.RefinementListFilter, { id: 'actors', title: 'Actors', field: 'actors.raw', size: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_searchkit.RefinementListFilter, { translations: { "facets.view_more": "View more writers" }, id: 'writers', title: 'Writers', field: 'writers.raw', operator: 'OR', size: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_searchkit.RefinementListFilter, { id: 'countries', title: 'Countries', field: 'countries.raw', operator: 'OR', size: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_searchkit.NumericRefinementListFilter, { id: 'runtimeMinutes', title: 'Length', field: 'runtimeMinutes', options: [{ title: "All" }, { title: "up to 20", from: 0, to: 20 }, { title: "21 to 60", from: 21, to: 60 }, { title: "60 or more", from: 61, to: 1000 }], __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement(_searchkit.LayoutResults, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_searchkit.ActionBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_searchkit.ActionBarRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_searchkit.HitsStats, { translations: {
          "hitstats.results_found": "{hitCount} results found"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement(_searchkit.ViewSwitcherToggle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_searchkit.SortingSelector, { options: [{ label: "Relevance", field: "_score", order: "desc" }, { label: "Latest Releases", field: "released", order: "desc" }, { label: "Earliest Releases", field: "released", order: "asc" }], __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), _react2.default.createElement(_searchkit.ActionBarRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_searchkit.GroupedSelectedFilters, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_searchkit.ResetFilters, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))), _react2.default.createElement(_searchkit.ViewSwitcherHits, {
        hitsPerPage: 12, highlightFields: ["title", "plot"],
        sourceFilter: ["plot", "title", "poster", "imdbId", "imdbRating", "year"],
        hitComponents: [{ key: "grid", title: "Grid", itemComponent: MovieHitsGridItem, defaultOption: true }],
        scrollTo: 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement(_searchkit.NoHits, { suggestionsField: "title", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_searchkit.Pagination, { showNumbers: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })))));
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

                console.log(pathname);
                return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                  setTimeout(function () {
                    resolve({});
                  }, 10000);
                }));

              case 3:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/joe/projects/clients/ten-eleven/searchkit-universal/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/joe/projects/clients/ten-eleven/searchkit-universal/pages/index.js"); } } })();
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

/***/ 787:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(612);


/***/ })

},[788]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzg0NDM1MDUiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKT84NDQzNTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaGtpdE1hbmFnZXIsU2VhcmNoa2l0UHJvdmlkZXIsXG4gIFNlYXJjaEJveCwgUmVmaW5lbWVudExpc3RGaWx0ZXIsIFBhZ2luYXRpb24sXG4gIEhpZXJhcmNoaWNhbE1lbnVGaWx0ZXIsIEhpdHNTdGF0cywgU29ydGluZ1NlbGVjdG9yLCBOb0hpdHMsXG4gIFJlc2V0RmlsdGVycywgUmFuZ2VGaWx0ZXIsIE51bWVyaWNSZWZpbmVtZW50TGlzdEZpbHRlcixcbiAgVmlld1N3aXRjaGVySGl0cywgVmlld1N3aXRjaGVyVG9nZ2xlLCBEeW5hbWljUmFuZ2VGaWx0ZXIsXG4gIElucHV0RmlsdGVyLCBHcm91cGVkU2VsZWN0ZWRGaWx0ZXJzLFxuICBMYXlvdXQsIFRvcEJhciwgTGF5b3V0Qm9keSwgTGF5b3V0UmVzdWx0cyxcbiAgQWN0aW9uQmFyLCBBY3Rpb25CYXJSb3csIFNpZGVCYXIgfSBmcm9tICdzZWFyY2hraXQnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudmFyIHNlYXJjaGtpdFxuXG5jb25zdCBNb3ZpZUhpdHNHcmlkSXRlbSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+aGk8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IGhvc3QgPSBcImh0dHA6Ly9kZW1vLnNlYXJjaGtpdC5jby9hcGkvbW92aWVzXCJcbiAgICBzZWFyY2hraXQgPSBuZXcgU2VhcmNoa2l0TWFuYWdlcihob3N0LCB7XG4gICAgICB1c2VIaXN0b3J5OiBmYWxzZSxcbiAgICAgIGdldExvY2F0aW9uOiAoKSA9PiAnLydcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwcm9wc1xuICAgIGNvbnNvbGUubG9nKHBhdGhuYW1lKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7fSlcbiAgICAgIH0sIDEwMDAwKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hraXRQcm92aWRlciBzZWFyY2hraXQ9e3NlYXJjaGtpdH0+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPFRvcEJhcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktbG9nb1wiPlNlYXJjaGtpdCBBY21lIGNvPC9kaXY+XG4gICAgICAgICAgICA8U2VhcmNoQm94IGF1dG9mb2N1cz17dHJ1ZX0gc2VhcmNoT25DaGFuZ2U9e3RydWV9IHByZWZpeFF1ZXJ5RmllbGRzPXtbXCJhY3RvcnNeMVwiLFwidHlwZV4yXCIsXCJsYW5ndWFnZXNcIixcInRpdGxlXjEwXCJdfS8+XG4gICAgICAgICAgPC9Ub3BCYXI+XG5cbiAgICAgICAgPExheW91dEJvZHk+XG5cbiAgICAgICAgICA8U2lkZUJhcj5cbiAgICAgICAgICAgIDxIaWVyYXJjaGljYWxNZW51RmlsdGVyIGZpZWxkcz17W1widHlwZS5yYXdcIiwgXCJnZW5yZXMucmF3XCJdfSB0aXRsZT1cIkNhdGVnb3JpZXNcIiBpZD1cImNhdGVnb3JpZXNcIi8+XG4gICAgICAgICAgICA8RHluYW1pY1JhbmdlRmlsdGVyIGZpZWxkPVwibWV0YVNjb3JlXCIgaWQ9XCJtZXRhc2NvcmVcIiB0aXRsZT1cIk1ldGFzY29yZVwiIHJhbmdlRm9ybWF0dGVyPXsoY291bnQpPT4gY291bnQgKyBcIipcIn0vPlxuICAgICAgICAgICAgPFJhbmdlRmlsdGVyIG1pbj17MH0gbWF4PXsxMH0gZmllbGQ9XCJpbWRiUmF0aW5nXCIgaWQ9XCJpbWRiUmF0aW5nXCIgdGl0bGU9XCJJTURCIFJhdGluZ1wiIHNob3dIaXN0b2dyYW09e3RydWV9Lz5cbiAgICAgICAgICAgIDxJbnB1dEZpbHRlciBpZD1cIndyaXRlcnNcIiBzZWFyY2hUaHJvdHRsZVRpbWU9ezUwMH0gdGl0bGU9XCJXcml0ZXJzXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggd3JpdGVyc1wiIHNlYXJjaE9uQ2hhbmdlPXt0cnVlfSBxdWVyeUZpZWxkcz17W1wid3JpdGVyc1wiXX0gLz5cbiAgICAgICAgICAgIDxSZWZpbmVtZW50TGlzdEZpbHRlciBpZD1cImFjdG9yc1wiIHRpdGxlPVwiQWN0b3JzXCIgZmllbGQ9XCJhY3RvcnMucmF3XCIgc2l6ZT17MTB9Lz5cbiAgICAgICAgICAgIDxSZWZpbmVtZW50TGlzdEZpbHRlciB0cmFuc2xhdGlvbnM9e3tcImZhY2V0cy52aWV3X21vcmVcIjpcIlZpZXcgbW9yZSB3cml0ZXJzXCJ9fSBpZD1cIndyaXRlcnNcIiB0aXRsZT1cIldyaXRlcnNcIiBmaWVsZD1cIndyaXRlcnMucmF3XCIgb3BlcmF0b3I9XCJPUlwiIHNpemU9ezEwfS8+XG4gICAgICAgICAgICA8UmVmaW5lbWVudExpc3RGaWx0ZXIgaWQ9XCJjb3VudHJpZXNcIiB0aXRsZT1cIkNvdW50cmllc1wiIGZpZWxkPVwiY291bnRyaWVzLnJhd1wiIG9wZXJhdG9yPVwiT1JcIiBzaXplPXsxMH0vPlxuICAgICAgICAgICAgPE51bWVyaWNSZWZpbmVtZW50TGlzdEZpbHRlciBpZD1cInJ1bnRpbWVNaW51dGVzXCIgdGl0bGU9XCJMZW5ndGhcIiBmaWVsZD1cInJ1bnRpbWVNaW51dGVzXCIgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7dGl0bGU6XCJBbGxcIn0sXG4gICAgICAgICAgICAgIHt0aXRsZTpcInVwIHRvIDIwXCIsIGZyb206MCwgdG86MjB9LFxuICAgICAgICAgICAgICB7dGl0bGU6XCIyMSB0byA2MFwiLCBmcm9tOjIxLCB0bzo2MH0sXG4gICAgICAgICAgICAgIHt0aXRsZTpcIjYwIG9yIG1vcmVcIiwgZnJvbTo2MSwgdG86MTAwMH1cbiAgICAgICAgICAgIF19Lz5cbiAgICAgICAgICA8L1NpZGVCYXI+XG4gICAgICAgICAgPExheW91dFJlc3VsdHM+XG4gICAgICAgICAgICA8QWN0aW9uQmFyPlxuXG4gICAgICAgICAgICAgIDxBY3Rpb25CYXJSb3c+XG4gICAgICAgICAgICAgICAgPEhpdHNTdGF0cyB0cmFuc2xhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgIFwiaGl0c3RhdHMucmVzdWx0c19mb3VuZFwiOlwie2hpdENvdW50fSByZXN1bHRzIGZvdW5kXCJcbiAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2hlclRvZ2dsZS8+XG4gICAgICAgICAgICAgICAgPFNvcnRpbmdTZWxlY3RvciBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICB7bGFiZWw6XCJSZWxldmFuY2VcIiwgZmllbGQ6XCJfc2NvcmVcIiwgb3JkZXI6XCJkZXNjXCJ9LFxuICAgICAgICAgICAgICAgICAge2xhYmVsOlwiTGF0ZXN0IFJlbGVhc2VzXCIsIGZpZWxkOlwicmVsZWFzZWRcIiwgb3JkZXI6XCJkZXNjXCJ9LFxuICAgICAgICAgICAgICAgICAge2xhYmVsOlwiRWFybGllc3QgUmVsZWFzZXNcIiwgZmllbGQ6XCJyZWxlYXNlZFwiLCBvcmRlcjpcImFzY1wifVxuICAgICAgICAgICAgICAgIF19Lz5cbiAgICAgICAgICAgICAgPC9BY3Rpb25CYXJSb3c+XG5cbiAgICAgICAgICAgICAgPEFjdGlvbkJhclJvdz5cbiAgICAgICAgICAgICAgICA8R3JvdXBlZFNlbGVjdGVkRmlsdGVycy8+XG4gICAgICAgICAgICAgICAgPFJlc2V0RmlsdGVycy8+XG4gICAgICAgICAgICAgIDwvQWN0aW9uQmFyUm93PlxuXG4gICAgICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgICAgIDxWaWV3U3dpdGNoZXJIaXRzXG4gICAgICAgICAgICAgICAgaGl0c1BlclBhZ2U9ezEyfSBoaWdobGlnaHRGaWVsZHM9e1tcInRpdGxlXCIsXCJwbG90XCJdfVxuICAgICAgICAgICAgICAgIHNvdXJjZUZpbHRlcj17W1wicGxvdFwiLCBcInRpdGxlXCIsIFwicG9zdGVyXCIsIFwiaW1kYklkXCIsIFwiaW1kYlJhdGluZ1wiLCBcInllYXJcIl19XG4gICAgICAgICAgICAgICAgaGl0Q29tcG9uZW50cz17W1xuICAgICAgICAgICAgICAgICAge2tleTpcImdyaWRcIiwgdGl0bGU6XCJHcmlkXCIsIGl0ZW1Db21wb25lbnQ6TW92aWVIaXRzR3JpZEl0ZW0sIGRlZmF1bHRPcHRpb246dHJ1ZX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvPVwiYm9keVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE5vSGl0cyBzdWdnZXN0aW9uc0ZpZWxkPXtcInRpdGxlXCJ9Lz5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uIHNob3dOdW1iZXJzPXt0cnVlfS8+XG4gICAgICAgICAgPC9MYXlvdXRSZXN1bHRzPlxuXG4gICAgICAgICAgPC9MYXlvdXRCb2R5PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvU2VhcmNoa2l0UHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHZlcnR4IChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gNzg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUdBOzs7OztBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBT0E7QUFQQTtBQU9BOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBR0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBT0E7QUFQQTs7Ozs7O0FBbEVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        