import PropTypes from 'prop-types';
import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
  return (
    <header className={styles.header}>
      <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt={`imagem do avatar do usuario ${nomeUsuario}`}/>
      <h1 className={styles.name}>{nomeUsuario}</h1>
    </header>
  )
}

Perfil.propTypes = {
  nomeUsuario: PropTypes.string.isRequired,
};

export default Perfil;