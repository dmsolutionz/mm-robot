let hasError = false;

// True or false
export const setError = (error: boolean) => {
  hasError = error;
};

export const getError = () => {
  if (hasError) {
    return "Invalid input!";
  }
};
