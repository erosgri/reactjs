import './style.css';

interface IProps{
    value: string;
    handleSetValue: React.Dispatch<React.SetStateAction<string>>;
    handleSearchUser: () => void;
}

export function Search({handleSetValue, value, handleSearchUser}: IProps){
    return (
        <div className="container-search">
        <input
          type="text"
          placeholder="Procure um usuário"
          value={value}
          onChange={(e) => handleSetValue(e.target.value)}
        />
        <p><button onClick={handleSearchUser}>Buscar</button></p>

       
      </div>
    )
}