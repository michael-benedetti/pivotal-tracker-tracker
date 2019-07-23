import React, {useEffect, useState} from 'react';
import './App.css';
import {PivotalTrackerRepository} from "./PivotalTrackerRepository";
import StoryCard from "./StoryCard";
import {Person, Story} from "./interfaces";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

interface AppProps {
  pivotalTrackerRepository: PivotalTrackerRepository;
}

function App(props: AppProps) {
  const [people, setPeople] = useState<Person[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [ptToken, setPtToken] = useState<string>("");
  const [ptProject, setPtProject] = useState<string>("");


  return (
    <>
      <div style={{margin: "auto", display: "flex"}}>
        <label htmlFor={"tokenInput"}>Pivotal Tracker API Token</label>
        <Input
          id={"tokenInput"}
          onChange={(event) => setPtToken(event.target.value)}
          value={ptToken}
        />
        <label htmlFor={"projectInput"}>Pivotal Tracker Project</label>
        <Input
          id={"projectInput"}
          onChange={(event) => setPtProject(event.target.value)}
          value={ptProject}
        />
        <Button
          id={"storiesButton"}
          onClick={getTrackerData}
        >
          Fetch Stories
        </Button>
      </div>
      <div style={{margin: "auto"}}>
        <div style={{display: "grid", gridTemplateColumns: "150px 150px 150px 150px", gridGap: "100px"}}>
          {[...stories].map((story) => <StoryCard
            pair={people.filter((person) => story.owner_ids.includes(person.person.id))} story={story}/>)}
        </div>
      </div>
    </>
  );

  function getTrackerData() {
    Promise.all([props.pivotalTrackerRepository.getPeople(ptToken, ptProject), props.pivotalTrackerRepository.getOpenStories(ptToken, ptProject)]).then((results) => {
      setPeople(results[0]);
      setStories(results[1]);
    })
  }
}

export default App;
