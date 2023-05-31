import React from 'react'
import './matriz.scss'

const Matriz  = ({data}) => {
    
    const riskValue = (data) => {
        "a"
      };

    return (
        
              <div className='row'>
                    <div class="col-3 bg-light" >
                        {data.name}
                    </div>
                    <div class="col-2 bg-light">
                        {data.sec}
                    </div>
                    <div class="col-3 bg-light">
                        {data.risk}
                    </div>
                    <div class="col-1 bg-light">
                        {data.type}
                    </div>
                    <div class="col-3 bg-light">
                        {data.class}
                    </div>
                </div>

                
           
    )
}

export default Matriz
