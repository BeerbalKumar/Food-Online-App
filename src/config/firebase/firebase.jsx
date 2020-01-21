  import * as firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  import 'firebase/database'
  import 'firebase/storage'


  var firebaseConfig = {
    apiKey: "AIzaSyD0-r1svSGUSJS3jbxgG7EdgIWHpthxh5Y",
    authDomain: "food-online-a4c74.firebaseapp.com",
    databaseURL: "https://food-online-a4c74.firebaseio.com",
    projectId: "food-online-a4c74",
    storageBucket: "food-online-a4c74.appspot.com",
    messagingSenderId: "567882877313",
    appId: "1:567882877313:web:75c184e4e7bb0c378a8080"
  };


 export default firebase.initializeApp(firebaseConfig);