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
          content: {
            value: `Having the same story for two different characters is confusing`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I agree", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `So I shall better edit this story to have characters bore you with differening messages`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "Cool. What next?", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `Next I’ll try to figure out if I can switch between the two storylines and having those updated in the chat view, as the thing doesn’t seem to be doing it at the moment.`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            {
              enabled: true,
              value: "Did you try editing Chat.js?",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `No` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `That’s exactly what I’m gonna do now.` },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            {
              enabled: true,
              value: "Good luck.",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: { value: `Thanks` },
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
        }
      ]
    },
    {
      id: "starts-with-interviewee",
      name: "A name",
      bio: "",
      title: "A leading human rights lawyer",
      avatar: "",
      color: "violet",
      srcText: ``,
      storyline: [
        {
          content: {
            value: `1st interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: COVER,
            title: `1st interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "image"
        },
        {
          content: {
            value: "https://piotrf.pl",
            title: `A link`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "link"
        },
        {
          content: {
            value: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/396684030&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`,
            title: ``
          },
          id: uuidv4(),
          role: "interviewee",
          type: "embed"
        },
        {
          content: {
            value: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74392.41924233893!2d18.619988271560736!3d54.36116710263702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2zR2RhxYRzaw!5e0!3m2!1sen!2spl!4v1521899687730" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`,
            title: ``
          },
          id: uuidv4(),
          role: "interviewee",
          type: "map"
        },
        {
          content: {
            value: `<iframe width="560" height="315" src="https://www.youtube.com/embed/NUrUrCGQQ1s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
            title: ``
          },
          id: uuidv4(),
          role: "interviewee",
          type: "media"
        },
        {
          content: {
            value: `1st+ interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Continue", type: "ignore" },
            { enabled: true, value: "Explore", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `2nd interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `3rd interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Continue", type: "ignore" },
            { enabled: true, value: "Explore", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `4th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Continue", type: "ignore" },
            { enabled: true, value: "Explore", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `5th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `6th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Continue", type: "explore" },
            {
              enabled: false,
              value: "",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `7th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `8th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Thank you", type: "ignore" },
            {
              enabled: false,
              value: "",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        }
      ]
    },

    {
      id: "start-with-user-action",
      name: "A name II",
      bio: "",
      title: "A leading human rights lawyer",
      avatar: "",
      color: "violet",
      srcText: ``,
      storyline: [
        {
          content: [
            { enabled: true, value: "Continue", type: "ignore" },
            { enabled: true, value: "Explore", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `1st interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `2nd interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `3rd interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Continue", type: "ignore" },
            { enabled: true, value: "Explore", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `4th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Gate 1 Ignore", type: "ignore" },
            { enabled: true, value: "Gate 1 Explore", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: [
            { enabled: true, value: "Gate 2 Ignore", type: "ignore" },
            { enabled: true, value: "Gate 2 Explore", type: "explore" }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `5th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `6th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Continue", type: "explore" },
            {
              enabled: false,
              value: "",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        },
        {
          content: {
            value: `7th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `8th interviewee bubble`
          },
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: true, value: "Thank you", type: "ignore" },
            {
              enabled: false,
              value: "",
              type: "explore"
            }
          ],
          id: uuidv4(),
          role: "user"
        }
      ]
    }
  ]
};

export default story;
