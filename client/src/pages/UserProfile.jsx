import { useState } from "react";
import axios from "../utilities/axios";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({});

  useState(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get("/user/user-profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserProfile(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserProfile();
  });

  return;
}
