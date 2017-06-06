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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wMWQ3ZDE4MTI0N2YwN2M3Yzk0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hraXRNYW5hZ2VyLFNlYXJjaGtpdFByb3ZpZGVyLFxuICBTZWFyY2hCb3gsIFJlZmluZW1lbnRMaXN0RmlsdGVyLCBQYWdpbmF0aW9uLFxuICBIaWVyYXJjaGljYWxNZW51RmlsdGVyLCBIaXRzU3RhdHMsIFNvcnRpbmdTZWxlY3RvciwgTm9IaXRzLFxuICBSZXNldEZpbHRlcnMsIFJhbmdlRmlsdGVyLCBOdW1lcmljUmVmaW5lbWVudExpc3RGaWx0ZXIsXG4gIFZpZXdTd2l0Y2hlckhpdHMsIFZpZXdTd2l0Y2hlclRvZ2dsZSwgRHluYW1pY1JhbmdlRmlsdGVyLFxuICBJbnB1dEZpbHRlciwgR3JvdXBlZFNlbGVjdGVkRmlsdGVycywgQWNjZXNzb3JNYW5hZ2VyLFxuICBMYXlvdXQsIFRvcEJhciwgTGF5b3V0Qm9keSwgTGF5b3V0UmVzdWx0cywgSGl0cyxcbiAgQWN0aW9uQmFyLCBBY3Rpb25CYXJSb3csIFNpZGVCYXIgfSBmcm9tICdzZWFyY2hraXQnXG5cbnZhciBSZWFjdERPTVNlcnZlciA9IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG52YXIgc2VhcmNoa2l0XG5cbmNvbnN0IE1vdmllSGl0c0dyaWRJdGVtID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5oaTwvZGl2PlxuICApXG59XG5cbmNvbnN0IGhvc3QgPSBcImh0dHA6Ly9kZW1vLnNlYXJjaGtpdC5jby9hcGkvbW92aWVzXCJcblxuXG5sZXQgc2VhcmNoQ29kZSA9ICAoc2VhcmNoa2l0KT0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoa2l0UHJvdmlkZXIgc2VhcmNoa2l0PXtzZWFyY2hraXR9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPFRvcEJhcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWxvZ29cIj5TZWFyY2hraXQgQWNtZSBjbzwvZGl2PlxuICAgICAgICAgIDxTZWFyY2hCb3ggYXV0b2ZvY3VzPXt0cnVlfSBzZWFyY2hPbkNoYW5nZT17dHJ1ZX0gcHJlZml4UXVlcnlGaWVsZHM9e1tcImFjdG9yc14xXCIsXCJ0eXBlXjJcIixcImxhbmd1YWdlc1wiLFwidGl0bGVeMTBcIl19Lz5cbiAgICAgICAgPC9Ub3BCYXI+XG5cbiAgICAgIDxMYXlvdXRCb2R5PlxuXG4gICAgICAgIDxTaWRlQmFyPlxuICAgICAgICAgIDxIaWVyYXJjaGljYWxNZW51RmlsdGVyIGZpZWxkcz17W1widHlwZS5yYXdcIiwgXCJnZW5yZXMucmF3XCJdfSB0aXRsZT1cIkNhdGVnb3JpZXNcIiBpZD1cImNhdGVnb3JpZXNcIi8+XG4gICAgICAgICAgPER5bmFtaWNSYW5nZUZpbHRlciBmaWVsZD1cIm1ldGFTY29yZVwiIGlkPVwibWV0YXNjb3JlXCIgdGl0bGU9XCJNZXRhc2NvcmVcIiByYW5nZUZvcm1hdHRlcj17KGNvdW50KT0+IGNvdW50ICsgXCIqXCJ9Lz5cbiAgICAgICAgICA8UmFuZ2VGaWx0ZXIgbWluPXswfSBtYXg9ezEwfSBmaWVsZD1cImltZGJSYXRpbmdcIiBpZD1cImltZGJSYXRpbmdcIiB0aXRsZT1cIklNREIgUmF0aW5nXCIgc2hvd0hpc3RvZ3JhbT17dHJ1ZX0vPlxuICAgICAgICAgIDxJbnB1dEZpbHRlciBpZD1cIndyaXRlcnNcIiBzZWFyY2hUaHJvdHRsZVRpbWU9ezUwMH0gdGl0bGU9XCJXcml0ZXJzXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggd3JpdGVyc1wiIHNlYXJjaE9uQ2hhbmdlPXt0cnVlfSBxdWVyeUZpZWxkcz17W1wid3JpdGVyc1wiXX0gLz5cbiAgICAgICAgICA8UmVmaW5lbWVudExpc3RGaWx0ZXIgaWQ9XCJhY3RvcnNcIiB0aXRsZT1cIkFjdG9yc1wiIGZpZWxkPVwiYWN0b3JzLnJhd1wiIHNpemU9ezEwfS8+XG4gICAgICAgICAgPFJlZmluZW1lbnRMaXN0RmlsdGVyIHRyYW5zbGF0aW9ucz17e1wiZmFjZXRzLnZpZXdfbW9yZVwiOlwiVmlldyBtb3JlIHdyaXRlcnNcIn19IGlkPVwid3JpdGVyc1wiIHRpdGxlPVwiV3JpdGVyc1wiIGZpZWxkPVwid3JpdGVycy5yYXdcIiBvcGVyYXRvcj1cIk9SXCIgc2l6ZT17MTB9Lz5cbiAgICAgICAgICA8UmVmaW5lbWVudExpc3RGaWx0ZXIgaWQ9XCJjb3VudHJpZXNcIiB0aXRsZT1cIkNvdW50cmllc1wiIGZpZWxkPVwiY291bnRyaWVzLnJhd1wiIG9wZXJhdG9yPVwiT1JcIiBzaXplPXsxMH0vPlxuICAgICAgICAgIDxOdW1lcmljUmVmaW5lbWVudExpc3RGaWx0ZXIgaWQ9XCJydW50aW1lTWludXRlc1wiIHRpdGxlPVwiTGVuZ3RoXCIgZmllbGQ9XCJydW50aW1lTWludXRlc1wiIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHt0aXRsZTpcIkFsbFwifSxcbiAgICAgICAgICAgIHt0aXRsZTpcInVwIHRvIDIwXCIsIGZyb206MCwgdG86MjB9LFxuICAgICAgICAgICAge3RpdGxlOlwiMjEgdG8gNjBcIiwgZnJvbToyMSwgdG86NjB9LFxuICAgICAgICAgICAge3RpdGxlOlwiNjAgb3IgbW9yZVwiLCBmcm9tOjYxLCB0bzoxMDAwfVxuICAgICAgICAgIF19Lz5cbiAgICAgICAgPC9TaWRlQmFyPlxuICAgICAgICA8TGF5b3V0UmVzdWx0cz5cbiAgICAgICAgICA8QWN0aW9uQmFyPlxuXG4gICAgICAgICAgICA8QWN0aW9uQmFyUm93PlxuICAgICAgICAgICAgICA8SGl0c1N0YXRzIHRyYW5zbGF0aW9ucz17e1xuICAgICAgICAgICAgICAgIFwiaGl0c3RhdHMucmVzdWx0c19mb3VuZFwiOlwie2hpdENvdW50fSByZXN1bHRzIGZvdW5kXCJcbiAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICA8Vmlld1N3aXRjaGVyVG9nZ2xlLz5cbiAgICAgICAgICAgICAgPFNvcnRpbmdTZWxlY3RvciBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAge2xhYmVsOlwiUmVsZXZhbmNlXCIsIGZpZWxkOlwiX3Njb3JlXCIsIG9yZGVyOlwiZGVzY1wifSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6XCJMYXRlc3QgUmVsZWFzZXNcIiwgZmllbGQ6XCJyZWxlYXNlZFwiLCBvcmRlcjpcImRlc2NcIn0sXG4gICAgICAgICAgICAgICAge2xhYmVsOlwiRWFybGllc3QgUmVsZWFzZXNcIiwgZmllbGQ6XCJyZWxlYXNlZFwiLCBvcmRlcjpcImFzY1wifVxuICAgICAgICAgICAgICBdfS8+XG4gICAgICAgICAgICA8L0FjdGlvbkJhclJvdz5cblxuICAgICAgICAgICAgPEFjdGlvbkJhclJvdz5cbiAgICAgICAgICAgICAgPEdyb3VwZWRTZWxlY3RlZEZpbHRlcnMvPlxuICAgICAgICAgICAgICA8UmVzZXRGaWx0ZXJzLz5cbiAgICAgICAgICAgIDwvQWN0aW9uQmFyUm93PlxuXG4gICAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgICAgPEhpdHMgc2Nyb2xsVG89e2ZhbHNlfVxuICAgICAgICAgICAgaGl0c1BlclBhZ2U9ezEyfVxuICAgICAgICAgICAgaGlnaGxpZ2h0RmllbGRzPXtbXCJ0aXRsZVwiLFwicGxvdFwiXX1cbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQ9e01vdmllSGl0c0dyaWRJdGVtfS8+XG4gICAgICAgICAgPE5vSGl0cyBzdWdnZXN0aW9uc0ZpZWxkPXtcInRpdGxlXCJ9Lz5cbiAgICAgICAgICA8UGFnaW5hdGlvbiBzaG93TnVtYmVycz17dHJ1ZX0vPlxuICAgICAgICA8L0xheW91dFJlc3VsdHM+XG5cbiAgICAgICAgPC9MYXlvdXRCb2R5PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9TZWFyY2hraXRQcm92aWRlcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RvclwiKVxuICAgIGlmKHNlYXJjaGtpdCl7XG4gICAgICB0aGlzLnNlYXJjaGtpdCA9IHNlYXJjaGtpdFxuICAgICAgc2VhcmNoa2l0LmFjY2Vzc29ycyA9IG5ldyBBY2Nlc3Nvck1hbmFnZXIoKVxuICAgICAgc2VhcmNoa2l0LmFjY2Vzc29ycy5hZGQgPSBmdW5jdGlvbihhY2Nlc3Nvcikge1xuICAgICAgICBhY2Nlc3Nvci5yZXN1bHRzID0gcHJvcHMucmVzdWx0c1xuICAgICAgICByZXR1cm4gQWNjZXNzb3JNYW5hZ2VyLnByb3RvdHlwZS5hZGQuY2FsbChcbiAgICAgICAgICBzZWFyY2hraXQuYWNjZXNzb3JzLCBhY2Nlc3NvcilcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdoaXRzJywgc2VhcmNoa2l0LmdldEhpdHMoKSlcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaGtpdCA9IG5ldyBTZWFyY2hraXRNYW5hZ2VyKGhvc3QsIHtcbiAgICAgICAgdXNlSGlzdG9yeTogZmFsc2UsXG4gICAgICAgIHNlYXJjaE9uTG9hZDpmYWxzZSxcbiAgICAgICAgZ2V0TG9jYXRpb246ICgpID0+IHtcbiAgICAgICAgICBzZWFyY2g6XCJcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5zZWFyY2hraXQuc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe31cbiAgICAgIGlmKHByb3BzLnJlc3VsdHMpe1xuICAgICAgICB0aGlzLnNlYXJjaGtpdC5yZXN1bHRzID0gcHJvcHMucmVzdWx0c1xuICAgICAgICB0aGlzLnNlYXJjaGtpdC5pbml0aWFsTG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2VhcmNoa2l0LmFjY2Vzc29ycy5zZXRSZXN1bHRzKHByb3BzLnJlc3VsdHMpXG4gICAgICB9XG4gICAgICBpZihwcm9wcy5zdGF0ZSl7XG4gICAgICAgIHRoaXMuc2VhcmNoa2l0LnN0YXRlID0gcHJvcHMuc3RhdGVcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoa2l0KVxuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSElcIilcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT4ge1xuICAgIC8vICAgdGhpcy5zZWFyY2hraXQub25SZXNwb25zZUNoYW5nZSgpXG4gICAgLy8gfSwgMjAwMClcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcHJvcHNcbiAgICBzZWFyY2hraXQgPSBuZXcgU2VhcmNoa2l0TWFuYWdlcihob3N0LCB7XG4gICAgICB1c2VIaXN0b3J5OiBmYWxzZSxcbiAgICAgIGdldExvY2F0aW9uOiAoKSA9PiAnLydcbiAgICB9KVxuICAgIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKHNlYXJjaENvZGUoc2VhcmNoa2l0KSlcbiAgICBzZWFyY2hraXQucGVyZm9ybVNlYXJjaCgpXG4gICAgY29uc29sZS5sb2coXCJnZXRJbml0aWFsUHJvcHNcIilcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hraXQpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNlYXJjaGtpdC5hZGRSZXN1bHRzTGlzdGVuZXIoKHJlc3VsdHMpPT4ge1xuICAgICAgICByZXNvbHZlKHtyZXN1bHRzLCBzdGF0ZTpzZWFyY2hraXQuc3RhdGV9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoa2l0KVxuICAgIHJldHVybiAoXG4gICAgICBzZWFyY2hDb2RlKHRoaXMuc2VhcmNoa2l0KVxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBT0E7QUFQQTtBQU9BOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBSEE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBT0E7QUFQQTs7QUFwREE7QUFDQTtBQTJEQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBUkE7QUFXQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFOQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFsQ0E7QUFrQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQW9CQTtBQUNBO0FBQ0E7Ozs7O0FBcEJBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFIQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2REE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=