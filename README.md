# vue-widgets

### Tips and Notes
- @ is a shortcut for v-on: (example: @click is the same as v-on:click)
- v-if takes it out of dom completely if false, and inserts it if true
- v-show uses css (display:block when true display:none when false)
- v-show is better for performance since adding and removing from dom is expensive
- event object is automatically passed as a first argument when an event occurs