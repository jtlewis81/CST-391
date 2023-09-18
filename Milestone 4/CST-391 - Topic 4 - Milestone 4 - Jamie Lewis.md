#### Jamie Lewis
#### CST-391
#### 9/17/23
#### Instructor Bobby Estey

---

<div style="text-align:center;"><h3>Milestone 4: Angular Application</h3></div>
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

### Design Updates

This week, an attempt was made to develop a front-end application using the Angular JS framework. The application uses Bootstrap for styling. It includes a navigation bar, which delivers pages for displaying, creating, updating, and deleting a Sermon. As it stands, the update functionality does not work. I did not have time to get to the extra features I had planned, such as filtering the list of Sermons.

| Section Updated | Change(s) Made | Milestone/Week Update Performed
| -- | -- | -- |
| Design Updates | renamed from "Instructor Feedback From Previous Milestone & Changes Made" | Milestone 3/Week 2 |
| How Feedback Will Be Addressed | removed | Milestone 3/Week 2 |
| Description | renamed from "Introduction" | Milestone 3/Week 2 |
| UML Class Diagram | changed data type for series from string[] to string | Milestone 3/Week 2 |
| REST API | added API documentation sub-section | Milestone 3/Week 2 |
| | | |
| Design Updates | updated information to be relevant to Milestone 4 | Milestone 4/Week 4 |
| User Stories | Added subheadings to indicate completion status | Milestone 4/Week 4 |
| | | |
<!-- for future Milestone updates
| | | Milestone 5/Week 7 |
| | | Milestone 6/Week 8 |
-->

#### TODO
- All of the diagrams in this document still need to be updated. I just ran out of time this week. There were minor additions to the API, even though they are not currently used within the application. The UI should also include a few additional screens. I also changed the date to a string rather than a Datetime in the database and the Sermon model.
- The Update feature needs fixed. I was unable to get existing data to load into a form by the Id, even though the Id is being passed correctly. I believe the issue is with JSON parsing.

---

### Description

I run the media room in our church, and a few months ago I had to spend several hours going back through our archives to find all of the 108 sermons that belong to a certain series that spanned about 4 years. It would be really nice if I could just click a few buttons to retrieve a collection of the audio files that belong to any sermon series or speaker, were based on a given Bible reference, or contained a keyword in the title.

Sermon Archive Manager (SAM) will allow just that. The "product" for this app is a Sermon. A Sermon has a title, speaker,  date, series (optional), Bible reference(s), and a file path to the audio recording.

The plan is to make a single page application that contains a list of all Sermons initially. Filters can be applied which auto-update the list. Filters will include 2 boxes for typing in searches, one for Sermon titles and one for references. There will be dropdowns automatically populated with all available series and speaker names. The button for resetting filters restores the full list. An "Add Sermon" button opens a modal, which has a form for creating the new Sermon. It will have "Submit" and "Cancel" buttons. The main application view also has "Edit" and "Delete" buttons which work only on the selected Sermon. When the list is loaded or refreshed, the top item is auto-selected.

---

### Functionality (User Stories)

Completed

- Display all Sermons
- Create a new Sermon
- Delete a Sermon

Incomplete

- Update a Sermon

Planned, but not started.

- Filter Sermons by series
- Filter Sermons by speaker
- Filter Sermons by searching titles
- Filter Sermons by searching references

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

- [GET] readAllSermons {/sermons}
- [GET] readSermonById {/sermons?id=#}
- [GET] readSermonBySeries {/sermons?series=seriesName}
- [GET] readSermonBySpeaker {/sermons?speaker=seriesName}
- [GET] readSermonByTitleSearch {/sermons/search/title/:searchTerm}
- [GET] readSermonByReferenceSearch {/sermons/search/reference/:searchTerm}
- [POST] createSermon {/sermons}
- [PUT] updateSermon {/sermons}
- [DELETE] deleteSermon {/sermons}

#### API Documentation

![API Doc 1/3](resources/api%20doc%201.png)
![API Doc 1/3](resources/api%20doc%202.png)
![API Doc 1/3](resources/api%20doc%203.png)

---

### Risks

- User input will need to be sanitized to guard against SQL injection.
- I hope I haven't gotten too ambitious with the feature set for this project.
