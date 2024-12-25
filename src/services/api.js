export const fetchUserByDOB = async (dob) => {
    try {
      const response = await fetch(`/users/dob/${dob}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  };
  