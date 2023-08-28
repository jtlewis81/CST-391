#### Jamie Lewis
#### CST-391
#### 8/27/23
#### Instructor Bobby Estey

---

<div style="text-align:center;"><h3>Milestone 2: Refined Project Proposal</h3></div>
<br>
<br>
<br>
<div style="text-align:center;"><h3>Sermon Archive Manager (SAM)</h3></div>
<br>
<br>
<br>
<br>
<br>

---

### Instructor Feedback From Previous Milestone & Changes Made

> Jamie, excellent post. Yes, only post your MARKDOWN links is all that is required. WELL DONE :-)  

#### How Feedback Will Be Addressed  

No actions taken based on instructor feedback.

The following items were updated for Milestone 2:
- Added REST API section
- Updated all applicable sections to reference an added functionality: list Sermons by speaker

---

### Introduction

I run the media room in our church, and a few months ago I had to spend several hours going back through our archives to find all of the 108 sermons that belong to a certain series that spanned about 4 years. It would be really nice if I could just click a few buttons to retrieve a collection of the audio files that belong to any sermon series or speaker, were based on a given Bible reference, or contained a keyword in the title.

Sermon Archive Manager (SAM) will allow just that. The "product" for this app is a Sermon. A Sermon has a title, speaker,  date, series (optional), Bible reference(s), and a file path to the audio recording.

The plan is to make a single page application that contains a list of all Sermons initially. Filters can be applied which auto-update the list. Filters will include 2 boxes for typing in searches, one for Sermon titles and one for references. There will be a dropdown automatically populated with all available series names. The button for resetting filters restores the full list. An "Add Sermon" button opens a modal, which has a form for creating the new Sermon. It will have "Submit" and "Cancel" buttons. The main application view also has "Edit" and "Delete" buttons which work only on the selected Sermon. When the list is loaded or refreshed, the top item is auto-selected.

---

### Functionality (User Stories)

- Display all Sermons
- Filter Sermons by series
- Filter Sermons by speaker
- Filter Sermons by searching titles
- Filter Sermons by searching references
- Create a new Sermon
- Update a Sermon
- Delete a Sermon

---

### Database Design

![ER Diagram](resources/ER%20Diagram.png)

---

### Sitemap Flowchart

![Sitemap](resources/Sitemap.png)

---

### UI Wireframes

![UI Wireframes](resources/UI%20Wireframes.png)

---

### UML Class Diagram

![UML Diagram](resources/UML%20Class%20Diagram.png)

---

### REST API

Format for the following API calls: [HTTP Method] methodName {URI, root not included}

- [GET] listAllSermons {/sermons}
- [GET] listSermonById {/sermons?id=#}
- [GET] listSermonBySeries {/sermons?series=seriesName}
- [GET] listSermonBySpeaker {/sermons?speaker=seriesName}
- [GET] listSermonByTitleSearch {/sermons/search/title/:searchTerm}
- [GET] listSermonByReferenceSearch {/sermons/search/reference/:searchTerm}
- [POST] createSermon {/sermons}
- [PUT] updateSermon {/sermons}
- [DELETE] deleteSermon {/sermons}

Note: These are just the controller methods. I was not sure what all to include in this document for the API.

---

### Risks

- User input will need to be sanitized to guard against SQL injection.
- I hope I haven't gotten too ambitious with the feature set for this project.
