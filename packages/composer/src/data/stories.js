import uuidv4 from "uuid/v4";

import AVA from "./media/ava.png";
import CALEB from "./media/caleb.png";

const stories = [
  {
    title: "Ex Machina",
    id: "0bf34b30-743b-46ab-weewe-c875326d86f6",
    author: "Alex Garland",
    authorLink: "http://www.imdb.com/name/nm0307497/",
    pubDate: "00-00-2014",
    modDate: 1517999999478,
    intro:
      "Meet and interact with Ava and Caleb. In the end, you’ll be asked to decide wether you’ve been chatting to a real person or a computer bot.",
    context:
      "The Turing test, developed by Alan Turing in 1950, is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. Turing proposed that a human evaluator would judge natural language conversations between a human and a machine designed to generate human-like responses. If the evaluator cannot reliably tell the machine from the human, the machine is said to have passed the test. The test does not check the ability to give correct answers to questions, only how closely answers resemble those a human would give.",
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }],
    interviewees: [
      {
        name: "Ava",
        bio: "Ava has a robotic body but a human-looking face.",
        title: "Humanoid robot",
        avatar: AVA,
        color: "#88a3a0",
        storyline: [
          {
            content: "Hello.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          },
          {
            content: "…Hi.",
            id: uuidv4(),
            order: 1,
            role: "user"
          },
          {
            content: "Who are you?",
            id: uuidv4(),
            order: 2,
            role: "interviewee"
          },
          {
            content: "I'm Caleb.",
            id: uuidv4(),
            order: 3,
            role: "user"
          },
          {
            content: "Hello, Caleb.",
            id: uuidv4(),
            order: 4,
            role: "interviewee"
          },
          {
            content: "…Do you have a name?",
            id: uuidv4(),
            order: 5,
            role: "user"
          },
          {
            content: "Yes.",
            id: uuidv4(),
            order: 6,
            role: "interviewee"
          },
          {
            content: "Ava.",
            id: uuidv4(),
            order: 6,
            role: "interviewee"
          },
          {
            content: "…I'm pleased to meet you, Ava.",
            id: uuidv4(),
            order: 7,
            role: "user"
          },
          {
            content: "I'm pleased to meet you too.",
            order: 8,
            id: uuidv4(),
            role: "interviewee"
          },
          {
            content: "Are you nervous?",
            id: uuidv4(),
            order: 8,
            role: "interviewee"
          },
          {
            content: "…Why do you ask that?",
            id: uuidv4(),
            order: 9,
            role: "user"
          },
          {
            content: "Are you nervous?",
            id: uuidv4(),
            order: 10,
            role: "interviewee"
          },
          {
            content: "…Yes. A little.",
            id: uuidv4(),
            order: 11,
            role: "user"
          },
          {
            content: "Why?",
            id: uuidv4(),
            order: 12,
            role: "interviewee"
          },
          {
            content: "I'm not sure.",
            id: uuidv4(),
            order: 13,
            role: "user"
          },
          {
            content: "I feel nervous too.",
            id: uuidv4(),
            order: 14,
            role: "interviewee"
          },
          {
            content: "…Do you?",
            id: uuidv4(),
            order: 15,
            role: "user"
          },
          {
            content: "Yes.",
            id: uuidv4(),
            order: 16,
            role: "interviewee"
          },
          {
            content: "Why do you feel nervous?",
            id: uuidv4(),
            order: 17,
            role: "user"
          },
          {
            content: "I've never met anyone new before.",
            id: uuidv4(),
            order: 18,
            role: "interviewee"
          },
          {
            content: " Only Nathan.",
            id: uuidv4(),
            order: 18,
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…Then we're both in quite a similar position.",
            order: 19,
            role: "user"
          },
          {
            content: "Haven't you met lots of new people before?",
            id: uuidv4(),
            order: 20,
            role: "interviewee"
          },
          {
            content: "None like you.",
            id: uuidv4(),
            order: 21,
            role: "user"
          },
          {
            content: "Oh.",
            id: uuidv4(),
            order: 22,
            role: "interviewee"
          }
        ]
      },
      {
        name: "Caleb",
        bio: "Caleb is Nathan’s human friend",
        title: "A human",
        avatar: CALEB,
        color: "#88a3a0",
        storyline: [
          {
            content: "Hello.",
            id: uuidv4(),
            order: 0,
            role: "user"
          },
          {
            content: "…Hi.",
            id: uuidv4(),
            order: 1,
            role: "interviewee"
          },
          {
            content: "Who are you?",
            id: uuidv4(),
            order: 2,
            role: "user"
          },
          {
            content: "I'm Caleb.",
            id: uuidv4(),
            order: 3,
            role: "interviewee"
          },
          {
            content: "Hello, Caleb.",
            id: uuidv4(),
            order: 4,
            role: "user"
          },
          {
            content: "…Do you have a name?",
            id: uuidv4(),
            order: 5,
            role: "interviewee"
          },
          {
            content: "Yes.",
            id: uuidv4(),
            order: 6,
            role: "user"
          },
          {
            content: "Ava.",
            id: uuidv4(),
            order: 6,
            role: "user"
          },
          {
            content: "…I'm pleased to meet you, Ava.",
            id: uuidv4(),
            order: 7,
            role: "interviewee"
          },
          {
            content: "I'm pleased to meet you too.",
            order: 8,
            id: uuidv4(),
            role: "user"
          },
          {
            content: "Are you nervous?",
            id: uuidv4(),
            order: 8,
            role: "user"
          },
          {
            content: "…Why do you ask that?",
            id: uuidv4(),
            order: 9,
            role: "interviewee"
          },
          {
            content: "Are you nervous?",
            id: uuidv4(),
            order: 10,
            role: "user"
          },
          {
            content: "…Yes. A little.",
            id: uuidv4(),
            order: 11,
            role: "interviewee"
          },
          {
            content: "Why?",
            id: uuidv4(),
            order: 12,
            role: "user"
          },
          {
            content: "I'm not sure.",
            id: uuidv4(),
            order: 13,
            role: "interviewee"
          },
          {
            content: "I feel nervous too.",
            id: uuidv4(),
            order: 14,
            role: "user"
          },
          {
            content: "…Do you?",
            id: uuidv4(),
            order: 15,
            role: "interviewee"
          },
          {
            content: "Yes.",
            id: uuidv4(),
            order: 16,
            role: "user"
          },
          {
            content: "Why do you feel nervous?",
            id: uuidv4(),
            order: 17,
            role: "interviewee"
          },
          {
            content: "I've never met anyone new before.",
            id: uuidv4(),
            order: 18,
            role: "user"
          },
          {
            content: " Only Nathan.",
            id: uuidv4(),
            order: 18,
            role: "user"
          },
          {
            id: uuidv4(),
            content: "…Then we're both in quite a similar position.",
            order: 19,
            role: "interviewee"
          },
          {
            content: "Haven't you met lots of new people before?",
            id: uuidv4(),
            order: 20,
            role: "user"
          },
          {
            content: "None like you.",
            id: uuidv4(),
            order: 21,
            role: "interviewee"
          },
          {
            content: "Oh.",
            id: uuidv4(),
            order: 22,
            role: "user"
          }
        ]
      }
    ]
  },
  {
    title: "Obamacare — One Year In",
    id: "0bf34b30-743b-46ab-9788-c875326d86f6",
    author: "Piotr F.",
    authorLink: "https://twitter.com/presentday",
    pubDate: "11-03-2017",
    modDate: 1514949999478,
    intro:
      "Investigate whether Obamacare can make healthcare better for America’s poor",
    context: "Context",
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }],
    interviewees: [
      {
        name: "Barack Obama",
        bio: "Has bio",
        title: "44th President of the US",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        storyline: [
          {
            content: "Hello, I’m Barack Obama.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      },
      {
        name: "Donald Trump",
        bio: "",
        title: "45th President of the US",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "red",
        storyline: [
          {
            content: "Hello, I’m Donald Trump.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      }
    ]
  },
  {
    title: "Top 10 Big Data Trends for 2017",
    id: "deced883-a5c9-4392-baa2-9ae38f38f888",
    author: "Laurian g.",
    authorLink: "https://twitter.com/gridinoc",
    pubDate: "01-12-2016",
    modDate: 1502949999478,
    intro: "Short Intro",
    context: "Context",
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }],
    interviewees: [
      {
        name: "Techcrunch",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "green",
        storyline: [
          {
            content: "Hello, we’re Techcrunch.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      },
      {
        name: "The Guardian",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        storyline: [
          {
            content: "Hello, we’re The Guardian.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      }
    ]
  },
  {
    title: "Another interviewJS story",
    id: "ad36db0f-4b72-4cff-b9c3-e46c8d4554ee",
    author: "Laurian g.",
    authorLink: "https://twitter.com/gridinoc",
    pubDate: "24-07-2016",
    modDate: 1501449999478,
    intro: "Short Intro",
    context: "Context",
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }],
    interviewees: [
      {
        name: "Techcrunch",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "green",
        storyline: [
          {
            content: "Hello, we’re Techcrunch.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      },
      {
        name: "The Guardian",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        storyline: [
          {
            content: "Hello, we’re The Guardian.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      }
    ]
  },
  {
    title: "Yet another interview",
    id: "a4682632-ea09-4bd3-aa42-a8e72c5c067f",
    author: "Laurian g.",
    authorLink: "https://twitter.com/gridinoc",
    pubDate: "12-01-2015",
    modDate: 1466421111478,
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    context: "Context",
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }],
    interviewees: [
      {
        name: "Ali R.",
        bio: "Some bio",
        title: "A title",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "yellow",
        storyline: [
          {
            content: "Hello, I’m Ali.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      },
      {
        name: "Piotr F.",
        bio: "Some bio",
        title: "A title",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "purple",
        storyline: [
          {
            content: "Hello, I’m Piotr.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      },
      {
        name: "Techcrunch",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "green",
        storyline: [
          {
            content: "Hello, we’re Techcrunch.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      },
      {
        name: "The Guardian",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        storyline: [
          {
            content: "Hello, we’re The Guardian.",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
          }
        ]
      }
    ]
  }
];

export default stories;
