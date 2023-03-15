export const getRandomEmail = () => {
    const random = Math.floor(Math.random() * 10000);
    return `test${random}@test.com`;
  };

  export const getRandomPassword = () => {
    return Math.random().toString(36).slice(-8);
  };
