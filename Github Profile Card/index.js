const githubUserName = "1hanzla100"

var profileData;

getProfileData = async () => {
    await axios.get(`https://api.github.com/users/${githubUserName}`)
        .then(res => profileData = res.data)
        .catch(err => console.log(err))

    document.getElementById("name").innerHTML = `Hi All I'm ${profileData.login}`
    document.getElementById("avatar").src = profileData.avatar_url
    document.getElementById("bio").innerHTML = profileData.bio
    document.getElementById("location").innerHTML = profileData.location
}
getProfileData();
