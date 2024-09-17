// paytabsUtils.js
import axios from 'axios';

const config = {
    merchantId: '', // Set your merchant ID
    serverKey: '',  // Set your server key
    region: ''      // Set your region (e.g., 'ARE' for UAE)
};

export const setConfig = (merchantId, serverKey, region) => {
    config.merchantId = merchantId;
    config.serverKey = serverKey;
    config.region = region;
};

const _setEndPoint = (region) => {
    const regions_urls = {
        ARE: 'https://secure.paytabs.com/',
        SAU: 'https://secure.paytabs.sa/',
        OMN: 'https://secure-oman.paytabs.com/',
        JOR: 'https://secure-jordan.paytabs.com/',
        EGY: 'https://secure-egypt.paytabs.com/',
        GLOBAL: 'https://secure-global.paytabs.com/'
    };
    return regions_urls[region] || regions_urls.GLOBAL; // Fallback to GLOBAL if region not found
};


const _sendPost = async (url, objData) => {
    try {
        const response = await axios.post(url, objData, {
            headers: {
                'Authorization': `Bearer ${config.serverKey}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return { response_code: 400, result: error.response.data.message };
        } else {
            return { response_code: 400, result: error.message };
        }
    }
};


 
export const createPaymentPage = async (payment_code, transaction, cart, customer, shipping, urls, lang, callbackFunction, framed = false) => {
    const data = {
        profile_id: config.merchantId,
        payment_methods: payment_code,
        tran_type: transaction[0],
        tran_class: transaction[1],
        cart_id: cart[0],
        cart_currency: cart[1],
        cart_amount: parseFloat(cart[2]),
        cart_description: cart[3],
        paypage_lang: lang,
        customer_details: {
            name: customer[0],
            email: customer[1],
            phone: customer[2],
            street1: customer[3],
            city: customer[4],
            state: customer[5],
            country: customer[6],
            zip: customer[7],
            ip: customer[8]
        },
        shipping_details: {
            name: shipping[0],
            email: shipping[1],
            phone: shipping[2],
            street1: shipping[3],
            city: shipping[4],
            state: shipping[5],
            country: shipping[6],
            zip: shipping[7],
            ip: shipping[8]
        },
        callback: urls[0],
        return: urls[1],
        framed: framed,
        user_defined: {
            package: 'node.js PT2 V2.0.0'
        }
    };
    const url = _setEndPoint(config.region) + 'payment/request';
    const result = await _sendPost(url, data);
    callbackFunction(result);
};

export const validatePayment = async (tranRef, callback) => {
    const data = {
        profile_id: config.merchantId,
        tran_ref: tranRef
    };
    const url = _setEndPoint(config.region) + 'payment/query';
    const result = await _sendPost(url, data);
    callback(result);
};

export const queryTransaction = async (transaction, cart, callback) => {
    const data = {
        profile_id: config.merchantId,
        tran_ref: transaction[0],
        tran_type: transaction[1],
        tran_class: transaction[2],
        cart_id: cart[0],
        cart_currency: cart[1],
        cart_amount: parseFloat(cart[2]),
        cart_description: cart[3]
    };
    const url = _setEndPoint(config.region) + 'payment/request';
    const result = await _sendPost(url, data);
    callback(result);
};
