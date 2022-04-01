window.addEventListener('DOMContentLoaded', (event) => {
    incrementVisitCount();
});

const linkToFetch = "http://localhost:7071/api/ResumeCounterFunction";

const incrementVisitCount = () => {
    let count = 0;
    fetch(linkToFetch).then(response => {
        return response.json()
    }).then(data => {
        console.log("Value should be updated");
        console.log(data);
        // count = data.count;
        document.getElementById('count').innerText = data;
    }).catch((error) => {
        console.error('Error:', error);
    });
    return count;
}
