import DxfParser from "./parser/DxfParser"

/** Fetches and parses DXF file. */
export class DxfFetcher {
    constructor(url) {
        this.url = url
    }

    /** @param progressCbk {Function} (phase, receivedSize, totalSize) */
    async Fetch(progressCbk = null) {
        const response = await fetch(this.url)
        const totalSize = +response.headers.get('Content-Length')

        // const reader = response.body.getReader()
        let receivedSize = 0
        //XXX streaming parsing is not supported in dxf-parser for now (its parseStream() method
        // just accumulates chunks in a string buffer before parsing. Fix it later.
        let buffer = ""
        let decoder = new TextDecoder("utf-8")

        response.body.on('readable', async () => {
            let chunk;
            while (null !== (chunk = await response.body.read())) {
                buffer += decoder.decode(chunk, {stream: true})
                receivedSize += chunk.length
                if (progressCbk !== null) {
                    progressCbk("fetch", receivedSize, totalSize)
                }
            }
            buffer += decoder.decode(new ArrayBuffer(0), {stream: false})
        });

        response.body.on('end', () => {
            if (progressCbk !== null) {
                progressCbk("parse", 0, null)
            }
            const parser = new DxfParser()
            return parser.parseSync(buffer)
        } )


        // while(true) {
        //     const {done, value} = await reader.read()
        //     if (done) {
        //         buffer += decoder.decode(new ArrayBuffer(0), {stream: false})
        //         break
        //     }
        //     buffer += decoder.decode(value, {stream: true})
        //     receivedSize += value.length
        //     if (progressCbk !== null) {
        //         progressCbk("fetch", receivedSize, totalSize)
        //     }
        // }

        // if (progressCbk !== null) {
        //     progressCbk("parse", 0, null)
        // }
        // const parser = new DxfParser()
        // return parser.parseSync(buffer)
    }
}