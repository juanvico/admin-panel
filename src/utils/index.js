export const userSafeUrl = (user) => {
  if(user) {
    const userFixed = user;
    if(userFixed.picture && userFixed.picture.length > 0) {
      userFixed.picture = userFixed.picture.replace('http:', 'https:');
    }
    return userFixed;
  }
  return user;
}