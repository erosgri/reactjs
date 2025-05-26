import type { GitHubUserType } from "../../type"
import './style.css';

interface IProps {
    user: GitHubUserType
}
export function UserCard({user}: IProps) {
    return (
        <div className='container-user'>
          <div>
            <p><strong>Nome:</strong> {user.name}</p>
            <img src={user.avatar_url} alt={user.name} width={100} />
            <p><strong>Login:</strong> {user.login}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
            <p><strong>Repositórios públicos:</strong> {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">Ver no GitHub</a>
          </div>
        </div>
    )
}