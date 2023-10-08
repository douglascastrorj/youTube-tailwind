import { videos } from "@/app/utils/data";

export const GET = async (req, { params }) => {

    try {
        console.log('GET /api/videos/id', params)
        if(params.id) {
            const result = videos.find(video => video.id === params.id)
            return new Response(JSON.stringify(result), { status: 200 });
        }
        return new Response(JSON.stringify(videos), { status: 200 });
    } catch (e) {
        return new Response('Erro ao carregar videos', { status: 500 })
    }
};