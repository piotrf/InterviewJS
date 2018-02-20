import uuidv4 from "uuid/v4";

import AVA from "./media/ava.png";

const stories = [
  {
    title: "Meeting Ava",
    id: "0bf34b30-743b-46ab-weewe-c875326d86f6",
    author: "Alex Garland",
    authorLink: "http://www.imdb.com/name/nm0307497/",
    pubDate: "00-00-2014",
    modDate: 1517999999478,
    intro:
      "Meet and interact with Ava. In the end, you’ll be asked to decide wether you’re chatting to a real person or a computer bot.",
    context:
      "The Turing test, developed by Alan Turing in 1950, is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. Turing proposed that a human evaluator would judge natural language conversations between a human and a machine designed to generate human-like responses. The evaluator would be aware that one of the two partners in conversation is a machine, and all participants would be separated from one another. The conversation would be limited to a text-only channel such as a computer keyboard and screen so the result would not depend on the machine's ability to render words as speech.[2] If the evaluator cannot reliably tell the machine from the human, the machine is said to have passed the test. The test does not check the ability to give correct answers to questions, only how closely answers resemble those a human would give.",
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }],
    interviewees: [
      {
        name: "Ava",
        bio:
          "Ava has a robotic body but a human-looking face, and is confined to your browser window.",
        title: "Humanoid robot with artificial intelligence",
        avatar: AVA,
        color: "#88a3a0",
        storyline: [
          {
            id: uuidv4(),
            content: "Hello.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…Hi.",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Who are you?",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "I'm Caleb.",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Hello, Caleb.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…Do you have a name?",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Yes.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "Ava.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…I'm pleased to meet you, Ava.",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "I'm pleased to meet you too.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "Are you nervous?",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…Why do you ask that?",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Are you nervous?",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…Yes. A little.",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Why?",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "I'm not sure.",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "I feel nervous too.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…Do you?",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Yes.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "Why do you feel nervous?",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "I've never met anyone new before. Only Nathan.",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "…Then we're both in quite a similar position.",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Haven't you met lots of new people before?",
            role: "interviewee"
          },
          {
            id: uuidv4(),
            content: "None like you.",
            role: "user"
          },
          {
            id: uuidv4(),
            content: "Oh.",
            role: "interviewee"
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
        storyline: []
      },
      {
        name: "Donald Trump",
        bio: "",
        title: "45th President of the US",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "red",
        storyline: []
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
        storyline: []
      },
      {
        name: "The Guardian",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        storyline: []
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
        storyline: []
      },
      {
        name: "The Guardian",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        storyline: []
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
        storyline: []
      },
      {
        name: "Piotr F.",
        bio: "Some bio",
        title: "A title",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "purple",
        storyline: []
      },
      {
        name: "Techcrunch",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "green",
        storyline: []
      },
      {
        name: "The Guardian",
        bio: "",
        title: "",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        storyline: []
      }
    ]
  }
];

export default stories;
