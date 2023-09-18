import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Sermon } from "./sermons.model";
import { sermonQueries } from './sermons.queries';
import { Speaker } from "./speakers.model";
import { Series } from "./series.model";


export const readSermons = async () => {
    return execute<Sermon[]>(sermonQueries.readSermons, []);
};

export const readSermonsBySeries = async (series: string) => {
    return execute<Sermon[]>(sermonQueries.readSermonsBySeries, [series]);
};

export const readSermonsBySpeaker = async (speaker: string) => {
    return execute<Sermon[]>(sermonQueries.readSermonsBySpeaker, [speaker]);
};

export const readSermonsByTitleSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Sermon[]>(sermonQueries.readSermonsByTitleSearch, [search]);
};

export const readSermonsByReferenceSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Sermon[]>(sermonQueries.readSermonsByReferenceSearch, [search]);
};

export const readSermonsById = async (id: number) => {
    return execute<Sermon[]>(sermonQueries.readSermonsById, [id]);
};

export const createSermon = async (sermon: Sermon) => {
    return execute<OkPacket>(sermonQueries.createSermon,
        [sermon.title, sermon.speaker, sermon.date, sermon.series, sermon.reference, sermon.filepath]);
};

export const updateSermon = async (sermon: Sermon) => {
    return execute<OkPacket>(sermonQueries.updateSermon,
        [sermon.title, sermon.speaker, sermon.series, sermon.reference, sermon.filepath, sermon.id]);
};

export const deleteSermon = async (sermonId: number) => {
    return execute<OkPacket>(sermonQueries.deleteSermon, [sermonId]);
};

export const readSpeakers = async () => {
    return execute<Speaker[]>(sermonQueries.readSpeakers, [])
}

export const readSeries = async () => {
    return execute<Series[]>(sermonQueries.readSeries, []);
};
