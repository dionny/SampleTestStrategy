module.exports = {
    getUsers: {
        request: {
            path: 'api\\/users.*',
            regex: true,
            method: 'GET'
        },
        response: {
            headers: {
                "link": "</api/users?page=0&size=20>; rel=\"last\",</api/users?page=0&size=20>; rel=\"first\"",
                "X-Total-Count": 1
            },
            data: [
                {
                    "login": "system",
                    "firstName": "",
                    "lastName": "System",
                    "email": "system@localhost",
                    "activated": true,
                    "langKey": "en",
                    "authorities": ["ROLE_USER", "ROLE_ADMIN"],
                    "id": "user-0",
                    "createdDate": "2016-05-02T12:48:23.594Z",
                    "lastModifiedBy": null,
                    "lastModifiedDate": "2016-05-02T15:32:44.549Z",
                    "password": null
                }
            ]
        }
    },

    createUserBadRequest: {
        request: {
            path: 'api\\/users.*',
            regex: true,
            method: 'POST'
        },
        response: {
            status: 400,
            headers: {
                "X-sampleProjectApp-error": "Unable to process the transaction."
            }
        }
    },

    createUserInternalError: {
        request: {
            path: 'api\\/users.*',
            regex: true,
            method: 'POST'
        },
        response: {
            status: 500,
            headers: {
                "X-sampleProjectApp-error": "Unable to process the transaction."
            }
        }
    }
};
