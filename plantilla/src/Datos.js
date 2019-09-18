
import React, {Component} from "react";
import CompNavio from "./CompNavio.js";

class Datos extends Component{

  constructor(props){
    super(props);
    this.state={
      "urlBuscar": "",
      "datos": [],
      tieneUrl: false,
      loading: false
    }
    this.traerInfo = this.traerInfo.bind(this);
    this.hacerPedido = this.hacerPedido.bind(this);
  }

  onChange( ){
    return this.setState({urlBuscar:this.linkInput.value});
  }
  
  hacerPedido(actual) { 
      let urlActual = this.state.urlBuscar + "?$limit=900&$offset="+actual;
      console.log(urlActual);
      fetch(urlActual)
      .then(response => response.json())
      .then(response => {
        console.log("Datos", response);
        
        if(response.length == 0)
        {
          this.setState({tieneUrl: true, loading:false});
        }
        else
        {
          let datos = response;
          let viejos = this.state.datos;
          let nuevos = viejos.concat(datos);
          this.setState({datos:nuevos});
          console.log("Datos en datos", this.state.datos);
          actual = actual + 900;
          this.hacerPedido(actual);
        }
      });
    }

  async traerInfo(){
    let actual = 0;
    this.setState({loading: true})
    console.log("Antes del while");
    this.hacerPedido(actual);
  }



  render () {
    return(
      <div> 
        <div> 
          <input type="text" ref ={linkInput => this.linkInput = linkInput} onInput = {this.onChange.bind(this)}></input>
          <button type="button" onClick={this.traerInfo}>Traer datos </button>
          <br/>
          <br/>
          <br/>
          {this.state.loading == true? <h3> Espere un momento, estamos cargando la informacion </h3>:<br></br>}
          {this.state.tieneUrl == true ? <CompNavio datos={this.state.datos}></CompNavio> : <br></br>}
          
        </div>  
      </div>

      );
  }
}

export default Datos;