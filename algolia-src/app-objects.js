/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'XXXX',
  'XXXX'
);

const search = instantsearch({
  indexName: 'QAGOMA_Beta_RC2_Test',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search the artwork catalogue',
    autofocus: true,
    searchAsYouType: true,
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <article>
        <a href="{{URL}}">
          <img src="{{Image reference}}" class="card-img-top" align="left" alt="Image of the artwork: {{Name}}" />
        </a>
        <p class="hit-name">
          <a href="{{URL}}">
            <em>{{#helpers.highlight}}{ "attribute": "Name" }{{/helpers.highlight}}</em> {{Date created}}
          </a>
          <br><br>
          {{Linked entities}}<br>
        </p>
      </article>     
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  }),

  instantsearch.widgets.stats({
    container: '#stats',
  }),

  instantsearch.widgets.hitsPerPage({
  container: '#hits-per-page',
  items: [
    { label: '9 results per page', value: 9 },
    { label: '18 results per page', value: 18, default: true },
    { label: '27 results per page', value: 27 },
    { label: '36 results per page', value: 36 },
  ],
  }),

  instantsearch.widgets.refinementList({
    container: '#facet3',
    attribute: 'Place created',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search place created',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet10',
    attribute: 'Department',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search collection area',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet11',
    attribute: 'Type',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet12',
    attribute: 'Secondary type category',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search subtype',
    showMore: true,
  }),
]);

search.start();
