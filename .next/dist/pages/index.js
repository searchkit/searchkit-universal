'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _searchkit = require('searchkit');

var _react = require('react');

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