/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'XXXX',
  'XXXX',
);

const search = instantsearch({
  indexName: 'QAGOMA_Beta_RC2_Test',
  searchClient,
  searchFunction(helper) {
    const container = document.querySelector('#hits');
    container.style.display = helper.state.query === '' ? 'none' : '';

    helper.search();
  }
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

]);

search.start();
