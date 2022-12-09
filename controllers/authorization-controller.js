const appConfig = require("../config/app");

// if something goes wrong check back at https://www.youtube.com/watch?v=nfVdwRYn0YQ at around 1 hour play time
const authorizationController = {
    login: (req, res) => {
        const authorizationUrl = `${
            appConfig.authorizationHost
        }/authorize?response_type=code&client_id=${
            appConfig.clientID
        }&redirect_uri=${
            encodeURIComponent(appConfig.redirectUrl)
        }&scope=openid%20profile%20email&state=1234`;

        res.redirect(authorizationUrl);
    },
    callback: async (req, res) => {
        const response = await fetch(`${authorizationUrl}/oauth/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: authorization_code,
                client_id: appConfig.clientID,
                client_secret: appConfig.clientSecret,
                redirect_uri: appConfig.redirectUrl,
                scope: "openid profile email",
                code: req.query.code,
            }),
        });

        const jsonResponse = await response.json();

        // video (https://www.youtube.com/watch?v=nfVdwRYn0YQ) around 1:16 for possible troubleshooting
        res.json(jsonResponse); 



    },
}

module.exports = authorizationController