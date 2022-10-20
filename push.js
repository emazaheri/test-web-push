var push = require('web-push');

let vapidkeys = {
    publicKey: 'BDnZzpPBTwDINqKTW7CanKtGXXovQfLZkw9AUX6HsEjtff7RyXZ1qiYATb78DUapZXIxzPn5bM4GHbWvBo9Byxk',
    privateKey: 'b6ETN0akz2mAm3sbp6AujsICsARhN07YVelz5GW1yPw'
}


push.setVapidDetails('mailto:test@cheegol.ir', vapidkeys.publicKey, vapidkeys.privateKey);


let sub = {};

push.sendNotification(sub, 'test message');