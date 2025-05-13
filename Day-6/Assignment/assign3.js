async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
}

fetchUserData(1); // ✅ valid
fetchUserData(9999); // ❌ will throw error
