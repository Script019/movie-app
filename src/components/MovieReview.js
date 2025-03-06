import { useState } from "react";

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", rating: "", text: "" });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: "", text: "" });
    }
  };

  return (
    <div className="reviews">
      <h2>Movie Reviews</h2>
      {reviews.length === 0 ? <p>No reviews yet.</p> : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.name}</strong> - {review.rating}⭐
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      )}

      <h3>Leave a Review</h3>
      <form onSubmit={handleReviewSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          required
        />
        <select
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
          required
        >
          <option value="">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        <textarea
          placeholder="Write your review..."
          value={newReview.text}
          onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default MovieReview;
