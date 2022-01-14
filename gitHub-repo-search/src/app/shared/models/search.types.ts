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
    html_url: string,
    description: string,
    created_at: string,
    forks: number,
    watchers: number,
    stargazers_count: number,
    open_issues: number
}

export enum sortOptions {
  stars = 'stars',
  forks = 'forks',
  help_wanted_issues = 'help-wanted-issues',
  updated = 'updated'
} 

export enum directionsOptions {
    desc = 'desc',
    asc = 'asc'
}

export type searchOptions = {
    chars: string,
    sortDirection: directionsOptions,
    sortOption: sortOptions
}