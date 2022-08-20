const formatWhatsappMessage = (str) => {
  return str.replace(" ", "%20");
};

export const FooterLinks = {
  github: "https://www.github.com/marianomurad",
  linkedin: "https://www.linkedin.com/in/marianomurad/",
  whatsapp:
    "https://wa.me/5491121834410?text=" +
    formatWhatsappMessage(
      "Hello I've been reading your portfolio and I would like to get in contact with you for a job proposal."
    ),
};

export const expList = [
  {
    company: "Ford Motor Company",
    title: "Intern",
    startDate: "Jan 17",
    endDate: "Jan 18",
    clients: [
      {
        name: "Sharepoint Sites",
        overview:
          "Helped maintain & renovate sharepoint internal sites.",
        stack: ["Javascript", "Css", "Html"],
      },
    ],
  },{
    company: "Quadminds",
    title: "Fullstack Engineer",
    startDate: "Jan 18",
    endDate: "Jan 19",
    clients: [
      {
        name: "YPF",
        overview:
          "Helped the client create a unique mobile & desktop experience to deliver & track fuel into their clients.",
        dailyTasks:
          "Daily Tasks Included, developing high end mobile & desktop applications, reviewing code, having weekly talks & updates with the client.",
        stack: ["React", "React Native", "Node", "PHP"],
      },
      {
        name: "Argentinian Airlines",
        overview:
          " Helped the client renovate their dashboard experience to book travel tickets. ",
        dailyTasks:
          "Daily Tasks Included, developing high end mobile & desktop applications, reviewing code, having weekly talks & updates with the client.",
        stack: ["React", "React Native", "Node", "PHP"],
      },
    ],
  },
  {
    company: "Kin And Carta",
    title: "Fullstack Engineer",
    startDate: "Jan 19",
    endDate: "Jan 21",
    clients: [
      {
        name: "Rockwell Automation",
        overview:
          "Helped the client enhance their current platform to support clients helping them track products & services in their internal application",
        dailyTasks:
          "Daily Tasks Included, developing high end code, migrating backend applications, reviewing code.",
        stack: ["Angular 9+", "React", "Mulesoft", ".NET Core", "Node.js ."],
      },
      {
        name: "Lexus Europe",
        overview:
          "Helped the client start migrating a CMS based platform using legacy code to a react micro frontend based cms platform.",
        dailyTasks:
          "Daily Tasks included, developing high end code, reviewing code.",
        stack: ["Backbone", "Nunjucks", "Node.JS", "React", "Tridion(CMS)"],
      },
    ],
  },
  {
    company: "Agile Engine",
    title: "Frontend Engineer",
    startDate: "Jan 21",
    endDate: "Today",
    clients: [
      {
        name: "Estee Lauder Companies (ELC)",
        overview:
          "Helping them renew their cart experience, replacing both their Cart Page & Mini Cart using React Micro Frontend Services.",
        dailyTasks:
          "Developing high end, pixel perfect react applications. Supporting the rest of the team on their daily tasks, talking with the client to align on the Product Goals & doing demos to show the new features/iteration of existing features & doing code reviews.",
        stack: [
          "Main Legacy sites - React, PHP, Drupal, Perl & Java",
          "New Sites - React, Next, Drupal (CMS), Perl",
          "New Sites - React, Elixir, Perl",
        ],
      },
    ],
  },
];
export const techList = [];
export const contactList = [];
