export async function search(maxResults = '3', q = '', type = 'video'){
  const gapi = await require( 'google-client-api' )();
  console.log(maxResults, q, type);
  try {
    await gapi.client.init({
      'apiKey': process.env.REACT_APP_API_KEY,
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'] 
    });
    console.log('GAPI Initialized.');

    const response = await gapi.client.youtube.search.list({
      maxResults,
      part: 'snippet',
      q,
      type
    });
    
    response.result.items.forEach((item) => {
        console.group();
        console.log(item.id.videoId);
        console.log(item.snippet);
        console.groupEnd();
      });    
  } catch (error) {
      console.warn('Error: ' + error);
  }
}
