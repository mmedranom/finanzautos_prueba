import React from 'react'
import './matrix.scss'

const Matriz  = ({data}) => {
    
    const riskValue = (data) => {
        "a"
      };

    return (
                <div>
                    <div className='row'>
                        <div class="p-2 col-2 bg-light" >
                            Frecuente
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger bg-opacity-50">
                            
                        </div>
                        <div class="m-1  p-2 col text-light  bg-danger  bg-opacity-50">
                            2
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger">
                            
                        </div>
                        <div class="m-1  p-2 col text-light  bg-danger">
                            3
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger">
                            
                        </div>
                    </div>

                    <div className='row'>
                        <div class="p-2 col-2 bg-light" >
                            probable
                        </div>
                        <div class="m-1  p-2 col text-light bg-success">
                            1
                        </div>
                        <div class="m-1  p-2 col text-light  bg-warning">
                            
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger  bg-opacity-50">
                            1
                        </div>
                        <div class="m-1  p-2 col text-light  bg-danger">
                            
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger">
                            
                        </div>
                    </div>

                    <div className='row'>
                        <div class="p-2 col-2 bg-light" >
                            ocasional
                        </div>
                        <div class="m-1  p-2 col text-light bg-success">
                            1
                        </div>
                        <div class="m-1  p-2 col text-light bg-warning">
                            
                        </div>
                        <div class="m-1  p-2 col text-light bg-warning">
                            
                        </div>
                        <div class="m-1  p-2 col text-light  bg-danger  bg-opacity-50">
                            
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger">
                            
                        </div>
                    </div>

                    <div className='row'>
                        <div class="p-2 col-2 bg-light" >
                            posible
                        </div>
                        <div class="m-1  p-2 col text-light bg-success">
                            1
                        </div>
                        <div class="m-1  p-2 col text-light  bg-success">
                            3
                        </div>
                        <div class="m-1  p-2 col text-light bg-warning">
                            
                        </div>
                        <div class="m-1  p-2 col text-light  bg-warning">
                            
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger  bg-opacity-50">
                            2
                        </div>
                    </div>

                    <div className='row'>
                        <div class="p-2 col-2 bg-light" >
                            improbable
                        </div>
                        <div class="m-1  p-2 col text-light  bg-success">
                            
                        </div>
                        <div class="m-1  p-2 col text-light   bg-success">
                            2
                        </div>
                        <div class="m-1  p-2 col text-light  bg-success">
                            1
                        </div>
                        <div class="m-1  p-2 col text-light  bg-warning">
                            
                        </div>
                        <div class="m-1  p-2 col text-light bg-danger  bg-opacity-50">
                            
                        </div>
                    </div>

                    <div className='row'>
                        <div class="p-2 col-2 bg-light" >
                            
                        </div>
                        <div class="m-1  p-2 col  bg-light">
                            Insignificante
                        </div>
                        <div class="m-1  p-2 col t bg-light">
                            Menor
                        </div>
                        <div class="m-1  p-2 col   bg-light">
                            Moderado
                        </div>
                        <div class="m-1  p-2 col bg-light">
                            Mayor
                        </div>
                        <div class="m-1  p-2 col bg-lightr">
                            Ctastrofico
                        </div>
                       
                    </div>
  
                </div>

                
              
                

                
           
    )
}

export default Matriz
