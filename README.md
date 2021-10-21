# vue-widgets

### Tips and Notes
- @ is a shortcut for v-on: (example: @click is the same as v-on:click)
- v-if takes it out of dom completely if false, and inserts it if true
- v-show uses css (display:block when true display:none when false)
- v-show is better for performance since adding and removing from dom is expensive
- event object is automatically passed as a first argument when an event occurs
- if we pass our own custom arguments into an event, we lose access to the event object since event is the first parameter. We can still access it by adding $event before the custom param. Example: @mouseover="handleEvent($event, 5)"