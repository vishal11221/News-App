import React, { Component } from 'react';



export class Newsitems extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://bl-i.thgim.com/public/incoming/wc68is/article66383422.ece/alternates/FREE_1200/IMG_IMG_BL08-ONGC-MKT_2__2_1_KBADJFBH.jpg":imageUrl} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
     <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
    </div>
   </div>
 </div>
    )
  }
}

export default Newsitems
