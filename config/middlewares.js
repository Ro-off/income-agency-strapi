module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: { "script-src": ["'self'", "'unsafe-inline'", "maps.googleapis.com"],  "img-src":["'self'", "data:", "maps.gstatic.com", "maps.googleapis.com"], "connect-src":["'self'", "http:"] },
        // "connect-src":["'self'", "http:"] 
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  {
  name: "strapi::public",
  config: {
    defer: true,
  },
},
];
