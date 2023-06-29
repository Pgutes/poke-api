import React from 'react';
import pikachu from '../assets/img/580b57fcd9996e24bc43c325.png';


const Home = () => {
    return (
            <div className="row justify-content-center align-items-center" style={{ height: '80vh'}}>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title" style={{margin: '2vh'}}>Bienvenido Maestro Pokemón</h5>
                            <img src={pikachu} alt="pikachu" style={{ height: '40vh'}}/>
                            <a href="/pokemon" className="btn btn-primary" style={{margin: '2vh'}}>Ver Pokemones</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Home;