export const sermonQueries = {
	readSermons:
		`SELECT id AS id, title AS title, speaker AS speaker, date AS date, series AS series, reference AS reference, filepath AS filepath from SERMONS`,
    readSermonsBySeries:
        `SELECT id AS id, title AS title, speaker AS speaker, date AS date, series AS series, reference AS reference, filepath AS filepath from SERMONS
        WHERE cst391_milestone.sermons.series = ?`,
	readSermonsBySpeaker:
        `SELECT id AS id, title AS title, speaker AS speaker, date AS date, series AS series, reference AS reference, filepath AS filepath from SERMONS
	   WHERE cst391_milestone.sermons.speaker = ?`,
	readSermonsByTitleSearch:
		`SELECT id AS id, title AS title, speaker AS speaker, date AS date, series AS series, reference AS reference, filepath AS filepath from SERMONS
	   WHERE cst391_milestone.sermons.title LIKE ?`,
	readSermonsByReferenceSearch:
		`SELECT id AS id, title AS title, speaker AS speaker, date AS date, series AS series, reference AS reference, filepath AS filepath from SERMONS
	   WHERE cst391_milestone.sermons.reference LIKE ?`,
	readSermonsById:
		`SELECT id AS id, title AS title, speaker AS speaker, date AS date, series AS series, reference AS reference, filepath AS filepath from SERMONS
	   WHERE cst391_milestone.sermons.id = ?`,
	createSermon:
		`INSERT INTO SERMONS(title, speaker, series, reference, filepath) VALUES(?,?,?,?,?)`,
	updateSermon:
		`UPDATE cst391_milestone.sermons SET title=?, speaker=?, series=?, reference=?, filepath=? WHERE id = ?`,
	deleteSermon:
		`DELETE FROM SERMONS where id = ?`,
}
