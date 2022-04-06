const { User } = require("discord.js");
const Review = require("../model/review");

exports.addReview = async (req, res) => {
  const owner = req.userId;

  const { about, rating, comment } = req.body;

  const newReview = new Review({
    owner,
    about,
    rating,
    comment,
  });

  const review = await newReview.save();

  await updateUserRating(review);

  res.json(review);
};

async function updateUserRating(review) {
  const about = review.about;

  await User.findOneAndUpdate({ _id: about }, { 
    $inc: { 
      ratingTotal: review.rating, 
      ratingCount: 1 
    }
  });
}
