import React, { Component} from 'react';
import './Hello.css'



class Hello extends Component{
 render(){
 	return(
 		<div className='f1 tc'>
	 	<div>	
	 		<h1>Hello World</h1>
 		    <p>Welcome World</p>
 		    <p>{this.props.greeting}</p>
	 	</div>
	 	</div>
 	);
  }
}

export default Hello;