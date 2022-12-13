import { useState } from "react"

function PanelDodawania(){
    const [osoba, setOsoba] = useState("")
    const [prezent, setPrezent] = useState("")

    return (
        <div id="panelDodawania">
            <label htmlFor="osoba">Osoba: </label>
            <input type="text" name="osoba" id="osoba" onChange={(e) =>{
                setOsoba(e.target.value)
            }}/> <br/>
            <label htmlFor="prezent">Prezent: </label>
            <input type="text" name="prezent" id="prezent" onChange={(e)=>{
                setPrezent(e.target.value)
            }}/><br/>
            <button onClick={()=>{
                if(osoba != ""){
                    let tempOsoba = localStorage.getItem(osoba)
                    if(tempOsoba == null){
                        localStorage.setItem(osoba, [prezent])
                        window.location.reload()
                    }else{
                        let listaPrezentow = tempOsoba.split(',')
                        listaPrezentow.push(prezent)
                        localStorage.setItem(osoba, listaPrezentow)
                        window.location.reload()
                    }
                }
            }}>Dodaj</button>
        </div>
    )
}

export default PanelDodawania