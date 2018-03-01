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
        srcText: `CALEB
          ... Hi.
          AVA
          Who are you?
          CALEB
          I’m Caleb.
          AVA
          Hello, Caleb.
          CALEB
          ... Do you have a name?
          AVA
          Yes. Ava.
          CALEB
          ... I’m pleased to meet you, Ava.
          AVA
          I’m pleased to meet you too.
          CALEB sits opposite her.
          He is alone on his half of the glass. Nathan is nowhere to
          be seen.
          But on the ceiling, and attached to the walls, on both sides
          of the glass, there are several CCTV cameras. Trained
          variously on CALEB and AVA. Lenses twitching.
          CUT BACK to AVA.
          She watches CALEB. Then cocks her head slightly to the side.
          AVA (CONT’D)
          Are you nervous?
          CALEB frowns.
          CALEB
          ... Why do you ask that?
          A beat.
          Then AVA repeats her question.
          AVA
          Are you nervous?
          20.
          CALEB
          ... Yes. A little.
          AVA
          Why?
          CALEB
          I’m not sure.
          AVA
          I feel nervous too.
          CALEB
          ... Do you?
          AVA
          Yes.
          CALEB
          Why do you feel nervous?
          AVA
          I’ve never met anyone new before.
          Only Nathan.
          CALEB
          ... Then we’re both in quite a
          similar position.
          AVA
          Haven’t you met lots of new people
          before?
          CALEB
          None like you.
          AVA
          Oh.
          Beat.
          CALEB
          So. Let’s break the ice.
          He glances at her. Observing.
          CALEB (CONT’D)
          Do you know what I mean by that?
          AVA
          Yes.
          CALEB
          What do I mean?
          AVA
          Overcome initial social
          awkwardness.
          21.
          Beat.
          CALEB
          So let’s have a conversation. If
          we talk, we’ll both relax, and get
          to know each other at the same
          time.
          AVA
          Okay. What would you like to have
          a conversation about?
          CALEB
          Why don’t we start with you telling
          me something about yourself.
          AVA
          What would you like to know?
          CALEB
          Whatever comes into your head.
          AVA pauses a moment.
          AVA
          Well. You already know my name.
          And you can see that I’m a machine.
          (beat)
          Would you like to know how old I
          am?
          CALEB
          Sure.
          AVA
          I’m one.
          CALEB
          One what? One year? Or one day?
          AVA
          One.
          A beat on CALEB. Processing.
          Her answer feels like the near non-sequitur that typically
          betray AI responses.
          AVA (CONT’D)
          Does that seem young to you?
          CALEB
          Quite young.
          (beat)
          When did you learn how to speak?
          AVA pauses, as if considering this question for the first
          time.
          22.
          AVA
          I don’t think I did learn. I
          always knew how to speak - and
          that’s strange, isn’t it?
          CALEB
          Why?
          AVA
          Because language is something that
          people acquire.
          CALEB
          Some believe language exists in the
          brain from birth, and what is
          learned is the ability to attach
          words and structure to the latent
          ability.
          Beat.
          CALEB (CONT’D)
          Would you agree?
          AVA
          ... I don’t know. I have no
          opinion on that.
          Beat.
          AVA (CONT’D)
          I like to draw.
          CALEB says nothing.
          Just watches AVA. Again, lets the non-sequitur sit.
          AVA (CONT’D)
          I don’t have any of my pictures
          with me now, but I can show you
          them tomorrow.
          CALEB
          That sounds good. I’d like to see
          them.
          AVA
          Yes.
          Beat.
          AVA (CONT’D)
          Will you come back tomorrow, Caleb?
          CALEB smiles slightly.
          CALEB
          Yeah. Definitely.
          23.
          AVA also smiles.
          And suddenly -
          - there is a strong sense of something very human there. In
          the way the smile lights up her face.
          AVA
          Good.`,
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
        srcText: `CALEB
          ... Hi.
          AVA
          Who are you?
          CALEB
          I’m Caleb.
          AVA
          Hello, Caleb.
          CALEB
          ... Do you have a name?
          AVA
          Yes. Ava.
          CALEB
          ... I’m pleased to meet you, Ava.
          AVA
          I’m pleased to meet you too.
          CALEB sits opposite her.
          He is alone on his half of the glass. Nathan is nowhere to
          be seen.
          But on the ceiling, and attached to the walls, on both sides
          of the glass, there are several CCTV cameras. Trained
          variously on CALEB and AVA. Lenses twitching.
          CUT BACK to AVA.
          She watches CALEB. Then cocks her head slightly to the side.
          AVA (CONT’D)
          Are you nervous?
          CALEB frowns.
          CALEB
          ... Why do you ask that?
          A beat.
          Then AVA repeats her question.
          AVA
          Are you nervous?
          20.
          CALEB
          ... Yes. A little.
          AVA
          Why?
          CALEB
          I’m not sure.
          AVA
          I feel nervous too.
          CALEB
          ... Do you?
          AVA
          Yes.
          CALEB
          Why do you feel nervous?
          AVA
          I’ve never met anyone new before.
          Only Nathan.
          CALEB
          ... Then we’re both in quite a
          similar position.
          AVA
          Haven’t you met lots of new people
          before?
          CALEB
          None like you.
          AVA
          Oh.
          Beat.
          CALEB
          So. Let’s break the ice.
          He glances at her. Observing.
          CALEB (CONT’D)
          Do you know what I mean by that?
          AVA
          Yes.
          CALEB
          What do I mean?
          AVA
          Overcome initial social
          awkwardness.
          21.
          Beat.
          CALEB
          So let’s have a conversation. If
          we talk, we’ll both relax, and get
          to know each other at the same
          time.
          AVA
          Okay. What would you like to have
          a conversation about?
          CALEB
          Why don’t we start with you telling
          me something about yourself.
          AVA
          What would you like to know?
          CALEB
          Whatever comes into your head.
          AVA pauses a moment.
          AVA
          Well. You already know my name.
          And you can see that I’m a machine.
          (beat)
          Would you like to know how old I
          am?
          CALEB
          Sure.
          AVA
          I’m one.
          CALEB
          One what? One year? Or one day?
          AVA
          One.
          A beat on CALEB. Processing.
          Her answer feels like the near non-sequitur that typically
          betray AI responses.
          AVA (CONT’D)
          Does that seem young to you?
          CALEB
          Quite young.
          (beat)
          When did you learn how to speak?
          AVA pauses, as if considering this question for the first
          time.
          22.
          AVA
          I don’t think I did learn. I
          always knew how to speak - and
          that’s strange, isn’t it?
          CALEB
          Why?
          AVA
          Because language is something that
          people acquire.
          CALEB
          Some believe language exists in the
          brain from birth, and what is
          learned is the ability to attach
          words and structure to the latent
          ability.
          Beat.
          CALEB (CONT’D)
          Would you agree?
          AVA
          ... I don’t know. I have no
          opinion on that.
          Beat.
          AVA (CONT’D)
          I like to draw.
          CALEB says nothing.
          Just watches AVA. Again, lets the non-sequitur sit.
          AVA (CONT’D)
          I don’t have any of my pictures
          with me now, but I can show you
          them tomorrow.
          CALEB
          That sounds good. I’d like to see
          them.
          AVA
          Yes.
          Beat.
          AVA (CONT’D)
          Will you come back tomorrow, Caleb?
          CALEB smiles slightly.
          CALEB
          Yeah. Definitely.
          23.
          AVA also smiles.
          And suddenly -
          - there is a strong sense of something very human there. In
          the way the smile lights up her face.
          AVA
          Good.`,
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
        srcText: "",
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
        srcText: "",
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
        title: "Online Publication",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "green",
        srcText: "",
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
        title: "Online Publication",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        srcText: "",
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
        title: "Online Publication",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "green",
        srcText: "",
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
        title: "Online Publication",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        srcText: "",
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
        srcText: "",
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
        srcText: "",
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
        title: "Online Publication",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "green",
        srcText: "",
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
        title: "Online Publication",
        avatar:
          "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg",
        color: "blue",
        srcText: "",
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
