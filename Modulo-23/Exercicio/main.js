document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.github.com/users/BrunoOliveira16';
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const userName = document.querySelector('#userName');
    const publicRepos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const userLink = document.querySelector('#link');

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url
            name.innerText = json.name;
            userName.innerText = `@${json.login}`;
            publicRepos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            userLink.href = json.html_url;
        })
})