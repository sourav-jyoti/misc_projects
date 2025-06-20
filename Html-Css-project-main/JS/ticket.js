// script.js
function generateTicket() {
    // Get user input
    var name = document.getElementById("name").value;
    var registrationNo = document.getElementById("registrationNo").value;

    // Create a ticket string
    var ticket = `
        <h2>Ticket Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Registration No.:</strong> ${registrationNo}</p>

        <p>Thank you for registering! Your ticket is confirmed.</p>
    `;

    // Display the ticket
    var ticketContainer = document.getElementById("ticketContainer");
    ticketContainer.innerHTML = ticket;
    ticketContainer.style.display = "block";
}

function paynow(){
    window.location.href = './pay.html';
}