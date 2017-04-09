# Semantic-UI-Calendar

Calendar module for Semantic UI. See https://jsbin.com/ruqakehefa/ for example usage.

This was originally a PR for Semantic UI: https://github.com/Semantic-Org/Semantic-UI/pull/3256.

## Installation

Install using bower:

```
bower install --save semantic-ui-calendar
```

Install using npm:

```
npm install --save semantic-ui-calendar
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

## Behavior

These functions can be called the same way you call Semantic UI behavior functions:

```javascript
$('#mycalendar').calendar('behavior name', argumentOne, argumentTwo);
```

Behavior | Description
--- | ---
`refresh` | Refresh the calendar.
`popup(arguments)` | Call the popup module (e.g. passing 'show' will show the calendar popup).
`focus` | Focus the calendar input.
`blur` | Blur the calendar input.
`clear` | Clear the selected date.
`get date` | Get the selected date.
`set date(date, updateInput = true, fireChange = true)` | Set the selected date. Pass `false` to `updateInput` to disable updating the input. Pass `false` to `fireChange` to disable the `onChange` callback for this change.
`get mode` | Get the current selection mode (`year`, `month`, `day`, `hour`, `minute`).
`set mode(mode)` | Set the current selection mode (`year`, `month`, `day`, `hour`, `minute`).
`get startDate` | Get the start date for range selection.
`set startDate(date)` | Set the start date for range selection.
`get endDate` | Get the end date for range selection.
`set endDate(date)` | Set the end date for range selection.
`get focusDate` | Get the currently focused date.
`set focusDate(date)` | Set the currently focused date.

## Settings

The following settings are supported by this module:

```javascript
    type: 'datetime',     // picker type, can be 'datetime', 'date', 'time', 'month', or 'year'
    firstDayOfWeek: 0,    // day for first day column (0 = Sunday)
    constantHeight: true, // add rows to shorter months to keep day calendar height consistent (6 rows)
    today: false,         // show a 'today/now' button at the bottom of the calendar
    closable: true,       // close the popup after selecting a date/time
    monthFirst: true,     // month before day when parsing/converting date from/to text
    touchReadonly: true,  // set input to readonly on touch devices
    inline: false,        // create the calendar inline instead of inside a popup
    on: null,             // when to show the popup (defaults to 'focus' for input, 'click' for others)
    initialDate: null,    // date to display initially when no date is selected (null = now)
    startMode: false,     // display mode to start in, can be 'year', 'month', 'day', 'hour', 'minute' (false = 'day')
    minDate: null,        // minimum date/time that can be selected, dates/times before are disabled
    maxDate: null,        // maximum date/time that can be selected, dates/times after are disabled
    ampm: true,           // show am/pm in time mode
    disableYear: false,   // disable year selection mode
    disableMonth: false,  // disable month selection mode
    disableMinute: false, // disable minute selection mode
    formatInput: true,    // format the input text upon input blur and module creation
    startCalendar: null,  // jquery object or selector for another calendar that represents the start date of a date range
    endCalendar: null,    // jquery object or selector for another calendar that represents the end date of a date range
    multiMonth: 1,        // show multiple months when in 'day' mode

    // popup options ('popup', 'on', 'hoverable', and show/hide callbacks are overridden)
    popupOptions: {
      position: 'bottom left',
      lastResort: 'bottom left',
      prefer: 'opposite',
      hideOnScroll: false
    },

    text: {
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Today',
      now: 'Now',
      am: 'AM',
      pm: 'PM'
    },

    formatter: {
      header: function (date, mode, settings) {
        //return a string to show on the header for the given 'date' and 'mode'
      },
      yearHeader: function (date, settings) {
        //return a string to show on the header for the given 'date' in year mode
      },
      monthHeader: function (date, settings) {
        //return a string to show on the header for the given 'date' in month mode
      },
      dayHeader: function (date, settings) {
        //return a string to show on the header for the given 'date' in day mode
      },
      hourHeader: function (date, settings) {
        //return a string to show on the header for the given 'date' in hour mode
      },
      minuteHeader: function (date, settings) {
        //return a string to show on the header for the given 'date' in minute mode
      },
      dayColumnHeader: function (day, settings) {
        //return a abbreviated day string to show above each column in day mode
      },
      datetime: function (date, settings) {
        //return a formatted string representing the date & time of 'date'
      },
      date: function (date, settings) {
        //return a formatted string representing the date of 'date'
      },
      time: function (date, settings, forCalendar) {
        //return a formatted string representing the time of 'date'
      },
      today: function (settings) {
        return settings.type === 'date' ? settings.text.today : settings.text.now;
      },
      cell: function (cell, date, cellOptions) {
        //customize the calendar cell, cellOptions is:
        //{ mode: string, adjacent: boolean, disabled: boolean, active: boolean, today: boolean }
      }
    },

    parser: {
      date: function (text, settings) {
        //return a date parsed from 'text'
      }
    },

    // callback when date changes, return false to cancel the change
    onChange: function (date, text, mode) {
    },

    // callback before show animation, return false to prevent show
    onShow: function () {
    },

    // callback after show animation
    onVisible: function () {
    },

    // callback before hide animation, return false to prevent hide
    onHide: function () {
    },

    // callback after hide animation
    onHidden: function () {
    },

    // is the given date disabled?
    isDisabled: function (date, mode) {
      return false;
    },

    selector: {
      popup: '.ui.popup',
      input: 'input',
      activator: 'input'
    },

    regExp: {
      dateWords: /[^A-Za-z\u00C0-\u024F]+/g,
      dateNumbers: /[^\d:]+/g
    },

    error: {
      popup: 'UI Popup, a required component is not included in this page',
      method: 'The method you called is not defined.'
    },

    className: {
      calendar: 'calendar',
      active: 'active',
      popup: 'ui popup',
      grid: 'ui equal width grid',
      column: 'column',
      table: 'ui celled center aligned unstackable table',
      prev: 'prev link',
      next: 'next link',
      prevIcon: 'chevron left icon',
      nextIcon: 'chevron right icon',
      link: 'link',
      cell: 'link',
      disabledCell: 'disabled',
      adjacentCell: 'adjacent',
      activeCell: 'active',
      rangeCell: 'range',
      focusCell: 'focus',
      todayCell: 'today',
      today: 'today link'
    },

    metadata: {
      date: 'date',
      focusDate: 'focusDate',
      startDate: 'startDate',
      endDate: 'endDate',
      mode: 'mode',
      monthOffset: 'monthOffset'
    }
```
