# FshareDK

Unofficial Node.js SDK for fshare.vn and tool only support premium user. (By fshare after 09/2019)


## Usage

Install it with yarn or npm

```bash
yarn add fsharedk
npm install -save fsharedk
```

Usage 

```javascript
const fsharedk = require('fsharedk')

const user = {
    user_email: process.env.FSHARE_EMAIL,
    password:  process.env.FSHARE_PASSWORD
}

const getDownloadFshareURL = async (account) => {
  const { token, session_id: sessionID } = await fsharedk.login(user);
  const url = await fsharedk.download(token, sessionID, 'https://www.fshare.vn/file/xxxx...');
  return url;
};

getDownloadFshareURL().then(console.log); //{ location:: 'http://download802.fshare.vn/dl/KA6H...' }

```

## Methods

- login(): Login fshare with you account
- download(res, url): Downloaf file with user logged

## Todo

- [x] Allow download and login
- [ ] Support normal user.
- [ ] ...
