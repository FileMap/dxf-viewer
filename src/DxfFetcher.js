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
        
        const buffer = await response.text();
        
        if (progressCbk !== null) {
            progressCbk("parse", 0, null)
        }
        
        const parser = new DxfParser()
        return parser.parseSync(buffer)
    }
}