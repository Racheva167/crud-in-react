import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
    const [data, setData] = useState([])
    const { id }= useParams ()
    useEffect(() => {
            axios.get('http://localhost:3000/users/'+ id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        }, [id]);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-100 border bg-light shadow px-5 pt-3 pb-5 rounded">
        <h3>Details sur un utilisateur</h3>

        <div className="mb-3">
            <strong>Numero Matricule: {data.matricule}</strong>
        </div>  
        <div className="mb-3">
            <strong>Nom: {data.nom}</strong>
        </div>
        <div className="mb-3">
            <strong>Prenom: {data.prenom}</strong>
        </div>
        <div className="mb-3">
            <strong>Age: {data.age}</strong>
        </div>
        <div className="mb-3">
            <strong>CNI: {data.cni}</strong>
        </div>
        <div className="mb-3">
            <strong>Id: {data.id}</strong>
        </div>
        <Link to={'/update/${id}'} className='btn btn-success'>Modifier</Link>
        <Link to="/" className='btn btn-primary ms-3'>Retour</Link>
      </div>
    </div>
  )
}

export default Read
