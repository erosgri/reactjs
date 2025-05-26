import { useState } from 'react';
import './App.css';
import type { GitHubUserType } from './type';
import { Empty } from './components/Empty';
import { UserCard } from './components/UserCard';
import { Search } from './components/Search';


function App() {
  const [user, setUser] = useState<GitHubUserType | null>(null);
  const [input, setInput] = useState("");


  const UserSearch = async () => {
    if (!input.trim()) {
      alert("Digite um nome de usuário.");
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${input}`);



      if (!res.ok) {
        console.warn("Usuário não encontrado.");
        setUser(null);
        return;
      }

      const userData = (await res.json()) as GitHubUserType;
      setUser(userData);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      alert("Erro na requisição.");
    }
  };

  return (
    <div className='container'>
      <Search
        handleSearchUser={UserSearch}
        value={input}
        handleSetValue={setInput}/>
       {user ? <UserCard user={user} /> : <Empty />}

    </div>
  );
}

export default App;



