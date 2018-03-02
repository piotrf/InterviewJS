##

* There’s now a Publish Flow starting in the Composer
  …

## 02-03-2017

* It is now possible to delete interviewees.
  You can do so in the modal dialog when editing a single interviewee. Bottom-right: there’s a red icon, it has a tooltip (on hover) and a dropdown (on click) asking to confirm deletion. Extra logic has been put in place to prevent removal of the only interviewee in a story.

* Simple auth flow.
  Added a simple Google sign-in screen ( http://interviewjs.io/my/ ) and a `sign out` CTA in the listing (next to the avatar).

* Extended bubble styles to support 'typing’ animation.
  You can see the result of that in the above link, where bubbles animate.

* Documented Animator wrappers.
  Above animations is just a subset of the possible treatments. We may not have time to add more, but there will be a space for open-source community to reference them: http://styleguide.interviewjs.io/#/animators

* Integrated icons throughout.
  All icons are now documented here: http://styleguide.interviewjs.io/#/icons and used throughout Composer. You’ll see them for example here: http://interviewjs.io/my/stories/0bf34b30-743b-46ab-weewe-c875326d86f6

* Composer now accepts transcript text
  In the Composer it is now possible to paste or type in transcript. That transcript is now being save per each interviewee separately (notice here: http://interviewjs.io/my/stories/0bf34b30-743b-46ab-weewe-c875326d86f6 how switching between interviewees displays different transcript). Any change to the transcript is being saved onBlur (when taking the focus from the textarea).

* It is now possible to select piece of a transcript
  The textarea holding the transcript has onSelect event hooked up, selecting text will automatically display it below in the grey bubble preview box. Note how you can edit text in that grey bubble box too — though those changes won’t be save just yet (WIP).

* It is now possible to add bubbles to the story.
  Only text bubbles for now, and it’s WIP—plenty to do there, but the + buttons turns green when the bubble preview grey area is populated with some data.

## 22-02-2017

* integrated simple speech bubble groups in the storyline pane with react-stay-scrolled
* stories dataset has been remodelled, added a simple chat `Meeting Ava` to test this dataset model against display logic
* interviewees switch features a direct link to interviewees’s tab in story details modal (the button next to the avatar)
* composer has now interviewees switch that toggles between interviewees’ storylines (avatars in the top center below the title)
* composer’s interviewee panel’s (left) has now tabs setup for all different speech bubble types
* forms have now field validation where necessary (i.e. prevents the user from saving a story without a title, ecc.)
* managing story details (meta, intro, interviewees, style) has been merged into a single modal dialog with tabs
* if listing is empty, there is now a CTA to create a new story
* there is now a `welcome` screen with a brief intro as per prototype, it appears only on first visit
* new story flow is now finalised, last step redirects to the composer
* it is now possible to add and edit interviewees both in the `create story` flow as well as listing and the composer itself
* new stories are assigned formatted creation date automatically
* story delete confirmation modal

## 15-02-2017

…
