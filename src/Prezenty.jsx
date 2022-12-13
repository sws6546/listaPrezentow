import { useEffect, useState } from "react"

function Prezenty(){
    let [lista, setLista] = useState([])

    useEffect(()=>{
        let length = localStorage.length
        let osoby = []
        for(let i = 0; i < length; i++){
            osoby.push({osoba: localStorage.key(i), prezenty: localStorage.getItem(localStorage.key(i)).split(',')})
        }
        setLista(osoby)
        

    }, [])

    function changeS(e){
        let osoba = e.target.id
        let prezent = "" + e.target.innerText.replace()
        console.log(`${osoba} | ${prezent}`)
        if(!prezent.endsWith("[Opcjonalnie]")){
            let prezenty = localStorage.getItem(osoba).split(",")
            prezenty[prezenty.indexOf(prezent)] = `${prezent}[Opcjonalnie]`
            localStorage.setItem(osoba, prezenty)
        }else{
            let prezenty = localStorage.getItem(osoba).split(",")
            prezenty[prezenty.indexOf(prezent)] = `${prezent.replace("[Opcjonalnie]", "")}`
            localStorage.setItem(osoba, prezenty)
        }
        window.location.reload()
    }

    function deletePrezent(e){
        let prezent = e.target.id.split("|")
        let prezenty = localStorage.getItem(prezent[0]).split(",")
        prezenty.splice(prezenty.indexOf(prezent[1]), 1)
        console.log(prezenty)
        localStorage.setItem(prezent[0], prezenty)
        if(localStorage.getItem(prezent[0]) == ''){
            localStorage.removeItem(prezent[0])
        }
        window.location.reload()
    }

    return (
        <div id="prezContainer">
            {
                lista.map((e, i)=>(
                    <div className="osoba">
                        {e.osoba}
                        {e.prezenty.map((elem, idx)=>(
                            <div className="prezent">
                                <p onClick={changeS} id={e.osoba}>{elem}</p>
                                <button onClick={deletePrezent} id={`${e.osoba}|${elem}`} className="delete">Usuń</button>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default Prezenty