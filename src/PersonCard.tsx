import * as React from "react";
import {Card} from "@material-ui/core";

interface PersonCardProps {
  person: any;
}

function PersonCard(props: PersonCardProps) {
  return (
    <Card elevation={5} style={{border: "1px solid #999", height: "200px", width: "200px", padding: "10px", background: "#eef"}}>
      {props.person.name}
    </Card>
  )
};

export default PersonCard