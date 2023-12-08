import firebase from "gatsby-plugin-firebase";

const AuthService = {
  getCurrentUser: () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject("No user is logged in.");
        }
      });
    });
  },
};

export default AuthService;
