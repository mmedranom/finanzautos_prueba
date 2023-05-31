import React from 'react'
import Alert from 'react-bootstrap/Alert';
import './blank.scss'
import Row from '../components/row/Row'

/*
data = [{text: "", link: ""}, {text: "", link: ""}, {text: "", link: ""}]
*/

const Blank = ({tableContent}) => {
    return (
        <div>
            <div className="table__container container text-center">
                <div className='row'>
                    <div class="col-3 text-light  bg-warning" >
                        Nombre
                    </div>
                    <div class="col-2 text-light  bg-warning">
                        Sector
                    </div>
                    <div class="col-3 text-light  bg-warning">
                        Calificador de riesgo
                    </div>
                    <div class="col-1 text-light  bg-warning">
                        Tipo
                    </div>
                    <div class="col-3 text-light  bg-warning">
                        Calificacion
                    </div>
                </div>

                {tableContent.map((value, index) => (
                    <li key={index}>
                        <Row
                    data={value}/>
                    </li>
                ))}
            </div>
      
        </div>
    )
}

export default Blank
