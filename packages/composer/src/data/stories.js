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
            content: "Hello",
            id: uuidv4(),
            order: 0,
            role: "interviewee"
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
            content: "Who are you?",
            id: uuidv4(),
            order: 2,
            role: "interviewee"
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
            content: "Hello, Caleb",
            id: uuidv4(),
            order: 4,
            role: "interviewee"
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
            content: "Yes",
            id: uuidv4(),
            order: 6,
            role: "interviewee"
          },
          {
            content: "Ava",
            id: uuidv4(),
            order: 6,
            role: "interviewee"
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
            content: "I'm pleased to meet you too",
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
            content: [
              { enabled: false, value: "", type: "ignore" },
              { enabled: true, value: "…Why do you ask that?", type: "explore" }
            ],
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
            content: [
              { enabled: false, value: "", type: "ignore" },
              { enabled: true, value: "…Yes. A little", type: "explore" }
            ],
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
            content: [
              { enabled: false, value: "", type: "ignore" },
              { enabled: true, value: "I'm not sure", type: "explore" }
            ],
            id: uuidv4(),
            order: 13,
            role: "user"
          },
          {
            content: "I feel nervous too",
            id: uuidv4(),
            order: 14,
            role: "interviewee"
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
            content: "Yes",
            id: uuidv4(),
            order: 16,
            role: "interviewee"
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
            content: "I've never met anyone new before",
            id: uuidv4(),
            order: 18,
            role: "interviewee"
          },
          {
            content: " Only Nathan",
            id: uuidv4(),
            order: 18,
            role: "interviewee"
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
            content: "Haven't you met lots of new people before?",
            id: uuidv4(),
            order: 20,
            role: "interviewee"
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
            content: "Oh",
            id: uuidv4(),
            order: 22,
            role: "interviewee"
          }
        ]
      }
    ]
  },
  {
    title: "Obamacare — One Year In",
    id: "0bf34b30-743b-46ab-9788-c875326d86f6",
    author: "Piotr F",
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
        bio:
          "Barack Hussein Obama II (/bəˈrɑːk huːˈseɪn oʊˈbɑːmə/ (About this sound listen);[1] born August 4, 1961) is an American politician who served as the 44th President of the United States from 2009 to 2017. The first African American to assume the presidency, he was previously the junior United States Senator from Illinois from 2005 to 2008. He served in the Illinois State Senate from 1997 until 2004.",
        title: "44th President of the US",
        avatar: OBAMA,
        color: "blue",
        srcText: `OBAMA: All right, everybody. Good afternoon. This is the most wonderful press conference of the year. I have got a list of who has been naughty and nice to call on. But let me first make a couple of quick points and then I will take your questions.

Typically I use this year-end press conference to review how far we have come over the course of the year. Today, understandably, I'm going to talk a little bit about how far we have come over the past eight years.

As I was preparing to take office, the unemployment rate was on its way to 10 percent. Today it is at 4.6 percent, the lowest in nearly a decade. We've seen the longest streak of job growth on record, and wages have grown faster over the past few years than at any time in the past 40.

When I came into office, 44 million people were uninsured. Today we have covered more than 20 million of them. For the first time in our history, more than 90 percent of Americans are insured.

In fact, yesterday was the biggest day ever for health care.gov, more than 670,000 Americans signed up to get covered, and more are signing up by the day.

We've cut our dependence on foreign oil by more than half, doubled production of renewable energy, enacted the most sweeping reforms since FDR to protect consumers and prevent a crisis on Wall Street from punishing main street ever again.

None of these actions stifled growth as critics are predicted. Instead, the stock market has nearly tripled.

Since I signed Obamacare into law, our businesses have added more than 15 million new jobs, and the economy undoubtedly more durable than it was in the days when we relied on oil from unstable nations and banks took risky bets with your money.

Add it all up, and last year the poverty rate fell at the fastest rate in almost 50 years, while the median household income grew at the fastest rate on record. In fact, income gains were actually larger for households at the bottom and the middle than for those at the top.

And we have done all this while cutting our deficits by nearly two-thirds, and protecting vital investments that grow the middle class.

In foreign policy, when I came into office we were in the midst of two wars. Now nearly 180,000 troops are down to 15,000. Bin Laden, rather than being at large, has been taken off the battlefield, along with thousands of other terrorists.

Over the past eight years no foreign terrorist organization has successfully executed an attack on our homeland that was directed from overseas. Through diplomacy, we have ensured Iran cannot obtain a nuclear weapon without going to war with Iran.

We opened up a new chapter with the people of Cuba. And we have brought nearly 200 nations together around a climate agreement that could very well save this planet for our kids.

And almost every country on Earth sees America as stronger and more respected today than they did eight years ago. In other words, by so many measures our country is stronger and more prosperous than it was when we started. It is a situation that I'm proud to leave for my successor. And it's thanks to the American people, to the hard work that you have put in, the sacrifices you have made for your families and your communities, the businesses that you started or invested in, and the way you looked out for one another. And I could not be prouder to be your president.

Of course, to tout this progress does not mean that we are not mindful of how much more there is to do. In this season in particular, we are reminded that there are people who are still hungry, people who are still homeless, people who still have trouble paying the bills or finding work after being laid off.

There are communities that are still mourning those who have been stolen from us by senseless gun violence, and parents who still are wondering how to protect their kids.

OBAMA: And after I leave office I intend to continue to work with organizations and citizens doing good across the country on these and other pressing issues to build on the progress that we have made.

Around the world as well, there are hotspots where disputes have been intractable, conflicts have flared up, and people, innocent people are suffering as result, and nowhere is this more terribly true than in the city of Aleppo. For years, we've worked to stop the civil war in Syria and alleviate human suffering. It has been one of the hardest issues that I've faced as president.

The world as we speak is united in horror at the savage assaults by the Syrian regime and its Russian and Iranian allies on the city of Aleppo. We have seen a deliberate strategy of surrounding, besieging and starving innocent civilians. We've seen relentless targeting of humanitarian workers and medical personnel, entire and neighbors reduced to rubble and dust. There are continuing reports of civilians being executed. These are all horrific violations of international law.

Responsibility for this brutality lies in one place alone, with the Assad regime and its allies, Russia and Iran, and this blood and these atrocities are on their hands. We all know what needs to happen. There needs to be an impartial international observer force in Aleppo that can help coordinate an orderly evacuation through say corridors. There has to be full access for humanitarian aid, even as the United States continues to be the world's largest donor of humanitarian aid to the Syrian people. And beyond that, there needs to be a broader cease-fire that can serve as the basis for a political rather than a military solution.

That's what the United States is gonna continue to push for, both with our partners and through multilateral institutions like the U.N.

Regretfully, but unsurprisingly, Russia has repeatedly blocked the Security Council from taking action on these issues, so we're gonna keep pressing the Security Council to help improve the delivery of humanitarian aid to those who are in such desperate need and ensure accountability, including continuing to monitor any potential use of chemical weapons in Syria.

And we're gonna work in the U.N. General Assembly as well, both on accountability and to advance a political settlement because it should be clear that although you may achieve tactical victories, over the long-term, the Assad regime cannot slaughter its way to legitimacy. That's why we'll continue to press for a transition to a more representative government, and that's why the world must not avert our eyes to the terrible events that are unfolding.

The Syrian regime and its Russian and Iranian allies are trying to obfuscate the truth. The world should not be fooled and the world will not forget.

So even in a season where the incredible blessings that we know as Americans are all around us, even as we enjoy family and friends and are reminded of how lucky we are, we should also be reminded that to be an American involves bearing burdens and meeting obligations to others. American values and American ideals are what will lead the way to a safer and more prosperous 2017, both here and abroad. And by the way, you (ph) embody those values and ideals like our brave men and women in uniform and their families.

So I just want to close by wishing all of them a very merry Christmas and a happy new year.

With that, I will take some questions, and I'm gonna start with Josh Lederman of A.P.

QUESTION: Thank you, Mr. President.

There's a perception that you're letting President Putin get away with interfering in the U.S. election and that a response that nobody knows about (inaudible) don't cut it. Are you prepared to call out President Putin by name for ordering (inaudible)? And do you agree with Hillary Clinton now says, that the hacking was actually partially responsible for her loss?

And is your administration open to correlate with Trump and his team on this issues, tarnishing (ph) the smooth transition of power that you have promised?

OBAMA: Well, first of all, with respect to the transition, I think they would be the first to acknowledge that we have done everything we can to make sure that they are successful, as I promised, and that will continue. And it's just been a few days since I last talked to the president-elect about a whole range of transition issues. That cooperation's gonna continue.

OBAMA: There hasn't been a lot of squabbling. What we've simply said is the facts, which are that based on uniform intelligence assessments, the Russians were responsible for hacking the DNC and that as a consequence, it is important for us to review all elements of that and make sure that we are preventing that kind of interference through cyber attacks in the future. That should be a bipartisan issue, that shouldn't be a partisan issue.

And my hope is that the president-elect is going to similarly be concerned with making sure that we don't have a potential foreign influence in our election process. I don't think any American wants that. And that shouldn't be a source of an argument.

I think that part of the challenge is that it gets caught up in the carryover from election season. And I think it is very important for us to distinguish between the politics of the election and the need for us as a country, both from a national security perspective but also in terms of the integrity of our election system and our democracy to make sure that we don't create a political football here.

Now, with respect to how this thing unfolded last year, let's just go through the facts pretty quickly. At the beginning of the summer, were alerted to the possibility that the DNC has been hacked. And I made (ph) an order, law enforcement, as well as our intelligence teams to find out everything about it, investigate it thoroughly to brief the potential victims of this hacking, to brief on a bipartisan basis the leaders of both the House and the Senate and the relevant intelligence committees.

And once we had clarity and certainty around what in fact had happened, we publicly announced that in fact Russia had hacked into the DNC. And at that time, we did not attribute motives or you know any interpretations of why they had done so.

We didn't discuss what the effects of it might be. We simply let people know -- the public know just as we had let members of Congress know that this had happened.

And as a consequence, all of you wrote a lot of stories about both what had happened and then you interpreted why that might have happened and what effect it was going to have on the election outcomes. We did not -- and the reason we did not was because in this hyper-partisan atmosphere, at a time when my primary concern was making sure that the integrity of the election process was not in any way damaged, at a time when anything that was said by me or anybody in the White House would immediately be seen through a partisan lens. I wanted to make sure that everybody understood we were playing this thing straight, that we weren't trying to advantage one side or another. But what we were trying to do was let people know that this had taken place.

And so if you started seeing effects on the election, if you were trying to measure why this was happening and how you should consume the information that was being leaked, that you might want to take this into account. And that's exactly how we should have handled it.

Imagine if we had done the opposite, it would become immediately just one more political scrum. And part of the goal here was to make sure that we did not do the work of the leakers for them by raising more and more questions about the integrity of the election right before the election was taking place -- at a time, by the way, when the president-elect himself was raising questions about the integrity of the election.

And finally, I think it's worth pointing out, that the information was already out. It was in the hands of Wikileaks, so that was going to come out no matter what.

What I was concerned about in particular was making sure that that wasn't compounded by potential hacking that could hamper vote counting, affect the actual election process itself.

And so in early September when I saw President Putin in China, I felt that the most effective way to ensure that that did not happen was to talk to him directly and tell him to cut it out, there were going to be some serious consequences if he did not.

And in fact, we did not see further tampering of the election process. But the leaks through Wikileaks had already occurred.

So when I look back in terms of how we handled it, I think we handled it the way it should have been handled. We allowed law enforcement and the intelligence community to do its job without political influence.

We briefed all relevant parties involved in terms of what was taking place. When we had a consensus around what had happened, we announced it, not through the White House, not through me, but rather through the intelligence communities that had actually carried out these investigations.

And then we allowed you and the American public to make an assessment as to how to weigh that going into the election.

And the truth is, is that there was nobody here who did not have some sense of what kind of effect it might have. I am finding it a little curious that everybody is suddenly acting surprised that this looked like it was disadvantaging Hillary Clinton, because you guys wrote about it every day, every single leak about every little juicy tidbit of political gossip, including John Podesta's risotto recipe.

This was an obsession that dominated the news coverage. So I do think it is worth us reflecting how it is that a presidential election of such importance, of such moment, with so many big issues at stake and such a contrast between the candidates came to be dominated by a bunch of these leaks.

What is it about our political system that made us vulnerable to these kinds of potential manipulations which, as I've said publicly before, were not particularly sophisticated. This was not some elaborate, complicated espionage scheme.

They hacked into some Democratic Party e-mails that contained pretty routine stuff, some of it embarrassing or uncomfortable because I suspect that if any of us got our emails hacked into there might be some things that we would not want suddenly appearing on the front page of a newspaper or a telecast, even if there was not anything particularly illegal or controversial about it.

And then it just took off. And that concerns me, and it should concern all of us. But the truth of the matter is, is that everybody had the information. It was out there, and we handled it the way we should have.

Now, moving forward, I think there are a couple of issues that this raises. Number one is just the constant challenge that we are going to have with cyber security throughout our economy and throughout our society.

We are a digitalized culture. And there's hacking going on every single day. There is not a company, there is not a major organization, there is not a financial institution, there is not a branch of our government were somebody is not going to be fishing for something or trying to penetrate or put in a virus or malware.

And this is why for the last eight years I have been obsessed with how do we continually upgrade our cyber security systems. And this particular concern around Russian hacking is part of a broader set of concerns about how do we deal with cyber issues being used in ways that can affect our infrastructure, affect the stability of our financial systems, and affect the integrity of our institutions like our election process.

I just received, a couple of weeks back, it wasn't widely reported on, a report from our cyber-security commission that outlines a whole range of strategies to do a better job on this. But it's difficult because it's not all housed -- the target of cyberattacks is not one entity, but it's widely dispersed and a lot of it is private, like the DNC. You know, it's not a branch of government. We can't tell people what to do.

What we can do is inform them, get best practices. What we can also do is to on a bilateral basis warn other countries against these kinds of attacks, and we've done that in the past. So just as I told Russia to stop it and indicated there will be consequences when they do it, the Chinese have in the past engaged in cyberattacks directed at our companies to steal trade secrets and proprietary technology, and I had to have the same conversation with President Xi. And what we've seen is some evidence that they have reduced but not completely eliminated these activities, partly because they can use cutouts. One of the problems with the internet and cyber issues is there's not always a return address, and by the time you catch up to it, you know, attributing what happened to a particular government can be difficult, not always provable in court, even tough our intelligence communities can make an assessment.

What we've also tried to do is to start creating some international norms about this to prevent some sort of cyber arms race because we obviously have offensive capabilities as well as defensive capabilities, and my approach is not a situation which everybody's worse off because folks are constantly attacking each other back and forth, but putting some guardrails around behavior of nation states, including our adversaries, just so that they understand that whatever they do to us, we can potentially do to them.

We do have some special challenges because oftentimes, our economy is more digitalized. It is more vulnerable partly because we're a wealthier nation and we're more wired than some of these other countries and we have a more open society and engage in less control and censorship over what happens over the internet, which is also part of what makes us special.

Last point, and the reason I'm going on here is because I know that you guys have a lot of questions about this and I addressed all of you directly about this. With respect to response, my principal goal leading up to the election was making sure that the election itself went off without a hitch, that it was not tarnished and that it did not feed any sense in the public that somehow, tampering had taken place with the actual process of voting and we accomplished that. That does not mean that we are not going to respond, it simply meant that we had a set of priorities leading up to the election that were of the utmost importance.

Our goal continues to be to send a clear message to Russia or others not to do this to us because we can do stuff to you, but it is also important for us to do that in a thoughtful, methodical way. Some of it, we do publicly. Some of it, we will do in a way that they know but not everybody will. And I know that there have been folks out there who suggests somehow that if we went out there and made big announcements and thumped our chests about a bunch of stuff, that somehow that would potentially spook the Russians.

But keep in mind that we already have enormous numbers of sanctions against the Russians. The relationship between us and Russia has deteriorated, sadly, significantly over the last several years. And so how we approach an appropriate response that increases costs for them for behavior like this in the future but does not create problems for us is something that's worth taking the time to think through and figure out. And that's exactly what we've done.

So, at a point in time where we've taken certain actions that we can divulge publicly, we will do so. There are times where the message will be directly received by the Russians and not publicized. And I should point out by the way, part of why the Russians have been effective on this is because they don't go around announcing what they're doing. It's not like Putin's gone around the world publicly saying, look what we did. Wasn't that clever? He denies it.

So the idea that somehow public shaming is gonna be effective, I think doesn't read the -- the thought process in Russia very well. OK.

QUESTION: Did Clinton lose because of the hacking?

OBAMA: I'm gonna let all the political pundits in this town have a long discussion about what happened in the election. It was a fascinating election. So, you know, I'm sure there are gonna be a lot of books written about it. I've said what I think is important for the Democratic Party going forward, rather than try to parse every aspect of the election.

And I -- I've said before, I couldn't be prouder of Secretary Clinton, her outstanding service and she's worked tirelessly on behalf of the American people and I don't think she was treated fairly during the election. I think the coverage of her and the issues was troubling, but having said that, what I've been most focused on -- appropriate for the fact I am not going to be a politician in about -- what is it, 32 days, 31, 34?

(LAUGHTER)

What I've said is that I can maybe give some counsel advice to the Democratic Party. And I think the -- the -- the thing we have to spend the most time on -- because it's the thing we have most control over -- is, how do we make sure that we're showing up in places where I think Democratic policies are needed, where they are helping, where they are making a difference, but where people feel as if they're not being heard?

And where Democrats are characterized as coastal, liberal, latte- sipping, you know, politically correct, out-of-touch folks, we have to be in those communities. And I've seen that, when we are in those communities, it makes a difference. That's how I became president. I became a U.S. Senator not just because I had a strong base in Chicago, but because I was driving downstate Illinois and going to fish fries and sitting in V.F.W. Halls and talking to farmers.

And I didn't win every one of their votes, but they got a sense of what I was talking about, what I cared about, that I was for working people, that I was for the middle class, that the reason I was interested in strengthening unions and raising the minimum wage and rebuilding our infrastructure and making sure that parents had decent childcare and family leave, was because my own family's history wasn't that different from theirs even if I looked a little bit different. Same thing in Iowa.

And so the question is, how do we rebuild that party as a whole, so that there's not a county in any state -- I don't care how red -- where we don't have a presence and we're not making the argument, because I think we have a better argument. But that requires a lot of work. You know, it's been something that I've been able to do successfully in my own campaigns.

OBAMA: It is not something I've been able to transfer to candidates in mid-terms and sort of build a sustaining organization around. That's something I would have liked to have done more of, but it's kind of hard to do when you're also dealing with a whole bunch of issues here in the White House. And that doesn't mean, though, that it can't be done, and I think there are gonna be a lot of talented folks out there, a lot of progressives who share my values, who are gonna be leading the charge in the years to come.

Michelle Kosinski (ph) of CNN.

QUESTION: Thank you.

This week we heard Hillary Clinton talk about how she thinks that the FBI director's most recent announcement made a difference in the outcome of the election. And we also just heard in an op-ed her campaign chairman talk about something being deeply broken within the FBI.

He talked about thinking that the investigation early on was lackadaisical, in his words. So what do you think about those comments? Do you think there's any truth to them? Do you think there's a danger there that they're calling into question the integrity of institutions in a similar way that Donald Trump's team has done?

And the second part to that is that Donald Trump's team repeatedly -- I guess, given the indication that the investigation of the Russian hack as well as retaliation might not be such a priority once he's in office.

So what do you think the risk is there? And are you going to talk to him directly about some of those comments he made?

OBAMA: Well, on the latter point, as I said before, the transition from election season to governance season is not always smooth. You know, it's bumpy. There are still feelings that are raw out there. There are people who are still thinking how things unfolded. And I get all that.

But when Donald Trump takes the oath of office and is sworn in as the 45th president of the United States, then he has got a different set of responsibilities and considerations.

And I've said this before. I think there is a sobering process when you walk into the Oval Office. And, you know, I haven't shared previously private conversations I've had with the president-elect. I will say that they have been cordial and in some cases have involved me making some pretty specific suggestions about how to ensure that regardless of our obvious deep disagreements about policy, maybe I can transmit some thoughts about maintaining the effectiveness, integrity, cohesion of the office, our various democratic institutions, and he has listened.

I can't say that he will end up implementing, but the conversations themselves have been cordial as opposed to defensive in any way. And I will always make myself available to him just as previous presidents have made themselves available to me as issues come up.

With respect to the FBI, I will tell you, I've had a chance to know a lot of FBI agents. I know Director Comey. They take their job seriously. They work really hard. They help keep us safe and save a lot of lives.

And it is always a challenge for law enforcement when there's an intersection between the work that they are doing and the political system. It's one of the difficulties of democracy generally.

We have a system where we want our law enforcement investigators and our prosecutors to be free from politics, to be independent, to play it straight. But sometimes that involves investigations that touch on politics and particularly in this hyper-partisan environment that we've been in, everything is suspect, everything you do one way or the other.

One thing that I have done is to be pretty scrupulous about not wading into investigation decisions or prosecution decisions or decisions not to prosecute. I have tried to be really strict in my own behavior about preserving the independence of law enforcement, free from my own judgments and political assessments, in some cases. And I don't know why it would stop now.

Mike Dorney (ph) of Bloomberg.

QUESTION: Thank you, Mr. President.

On Aleppo, your views of (ph) what happens there, the responsibility of the Russian government, the Iranian government, the Assad regime (inaudible), but do you, as president of the United States, leader of the free world, feel any personal moral responsibility now at the end of your presidency for the carnage we're all watching in Aleppo, which I'm sure disturbs you (inaudible)?

Secondly, also on Aleppo, you've again made clear your practical disagreements with (inaudible) and President-elect Trump has throughout his campaign, and he said again last night, that he wants to create safe zones in Syria. Do you feel like in this transition, you need to help him toward implementing that or is that not something you need to be doing?

OBAMA: Mike, I always feel responsible. I felt responsible when kids were being shot by snipers. I felt responsible when millions of people had been displaced. I feel responsible for murder and slaughter that's taken place in South Sudan that's not being reported on, partly because there's not as much social media being generated from there.

There are places around the world where horrible things are happening and because of my office, because I'm president of the United States, I feel responsible. I ask myself every single day, is there something I could do that would save lives and make a difference and spare some child who doesn't deserve to suffer. So that's a starting point. There's not a moment during the course of this presidency where I haven't felt some responsibility.

That's true, by the way, for our own country. When I came into office and people were losing their jobs and losing their homes and losing their pensions, I felt responsible and I would go home at night and I would ask myself, was there something better that I could do or smarter that I could be that would make a difference in their lives, that would relieve their suffering and relieve their hardship.

So with respect to Syria, what I have consistently done is taken the best course that I can to try to end the civil war while having also to take into account the long-term national security interests of the United States. And throughout this process, based on hours of meetings -- if you tallied it up, days and weeks of meetings -- where we went through every option in painful detail with maps and we had our military and we had our aid agencies and we had our diplomatic teams, and sometimes, we'd bring in outsiders who were critics of ours.

OBAMA: Whenever we went through it, the challenge was that short of putting large numbers of U.S. troops on the ground uninvited, without any international law mandate, without sufficient support from Congress, at a time when we still had troops in Afghanistan and we still had troops in Iraq and we had just gone through over a decade of war and spent trillions of dollars and when the opposition on the ground was not cohesive enough to necessarily govern a country and you had a military superpower in Russia prepared to do whatever it took to keep its (inaudible) involved and you had a regional military power in Iran that saw their own vital strategic interests at stake and were willing to maintain that territory in the absence of consent from the Syrian government and now the Russians or the Iranians.

So it may be that with Aleppo's tragic situation unfolding that in the short term, if we can get more of the tens of thousands who are still trapped there out , that so long as the world's eyes are on them and they are feeling pressure, the regime in Russia concludes that they are willing to find some arrangement, perhaps in coordination with Turkey, whereby those people can be safe.

Even that will probably be temporary, but at least it solves a short-term issue that's going to arise.

Unfortunately we are not there yet because right now we have Russians and Assad claiming that basically all the innocent civilians who were trapped in Aleppo are out when international organizations, humanitarian organizations who know better and who are on the ground, have said unequivocally that there are still tens of thousands who are trapped and prepared to leave under pretty much any conditions.

And so right now our biggest priority is to continue to put pressure wherever we can to try to get them out.

(CROSSTALK)

OBAMA: Mike, I can't have too much...

QUESTION: (OFF-MIKE) but do you see, responsibility notwithstanding, moving in that direction or help President-elect Trump move in that direction?

OBAMA: I will help President Trump -- President-elect Trump with any advice, counsel, information that we can provide so that he, once he's sworn in, can make a decision.

Between now and then, these are decisions that I have to make based on the consultations that I have with our military and the people who have been working this every single day.

Peter Alexander (ph).

QUESTION: Mr. President, thank you very much.

Can you, given all the intelligence that we have now heard, assure the public this was once and for all a free and fair election? And specifically on Russia, do you feel any obligation now as they have been insisting that this isn't the case to show the proof, as it were? They say, put your money where your mouth is and declassify some of the intelligence and the evidence that exists.

And more broadly, as it relates to Donald Trump on this very topic, are you concerned about his relationship with Vladimir Putin, especially given some of the recent cabinet picks, including his selection for secretary of state, Rex Tillerson, who toasted Putin with champagne over oil deals together? Thank you.

OBAMA: I may be getting older because these multipart questions, I start losing track.

(LAUGHTER)

OBAMA: I can assure the public that there was not the kind of tampering with the voting process that was our concern and will continue to be of concern going forward, that the votes that were cast were counted, they were counted appropriately.

We have not seen evidence of machines being tampered with, so that assurance I can provide.

That doesn't mean that we find every single, you know, potential probe of every single voting machine all across the country, but we paid a lot of attention to it. We worked with state officials, et cetera, and we feel confident that that didn't occur and that the votes were cast and they were counted.

And so that's on that point. What was the second one?

QUESTION: Say more about declassification.

OBAMA: Declassification. Look, we will provide evidence that we can safely provide, that doesn't mean, though, that it can't be done, and I think there are going to be a lot of talented folks out there, a lot of progressives who share my values who are going to be leading the charge in the years to come.

Michelle Kosinski (ph) of CNN.

QUESTION: Thank you.

This week we heard Hillary Clinton talk about how she thinks that the FBI director's most recent announcement made a difference in the outcome of the election. And we also just heard in an op-ed her campaign chairman talk about something being deeply broken within the FBI.

He talked about thinking that the investigation early on was lackadaisical, in his words. So what do you think about those comments? Do you think there's any truth to them? Do you think there's a danger there that they're calling into question the integrity of institutions in a similar way that Donald Trump's team has done?

And the second part to that is that Donald Trump's team repeatedly -- I guess, given the indication that the investigation of the Russian hack as well as retaliation might not be such a priority once he's in office.

So what do you think the risk is there? And are you going to talk to him directly about some of those comments he made?

OBAMA: Well, on the latter point, as I said before, the transition from election season to governance season is not always smooth. You know, it's bumpy. There are still feelings that are raw out there. There are people who are still thinking how things unfolded. And I get all that.

But when Donald Trump takes the oath of office and is sworn in as the 45th president of the United States, then he has got a different set of responsibilities and considerations.

And I've said this before. I think there is a sobering process when you walk into the Oval Office. And, you know, I haven't shared previously private conversations I've had with the president-elect. I will say that they have been cordial and in some cases have involved me making some pretty specific suggestions about how to ensure that regardless of our obvious deep disagreements about policy, maybe I can transmit some thoughts about maintaining the effectiveness, integrity, cohesion of the office, our various democratic institutions, and he has listened.

I can't say that he will end up implementing, but the conversations themselves have been cordial as opposed to defensive in any way. And I will always make myself available to him just as previous presidents have made themselves available to me as issues come up.

With respect to the FBI, I will tell you, I've had a chance to know a lot of FBI agents. I know Director Comey. They take their job seriously. They work really hard. They help keep us safe and save a lot of lives.

And it is always a challenge for law enforcement when there's an intersection between the work that they are doing and the political system. It's one of the difficulties of democracy generally.

We have a system where we want our law enforcement investigators and our prosecutors to be free from politics, to be independent, to play it straight. But sometimes that involves investigations that touch on politics and particularly in this hyper-partisan environment that we've been in, everything is suspect, everything you do one way or the other.

One thing that I have done is to be pretty scrupulous about not wading into investigation decisions or prosecution decisions or decisions not to prosecute. I have tried to be really strict in my own behavior about preserving the independence of law enforcement, free from my own judgments and political assessments, in some cases. And I don't know why it would stop now.

Mike Dorney (ph) of Bloomberg.

QUESTION: Thank you, Mr. President.

On Aleppo, your views of (ph) what happens there, the responsibility of the Russian government, the Iranian government, the Assad regime (inaudible), but do you, as president of the United States, leader of the free world, feel any personal moral responsibility now at the end of your presidency for the carnage we're all watching in Aleppo, which I'm sure disturbs you (inaudible)?

Secondly, also on Aleppo, you've again made clear your practical disagreements with (inaudible) and President-elect Trump has throughout his campaign, and he said again last night, that he wants to create safe zones in Syria. Do you feel like in this transition, you need to help him toward implementing that or is that not something you need to be doing?

OBAMA: Mike, I always feel responsible. I felt responsible when kids were being shot by snipers. I felt responsible when millions of people had been displaced. I feel responsible for murder and slaughter that's taken place in South Sudan that's not being reported on, partly because there's not as much social media being generated from there.

There are places around the world where horrible things are happening and because of my office, because I'm president of the United States, I feel responsible. I ask myself every single day, is there something I could do that would save lives and make a difference and spare some child who doesn't deserve to suffer. So that's a starting point. There's not a moment during the course of this presidency where I haven't felt some responsibility.

That's true, by the way, for our own country. When I came into office and people were losing their jobs and losing their homes and losing their pensions, I felt responsible and I would go home at night and I would ask myself, was there something better that I could do or smarter that I could be that would make a difference in their lives, that would relieve their suffering and relieve their hardship.

So with respect to Syria, what I have consistently done is taken the best course that I can to try to end the civil war while having also to take into account the long-term national security interests of the United States. And throughout this process, based on hours of meetings -- if you tallied it up, days and weeks of meetings -- where we went through every option in painful detail with maps and we had our military and we had our aid agencies and we had our diplomatic teams, and sometimes, we'd bring in outsiders who were critics of ours.

OBAMA: Whenever we went through it, the challenge was that short of putting large numbers of U.S. troops on the ground uninvited, without any international law mandate, without sufficient support from Congress, at a time when we still had troops in Afghanistan and we still had troops in Iraq and we had just gone through over a decade of war and spent trillions of dollars and when the opposition on the ground was not cohesive enough to necessarily govern a country and you had a military superpower in Russia prepared to do whatever it took to keep its (inaudible) involved and you had a regional military power in Iran that saw their own vital strategic interests at stake and were willing to send in as many of their people or proxies to support the regime.

And in that circumstance, unless we were all in and willing to take over Syria, we were going to have problems. And everything else was tempting because we wanted to do something and it sounded like the right thing to do but it was going to be impossible to do this on the cheap. And in that circumstance, I have to make decision as president of the United States as to what is best -- I'm sorry.

What's going on? Somebody's not feeling good. All right. Why don't we have -- we got -- we can get our doctors back there to help out. Somebody want to go to my doctor's office and just send them -- all right. Where was I? So we couldn't do it on the cheap. Now, it may be --

QUESTION: Can we get a doctor in here? Can that be arranged?

OBAMA: Can somebody help out, please, and get Doc Jackson in here? Somebody grabbing our doctor?

QUESTION: Thank you, Mr. President.

OBAMA: Of course. In the meantime, just give her a little room. Doctor will be here in a second. You guys know where the doctor's office is? So just go through the palm doors. Its right -- its right next to the map room. There he is. All right. There's Doc Jackson. He's all right. OK. The doctor -- the doctor's in the house.

So -- And I don't mean that -- I mean that with all sincerity. I understand the impulse to want to do something, but ultimately what I've had to do is to think about, what can we sustain, what is realistic? And my first priority has to be, what's the right thing to do for America? And it has been our view that the best thing to do has been to provide some support to the moderate opposition so that they could sustain themselves. And that you wouldn't see anti-Assad regime sentiments just pouring into Al- Nusra and Al-Qaeda or ISIL that we engaged our international partners in order to put pressure on all the parties involved. And to try to resolve this through diplomatic and political means. I cannot claim that we've been successful. And so that's something that, as is true with a lot of issues and problems around the world, I have to go to bed with every night.

But I continue to believe that it was the right approach given what realistically we could get done. Absent a decision, as I said, to go into much more significant way. And that, I think would not have been a sustainable or good for the American people because we had a whole host of other obligations that we also had to meet, wars we had already started and that were not yet finished.

With respect to the issue of safe zones , it is a continued problem, a continued challenge with safe zones is if you are setting up those zones on Syrian territory, then that requires some force that is willing to maintain that territory in the absence of consent from the Syrian government and now the Russians or the Iranians.

So it may be that with Aleppo's tragic situation unfolding that in the short term, if we can get more of the tens of thousands who are still trapped there out , that so long as the world's eyes are on them and they are feeling pressure, the regime in Russia concludes that they are willing to find some arrangement, perhaps in coordination with Turkey, whereby those people can be safe.

Even that will probably be temporary, but at least it solves a short-term issue that's going to arise.

Unfortunately we are not there yet because right now we have Russians and Assad claiming that basically all the innocent civilians who were trapped in Aleppo are out when international organizations, humanitarian organizations who know better and who are on the ground, have said unequivocally that there are still tens of thousands who are trapped and prepared to leave under pretty much any conditions.

And so right now our biggest priority is to continue to put pressure wherever we can to try to get them out.

(CROSSTALK)

OBAMA: Mike, I can't have too much...

QUESTION: (OFF-MIKE) but do you see, responsibility notwithstanding, moving in that direction or help President-elect Trump move in that direction?

OBAMA: I will help President Trump -- President-elect Trump with any advice, counsel, information that we can provide so that he, once he's sworn in, can make a decision.

Between now and then, these are decisions that I have to make based on the consultations that I have with our military and the people who have been working this every single day. Peter Alexander (ph).

QUESTION: Mr. President, thank you very much.

Can you, given all the intelligence that we have now heard, assure the public this was once and for all a free and fair election? And specifically on Russia, do you feel any obligation now as they have been insisting that this isn't the case to show the proof, as it were? They say, put your money where your mouth is and declassify some of the intelligence and the evidence that exists.

And more broadly, as it relates to Donald Trump on this very topic, are you concerned about his relationship with Vladimir Putin, especially given some of the recent cabinet picks, including his selection for secretary of state, Rex Tillerson, who toasted Putin with champagne over oil deals together? Thank you.

OBAMA: I may be getting older because these multipart questions, I start losing track.

(LAUGHTER)

OBAMA: I can assure the public that there was not the kind of tampering with the voting process that was our concern and will continue to be of concern going forward, that the votes that were cast were counted, they were counted appropriately.

We have not seen evidence of machines being tampered with, so that assurance I can provide.

That doesn't mean that we find every single, you know, potential probe of every single voting machine all across the country, but we paid a lot of attention to it. We worked with state officials, et cetera, and we feel confident that that didn't occur and that the votes were cast and they were counted.

And so that's on that point. What was the second one?

QUESTION: Say more about declassification.

OBAMA: Declassification. Look, we will provide evidence that we can safely provide, that does not compromise sources and methods. But I'll be honest with you, when you are talking about cybersecurity, a lot of it is classified and we're not going to provide it, because the way we catch folks is by knowing certain things about them that they may not want us to know and if we're gonna monitor this stuff effectively going forward, we don't want them to know that we know.

So, this is one of those situations where, unless the American people genuinely think that the professionals in the CIA, the FBI, our entire intelligence infrastructure, many of whom -- by the way, served in previous administrations and who are Republicans -- are less trustworthy than the Russians. Then people should pay attention to what our intelligence agencies say.

This is part of what I meant when I said we've got to think what is happening to happening to our political culture here. The Russians can't change us or significantly weaken us. They are a smaller country, they are a weaker country, their economy doesn't produce anything that anybody wants to buy except oil and gas and arms. They don't innovate.

But they can impact us if we lose track of who we are. They can impact us if we abandon our values. Mr. Putin can weaken us just like he's trying to weaken Europe if we start buying into notions that it's OK to intimidate the press, or lock up dissidents, or discriminate against people because of their faith or what they look like.

And what I worry about -- more than anything -- is the degree to which because of the fierceness because of the partisan battle, you start to see certain folks in the Republican Party and Republican voters suddenly finding a government and individuals who stand contrary to everything that we stand for as being OK, because that's how much we dislike Democrats.

I mean, think about it. Some of the people who historically have been very critical of me for engaging with the Russians and having conversations with them, also endorsed the president-elect, even as he was saying that we should stop sanctioning Russia and being tough on them and work together with them against our common enemies.

It was very complimentary of Mr. Putin personally. Now that -- that wasn't news. The president-elect during the campaign said so. And some folks who had made a career out of being anti-Russian, didn't say anything about it. And then after the election, suddenly they're asking, oh, why didn't you tell us that maybe the Russians were trying to help our candidate? Well, come on.

There was a survey some of you saw where -- not this just one poll, but pretty credible source, 37 percent of Republican voters approve of Putin. Over a third of Republican voters approve of Vladimir Putin, the former head of the KGB. Ronald Reagan would roll over in his grave. And how did that happen? It happened in part because for too long, everything that happens in this town, everything that's said is seen through the lens of does this help or hurt us relative to Democrats or relative to President Obama. And unless that changes, we're going to continue to be vulnerable to foreign influence because we've lost track of what it is that we're about and what we stand for.

With respect to the president-elect's appointments, it is his prerogative, as I have always said, for him to appoint who he thinks can best carry out his foreign policy or his domestic policy. It is up to the Senate to advise and consent. There will be plenty of time for members of the Senate to go through the record of all his appointees and determine whether or not they're appropriate for the job.

Martha (inaudible).

QUESTION: Mr. President, I want to talk about Vladimir Putin again. Just to be clear, do you believe Vladimir Putin himself authorized the hack? And do you believe he authorized that to help Donald Trump?

And on the intelligence, one of the things Donald Trump cites is Saddam Hussein and the weapons of mass destruction and that they were never found. Can you say unequivocally that this was not China, that this was not a 400-pound guy sitting on his bed as Donald Trump says? And do these types of tweets and kinds of statements from Donald Trump embolden the Russians?

OBAMA: When the report comes out before I leave office, that will have drawn together all the threads, and so I don't want to step on their work ahead of time. What I can tell you is that the intelligence that I've seen gives me great confidence in their assessment that the Russians carried out this hack.

QUESTION: Which hack?

OBAMA: The hack of the DNC and the hack of John Podesta.

Now, the -- but again, I think this is exactly why I want the report out, so that everybody can review it. And this has been briefed and the evidence in closed session has been provided on a bipartisan basis, not just to me, it's been provided to the leaders of the House and the Senate and the chairmen and ranking members of the relevant committees. And I think that what you've already seen is, at least some of the folks who've seen the evidence don't dispute I think the basic assessment that the Russians carried this out.

QUESTION: But specifically, could (ph) you not say that...

OBAMA: Well, Martha, I think what I want to make sure of is that I give the intelligence community a chance to gather all the information.

But I'd make a larger point, which is, not much happens in Russia without Vladimir Putin. This is a pretty hierarchical operation. Last I checked, there's not a lot of debate and democratic deliberation, particularly when it comes to policies directed at the United States. We have said and I will confirm that this happened at the highest levels of the Russian government and I will let you make that determination as to whether there are high-level Russian officials who go off rogue and decide to tamper with the U.S. election process without Vladimir Putin knowing about it.

QUESTION: So I wouldn't be wrong in saying the president thinks Vladimir Putin authorized the hack?

OBAMA: Martha, I've given you what I've -- what I'm gonna give you.

What was your second question?

QUESTION: Do the tweets and do the statements by -- by Donald Trump embolden Russia?

OBAMA: As I said before, I think that the president-elect, you know, is still in transition mode from campaign to governance. I think he hasn't gotten his whole team together yet. He still has campaign spokespersons sort of filling in and appearing on cable shows. And there is just a whole different attitude and vibe when you're not in power as when you are in power.

So rather than me sort of characterize the appropriateness or inappropriateness of what he is doing at the moment, I think what we have to see is how will the president-elect operate and how will his team operate when they've been fully briefed on all these issues. They have their hands on all the levers of government. And they have got to start making decisions.

One way I do believe that the president-elect can approach this that would be unifying is to say that we welcome a bipartisan independent process that gives the American people an assurance not only that votes are counted properly, that the elections are fair and free, but that we have learned lessons about how internet propaganda from foreign countries can be released into the political bloodstream and that we have got strategies to deal with it for the future.

The more this can be non-partisan, the better served the American people are going to be, which is why I made the point earlier and I'm going to keep on repeating this point, our vulnerability to Russia or any other foreign power is directly related to how divided, partisan, dysfunctional our political process is. That's the thing that makes us vulnerable.

If fake news that's being released by some foreign government is almost identical to reports that are being issued through partisan news venues, then it's not surprising that that foreign propaganda will have a greater effect. It doesn't seem that far-fetched compared to some of the other stuff that folks are hearing from domestic propagandists.

To the extent that our political dialogue is such where everything is under suspicion, and everybody is corrupt, and everybody is doing things for partisan reasons, and all of our institutions are, you know, full of malevolent actors, if that's the story line that is being put out there by whatever party is out of power, then when a foreign government introduces that same argument, with facts that are made up, voters who have been listening to that stuff for years, who have been getting that stuff every day from talk radio or other venues, they're going to believe it.

So if we want to really reduce foreign influence on our elections, then we had better think about how to make sure that our political process, our political dialogue is stronger than it has been.

Mark Langley (ph).

QUESTION: Thank you, Mr. President.

I wonder whether I could move you from Russia to China for a moment.

OBAMA: Absolutely.

QUESTION: Your successor spoke by phone with the president of Taiwan the other day, and declared subsequently that he wasn't sure why the United States needed to be bound by the One China Policy.

He suggested it could be used as a bargaining chip perhaps to get better terms on a trade deal or more cooperation on North Korea. There's already evidence that tensions between the two sides have increased a bit, and just today, the Chinese have seized an underwater drone in the South China Sea.

Do you agree, as some do, that our China policy could use a fresh set of eyes and what's the big deal about having a short phone call with the president of Taiwan? Or do you worry that these types of unorthodox approaches are setting us on a collision course with perhaps our biggest geopolitical adversary?

OBAMA: That's a great question.

I'm somewhere in between. I think all of our foreign policy should be subject to fresh eyes. I think one of the -- I've said this before, I am very proud of the work I've done. I think I'm a better president now than when I started. But you know, if you're here for eight years in the bubble, you start seeing things a certain way and you benefit from -- the democracy benefits, America benefits from some new perspectives.

And I think it should be not just the prerogative, but the obligation of a new president to examine everything that's been done and see what makes sense and what doesn't. That's what I have done when I came in and I'm assuming any new president's gonna undertake those same exercises.

And given the importance of the relationship between United States and China, given how much is at stake in terms of the world economy, national security, our presence in the Asia-Pacific, China's increasing role in international affairs, there's probably no bilateral relationship that carries more significance and where there's also the potential if that relationship breaks down or goes into full conflict mode that everybody is worse off. So I think it's fine for him to take a look at it. What I have advised the president-elect is that across the board on foreign policy, you want to make sure that you're doing it in a systematic, deliberate, intentional way.

And since there's only one president at a time, my advice to him has been that before he starts having a lot of interactions with foreign governments other than the usual courtesy calls, that he should want to have his full team in place, that he should want his team to be fully briefed on what's gone on in the past and where the potential pitfalls may be, where the opportunities are, what we've learned from eight years of experience so that as he's then maybe taking foreign policy in a new direction, he's got all the information to make good decisions, and by the way, that all of government is moving at the same time and singing from the same hymnal.

And with respect to China -- and let's just take the example of Taiwan, there has been a longstanding agreement essentially between China and the United States, and to some agree the Taiwanese, which is to not change the status quo. Taiwan operates differently than mainland China does. China views Taiwan as part of China, but recognizes that it has to approach Taiwan as an entity that has its own ways of doing things.

OBAMA: The Taiwanese have agreed that as long as they're able to continue to function with some agree of autonomy, that they won't charge forward and declare independence. And that status quo, although not completely satisfactory to any of the parties involved, has kept the peace and allowed the Taiwanese to be a pretty successful economy and -- of people who have a high agree of self-determination. What I understand for China, the issue of Taiwan is as important as anything on their docket.

The idea of One China is at the heart of their conception as a nation. And so if you are going to upend this understanding, you have to have thought through what the consequences because the Chinese will not treat that the way they'll treat some other issues. They won't even treat it the way they issues around the South China Sea, where we've had a lot of tensions. This goes to the core of how they see themselves.

And their reaction on this issue could end up being very significant. That doesn't mean that you have to adhere to everything that's been done in the past, but you have to think it through and have planned for potential reactions that they may engage in. All right. Isaac Dovere, Politico.

QUESTION: Thank you Mr. President. Two questions on where this all leaves us.

OBAMA: What leaves us? Where my presidency leaves us? It leaves us in a really good spot.

(LAUGHTER)

OBAMA: If we make some good decisions going forward.

QUESTION: What do you say to the electors who are going to meet on Monday and are thinking of changing their votes? Do you think they should be given an intelligence briefing about the Russian activity or should they bear in mind everything you have said and have said already (ph)? Should they -- should votes be bound by the state votes as they've gone? And long-term, do you think that there is need for Electoral College reform that was tied to the popular vote?

OBAMA: Sounded like two but really was one.

(LAUGHTER)

OBAMA: I love how these start. I've got two questions, but each one has four parts.

(LAUGHTER)

QUESTION: On the Democratic Party, your labor secretary is running for -- to be the chair of the Democratic National Committee. Is the vision that you've seen him putting forward what you think the party needs to be focused on? And what do you think about the complaint that say that the future democratic committee shouldn't be a continuation of some of your political approach? Part of that is complaints that decisions that you have made as president and leader of the party has structurally weakened the DNC and the Democratic Party and they think that that has led to or has help lead to some of the losses in elections around the country. Do you regret any of those decisions?

OBAMA: I'll take the second one first and say that Tom Perez has been, I believe one of the best secretaries of labor in our history. He is tireless. He is wicked smart. He has been able to work across the spectrum of you know, labor, business, activists. He has produced. I mean, if you look at his body of work on behalf of working people, what he's pushed for in terms of making sure that workers get a fair deal, decent wages, better benefits, that their safety is protected on the job. He has been extraordinary.

Now others who have declared are also my friends and fine people as well. And the great thing is, I don't have a vote in this. So - so - so we'll let the process unfold, I don't think it's going to happen any time soon. I described to you earlier what I think needs to happen, which is that the democratic party, whether that's entirely through the DNC or through rebuilding of state parties, or some other arrangement, has to work at the grassroots level, has to be present in all 50 states, has to have a presence in counties.

Has to think about in that extension (ph) how are we speaking directly to voters.

I will say this, and I'm not going to engage in too much punditry. But that I could not be prouder of the coalition that I put together in my -- each of my campaigns. Because it was inclusive and it drew in people who normally weren't interested in politics and didn't participate.

But I'd like to think -- I think I can show that in those elections, I always cast a broad net. I always said first and foremost we're Americans, that we have a common creed, that there's more that we share than divides us. And I want to talk to everybody and get a chance to get everybody's vote.

I still believe what I said in 2004 which is this red state-blue thing is a construct. Now it is a construct that has gotten more and more powerful for a whole lot of reasons from gerrymandering, to big money, to a way that the media is splintered.

And so people are just watching what reinforces their existing biases as opposed to having to listen to different points of view. So there are all kinds of reasons for it. But outside the realm of electoral politics, I still see people the way I saw them when I made that speech, full of contradictions and some regional differences but basically, folks care about their families.

They care about having meaningful work. They care about making sure their kids have more opportunity than they did. They want to be safe. They want to feel like things are fair.

And whoever leads the DNC and any candidate with the Democratic brand going forward, I want them to feel as if they can reach out and find that common ground and speak to all of America. And that requires some organization.

And you're right that -- and I said this in my earlier remarks, that what I was able to do during my campaigns, I wasn't able to do during midterms. It's not that we didn't put in time and effort into it. I spent time and effort into it. But the coalition I put together didn't always turn out to be transferable.

And the challenge is that -- you know, some of that just has to do with the fact that when you are in the party in power and people are going through hard times like they were in 2010, they are going to punish to some degree the president's party regardless of what organizational work is done.

Some of it has to do with just some deep standing traditional challenges for Democrats like during off-year elections the electorate is older and we do better with the younger electorate. But we know those things are true.

And I didn't crack the code on that. And if other people have ideas about how to do that even better, I'm all for it.

So with respect to the electors, I'm not going to wade into that issue. Because, again, it's the American people's job and now electors' job to decide my successor. It is not my job to decide my successor.

And I have provided people with a lot of information about what happened during the course of the election, but more importantly, the candidates themselves I think talked about their beliefs and their vision for America.

The president-elect I think has been very explicit what he cares about and what he believes in. And so it's not in my hands now, it's up to them.

QUESTION: what about long term about the Electoral College?

OBAMA: Long term with respect to the Electoral College, the Electoral College is a vestige, it's a carry-over from an earlier vision of how our federal government was going to work that put a lot of premium on states, and it used to be that the Senate was not elected directly, it was through state legislatures. And it's the same type of thinking that gives Wyoming two senators and -- with about half a million people and California with 33 million get the same two.

So there's -- there are some structures in our political system as envisioned by the founders that sometimes are going to disadvantage Democrats, but the truth of the matter is is that if we have a strong message, if we're speaking to what the American people care about, typically, the popular vote and the electoral college vote will align.

And I guess -- I guess part of my overall message here as I leave for the holidays is that if we look for one explanation or one silver bullet or one easy fix for our politics, then we're probably going to be disappointed. There are just a lot of factors in what's happened, not just over the last few months, but over the last decade that has made both politics and governance more challenging. And I think everybody's raised legitimate questions and legitimate concerns.

I do hope that we all just take some time, take a breath, that's certainly what I'm going to advise Democrats, to just reflect a little bit more about how can we -- how can we get to a place where people are focused on working together based on at least some common set of facts? How can we have a conversation about policy that doesn't demonize each another? How can we channel what I think is the basic decency and goodness of the American people so it reflects itself in our politics, as opposed to it being so polarized and so nasty that in some cases, you have voters and unelected officials who have more confidence and faith in a foreign adversary than they have in their neighbors?

And those go to some bigger issues. How is it that we have some voters or some elected officials who think that Michelle Obama's healthy eating initiative and school nutrition program is a greater threat to democracy than, you know, our government going after the press if they're issuing a story they don't like? I mean, that's -- that's an issue that I think, you know, we've got to -- we've got to wrestle with. And we will.

People have asked me how you feel after the election and so forth and I say well, look, this is a clarifying moment. It's a useful reminder that voting counts, politics counts. What the president- elect is going to be doing is gonna be very different than what I was doing and I think people will be able to compare and contrast and make judgments about what worked for the American people. And I hope that building off the progress we've made, that what the president-elect is proposing works.

What I can say with confidence is that what we've done works. That I can prove. I can show you where we were in 2008 and I can show you where we are now. And you can't argue that we are not better off, we are.

And for that, I thank the American people and then more importantly I thank -- well, not importantly, as importantly -- I was going to say Josh Earnest...

(LAUGHTER)

OBAMA: ... for doing such a great job. For that, I thank the American people, I thank the men and women in uniform who serve. I haven't gotten to the point yet where I've been overly sentimental. I will tell you that when I was doing my last Christmas party photo -- I know many of you have participated in these, they're pretty long.

Right at the end of the line, the President's Marine Corps Band comes in, those who have been performing. And I take a picture with them. And that was the last time that I was going to take a picture with my Marine Corps Band after an event. And I got a little choked up.

Now I was in front of marines so I had to like tamp it down. But it was just one small example of all of the people who have contributed to our success. I am responsible for where we've screwed up, the successes are widely shared with all of the amazing people who have been part of this administration.

OK? Thank you, everybody. Mele Kalikimaka!`,
        storyline: []
      },
      {
        name: "Donald Trump",
        bio: "",
        title: "45th President of the US",
        avatar: TRUMP,
        color: "red",
        srcText: "",
        storyline: []
      }
    ]
  }
];

export default stories;
