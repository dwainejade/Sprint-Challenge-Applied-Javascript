// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        console.log('Your response: ', res)
        console.log('Topics: ', res.data.topics)

        res.data.topics.forEach(e => {
            const newTab = document.createElement('div')
            const topic = document.querySelector('.topics')
            newTab.appendChild(topic);
            topic.textContent = newTab;
        })
            .catch(err => {
                console.log('Error: ', err)
            })
    })