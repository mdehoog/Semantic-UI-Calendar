# Semantic-UI-Calendar

Calendar module for Semantic UI. See https://jsbin.com/ruqakehefa/ for example usage.

This was originally a PR for Semantic UI: https://github.com/Semantic-Org/Semantic-UI/pull/3256.

## Installation

Install using bower:

```
bower install --save semantic-ui-calendar
```

Include javascript and css in html:

```html
<script type="text/javascript" src="/bower_components/semantic-ui-calendar/dist/calendar.min.js"></script>
<link rel="stylesheet" href="/bower_components/semantic-ui-calendar/dist/calendar.min.css" />
```

## Compiling CSS from LESS

If you want to theme the calendar, or change some of the variables from the default theme, you can compile the LESS source using your favourite build tool.

Import the calendar.less file into your app.

```less
@import 'definitions/modules/calendar';
```

Ensure that this module's `src` directory is included when compiling the LESS:

```javascript
  lessOptions: {
    paths: [
      'bower_components/semantic-ui-calendar/src',
      ...
    ]
  }
```
