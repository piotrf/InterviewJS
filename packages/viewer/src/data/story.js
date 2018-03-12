import uuidv4 from "uuid/v4";

import AVA from "./media/ava.png";
import COVER from "./media/cover.jpg";
import LOGO from "./media/logo.png";

const story = {
  title: "Ex Machina",
  id: "0bf34b30-743b-46ab-weewe-c875326d86f6",
  author: "Alex Garland",
  authorLink: "http://www.imdb.com/name/nm0307497/",
  pubDate: "00-00-2014",
  modDate: 1517999999478,
  intro:
    "Meet and interact with Ava. In the end, you’ll be asked to decide wether you’ve been chatting to a real person or a computer bot",
  context:
    "The Turing test, developed by Alan Turing in 1950, is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. Turing proposed that a human evaluator would judge natural language conversations between a human and a machine designed to generate human-like responses. If the evaluator cannot reliably tell the machine from the human, the machine is said to have passed the test. The test does not check the ability to give correct answers to questions, only how closely answers resemble those a human would give",
  cover: COVER,
  logo: LOGO,
  attachments: [{ url: "", id: "" }],
  poll: [
    {
      question: "Do you think Ava is a real person?",
      answer1: "Yes",
      answer2: "No"
    },
    {
      question: "Do you think Caleb is cool?",
      answer1: "Yes",
      answer2: "No"
    }
  ],
  interviewees: [
    {
      id: uuidv4(),
      name: "Ava",
      bio: "Ava has a robotic body but a human-looking face",
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
          content: { value: `Hello` },
          id: uuidv4(),
          order: 0,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Hi", type: "explore" }
          ],
          id: uuidv4(),
          order: 1,
          role: "user"
        },
        {
          content: { value: `Who are you?` },
          id: uuidv4(),
          order: 2,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm Caleb", type: "explore" }
          ],
          id: uuidv4(),
          order: 3,
          role: "user"
        },
        {
          content: { value: `Hello, Caleb` },
          id: uuidv4(),
          order: 4,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you have a name?", type: "explore" }
          ],
          id: uuidv4(),
          order: 5,
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          order: 6,
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Ava` },
          id: uuidv4(),
          order: 6,
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
          order: 7,
          role: "user"
        },
        {
          content: { value: `I'm pleased to meet you too` },
          order: 8,
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          order: 8,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Why do you ask that?", type: "explore" }
          ],
          id: uuidv4(),
          order: 9,
          role: "user"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          order: 10,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Yes. A little", type: "explore" }
          ],
          id: uuidv4(),
          order: 11,
          role: "user"
        },
        {
          content: { value: `Why?` },
          id: uuidv4(),
          order: 12,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm not sure", type: "explore" }
          ],
          id: uuidv4(),
          order: 13,
          role: "user"
        },
        {
          content: { value: `I feel nervous too` },
          id: uuidv4(),
          order: 14,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you?", type: "explore" }
          ],
          id: uuidv4(),
          order: 15,
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          order: 16,
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
          order: 17,
          role: "user"
        },
        {
          content: { value: `I've never met anyone new before` },
          id: uuidv4(),
          order: 18,
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: ` Only Nathan` },
          id: uuidv4(),
          order: 18,
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
          order: 19,
          role: "user"
        },
        {
          content: { value: `Haven't you met lots of new people before?` },
          id: uuidv4(),
          order: 20,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "None like you", type: "explore" }
          ],
          id: uuidv4(),
          order: 21,
          role: "user"
        },
        {
          content: { value: `Oh` },
          id: uuidv4(),
          order: 22,
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYGzRB4Pnq8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
          },
          id: uuidv4(),
          order: 23,
          role: "interviewee",
          type: "embed"
        }
      ]
    },
    {
      id: uuidv4(),
      name: "Ava",
      bio: "Ava has a robotic body but a human-looking face",
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
          content: { value: `Hello` },
          id: uuidv4(),
          order: 0,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Hi", type: "explore" }
          ],
          id: uuidv4(),
          order: 1,
          role: "user"
        },
        {
          content: { value: `Who are you?` },
          id: uuidv4(),
          order: 2,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm Caleb", type: "explore" }
          ],
          id: uuidv4(),
          order: 3,
          role: "user"
        },
        {
          content: { value: `Hello, Caleb` },
          id: uuidv4(),
          order: 4,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you have a name?", type: "explore" }
          ],
          id: uuidv4(),
          order: 5,
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          order: 6,
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Ava` },
          id: uuidv4(),
          order: 6,
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
          order: 7,
          role: "user"
        },
        {
          content: { value: `I'm pleased to meet you too` },
          order: 8,
          id: uuidv4(),
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          order: 8,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Why do you ask that?", type: "explore" }
          ],
          id: uuidv4(),
          order: 9,
          role: "user"
        },
        {
          content: { value: `Are you nervous?` },
          id: uuidv4(),
          order: 10,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Yes. A little", type: "explore" }
          ],
          id: uuidv4(),
          order: 11,
          role: "user"
        },
        {
          content: { value: `Why?` },
          id: uuidv4(),
          order: 12,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "I'm not sure", type: "explore" }
          ],
          id: uuidv4(),
          order: 13,
          role: "user"
        },
        {
          content: { value: `I feel nervous too` },
          id: uuidv4(),
          order: 14,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "…Do you?", type: "explore" }
          ],
          id: uuidv4(),
          order: 15,
          role: "user"
        },
        {
          content: { value: `Yes` },
          id: uuidv4(),
          order: 16,
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
          order: 17,
          role: "user"
        },
        {
          content: { value: `I've never met anyone new before` },
          id: uuidv4(),
          order: 18,
          role: "interviewee",
          type: "text"
        },
        {
          content: { value: ` Only Nathan` },
          id: uuidv4(),
          order: 18,
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
          order: 19,
          role: "user"
        },
        {
          content: { value: `Haven't you met lots of new people before?` },
          id: uuidv4(),
          order: 20,
          role: "interviewee",
          type: "text"
        },
        {
          content: [
            { enabled: false, value: "", type: "ignore" },
            { enabled: true, value: "None like you", type: "explore" }
          ],
          id: uuidv4(),
          order: 21,
          role: "user"
        },
        {
          content: { value: `Oh` },
          id: uuidv4(),
          order: 22,
          role: "interviewee",
          type: "text"
        },
        {
          content: {
            value: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYGzRB4Pnq8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
          },
          id: uuidv4(),
          order: 23,
          role: "interviewee",
          type: "embed"
        }
      ]
    }
  ]
};

export default story;
