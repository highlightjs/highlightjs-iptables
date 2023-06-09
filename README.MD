# Iptables - a language grammar for highlight.js

## Demo
<img width="512" alt="demo" src="https://user-images.githubusercontent.com/13965280/235311691-5fceccbe-710d-4faf-a391-5e1644f7ef24.png">


## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/iptables.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsIptables = require('highlightjs-iptables');

hljs.registerLanguage("iptables", hljsIptables);
hljs.highlightAll();
```


### Author

Dorian CHECCONI <contact@dorianchecconi.fr>

### Maintainer

Dorian CHECCONI <contact@dorianchecconi.fr>


## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
