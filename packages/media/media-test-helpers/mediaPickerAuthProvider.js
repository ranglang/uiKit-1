var _this = this;
import * as tslib_1 from "tslib";
import { userAuthProviderBaseURL } from './userAuthProvider';
import { defaultCollectionName } from './collectionNames';
var cachedAuths = {};
var accessUrns = {
    MediaServicesSample: {
        'urn:filestore:collection:MediaServicesSample': ['read', 'insert'],
        'urn:filestore:chunk:*': ['create', 'read'],
        'urn:filestore:upload': ['create'],
        'urn:filestore:upload:*': ['read', 'update'],
        'urn:filestore:file': ['create'],
        'urn:filestore:file:*': ['read', 'update'],
    },
    'mediapicker-test': {
        'urn:filestore:collection': ['create'],
        'urn:filestore:collection:mediapicker-test': ['read', 'insert'],
        'urn:filestore:chunk:*': ['create', 'read'],
        'urn:filestore:upload': ['create'],
        'urn:filestore:upload:*': ['read', 'update'],
        'urn:filestore:file': ['create'],
        'urn:filestore:file:*': ['read', 'update'],
    },
};
var requestAuthProvider = function (authEnvironment, collectionName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var url, body, headers, response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://api-private.dev.atlassian.com/media-playground/api/token/tenant?environment=" + authEnvironment;
                body = JSON.stringify({
                    access: accessUrns[collectionName],
                });
                headers = new Headers();
                headers.append('Content-Type', 'application/json; charset=utf-8');
                headers.append('Accept', 'text/plain, */*; q=0.01');
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        body: body,
                        headers: headers,
                        credentials: 'include',
                    })];
            case 1:
                response = _a.sent();
                // We leverage the fact, that our internal /toke/tenant API returns data in the same format as Auth
                return [2 /*return*/, response.json()];
        }
    });
}); };
export var mediaPickerAuthProvider = function (authEnvironment) {
    if (authEnvironment === void 0) { authEnvironment = 'asap'; }
    return function (context) {
        var collectionName = (context && context.collectionName) || defaultCollectionName;
        authEnvironment = authEnvironment === 'asap' ? 'asap' : '';
        var cacheKey = collectionName + ":" + authEnvironment;
        if (!cachedAuths[cacheKey]) {
            cachedAuths[cacheKey] = requestAuthProvider(authEnvironment, collectionName);
        }
        return cachedAuths[cacheKey];
    };
};
export var defaultMediaPickerAuthProvider = function () {
    var auth = {
        clientId: 'a89be2a1-f91f-485c-9962-a8fb25ccfa13',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhODliZTJhMS1mOTFmLTQ4NWMtOTk2Mi1hOGZiMjVjY2ZhMTMiLCJ1bnNhZmUiOnRydWUsImlhdCI6MTQ3MzIyNTEzNn0.6Isj5jKgKzWDnPqfoMLiC_LVIlGM8kg_wxG6eGGwhTw',
        baseUrl: userAuthProviderBaseURL,
    };
    return Promise.resolve(auth);
};
//# sourceMappingURL=mediaPickerAuthProvider.js.map