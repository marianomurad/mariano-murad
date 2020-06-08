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
            'Accomplishing in the majority of the cases 1 level support tasks for the hole plant. Later on that same year I ended up working into the development division and finding my first steps into Software Development'
    },
    {
        company: 'Quadminds Technologies, Argentina',
        title: 'Software Developer',
        startDate: 'Feb 19',
        endDate: 'Sept 19',
        desc: 'Having ended my internship in the Ford Motor Company, I’ve set as a personal goal to grow my developer skills.\n' +
            'Working in Quadminds Technologies, helped me accomplish that goal, working with technologies such as React, React Native, Node.js and PHP applied to Logistics Automation services.\n'
    },
    {
        company: 'Kin and Carta (former Solstice)',
        title: 'Software Developer',
        startDate: 'Oct 19',
        endDate: 'Today',
        desc: 'After a few months on Quadminds, I took a decision that probably changed me for better, I was in need of new challenges that could make me a better developer and get me to know the business better.\n' +
            'Changing to a Consulting services Company, and working with top of the notch clients such as Rockwell Automation and Lexus wasn\'t an easy task. But made me succeed as a professional in many ways giving me additional skills, such as getting to know processes of the business, how to handle, translate and implement clients needs on a daily basis \n'
    }
    ]
export const techList = []
export const contactList = []
