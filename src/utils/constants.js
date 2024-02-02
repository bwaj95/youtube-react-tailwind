const YT_API_KEY = "AIzaSyDiXlFN1HiEwGVEbe9bLCn2JSnabRRDPdk";

export const YT_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YT_API_KEY}`;

export const YT_SEARCH_SUGGEST_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YT_KEYWORD_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${YT_API_KEY}&type=video`;

export const YT_COMMENT_THREADS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&key=${YT_API_KEY}`;
