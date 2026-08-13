# My Space Backend

Secure backend server for the My Space music player application.

## Features

✅ **Secure API Key Management** - API keys are stored server-side, never exposed to frontend
✅ **Rate Limiting** - Prevents abuse with built-in request throttling
✅ **Error Handling** - Graceful error responses with fallbacks
✅ **CORS Support** - Secure cross-origin requests
✅ **YouTube Integration** - Proxy for YouTube Data API v3
✅ **Pexels Integration** - Proxy for Pexels background photos API
✅ **Visitor Counter** - Aggregates visitor count safely

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and add your API keys:

```bash
cp .env.example .env
```

Edit `.env` and add:
- **YOUTUBE_API_KEY**: Get from [Google Cloud Console](https://console.cloud.google.com)
  - Enable "YouTube Data API v3"
  - Create an API key
  
- **PEXELS_API_KEY**: Get from [Pexels API](https://www.pexels.com/api/)
  - Sign up for free API key

### 3. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000` (default)

### 4. Update Frontend

Update the `API_BASE_URL` in your frontend `index.html` to point to your backend:

```javascript
const API_BASE_URL = 'http://localhost:3000/api';
```

For production, update to your deployed backend URL.

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns: `{ status: 'ok' }`

### YouTube Search
- **GET** `/api/youtube/search?query=<search>&maxResults=<number>`
- Returns: `{ success: true, data: [videoIds] }`

### Get Romantic Photo
- **GET** `/api/photos/romantic`
- Returns: `{ success: true, data: { url: 'photo-url' } }`

### Get Visitor Count
- **GET** `/api/visitors/count`
- Returns: `{ success: true, data: { count: number } }`

## Deployment

### Heroku
```bash
git push heroku main
```

### Other Platforms
Update the `CORS_ORIGIN` environment variable to match your frontend domain.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| YOUTUBE_API_KEY | YouTube Data API key | AIzaSy... |
| PEXELS_API_KEY | Pexels API key | NWCn1S... |
| PORT | Server port | 3000 |
| NODE_ENV | Environment | development / production |
| CORS_ORIGIN | Frontend URL | http://localhost:5000 |

## Security Notes

🔒 **Never commit `.env` file**
🔒 **API keys are sensitive - rotate them if exposed**
🔒 **Use rate limiting in production**
🔒 **Enable HTTPS in production**
