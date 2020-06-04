const formatWhatsappMessage = (str) => {
    return str.replace(' ', '%20')
}

export const FooterLinks = {
    github: 'https://www.github.com/marianomurad',
    linkedin: 'https://www.linkedin.com/in/marianomurad/',
    whatsapp: 'https://wa.me/5491121834410?text='+ formatWhatsappMessage('Hello I\'ve been reading your portfolio and I would like to get in contact with you for a job proposal.'),
}
