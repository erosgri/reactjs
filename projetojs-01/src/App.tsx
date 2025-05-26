//npm run dev para iniciar o servidor
import { useState } from 'react';
import './App.css'
import { Card } from './componets/Card/index';

function App() {
  const [showCards, setShowCards] = useState(false);

  return (

    //JSX => JavaScript que se parece com HTML


    <div className='container'>
      <button onClick={() => setShowCards((prevState) => !prevState )}>Exibir / Ocultar</button>
      {showCards &&
        <>

          <Card imageUrl='\arquivos\carlo.jpg'
            name='Carlo Gambino' />

          <Card imageUrl='\arquivos\frank.jpg'
            name='Frank Costello' />

          <Card imageUrl='\arquivos\joe.jpg'
            name='Joseph Bonnano' />

          <Card imageUrl='\arquivos\lucky.jpg'
            name='Lucky Lucianno' />
        </>

      }
    </div>

  )
}

export default App
