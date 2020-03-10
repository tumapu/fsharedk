# FshareDK

Unofficial Node.js SDK for fshare.vn and tool only support premium user. (By fshare after 09/2019)


## Usage

> Install it with yarn or npm

```yarn add fsharedk```

or

```npm install -save fsharedk```

> Usage 

```javascript
const fsharedk = require('fsharedk')

const user = {
    user_email: process.env.FSHARE_EMAIL,
    password:  process.env.FSHARE_PASSWORD
}

const getDownloadFshareURL = async () =>  {
    let response = await fsharedk.loginFshare(user);
    let url = await fsharedk.downloadFile(response, 'https://www.fshare.vn/file/THONZRLCP7K1');
    return url;
}

getDownloadFshareURL().then(console.log);

```

## Methods

> loginFshare(): Login fshare with you account
> downloadFile(res, url): Downloaf file with user logged

## Todo

- [x] Allow download and login
- [ ] Support normal user.
- [ ] ...