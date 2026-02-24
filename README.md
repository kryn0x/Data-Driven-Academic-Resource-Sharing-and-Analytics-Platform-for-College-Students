# Academic Resource Sharing Platform

A modern SaaS-style web application for uploading, analyzing, and sharing academic question papers with automatic keyword extraction and data-driven insights.

## 🚀 Features

- **PDF Upload & Storage**: Upload previous year question papers in PDF format
- **Automatic Keyword Extraction**: AI-powered text analysis to identify top 5 keywords
- **Modern SaaS UI**: Clean, responsive design with Tailwind CSS styling
- **Resource Management**: Browse, search, and view academic resources
- **Data Analytics**: Visual insights into keyword frequency and patterns
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **Multer** - File upload handling
- **pdf-parse** - PDF text extraction
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
Academic-Resource-Sharing/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── middleware/
│   │   └── upload.js            # Multer configuration
│   ├── models/
│   │   └── Resource.js          # Resource schema
│   ├── routes/
│   │   └── resources.js         # API routes
│   ├── utils/
│   │   └── pdfProcessor.js      # PDF processing utilities
│   ├── uploads/                 # PDF storage directory
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js               # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── package.json
│   └── vite.config.js         # Vite configuration
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohit2212kr/Academic-Resource-Sharing.git
   cd Academic-Resource-Sharing
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/academic-resources?retryWrites=true&w=majority
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on http://localhost:5000

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on http://localhost:3000

## 📚 API Endpoints

### Resources
- `POST /api/resources` - Upload a new PDF resource with metadata
- `GET /api/resources` - Retrieve all resources
- `GET /api/resources/:id` - Get a specific resource by ID

### Request/Response Examples

**Upload Resource (POST /api/resources)**
```javascript
// Form data
{
  title: "Mathematics Final Exam 2023",
  subject: "Mathematics",
  year: 2023,
  type: "Final Exam",
  pdf: [PDF file]
}

// Response
{
  "message": "Resource uploaded successfully",
  "resource": {
    "_id": "...",
    "title": "Mathematics Final Exam 2023",
    "subject": "Mathematics",
    "year": 2023,
    "type": "Final Exam",
    "filename": "1234567890-math-final.pdf",
    "keywords": ["equation", "algebra", "function", "graph", "solution"],
    "uploadDate": "2024-02-25T10:30:00.000Z",
    "fileSize": 1024000
  }
}
```

## 🎨 UI Components

### Landing Page
- **Hero Section**: Compelling headline and call-to-action buttons
- **How It Works**: Three-step process explanation
- **Resource Grid**: Display of uploaded academic resources
- **Navigation**: Clean navbar with routing

### Resource Management
- **Upload Modal**: Form for adding new resources
- **Resource Cards**: Preview cards with metadata and keywords
- **Detail Pages**: Comprehensive resource information
- **Analytics Dashboard**: Keyword insights and study suggestions

## 🔧 Key Features Implementation

### PDF Processing
- Text extraction using pdf-parse library
- Automatic keyword frequency analysis
- Stopword filtering for better results
- Top 5 keyword identification

### File Management
- Secure file upload with validation
- PDF format verification
- Unique filename generation
- Static file serving

### Database Schema
```javascript
{
  title: String (required),
  subject: String (required),
  year: Number (required, 1900-2100),
  type: String (required),
  filename: String (required),
  keywords: [String], // Top 5 keywords
  uploadDate: Date (default: now),
  fileSize: Number
}
```

## 🚀 Deployment

### Backend Deployment
1. Deploy to platforms like Heroku, Railway, or DigitalOcean
2. Set environment variables in production
3. Ensure MongoDB Atlas is accessible

### Frontend Deployment
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy to Vercel, Netlify, or similar platforms
3. Update API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Rohit Kumar** - *Initial work* - [rohit2212kr](https://github.com/rohit2212kr)

## 🙏 Acknowledgments

- Thanks to all contributors who helped shape this project
- Inspired by modern SaaS applications and educational technology
- Built with love for the academic community

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact the maintainers.

---

**Happy Learning! 📚✨**