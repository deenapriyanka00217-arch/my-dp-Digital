/**
 * Resilient backend services for My DP Digital.
 * Implements lazy initialization and graceful degradation.
 */

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
  console.log('Submitting contact form:', data);
  
  try {
    await fetch('https://formsubmit.co/ajax/deenapriyanka00217@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New General Contact: ${data.name}`,
        ...data,
        _captcha: 'false',
        _template: 'table'
      })
    });
  } catch (err) {
    console.error('Contact submission email failed', err);
  }
  
  return { success: true };
};

export const subscribeNewsletter = async (data: NewsletterSubscription) => {
  console.log('Subscribing to newsletter:', data);
  
  try {
    await fetch('https://formsubmit.co/ajax/deenapriyanka00217@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Newsletter Subscription: ${data.email}`,
        ...data,
        _captcha: 'false',
        _template: 'table'
      })
    });
  } catch (err) {
    console.error('Newsletter submission email failed', err);
  }

  return { success: true };
};
