import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        matricule: '',
        nom: '',
        prenom: '',
        age:'',
        cni: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', values)
        .then(res => {
                console.log(res);
                navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-80 justify-content-center align-items-center bg-light'>
      <div className='w-100 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Ajouter des utilisateurs</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor="matricule">Numero matricule:</label>
                <input type="text" name='matricule' className='form-control' placeholder='Entrez votre numéro matricule' onChange={e => setValues({...values, matricule: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="nom">Nom:</label>
                <input type="text" name='nom' className='form-control' placeholder='Entrez votre nom' onChange={e => setValues({...values, nom: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="prenom">Prenom:</label>
                <input type="text" name='prenom' className='form-control' placeholder='Entrez votre prenom' onChange={e => setValues({...values, prenom: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="age">Age:</label>
                <input type="text" name='datenaissance' className='form-control' placeholder='entrez votre age' onChange={e => setValues({...values, age: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="cni">Nom:</label>
                <input type="text" name='cni' className='form-control' placeholder='Entrez votre CNI' onChange={e => setValues({...values, cni: e.target.value})} />
            </div>
            <button className='btn btn-success'>Valider</button>
            <Link to="/" className='btn btn-primary ms-3' >Retour</Link>
        </form>
    </div>
    </div>
  )
}

export default Create
