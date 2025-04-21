function sendEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const inquiry = document.getElementById('inquiry').value;
    
    const mailtoLink = `mailto:support@roccia.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Inquiry:\n${inquiry}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Reset form after submission
    document.getElementById('contactForm').reset();
    
    // Optional: Show success message
    alert('Thank you for your inquiry. We will redirect you to your email client.');
}

