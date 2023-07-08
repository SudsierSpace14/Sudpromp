import { Prompt } from "@models/prompt";
import { connectToDB } from "@utils/database";

interface Params {
    params: {
        id: string
    }
}

export const GET = async (request: Request, { params }: Params) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 