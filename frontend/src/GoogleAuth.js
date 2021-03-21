const loadGoogleAPI = new Promise(resolve => {
    window.gapi.load("client:auth2", () => {
        window.gapi.client.init({
            clientId: "104324073390-am0n6j89k116lasg877tjnc2p15lceaj.apps.googleusercontent.com",
            scope: "email"
        }).then(() => {
            resolve(window.gapi.auth2.getAuthInstance());
        });
    });
});

export default loadGoogleAPI;