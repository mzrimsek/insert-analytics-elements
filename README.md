# insert-analytics-elements

[![Build Status](https://travis-ci.org/mzrimsek/insert-analytics-elements.svg?branch=master)](https://travis-ci.org/mzrimsek/insert-analytics-elements)

A small utility library to programmatically insert analytics elements into the DOM.

## Installation

```bash
# npm
npm i insert-analytics-elements
# yarn
yarn add insert-analytics-elements
```

## Included Providers

* [Google Analytics](#google-analytics)
    * [Documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
* [Google Analytics with async](#google-analytics-with-async)
    * [Documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
* [Google Analytics with gtag](#google-analytics-with-gtag)
    * [Documentation](https://support.google.com/analytics/answer/1008080)
* [Google Tag Manager](#google-tag-manager)
    * [Documentation](https://developers.google.com/tag-manager/quickstart)

## Usage

### Google Analytics

```javascript
// JavaScript
const googleAnalytics = require('insert-analytics-elements/googleAnalytics');
googleAnalytics.insertAnalyticsElements('UA-XXXXX-X')

// TypeScript
import { insertAnalyticsElements } from 'insert-analytics-elements/googleAnalytics';
insertAnalyticsElements('UA-XXXXX-X');
```

### Google Analytics with Async

```javascript
// JavaScript
const googleAnalyticsAsync = require('insert-analytics-elements/googleAnalytics/async');
googleAnalyticsAsync.insertAnalyticsElements('UA-XXXXX-X')

// TypeScript
import { insertAnalyticsElements } from 'insert-analytics-elements/googleAnalytics/async';
insertAnalyticsElements('UA-XXXXX-X');
```

### Google Analytics with gtag

```javascript
// JavaScript
const googleAnalyticsGtag = require('insert-analytics-elements/googleAnalytics/gtag');
googleAnalyticsGtag.insertAnalyticsElements('UA-XXXXX-X')

// TypeScript
import { insertAnalyticsElements } from 'insert-analytics-elements/googleAnalytics/gtag';
insertAnalyticsElements('UA-XXXXX-X');
```

### Google Tag Manager

```javascript
// JavaScript
const googleTagManager = require('insert-analytics-elements/googleTagManager');
googleTagManager.insertAnalyticsElements('GTM-XXXX')

// TypeScript
import { insertAnalyticsElements } from 'insert-analytics-elements/googleTagManager';
insertAnalyticsElements('GTM-XXXX');
```