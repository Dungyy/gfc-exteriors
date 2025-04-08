// src/app/actions/contact.js
'use server';

import { redirect } from 'next/navigation';

export async function submitContactForm(formData) {
    // Extract form data
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    // Validate the data
    if (!name || !email || !phone) {
        return {
            success: false,
            message: 'Please fill in all required fields',
        };
    }

    try {
        // 1. Send an email (using a service like SendGrid, Nodemailer, etc.)
        // 2. Store the message in a database
        // 3. Create a ticket in a CRM system

        // Example: Log the submission (for development)
        console.log('Form submission:', {
            name,
            email,
            phone,
            service,
            message,
        });

        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Return success
        return {
            success: true,
            message: 'Your message has been submitted. We will contact you soon!',
        };
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            success: false,
            message: 'There was an error submitting your message. Please try again later.',
        };
    }
}
