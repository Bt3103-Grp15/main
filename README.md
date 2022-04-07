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

# 0326-q
1. Layout overwrite the router, then there is no need for a /router and also inside of the router there is no need a layout import


# To-do
- [ ] Fixed the ReadMore in blogList Page
- [ ] Fixed the search on main page (allow key word)
- [ ] Add Readmore in profile bloglist
- [ ] Allow cancel the like feature, alert sth when not login
- [ ] connect bloglist page to dynamic router
- [ ] profile page change background  
- [ ] Blog Page search => blog Listing Page; Three bottuns
- [ ] Change Routes to Others(About us, Write Review)
- [ ] Connect AttractionList to Firebase and change the picture
- [ ] blog Create page three categories(depature time, average spending...)

