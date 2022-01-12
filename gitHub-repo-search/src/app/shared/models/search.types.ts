export type gitHubResponse = {
    total_count: number,
    incomplete_results: boolean,
    items: []
}

export type gitHubRepo = {
    id: number,
    node_id: string,
    name: string, 
    full_name: string,
    owner: {
        login: string,
        id: number,
        avatar_url: string
    },
    url: string,
    description: string,
    created_at: string
}