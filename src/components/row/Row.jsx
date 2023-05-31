import React from 'react'
import './row.scss'

const Row  = ({data}) => {
    
    const riskValue = (data) => {
        "a"
      };

    return (
        
              <div className='row'>
                    <div class="p-1 col-3 bg-light" >
                        {data.name}
                    </div>
                    <div class="p-1 col-2 bg-light">
                        {data.sec}
                    </div>
                    <div class="p-1 col-3 bg-light">
                        {data.risk}
                    </div>
                    <div class="p-1 col-1 bg-light">
                        {data.type}
                    </div>
                    <div class="p-1 col-3 bg-light">
                        {data.class}
                    </div>
                </div>

                
           
    )
}

export default Row
