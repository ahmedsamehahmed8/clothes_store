"use client";

import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks_store";
import Profile_card from "@/componets/e_com/profile/Profile_card";
import act_profile_slice from "@/store/profileslice/act/act_profile_slice";

function Profile() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(act_profile_slice());
  }, [dispatch]);
  const { profiles } = useAppSelector((state) => state.profileslice);

  console.log(profiles);

  return (
    <>
      {profiles.map((p) => {
        return (
          <>
            <Profile_card key={p.id} {...p} />
          </>
        );
      })}
    </>
  );
}

export default Profile;
