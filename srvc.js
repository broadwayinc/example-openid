// replace service id and owner id
// const SERVICE_ID = "ap22YyFvVcxK0ShseFEc";
// const OWNER_ID = "f8e16604-69e4-451c-9d90-4410f801c006";
const SERVICE_ID = "ap214UHTHgvr8ZLYxckv"
const OWNER_ID = "4d4a36a5-b318-4093-92ae-7cf11feae989"

const _bleedingEdge = { "hostDomain": "skapi.app", "target_cdn": "d1wrj5ymxrt2ir", "network_logs": true }

// replace with your google client id
const GOOGLE_CLIENT_ID = "838334320600-kf0kriblqvjk350dlvan4t8mt910o40t.apps.googleusercontent.com";

// replace with your own redirect url
const REDIRECT_URL = 'https://dev.broadwayinc.computer';

// replace with your own openid logger id. This can be set in your skapi service admin page.
const OPENID_LOGGER_ID = 'ggl';

const skapi = new Skapi(
    SERVICE_ID,
    OWNER_ID,
    {
        autoLogin: true,
        eventListener: {
            onLogin: (user) => {
                console.log('onLogin', user);

                document.getElementById('el_bt_logout').hidden = !user;
                document.getElementById('el_bt_login').hidden = !!user;
                
                console.log('user', user ? JSON.stringify(user, null, 2) : 'Please Login');
                document.getElementById('el_pre_userProfile').innerText = user ? JSON.stringify(user, null, 2) : 'Please Login';
            }
        }
    },
    _bleedingEdge
);