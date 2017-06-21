let gapi = '';

async function init(){
  gapi = await require( 'google-client-api' )();
  try {
    await gapi.client.init({
      'apiKey': process.env.REACT_APP_API_KEY,
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'] 
    });
    console.log('GAPI Initialized.');
  } catch (error) {
      console.warn('Error: ' + error);
  }
}

export const youTube = {
  async search(maxResults = '3', q = '', type = 'video'){
    console.log(maxResults, q, type);
    try {
      await init();
      return await gapi.client.youtube.search.list({
        maxResults,
        part: 'snippet',
        q,
        type
      });   
    } catch (error) {
        console.warn('Error: ' + error);
    }
  },
  async getVideos(id){
    try {
      await init();
      return await gapi.client.youtube.videos.list({
        id,
        part: 'snippet,contentDetails'
      });   
    } catch (error) {
        console.warn('Error: ' + error);
    }
  }
}
