# IframeMaximizer

This plugin finds all iframes on document which have "maximizer" class and set their height to fit their content, to make them look like a part of the page.

## Getting Started
1. Add a reference to the plugin's script file right above the closing `</body>` tag:
`<script src="scripts/iframemaximizer-0.0.1.min.js"></script>`
2. Start the plugin by calling the following method:
```javascript
<script>
   (function () {
       document.addEventListener('DOMContentLoaded', function () {
           IframeMaximizer.maximize();
           console.log('Page is ready');
       }, false);
   })();
</script>
```
