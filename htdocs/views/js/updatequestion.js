window.onload = function() {
    url = document.URL;
    qId = url.split('=');
    qId = qId[1];
    document.getElementById("qId").value = qId;
    document.getElementById("qIdSpan").textContent += qId;
}
