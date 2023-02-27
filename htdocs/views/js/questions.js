document.getElementById("button-go-back").onclick = function () {
    location.href = "/";
};


fetch("http://localhost/getQuestions", {
    method: "GET",
    headers: {
        'Accept': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        const questionList = new Questions();
        questionList.render(data);
    });

function sort(){
    fetch("http://localhost/getQuestions", {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            const questionList = new Questions();
            questionList.sort(data);
        });
}