# Drupal 9 Configuration

This repository exists to provide enough materials to rebuild QAGOMA's Collection Online Beta. Note this is very much a WIP and will evolve over time.

## Drupal Components:
 * CI Build File (todo)
 * Data Migration: [separate repository](https://github.com/mostro20/emu-sql-scripts):
    * Version 1 - Manual build of content; Drupal feeds ingest
    * Version 2 - Streamline build to intermediate content database; Drupal Feeds
    * Version 3 - Streamline build to intermediate content database; Drupal Migrate Module
 * Configuration files (exported into Config folder of this repostory)
 * Website source theme (Based on Bootstrap Barrio): https://github.com/mostro20/qagoma_barrio
 * Database backups of development sites (todo)
 * Documentation of creation process (todo)

## Non-Drupal Components
 
### Algolia Search
  * The site currently uses [Algolia](https://www.algolia.com) to power the type-ahead search. This is embeded as a block that uses Algolia Instant Search to saturate and provide search. In the `algolia-src` folder is the `app-simple.js` file that provides the basic search principles (credentials removed) which saturates into the HTML in `index.html`. All this information is included in the file and database exports.
  * Currently updates to the Algolia are done manually via a View that exposes data into a JSON structure, see:
    * `object-structure.json` - standard object artwork JSON file sent to Algolia
    * `creator-structure.json` - standard creator JSON file sent to Algolia
    * `narrative-structure.json` - standard narrative JSON file sent to Algolia
  * If Algolia is continued, ideally data will be sent to Algolia automatically in next version using either the [Drupal Search API Algolia Client](https://www.drupal.org/project/search_api_algolia) or via the [Algolia PHP Client](https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/php/?client=php) or [Algolia JS Client](https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/?client=javascript).

### Image server (high res tiles)

  * TO DO - Not functional yet
  * Cantaloupe image server for tiling (to do)
  * Installed [Cantaloupe Image Server v5.0.2](https://cantaloupe-project.github.io/)
  * Command to start java -Dcantaloupe.config=/path/to/cantaloupe-5.0.2/cantaloupe.properties -jar cantaloupe-5.0.2/cantaloupe-5.0.2.jar 
  * Drupal dependency: OpenSeaDragon `composer require islandora/openseadragon:dev-8.x-1.x` (on GitHub)[https://github.com/Islandora/openseadragon]
  * leaflet an alternative to OpenSeaDragon

### Libraries / 3rd parties

Preferred plugins
  * BeerSlider
  * Video
  * StoryMap.js

Plugins to be determined with best fit
  * Image Gallery
  * Image Zoom
  * SketchFab / Object
