module.exports = {
  "location-field": {
    enabled: true,
    config: {
      fields: [], // optional
      // You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
      googleMapsApiKey: "AIzaSyD9jNWWETuS1_v__AgIElvrSZ9MyKZafh8",
      // See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
      autocompletionRequestOptions: {
      language: 'uk',
      locationBias: {
        // Географический прямоугольник, ограничивающий область города Сумы в Украине
        south: 50.8984,
        west: 34.7057,
        north: 50.9606,
        east: 34.8599,
      },
      types: ['geocode'],
      componentRestrictions: {
        // country: 'ua',
      },
    strictBounds: true,
      },
    },
  },
  // graphql: {
  //   config: {
  //     endpoint: '/graphql',
  //     shadowCRUD: true,
  //     playgroundAlways: false,
  //     depthLimit: 7,
  //     amountLimit: 100,
  //     apolloServer: {
  //       tracing: false,
  //     },
  //   },
  // },
};

