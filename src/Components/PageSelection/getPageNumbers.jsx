export const getPageNumbers = (pageQuantity, currentPage) => {
  if (pageQuantity <= 6) {
    switch (pageQuantity) {
      case 1:
        return [1];
      case 2:
        return [1, 2];
      case 3:
        return [1, 2, 3];
      case 4:
        switch (currentPage) {
          case 1:
            return [1, 2, '...', 4];
          case 2:
          case 3:
            return [1, 2, 3, 4];
          case 4:
            return [1, '...', 3, 4];
        }
      case 5:
        switch (currentPage) {
          case 1:
            return [1, 2, '...', 5];
          case 2:
            return [1, 2, 3, '...', 5];
          case 3:
            return [1, 2, 3, 4, 5];
          case 4:
            return [1, '...', 3, 4, 5];
          case 5:
            return [1, '...', 4, 5];
        }
      case 6:
        switch (currentPage) {
          case 1:
            return [1, 2, '...', 6];
          case 2:
            return [1, 2, 3, '...', 6];
          case 3:
            return [1, 2, 3, 4, '...', 6];
          case 4:
            return [1, '...', 3, 4, 5, 6];
          case 5:
            return [1, '...', 4, 5, 6];
          case 6:
            return [1, '...', 5, 6];
        }
    }
  } else {
    switch (currentPage) {
      case 1:
        return [1, 2, '...', pageQuantity];
      case 2:
        return [1, 2, 3, '...', pageQuantity];
      case 3:
        return [1, 2, 3, 4, '...', pageQuantity];
      case pageQuantity - 2:
        return [1, '...', pageQuantity - 3, pageQuantity - 2, pageQuantity - 1, pageQuantity];
      case pageQuantity - 1:
        return [1, '...', pageQuantity - 2, pageQuantity - 1, pageQuantity];
      case pageQuantity:
        return [1, '...', pageQuantity - 1, pageQuantity];
      default:
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', pageQuantity];
    }
  }
};