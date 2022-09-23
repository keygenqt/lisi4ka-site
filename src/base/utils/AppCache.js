import {MD5} from "crypto-js";

/**
 * App for work with cache
 */
export const AppCache = {
    ////////////////////////////
    // Int

    intGet: function (key) {
        return parseInt(localStorage.getItem(key)) ?? 0
    },

    intSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // String

    stringGet: function (key) {
        return localStorage.getItem(key)
    },

    stringSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // Boolean

    booleanGet: function (key) {
        return localStorage.getItem(key) === 'true'
    },

    booleanSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // Common

    clearByKey: function (key) {
        localStorage.removeItem(key)
    },

    clearAll: function () {
        localStorage.clear()
    },

    ////////////////////////////
    // Private
    _setItem: function (key, value) {
        localStorage.setItem(key, `${value}`)
        const el = document.querySelector('#root');
        const hash = MD5(AppCache._allStorage().toString())
        if (el.dataset.cache !== hash) {
            el.dataset.cache = hash
        }
    },

    _allStorage: function () {
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }

        return values;
    }
};