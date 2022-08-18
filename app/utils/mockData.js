const formatWhatsappMessage = (str) => {
    return str.replace(' ', '%20')
}

export const FooterLinks = {
    github: 'https://www.github.com/marianomurad',
    linkedin: 'https://www.linkedin.com/in/marianomurad/',
    whatsapp: 'https://wa.me/5491121834410?text='+ formatWhatsappMessage('Hello I\'ve been reading your portfolio and I would like to get in contact with you for a job proposal.'),
}

export const expList = [
    {
        company: 'Ford Motor Company',
        title: 'Intern',
        startDate: 'Apr 18',
        endDate: 'Oct 18',
        desc: 'As a first real world experience I’ve immersed myself in the Ford Motor Company world as an Intern on the Infrastructure Division in Pacheco Plant, Argentina.' +
            'Accomplishing in the majority of the cases 1 level support tasks for the hole plant. Later on that same year I ended up working into the development division and finding my first steps into Software Development.'
    },
    {
        company: 'Quadminds Technologies',
        title: 'Software Developer',
        startDate: 'Feb 19',
        endDate: 'Sept 19',
        desc: 'Having ended my internship in the Ford Motor Company, I’ve set as a personal goal to grow my developer skills.\n' +
            'Working in Quadminds Technologies, helped me accomplish that goal, working with technologies such as React, React Native, Node.js and PHP applied to Logistics Automation services.\n',
        clients: [
            {
                name: 'YPF',
                role: 'Full Stack Developer',
                description: '',
                stack: 'React, React Native & Node + Firebase'
            },
            {
                name: 'Aerolineas Argentinas',
                role: 'Fullstack Developer',
                description: '',
                stack: 'React & Node + PHP'
            }
        ]
    },
    {
        company: 'Kin and Carta (former Solstice)',
        title: 'Full Stack Engineer',
        startDate: 'Oct 19',
        endDate: 'Mar 21',
        desc: 'Kin & Carta is a Consulting services company ',
        clients: [
            {
                name: 'Rockwell Automation',
                role: 'Fullstack Developer',
                description: '',
                stack: 'React, Angular, Mulesoft & .NET (Framework & Core)'
            },
            {
                name: 'Lexus',
                role: 'Fullstack Developer',
                description: '',
                stack: 'Backbone, Jquery, React & Node + CMS (Tridion)'
            }
        ]
    },
    {
        company: 'Agile Engine',
        title: 'Frontend Developer',
        startDate: 'Mar 21',
        endDate: 'Today',
        desc: 'Agile engine is a consulting company',
        clients: [
            {
                name: 'ELC - Cart',
                role: 'Frontend Developer',
                description: '',
                stack: 'React & PHP (Drupal) + Perl'
            },
            {
                name: 'ELC',
                role: 'Frontend Developer',
                description: '',
                stack: 'React (NextJS) & PHP (Drupal) + Perl'
            },
            {
                name: 'ELC - Promotions (Cart)',
                role: 'Frontend Developer',
                description: '',
                stack: 'React (NextJS) & PHP (Drupal) + Perl'
            }
        ]
    }
    ]
export const techList = []
export const contactList = []
