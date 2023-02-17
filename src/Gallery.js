import React from 'react'

const Gallery = ({data}) => {
    return (
        <div className='row'>
            {data.map((item,index)=>{
                return <div className='col-md-4'> 
                    < img key={index} height="300" width="100" src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg` }/>
                </div>
                
            }
            )}
        </div>
    )
}

export default Gallery