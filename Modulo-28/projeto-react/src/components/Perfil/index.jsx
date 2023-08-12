import PropTypes from 'prop-types';
import './perfil.css';

const Perfil = ({ nome, endereco }) => {
  return (
    <div>
      <img className="perfil-avatar" src={endereco} alt={`imagem do avatar do usuario ${nome}`}/>
      <h2 className="perfil-name">{nome}</h2>
    </div>
  )
}

Perfil.propTypes = {
  nome: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired
};

export default Perfil;