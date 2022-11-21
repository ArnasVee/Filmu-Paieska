const form = ()=>{
    return  `<div class="form-group mb-2">
    <input type="text" placeholder="Filmo pavadinimas" class="form-control term">
    </div>    
    <button type="submit">Ieskoti filmo</button>
    <div class="form-group mb-2">
        <input type="text" class="form-control result" readonly>     
    </div>
    <div class="form-group mb-2">
        <input type="text" class="form-control result2" readonly>     
    </div>
    <img src=searchResponse['Released']></img>
    `
    
}
export default form