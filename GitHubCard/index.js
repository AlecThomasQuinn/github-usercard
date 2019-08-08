/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/AlecThomasQuinn
*/
const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/AlecThomasQuinn')
    .then( response => {
        console.log('have data:', response.data);
        const cardDataObject = response.data;
        console.log(cardDataObject);

        const card = createCard(response.data);

        cards.appendChild(card);
    })
    .catch( err => {
        console.log('have not data');
    })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3. 
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(singleObject){

  //create elements
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('p');
  const cardUserLocation = document.createElement('p');
  const cardUserProfile = document.createElement('p');
  const cardUserProfileAnchor = document.createElement('a');
  const cardUserFollowers = document.createElement('p');
  const cardUserFollowing = document.createElement('p');
  const cardUserBio = document.createElement('p');

  //create structer and heirarchy
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  card.appendChild(cardName);
  card.appendChild(cardUsername);
  card.appendChild(cardUserLocation);
  card.appendChild(cardUserProfile);
  cardUserProfile.appendChild(cardUserProfileAnchor);
  card.appendChild(cardUserFollowers);
  card.appendChild(cardUserFollowing);
  card.appendChild(cardUserBio);

  //set classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');


  //set properties 

  cardImg.src = singleObject.avatar_url;
  cardName.textContent = singleObject.name;
  cardUsername.textContent = singleObject.name;
  cardUserLocation.textContent = `Location:, ${singleObject.location}`;
  cardUserProfileAnchor.href = singleObject.html_url;
  cardUserFollowers.textContent = `Followers: ${singleObject.followers}`;
  cardUserFollowing.textContent = `Following: ${singleObject.following}`;
  cardUserBio.textContent = `Bio: ${singleObject.bio}`;


  return card;
};
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const followersArray = [];

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/