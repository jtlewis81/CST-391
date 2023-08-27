export const albumQueries = {
    readAlbums:
        `SELECT id AS albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image 
            FROM music.albums`,
    readAlbumsByArtist:
        `SELECT id AS albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image 
            FROM music.albums 
            WHERE music.albums.artist = ?`,
    readAlbumsByArtistSearch:
        `SELECT id AS albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image 
            FROM music.albums 
            WHERE music.albums.artist LIKE ?`,
    readAlbumsByDescriptionSearch:
        `SELECT id AS albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image 
            FROM music.albums 
            WHERE music.albums.description LIKE ?`,
    readAlbumsByAlbumId:
        `SELECT id AS albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image 
            FROM music.albums 
            WHERE music.albums.id = ?`,
    createAlbum:
        `INSERT INTO albums(title, artist, description, year, image) 
            VALUES(?,?,?,?,?)`,
    updateAlbum:
        `UPDATE music.albums 
            SET title = ?, artist = ?, description = ?, year = ?, image = ? 
            WHERE id = ?`,
    deleteAlbum:
        `DELETE FROM music.albums WHERE id = ?`,
}