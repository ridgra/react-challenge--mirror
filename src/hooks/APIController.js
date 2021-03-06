const clientId = process.env.REACT_APP_CLIENTIDSPOTIFY;
const clientSecret = process.env.REACT_APP_CLIENTSECRETSPOTIFY;

const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
    },
    body: 'grant_type=client_credentials',
  });

  const data = await result.json();
  return data.access_token;
};

export default getToken;
