import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyDzbMG2CP8xrDFj2q8VgrLpvVAIlNzbsys",
        authDomain: "pro-67-d534c.firebaseapp.com",
        projectId: "pro-67-d534c",
        storageBucket: "pro-67-d534c.appspot.com",
        messagingSenderId: "317669563117",
        appId: "1:317669563117:web:c53be451a1e2e9f2d30ae4"
      
      
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();