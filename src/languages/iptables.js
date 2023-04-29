/*
Language: Iptables
Author: Dorian CHECCONI <contact@dorianchecconi.fr>
Description: Iptables is a firewall program under linux.
Website: https://linux.die.net/man/8/iptables
Category: config
*/

export default function(hljs) {

  const KEYWORDS = [
    'ACCEPT',
    'DROP',
    'REJECT',
    'RELATED',
    'ESTABLISHED',
    'SYN',
    'RST',
    'TCPMSS',
    'MARK',
    'RETURN'
  ];

  return {
    name: 'Iptables',
    aliases: ['iptables'],
    case_insensitive: false,
    keywords: KEYWORDS,
    contains: [
      {
        // Concerns the parameter of the commands
        scope: 'attribute',
        match: / -[a-z]| --[a-z-]+/
      },
      {
        // Action of commands
        scope: 'type',
        match: /-[A-Z]/
      },
      {
        // Character strings
        scope: 'string',
        begin: '"', end: '"'
      },
      hljs.HASH_COMMENT_MODE,
      {
        // IPv6
        scope: 'number',
        match: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
      },
      {
        // IPv4
        scope: 'number',
        match: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
      },
      hljs.inherit(hljs.NUMBER_MODE, { begin: /\b\d+[dhwm]?/ }),
      {
        scope: 'section',
        match: /:[A-Z-]+([0-9]+)?/
      },
      {
        // Type of traffic
        scope: "variable",
        match: /[A-Z-]{2,}([0-9]+)?/,
        keywords: KEYWORDS
      }
    ]
  };
}
