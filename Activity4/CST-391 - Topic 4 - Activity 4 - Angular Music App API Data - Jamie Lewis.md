### Jamie Lewis
### CST-391
### 9/16/23
### Instructor Bobby Estey

---

<div style="text-align:center;"><h3>Activity 4: Angular Music App API Data</h3></div>

### SCREENSHOTS

Main Application Screen (Home Page)

![Home Page](activityScreenshots/main%20page.png)

Artist List

![Artist List](activityScreenshots/artist%20list.png)

Album List

![Album List](activityScreenshots/album%20list.png)

Album Display w/Tracks (I added an album in testing)

![Album Display](activityScreenshots/display%20album%20with%20tracks.png)

Add Album

![Add Album](activityScreenshots/add%20album.png)

Edit/Delete Album

- These items were marked as optional. Given the issues I had with the display-album module, I have opted to skip these for now. However, this functionality will be addressed in the Milestone Project.

### RESEARCH

#### How an Angular Application Maintains a Logged In State

In an Angular application, maintaining a logged-in state involves token-based authentication, with user tokens stored locally. The app uses HTTP interceptors to include tokens in requests, communicates with the server, and handles responses. Token renewal, logout, and error handling are critical components to ensure a seamless user experience and secure authentication.