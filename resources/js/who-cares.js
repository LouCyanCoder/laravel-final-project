// it was used in books project as tool for fetching data from API 

const loadHelp = async () => {

    const response = await fetch('/api/users/latest');
    const data = await response.json();

    const container = document.getElementById('latest-users');

    data.forEach(user => {

        container.innerHTML += `<li>${user.latest}</li>`

    })

}

loadHelp();