import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    //const navigate = useNavigate();
    useEffect(() => {
            axios.get("http://localhost:3000/users")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        },
        [])
        const handleDelete = (id) => {
            const confirm = window.confirm("Would you like to delete");
            if(confirm) {
               axios.delete('http://localhost:3000/users/' +id) 
               .then (res => {
                location.reload()
            })
               .catch(err => console.log(err));
            }
          }
        
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>Liste des utilisateurs </h1>
        <div className='w-100 rounded bg-white border shadow p-5'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Ajouter+</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Age</th>
                        <th>La CNI</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}>
                                <td>{d. matricule}</td>
                                <td>{d. nom}</td>
                                <td>{d. prenom}</td>
                                <td>{d. age}</td>
                                <td>{d. cni}</td>
                                <td>
                                    <Link to='/read/${d.id}'><button className='btn btn-sm btn-info me-2'>Lire</button></Link>
                                    <Link to={'/update/${d.id}'}><button className='btn btn-sm btn-primary me-2'>Modifier</button></Link>
                                    <button onClick={e => handleDelete(d. id)} className='btn btn-sm btn-danger'>Supprimer</button>
                                </td>
                            </tr>
                        ))
                    }
            </table>
        </div>
    </div>
  )
}

export default Home
