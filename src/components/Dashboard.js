import React from "react";
import EncounterGrid from "./EncounterGrid";
import ProfileHeader from "./ProfileHeader";
import RecentActivity from "./RecentActivity";
import MatchProgressBanner from "./MatchProgressBanner";

export default function Dashboard() {
  return (
    <div>
      <MatchProgressBanner />
      <ProfileHeader />
      <RecentActivity />
      <EncounterGrid />
    </div>
  );
}
