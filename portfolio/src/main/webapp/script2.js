async function fetchResponse() {
    const responseFromServer = await fetch('/url')
    const textResponse = await responseFromServer.text();

    const textContainer = document.getElementById('text-container');
    textContainer.innerText = textResponse;
}