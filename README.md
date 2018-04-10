# insert-analytics-elements

A small utility library to programmatically insert analytics elements into the DOM.

## Installation

```bash
# npm
npm i insert-analytics-elements
# yarn
yarn add insert-analytics-elements
```

## Included Providers

* [Google Analytics](#Google-Analytics)
* [Google Analytics with async](#Google-Analytics-with-async)
* [Google Tag Manager](#Google-Tag-Manager)

## Usage

### Google Analytics

```javascript
// JavaScript
const googleAnalytics = require('insert-analytics-elements/googleAnalytics');
googleAnalytics.insertAnalyticsElements('UA-XXXXX-X')

// TypeScript
import insertAnalyticsElements from 'insert-analytics-elements/googleAnalytics';
insertAnalyticsElements('UA-XXXXX-X');
```

### Google Analytics with async

```javascript
// JavaScript
const googleAnalyticsAsync = require('insert-analytics-elements/googleAnalytics/async');
googleAnalyticsAsync.insertAnalyticsElements('UA-XXXXX-X')

// TypeScript
import insertAnalyticsElements from 'insert-analytics-elements/googleAnalytics/async';
insertAnalyticsElements('UA-XXXXX-X');
```

### Google Tag Manager

```javascript
// JavaScript
const googleTagManager = require('insert-analytics-elements/googleTagManager');
googleTagManager.insertAnalyticsElements('GTM-XXXX')

// TypeScript
import insertAnalyticsElements from 'insert-analytics-elements/googleTagManager';
insertAnalyticsElements('GTM-XXXX');
```