import React from "react";
import { useParams } from "react-router";
import ReadMore from "../components/ReadMore/ReadMore";

const ReadMorePage: React.FC = () => {
  const params = useParams();
  return <ReadMore id={params.postID!.toString()} />;
};

export default ReadMorePage;
