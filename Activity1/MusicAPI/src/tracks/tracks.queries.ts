export const trackQueries = {
    createTrack:
        `INSERT INTO tracks (album_id, title, number, video_url, lyrics) VALUES(?,?,?,?,?)`,
    readTracks:
        `SELECT title AS title, number AS number, video_url AS video, lyrics AS lyrics FROM music.tracks WHERE album_id = ?`,
    updateTrack:
        `UPDATE music.tracks SET title = ?, number = ?, video_url = ?, lyrics = ? WHERE id = ?;`,
}