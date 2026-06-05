async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();
        const userDetails = users.map( user => ({
            name : user.name,
            email :user.email,
            company : user.company.name
        }))

        const userContainer = document.getElementById("userContainer");
        userDetails.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("user-card");
            card.innerHTML =`
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p>${user.company}</p>
            `;
             userContainer.appendChild(card);
        });

    } catch (error) {

        console.error("Error:", error.message);

        document.getElementById("userContainer").innerHTML = `
            <div class="user-card">
                <p>Unable to load users.</p>
            </div>
        `;
    }
}

fetchUsers();