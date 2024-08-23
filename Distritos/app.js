const lista = document.querySelector(`#lista`)
const input = document.querySelector(`#search-input`)
const form = document.querySelector(`#form`)
 
const getDistrict = async (uf) => {
    const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/`)
    const data = await res.json()
    return data
}
 
const showEstado = async (uf) => {
    const data = await getDistrict(uf)
 
    if(data){
        lista.innerHTML = data.nome
        console.log(data)
    }
}
 
form.addEventListener((`submit`), (e) => {
    e.preventDefault()
 
    showEstado(input.value)
    input.value = ``
})
 
showEstado(`33`)