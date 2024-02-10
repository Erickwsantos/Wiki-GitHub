import React from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { useState } from 'react';


import { api } from '../services/api';


function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [user, setUser] = useState([]);

  const handleSearchRepositories = async () => {
    const { data } = await api.get(`/users/${currentUser}/repos`)

    if (data) {

      const repositoryExists = user.find(repo => repo === data)

      if (!repositoryExists) {
        setUser(prev => [...prev, data])
        setCurrentUser('')
        return
      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    const filteredRepos = user[0].filter(repo => repo.id !== id)
    setUser([filteredRepos])
  }

  return (
    <Container>
      <img src={gitLogo} alt="github logo" width={72} height={72} />
      <Input value={currentUser} onChange={(event) => setCurrentUser(event.target.value)} />
      <Button onClick={handleSearchRepositories} />
      {user[0]?.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
