import { useState } from 'react';
import { uploadResource } from '../services/api';
import './UploadModal.css';

const UploadModal = ({ isOpen, onClose, onUploadSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    year: '',
    type: ''
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.title || !formData.subject || !formData.year || !formData.type || !file) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const uploadData = new FormData();
      uploadData.append('title', formData.title);
      uploadData.append('subject', formData.subject);
      uploadData.append('year', formData.year);
      uploadData.append('type', formData.type);
      uploadData.append('pdf', file);

      await uploadResource(uploadData);
      
      // Reset form
      setFormData({ title: '', subject: '', year: '', type: '' });
      setFile(null);
      onUploadSuccess();
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Upload Resource</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Mathematics Final Exam"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="e.g., Mathematics"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                placeholder="2023"
                min="1900"
                max="2100"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              >
                <option value="">Select type</option>
                <option value="Final Exam">Final Exam</option>
                <option value="Mid Term">Mid Term</option>
                <option value="Quiz">Quiz</option>
                <option value="Assignment">Assignment</option>
                <option value="Practice Paper">Practice Paper</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pdf">PDF File</label>
            <input
              type="file"
              id="pdf"
              accept=".pdf"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;