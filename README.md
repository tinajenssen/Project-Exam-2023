# project-exam-2023

API dokumentasjon
https://docs.noroff.dev (social endpoints)
Noroff API: https://nf-api.onrender.com/docs/static/index.html

1. Hvordan kan jeg lagre navnet fra registrering/innlogging for så å bruke det i navigasjonen for å vise hvilken profil som er innlogget? for å erstatte der det nå står "username".

Username linker til userprofile side. hvor jeg ønsker at avatar og banner som ble lastet opp ved registrering skal vises.

2. Hvordan kan lage en logout function som logger ut brukeren og fjerner den fra localStorage?

3. Navnet på den som har skrevet posten skal linke til den profilen. js/api/posts/post/PostElement.jsx
<Link className="author__name mx-1">
    {" "}
    {post.author && post.author.name}
</Link>
jeg vil at det skal linke til profil side, sånn som det gjør fra "profiles". js/api/profiles/ProfileList.jsx
