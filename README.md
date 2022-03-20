# 0313-tips

### Remember to install vuex and add a src/firebase/index.js
template should be like this:
```
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
```

### Recommended Videos for Vuex
https://www.youtube.com/watch?v=bUHVGPx6IMo&list=PL4cUxeGkcC9jveNu1TI0P62Dn9Me1j9tG&index=2

# 0319-tips
### Remember to add a uifire.js in folder firebase
template is the same as what was given in the lecture
