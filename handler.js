import runpod from 'runpod-sdk';
import 'dotenv/config';

async function handler(job) {
    try {
        const { url } = job.input;
        console.log("Job erhalten für:", url);
        
        // DEINE LOGIK HIER
        
        return { status: "success", message: "Verarbeitet: " + url };
    } catch (err) {
        return { status: "error", message: err.message };
    }
}

runpod.serverless.start({ handler });