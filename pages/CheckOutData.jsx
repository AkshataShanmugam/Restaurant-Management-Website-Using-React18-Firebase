import { useState, useEffect } from 'react';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const CheckOutData = () => {
  const [mylist, setMyList] = useState([]);
  const storedItems = JSON.parse(localStorage.getItem('tableNumber')) || {};
  const props = storedItems;

  const appSettings = {
    databaseURL: 'https://restaurant-management-v18-default-rtdb.firebaseio.com/',
  };

  const app = initializeApp(appSettings);
  const database = getDatabase(app);
  const menuItemsInDB = ref(database, 'menuItems');

  useEffect(() => {
    const fetchData = () => {
      onValue(menuItemsInDB, function (snapshot) {
        let menuItemsArray = Object.values(snapshot.val());
        let newList = [];
        for (let i = 0; i < menuItemsArray.length; i++) {
          let currentItem = menuItemsArray[i];
          let emailId = Object.keys(currentItem);
          emailId = emailId[0];
          emailId = emailId.replace(/\*/g, '.');
          if (emailId === props) {
            let temp = Object.values(currentItem)[0][0];
            newList.push(temp);
          }
        }
        setMyList(newList);
      });
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 1 second
    const intervalId = setInterval(() => {
      fetchData();
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Update local storage whenever the list changes
  useEffect(() => {
    localStorage.setItem('checkOutItems', JSON.stringify(mylist));
  }, [mylist]);

  return mylist;
};

export default CheckOutData;
