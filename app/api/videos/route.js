import { videos } from "@/app/utils/data";

export const GET = async (req, { params }) => {

    try {
        console.log('GET /api/videos', params)
        return new Response(JSON.stringify(videos), { status: 200 });
    } catch (e) {
        return new Response('Erro ao carregar videos', { status: 500 })
    }
};