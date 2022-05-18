window.addEventListener('DOMContentLoaded', (event) => {
    incrementVisitCount();
    console.log("Value should be updated3");
});

// const linkToFetch = "http://localhost:7071/api/ResumeCounterFunction";
const linkToFetch = "https://getresumecounter123.azurewebsites.net/api/ResumeCounterFunction?"

const incrementVisitCount = () => {
    let count = 0;
    fetch(linkToFetch).then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        // countg = data.count;
        document.getElementById('count').innerText = data;
    }).catch((error) => {
        console.error('Error:', error);
    });
    return count;
}
