import uuidv4 from "uuid/v4";

import COVER from "./media/cover.png";
import LOGO from "./media/logo.png";
import KYLAND from "./media/hyland.png";
import CHANDRAN from "./media/chandran.png";

const story = {
  title: "Britain’s modern slave trade",
  id: "0bf34b30-743b-46ab-weewe-c875326d86f6",
  author: "David Harrison",
  authorLink: "http://www.imdb.com/name/nm0307497/",
  pubDate: "Apr 24, 2016",
  modDate: 1517999999478,
  intro: "Investigate the true scale of modern slavery in suburban Britain.",
  context: `Al Jazeera's investigative unit has revealed that large companies in Britain may be failing to tackle slavery along their supply chains. The findings prompted a warning from Britain's anti-slavery commissioner that companies all over the United Kingdom could unwittingly be using modern-day slaves. But Kevin Hyland, the UK's independent anti-slavery commissioner, said that new laws mean that ignorance is no longer an excuse. Secret filming by Al Jazeera uncovered shocking conditions at a carwash in Kent, southeast England, used by dealerships for the auto giants, Volvo and Kia. Workers living in squalid containers at the carwash in Canterbury say they are paid $50 for 12-hour shifts, suffer verbal and physical abuse, and have wages withheld for causing minor damage.`,
  cover: COVER,
  logo: LOGO,
  attachments: [{ url: "", id: "" }],
  poll: [
    {
      question:
        "Should The National Crime Agency lialise with its Vietnamese counterparts to try to break the people-smuggling rings?",
      answer1: "Yes",
      answer2: "No"
    },
    {
      question:
        "Car companies will order their dealerships accross the UK to check suppliers and contractors to ensure they were not using workers who were being exploited as modern-day slaves.",
      answer1: "Unlikely",
      answer2: "Likely"
    },
    {
      question: "Did you like this story?",
      answer1: "Yes",
      answer2: "No"
    }
  ],
  interviewees: [
    {
      id: "c72de5ed-dc50-4590-a9f1-8d64a1577c4f",
      name: "Kevin Hyland",
      bio:
        "Kevin Hyland, OBE (born 1963) is the United Kingdom’s first Independent Anti-Slavery Commissioner, leading efforts to tackle slavery and human trafficking. He was formerly head of the London Metropolitan Police Service’s Human Trafficking Unit.",
      title: "United Kingdom’s first Independent Anti-Slavery Commissioner",
      avatar: KYLAND,
      color: "#73d1fb",
      srcText: ``,
      storyline: [
        {
          content: { value: `Hello` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Hi", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Who are you?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm Caleb", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Hello, Caleb` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you have a name?", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Ava` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            {
              enabled: true,
              value: "…I'm pleased to meet you, Ava",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `I'm pleased to meet you too` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Why do you ask that?", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Yes. A little", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Why?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm not sure", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `I feel nervous too` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you?", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            {
              enabled: true,
              value: "Why do you feel nervous?",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `I've never met anyone new before` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: ` Only Nathan` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Skip this", type: "ignore" },
            {
              enabled: true,
              value: "Same here",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Haven't you met lots of new people before?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "None like you", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Oh` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYGzRB4Pnq8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "embed"
        }
      ]
    },
    {
      id: "7778c964-571e-4a52-b434-6bee076f10bd",
      name: "Parosha Chandran",
      bio:
        "Parosha Chandran is the UK’s leading anti-slavery lawyer and she has been practicing at the Bar of England and Wales for 20 years. She is an award-winning human rights barrister and a leader at the Bar in the fields of human rights, human trafficking, forced labour and labour exploitation, immigration, trafficking-related criminal appeals and public law.",
      title: "A leading human rights lawyer",
      avatar: CHANDRAN,
      color: "purple",
      srcText: ``,
      storyline: [
        {
          content: { value: `Hello` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Hi", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Who are you?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm Caleb", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Hello, Caleb` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you have a name?", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Ava` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            {
              enabled: true,
              value: "…I'm pleased to meet you, Ava",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `I'm pleased to meet you too` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Why do you ask that?", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Yes. A little", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Why?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm not sure", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `I feel nervous too` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you?", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            {
              enabled: true,
              value: "Why do you feel nervous?",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `I've never met anyone new before` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: ` Only Nathan` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Skip this", type: "ignore" },
            {
              enabled: true,
              value: "Same here",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Haven't you met lots of new people before?` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "None like you", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Oh` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYGzRB4Pnq8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "embed"
        }
      ]
    }
  ]
};

export default story;
