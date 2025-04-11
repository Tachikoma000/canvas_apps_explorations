# Canvas Notes App with Real-Time Collaboration

A collaborative canvas application that allows multiple users to work on the same canvas in real-time. Create notes, make connections, and collaborate with others from anywhere.

## Features

- **Real-time Collaboration**: All changes sync instantly across users
- **Single Global Canvas**: Everyone connects to the same workspace automatically
- **User Awareness**: See where other users are working with live cursor tracking
- **Offline Support**: Changes persist locally even when offline
- **Responsive Design**: Works on desktop and tablet devices

## Technology Stack

- React for the UI
- Valtio for state management
- Yjs for real-time collaboration
- WebRTC for peer-to-peer connections
- IndexedDB for local persistence
- XYFlow (React Flow) for the canvas visualization

## Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Collaboration Features

The app uses Yjs with WebRTC for peer-to-peer collaboration. All users automatically join the same room (defined in `src/config.js`).

Key collaboration files:
- `src/yjs/yjs.js` - Core Yjs setup
- `src/store/canvasStore.js` - Synchronized state store
- `src/yjs/useSyncToYjsEffect.js` - Hook that connects React to Yjs
- `src/yjs/Cursors.js` - Remote cursor visualization
- `src/yjs/persistenceProvider.js` - Local data persistence

## Deployment on Vercel

This app is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React app
3. No special environment variables are required
4. The deployment will use the configuration in vercel.json

### Production Considerations

For better cross-network collaboration in production:
- For enterprise use, consider setting up a dedicated signaling server
- Update the iceServers in src/config.js with your own TURN server credentials
- For large teams, consider implementing user authentication and multiple canvases

## Performance Optimization

The collaborative features have been optimized for performance:
- Efficient data structures for quick lookups
- Debounced updates for text editing
- Suppressed unnecessary console warnings
- Local persistence for better offline experience
- STUN/TURN server integration for reliable connections

## License

MIT
