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

const getDownloadFshareURL = async (account) => {
  const { token, session_id: sessionID } = await fsharedk.loginFshare(account);
  const url = await fsharedk.downloadFile(token, sessionID, 'https://www.fshare.vn/file/NCI7886WRWVIKZ3');
  return url;
};

getDownloadFshareURL().then(console.log); //{ location:: 'http://download802.fshare.vn/dl/KA6H...' }

```

## Methods

> loginFshare(): Login fshare with you account
> downloadFile(res, url): Downloaf file with user logged

## Todo

- [x] Allow download and login
- [ ] Support normal user.
- [ ] ...