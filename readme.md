# BuddyPress Hooks Reference

All the actions and filters from BuddyPress core in machine-readable JSON format.

Last updated for BuddyPress 10.0.0.

## Installation

* As a Composer package for use in PHP:

```bash
  composer require renatonascalves/bp-hooks
```

* As an npm package for use in JavaScript or TypeScript:

```bash
  npm install @renatonascalves/bp-hooks
```

## Usage in PHP

```php
// Get hooks as JSON:
$actions_json = file_get_contents( 'vendor/renatonascalves/bp-hooks/hooks/actions.json' );
$filters_json = file_get_contents( 'vendor/renatonascalves/bp-hooks/hooks/filters.json' );

// Convert hooks to PHP:
$actions = json_decode( $actions_json, true )['hooks'];
$filters = json_decode( $filters_json, true )['hooks'];

// Search for filters matching a string:
$search = 'permalink';
$results = array_filter( $filters, function( array $hook ) use ( $search ) {
  return ( false !== strpos( $hook['name'], $search ) );
} );

var_dump( $results );
```

## Usage in JavaScript

```js
// Get hooks as array of objects:
const actions = require('@renatonascalves/bp-hooks/hooks/actions.json').hooks;
const filters = require('@renatonascalves/bp-hooks/hooks/filters.json').hooks;

// Search for actions matching a string:
const search = 'menu';
const results = actions.filter( hook => ( null !== hook.name.match( search ) ) );

console.log(results);
```

## Importing in TypeScript

```typescript
import { hooks as actions } from '@renatonascalves/bp-hooks/hooks/actions.json';
import { hooks as filters } from '@renatonascalves/bp-hooks/hooks/filters.json';
```

Interfaces for the components of the hooks can be imported too, if you need them:

```typescript
import { Hooks, Hook, Doc, Tags, Tag } from '@renatonascalves/bp-hooks/interface';
```

## Actions, Filters, and Schemas

* The actions can be found in [hooks/actions.json](hooks/actions.json)
* The filters can be found in [hooks/filters.json](hooks/filters.json)
* The JSON schema can be found in [hooks/schema.json](hooks/schema.json)
* The TypeScript interfaces can be found in [interface/index.d.ts](interface/index.d.ts)

## Regenerating the Hook Files

Install the dependencies:

```bash
  npm i && composer i
```

Then run:

```bash
  composer generate
```

Some scripts are available for checking the data:

* Check everything:

  ```bash
  npm run check
  ```

* Find hooks with missing `@since` tags:

  ```bash
  jq '.hooks[] | . as $d | .doc .tags | map(.name) | select( contains(["since"]) | not ) | $d' hooks/filters.json
  ```

  ```bash
  jq '.hooks[] | . as $d | .doc .tags | map(.name) | select( contains(["since"]) | not ) | $d' hooks/actions.json
  ```

* Find hooks with incorrect number of `@param` tags (not completely accurate, not sure why):

  ```bash
  jq '.hooks[] | select( .args == ( .doc.tags | map(.name) | select( contains(["param"]) ) | length ) ) | .name' hooks/filters.json
  ```

  ```bash
  jq '.hooks[] | select( .args == ( .doc.tags | map(.name) | select( contains(["param"]) ) | length ) ) | .name' hooks/actions.json
  ```
