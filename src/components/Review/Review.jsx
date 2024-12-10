import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Rating,
} from "@mui/material";
import { styled } from "@mui/system";

const ReviewCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(2),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    date: "October 19, 2024",
    review:
      "The service was amazing! Everything was perfect, and I can't wait to come back again. Highly recommended!",
  },
  {
    id: 2,
    name: "James Robertson",
    avatar: "https://i.pravatar.cc/150?img=50",
    rating: 4,
    date: "October 18, 2024",
    review:
      "Great experience overall, though the waiting time could have been shorter. The staff were friendly and professional.",
  },
  {
    id: 3,
    name: "Linda Collins",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4.5,
    date: "October 16, 2024",
    review:
      "Fantastic! The atmosphere was welcoming, and the team went above and beyond to make sure I was comfortable.",
  },
];

const Review = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "70vh" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Customer Reviews
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <ReviewCard>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" color="textPrimary">
                      {review.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {review.date}
                    </Typography>
                  </Box>
                </Box>
                <Rating
                  name="read-only"
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  size="large"
                />
                <Typography variant="body1" mt={2}>
                  {review.review}
                </Typography>
              </CardContent>
            </ReviewCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Review;
