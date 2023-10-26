import './Telefone.css'
import React from 'react'
import axios from "axios";


async function Telefone(){
        var telefone1= document.getElementById("telefone1") as HTMLInputElement || null;
        var telefone2 = document.getElementById("telefone2") as HTMLInputElement || null;
        var telefone3 = document.getElementById("telefone3") as HTMLInputElement || null;
        var telefone4 = document.getElementById("telefone4") as HTMLInputElement || null;
        var telefone5 = document.getElementById("telefone5") as HTMLInputElement || null;


        var userDataJson = {
            "telefone1" : telefone1.value.toString(),
            "telefone2" : telefone2.value.toString(),
            "telefone3": telefone3.value.toString(),
            "telefone4" : telefone4.value.toString(),
            "telefone5" : telefone5.value.toString()
        }
    
}


function Projeto(){
        return(
            

                <div>
                    
                </div>


  
        )
    }

    export default Projeto;