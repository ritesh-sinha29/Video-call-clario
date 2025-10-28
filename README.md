# Video-call-clario

A modern video conferencing application built with Next.js that enables smooth meetings between mentors and mentees. This application is part of Clario, an AI-powered one-stop career guidance platform.

![Clario Logo](/public/logo.png)

## Features

- **Instant Video Meetings**: Create or join video calls with a simple interface
- **Custom Room Creation**: Generate unique meeting rooms with one click
- **User Identification**: Enter your name to join meetings
- **Modern UI**: Clean, responsive interface with gradient styling
- **Room Sharing**: Easy sharing of meeting links

## Technologies Used

- **Frontend**: Next.js 16, React 19, TypeScript
- **Video SDK**: ZegoCloud UIKit
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Utilities**: UUID for room ID generation

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ritesh-sinha29/Video-call-clario.git
   cd Video-call-clario
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add your ZegoCloud credentials:
   ```
   NEXT_PUBLIC_ZEGO_APP_ID=your_app_id
   NEXT_PUBLIC_ZEGO_SERVER_SECRET=your_server_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter your name (minimum 3 characters)
2. Either:
   - Create a new meeting room by clicking "Create Meeting"
   - Join an existing room by entering the Room ID and clicking "Join Meeting"
3. Share the Room ID with others to invite them to your meeting
4. Enjoy your video conference with all ZegoCloud features

## Deployment

This application can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
npm run start
```

## Security Note

The current implementation includes client-side token generation for ZegoCloud. For production use, it's recommended to move token generation to a server-side API endpoint.

## License

[MIT](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- [ZegoCloud](https://www.zegocloud.com/) for their video SDK
- [Next.js](https://nextjs.org/) for the React framework
- [TailwindCSS](https://tailwindcss.com/) for styling

