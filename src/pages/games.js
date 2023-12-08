import React from 'react';
import PrivateRoute from "./PrivateRoute";
import GamesComponent from "./games";
import { navigate } from "gatsby";
import firebase from "gatsby-plugin-firebase";
import ProfileIcon from './ProfileIcon';



const Games = () => {
<PrivateRoute path="/games" component={GamesComponent} />
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate("/"); // Redirect to the home page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
      // Handle any logout errors here
    }
  };
  const styles = {
    body: {
      backgroundColor: '#070320',
    },
    homepageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', 
    },
    helloUserTitle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    title2: {
      color: 'rgb(189, 7, 7)',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    choiceMenu: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    choiceMenuItem: {
      margin: '0 20px',
      backgroundColor: 'rgba(30, 81, 123)',
      padding: '13px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    choiceMenuItemHover: {
      backgroundColor: '#e41e14',
    },
    choiceMenuLink: {
      textDecoration: 'none',
      color: 'rgb(255, 255, 255)',
      fontWeight: 'bold',
    },
    profileIcon: {
      position: 'absolute',
      top: '50px', // Adjust as needed
      right: '40px', // Adjust as needed
      cursor: 'pointer',
    },
  }

  const handleProfileClick = () => {
    // Open account settings or navigate to profile page
    // For example:
    navigate('/profile'); // Navigate to the profile page

    // Or, for logout functionality:
    // firebase.auth().signOut();
    // navigate('/login'); // Redirect to login page after logout
  };
 


  return (


      
      <div style={{ ...styles.body, ...styles.homepageContainer }}>
      <div className="alien"></div>

      <h1 style={styles.helloUserTitle}>Hello User</h1>
      <h1 style={styles.title2}> Select which game you want to play: </h1>
      <ProfileIcon style={styles.profileIcon} onClick={handleProfileClick} />
            <ul style={styles.choiceMenu}>
        <li style={styles.choiceMenuItem}><a href="./tictactoe/tic" style={styles.choiceMenuLink}>Tic Tac Toe</a></li>
        <li style={styles.choiceMenuItem}><a href="./Pong/Pong" style={styles.choiceMenuLink}>Pong</a></li>
        <li style={styles.choiceMenuItem}><a href="/Trivia" style={styles.choiceMenuLink}>TriviaQuiz</a></li>
        
      </ul>
      <button
  style={{
    position: 'absolute',
    top: '30px',
    right: '100px',
    cursor: 'pointer',
    color: 'white', // Adding color property to change text color to white
  }}
  onClick={handleLogout}
>
  Logout
</button>
    </div>
  );
};

export default Games;
