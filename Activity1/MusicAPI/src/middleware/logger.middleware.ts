import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from 'uuid';

const getProcessingTimeInMS = (time: [number, number]): string => {
    return `${(time[0] * 1000 + time[1] / 1e6).toFixed(2)}ms`;
}

/*
    Logs displays in the following pattern:

    [id][timestamp] method:url START processing
    [id][timestamp] method:url response.statusCode END processing

    @param req Express.Request
    @param res Express.Response
    @param next Express.NextFunction
*/
export default function logger(req: Request, res: Response, next: NextFunction){

    // unique id
    const id = uuidv4();

    // timestamp
    const now = new Date();
    const timestamp = [now.getFullYear(), '-', now.getMonth() + 1, '-', now.getDate(), ' ', now.getHours(), ':', now.getMinutes(), ':', now.getSeconds()].join('');
    
    // api endpoint
    const { method, url } = req;

    // start of process
    const start = process.hrtime();
    const startText = `[START:${getProcessingTimeInMS(start)}]`;
    const idText = `[${id}]`;
    const timestampText = `[${timestamp}]`;

    // show start log
    console.log(`${idText} ${timestampText} ${method}:${url} ${startText}`);

    // response triggers end of processing
    res.once('finish', () => {
        const end = process.hrtime(start);
        const endText = `END:${getProcessingTimeInMS(end)}`;
        console.log(`${idText} ${timestampText} ${method}:${url} ${res.statusCode} ${endText}`)
    });

    // handle next event
    next();
}