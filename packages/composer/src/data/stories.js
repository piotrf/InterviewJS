import uuidv4 from "uuid/v4";

import AVA from "./media/ava.png";
import OBAMA from "./media/obama.png";
import TRUMP from "./media/trump.png";

const stories = [
  {
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
    cover: "",
    logo: "",
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
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYGzRB4Pnq8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
            id: uuidv4(),
            order: 23,
            role: "interviewee",
            type: "embed"
          }
        ]
      }
    ]
  },
  {
    title: "Interviewing US Presidents",
    id: "0bf34b30-743b-46ab-9788-c875326d86f6",
    author: "George Stephanopoulos",
    authorLink: "",
    pubDate: "November 12, 2015",
    modDate: 1514949999478,
    intro: "",
    context: "",
    cover: "",
    logo: "",
    attachments: [{ url: "", id: "" }],
    poll: [],
    interviewees: [
      {
        name: "Barack Obama",
        bio:
          "Barack Hussein Obama II (/bəˈrɑːk huːˈseɪn oʊˈbɑːmə/ (About this sound listen);[1] born August 4, 1961) is an American politician who served as the 44th President of the United States from 2009 to 2017. The first African American to assume the presidency, he was previously the junior United States Senator from Illinois from 2005 to 2008. He served in the Illinois State Senate from 1997 until 2004.",
        title: "44th President of the US",
        avatar: OBAMA,
        color: "blue",
        srcText: `STEPHANOPOULOS: Okay, Mr. President, thank you for doing this.

PRESIDENT BARACK OBAMA: Great to be here, George.

STEPHANOPOULOS: Let's talk about ISIS to begin with. Did they bring down that Russian plane?

OBAMA: Well, we don't know that yet. It is a possibility

STEPHANOPOULOS: Just a possibility?

OBAMA: Well, we don't know. I think we're still looking at all the details. Any kind of aviation tragedy like this requires a lot of forensic work. It becomes more difficult when we're not actively involved on the ground. We are offering full cooperation with the Egyptians, with the Russians and others. But a lot of this is peace work. But there's a possibility that they may have taken place.

STEPHANOPOULOS: A lot of the intelligence community seems to think it's more of a probability. Adam Schiff, the ranking Democrat on House Intelligence Committee thinks it is. And he told me last week that this would mean that ISIS has fully eclipsed Al Qaeda as the greatest terror threat in the world. Is that right?

OBAMA: Well, number one, I think it's premature, but it is a possibility. Number two, what we've known for a long time, since the duration of my presidency and before that, is that a small network of people if they've got some skills and bomb making capabilities can carry out some big damage.

And this is why we have ramped up our aviation security not just here in the United States but overseas. If there's a carrier coming here, then we're working with that airlines and that airport to make sure that they've got certain procedures. Now, we don't fly directly over the Sinai to the United States, and as a consequence we don't have those same arrangements at those airports.

But this is something that we have known is a consistent vulnerability in this modern era. And that's part of the reason why we invest so much in not only putting safeguards in place but also learning each time there's an incident like this to see how this might have happened.

STEPHANOPOULOS: But if ISIS with affiliates in so many countries right now, even Afghanistan, if they decided now to go to international terror, that's a game changer, isn't it?

OBAMA: Well I have to tell you, George AQAP in Yemen Al Qaeda in Yemen we know has had plots consistently over the last several years to try to bring down an airliner. I think that one of the challenges of these international terrorist organizations is that they don't have to have a huge amount of personnel. If there's a crack in the system, then they potentially can exploit it. And they are looking for these cracks to exploit.

What makes ISIL the challenge that it is right now is primarily the fact that they're occupying territory in two countries that aren't governed effectively in those spaces. All right, so in Iraq, when you get into the Sunni areas of Iraq there's not strong governance. In Syria, obvious in the midst of civil war, there is a total breakdown of order. And their ability to sustain themselves in those areas are the primary and principle concern we have.

STEPHANOPOULOS: Do you think it means

OBAMA: with respect to ISIL.

STEPHANOPOULOS: that Vladimir Putin will start to take them on?

OBAMA: Well Putin, I think, from the start has been sincere in seeing ISIL as a threat. The reason he went into Syria is not primarily because of ISIL, but to prop up Assad. And part of our goal is to underscore for him and for everyone in the region that ISIL is the primary threat and you can't solve the ISIL problem if, in fact, you've got a country that is governed by somebody who's illegitimate and that the majority of Syrians reject.

STEPHANOPOULOS: Big meeting this weekend. Can you convince him?

OBAMA: What's interesting is we've already seen I think a growing awareness on the part of the Russians after several weeks now of fairly high paced bombing that they're not going to win this militarily. I think they understand that. They may not admit it publicly, but you're already starting to see indications of that.

And it is a modestly positive sign that they've engaged with us, the Saudis the Turks and others to try to broker a political transition plan. Now, they have not yet come to the conclusion that Assad can't be part of a new Syria. And I think it's going to take some time for them to get there. But our goal here, and John Kerry, I think's, done outstanding work in starting to create a platform and a set of principles whereby we agree that a political s solution is what's required, that it has to be inclusive, that there's going to be a transition phase.

And, by bringing in the Iranians and the Russians, which is tough for us and tough for a number of our coalition allies they're now at the table. We're starting to shape who are the groups that could responsibly govern Syria. And if we can keep pushing on that diplomatic track even as we're squeezing ISIL in places like the Sinjar operation that's currently taking place then what you see over the course of the next year is I think the possibility that our 60-member coalition and the approach that we're taking is one that Russia determines

(OVERTALK)

STEPHANOPOULOS: But the coalition hasn't all stepped up. And some of your critics say, even your friendly critics say, like Fareed Zakaria, that what you have on the ground now is not going to be enough. Every couple of months you're going to be faced with the same choice of back down or double down.

OBAMA: I think what is true is that this has always been a multi-year project precisely because the governance structures in the Sunni areas of Iraq are weak, and there are none in Syria. And we don't have ground forces there in in sufficient numbers so simply march into Al-Raqqah in Syria and clean the whole place out. And as a consequence, we've always understood that our goal has to be militarily constraining ISIL's capabilities, cutting off their supply lines, cutting off their financing at the same time as we're putting a political track together in Syria and fortifying the best impulses in Baghdad so that we can, not just win militarily, but also win by improving governance

(OVERTALK)

STEPHANOPOULOS: And that's the strategy you've been following. But ISIS is gaining strength, aren't they?

OBAMA: Well, no, I don't think they're gaining strength. What is true is that from the start our goal has been first to contain, and we have contained them. They have not gained ground in Iraq. And in Syria it they'll come in, they'll leave. But you don't see this systematic march by ISIL across the terrain.

What we have not yet been able to do is to completely decapitate their command and control structures. We've made some progress in trying to reduce the flow of foreign fighters. But one of the things that I'll be talking about when I see President Erdogan in Turkey and discuss this with the G20 is that we've still got to do more work in controlling the border so that the influx of foreign fighters is much more reduced.

And you know, what we also have to do is frankly work with the Iraqis to strengthen their capabilities. Because one of the big challenges throughout this campaign has been that the Iraqi military has proven itself to be effective in protecting Baghdad. But it's much harder for them, because they're primarily Shia, to move out into Sunni areas. And part of our goal has to be to recruit more effective Sunni partners in Iraq to really go on offense rather than simply engage in defense.

STEPHANOPOULOS: So what do you think when you hear someone like Ben Carson get up in a debate and say, "Hey, this would be easy. We can take ISIL out just by bombing their oil fields in Anbar," that's what a general told him.

OBAMA: Yeah. What I think is that he doesn't know much about it. And look George, I think it's fair to say that over the last several years I've had access to all the best military minds in the country and all the best foreign policy minds in the country. And I'm not running for office. And so my only interest is in success.

And if I'm down in the Situation Room talking with people who have worked in these regions and have run major military operations from the chairman of my joint chiefs of staff Joe Dunford to, you know, individuals like General Allen, who was involved in Iraqi operations back in 2007/2008, and they don't think it's easy, then it's probably not easy.

And what we've been able to do is to shape a strategy that first and foremost contained the momentum that ISIL had gained. We are now in a position where slowly, incrementally we're pushing back against areas where we know we've got some solid partners like the Kurds and the Peshmerga. But until we get the Syria political situation resolved and until Assad is no longer a lightning rod for Sunnis in Syria and the that entire region is not longer a proxy war for Shia/Sunni conflict we're going to continue to have problems

STEPHANOPOULOS: That could take a generation.

OBAMA: Well I would distinguish between making sure that the place is perfect. That's not going to happen anytime soon with making sure that ISIL continues to shrink in its scope of operations until it no longer poses the kind of threat that it does, not just primarily to us, but to neighbors in the region like Jordan or Saudi Arabia and that the humanitarian crisis that's taking place with millions of people who are fleeing the country that that can be relieved.

STEPHANOPOULOS: You're not running for office. But as you know, the Republican candidates are putting your foreign policy on the ballot. They say the Obama/Clinton legacy is a more dangerous world because you're weak and America has failed to lead. If you were up on that stage, how would you respond?

OBAMA: Well, what I would say is that America is not weaker; it's stronger around the world than when I came into office. And that can be measured by the influence that we have on a whole range of transnational issues, the cooperation that we get on not just counterterrorism, but on critical issues like climate change the work that we're doing in Asia that I'll be traveling to talk about in terms of creating the kinds of rule based systems that preserve our freedom of navigation and try to push back against Chinese efforts that may threaten the peace and prosperity of the region.

You know, there was a lot of talk among these Republicans about the success of Putin's strategy in the Ukraine. But in fact, because we were able to mobilize the entire international community, we've been able to you know, not only reduce the fighting in Ukraine, but now we're still on track to potentially resolve that peacefully. So you know, one of the things that's striking to me, George, is that pub public opinion around the world about the United States is significantly higher than it was when I came into office.

We have not seen the kinds of big threats against the United States that sadly we saw during something like 9/11. We've been able to take more than 180,000 troops or 150, 60, 70,000 troops out of harm's way while still maintaining coalition partnerships. And in everywhere from Latin America to Africa we helped to shape the agenda for a more peaceful, prosperous world. So when you hear rhetoric like this, George, about America's never been in greater danger that's rhetoric. That's campaign talk.

STEPHANOPOULOS: But when you think about it, when you reflect on it, where have you fallen short? You didn't expect to have several thousand troops in Afghanistan, more than 3,500 troops in Iraq.

OBAMA: Well, I think actually in Afghanistan let's take Afghanistan as an example. I don't think any of us were ever under any illusion that we could withdraw every single troop out of Afghanistan and that country, which is one of the poorest in the world, that has gone through 30 or 40 year so fighting would be completely stable.

Our very premise, our strategy was always that we were going to have to provide the kinds of advice the kinds of training, the kinds of military support that would be required so that this nascent democracy began to work. And that's exactly what we're doing. I when I consider where we have fallen short, what is absolutely true is that in the Middle East and in Syria in particular the you know, enormous changes that took place post Arab Spring were ones that don't happen, you know, every ten years. They happen every 50, 60, 70 years. And we have not been able to get the kind of success on the ground with countries that were fragile to begin with that were governed by dictators to create the kind of civil society that would allow for a functioning, if not perfectly democratic, then at least civil society and government.

And you know, that's humbling. But it's hard. And when you hear the Republicans talk about well, you know, we'd go in and fix this right away. We're going to win in Middle East. What's clear is that you don't have any sense of how difficult it is. And they don't have a lot of sense of history, including the recent history of our efforts in places like Afghanistan and Iraq.

STEPHANOPOULOS: Lot of talk about immigration as well. Donald Trump is speaking about history. He wants to bring back Operation Wetback from President Eisenhower and deportation force. What would that mean?

OBAMA: Well, I think the name of the operation tells you something about the dangers of looking backwards. And the notion that we're going to deport 11, 12 million people from this country, first of all I have no idea where Mr. Trump thinks the money's going to come from. It would cost us hundreds of billions of dollars to execute that. Imagine the images on the screen flashed around the world as we were dragging parents away from their children and putting them in what, detention centers and then systematically sending them out. Nobody thinks that that is realistic, but more importantly, that's not who we are as Americans.

STEPHANOPOULOS: What do you think when you hear people cheer for that?

OBAMA: Well, what I think is that there's always been a strain of anti-immigrant sentiment in America, ironically from folks who themselves two generations back or even one generation back were immigrants themselves. And it's the job of leaders not to play into that sentiment. Now, those sentiments get stronger when people feel insecure.

And given what happened in 2007, 2008, given the fact that despite the recovery, I think people still have some post-traumatic stress and are still concerned about prospects for jobs and economic security in the future it's easy to play on those fears. But that's not that's not what you want from your president.

And to their credit Republican and as well as Democratic senators and or presidents in the past, including Ronald Reagan, including George H.W. Bush, including George W. Bush have understood that we are a nation of laws, but we're also a nation of immigrants and that proposing radical and necessarily cruel solutions to a problem that can be solved by some good, old-fashioned legislation of the sort that passed on a bipartisan basis in the Senate and I would've been able to sign two years ago if the House Republicans had allowed it to come to the floor 'cause there was a majority on that floor to vote for it we don't want I think, a president or any person in a position of leadership to play on those kinds of fears.

STEPHANOPOULOS: You say we're a nation of laws. On the issue of Guantanamo, one of your big promises, closing Guantanamo Speaker Ryan says you can't close it on your own, don't have the authority. He says the law is the law. Do you have the authority to close it on your own?

OBAMA: Well, here's what I know is that we need to close it. That's not just my opinion. If you take a survey of retired generals folks who are currently in uniform they will tell you that this is a consistent recruitment tool for jihadists. It is contrary to our values. It costs huge amounts of money. And it's not sustainable

OBAMA: so it is my--

STEPHANOPOULOS: did on your own.

OBAMA: So it is my job to, first and foremost, work with Congress to try to find a solution. And what we've been able to do during the course of this administration is to systematically transfer and draw down the numbers who are there. My hope is that by the end of this year we are seeing close to under 100 prisoners remaining and detainees remaining. And then my intention is to present to Congress a sensible, plausible plan that will meet our national security needs and be consistent with who are

STEPHANOPOULOS: And when they say no?

OBAMA: Well they I'm not going to one of the things that I've been consistently trying to do is to give Congress the chance to do the right thing before I then look at my next options. And Congress is going to have an opportunity, I think when they look at the numbers, when they look at how much it costs for us to detain these individuals, when they hear from both current and retired military officers who say this is not what we should be doing they're going to have the ability to make their own assumptions.

STEPHANOPOULOS: So you're not ruling out doing it on your own?

OBAMA: My job right now is to make sure that Congress has a chance to look at a serious plan and look at all the facts and we'll take it from there.

STEPHANOPOULOS: Will you rule out executive action?

OBAMA: We'll take it from there.

STEPHANOPOULOS: You've called Hillary Clinton a good friend, strong friend, one of America's finest secretaries of state and said she'd make a great president. So is it fair for Democrats to conclude she's your candidate?

OBAMA: (LAUGH) George, I'm not going to make endorsements when, you know, I've said in the past it's important for the process to play itself out. I think Dem I think Hillary's doing great. I think, you know, Bernie Sanders is really adding to this debate--

STEPHANOPOULOS: Would he make a great president?

OBAMA: -- in a very serious way. You know, I think Bernie is capturing a sense among the American people that they want to know the government's on their side, that it's not bought and paid for, that you know, our focus has to be on hard working, middle class Americans not getting' a raw deal. And I think that is in in incredibly important. I think Martin O'Malley has important things to say. So we'll let this process play out. I am confident that we're going to have a good, strong Democratic candidate, and that they'll be able to win in November.

STEPHANOPOULOS: Finally-- when you were a student, you spoke out, you protested apartheid in South Africa. If you were on the campus of University of Missouri today, would you be a protestor?

OBAMA: (SIGH) Without knowing all the facts I've read enough to know that there is clearly a problem at-- the University of Missouri. And, that's not just coming from students. That's coming from some faculty. And I think it is entirely appropriate for students in a thoughtful, peaceful way to protest-- what they see as injustices or inattention to serious problems in their midst. I want-- an activist student body just like I want an activist citizenry. And-- the issue is just making sure that-- even as these young people are getting engaged, getting involved, speaking out-- that they're also listening. And, you know I'd rather see them err on the side of activism than being passive. I think that what you saw with the University of Missouri football team, and the coach, you know, standing up for something that they think is right-- harkens back to a powerful tradition that helped to bring about great change in this country. But I also want to make sure that they understand that being a good citizen being an activist involves hearing the other side--

STEPHANOPOULOS: See, that's what I wanted to ask you (CROSSTALK)

OBAMA: --and making sure that you are engaging in a dialogue, because that's also how change happens. The civil rights movement happened because there was civil disobedience, because people were willing to get to go to jail, because there were events like Bloody Sunday. But it was also because the leadership of the movement consistently stayed open to the possibility of reconciliation and sought to understand the views even views that were appalling to them of the other side.

STEPHANOPOULOS: Because there does seem to be a strain on some of these campuses of a kind of militant political correctness where you shut down the other side.

OBAMA: And I disagree with that. And, it's interesting. You know, I've now got, you know, daughters who-- one is about to go to college-- the other one's-- you know, going to be on her way in a few years. And then we talk about this at the dinner table.

And I say to them, "Listen, if you hear somebody using a racial epithet, if you hear somebody who's anti-Semitic, if you see an injustice, I want you to speak out. And I want you to be firm and clear and I want you to protect people who may not have voices themselves. I want you to be somebody who's strong and sees themselves as somebody who's looking out for the vulnerable."

But I tell 'em-- "I want you also to be able to listen. I don't want you to think that a display of your strength is simply shutting other people up. And that part of your ability to bring about change is going to be by engagement and understanding the viewpoints and the arguments of the other side." And so when I hear, for example, you know, folks on college campuses saying, "We're not going to allow somebody to speak on our campus because we disagree with their ideas or we feel threatened by their ideas--" you know, I think that's a recipe for dogmatism. And I think you're not going to be as effective. And so, but I want to be clear here 'cause, and it's a tough issue because, you know, there are two values that I care about.

I care about civil rights and I care about kids not being discriminated against or having swastikas painted on their doors or nooses hung-- thinking it's a joke. I think it's entirely appropriate for-- any institution, including universities, to say, "Don't walk around in black face. It offends people. Don't wear a headdress and beat your chest if Native American students have said, you know, 'This hurts us. This bothers us." There's nothing wrong with that.

But we also have these values of free speech. And it's not free speech in the abstract. The purpose of that kind of free speech is to make sure that we are forced to use argument and reason and words in making our democracy work. And you know, the you don't have to be fearful of somebody spouting bad ideas. Just out-argue 'em, beat 'em.

Make the case as to why they're wrong. Win over adherents. That's how-- that's how things work in-- in-- in a democracy. And I do worry if young people start getting trained to think that if somebody says something I don't like if somebody says something that hurts my feelings that my only recourse is to shut them up, avoid them, push them away, call on a higher power to protect me from that. You know, and yes, does that put more of a burden on minority students or gay students or Jewish students or others in a majority that may be blind to history and blind to their hurt? It may put a slightly higher burden on them.

But you're not going to make the kinds of deep changes in society-- that those students want, without taking it on, in a full and clear and courageous way. And you know, I tell you I trust Malia in an argument. If a knucklehead on a college campus starts talking about her, I guarantee you she will give as good as she gets.

STEPHANOPOULOS: Sounds like you've been having some good dinner table conversations. Mr. President, thank you.

OBAMA: Thank you.`,
        storyline: [
          {
            content: { value: "https://interviewjs.io", title: "InterviewJS" },
            id: uuidv4(),
            order: 0,
            role: "interviewee",
            type: "link"
          },
          {
            content: { value: `https://interviewjs.io` },
            id: uuidv4(),
            order: 1,
            role: "interviewee",
            type: "link"
          },
          {
            content: { value: `Here’s my pic:` },
            id: uuidv4(),
            order: 2,
            role: "interviewee",
            type: "text"
          },
          {
            content: { value: OBAMA, title: `My pic` },
            id: uuidv4(),
            order: 3,
            role: "interviewee",
            type: "image"
          },
          {
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/H6lE5pai9fw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
            id: uuidv4(),
            order: 4,
            role: "interviewee",
            type: "embed"
          },
          {
            content: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9302.171246540584!2d18.6426717!3d54.34738845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd737602035d8f%3A0x3fc40d49a1a7e847!2sBrama+Wy%C5%BCynna!5e0!3m2!1spl!2spl!4v1520551093528" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`,
            id: uuidv4(),
            order: 5,
            role: "interviewee",
            type: "map"
          }
        ]
      },
      {
        name: "Donald Trump",
        bio: "",
        title: "45th President of the US",
        avatar: TRUMP,
        color: "red",
        srcText: "",
        storyline: [
          {
            content: {
              value: `So here’s how it went with the Swedish PM this week:`
            },
            id: uuidv4(),
            order: 1,
            role: "interviewee",
            type: "text"
          },
          {
            content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/No_DKK7mXR8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
            id: uuidv4(),
            order: 1,
            role: "interviewee",
            type: "embed"
          }
        ]
      }
    ]
  }
];

export default stories;
