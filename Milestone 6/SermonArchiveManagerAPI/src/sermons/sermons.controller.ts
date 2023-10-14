import { Request, RequestHandler, Response } from 'express';
import * as SermonsDao from './sermons.dao';
import { OkPacket } from 'mysql';

export const readSermons: RequestHandler = async (req: Request, res: Response) => {
    try {
        let sermons;
        let id = parseInt(req.query.id as string);

        console.log('id', id);
        if (Number.isNaN(id)) {
            sermons = await SermonsDao.readSermons();
        } else {
            sermons = await SermonsDao.readSermonsById(id);
        }

        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermons][Error]', error);
        res.status(500).json({ message: 'There was an error when fetching sermons' });
    }
};

export const readSermonsBySeries: RequestHandler = async (req: Request, res: Response) => {
    try {
        const sermons = await SermonsDao.readSermonsBySeries(req.params.series);
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermons][Error] ', error);
        res.status(500).json({ message: 'There was an error when fetching sermons' });
    }
};

export const readSermonsBySpeaker: RequestHandler = async (req: Request, res: Response) => {
    try {
        const sermons = await SermonsDao.readSermonsBySpeaker(req.params.speaker);
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermons][Error] ', error);
        res.status(500).json({ message: 'There was an error when fetching sermons' });
    }
};

export const readSermonsByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);

        const sermons = await SermonsDao.readSermonsByTitleSearch('%' + req.params.search + '%');
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermons][Error] ', error);
        res.status(500).json({ message: 'There was an error when fetching sermons' });
    }
};

export const readSermonsByReferenceSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);

        const sermons = await SermonsDao.readSermonsByReferenceSearch('%' + req.params.search + '%');
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermons][Error] ', error);
        res.status(500).json({ message: 'There was an error when fetching sermons' });
    }
};

export const createSermon: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await SermonsDao.createSermon(req.body);

        console.log('req.body', req.body);
        console.log('sermon', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[sermons.controller][createSermon][Error] ', error);
        res.status(500).json({ message: 'There was an error when creating a sermon' });
    }
};

export const updateSermon: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await SermonsDao.updateSermon(req.body);

        console.log('req.body', req.body);
        console.log('sermon', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[sermons.controller][updateSermon][Error] ', error);
        res.status(500).json({ message: 'There was an error when updating a sermon' });
    }
};

export const deleteSermon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let id = parseInt(req.params.id as string);
        console.log('id', id);

        if (!Number.isNaN(id)) {
            const response = await SermonsDao.deleteSermon(id);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for id");
        }

    } catch (error) {
        console.error('[sermons.controller][deleteSermon][Error] ', error);
        res.status(500).json({ message: 'There was an error when deleting sermon' });
    }
};

export const readSpeakers: RequestHandler = async (req: Request, res: Response) => {
    try {
        const speakers = await SermonsDao.readSpeakers();
        
        res.status(200).json(speakers);
    } catch (error){
        console.error('[sermons.controller][readSpeakers][Error] ', error);
        res.status(500).json({message: 'There was an error fetching speakers'});
    }
}

export const readSeries: RequestHandler = async (req: Request, res: Response) => {
    try {
        const series = await SermonsDao.readSeries();
        
        res.status(200).json(series);
    } catch (error){
        console.error('[sermons.controller][readSeries][Error] ', error);
        res.status(500).json({message: 'There was an error fetching series'});
    }
}
