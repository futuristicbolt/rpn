import React from "react";
import HighlightsSection from "./HighlightsSection"
import highlights from "../../data/content/highlights.json";

const items = highlights.highlights;

export default {
    title: "Profile/HighlightsSection",
    component: HighlightsSection,
}

export const Default = () => 
    <HighlightsSection items={items} />

