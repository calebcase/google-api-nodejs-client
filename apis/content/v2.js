/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;

/**
 * Content API for Shopping
 *
 * @classdesc Manage product items, inventory, and Merchant Center accounts for Google Shopping.
 * @namespace content
 * @version  v2
 * @variation v2
 * @this Content
 * @param {object=} options Options for Content
 */
function Content(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * content.accounts.custombatch
     *
     * @desc Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
     *
     * @alias content.accounts.custombatch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/accounts/batch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accounts.delete
     *
     * @desc Deletes a Merchant Center sub-account.
     *
     * @alias content.accounts.delete
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The ID of the account.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accounts/' + params.accountId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accounts.get
     *
     * @desc Retrieves a Merchant Center account.
     *
     * @alias content.accounts.get
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The ID of the account.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accounts/' + params.accountId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accounts.insert
     *
     * @desc Creates a Merchant Center sub-account.
     *
     * @alias content.accounts.insert
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accounts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accounts.list
     *
     * @desc Lists the sub-accounts in your Merchant Center account.
     *
     * @alias content.accounts.list
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of accounts to return in the response, used for paging.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accounts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accounts.patch
     *
     * @desc Updates a Merchant Center account. This method supports patch semantics.
     *
     * @alias content.accounts.patch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The ID of the account.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accounts/' + params.accountId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accounts.update
     *
     * @desc Updates a Merchant Center account.
     *
     * @alias content.accounts.update
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The ID of the account.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accounts/' + params.accountId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.accountshipping = {

    /**
     * content.accountshipping.patch
     *
     * @desc Updates the shipping settings of the account. This method supports patch semantics.
     *
     * @alias content.accountshipping.patch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The ID of the account for which to get/update account shipping settings.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accountshipping/' + params.accountId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.accountstatuses = {

    /**
     * content.accountstatuses.custombatch
     *
     *
     *
     * @alias content.accountstatuses.custombatch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/accountstatuses/batch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accountstatuses.get
     *
     * @desc Retrieves the status of a Merchant Center account.
     *
     * @alias content.accountstatuses.get
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The ID of the account.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accountstatuses/' + params.accountId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.accountstatuses.list
     *
     * @desc Lists the statuses of the sub-accounts in your Merchant Center account.
     *
     * @alias content.accountstatuses.list
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of account statuses to return in the response, used for paging.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accountstatuses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.accounttax = {

    /**
     * content.accounttax.patch
     *
     * @desc Updates the tax settings of the account. This method supports patch semantics.
     *
     * @alias content.accounttax.patch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - The ID of the account for which to get/update account tax settings.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/accounttax/' + params.accountId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.datafeeds = {

    /**
     * content.datafeeds.batch
     *
     *
     *
     * @alias content.datafeeds.batch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    batch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/datafeedsNativeBatch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeeds.custombatch
     *
     *
     *
     * @alias content.datafeeds.custombatch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/datafeeds/batch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeeds.delete
     *
     * @desc Deletes a datafeed from your Merchant Center account.
     *
     * @alias content.datafeeds.delete
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datafeedId -
     * @param  {string} params.merchantId -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeeds/' + params.datafeedId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeeds.get
     *
     * @desc Retrieves a datafeed from your Merchant Center account.
     *
     * @alias content.datafeeds.get
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datafeedId -
     * @param  {string} params.merchantId -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeeds/' + params.datafeedId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeeds.insert
     *
     * @desc Registers a datafeed with your Merchant Center account.
     *
     * @alias content.datafeeds.insert
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId -
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeeds',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeeds.list
     *
     * @desc Lists the datafeeds in your Merchant Center account.
     *
     * @alias content.datafeeds.list
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeeds',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeeds.patch
     *
     * @desc Updates a datafeed of your Merchant Center account. This method supports patch semantics.
     *
     * @alias content.datafeeds.patch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datafeedId -
     * @param  {string} params.merchantId -
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeeds/' + params.datafeedId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeeds.update
     *
     * @desc Updates a datafeed of your Merchant Center account.
     *
     * @alias content.datafeeds.update
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datafeedId -
     * @param  {string} params.merchantId -
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeeds/' + params.datafeedId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.datafeedstatuses = {

    /**
     * content.datafeedstatuses.batch
     *
     *
     *
     * @alias content.datafeedstatuses.batch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    batch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/datafeedstatusesNativeBatch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeedstatuses.custombatch
     *
     *
     *
     * @alias content.datafeedstatuses.custombatch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/datafeedstatuses/batch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeedstatuses.get
     *
     * @desc Retrieves the status of a datafeed from your Merchant Center account.
     *
     * @alias content.datafeedstatuses.get
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datafeedId -
     * @param  {string} params.merchantId -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeedstatuses/' + params.datafeedId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.datafeedstatuses.list
     *
     * @desc Lists the statuses of the datafeeds in your Merchant Center account.
     *
     * @alias content.datafeedstatuses.list
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/datafeedstatuses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.inventory = {

    /**
     * content.inventory.custombatch
     *
     * @desc Updates price and availability for multiple products or stores in a single request.
     *
     * @alias content.inventory.custombatch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/inventory/batch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.inventory.set
     *
     * @desc Updates price and availability of a product in your Merchant Center account.
     *
     * @alias content.inventory.set
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.productId - The ID of the product for which to update price and availability.
     * @param  {string} params.storeCode - The code of the store for which to update price and availability. Use online to update price and availability of an online product.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    set: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/inventory/' + params.storeCode + '/products/' + params.productId,
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId', 'storeCode', 'productId'],
        pathParams: ['merchantId', 'productId', 'storeCode'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.products = {

    /**
     * content.products.custombatch
     *
     * @desc Retrieves, inserts, and deletes multiple products in a single request.
     *
     * @alias content.products.custombatch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.dryRun - Flag to run the request in dry-run mode.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/products/batch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.products.delete
     *
     * @desc Deletes a product from your Merchant Center account.
     *
     * @alias content.products.delete
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.dryRun - Flag to run the request in dry-run mode.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.productId - The ID of the product.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/products/' + params.productId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.products.get
     *
     * @desc Retrieves a product from your Merchant Center account.
     *
     * @alias content.products.get
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.productId - The ID of the product.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/products/' + params.productId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.products.insert
     *
     * @desc Uploads a product to your Merchant Center account.
     *
     * @alias content.products.insert
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.dryRun - Flag to run the request in dry-run mode.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/products',
          method: 'POST'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.products.list
     *
     * @desc Lists the products in your Merchant Center account.
     *
     * @alias content.products.list
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of products to return in the response, used for paging.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/products',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.productstatuses = {

    /**
     * content.productstatuses.custombatch
     *
     * @desc Gets the statuses of multiple products in a single request.
     *
     * @alias content.productstatuses.custombatch
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    custombatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/productstatuses/batch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.productstatuses.get
     *
     * @desc Gets the status of a product from your Merchant Center account.
     *
     * @alias content.productstatuses.get
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string} params.productId - The ID of the product.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/productstatuses/' + params.productId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * content.productstatuses.list
     *
     * @desc Lists the statuses of the products in your Merchant Center account.
     *
     * @alias content.productstatuses.list
     * @memberOf! content(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of product statuses to return in the response, used for paging.
     * @param  {string} params.merchantId - The ID of the managing account.
     * @param  {string=} params.pageToken - The token returned by the previous request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/content/v2/' + params.merchantId + '/productstatuses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Content object
 * @type Content
 */
module.exports = Content;