import React, { useEffect } from 'react';

import { objFromAxios, objFromFetch } from './SOLID + DI';

function App() {

  const fetchUsersWithFetch = async () => {
    const users = await objFromFetch.getUsers();

    console.log('usersFromFetch', users);
  }

  const fetchUsersWithAxios = async () => {
    const users = await objFromAxios.getUsers();

    console.log('usersFromAxios', users);
  }

  useEffect(() => {
    fetchUsersWithAxios();
    fetchUsersWithFetch();
  }, []);
  return (
    <div className="App" />
  );
}

export default App;
