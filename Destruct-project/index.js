function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }
  
  getFullName({ firstName: 'ana', lastName: 'martinez' }); // => ana martinez
  