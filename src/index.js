'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
  // register({ strapi }) {
  //   const extensionService = strapi.plugin('graphql').service('extension');

  //   extensionService.use({
  //     resolversConfig: {
  //       'Query.categories': {
  //         /**
  //          * Querying the Categories content-type
  //          * bypasses the authorization system.
  //          */ 
  //         auth: false
  //       },
  //       'Query.restaurants': {
  //         /**
  //          * Querying the Restaurants content-type
  //          * requires the find permission
  //          * on the 'Address' content-type
  //          * of the 'Address' API
  //          */
  //         auth: {
  //           scope: ['api::address.address.find']
  //         }
  //       },
  //     }
  //   })
  // },
};
