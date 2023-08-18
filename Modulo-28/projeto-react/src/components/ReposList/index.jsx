import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [ repos, setRepos ] = useState([]);
    const [ estaCarregando, setEstaCarregando ] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false),
                setRepos(resJson)
            }, 3000)
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listItemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <a className={styles.listItemLink} target="_blank" href={html_url} rel="noreferrer">Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

ReposList.propTypes = {
    nomeUsuario: PropTypes.string.isRequired,
  };

export default ReposList;