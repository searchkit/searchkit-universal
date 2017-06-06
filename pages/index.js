import { SearchkitManager,SearchkitProvider,
  SearchBox, RefinementListFilter, Pagination,
  HierarchicalMenuFilter, HitsStats, SortingSelector, NoHits,
  ResetFilters, RangeFilter, NumericRefinementListFilter,
  ViewSwitcherHits, ViewSwitcherToggle, DynamicRangeFilter,
  InputFilter, GroupedSelectedFilters, AccessorManager,
  Layout, TopBar, LayoutBody, LayoutResults, Hits,
  ActionBar, ActionBarRow, SideBar } from 'searchkit'

var ReactDOMServer = require('react-dom/server')
import React from 'react'

var searchkit

const MovieHitsGridItem = (props) => {
  return (
    <div>hi</div>
  )
}

const host = "http://demo.searchkit.co/api/movies"


let searchCode =  (searchkit)=> {
  return (
    <SearchkitProvider searchkit={searchkit}>
      <Layout>
        <TopBar>
          <div className="my-logo">Searchkit Acme co</div>
          <SearchBox autofocus={true} searchOnChange={true} prefixQueryFields={["actors^1","type^2","languages","title^10"]}/>
        </TopBar>

      <LayoutBody>

        <SideBar>
          <HierarchicalMenuFilter fields={["type.raw", "genres.raw"]} title="Categories" id="categories"/>
          <DynamicRangeFilter field="metaScore" id="metascore" title="Metascore" rangeFormatter={(count)=> count + "*"}/>
          <RangeFilter min={0} max={10} field="imdbRating" id="imdbRating" title="IMDB Rating" showHistogram={true}/>
          <InputFilter id="writers" searchThrottleTime={500} title="Writers" placeholder="Search writers" searchOnChange={true} queryFields={["writers"]} />
          <RefinementListFilter id="actors" title="Actors" field="actors.raw" size={10}/>
          <RefinementListFilter translations={{"facets.view_more":"View more writers"}} id="writers" title="Writers" field="writers.raw" operator="OR" size={10}/>
          <RefinementListFilter id="countries" title="Countries" field="countries.raw" operator="OR" size={10}/>
          <NumericRefinementListFilter id="runtimeMinutes" title="Length" field="runtimeMinutes" options={[
            {title:"All"},
            {title:"up to 20", from:0, to:20},
            {title:"21 to 60", from:21, to:60},
            {title:"60 or more", from:61, to:1000}
          ]}/>
        </SideBar>
        <LayoutResults>
          <ActionBar>

            <ActionBarRow>
              <HitsStats translations={{
                "hitstats.results_found":"{hitCount} results found"
              }}/>
              <ViewSwitcherToggle/>
              <SortingSelector options={[
                {label:"Relevance", field:"_score", order:"desc"},
                {label:"Latest Releases", field:"released", order:"desc"},
                {label:"Earliest Releases", field:"released", order:"asc"}
              ]}/>
            </ActionBarRow>

            <ActionBarRow>
              <GroupedSelectedFilters/>
              <ResetFilters/>
            </ActionBarRow>

          </ActionBar>
          <Hits scrollTo={false}
            hitsPerPage={12}
            highlightFields={["title","plot"]}
            itemComponent={MovieHitsGridItem}/>
          <NoHits suggestionsField={"title"}/>
          <Pagination showNumbers={true}/>
        </LayoutResults>

        </LayoutBody>
      </Layout>
    </SearchkitProvider>
  )
}
export default class MainPage extends React.Component {

  constructor(props) {
    super(props)
    console.log("constructor")
    if(searchkit){
      this.searchkit = searchkit
      searchkit.accessors = new AccessorManager()
      searchkit.accessors.add = function(accessor) {
        accessor.results = props.results
        return AccessorManager.prototype.add.call(
          searchkit.accessors, accessor)
      }
      console.log('hits', searchkit.getHits())

    } else {
      this.searchkit = new SearchkitManager(host, {
        useHistory: false,
        searchOnLoad:false,
        getLocation: () => {
          search:""
        }
      })
      this.searchkit.setupListeners = function(){}
      if(props.results){
        this.searchkit.results = props.results
        this.searchkit.initialLoading = false
        this.searchkit.accessors.setResults(props.results)
      }
      if(props.state){
        this.searchkit.state = props.state
      }
    }


    // console.log(this.searchkit)
  }
  componentWillMount(){
    // console.log("HI")
    // setTimeout(()=> {
    //   this.searchkit.onResponseChange()
    // }, 2000)
  }

  static async getInitialProps(props) {
    const { pathname, query } = props
    searchkit = new SearchkitManager(host, {
      useHistory: false,
      getLocation: () => '/'
    })
    ReactDOMServer.renderToString(searchCode(searchkit))
    searchkit.performSearch()
    console.log("getInitialProps")
    // console.log(searchkit)
    return new Promise((resolve, reject) => {
      searchkit.addResultsListener((results)=> {
        resolve({results, state:searchkit.state})
      })
    })
  }

  render() {
    // console.log(this.searchkit)
    return (
      searchCode(this.searchkit)
    )
  }
}
