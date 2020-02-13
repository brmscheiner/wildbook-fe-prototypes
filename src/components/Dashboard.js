import React from "react";
import Grid from "@material-ui/core/Grid";
import EncounterGrid from "./EncounterGrid";
import ProfileHeader from "./ProfileHeader";
import RecentActivity from "./RecentActivity";
import MatchProgressBanner from "./MatchProgressBanner";

export default function Dashboard() {
  return (
    <div>
      <MatchProgressBanner />
      <Grid container direction="row">
        <Grid item>
          <ProfileHeader />
        </Grid>
        <Grid item>
          <RecentActivity />
        </Grid>
      </Grid>
      <EncounterGrid />
    </div>
  );
}
