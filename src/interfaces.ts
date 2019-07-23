export interface Story {
  created_at: string;
  current_state: string;
  description: string;
  estimate: number;
  id: number;
  kind: string;
  labels: any[];
  name: string;
  owned_by_id: number;
  owner_ids: number[];
  project_id: number;
  requested_by_id: number;
  story_type: string;
  updated_at: string;
  url: string;
}

export interface Person {
  collaboration_factor: number;
  person: {
    email: string;
    id: number;
    initials: string;
    name: string;
    username: string;
  }
}