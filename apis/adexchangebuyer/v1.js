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
 * Ad Exchange Buyer API
 *
 * @classdesc Lets you manage your Ad Exchange Buyer account.
 * @namespace adexchangebuyer
 * @version  v1
 * @variation v1
 * @this Adexchangebuyer
 * @param {object=} options Options for Adexchangebuyer
 */
function Adexchangebuyer(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * adexchangebuyer.accounts.get
     *
     * @desc Gets one account by ID.
     *
     * @alias adexchangebuyer.accounts.get
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/accounts/' + params.id,
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.accounts.list
     *
     * @desc Retrieves the authenticated user's list of accounts.
     *
     * @alias adexchangebuyer.accounts.list
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/accounts',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.accounts.patch
     *
     * @desc Updates an existing account. This method supports patch semantics.
     *
     * @alias adexchangebuyer.accounts.patch
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/accounts/' + params.id,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.accounts.update
     *
     * @desc Updates an existing account.
     *
     * @alias adexchangebuyer.accounts.update
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.id - The account id
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/accounts/' + params.id,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.creatives = {

    /**
     * adexchangebuyer.creatives.get
     *
     * @desc Gets the status for a single creative.
     *
     * @alias adexchangebuyer.creatives.get
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.accountId - The id for the account that will serve this creative.
     * @param  {string} params.adgroupId - The adgroup this creative belongs to.
     * @param  {string} params.buyerCreativeId - The buyer-specific id for this creative.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/creatives/' + params.accountId + '/' + params.buyerCreativeId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['accountId', 'buyerCreativeId', 'adgroupId'],
        pathParams: ['accountId', 'buyerCreativeId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.creatives.insert
     *
     * @desc Submit a new creative.
     *
     * @alias adexchangebuyer.creatives.insert
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/creatives',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.creatives.list
     *
     * @desc Retrieves a list of the authenticated user's active creatives.
     *
     * @alias adexchangebuyer.creatives.list
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/creatives',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.directDeals = {

    /**
     * adexchangebuyer.directDeals.get
     *
     * @desc Gets one direct deal by ID.
     *
     * @alias adexchangebuyer.directDeals.get
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The direct deal id
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/directdeals/' + params.id,
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * adexchangebuyer.directDeals.list
     *
     * @desc Retrieves the authenticated user's list of direct deals.
     *
     * @alias adexchangebuyer.directDeals.list
     * @memberOf! adexchangebuyer(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/adexchangebuyer/v1/directdeals',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Adexchangebuyer object
 * @type Adexchangebuyer
 */
module.exports = Adexchangebuyer;