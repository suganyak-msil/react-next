/* ============================================================ 
    API Communicator 
    ----------
    Responsible for placing api calls and 
    returning proper response or error

 ============================================================== */

import { EStatusErrorType, NetworkStatusError } from "./model/statuserrors";

// ==========================================================================

var handleNetworkException = (error: NetworkStatusError) => { };
export const setHandleNetworkException = (fn: (error: NetworkStatusError) => void) => {
    handleNetworkException = fn;
}

var checkSpecialResponse = (respobj: any): any => { return respobj; };
export const setCheckSpecialResponse = (fn: (respobj: any) => any) => {
    checkSpecialResponse = fn;
}


// ==========================================================================
// Base

// Basic method to receive json response.
// returns a GET promise 

export const httpGet = async function (url: string, headers: HeadersInit) {
    try {
        return await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: headers
        })
            .then(checkStatus)
            .then(getResponseString)
            .then(parseJSON)
            .then(checkSpecialResponse)
    } catch (error: any) {
        if (!error.errortype) {
            let err: NetworkStatusError = {
                errortype: EStatusErrorType.UnknownError,
                code: 0,
                message: "Network Error"
            };
            handleNetworkException(err);
            return Promise.resolve(err);
        } else {
            return Promise.resolve(error);
        }
    }
}

// ---------------------------------------------------------------------

// Basic method to post and receive json response.
// returns a POST promise 
export const httpPost = async function (url: string, headers: HeadersInit, body: string) {
    try {
        return await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: headers,
            body: body
        })
            .then(checkStatus)
            .then(getResponseString)
            .then(parseJSON)
            .then(checkSpecialResponse)
    } catch (error: any) {
        if (!error.errortype) {
            let err: NetworkStatusError = {
                errortype: EStatusErrorType.UnknownError,
                code: 0,
                message: "Network Error"
            };
            handleNetworkException(err);
            return Promise.resolve(err);
        } else {
            return Promise.resolve(error);
        }
    }
}

// checks for Http Status 
function checkStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else if (response.status >= 400 && response.status < 500) {
        let error: NetworkStatusError = {
            errortype: EStatusErrorType.ClientError,
            code: response.status,
            message: ""
        };
        throw error;
    } else if (response.status >= 500 && response.status < 600) {
        let error: NetworkStatusError = {
            errortype: EStatusErrorType.ServerError,
            code: response.status,
            message: "Unable to communicate with server"
        };
        handleNetworkException(error);
        throw error;
    } else {
        let error: NetworkStatusError = {
            errortype: EStatusErrorType.GeneralNetworkError,
            code: response.status,
            message: ""
        };
        throw error;
    }
}

function getResponseString(response: Response) {
    return response.text();
}

// parse response and convert to json object
function parseJSON(text: string) {
    return JSON.parse(text);
}

// ==========================================================================