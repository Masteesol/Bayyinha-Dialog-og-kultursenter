async function getApi(url) {
    try {
        const response = await fetch(url);
        console.log(response);
        return await response.json();    
    } catch(error) {
        console.log(`Error message is: ${error}`);
    }
}