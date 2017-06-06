webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMGM1MTFkNTViZTYyNGIzYTE4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hraXRNYW5hZ2VyLFNlYXJjaGtpdFByb3ZpZGVyLFxuICBTZWFyY2hCb3gsIFJlZmluZW1lbnRMaXN0RmlsdGVyLCBQYWdpbmF0aW9uLFxuICBIaWVyYXJjaGljYWxNZW51RmlsdGVyLCBIaXRzU3RhdHMsIFNvcnRpbmdTZWxlY3RvciwgTm9IaXRzLFxuICBSZXNldEZpbHRlcnMsIFJhbmdlRmlsdGVyLCBOdW1lcmljUmVmaW5lbWVudExpc3RGaWx0ZXIsXG4gIFZpZXdTd2l0Y2hlckhpdHMsIFZpZXdTd2l0Y2hlclRvZ2dsZSwgRHluYW1pY1JhbmdlRmlsdGVyLFxuICBJbnB1dEZpbHRlciwgR3JvdXBlZFNlbGVjdGVkRmlsdGVycyxcbiAgTGF5b3V0LCBUb3BCYXIsIExheW91dEJvZHksIExheW91dFJlc3VsdHMsXG4gIEFjdGlvbkJhciwgQWN0aW9uQmFyUm93LCBTaWRlQmFyIH0gZnJvbSAnc2VhcmNoa2l0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnZhciBzZWFyY2hraXRcblxuY29uc3QgTW92aWVIaXRzR3JpZEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PmhpPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBob3N0ID0gXCJodHRwOi8vZGVtby5zZWFyY2hraXQuY28vYXBpL21vdmllc1wiXG4gICAgc2VhcmNoa2l0ID0gbmV3IFNlYXJjaGtpdE1hbmFnZXIoaG9zdCwge1xuICAgICAgdXNlSGlzdG9yeTogZmFsc2UsXG4gICAgICBnZXRMb2NhdGlvbjogKCkgPT4gJy8nXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcHJvcHNcbiAgICBjb25zb2xlLmxvZyhwYXRobmFtZSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe30pXG4gICAgICB9LCAxMDAwMClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VhcmNoa2l0UHJvdmlkZXIgc2VhcmNoa2l0PXtzZWFyY2hraXR9PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxUb3BCYXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWxvZ29cIj5TZWFyY2hraXQgQWNtZSBjbzwvZGl2PlxuICAgICAgICAgICAgPFNlYXJjaEJveCBhdXRvZm9jdXM9e3RydWV9IHNlYXJjaE9uQ2hhbmdlPXt0cnVlfSBwcmVmaXhRdWVyeUZpZWxkcz17W1wiYWN0b3JzXjFcIixcInR5cGVeMlwiLFwibGFuZ3VhZ2VzXCIsXCJ0aXRsZV4xMFwiXX0vPlxuICAgICAgICAgIDwvVG9wQmFyPlxuXG4gICAgICAgIDxMYXlvdXRCb2R5PlxuXG4gICAgICAgICAgPFNpZGVCYXI+XG4gICAgICAgICAgICA8SGllcmFyY2hpY2FsTWVudUZpbHRlciBmaWVsZHM9e1tcInR5cGUucmF3XCIsIFwiZ2VucmVzLnJhd1wiXX0gdGl0bGU9XCJDYXRlZ29yaWVzXCIgaWQ9XCJjYXRlZ29yaWVzXCIvPlxuICAgICAgICAgICAgPER5bmFtaWNSYW5nZUZpbHRlciBmaWVsZD1cIm1ldGFTY29yZVwiIGlkPVwibWV0YXNjb3JlXCIgdGl0bGU9XCJNZXRhc2NvcmVcIiByYW5nZUZvcm1hdHRlcj17KGNvdW50KT0+IGNvdW50ICsgXCIqXCJ9Lz5cbiAgICAgICAgICAgIDxSYW5nZUZpbHRlciBtaW49ezB9IG1heD17MTB9IGZpZWxkPVwiaW1kYlJhdGluZ1wiIGlkPVwiaW1kYlJhdGluZ1wiIHRpdGxlPVwiSU1EQiBSYXRpbmdcIiBzaG93SGlzdG9ncmFtPXt0cnVlfS8+XG4gICAgICAgICAgICA8SW5wdXRGaWx0ZXIgaWQ9XCJ3cml0ZXJzXCIgc2VhcmNoVGhyb3R0bGVUaW1lPXs1MDB9IHRpdGxlPVwiV3JpdGVyc1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHdyaXRlcnNcIiBzZWFyY2hPbkNoYW5nZT17dHJ1ZX0gcXVlcnlGaWVsZHM9e1tcIndyaXRlcnNcIl19IC8+XG4gICAgICAgICAgICA8UmVmaW5lbWVudExpc3RGaWx0ZXIgaWQ9XCJhY3RvcnNcIiB0aXRsZT1cIkFjdG9yc1wiIGZpZWxkPVwiYWN0b3JzLnJhd1wiIHNpemU9ezEwfS8+XG4gICAgICAgICAgICA8UmVmaW5lbWVudExpc3RGaWx0ZXIgdHJhbnNsYXRpb25zPXt7XCJmYWNldHMudmlld19tb3JlXCI6XCJWaWV3IG1vcmUgd3JpdGVyc1wifX0gaWQ9XCJ3cml0ZXJzXCIgdGl0bGU9XCJXcml0ZXJzXCIgZmllbGQ9XCJ3cml0ZXJzLnJhd1wiIG9wZXJhdG9yPVwiT1JcIiBzaXplPXsxMH0vPlxuICAgICAgICAgICAgPFJlZmluZW1lbnRMaXN0RmlsdGVyIGlkPVwiY291bnRyaWVzXCIgdGl0bGU9XCJDb3VudHJpZXNcIiBmaWVsZD1cImNvdW50cmllcy5yYXdcIiBvcGVyYXRvcj1cIk9SXCIgc2l6ZT17MTB9Lz5cbiAgICAgICAgICAgIDxOdW1lcmljUmVmaW5lbWVudExpc3RGaWx0ZXIgaWQ9XCJydW50aW1lTWludXRlc1wiIHRpdGxlPVwiTGVuZ3RoXCIgZmllbGQ9XCJydW50aW1lTWludXRlc1wiIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAge3RpdGxlOlwiQWxsXCJ9LFxuICAgICAgICAgICAgICB7dGl0bGU6XCJ1cCB0byAyMFwiLCBmcm9tOjAsIHRvOjIwfSxcbiAgICAgICAgICAgICAge3RpdGxlOlwiMjEgdG8gNjBcIiwgZnJvbToyMSwgdG86NjB9LFxuICAgICAgICAgICAgICB7dGl0bGU6XCI2MCBvciBtb3JlXCIsIGZyb206NjEsIHRvOjEwMDB9XG4gICAgICAgICAgICBdfS8+XG4gICAgICAgICAgPC9TaWRlQmFyPlxuICAgICAgICAgIDxMYXlvdXRSZXN1bHRzPlxuICAgICAgICAgICAgPEFjdGlvbkJhcj5cblxuICAgICAgICAgICAgICA8QWN0aW9uQmFyUm93PlxuICAgICAgICAgICAgICAgIDxIaXRzU3RhdHMgdHJhbnNsYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICBcImhpdHN0YXRzLnJlc3VsdHNfZm91bmRcIjpcIntoaXRDb3VudH0gcmVzdWx0cyBmb3VuZFwiXG4gICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoZXJUb2dnbGUvPlxuICAgICAgICAgICAgICAgIDxTb3J0aW5nU2VsZWN0b3Igb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAge2xhYmVsOlwiUmVsZXZhbmNlXCIsIGZpZWxkOlwiX3Njb3JlXCIsIG9yZGVyOlwiZGVzY1wifSxcbiAgICAgICAgICAgICAgICAgIHtsYWJlbDpcIkxhdGVzdCBSZWxlYXNlc1wiLCBmaWVsZDpcInJlbGVhc2VkXCIsIG9yZGVyOlwiZGVzY1wifSxcbiAgICAgICAgICAgICAgICAgIHtsYWJlbDpcIkVhcmxpZXN0IFJlbGVhc2VzXCIsIGZpZWxkOlwicmVsZWFzZWRcIiwgb3JkZXI6XCJhc2NcIn1cbiAgICAgICAgICAgICAgICBdfS8+XG4gICAgICAgICAgICAgIDwvQWN0aW9uQmFyUm93PlxuXG4gICAgICAgICAgICAgIDxBY3Rpb25CYXJSb3c+XG4gICAgICAgICAgICAgICAgPEdyb3VwZWRTZWxlY3RlZEZpbHRlcnMvPlxuICAgICAgICAgICAgICAgIDxSZXNldEZpbHRlcnMvPlxuICAgICAgICAgICAgICA8L0FjdGlvbkJhclJvdz5cblxuICAgICAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgICAgICA8Vmlld1N3aXRjaGVySGl0c1xuICAgICAgICAgICAgICAgIGhpdHNQZXJQYWdlPXsxMn0gaGlnaGxpZ2h0RmllbGRzPXtbXCJ0aXRsZVwiLFwicGxvdFwiXX1cbiAgICAgICAgICAgICAgICBzb3VyY2VGaWx0ZXI9e1tcInBsb3RcIiwgXCJ0aXRsZVwiLCBcInBvc3RlclwiLCBcImltZGJJZFwiLCBcImltZGJSYXRpbmdcIiwgXCJ5ZWFyXCJdfVxuICAgICAgICAgICAgICAgIGhpdENvbXBvbmVudHM9e1tcbiAgICAgICAgICAgICAgICAgIHtrZXk6XCJncmlkXCIsIHRpdGxlOlwiR3JpZFwiLCBpdGVtQ29tcG9uZW50Ok1vdmllSGl0c0dyaWRJdGVtLCBkZWZhdWx0T3B0aW9uOnRydWV9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzY3JvbGxUbz1cImJvZHlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxOb0hpdHMgc3VnZ2VzdGlvbnNGaWVsZD17XCJ0aXRsZVwifS8+XG4gICAgICAgICAgICA8UGFnaW5hdGlvbiBzaG93TnVtYmVycz17dHJ1ZX0vPlxuICAgICAgICAgIDwvTGF5b3V0UmVzdWx0cz5cblxuICAgICAgICAgIDwvTGF5b3V0Qm9keT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1NlYXJjaGtpdFByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBR0E7Ozs7O0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBT0E7QUFQQTtBQU9BOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFPQTtBQVBBO0FBT0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFHQTs7QUFOQTtBQVFBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFPQTtBQVBBOzs7Ozs7QUFsRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9