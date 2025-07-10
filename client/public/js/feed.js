document.addEventListener('DOMContentLoaded', () => {
    const portal = document.getElementById('portal_button');
    if (portal) {
      portal.addEventListener('click', () => {
        goToLocation('http://my.marist.edu');
      });
    }
});
const currentStories = [
    {
      title: 'Ponyo',
      body: 'Ponyo is a Japanese animated film that tells the story of a goldfish named Ponyo who escapes from the ocean and is helped by a five-year-old human boy named Sōsuke.',
      linkUrl: 'https://th.bing.com/th/id/R.d23ff93e924cf7c020780156486e6a43?rik=gqp3xn%2beKXJjRw&riu=http%3a%2f%2fmoviemezzanine.com%2fwp-content%2fuploads%2fponyo.png&ehk=wFArsS6LimzRtf4i91scxGr1VSBtDRpEbfygRvndmN0%3d&risl=&pid=ImgRaw&r=0',

    },
    {
      title: 'Spirited Away',
      body: 'A young girl named Chihiro becomes trapped in a mysterious place; as Chihiro navigates this strange realm, she embarks on a journey to find a way back to her own world.',
      linkUrl: 'https://www.liveabout.com/thmb/rD4CxUzijKaLQLVK8AR9xjqy0gQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/SpiritedAway-57a97fec5f9b58974af2187f.jpg',
     
    },
    {
      title: 'Grave of The Fireflies',
      body: 'Seit, a teenager charged with the care of his younger sister, Setsuko, after an American firebombing during World War II. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.',
      linkUrl: 'https://cdn2.shopify.com/s/files/1/0747/3829/products/HP2564_be44d685-49ba-4119-a5d6-4cdc0d5c5fd8_1024x1024.jpg?v=1515503862',
       
    }
];
function displayItem(item) {
    const container = document.getElementById('newsfeed');
    if (!container) return;
    const storyHTML = `
      <div class="feedItem">
        <h2><a href="${item.linkUrl}" target="_blank">${item.title}</a></h2>
        <img src="${item.linkUrl}" alt="${item.title}" >
        <p>${item.body}</p>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', storyHTML);
}
  
window.addEventListener('load', () => {
    // portal button navigation
    const portal = document.getElementById('portal_button');
    if (portal) portal.addEventListener('click', () => goToLocation('https://gkids.com/ghiblifest/'));
  
    // populate feed
    currentStories.forEach(displayItem);
});
window.addEventListener('load', () => {
    // Select all images inside the #newsfeed container
    const images = document.querySelectorAll('#newsfeed img');
  
    images.forEach(img => {
      img.style.width = '200px';  // Set the desired width
      img.style.height = 'auto';  // Maintain aspect ratio :contentReference[oaicite:1]{index=1}
    });
});
