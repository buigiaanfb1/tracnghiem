export const handleLike = (user, commentIndex, type) => {
  if (type === 'like' || type === 'dislike') {
    if (commentIndex.like.length === 0 && commentIndex.dislike.length === 0) {
      commentIndex[type].push(user);
      return commentIndex;
    } else if (type === 'like') {
      // Remove in dislike
      let cleanDislike = commentIndex.dislike.filter(
        (userDisliked) => userDisliked._id !== user._id
      );
      commentIndex.dislike = cleanDislike;

      // Check if exist user in like mean user unlike else user like
      let checkLikeIndex = commentIndex.like.findIndex(
        (userLiked) => userLiked._id === user._id
      );
      // !== -1 mean user already like, so we will unlike
      if (checkLikeIndex !== -1) {
        commentIndex.like.splice(checkLikeIndex, 1);
      } else {
        // else push new user to like array
        commentIndex.like.push(user);
      }
      return commentIndex;
    } else if (type === 'dislike') {
      // Remove in like
      let cleanLike = commentIndex.like.filter(
        (userLiked) => userLiked._id !== user._id
      );

      commentIndex.like = cleanLike;

      // Check if exist user in like mean user unlike else user like
      let checkDislikeIndex = commentIndex.dislike.findIndex(
        (userDisliked) => userDisliked._id === user._id
      );
      // !== -1 mean user already like, so we will unlike
      if (checkDislikeIndex !== -1) {
        commentIndex.dislike.splice(checkDislikeIndex, 1);
      } else {
        // else push new user to like array
        commentIndex.dislike.push(user);
      }
      return commentIndex;
    }
  }
  return 0;
};
