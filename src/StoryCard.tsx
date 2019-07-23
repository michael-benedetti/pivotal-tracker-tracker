import * as React from "react";
import {Card, Chip} from "@material-ui/core";
import {Person, Story} from "./interfaces";
import Draggable from 'react-draggable'

interface StoryCardProps {
  story: Story;
  pair: Person[];
}

function StoryCard(props: StoryCardProps) {
  let cardColor;
  switch (props.story.story_type) {
    case "feature":
      cardColor = "#ffd";
      break;
    case "chore":
      cardColor = "#ddd";
      break;
    case "bug":
      cardColor = "#fcc";
      break;
    default:
      cardColor = "#fff"
  }
  return (
    <Card elevation={5} style={{border: "1px solid #999", height: "200px", width: "200px", padding: "10px", background: cardColor}}>
      {props.story.name}
      <div>
        {props.pair.map((bro) =>
          <Draggable>
            <Chip label={bro.person.name}/>
          </Draggable>
          )}
      </div>
    </Card>
  )
};

export default StoryCard