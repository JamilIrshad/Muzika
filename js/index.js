//For current year
var year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

// Functionality for AWS API
var form = document.getElementById("newsletterForm");

// Functionality for AWS API
document.querySelector('#news_submit').addEventListener('click', async function (event) {
  event.preventDefault();

  try {
    let news_name = document.querySelector('#news_name').value;
    let news_email = document.querySelector('#news_email').value;

    //Custom API Gateway URL
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: news_name,
        email: news_email,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
});
