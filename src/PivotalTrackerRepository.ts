import {Person, Story} from "./interfaces";

export class PivotalTrackerRepository {
  public getPeople = async (ptToken: string, ptProject: string) => {
    const people = await fetch(`https://www.pivotaltracker.com/services/v5/my/people?project_id=${ptProject}`, {
      headers: {
        "X-TrackerToken": ptToken,
      }
    });
    const peopleJson = await people.json();
    return Object.values(peopleJson) as unknown as Person[];
  }

  public getOpenStories = async (ptToken: string, ptProject: string) => {
    const stories = await fetch(`https://www.pivotaltracker.com/services/v5/projects/${ptProject}/stories?filter=current_state%3Astarted`, {
      headers: {
        "X-TrackerToken": ptToken,
      }
    });
    const storiesJson = await stories.json();
    return Object.values(storiesJson) as unknown as Story[];
  }
}
