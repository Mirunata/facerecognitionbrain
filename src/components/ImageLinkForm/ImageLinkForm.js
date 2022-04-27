import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return (
		<div>
		  <p className='f3 text'>
			This Magic Brain will detect faces in your pictures. Give it a try!
		  </p>
		  <div className='center'>
		     <div className=' form center pa4 br1 ma1 shadow-5'>
		         <input className = 'f4 pa2 w-70 center' type = 'text' />
		         <button className = 'w-20 grow f4 link ph3 pv2'>Detect</button>
		      </div>
		  </div>
		</div>
	)
}

export default ImageLinkForm;