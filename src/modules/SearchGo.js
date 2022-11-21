import ajaxService from "./ajaxService";

const searchCode = ()=>{
    document.querySelector(`form`).addEventListener(`submit`, (event)=>{
        event.preventDefault();
        const searchTerm = document.querySelector(".term").value;
        console.log(searchTerm);
        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse = result)
            .then(()=>console.log(searchResponse))
            .then(()=>{
                if(searchResponse['Title'] ==undefined){
                    document.querySelector(".result").value = "Wrong Code!"
                }
                else{
                document.querySelector('.result').value = searchResponse['Title'];  
                document.querySelector('.result2').value = searchResponse['Released'];  
                }
        })

    })
}

export default searchCode